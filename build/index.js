(()=>{var e,t={609:(e,t,o)=>{"use strict";var s=o(942),n=o.n(s);const i=window.lodash;var r=o.n(i);const a=window.wp.hooks,l=window.wp.element,c=window.wp.compose,u=window.wp.blocks,d=window.ReactJSXRuntime,p=["core/freeform","core/shortcode","core/nextpage"],b=["core/image","core/cover","core/group","core/columns","core/media-text"],h=["core/list"],k=["core/list"],m=["core/spacer","core/separator"],g=["core/columns","core/column"],f=["core/button"],w=["core/group","core/column","core/cover"],v=(0,c.createHigherOrderComponent)((e=>t=>{const{attributes:o}=t;return void 0===o.editorskit&&(o.editorskit=[]),(0,d.jsx)(l.Fragment,{children:(0,d.jsx)(e,{...t})})}),"withAttributes"),x=(0,c.createHigherOrderComponent)((e=>t=>{const{name:o,attributes:s}=t,{isHeightFullScreen:n,isFullWidth:i}=s;let r=t.wrapperProps,a={};return(0,u.hasBlockSupport)(o,"hasHeightFullScreen")&&n&&(a=Object.assign(a,{"data-editorskit-h-screen":1})),(0,u.hasBlockSupport)(o,"hasFullWidthDisplay")&&i&&(a=Object.assign(a,{"data-editorskit-w-full":1})),r={...r,...a},(0,d.jsx)(e,{...t,wrapperProps:r})}),"addEditorBlockAttributes");(0,a.addFilter)("blocks.registerBlockType","editorskit/custom/attributes",(function(e){return void 0===e.attributes||p.includes(e.name)||(e.attributes=Object.assign(e.attributes,{editorskit:{type:"object",default:{devices:!1,desktop:!0,tablet:!0,mobile:!0,loggedin:!0,loggedout:!0,acf_visibility:"",acf_field:"",acf_condition:"",acf_value:"",migrated:!1,unit_test:!1}}}),e.attributes=Object.assign(e.attributes,{blockOpts:{type:"object"}}),b.includes(e.name)&&(e.supports||(e.supports={}),e.supports=Object.assign(e.supports,{hasHeightFullScreen:!0})),(0,u.hasBlockSupport)(e,"hasHeightFullScreen")&&void 0!==e.attributes&&(e.attributes.isHeightFullScreen||(e.attributes=Object.assign(e.attributes,{isHeightFullScreen:{type:"boolean",default:!1}}))),f.includes(e.name)&&(e.supports||(e.supports={}),e.supports=Object.assign(e.supports,{hasFullWidthDisplay:!0})),(0,u.hasBlockSupport)(e,"hasFullWidthDisplay")&&void 0!==e.attributes&&(e.attributes.isFullWidth||(e.attributes=Object.assign(e.attributes,{isFullWidth:{type:"boolean",default:!1}}))),h.includes(e.name)&&(e.attributes||(e.attributes={}),e.attributes=Object.assign(e.attributes,{textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"string"}})),k.includes(e.name)&&(e.attributes||(e.attributes={}),e.attributes=Object.assign(e.attributes,{bulletColor:{type:"string"}})),g.includes(e.name)&&(e.attributes||(e.attributes={}),e.attributes=Object.assign(e.attributes,{backgroundColor:{type:"string"},customBackgroundColor:{type:"string"}})),m.includes(e.name)&&(e.supports||(e.supports={}),e.supports=Object.assign(e.supports,{anchor:!0})),(r()(e,"attributes.align")||r()(e,"attributes.textAlign"))&&(e.attributes=Object.assign(e.attributes,{hasAlignmentOption:{type:"boolean",default:!0}})),(w.includes(e.name)||(0,u.hasBlockSupport)(e,"editorsKitLinkToolbar"))&&void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{href:{type:"string"},linkDestination:{type:"string",default:"none"},opensInNewTab:{type:"boolean",default:!1},linkNoFollow:{type:"boolean",default:!1},linkSponsored:{type:"boolean",default:!1},hasAnimation:{type:"boolean",default:!1}}))),e})),(0,a.addFilter)("editor.BlockEdit","editorskit/attributes",v),(0,a.addFilter)("blocks.getSaveContent.extraProps","editorskit/applyExtraClass",(function(e,t,o){const{editorskit:s,isHeightFullScreen:i,isFullWidth:r,href:a,hasAnimation:l}=o;return void 0===s||p.includes(t.name)||(void 0!==s.id&&(e.className=n()(e.className,s.id)),void 0===s.desktop||s.desktop||(e.className=n()(e.className,"editorskit-no-desktop")),void 0===s.tablet||s.tablet||(e.className=n()(e.className,"editorskit-no-tablet")),void 0===s.mobile||s.mobile||(e.className=n()(e.className,"editorskit-no-mobile")),void 0!==s.tabletAlignment&&s.tabletAlignment&&(e.className=n()(e.className,"has-tablet-text-align-"+s.tabletAlignment)),void 0!==s.mobileAlignment&&s.mobileAlignment&&(e.className=n()(e.className,"has-mobile-text-align-"+s.mobileAlignment))),(0,u.hasBlockSupport)(t.name,"hasHeightFullScreen")&&i&&(e.className=n()(e.className,"h-screen")),(0,u.hasBlockSupport)(t.name,"hasFullWidthDisplay")&&r&&(e.className=n()(e.className,"ek-w-full")),(w.includes(t.name)||(0,u.hasBlockSupport)(t.name,"editorsKitLinkToolbar"))&&void 0!==a&&a&&(e.className=n()(e.className,"ek-linked-block"),void 0!==l&&l&&(e.className=n()(e.className,"ek-linked-block-animate"))),e})),(0,a.addFilter)("editor.BlockListBlock","editorskit/addEditorBlockAttributes",x);const j=window.wp.blockEditor,S=window.wp.components,y=window.wp.data,C=window.wp.i18n,N=window.wp.keycodes,F=()=>(0,d.jsx)(S.Icon,{icon:()=>(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24px",height:"24px",children:(0,d.jsx)("path",{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})})}),O=({onChangeUrl:e,url:t,opensInNewTab:o,linkNoFollow:s,linkSponsored:n,hasAnimation:i})=>{const[r,a]=(0,l.useState)(!1),c=(0,l.useCallback)((()=>{a(!0)})),[u,p]=(0,l.useState)(!1),[b,h]=(0,l.useState)(null),k=(0,l.useRef)(null),m=e=>{e.stopPropagation()},g=(0,l.useCallback)((()=>{p(!0)})),f=(0,l.useCallback)((()=>{p(!1)})),w=(0,l.useCallback)((()=>{h(null),f(),a(!1)})),v=(0,l.useCallback)((()=>e=>{const t=k.current;t&&t.contains(e.target)||(a(!1),h(null),f())})),x=(0,l.useCallback)((()=>t=>{b&&e({href:b}),f(),h(null),t.preventDefault()})),y=(0,l.useCallback)((()=>{e({href:""})})),O=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(S.ToggleControl,{label:(0,C.__)("Open in New Tab","block-options"),onChange:t=>{e({opensInNewTab:t})},checked:o}),(0,d.jsx)(S.ToggleControl,{label:(0,C.__)("No Follow","block-options"),onChange:t=>{e({linkNoFollow:t})},checked:s}),(0,d.jsx)(S.ToggleControl,{label:(0,C.__)("Sponsored","block-options"),onChange:t=>{e({linkSponsored:t})},checked:n}),(0,d.jsx)(S.ToggleControl,{label:(0,C.__)("Hover Animation","block-options"),onChange:t=>{e({hasAnimation:t})},checked:i})]}),_=null!==b?b:t;return(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(S.Button,{icon:F,className:"components-toolbar__control",label:t?(0,C.__)("Edit link","block-options"):(0,C.__)("Insert link","block-options"),"aria-expanded":r,onClick:c}),r&&(0,d.jsxs)(j.URLPopover,{onFocusOutside:v(),onClose:w,renderSettings:()=>O,children:[(!t||u)&&(0,d.jsx)(j.URLPopover.LinkEditor,{className:"block-editor-format-toolbar__link-container-content",value:_,onChangeInputValue:h,onKeyDown:e=>{[N.LEFT,N.DOWN,N.RIGHT,N.UP,N.BACKSPACE,N.ENTER].indexOf(e.keyCode)>-1&&e.stopPropagation()},onKeyPress:m,onSubmit:x(),autocompleteRef:k}),t&&!u&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j.URLPopover.LinkViewer,{className:"block-editor-format-toolbar__link-container-content",onKeyPress:m,url:t,onEditLinkClick:g}),(0,d.jsx)(S.Button,{icon:"no",label:(0,C.__)("Remove link","block-options"),onClick:y})]})]})]})};class _ extends l.Component{constructor(){super(...arguments),this.onSetHref=this.onSetHref.bind(this)}onSetHref(e){this.props.setAttributes(e)}render(){const{attributes:e}=this.props,{href:t,opensInNewTab:o,linkNoFollow:s,linkSponsored:n,hasAnimation:i}=e;return(0,d.jsx)(l.Fragment,{children:(0,d.jsx)(j.BlockControls,{children:(0,d.jsx)(S.ToolbarGroup,{children:(0,d.jsx)(O,{url:t||"",opensInNewTab:o||!1,linkNoFollow:s||!1,linkSponsored:n||!1,hasAnimation:i||!1,onChangeUrl:this.onSetHref})})})})}}const A=(0,c.compose)((0,y.withSelect)(((e,t)=>{const{attributes:o}=t;return{attributes:o,isDisabled:!1}})),(0,c.ifCondition)((e=>!e.isDisabled)),S.withSpokenMessages)(_),H=["core/group","core/column","core/cover"],B=(0,c.createHigherOrderComponent)((e=>t=>(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(e,{...t}),t.isSelected&&(H.includes(t.name)||(0,u.hasBlockSupport)(t.name,"editorsKitLinkToolbar"))&&(0,d.jsx)(A,{...t})]})),"withLinkToolbar");(0,a.addFilter)("editor.BlockEdit","editorskit/block-link-toolbar",B)},942:(e,t)=>{var o;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=r(e,i(o)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)s.call(e,o)&&e[o]&&(t=r(t,o));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},o={};function s(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,s),i.exports}s.m=t,e=[],s.O=(t,o,n,i)=>{if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],i=e[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(s.O).every((e=>s.O[e](o[l])))?o.splice(l--,1):(a=!1,i<r&&(r=i));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,n,i]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};s.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,r=o[0],a=o[1],l=o[2],c=0;if(r.some((t=>0!==e[t]))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)var u=l(s)}for(t&&t(o);c<r.length;c++)i=r[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(u)},o=self.webpackChunkgroup_link=self.webpackChunkgroup_link||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=s.O(void 0,[350],(()=>s(609)));n=s.O(n)})();