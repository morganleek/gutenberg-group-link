/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	console.log( 'hello edit' );
	return (
		<p { ...useBlockProps() }>
			{ __( 'Group Link – hello from the editor!', 'group-link' ) }
		</p>
	);
}

// /**
//  * Internal dependencies
//  */
// import LinkToolbar from './components/controls';

// /**
//  * WordPress Dependencies
//  */
// import { addFilter } from '@wordpress/hooks';
// import { Fragment } from '@wordpress/element';
// import { createHigherOrderComponent } from '@wordpress/compose';
// import { hasBlockSupport } from '@wordpress/blocks';

// const allowedBlocks = [ 'core/group', 'core/column', 'core/cover' ];

// /**
//  * Override the default edit UI to include a new block toolbar control
//  *
//  * @param {Function} BlockEdit Original component.
//  * @return {string} Wrapped component.
//  */
// const withLinkToolbar = createHigherOrderComponent( ( BlockEdit ) => {
// 	return ( props ) => {
// 		return (
// 			<Fragment>
// 				<BlockEdit { ...props } />
// 				{ props.isSelected && ( allowedBlocks.includes( props.name ) || hasBlockSupport( props.name, 'editorsKitLinkToolbar' ) ) && <LinkToolbar { ...{ ...props } } /> }
// 			</Fragment>
// 		);
// 	};
// }, 'withLinkToolbar' );

// addFilter(
// 	'editor.BlockEdit',
// 	'editorskit/block-link-toolbar',
// 	withLinkToolbar
// );