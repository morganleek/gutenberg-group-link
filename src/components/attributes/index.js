/**
 * External dependencies
 */
import classnames from 'classnames';
// import has from 'lodash';

/**
 * WordPress Dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { hasBlockSupport } from '@wordpress/blocks';

const blocksWithLinkToolbar = [ 'core/group', 'core/column', 'core/cover' ];

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 */
const addAttributes = ( settings ) => {
	if ( typeof settings.attributes === 'undefined' ) {
		return settings;
	}

	// Add LinkToolbar Support
	if (
		blocksWithLinkToolbar.includes( settings.name ) ||
		hasBlockSupport( settings, 'groupLinkLinkToolbar' )
	) {
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
			ariaLabel: {
				type: 'string',
				default: '',
			}
		} );
	}

	return settings;
};

/**
 * Add custom GroupLink attributes to selected blocks
 */
const withAttributes = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { attributes } = props;

		if ( typeof attributes.grouplink === 'undefined' ) {
			attributes.grouplink = [];
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
const applyExtraClass = ( extraProps, blockType, attributes ) => {
	const { href } = attributes;

	if (
		( blocksWithLinkToolbar.includes( blockType.name ) ||
			hasBlockSupport( blockType.name, 'groupLinkLinkToolbar' ) ) &&
		typeof href !== 'undefined' &&
		href
	) {
		extraProps.className = classnames(
			extraProps.className,
			'gl-linked-block'
		);
	}

	return extraProps;
};

const addEditorBlockAttributes = createHigherOrderComponent(
	( BlockListBlock ) => {
		return ( props ) => {
			// const { name, attributes } = props;
			// const { isHeightFullScreen, isFullWidth } = attributes;

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
	'grouplink/custom/attributes',
	addAttributes
);

addFilter( 'editor.BlockEdit', 'grouplink/attributes', withAttributes );

addFilter(
	'blocks.getSaveContent.extraProps',
	'grouplink/applyExtraClass',
	applyExtraClass
);

addFilter(
	'editor.BlockListBlock',
	'grouplink/addEditorBlockAttributes',
	addEditorBlockAttributes
);
