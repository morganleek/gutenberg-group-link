/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/block-links/components/controls.js":
/*!***********************************************************!*\
  !*** ./src/components/block-links/components/controls.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _url_popover_url_input_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../url-popover/url-input-ui */ "./src/components/url-popover/url-input-ui.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


class withLinkToolbar extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.onSetHref = this.onSetHref.bind(this);
  }
  onSetHref(props) {
    this.props.setAttributes(props);
  }
  render() {
    const {
      attributes
    } = this.props;
    const {
      href,
      opensInNewTab,
      linkNoFollow,
      linkSponsored,
      hasAnimation
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_url_popover_url_input_ui__WEBPACK_IMPORTED_MODULE_5__["default"], {
            url: href || '',
            opensInNewTab: opensInNewTab || false,
            linkNoFollow: linkNoFollow || false,
            linkSponsored: linkSponsored || false,
            hasAnimation: hasAnimation || false,
            onChangeUrl: this.onSetHref
          })
        })
      })
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)((select, props) => {
  const {
    attributes
  } = props;
  return {
    attributes,
    isDisabled: false // select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitLinkBlockToolbarOptions' ),
  };
}), (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.ifCondition)(props => {
  return !props.isDisabled;
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.withSpokenMessages)(withLinkToolbar));

/***/ }),

/***/ "./src/components/block-links/index.js":
/*!*********************************************!*\
  !*** ./src/components/block-links/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/components/block-links/components/controls.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Internal dependencies
 */


/**
 * WordPress Dependencies
 */





const allowedBlocks = ['core/group', 'core/column', 'core/cover'];

/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withLinkToolbar = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
        ...props
      }), props.isSelected && (allowedBlocks.includes(props.name) || (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.hasBlockSupport)(props.name, 'editorsKitLinkToolbar')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_controls__WEBPACK_IMPORTED_MODULE_0__["default"], {
        ...props
      })]
    });
  };
}, 'withLinkToolbar');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'editorskit/block-link-toolbar', withLinkToolbar);

/***/ }),

/***/ "./src/components/media-text-link/components/controls.js":
/*!***************************************************************!*\
  !*** ./src/components/media-text-link/components/controls.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Module constants
 */

const LINK_DESTINATION_NONE = 'none';
const LINK_DESTINATION_MEDIA = 'media';
const LINK_DESTINATION_ATTACHMENT = 'attachment';
const LINK_DESTINATION_CUSTOM = 'custom';
const stopPropagation = event => {
  event.stopPropagation();
};
const stopPropagationRelevantKeys = event => {
  if ([_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.LEFT, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.DOWN, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.RIGHT, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.UP, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.BACKSPACE, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER].indexOf(event.keyCode) > -1) {
    // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
    event.stopPropagation();
  }
};
const ImageURLInputUI = ({
  advancedOptions,
  linkDestination,
  mediaLinks,
  onChangeUrl,
  url
}) => {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const openLinkUI = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setIsOpen(true);
  });
  const [isEditingLink, setIsEditingLink] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [urlInput, setUrlInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const startEditLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (linkDestination === LINK_DESTINATION_MEDIA || linkDestination === LINK_DESTINATION_ATTACHMENT) {
      setUrlInput('');
    }
    setIsEditingLink(true);
  });
  const stopEditLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setIsEditingLink(false);
  });
  const closeLinkUI = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setUrlInput(null);
    stopEditLink();
    setIsOpen(false);
  });
  const autocompleteRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const onClickOutside = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    return event => {
      // The autocomplete suggestions list renders in a separate popover (in a portal),
      // so onClickOutside fails to detect that a click on a suggestion occurred in the
      // LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
      // return to avoid the popover being closed.
      const autocompleteElement = autocompleteRef.current;
      if (autocompleteElement && autocompleteElement.contains(event.target)) {
        return;
      }
      setIsOpen(false);
      setUrlInput(null);
      stopEditLink();
    };
  });
  const onSubmitLinkChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    return event => {
      if (urlInput) {
        onChangeUrl(urlInput);
      }
      stopEditLink();
      setUrlInput(null);
      event.preventDefault();
    };
  });
  const onLinkRemove = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    onChangeUrl('');
  });
  const linkEditorValue = urlInput !== null ? urlInput : url;
  const urlLabel = (find(mediaLinks, ['linkDestination', linkDestination]) || {}).title;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
      icon: "admin-links",
      className: "components-toolbar__control",
      label: url ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Media Link', 'block-options') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media Link', 'block-options'),
      "aria-expanded": isOpen,
      onClick: openLinkUI
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.URLPopover, {
      onClickOutside: onClickOutside(),
      onClose: closeLinkUI,
      renderSettings: () => advancedOptions,
      additionalControls: !linkEditorValue && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.NavigableMenu, {
        children: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(mediaLinks, link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
          icon: link.icon,
          onClick: () => {
            setUrlInput(null);
            onChangeUrl(link.url);
            stopEditLink();
          },
          children: link.title
        }, link.linkDestination))
      }),
      children: [(!url || isEditingLink) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.URLPopover.LinkEditor, {
        className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
        value: linkEditorValue,
        onChangeInputValue: setUrlInput,
        onKeyDown: stopPropagationRelevantKeys,
        onKeyPress: stopPropagation,
        onSubmit: onSubmitLinkChange(),
        autocompleteRef: autocompleteRef
      }), url && !isEditingLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.URLPopover.LinkViewer, {
          className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
          onKeyPress: stopPropagation,
          url: url,
          onEditLinkClick: startEditLink,
          urlLabel: urlLabel
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
          icon: "no",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Link', 'block-options'),
          onClick: onLinkRemove
        })]
      })]
    })]
  });
};

