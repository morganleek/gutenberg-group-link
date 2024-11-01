/**
 * External dependencies
 */
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment, useCallback, useState, useRef } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { compose, ifCondition } from "@wordpress/compose";
import { LEFT, RIGHT, UP, DOWN, BACKSPACE, ENTER } from "@wordpress/keycodes";
import { URLPopover } from "@wordpress/block-editor";
import { ToggleControl, Button, Path, SVG, NavigableMenu, MenuItem, withSpokenMessages } from "@wordpress/components";
import { LinkIcon } from "../../link-icon";

/**
 * Module constants
 */
const LINK_DESTINATION_NONE = 'none';
const LINK_DESTINATION_MEDIA = 'media';
const LINK_DESTINATION_ATTACHMENT = 'attachment';
const LINK_DESTINATION_CUSTOM = 'custom';

const stopPropagation = ( event ) => {
	event.stopPropagation();
};

const stopPropagationRelevantKeys = ( event ) => {
	if ( [ LEFT, DOWN, RIGHT, UP, BACKSPACE, ENTER ].indexOf( event.keyCode ) > -1 ) {
		// Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
		event.stopPropagation();
	}
};

const ImageURLInputUI = ( {
	advancedOptions,
	linkDestination,
	mediaLinks,
	onChangeUrl,
	url,
} ) => {
	const [ isOpen, setIsOpen ] = useState( false );
	const openLinkUI = useCallback( () => {
		setIsOpen( true );
	} );

	const [ isEditingLink, setIsEditingLink ] = useState( false );
	const [ urlInput, setUrlInput ] = useState( null );

	const startEditLink = useCallback( () => {
		if ( linkDestination === LINK_DESTINATION_MEDIA ||
			linkDestination === LINK_DESTINATION_ATTACHMENT
		) {
			setUrlInput( '' );
		}
		setIsEditingLink( true );
	} );
	const stopEditLink = useCallback( () => {
		setIsEditingLink( false );
	} );

	const closeLinkUI = useCallback( () => {
		setUrlInput( null );
		stopEditLink();
		setIsOpen( false );
	} );

	const autocompleteRef = useRef( null );

	const onClickOutside = useCallback( () => {
		return ( event ) => {
			// The autocomplete suggestions list renders in a separate popover (in a portal),
			// so onClickOutside fails to detect that a click on a suggestion occurred in the
			// LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
			// return to avoid the popover being closed.
			const autocompleteElement = autocompleteRef.current;
			if ( autocompleteElement && autocompleteElement.contains( event.target ) ) {
				return;
			}
			setIsOpen( false );
			setUrlInput( null );
			stopEditLink();
		};
	} );

	const onSubmitLinkChange = useCallback( () => {
		return ( event ) => {
			if ( urlInput ) {
				onChangeUrl( urlInput );
			}
			stopEditLink();
			setUrlInput( null );
			event.preventDefault();
		};
	} );

	const onLinkRemove = useCallback( () => {
		onChangeUrl( '' );
	} );
	const linkEditorValue = urlInput !== null ? urlInput : url;

	const urlLabel = (
		find( mediaLinks, [ 'linkDestination', linkDestination ] ) || {}
	).title;
	return (
		<Fragment>
			<Button
				icon={ LinkIcon }
				className="components-toolbar__control"
				label={ url ? __( 'Edit Media Link', 'block-options' ) : __( 'Media Link', 'block-options' ) }
				aria-expanded={ isOpen }
				onClick={ openLinkUI }
			/>
			{ isOpen && (
				<URLPopover
					onClickOutside={ onClickOutside() }
					onClose={ closeLinkUI }
					renderSettings={ () => advancedOptions }
					additionalControls={ ! linkEditorValue && (
						<NavigableMenu>
							{
								map( mediaLinks, ( link ) => (
									<MenuItem
										key={ link.linkDestination }
										icon={ link.icon }
										onClick={ () => {
											setUrlInput( null );
											onChangeUrl( link.url );
											stopEditLink();
										} }
									>
										{ link.title }
									</MenuItem>
								) )
							}
						</NavigableMenu>
					) }
				>
					{ ( ! url || isEditingLink ) && (
						<URLPopover.LinkEditor
							className="editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content"
							value={ linkEditorValue }
							onChangeInputValue={ setUrlInput }
							onKeyDown={ stopPropagationRelevantKeys }
							onKeyPress={ stopPropagation }
							onSubmit={ onSubmitLinkChange() }
							autocompleteRef={ autocompleteRef }
						/>
					) }
					{ ( url && ! isEditingLink ) && (
						<Fragment>
							<URLPopover.LinkViewer
								className="editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content"
								onKeyPress={ stopPropagation }
								url={ url }
								onEditLinkClick={ startEditLink }
								urlLabel={ urlLabel }
							/>
							<Button
								icon="no"
								label={ __( 'Remove Link', 'block-options' ) }
								onClick={ onLinkRemove }
							/>
						</Fragment>
					) }
				</URLPopover>
			) }
		</Fragment>
	);
};

