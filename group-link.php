<?php
/**
 * Plugin Name:       Group Link
 * Description:       Add links to Group, Cover and Column blocks
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           1.0.1
 * Author:            Morgan Leek and Munir Kamal
 * License:           GPL-2.0-or-later
 * License URI:       https://github.com/morganleek/gutenberg-group-link
 * Text Domain:       group-link
 *
 * @package GroupLink
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'GROUPLINK_VERSION', '1.0.0' );

class GroupLink_Block_Assets {
	private static $instance;

	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new GroupLink_Block_Assets();
		}
	}

	private $url;
	private $version;

	private function __construct() {
		$this->url = untrailingslashit( plugins_url( '', __FILE__ ) );
		$this->version = GROUPLINK_VERSION;

		add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );
		add_action( 'init', array( $this, 'editor_assets' ), 9999 );
		add_action( 'admin_enqueue_scripts', array( $this, 'filter_admin_assets' ) );
	}

	public function block_assets() {
		// Styles.
		wp_enqueue_style(
			'grouplink-frontend',
			$this->url . '/build/style-index.css',
			array(),
			'new'
		);
	}

	public function editor_assets() {

		if ( ! is_admin() ) {
			return;
		}

		if ( ! $this->is_edit_or_new_admin_page() ) { // load on allowed pages only.
			return;
		}

		// Styles.
		wp_enqueue_style(
			'grouplink-editor',
			$this->url . '/build/index.css',
			array(),
			$this->version
		);

		// Scripts.
		wp_enqueue_script(
			'grouplink-editor',
			$this->url . '/build/index.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-data', 'wp-plugins', 'wp-components', 'wp-edit-post', 'wp-api', 'wp-editor', 'wp-hooks', 'lodash' ),
			time(),
			false
		);

	}

	public function filter_admin_assets() {
		global $current_screen;

		// Check if Gutenberg editor is loaded on the screen.
		if ( ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) ) {
			return;
		}

		// Remove EditorsKit JS file when post is not using Gutenberg.
		wp_dequeue_script( 'grouplink-editor' );
		// wp_dequeue_script( 'grouplink-devtools' );
	}

	function is_edit_or_new_admin_page() { // phpcs:ignore
		global $pagenow;
		return (is_admin() && ($pagenow === 'post.php' || $pagenow === 'post-new.php')); // phpcs:ignore
	}

}

GroupLink_Block_Assets::register();


// Place link in after item saved
class GroupLink_Render_Block {
	private static $instance;

	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new GroupLink_Render_Block();
		}
	}

	private $url;
	private $version;
	private $slug;
	private $attributes;

	private function __construct() {
		$this->version = GROUPLINK_VERSION;
		$this->slug    = 'editorskit';
		$this->url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		if ( ! is_admin() ) {
			add_action( 'render_block', array( $this, 'render_block' ), 5, 2 );
		}

		add_filter( 'block_lab_get_block_attributes', array( $this, 'block_lab_get_block_attributes' ), 10, 3 );
	}

	private function block_attributes( $block ) {
		if ( isset( $block['attrs'] ) && isset( $block['attrs']['editorskit'] ) && is_array( $block['attrs'] ) ) {

			return $block['attrs']['editorskit'];
		}

		return array();
	}

	private function render_link_toolbar( $block_content, $block ) {
		if ( isset( $block['blockName'] ) && ( in_array( $block['blockName'], array( 'core/group', 'core/column', 'core/cover' ) ) ) ) {
			$attributes = $block['attrs'];

			if ( isset( $attributes['href'] ) && ! empty( $attributes['href'] ) ) {
				$linked = '<a href="' . esc_url( $attributes['href'] ) . '" class="editorskit-block-link"';
				$rel    = ' rel="';

				if ( isset( $attributes['opensInNewTab'] ) && $attributes['opensInNewTab'] ) {
					$linked .= ' target="_blank"';
					$rel    .= ' noreferrer noopener';
				}

				if ( isset( $attributes['linkNoFollow'] ) && $attributes['linkNoFollow'] ) {
					$rel .= ' nofollow';
				}

				if ( isset( $attributes['linkSponsored'] ) && $attributes['linkSponsored'] ) {
					$rel .= ' sponsored';
				}

				$rel    .= '"';
				$linked .= $rel;

				$linked .= '></a>';

				$reg   = '~(.*)</div>~su';
				$subst = '${1}' . $linked . '</div>';

				$block_content = preg_replace( $reg, $subst, $block_content );
			}
		}

		return $block_content;
	}

	public function render_block( $block_content, $block ) {
		$this->attributes = $this->block_attributes( $block );

		// Add Block Link.
		$block_content = $this->render_link_toolbar( $block_content, $block );

		return $block_content;
	}

	public function block_lab_get_block_attributes( $attributes, $block ) {
		if ( ! isset( $attributes['editorskit'] ) ) {
			$attributes['editorskit'] = array(
				'type' => 'object',
			);
		}

		return $attributes;
	}

}

GroupLink_Render_Block::register();