/**
 * Typography Component
 */
class Controls extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super(...arguments);
    this.onSetNewTab = this.onSetNewTab.bind(this);
    this.getLinkDestinations = this.getLinkDestinations.bind(this);
    this.onSetHref = this.onSetHref.bind(this);
    this.state = {
      isVisible: false
    };
  }
  onSetHref(value) {
    const {
      attributes
    } = this.props;
    const {
      linkDestination
    } = attributes;
    const linkDestinations = this.getLinkDestinations();
    let linkDestinationInput;
    if (!value) {
      linkDestinationInput = LINK_DESTINATION_NONE;
    } else {
      linkDestinationInput = (find(linkDestinations, destination => {
        return destination.url === value;
      }) || {
        linkDestination: LINK_DESTINATION_CUSTOM
      }).linkDestination;
    }
    if (linkDestination !== linkDestinationInput) {
      this.props.setAttributes({
        linkDestination: linkDestinationInput,
        href: value
      });
      return;
    }
    this.props.setAttributes({
      href: value
    });
  }
  onSetNewTab(value) {
    const linkTarget = value ? '_blank' : undefined;
    this.props.setAttributes({
      linkTarget
    });
  }
  getLinkDestinations() {
    const {
      image
    } = this.props;
    return [{
      linkDestination: LINK_DESTINATION_MEDIA,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media File', 'block-options'),
      url: image.source_url,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Path, {
          d: "M0,0h24v24H0V0z",
          fill: "none"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Path, {
          d: "m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Path, {
          d: "m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"
        })]
      })
    }, {
      linkDestination: LINK_DESTINATION_ATTACHMENT,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Attachment Page', 'block-options'),
      url: image.link,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Path, {
          d: "M0 0h24v24H0V0z",
          fill: "none"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Path, {
          d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"
        })]
      })
    }];
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      href,
      linkDestination,
      linkTarget,
      linkNoFollow,
      linkSponsored,
      linkFullBlock
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ImageURLInputUI, {
        url: href || '',
        onChangeUrl: this.onSetHref,
        mediaLinks: this.getLinkDestinations(),
        linkDestination: linkDestination,
        advancedOptions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open in New Tab', 'block-options'),
            onChange: this.onSetNewTab,
            checked: linkTarget === '_blank'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No follow', 'block-options'),
            onChange: () => {
              setAttributes({
                linkNoFollow: !linkNoFollow
              });
            },
            checked: !!linkNoFollow
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sponsored', 'block-options'),
            onChange: () => {
              setAttributes({
                linkSponsored: !linkSponsored
              });
            },
            checked: !!linkSponsored
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apply link to whole block', 'block-options'),
            onChange: () => {
              setAttributes({
                linkFullBlock: !linkFullBlock
              });
            },
            checked: !!linkFullBlock
          })]
        })
      })
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)((select, props) => {
  const {
    getMedia
  } = select('core');
  const {
    mediaId
  } = props.attributes;
  return {
    image: mediaId ? getMedia(mediaId) : null,
    isDisabled: false // select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitMediaTextLinkOptions' ),
  };
}), (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.ifCondition)(props => {
  return !props.isDisabled && props.image && props.attributes.mediaType === 'image' && _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.URLPopover.LinkEditor !== undefined;
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_7__.withSpokenMessages)(Controls));

/***/ }),

/***/ "./src/components/media-text-link/components/toolbar.js":
/*!**************************************************************!*\
  !*** ./src/components/media-text-link/components/toolbar.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkToolbar: () => (/* binding */ LinkToolbar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/components/media-text-link/components/controls.js");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
// import { Component, Fragment } from "@wordpress/element";
// import { Toolbar } from "@wordpress/components";



