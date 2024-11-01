// /**
//  * Registers a new block provided a unique name and an object defining its behavior.
//  *
//  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
//  */
// import { registerBlockType } from '@wordpress/blocks';

// /**
//  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
//  * All files containing `style` keyword are bundled together. The code used
//  * gets applied both to the front of your site and to the editor.
//  *
//  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
//  */
// import './style.scss';

// /**
//  * Internal dependencies
//  */
// import Edit from './edit';
// import save from './save';
// import metadata from './block.json';

// /**
//  * Every block starts by registering a new block type definition.
//  *
//  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
//  */
// registerBlockType( metadata.name, {
// 	/**
// 	 * @see ./edit.js
// 	 */
// 	edit: Edit,

// 	/**
// 	 * @see ./save.js
// 	 */
// 	save,
// } );

/**
 * WordPress Dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { hasBlockSupport } from '@wordpress/blocks';

import { LinkToolbar } from './components/media-text-link/components/toolbar';
import "./components/block-links";

const allowedBlocks = [ 'core/group', 'core/column', 'core/cover' ];

/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withLinkToolbar = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ props.isSelected && ( allowedBlocks.includes( props.name ) || hasBlockSupport( props.name, 'editorsKitLinkToolbar' ) ) && <LinkToolbar { ...{ ...props } } /> }
			</Fragment>
		);
	};
}, 'withLinkToolbar' );

addFilter(
	'editor.BlockEdit',
	'editorskit/block-link-toolbar',
	withLinkToolbar
);