/**
 * WordPress dependencies
 */
import { Component, Fragment } from "@wordpress/element";
import { BlockControls } from "@wordpress/block-editor";
import { ToolbarGroup, withSpokenMessages } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { compose, ifCondition } from "@wordpress/compose";

/**
 * Internal dependencies
 */
import URLInputUI from '../../url-popover/url-input-ui';

class withLinkToolbar extends Component {
	constructor() {
		super( ...arguments );

		this.onSetHref = this.onSetHref.bind( this );
	}

	onSetHref( props ) {
		this.props.setAttributes( props );
	}

	render() {
		const {
			attributes,
		} = this.props;

		const {
			href,
			opensInNewTab,
			linkNoFollow,
			linkSponsored,
			hasAnimation,
		} = attributes;

		return (
			<Fragment>
				<BlockControls>
					<ToolbarGroup>
						<URLInputUI
							url={ href || '' }
							opensInNewTab={ opensInNewTab || false }
							linkNoFollow={ linkNoFollow || false }
							linkSponsored={ linkSponsored || false }
							hasAnimation={ hasAnimation || false }
							onChangeUrl={ this.onSetHref }
						/>
					</ToolbarGroup>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const {
			attributes,
		} = props;

		return {
			attributes,
			isDisabled: false // select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitLinkBlockToolbarOptions' ),
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages
)( withLinkToolbar );
