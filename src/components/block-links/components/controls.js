/**
 * WordPress dependencies
 */
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, withSpokenMessages } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { compose, ifCondition } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import URLInputUI from '../../url-popover/url-input-ui';

const withLinkToolbar = ( { attributes, setAttributes } ) => {
	const { href, opensInNewTab, linkNoFollow, linkSponsored, ariaLabel } = attributes;

	const onUpdateLink = ( newProps ) => {
		setAttributes( { ...attributes, ...newProps } );
	};

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<URLInputUI
						url={ href || '' }
						opensInNewTab={ opensInNewTab || false }
						linkNoFollow={ linkNoFollow || false }
						linkSponsored={ linkSponsored || false }
						ariaLabel={ ariaLabel || "" }
						onChangeUrl={ onUpdateLink }
					/>
				</ToolbarGroup>
			</BlockControls>
		</>
	);
};

export default compose(
	withSelect( ( select, props ) => {
		const { attributes } = props;

		return {
			attributes,
			isDisabled: false,
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages
)( withLinkToolbar );
