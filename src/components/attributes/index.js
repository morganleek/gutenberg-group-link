/**
 * External dependencies
 */
import classnames from 'classnames';
// import has from 'lodash';

/**
 * WordPress Dependencies
 */
import { addFilter } from '@wordpress/hooks';
// import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { hasBlockSupport } from '@wordpress/blocks';

const blocksWithLinkToolbar = [ 'core/group', 'core/column', 'core/cover' ];

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 */
function addAttributes( settings ) {
	if (
		typeof settings.attributes !== 'undefined'
	) {
		// Add LinkToolbar Support
		if (
			blocksWithLinkToolbar.includes( settings.name ) ||
			hasBlockSupport( settings, 'editorsKitLinkToolbar' )
		) {
			if ( typeof settings.attributes !== 'undefined' ) {
				settings.attributes = Object.assign( settings.attributes, {
					href: {
						type: 'string',
					},
					linkDestination: {
						type: 'string',
						default: 'none',
					},
					opensInNewTab: {
						type: 'boolean',
						default: false,
					},
					linkNoFollow: {
						type: 'boolean',
						default: false,
					},
					linkSponsored: {
						type: 'boolean',
						default: false,
					},
					hasAnimation: {
						type: 'boolean',
						default: false,
					},
				} );
			}
		}
	}

	return settings;
}

/**
 * Add custom EditorsKit attributes to selected blocks
 */
const withAttributes = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { attributes } = props;

		if ( typeof attributes.editorskit === 'undefined' ) {
			attributes.editorskit = [];
		}

		return (
			<>
				<BlockEdit { ...props } />
			</>
		);
	};
}, 'withAttributes' );

/**
 * Override props assigned to save component to inject atttributes
 */
function applyExtraClass( extraProps, blockType, attributes ) {
	const { href, hasAnimation } = attributes;

	if (
		( blocksWithLinkToolbar.includes( blockType.name ) ||
			hasBlockSupport( blockType.name, 'editorsKitLinkToolbar' ) ) &&
		typeof href !== 'undefined' &&
		href
	) {
		extraProps.className = classnames(
			extraProps.className,
			'ek-linked-block'
		);

		if ( typeof hasAnimation !== 'undefined' && hasAnimation ) {
			extraProps.className = classnames(
				extraProps.className,
				'ek-linked-block-animate'
			);
		}
	}

	return extraProps;
}

const addEditorBlockAttributes = createHigherOrderComponent(
	( BlockListBlock ) => {
		return ( props ) => {
			const { name, attributes } = props;
			const { isHeightFullScreen, isFullWidth } = attributes;

			let wrapperProps = props.wrapperProps;
			let customData = {};

			wrapperProps = {
				...wrapperProps,
				...customData,
			};

			return (
				<BlockListBlock { ...props } wrapperProps={ wrapperProps } />
			);
		};
	},
	'addEditorBlockAttributes'
);

addFilter(
	'blocks.registerBlockType',
	'editorskit/custom/attributes',
	addAttributes
);

addFilter( 'editor.BlockEdit', 'editorskit/attributes', withAttributes );

addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/applyExtraClass',
	applyExtraClass
);

addFilter(
	'editor.BlockListBlock',
	'editorskit/addEditorBlockAttributes',
	addEditorBlockAttributes
);