/**
 * Typography Component
 */
class Controls extends Component {
	constructor() {
		super( ...arguments );

		this.onSetNewTab = this.onSetNewTab.bind( this );
		this.getLinkDestinations = this.getLinkDestinations.bind( this );
		this.onSetHref = this.onSetHref.bind( this );

		this.state = {
			isVisible: false,
		};
	}

	onSetHref( value ) {
		const { attributes } = this.props;
		const { linkDestination } = attributes;
		const linkDestinations = this.getLinkDestinations();

		let linkDestinationInput;
		if ( ! value ) {
			linkDestinationInput = LINK_DESTINATION_NONE;
		} else {
			linkDestinationInput = (
				find( linkDestinations, ( destination ) => {
					return destination.url === value;
				} ) ||
				{ linkDestination: LINK_DESTINATION_CUSTOM }
			).linkDestination;
		}
		if ( linkDestination !== linkDestinationInput ) {
			this.props.setAttributes( {
				linkDestination: linkDestinationInput,
				href: value,
			} );
			return;
		}
		this.props.setAttributes( { href: value } );
	}

	onSetNewTab( value ) {
		const linkTarget = value ? '_blank' : undefined;

		this.props.setAttributes( {
			linkTarget,
		} );
	}

	getLinkDestinations() {
		const { image } = this.props;
		return [
			{
				linkDestination: LINK_DESTINATION_MEDIA,
				title: __( 'Media File', 'block-options' ),
				url: image.source_url,
				icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z" /><Path d="m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z" /></SVG>,
			},
			{
				linkDestination: LINK_DESTINATION_ATTACHMENT,
				title: __( 'Attachment Page', 'block-options' ),
				url: image.link,
				icon: <SVG xmlns="http://www.w3.org/2000/SVG" viewBox="0 0 24 24"><Path d="M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z" /></SVG>,
			},
		];
	}

	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			href,
			linkDestination,
			linkTarget,
			linkNoFollow,
			linkSponsored,
			linkFullBlock,
		} = attributes;

		return (
			<Fragment>
				<ImageURLInputUI
					url={ href || '' }
					onChangeUrl={ this.onSetHref }
					mediaLinks={ this.getLinkDestinations() }
					linkDestination={ linkDestination }
					advancedOptions={
						<Fragment>
							<ToggleControl
								label={ __( 'Open in New Tab', 'block-options' ) }
								onChange={ this.onSetNewTab }
								checked={ linkTarget === '_blank' } />

							<ToggleControl
								label={ __( 'No follow', 'block-options' ) }
								onChange={ () => {
									setAttributes( { linkNoFollow: ! linkNoFollow } );
								} }
								checked={ !! linkNoFollow } />

							<ToggleControl
								label={ __( 'Sponsored', 'block-options' ) }
								onChange={ () => {
									setAttributes( { linkSponsored: ! linkSponsored } );
								} }
								checked={ !! linkSponsored } />

							<ToggleControl
								label={ __( 'Apply link to whole block', 'block-options' ) }
								onChange={ () => {
									setAttributes( { linkFullBlock: ! linkFullBlock } );
								} }
								checked={ !! linkFullBlock } />
						</Fragment>
					}
				/>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const { getMedia } = select( 'core' );
		const { mediaId } = props.attributes;

		return {
			image: mediaId ? getMedia( mediaId ) : null,
			isDisabled: false // select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitMediaTextLinkOptions' ),
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled && props.image && props.attributes.mediaType === 'image' && URLPopover.LinkEditor !== undefined;
	} ),
	withSpokenMessages
)( Controls );
