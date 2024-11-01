/**
 * Internal dependencies
 */
import Controls from './controls';

/**
 * WordPress dependencies
 */
// import { Component, Fragment } from "@wordpress/element";
// import { Toolbar } from "@wordpress/components";
import { BlockControls } from "@wordpress/blockEditor";
import { ToolbarGroup } from "@wordpress/components";

export const LinkToolbar = ( props ) => (
	<>
		<BlockControls>
			<ToolbarGroup>
				<Controls { ...props } />
			</ToolbarGroup>
		</BlockControls>
	</>
);

export default LinkToolbar;

// class LinkToolbar extends Component {
// 	render() {
// 		return (
// 			<Fragment>
// 				<BlockControls>
// 					<ToolbarGroup>
// 						<Controls { ...this.props } />
// 					</ToolbarGroup>
// 				</BlockControls>
// 			</Fragment>
// 		);
// 	}
// }

// export default LinkToolbar;