const LinkToolbar = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_controls__WEBPACK_IMPORTED_MODULE_0__["default"], {
        ...props
      })
    })
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkToolbar);

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

/***/ }),

/***/ "./src/components/url-popover/url-input-ui.js":
/*!****************************************************!*\
  !*** ./src/components/url-popover/url-input-ui.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */






const URLInputUI = ({
  onChangeUrl,
  url,
  opensInNewTab,
  linkNoFollow,
  linkSponsored,
  hasAnimation
}) => {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const openLinkUI = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setIsOpen(true);
  });
  const [isEditingLink, setIsEditingLink] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [urlInput, setUrlInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const autocompleteRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const stopPropagation = event => {
    event.stopPropagation();
  };
  const stopPropagationRelevantKeys = event => {
    if ([_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.LEFT, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.DOWN, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.RIGHT, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.UP, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.BACKSPACE, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER].indexOf(event.keyCode) > -1) {
      // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
      event.stopPropagation();
    }
  };
  const startEditLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setIsEditingLink(true);
  });
  const stopEditLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setIsEditingLink(false);
  });
  const closeLinkUI = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setUrlInput(null);
    stopEditLink();
    setIsOpen(false);
  });
  const onFocusOutside = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    return event => {
      // The autocomplete suggestions list renders in a separate popover (in a portal),
      // so onFocusOutside fails to detect that a click on a suggestion occurred in the
      // LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
      // return to avoid the popover being closed.
      const autocompleteElement = autocompleteRef.current;
      if (autocompleteElement && autocompleteElement.contains(event.target)) {
        return;
      }
      setIsOpen(false);
      setUrlInput(null);
      stopEditLink();
    };
  });
  const onSubmitLinkChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    return event => {
      if (urlInput) {
        onChangeUrl({
          href: urlInput
        });
      }
      stopEditLink();
      setUrlInput(null);
      event.preventDefault();
    };
  });
  const onLinkRemove = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    onChangeUrl({
      href: ''
    });
  });
  const onSetNewTab = value => {
    onChangeUrl({
      opensInNewTab: value
    });
  };
  const onSetLinkNoFollow = value => {
    onChangeUrl({
      linkNoFollow: value
    });
  };
  const onSetLinkSponsored = value => {
    onChangeUrl({
      linkSponsored: value
    });
  };
  const onSetLinkAnimation = value => {
    onChangeUrl({
      hasAnimation: value
    });
  };
  const advancedOptions = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in New Tab', 'block-options'),
      onChange: onSetNewTab,
      checked: opensInNewTab
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Follow', 'block-options'),
      onChange: onSetLinkNoFollow,
      checked: linkNoFollow
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sponsored', 'block-options'),
      onChange: onSetLinkSponsored,
      checked: linkSponsored
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover Animation', 'block-options'),
      onChange: onSetLinkAnimation,
      checked: hasAnimation
    })]
  });
  const linkEditorValue = urlInput !== null ? urlInput : url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      icon: "admin-links",
      className: "components-toolbar__control",
      label: url ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edit link', 'block-options') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insert link', 'block-options'),
      "aria-expanded": isOpen,
      onClick: openLinkUI
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.URLPopover, {
      onFocusOutside: onFocusOutside(),
      onClose: closeLinkUI,
      renderSettings: () => advancedOptions,
      children: [(!url || isEditingLink) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.URLPopover.LinkEditor, {
        className: "block-editor-format-toolbar__link-container-content",
        value: linkEditorValue,
        onChangeInputValue: setUrlInput,
        onKeyDown: stopPropagationRelevantKeys,
        onKeyPress: stopPropagation,
        onSubmit: onSubmitLinkChange(),
        autocompleteRef: autocompleteRef
      }), url && !isEditingLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.URLPopover.LinkViewer, {
          className: "block-editor-format-toolbar__link-container-content",
          onKeyPress: stopPropagation,
          url: url,
          onEditLinkClick: startEditLink
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          icon: "no",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove link', 'block-options'),
          onClick: onLinkRemove
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URLInputUI);

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["keycodes"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_media_text_link_components_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/media-text-link/components/toolbar */ "./src/components/media-text-link/components/toolbar.js");
/* harmony import */ var _components_block_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/block-links */ "./src/components/block-links/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
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







const allowedBlocks = ['core/group', 'core/column', 'core/cover'];

/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withLinkToolbar = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
        ...props
      }), props.isSelected && (allowedBlocks.includes(props.name) || (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'editorsKitLinkToolbar')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_media_text_link_components_toolbar__WEBPACK_IMPORTED_MODULE_4__.LinkToolbar, {
        ...props
      })]
    });
  };
}, 'withLinkToolbar');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'editorskit/block-link-toolbar', withLinkToolbar);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map