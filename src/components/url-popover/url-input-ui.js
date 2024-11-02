/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useRef, useState, useCallback } from '@wordpress/element';
import { Button, ToggleControl } from '@wordpress/components';
import { URLPopover } from '@wordpress/block-editor';
import { LEFT, RIGHT, UP, DOWN, BACKSPACE, ENTER } from '@wordpress/keycodes';
import { link, linkOff, pencil } from '@wordpress/icons';

import classNames from 'classnames';

const URLInputUI = ( {
	onChangeUrl,
	url,
	opensInNewTab,
	linkNoFollow,
	linkSponsored,
	// hasAnimation,
} ) => {
	const [ isOpen, setIsOpen ] = useState( false );
	const openLinkUI = useCallback( () => {
		setIsOpen( true );
	} );

	const [ isEditingLink, setIsEditingLink ] = useState( false );
	const [ urlInput, setUrlInput ] = useState( null );

	const autocompleteRef = useRef( null );

	const stopPropagation = ( event ) => {
		event.stopPropagation();
	};

	const stopPropagationRelevantKeys = ( event ) => {
		if (
			[ LEFT, DOWN, RIGHT, UP, BACKSPACE, ENTER ].indexOf(
				event.keyCode
			) > -1
		) {
			// Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
			event.stopPropagation();
		}
	};

	const startEditLink = useCallback( () => {
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

	const onFocusOutside = useCallback( () => {
		return ( event ) => {
			// The autocomplete suggestions list renders in a separate popover (in a portal),
			// so onFocusOutside fails to detect that a click on a suggestion occurred in the
			// LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
			// return to avoid the popover being closed.
			const autocompleteElement = autocompleteRef.current;
			if (
				autocompleteElement &&
				autocompleteElement.contains( event.target )
			) {
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
				onChangeUrl( { href: urlInput } );
			}
			stopEditLink();
			setUrlInput( null );
			event.preventDefault();
		};
	} );

	const onLinkRemove = useCallback( () => {
		onChangeUrl( {
			href: '',
		} );
	} );

	const onSetNewTab = ( value ) => {
		onChangeUrl( { opensInNewTab: value } );
	};

	const onSetLinkNoFollow = ( value ) => {
		onChangeUrl( { linkNoFollow: value } );
	};

	const onSetLinkSponsored = ( value ) => {
		onChangeUrl( { linkSponsored: value } );
	};

	// const onSetLinkAnimation = ( value ) => {
	// 	onChangeUrl( { hasAnimation: value } );
	// };

	const advancedOptions = (
		<>
			<ToggleControl
				label={ __( 'Open in New Tab', 'block-options' ) }
				onChange={ onSetNewTab }
				checked={ opensInNewTab }
			/>
			<ToggleControl
				label={ __( 'No Follow', 'block-options' ) }
				onChange={ onSetLinkNoFollow }
				checked={ linkNoFollow }
			/>
			<ToggleControl
				label={ __( 'Sponsored', 'block-options' ) }
				onChange={ onSetLinkSponsored }
				checked={ linkSponsored }
			/>
		</>
	);

	const linkEditorValue = urlInput !== null ? urlInput : url;

	return (
		<>
			<Button
				icon={ link }
				className={ classNames( "components-toolbar__control", { "is-pressed": url } ) }
				label={
					url
						? __( 'Edit link', 'block-options' )
						: __( 'Insert link', 'block-options' )
				}
				aria-expanded={ isOpen }
				onClick={ openLinkUI }
			/>
			{ isOpen && (
				<URLPopover
					onFocusOutside={ onFocusOutside() }
					onClose={ closeLinkUI }
					renderSettings={ () => advancedOptions }
				>
					{ ( ! url || isEditingLink ) && (
						<URLPopover.LinkEditor
							className="block-editor-format-toolbar__link-container-content"
							value={ linkEditorValue }
							onChangeInputValue={ setUrlInput }
							onKeyDown={ stopPropagationRelevantKeys }
							onKeyPress={ stopPropagation }
							onSubmit={ onSubmitLinkChange() }
							autocompleteRef={ autocompleteRef }
						/>
					) }
					{ url && ! isEditingLink && (
						<>
							<URLPopover.LinkViewer
								className="block-editor-format-toolbar__link-container-content"
								onKeyPress={ stopPropagation }
								url={ url }
								onEditLinkClick={ startEditLink }
							/>
							<Button
								icon={ linkOff }
								label={ __( 'Remove link', 'block-options' ) }
								onClick={ onLinkRemove }
							/>
						</>
					) }
				</URLPopover>
			) }
		</>
	);
};

export default URLInputUI;
