/**
 * Internal dependencies
 */
import LinkToolbar from './components/controls';

/**
 * WordPress Dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { hasBlockSupport } from '@wordpress/blocks';

const allowedBlocks = [ 'core/group', 'core/column', 'core/cover' ];

/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withLinkToolbar = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => (
		<>
			<BlockEdit { ...props } />
			{ props.isSelected &&
				( allowedBlocks.includes( props.name ) ||
					hasBlockSupport(
						props.name,
						'groupLinkLinkToolbar'
					) 
				) && <LinkToolbar { ...props } /> }
		</>
	);
}, 'withLinkToolbar' );

addFilter(
	'editor.BlockEdit',
	'grouplink/block-link-toolbar',
	withLinkToolbar
);
