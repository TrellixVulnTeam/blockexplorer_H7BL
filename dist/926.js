(self.webpackChunkblockexplorer=self.webpackChunkblockexplorer||[]).push([[926],{
/***/750:
/***/(e,t,n)=>{"use strict";
// ESM COMPAT FLAG
n.r(t),
// EXPORTS
n.d(t,{afterMain:()=>/* reexport */x,afterRead:()=>/* reexport */b,afterWrite:()=>/* reexport */C,applyStyles:()=>/* reexport */L,arrow:()=>/* reexport */Q,auto:()=>/* reexport */a,basePlacements:()=>/* reexport */l,beforeMain:()=>/* reexport */_,beforeRead:()=>/* reexport */v,beforeWrite:()=>/* reexport */E,bottom:()=>/* reexport */r,clippingParents:()=>/* reexport */f,computeStyles:()=>/* reexport */ee,createPopper:()=>/* reexport */Oe,createPopperBase:()=>/* reexport */De,createPopperLite:()=>/* reexport */Ne,detectOverflow:()=>/* reexport */me,end:()=>/* reexport */u,eventListeners:()=>/* reexport */ne,flip:()=>/* reexport */ve,hide:()=>/* reexport */_e,left:()=>/* reexport */s,main:()=>/* reexport */w,modifierPhases:()=>/* reexport */A,offset:()=>/* reexport */we,placements:()=>/* reexport */m,popper:()=>/* reexport */h,popperGenerator:()=>/* reexport */Se,popperOffsets:()=>/* reexport */xe,preventOverflow:()=>/* reexport */Ee,read:()=>/* reexport */y,reference:()=>/* reexport */p,right:()=>/* reexport */o,start:()=>/* reexport */c,top:()=>/* reexport */i,variationPlacements:()=>/* reexport */g,viewport:()=>/* reexport */d,write:()=>/* reexport */T});// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var i="top",r="bottom",o="right",s="left",a="auto",l=[i,r,o,s],c="start",u="end",f="clippingParents",d="viewport",h="popper",p="reference",g=l.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+u])}),[]),m=[].concat(l,[a]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+u])}),[]),v="beforeRead",y="read",b="afterRead",_="beforeMain",w="main",x="afterMain",E="beforeWrite",T="write",C="afterWrite",A=[v,y,b,_,w,x,E,T,C];// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function k(e){return e?(e.nodeName||"").toLowerCase():null}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function S(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function D(e){return e instanceof S(e).Element||e instanceof Element}function O(e){return e instanceof S(e).HTMLElement||e instanceof HTMLElement}function N(e){
// IE 11 has no ShadowRoot
return"undefined"!=typeof ShadowRoot&&(e instanceof S(e).ShadowRoot||e instanceof ShadowRoot)}// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const L={name:"applyStyles",enabled:!0,phase:"write",fn:// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js
// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},r=t.elements[e];// arrow is optional + virtual elements
O(r)&&k(r)&&(// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(r.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],r=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});// arrow is optional + virtual elements
O(i)&&k(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function j(e){return e.split("-")[0]}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var $=Math.max,I=Math.min,P=Math.round;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function H(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,r=1;if(O(e)&&t){var o=e.offsetHeight,s=e.offsetWidth;// Do not attempt to divide by 0, otherwise we get `Infinity` as scale
// Fallback to 1 in case both values are `0`
s>0&&(i=P(n.width)/s||1),o>0&&(r=P(n.height)/o||1)}return{width:n.width/i,height:n.height/r,top:n.top/r,right:n.right/i,bottom:n.bottom/r,left:n.left/i,x:n.left/i,y:n.top/r}}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function M(e){var t=H(e),n=e.offsetWidth,i=e.offsetHeight;// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js
function q(e,t){var n=t.getRootNode&&t.getRootNode();// First, attempt with faster native method
if(e.contains(t))return!0;// Give up, the result is false
if(n&&N(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;// $FlowFixMe[prop-missing]: need a better way to handle this...
i=i.parentNode||i.host}while(i)}return!1}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function R(e){return S(e).getComputedStyle(e)}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function B(e){return["table","td","th"].indexOf(k(e))>=0}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function W(e){
// $FlowFixMe[incompatible-return]: assume body is always available
return((D(e)?e.ownerDocument:// $FlowFixMe[prop-missing]
e.document)||window.document).documentElement}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function F(e){return"html"===k(e)?e:// this is a quicker (but less type safe) way to save quite some bytes from the bundle
// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
e.assignedSlot||// step into the shadow DOM of the parent of a slotted node
e.parentNode||(// DOM Element detected
N(e)?e.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
W(e)}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function z(e){return O(e)&&// https://github.com/popperjs/popper-core/issues/837
"fixed"!==R(e).position?e.offsetParent:null}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function U(e){for(var t=S(e),n=z(e);n&&B(n)&&"static"===R(n).position;)n=z(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===R(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&O(e)&&"fixed"===R(e).position)return null;for(var n=F(e);O(n)&&["html","body"].indexOf(k(n))<0;){var i=R(n);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function V(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js
function X(e,t,n){return $(e,I(t,n))}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Y(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function K(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const Q={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,a=e.name,c=e.options,u=n.elements.arrow,f=n.modifiersData.popperOffsets,d=j(n.placement),h=V(d),p=[s,o].indexOf(d)>=0?"height":"width";if(u&&f){var g=function(e,t){return Y("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:K(e,l))}(c.padding,n),m=M(u),v="y"===h?i:s,y="y"===h?r:o,b=n.rects.reference[p]+n.rects.reference[h]-f[h]-n.rects.popper[p],_=f[h]-n.rects.reference[h],w=U(u),x=w?"y"===h?w.clientHeight||0:w.clientWidth||0:0,E=b/2-_/2,T=g[v],C=x-m[p]-g[y],A=x/2-m[p]/2+E,k=X(T,A,C),S=h;n.modifiersData[a]=((t={})[S]=k,t.centerOffset=k-A,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&q(t.elements.popper,i)&&(t.elements.arrow=i);// CSS selector
},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function G(e){return e.split("-")[1]}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js
// eslint-disable-next-line import/no-unused-modules
var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function Z(e){var t,n=e.popper,a=e.popperRect,l=e.placement,c=e.variation,f=e.offsets,d=e.position,h=e.gpuAcceleration,p=e.adaptive,g=e.roundOffsets,m=e.isFixed,v=f.x,y=void 0===v?0:v,b=f.y,_=void 0===b?0:b,w="function"==typeof g?g({x:y,y:_}):{x:y,y:_};y=w.x,_=w.y;var x=f.hasOwnProperty("x"),E=f.hasOwnProperty("y"),T=s,C=i,A=window;if(p){var k=U(n),D="clientHeight",O="clientWidth";if(k===S(n)&&"static"!==R(k=W(n)).position&&"absolute"===d&&(D="scrollHeight",O="scrollWidth"),// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
k=k,l===i||(l===s||l===o)&&c===u)C=r,_-=(m&&A.visualViewport?A.visualViewport.height:// $FlowFixMe[prop-missing]
k[D])-a.height,_*=h?1:-1;if(l===s||(l===i||l===r)&&c===u)T=o,y-=(m&&A.visualViewport?A.visualViewport.width:// $FlowFixMe[prop-missing]
k[O])-a.width,y*=h?1:-1}var N,L=Object.assign({position:d},p&&J),j=!0===g?function(e){var t=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:P(t*i)/i||0,y:P(n*i)/i||0}}({x:y,y:_}):{x:y,y:_};return y=j.x,_=j.y,h?Object.assign({},L,((N={})[C]=E?"0":"",N[T]=x?"0":"",N.transform=(A.devicePixelRatio||1)<=1?"translate("+y+"px, "+_+"px)":"translate3d("+y+"px, "+_+"px, 0)",N)):Object.assign({},L,((t={})[C]=E?_+"px":"",t[T]=x?y+"px":"",t.transform="",t))}// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const ee={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=void 0===i||i,o=n.adaptive,s=void 0===o||o,a=n.roundOffsets,l=void 0===a||a,c={placement:j(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
// eslint-disable-next-line import/no-unused-modules
var te={passive:!0};// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const ne={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,o=void 0===r||r,s=i.resize,a=void 0===s||s,l=S(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach((function(e){e.addEventListener("scroll",n.update,te)})),a&&l.addEventListener("resize",n.update,te),function(){o&&c.forEach((function(e){e.removeEventListener("scroll",n.update,te)})),a&&l.removeEventListener("resize",n.update,te)}},data:{}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var ie={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var oe={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function ae(e){var t=S(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function le(e){
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return H(W(e)).left+ae(e).scrollLeft}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function ce(e){
// Firefox wants us to check `-x` and `-y` variations as well
var t=R(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function ue(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:O(e)&&ce(e)?e:ue(F(e))}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function fe(e,t){var n;void 0===t&&(t=[]);var i=ue(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),o=S(i),s=r?[o].concat(o.visualViewport||[],ce(i)?i:[]):i,a=t.concat(s);return r?a:// $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
a.concat(fe(F(s)))}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function de(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function he(e,t){return t===d?de(// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function(e){var t=S(e),n=W(e),i=t.visualViewport,r=n.clientWidth,o=n.clientHeight,s=0,a=0;// NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
// can be obscured underneath it.
// Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
// if it isn't open, so if this isn't available, the popper will be detected
// to overflow the bottom of the screen too early.
return i&&(r=i.width,o=i.height,// Uses Layout Viewport (like Chrome; Safari does not currently)
// In Chrome, it returns a value very close to 0 (+/-) but contains rounding
// errors due to floating point numbers, so we need to check precision.
// Safari returns a number <= 0, usually < -1 when pinch-zoomed
// Feature detection fails in mobile emulation mode in Chrome.
// Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
// 0.001
// Fallback here: "Not Safari" userAgent
/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=i.offsetLeft,a=i.offsetTop)),{width:r,height:o,x:s+le(e),y:a}}(e)):D(t)?// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function(e){var t=H(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):de(// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function(e){var t,n=W(e),i=ae(e),r=null==(t=e.ownerDocument)?void 0:t.body,o=$(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=$(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+le(e),l=-i.scrollTop;return"rtl"===R(r||n).direction&&(a+=$(n.clientWidth,r?r.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}(W(e)))}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function pe(e,t,n){var i="clippingParents"===t?function(e){var t=fe(F(e)),n=["absolute","fixed"].indexOf(R(e).position)>=0&&O(e)?U(e):e;return D(n)?t.filter((function(e){return D(e)&&q(e,n)&&"body"!==k(e)})):[];// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
}(e):[].concat(t),r=[].concat(i,[n]),o=r[0],s=r.reduce((function(t,n){var i=he(e,n);return t.top=$(i.top,t.top),t.right=I(i.right,t.right),t.bottom=I(i.bottom,t.bottom),t.left=$(i.left,t.left),t}),he(e,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js
function ge(e){var t,n=e.reference,a=e.element,l=e.placement,f=l?j(l):null,d=l?G(l):null,h=n.x+n.width/2-a.width/2,p=n.y+n.height/2-a.height/2;switch(f){case i:t={x:h,y:n.y-a.height};break;case r:t={x:h,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case s:t={x:n.x-a.width,y:p};break;default:t={x:n.x,y:n.y}}var g=f?V(f):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case c:t[g]=t[g]-(n[m]/2-a[m]/2);break;case u:t[g]=t[g]+(n[m]/2-a[m]/2)}}return t}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js
// eslint-disable-next-line import/no-unused-modules
function me(e,t){void 0===t&&(t={});var n=t,s=n.placement,a=void 0===s?e.placement:s,c=n.boundary,u=void 0===c?f:c,g=n.rootBoundary,m=void 0===g?d:g,v=n.elementContext,y=void 0===v?h:v,b=n.altBoundary,_=void 0!==b&&b,w=n.padding,x=void 0===w?0:w,E=Y("number"!=typeof x?x:K(x,l)),T=y===h?p:h,C=e.rects.popper,A=e.elements[_?T:y],k=pe(D(A)?A:A.contextElement||W(e.elements.popper),u,m),S=H(e.elements.reference),O=ge({reference:S,element:C,strategy:"absolute",placement:a}),N=de(Object.assign({},C,O)),L=y===h?N:S,j={top:k.top-L.top+E.top,bottom:L.bottom-k.bottom+E.bottom,left:k.left-L.left+E.left,right:L.right-k.right+E.right},$=e.modifiersData.offset;// Offsets can be applied only to the popper element
if(y===h&&$){var I=$[a];Object.keys(j).forEach((function(e){var t=[o,r].indexOf(e)>=0?1:-1,n=[i,r].indexOf(e)>=0?"y":"x";j[e]+=I[n]*t}))}return j}// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const ve={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,u=e.name;if(!t.modifiersData[u]._skip){for(var f=n.mainAxis,d=void 0===f||f,h=n.altAxis,p=void 0===h||h,v=n.fallbackPlacements,y=n.padding,b=n.boundary,_=n.rootBoundary,w=n.altBoundary,x=n.flipVariations,E=void 0===x||x,T=n.allowedAutoPlacements,C=t.options.placement,A=j(C),k=v||(A===C||!E?[re(C)]:// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js
// eslint-disable-next-line import/no-unused-modules
function(e){if(j(e)===a)return[];var t=re(e);return[se(e),t,se(t)]}(C)),S=[C].concat(k).reduce((function(e,n){return e.concat(j(n)===a?// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?m:c,f=G(i),d=f?a?g:g.filter((function(e){return G(e)===f})):l,h=d.filter((function(e){return u.indexOf(e)>=0}));0===h.length&&(h=d);// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var p=h.reduce((function(t,n){return t[n]=me(e,{placement:n,boundary:r,rootBoundary:o,padding:s})[j(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:b,rootBoundary:_,padding:y,flipVariations:E,allowedAutoPlacements:T}):n)}),[]),D=t.rects.reference,O=t.rects.popper,N=new Map,L=!0,$=S[0],I=0;I<S.length;I++){var P=S[I],H=j(P),M=G(P)===c,q=[i,r].indexOf(H)>=0,R=q?"width":"height",B=me(t,{placement:P,boundary:b,rootBoundary:_,altBoundary:w,padding:y}),W=q?M?o:s:M?r:i;D[R]>O[R]&&(W=re(W));var F=re(W),z=[];if(d&&z.push(B[H]<=0),p&&z.push(B[W]<=0,B[F]<=0),z.every((function(e){return e}))){$=P,L=!1;break}N.set(P,z)}if(L)for(
// `2` may be desired in some cases – research later
var U=function(e){var t=S.find((function(t){var n=N.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return $=t,"break"},V=E?3:1;V>0;V--){if("break"===U(V))break}t.placement!==$&&(t.modifiersData[u]._skip=!0,t.placement=$,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js
function ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[i,o,r,s].some((function(t){return e[t]>=0}))}// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const _e={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,o=t.modifiersData.preventOverflow,s=me(t,{elementContext:"reference"}),a=me(t,{altBoundary:!0}),l=ye(s,i),c=ye(a,r,o),u=be(l),f=be(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}};// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const we={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,a=n.offset,l=void 0===a?[0,0]:a,c=m.reduce((function(e,n){return e[n]=// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js
// eslint-disable-next-line import/no-unused-modules
function(e,t,n){var r=j(e),a=[s,i].indexOf(r)>=0?-1:1,l="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=l[0],u=l[1];return c=c||0,u=(u||0)*a,[s,o].indexOf(r)>=0?{x:u,y:c}:{x:c,y:u}}(n,t.rects,l),e}),{}),u=c[t.placement],f=u.x,d=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=c}};// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const xe={name:"popperOffsets",enabled:!0,phase:"read",fn:// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function(e){var t=e.state,n=e.name;
// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
t.modifiersData[n]=ge({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};// eslint-disable-next-line import/no-unused-modules
/* harmony default export */const Ee={name:"preventOverflow",enabled:!0,phase:"main",fn:// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function(e){var t=e.state,n=e.options,a=e.name,l=n.mainAxis,u=void 0===l||l,f=n.altAxis,d=void 0!==f&&f,h=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,v=n.tether,y=void 0===v||v,b=n.tetherOffset,_=void 0===b?0:b,w=me(t,{boundary:h,rootBoundary:p,padding:m,altBoundary:g}),x=j(t.placement),E=G(t.placement),T=!E,C=V(x),A="x"===C?"y":"x",k=t.modifiersData.popperOffsets,S=t.rects.reference,D=t.rects.popper,O="function"==typeof _?_(Object.assign({},t.rects,{placement:t.placement})):_,N="number"==typeof O?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(k){if(u){var H,q="y"===C?i:s,R="y"===C?r:o,B="y"===C?"height":"width",W=k[C],F=W+w[q],z=W-w[R],Y=y?-D[B]/2:0,K=E===c?S[B]:D[B],Q=E===c?-D[B]:-S[B],J=t.elements.arrow,Z=y&&J?M(J):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[q],ne=ee[R],ie=X(0,S[B],Z[B]),re=T?S[B]/2-Y-ie-te-N.mainAxis:K-ie-te-N.mainAxis,oe=T?-S[B]/2+Y+ie+ne+N.mainAxis:Q+ie+ne+N.mainAxis,se=t.elements.arrow&&U(t.elements.arrow),ae=se?"y"===C?se.clientTop||0:se.clientLeft||0:0,le=null!=(H=null==L?void 0:L[C])?H:0,ce=W+oe-le,ue=X(y?I(F,W+re-le-ae):F,W,y?$(z,ce):z);k[C]=ue,P[C]=ue-W}if(d){var fe,de="x"===C?i:s,he="x"===C?r:o,pe=k[A],ge="y"===A?"height":"width",ve=pe+w[de],ye=pe-w[he],be=-1!==[i,s].indexOf(x),_e=null!=(fe=null==L?void 0:L[A])?fe:0,we=be?ve:pe-S[ge]-D[ge]-_e+N.altAxis,xe=be?pe+S[ge]+D[ge]-_e-N.altAxis:ye,Ee=y&&be?function(e,t,n){var i=X(e,t,n);return i>n?n:i}(we,pe,xe):X(y?we:ve,pe,y?xe:ye);k[A]=Ee,P[A]=Ee-pe}t.modifiersData[a]=P}},requiresIfExists:["offset"]};// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function Te(e,t,n){void 0===n&&(n=!1);var i,r,o=O(t),s=O(t)&&// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function(e){var t=e.getBoundingClientRect(),n=P(t.width)/e.offsetWidth||1,i=P(t.height)/e.offsetHeight||1;return 1!==n||1!==i}(t),a=W(t),l=H(e,s),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(o||!o&&!n)&&(("body"!==k(t)||// https://github.com/popperjs/popper-core/issues/1078
ce(a))&&(c=(i=t)!==S(i)&&O(i)?{scrollLeft:(r=i).scrollLeft,scrollTop:r.scrollTop}:ae(i)),O(t)?((u=H(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=le(a))),{x:l.left+c.scrollLeft-u.x,y:l.top+c.scrollTop-u.y,width:l.width,height:l.height}}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
// source: https://stackoverflow.com/questions/49875255
function Ce(e){var t=new Map,n=new Set,i=[];// On visiting object, check for its dependencies and visit them recursively
function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&r(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||
// check for visited object
r(e)})),i}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js
var Ae={placement:"bottom",modifiers:[],strategy:"absolute"};function ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Se(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,r=t.defaultOptions,o=void 0===r?Ae:r;return function(e,t,n){void 0===n&&(n=o);var r,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ae,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,u={state:a,setOptions:function(n){var r="function"==typeof n?n(a.options):n;f(),a.options=Object.assign({},o,a.options,r),a.scrollParents={reference:D(e)?fe(e):e.contextElement?fe(e.contextElement):[],popper:fe(t)};// Orders the modifiers based on their dependencies and `phase`
// properties
var s=function(e){
// order based on dependencies
var t=Ce(e);// order based on phase
return A.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});// IE11 does not support Object.values
return Object.keys(t).map((function(e){return t[e]}))}([].concat(i,a.options.modifiers)));// Strip out disabled modifiers
return a.orderedModifiers=s.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var o=r({state:a,name:t,instance:u,options:i}),s=function(){};l.push(o||s)}})),u.update()},
// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function(){if(!c){var e=a.elements,t=e.reference,n=e.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(ke(t,n)){// Store the reference and popper rects to be read by modifiers
a.rects={reference:Te(t,U(n),"fixed"===a.options.strategy),popper:M(n)},// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
a.reset=!1,a.placement=a.options.placement,// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var r=a.orderedModifiers[i],o=r.fn,s=r.options,l=void 0===s?{}:s,f=r.name;"function"==typeof o&&(a=o({state:a,options:l,name:f,instance:u})||a)}else a.reset=!1,i=-1}}},
// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:(r=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(r())}))}))),s}),destroy:function(){f(),c=!0}};if(!ke(e,t))return u;function f(){l.forEach((function(e){return e()})),l=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var De=Se(),Oe=Se({defaultModifiers:[ne,xe,ee,L,we,ve,Ee,Q,_e]}),Ne=Se({defaultModifiers:[ne,xe,ee,L]});// eslint-disable-next-line import/no-unused-modules
}// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/index.js
// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
/***/,
/***/734:
/***/function(e,t,n){
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e){"use strict";function t(e){if(e&&e.__esModule)return e;const t=Object.create(null);if(e)for(const n in e)if("default"!==n){const i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:()=>e[n]})}return t.default=e,Object.freeze(t)}const n=t(e),i=1e6,r=1e3,o="transitionend",s=e=>null==e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),a=e=>{do{e+=Math.floor(Math.random()*i)}while(document.getElementById(e));return e},l=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");// The only valid content that could double as a selector are IDs or classes,
// so everything starting with `#` or `.`. If a "real" URL is used as the selector,
// `document.querySelector` will rightfully complain it is invalid.
// See https://github.com/twbs/bootstrap/issues/32273
if(!n||!n.includes("#")&&!n.startsWith("."))return null;// Just in case some CMS puts out a full URL with the anchor appended
n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},c=e=>{const t=l(e);return t&&document.querySelector(t)?t:null},u=e=>{const t=l(e);return t?document.querySelector(t):null},f=e=>{if(!e)return 0;// Get transition-duration of the element
let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),o=Number.parseFloat(n);// Return 0 if element or transition duration is not found
return i||o?(// If multiple durations are defined, take the first
t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*r):0},d=e=>{e.dispatchEvent(new Event(o))},h=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),p=e=>h(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,g=(e,t,n)=>{Object.keys(n).forEach((i=>{const r=n[i],o=t[i],a=o&&h(o)?"element":s(o);if(!new RegExp(r).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`)}))},m=e=>!(!h(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),v=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),y=e=>{if(!document.documentElement.attachShadow)return null;// Can find the shadow root otherwise it'll return the document
if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:// when we don't find a shadow root
e.parentNode?y(e.parentNode):null},b=()=>{},_=e=>{
// eslint-disable-next-line no-unused-expressions
e.offsetHeight},w=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},x=[],E=e=>{"loading"===document.readyState?(
// add listener on the first call when the document is in loading state
x.length||document.addEventListener("DOMContentLoaded",(()=>{x.forEach((e=>e()))})),x.push(e)):e()},T=()=>"rtl"===document.documentElement.dir,C=e=>{E((()=>{const t=w();
/* istanbul ignore if */if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}}))},A=e=>{"function"==typeof e&&e()},k=(e,t,n=!0)=>{if(!n)return void A(e);const i=5,r=f(t)+i;let s=!1;const a=({target:n})=>{n===t&&(s=!0,t.removeEventListener(o,a),A(e))};t.addEventListener(o,a),setTimeout((()=>{s||d(t)}),r)},S=(e,t,n,i)=>{let r=e.indexOf(t);// if the element does not exist in the list return an element depending on the direction and if cycle is allowed
if(-1===r)return e[!n&&i?e.length-1:0];const o=e.length;return r+=n?1:-1,i&&(r=(r+o)%o),e[Math.max(0,Math.min(r,o-1))]},D=/[^.]*(?=\..*)\.|.*/,O=/\..*/,N=/::\d+$/,L={};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ // Events storage
let j=1;const $={mouseenter:"mouseover",mouseleave:"mouseout"},I=/^(mouseenter|mouseleave)/i,P=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);
/**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */
function H(e,t){return t&&`${t}::${j++}`||e.uidEvent||j++}function M(e){const t=H(e);return e.uidEvent=t,L[t]=L[t]||{},L[t]}function q(e,t){return function n(i){return i.delegateTarget=e,n.oneOff&&X.off(e,i.type,t),t.apply(e,[i])}}function R(e,t,n){return function i(r){const o=e.querySelectorAll(t);for(let{target:s}=r;s&&s!==this;s=s.parentNode)for(let a=o.length;a--;)if(o[a]===s)return r.delegateTarget=s,i.oneOff&&X.off(e,r.type,t,n),n.apply(s,[r]);// To please ESLint
return null}}function B(e,t,n=null){const i=Object.keys(e);for(let r=0,o=i.length;r<o;r++){const o=e[i[r]];if(o.originalHandler===t&&o.delegationSelector===n)return o}return null}function W(e,t,n){const i="string"==typeof t,r=i?n:t;let o=V(e);return P.has(o)||(o=e),[i,r,o]}function F(e,t,n,i,r){if("string"!=typeof t||!e)return;// in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
// this prevents the handler from being dispatched the same way as mouseover or mouseout does
if(n||(n=i,i=null),I.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};i?i=e(i):n=e(n)}const[o,s,a]=W(t,n,i),l=M(e),c=l[a]||(l[a]={}),u=B(c,s,o?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const f=H(s,t.replace(D,"")),d=o?R(e,n,i):q(e,n);d.delegationSelector=o?n:null,d.originalHandler=s,d.oneOff=r,d.uidEvent=f,c[f]=d,e.addEventListener(a,d,o)}function z(e,t,n,i,r){const o=B(t[n],i,r);o&&(e.removeEventListener(n,o,Boolean(r)),delete t[n][o.uidEvent])}function U(e,t,n,i){const r=t[n]||{};Object.keys(r).forEach((o=>{if(o.includes(i)){const i=r[o];z(e,t,n,i.originalHandler,i.delegationSelector)}}))}function V(e){
// allow to get the native events from namespaced events ('click.bs.button' --> 'click')
return e=e.replace(O,""),$[e]||e}const X={on(e,t,n,i){F(e,t,n,i,!1)},one(e,t,n,i){F(e,t,n,i,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;const[r,o,s]=W(t,n,i),a=s!==t,l=M(e),c=t.startsWith(".");if(void 0!==o){
// Simplest case: handler is passed, remove that listener ONLY.
if(!l||!l[s])return;return void z(e,l,s,o,r?n:null)}c&&Object.keys(l).forEach((n=>{U(e,l,n,t.slice(1))}));const u=l[s]||{};Object.keys(u).forEach((n=>{const i=n.replace(N,"");if(!a||t.includes(i)){const t=u[n];z(e,l,s,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!=typeof t||!e)return null;const i=w(),r=V(t),o=t!==r,s=P.has(r);let a,l=!0,c=!0,u=!1,f=null;return o&&i&&(a=i.Event(t,n),i(e).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),s?(f=document.createEvent("HTMLEvents"),f.initEvent(r,l,!0)):f=new CustomEvent(t,{bubbles:l,cancelable:!0}),// merge custom information in our event
void 0!==n&&Object.keys(n).forEach((e=>{Object.defineProperty(f,e,{get:()=>n[e]})})),u&&f.preventDefault(),c&&e.dispatchEvent(f),f.defaultPrevented&&void 0!==a&&a.preventDefault(),f}},Y=new Map,K={set(e,t,n){Y.has(e)||Y.set(e,new Map);const i=Y.get(e);// make it clear we only want one instance per element
// can be removed later when multiple key/instances are fine to be used
i.has(t)||0===i.size?i.set(t,n):
// eslint-disable-next-line no-console
console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(e,t)=>Y.has(e)&&Y.get(e).get(t)||null,remove(e,t){if(!Y.has(e))return;const n=Y.get(e);n.delete(t),// free up element references if there are no instances left for an element
0===n.size&&Y.delete(e)}},Q="5.1.3";
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */class G{constructor(e){(e=p(e))&&(this._element=e,K.set(this._element,this.constructor.DATA_KEY,this))}dispose(){K.remove(this._element,this.constructor.DATA_KEY),X.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){k(e,t,n)}
/** Static */static getInstance(e){return K.get(p(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return Q}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const J=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;X.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),v(this))return;const r=u(this)||this.closest(`.${i}`);// Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
e.getOrCreateInstance(r)[t]()}))},Z="alert",ee=".bs.alert",te=`close${ee}`,ne=`closed${ee}`,ie="fade",re="show";
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class oe extends G{
// Getters
static get NAME(){return Z}// Public
close(){if(X.trigger(this._element,te).defaultPrevented)return;this._element.classList.remove(re);const e=this._element.classList.contains(ie);this._queueCallback((()=>this._destroyElement()),this._element,e)}// Private
_destroyElement(){this._element.remove(),X.trigger(this._element,ne),this.dispose()}// Static
static jQueryInterface(e){return this.each((function(){const t=oe.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */J(oe,"close"),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */
C(oe);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
const se="button",ae="active",le='[data-bs-toggle="button"]',ce="click.bs.button.data-api";
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class ue extends G{
// Getters
static get NAME(){return se}// Public
toggle(){
// Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
this._element.setAttribute("aria-pressed",this._element.classList.toggle(ae))}// Static
static jQueryInterface(e){return this.each((function(){const t=ue.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
function fe(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function de(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}X.on(document,ce,le,(e=>{e.preventDefault();const t=e.target.closest(le);ue.getOrCreateInstance(t).toggle()})),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */
C(ue);const he={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${de(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${de(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=fe(e.dataset[n])})),t},getDataAttribute:(e,t)=>fe(e.getAttribute(`data-bs-${de(t)}`)),offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position:e=>({top:e.offsetTop,left:e.offsetLeft})},pe=3,ge={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let i=e.parentNode;for(;i&&i.nodeType===Node.ELEMENT_NODE&&i.nodeType!==pe;)i.matches(t)&&n.push(i),i=i.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!v(e)&&m(e)))}},me="carousel",ve=".bs.carousel",ye=".data-api",be=500,_e=40,we={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},xe={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ee="next",Te="prev",Ce="left",Ae="right",ke={ArrowLeft:Ae,ArrowRight:Ce},Se=`slide${ve}`,De=`slid${ve}`,Oe=`keydown${ve}`,Ne=`mouseenter${ve}`,Le=`mouseleave${ve}`,je=`touchstart${ve}`,$e=`touchmove${ve}`,Ie=`touchend${ve}`,Pe=`pointerdown${ve}`,He=`pointerup${ve}`,Me=`dragstart${ve}`,qe=`load${ve}${ye}`,Re=`click${ve}${ye}`,Be="carousel",We="active",Fe="slide",ze="carousel-item-end",Ue="carousel-item-start",Ve="carousel-item-next",Xe="carousel-item-prev",Ye="pointer-event",Ke=".active",Qe=".active.carousel-item",Ge=".carousel-item",Je=".carousel-item img",Ze=".carousel-item-next, .carousel-item-prev",et=".carousel-indicators",tt="[data-bs-target]",nt="[data-bs-slide], [data-bs-slide-to]",it='[data-bs-ride="carousel"]',rt="touch",ot="pen";
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class st extends G{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=ge.findOne(et,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}// Getters
static get Default(){return we}static get NAME(){return me}// Public
next(){this._slide(Ee)}nextWhenVisible(){
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&m(this._element)&&this.next()}prev(){this._slide(Te)}pause(e){e||(this._isPaused=!0),ge.findOne(Ze,this._element)&&(d(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=ge.findOne(Qe,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void X.one(this._element,De,(()=>this.to(e)));if(t===e)return this.pause(),void this.cycle();const n=e>t?Ee:Te;this._slide(n,this._items[e])}// Private
_getConfig(e){return e={...we,...he.getDataAttributes(this._element),..."object"==typeof e?e:{}},g(me,e,xe),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=_e)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Ae:Ce)}_addEventListeners(){this._config.keyboard&&X.on(this._element,Oe,(e=>this._keydown(e))),"hover"===this._config.pause&&(X.on(this._element,Ne,(e=>this.pause(e))),X.on(this._element,Le,(e=>this.cycle(e)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===ot||e.pointerType===rt),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{
// ensure swiping with one touch and not pinching
this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},i=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(
// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((e=>this.cycle(e)),be+this._config.interval))};ge.find(Je,this._element).forEach((e=>{X.on(e,Me,(e=>e.preventDefault()))})),this._pointerEvent?(X.on(this._element,Pe,(e=>t(e))),X.on(this._element,He,(e=>i(e))),this._element.classList.add(Ye)):(X.on(this._element,je,(e=>t(e))),X.on(this._element,$e,(e=>n(e))),X.on(this._element,Ie,(e=>i(e))))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=ke[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?ge.find(Ge,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Ee;return S(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),i=this._getItemIndex(ge.findOne(Qe,this._element));return X.trigger(this._element,Se,{relatedTarget:e,direction:t,from:i,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=ge.findOne(Ke,this._indicatorsElement);t.classList.remove(We),t.removeAttribute("aria-current");const n=ge.find(tt,this._indicatorsElement);for(let t=0;t<n.length;t++)if(Number.parseInt(n[t].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[t].classList.add(We),n[t].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||ge.findOne(Qe,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),i=ge.findOne(Qe,this._element),r=this._getItemIndex(i),o=t||this._getItemByOrder(n,i),s=this._getItemIndex(o),a=Boolean(this._interval),l=n===Ee,c=l?Ue:ze,u=l?Ve:Xe,f=this._orderToDirection(n);if(o&&o.classList.contains(We))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(o,f).defaultPrevented)return;if(!i||!o)
// Some weirdness is happening, so we bail
return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const d=()=>{X.trigger(this._element,De,{relatedTarget:o,direction:f,from:r,to:s})};if(this._element.classList.contains(Fe)){o.classList.add(u),_(o),i.classList.add(c),o.classList.add(c);const e=()=>{o.classList.remove(c,u),o.classList.add(We),i.classList.remove(We,u,c),this._isSliding=!1,setTimeout(d,0)};this._queueCallback(e,i,!0)}else i.classList.remove(We),o.classList.add(We),this._isSliding=!1,d();a&&this.cycle()}_directionToOrder(e){return[Ae,Ce].includes(e)?T()?e===Ce?Te:Ee:e===Ce?Ee:Te:e}_orderToDirection(e){return[Ee,Te].includes(e)?T()?e===Te?Ce:Ae:e===Te?Ae:Ce:e}// Static
static carouselInterface(e,t){const n=st.getOrCreateInstance(e,t);let{_config:i}=n;"object"==typeof t&&(i={...i,...t});const r="string"==typeof t?t:i.slide;if("number"==typeof t)n.to(t);else if("string"==typeof r){if(void 0===n[r])throw new TypeError(`No method named "${r}"`);n[r]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){st.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=u(this);if(!t||!t.classList.contains(Be))return;const n={...he.getDataAttributes(t),...he.getDataAttributes(this)},i=this.getAttribute("data-bs-slide-to");i&&(n.interval=!1),st.carouselInterface(t,n),i&&st.getInstance(t).to(i),e.preventDefault()}}
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */X.on(document,Re,nt,st.dataApiClickHandler),X.on(window,qe,(()=>{const e=ge.find(it);for(let t=0,n=e.length;t<n;t++)st.carouselInterface(e[t],st.getInstance(e[t]))})),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */
C(st);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
const at="collapse",lt="bs.collapse",ct=`.${lt}`,ut={toggle:!0,parent:null},ft={toggle:"boolean",parent:"(null|element)"},dt=`show${ct}`,ht=`shown${ct}`,pt=`hide${ct}`,gt=`hidden${ct}`,mt=`click${ct}.data-api`,vt="show",yt="collapse",bt="collapsing",_t="collapsed",wt=`:scope .${yt} .${yt}`,xt="collapse-horizontal",Et="width",Tt="height",Ct=".collapse.show, .collapse.collapsing",At='[data-bs-toggle="collapse"]';
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class kt extends G{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=ge.find(At);for(let e=0,t=n.length;e<t;e++){const t=n[e],i=c(t),r=ge.find(i).filter((e=>e===this._element));null!==i&&r.length&&(this._selector=i,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}// Getters
static get Default(){return ut}static get NAME(){return at}// Public
toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=ge.find(wt,this._config.parent);t=ge.find(Ct,this._config.parent).filter((t=>!e.includes(t)))}const n=ge.findOne(this._selector);if(t.length){const i=t.find((e=>n!==e));if(e=i?kt.getInstance(i):null,e&&e._isTransitioning)return}if(X.trigger(this._element,dt).defaultPrevented)return;t.forEach((t=>{n!==t&&kt.getOrCreateInstance(t,{toggle:!1}).hide(),e||K.set(t,lt,null)}));const i=this._getDimension();this._element.classList.remove(yt),this._element.classList.add(bt),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(bt),this._element.classList.add(yt,vt),this._element.style[i]="",X.trigger(this._element,ht)},o=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[i]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(X.trigger(this._element,pt).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,_(this._element),this._element.classList.add(bt),this._element.classList.remove(yt,vt);const t=this._triggerArray.length;for(let e=0;e<t;e++){const t=this._triggerArray[e],n=u(t);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(bt),this._element.classList.add(yt),X.trigger(this._element,gt)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(vt)}// Private
_getConfig(e){return(e={...ut,...he.getDataAttributes(this._element),...e}).toggle=Boolean(e.toggle),// Coerce string values
e.parent=p(e.parent),g(at,e,ft),e}_getDimension(){return this._element.classList.contains(xt)?Et:Tt}_initializeChildren(){if(!this._config.parent)return;const e=ge.find(wt,this._config.parent);ge.find(At,this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=u(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove(_t):e.classList.add(_t),e.setAttribute("aria-expanded",t)}))}// Static
static jQueryInterface(e){return this.each((function(){const t={};"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=kt.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */X.on(document,mt,At,(function(e){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=c(this);ge.find(t).forEach((e=>{kt.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */
C(kt);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
const St="dropdown",Dt=".bs.dropdown",Ot=".data-api",Nt="Escape",Lt="Space",jt="Tab",$t="ArrowUp",It="ArrowDown",Pt=2,Ht=new RegExp(`${$t}|${It}|${Nt}`),Mt=`hide${Dt}`,qt=`hidden${Dt}`,Rt=`show${Dt}`,Bt=`shown${Dt}`,Wt=`click${Dt}${Ot}`,Ft=`keydown${Dt}${Ot}`,zt=`keyup${Dt}${Ot}`,Ut="show",Vt="dropup",Xt="dropend",Yt="dropstart",Kt="navbar",Qt='[data-bs-toggle="dropdown"]',Gt=".dropdown-menu",Jt=".navbar-nav",Zt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",en=T()?"top-end":"top-start",tn=T()?"top-start":"top-end",nn=T()?"bottom-end":"bottom-start",rn=T()?"bottom-start":"bottom-end",on=T()?"left-start":"right-start",sn=T()?"right-start":"left-start",an={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},ln={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class cn extends G{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}// Getters
static get Default(){return an}static get DefaultType(){return ln}static get NAME(){return St}// Public
toggle(){return this._isShown()?this.hide():this.show()}show(){if(v(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(X.trigger(this._element,Rt,e).defaultPrevented)return;const t=cn.getParentFromElement(this._element);// Totally disable Popper for Dropdowns in Navbar
this._inNavbar?he.setDataAttribute(this._menu,"popper","none"):this._createPopper(t),// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&!t.closest(Jt)&&[].concat(...document.body.children).forEach((e=>X.on(e,"mouseover",b))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ut),this._element.classList.add(Ut),X.trigger(this._element,Bt,e)}hide(){if(v(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}// Private
_completeHide(e){X.trigger(this._element,Mt,e).defaultPrevented||(// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>X.off(e,"mouseover",b))),this._popper&&this._popper.destroy(),this._menu.classList.remove(Ut),this._element.classList.remove(Ut),this._element.setAttribute("aria-expanded","false"),he.removeDataAttribute(this._menu,"popper"),X.trigger(this._element,qt,e))}_getConfig(e){if(e={...this.constructor.Default,...he.getDataAttributes(this._element),...e},g(St,e,this.constructor.DefaultType),"object"==typeof e.reference&&!h(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)
// Popper virtual elements require a getBoundingClientRect method
throw new TypeError(`${St.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if(void 0===n)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:h(this._config.reference)?t=p(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const i=this._getPopperConfig(),r=i.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=n.createPopper(t,this._menu,i),r&&he.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(Ut)}_getMenuElement(){return ge.next(this._element,Gt)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(Xt))return on;if(e.classList.contains(Yt))return sn;// We need to trim the value because custom properties can also include spaces
const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(Vt)?t?tn:en:t?rn:nn}_detectNavbar(){return null!==this._element.closest(`.${Kt}`)}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};// Disable Popper if we have a static display
return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=ge.find(Zt,this._menu).filter(m);n.length&&// if target isn't included in items (e.g. when expanding the dropdown)
// allow cycling to get the last item in case key equals ARROW_UP_KEY
S(n,t,e===It,!n.includes(t)).focus()}// Static
static jQueryInterface(e){return this.each((function(){const t=cn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Pt||"keyup"===e.type&&e.key!==jt))return;const t=ge.find(Qt);for(let n=0,i=t.length;n<i;n++){const i=cn.getInstance(t[n]);if(!i||!1===i._config.autoClose)continue;if(!i._isShown())continue;const r={relatedTarget:i._element};if(e){const t=e.composedPath(),n=t.includes(i._menu);if(t.includes(i._element)||"inside"===i._config.autoClose&&!n||"outside"===i._config.autoClose&&n)continue;// Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
if(i._menu.contains(e.target)&&("keyup"===e.type&&e.key===jt||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(r.clickEvent=e)}i._completeHide(r)}}static getParentFromElement(e){return u(e)||e.parentNode}static dataApiKeydownHandler(e){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if(/input|textarea/i.test(e.target.tagName)?e.key===Lt||e.key!==Nt&&(e.key!==It&&e.key!==$t||e.target.closest(Gt)):!Ht.test(e.key))return;const t=this.classList.contains(Ut);if(!t&&e.key===Nt)return;if(e.preventDefault(),e.stopPropagation(),v(this))return;const n=this.matches(Qt)?this:ge.prev(this,Qt)[0],i=cn.getOrCreateInstance(n);if(e.key!==Nt)return e.key===$t||e.key===It?(t||i.show(),void i._selectMenuItem(e)):void(t&&e.key!==Lt||cn.clearMenus());i.hide()}}
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */X.on(document,Ft,Qt,cn.dataApiKeydownHandler),X.on(document,Ft,Gt,cn.dataApiKeydownHandler),X.on(document,Wt,cn.clearMenus),X.on(document,zt,cn.clearMenus),X.on(document,Wt,Qt,(function(e){e.preventDefault(),cn.getOrCreateInstance(this).toggle()})),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */
C(cn);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const un=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",fn=".sticky-top";class dn{constructor(){this._element=document.body}getWidth(){
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),// give padding to element to balance the hidden scrollbar width
this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),// trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
this._setElementAttributes(un,"paddingRight",(t=>t+e)),this._setElementAttributes(fn,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),r=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const r=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(r))}px`};this._applyManipulationCallback(e,r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(un,"paddingRight"),this._resetElementAttributes(fn,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&he.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=he.getDataAttribute(e,t);void 0===n?e.style.removeProperty(t):(he.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){h(e)?t(e):ge.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const hn={className:"modal-backdrop",isVisible:!0,
// if false, we use the backdrop helper without adding any element to the dom
isAnimated:!1,rootElement:"body",
// give the choice to place backdrop under different elements
clickCallback:null},pn={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},gn="backdrop",mn="fade",vn="show",yn=`mousedown.bs.${gn}`;class bn{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&_(this._getElement()),this._getElement().classList.add(vn),this._emulateAnimation((()=>{A(e)}))):A(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(vn),this._emulateAnimation((()=>{this.dispose(),A(e)}))):A(e)}// Private
_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(mn),this._element=e}return this._element}_getConfig(e){// use getElement() with the default "body" to get a fresh Element on each instantiation
return(e={...hn,..."object"==typeof e?e:{}}).rootElement=p(e.rootElement),g(gn,e,pn),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),X.on(this._getElement(),yn,(()=>{A(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(X.off(this._element,yn),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){k(e,this._getElement(),this._config.isAnimated)}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const _n={trapElement:null,
// The element to trap focus inside of
autofocus:!0},wn={trapElement:"element",autofocus:"boolean"},xn="focustrap",En=".bs.focustrap",Tn=`focusin${En}`,Cn=`keydown.tab${En}`,An="Tab",kn="forward",Sn="backward";class Dn{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),X.off(document,En),// guard against infinite focus loop
X.on(document,Tn,(e=>this._handleFocusin(e))),X.on(document,Cn,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,X.off(document,En))}// Private
_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const i=ge.focusableChildren(n);0===i.length?n.focus():this._lastTabNavDirection===Sn?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===An&&(this._lastTabNavDirection=e.shiftKey?Sn:kn)}_getConfig(e){return e={..._n,..."object"==typeof e?e:{}},g(xn,e,wn),e}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */const On="modal",Nn=".bs.modal",Ln="Escape",jn={backdrop:!0,keyboard:!0,focus:!0},$n={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},In=`hide${Nn}`,Pn=`hidePrevented${Nn}`,Hn=`hidden${Nn}`,Mn=`show${Nn}`,qn=`shown${Nn}`,Rn=`resize${Nn}`,Bn=`click.dismiss${Nn}`,Wn=`keydown.dismiss${Nn}`,Fn=`mouseup.dismiss${Nn}`,zn=`mousedown.dismiss${Nn}`,Un=`click${Nn}.data-api`,Vn="modal-open",Xn="fade",Yn="show",Kn="modal-static",Qn=".modal.show",Gn=".modal-dialog",Jn=".modal-body",Zn='[data-bs-toggle="modal"]';
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class ei extends G{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=ge.findOne(Gn,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new dn}// Getters
static get Default(){return jn}static get NAME(){return On}// Public
toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||X.trigger(this._element,Mn,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(Vn),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),X.on(this._dialog,zn,(()=>{X.one(this._element,Fn,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;if(X.trigger(this._element,In).defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(Yn),X.off(this._element,Bn),X.off(this._dialog,zn),this._queueCallback((()=>this._hideModal()),this._element,e)}dispose(){[window,this._dialog].forEach((e=>X.off(e,Nn))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}// Private
_initializeBackDrop(){return new bn({isVisible:Boolean(this._config.backdrop),
// 'static' option will be translated to true, and booleans will keep their value
isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Dn({trapElement:this._element})}_getConfig(e){return e={...jn,...he.getDataAttributes(this._element),..."object"==typeof e?e:{}},g(On,e,$n),e}_showElement(e){const t=this._isAnimated(),n=ge.findOne(Jn,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||
// Don't move modal's DOM position
document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&_(this._element),this._element.classList.add(Yn);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,X.trigger(this._element,qn,{relatedTarget:e})};this._queueCallback(i,this._dialog,t)}_setEscapeEvent(){this._isShown?X.on(this._element,Wn,(e=>{this._config.keyboard&&e.key===Ln?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Ln||this._triggerBackdropTransition()})):X.off(this._element,Wn)}_setResizeEvent(){this._isShown?X.on(window,Rn,(()=>this._adjustDialog())):X.off(window,Rn)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Vn),this._resetAdjustments(),this._scrollBar.reset(),X.trigger(this._element,Hn)}))}_showBackdrop(e){X.on(this._element,Bn,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(Xn)}_triggerBackdropTransition(){if(X.trigger(this._element,Pn).defaultPrevented)return;const{classList:e,scrollHeight:t,style:n}=this._element,i=t>document.documentElement.clientHeight;// return if the following background transition hasn't yet completed
!i&&"hidden"===n.overflowY||e.contains(Kn)||(i||(n.overflowY="hidden"),e.add(Kn),this._queueCallback((()=>{e.remove(Kn),i||this._queueCallback((()=>{n.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// ----------------------------------------------------------------------
_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!T()||n&&!e&&T())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!T()||!n&&e&&T())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}// Static
static jQueryInterface(e,t){return this.each((function(){const n=ei.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */X.on(document,Un,Zn,(function(e){const t=u(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),X.one(t,Mn,(e=>{e.defaultPrevented||X.one(t,Hn,(()=>{m(this)&&this.focus()}))}));// avoid conflict when clicking moddal toggler while another one is open
const n=ge.findOne(Qn);n&&ei.getInstance(n).hide(),ei.getOrCreateInstance(t).toggle(this)})),J(ei),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */
C(ei);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
const ti="offcanvas",ni=".bs.offcanvas",ii=".data-api",ri=`load${ni}${ii}`,oi="Escape",si={backdrop:!0,keyboard:!0,scroll:!1},ai={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},li="show",ci="offcanvas-backdrop",ui=".offcanvas.show",fi=`show${ni}`,di=`shown${ni}`,hi=`hide${ni}`,pi=`hidden${ni}`,gi=`click${ni}${ii}`,mi=`keydown.dismiss${ni}`,vi='[data-bs-toggle="offcanvas"]';
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class yi extends G{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}// Getters
static get NAME(){return ti}static get Default(){return si}// Public
toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;if(X.trigger(this._element,fi,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new dn).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(li);const t=()=>{this._config.scroll||this._focustrap.activate(),X.trigger(this._element,di,{relatedTarget:e})};this._queueCallback(t,this._element,!0)}hide(){if(!this._isShown)return;if(X.trigger(this._element,hi).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(li),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new dn).reset(),X.trigger(this._element,pi)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}// Private
_getConfig(e){return e={...si,...he.getDataAttributes(this._element),..."object"==typeof e?e:{}},g(ti,e,ai),e}_initializeBackDrop(){return new bn({className:ci,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Dn({trapElement:this._element})}_addEventListeners(){X.on(this._element,mi,(e=>{this._config.keyboard&&e.key===oi&&this.hide()}))}// Static
static jQueryInterface(e){return this.each((function(){const t=yi.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */X.on(document,gi,vi,(function(e){const t=u(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),v(this))return;X.one(t,pi,(()=>{
// focus on trigger when it is closed
m(this)&&this.focus()}));// avoid conflict when clicking a toggler of an offcanvas, while another is open
const n=ge.findOne(ui);n&&n!==t&&yi.getInstance(n).hide(),yi.getOrCreateInstance(t).toggle(this)})),X.on(window,ri,(()=>ge.find(ui).forEach((e=>yi.getOrCreateInstance(e).show())))),J(yi),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
C(yi);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const bi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),_i=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,wi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,xi=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!bi.has(n)||Boolean(_i.test(e.nodeValue)||wi.test(e.nodeValue));const i=t.filter((e=>e instanceof RegExp));// Check if a regular expression validates the attribute.
for(let e=0,t=i.length;e<t;e++)if(i[e].test(n))return!0;return!1},Ei={
// Global attributes allowed on any supplied element below.
"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Ti(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const i=(new window.DOMParser).parseFromString(e,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(let e=0,n=r.length;e<n;e++){const n=r[e],i=n.nodeName.toLowerCase();if(!Object.keys(t).includes(i)){n.remove();continue}const o=[].concat(...n.attributes),s=[].concat(t["*"]||[],t[i]||[]);o.forEach((e=>{xi(e,s)||n.removeAttribute(e.nodeName)}))}return i.body.innerHTML}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */const Ci="tooltip",Ai=".bs.tooltip",ki="bs-tooltip",Si=new Set(["sanitize","allowList","sanitizeFn"]),Di={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Oi={AUTO:"auto",TOP:"top",RIGHT:T()?"left":"right",BOTTOM:"bottom",LEFT:T()?"right":"left"},Ni={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:Ei,popperConfig:null},Li={HIDE:`hide${Ai}`,HIDDEN:`hidden${Ai}`,SHOW:`show${Ai}`,SHOWN:`shown${Ai}`,INSERTED:`inserted${Ai}`,CLICK:`click${Ai}`,FOCUSIN:`focusin${Ai}`,FOCUSOUT:`focusout${Ai}`,MOUSEENTER:`mouseenter${Ai}`,MOUSELEAVE:`mouseleave${Ai}`},ji="fade",$i="show",Ii="show",Pi="out",Hi=".tooltip-inner",Mi=".modal",qi="hide.bs.modal",Ri="hover",Bi="focus",Wi="click",Fi="manual";
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class zi extends G{constructor(e,t){if(void 0===n)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),// private
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,// Protected
this._config=this._getConfig(t),this.tip=null,this._setListeners()}// Getters
static get Default(){return Ni}static get NAME(){return Ci}static get Event(){return Li}static get DefaultType(){return Di}// Public
enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains($i))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),X.off(this._element.closest(Mi),qi,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=X.trigger(this._element,this.constructor.Event.SHOW),t=y(this._element),i=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!i)return;// A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
// This will be removed later in favor of a `setContent` method
"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(Hi).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),o=a(this.constructor.NAME);r.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this._config.animation&&r.classList.add(ji);const s="function"==typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,l=this._getAttachment(s);this._addAttachmentClass(l);const{container:c}=this._config;K.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(c.append(r),X.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=n.createPopper(this._element,r,this._getPopperConfig(l)),r.classList.add($i);const u=this._resolvePossibleFunction(this._config.customClass);u&&r.classList.add(...u.split(" ")),// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>{X.on(e,"mouseover",b)}));const f=()=>{const e=this._hoverState;this._hoverState=null,X.trigger(this._element,this.constructor.Event.SHOWN),e===Pi&&this._leave(null,this)},d=this.tip.classList.contains(ji);this._queueCallback(f,this.tip,d)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==Ii&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),X.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())};if(X.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;e.classList.remove($i),// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>X.off(e,"mouseover",b))),this._activeTrigger[Wi]=!1,this._activeTrigger[Bi]=!1,this._activeTrigger[Ri]=!1;const n=this.tip.classList.contains(ji);this._queueCallback(t,this.tip,n),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}// Protected
isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(ji,$i),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Hi)}_sanitizeAndSetContent(e,t,n){const i=ge.findOne(n,e);t||!i?// we use append for html objects to maintain js events
this.setElementContent(i,t):i.remove()}setElementContent(e,t){if(null!==e)return h(t)?(t=p(t),void(// content is a DOM node or a jQuery
this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Ti(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}// Private
_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Oi[e.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach((e=>{if("click"===e)X.on(this._element,this.constructor.Event.CLICK,this._config.selector,(e=>this.toggle(e)));else if(e!==Fi){const t=e===Ri?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===Ri?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;X.on(this._element,t,this._config.selector,(e=>this._enter(e))),X.on(this._element,n,this._config.selector,(e=>this._leave(e)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},X.on(this._element.closest(Mi),qi,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?Bi:Ri]=!0),t.getTipElement().classList.contains($i)||t._hoverState===Ii?t._hoverState=Ii:(clearTimeout(t._timeout),t._hoverState=Ii,t._config.delay&&t._config.delay.show?t._timeout=setTimeout((()=>{t._hoverState===Ii&&t.show()}),t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?Bi:Ri]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Pi,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout((()=>{t._hoverState===Pi&&t.hide()}),t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=he.getDataAttributes(this._element);return Object.keys(t).forEach((e=>{Si.has(e)&&delete t[e]})),(e={...this.constructor.Default,...t,..."object"==typeof e&&e?e:{}}).container=!1===e.container?document.body:p(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),g(Ci,e,this.constructor.DefaultType),e.sanitize&&(e.template=Ti(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);// In the future can be replaced with:
// const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
// `Object.fromEntries(keysWithDifferentValues)`
return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map((e=>e.trim())).forEach((t=>e.classList.remove(t)))}_getBasicClassPrefix(){return ki}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}// Static
static jQueryInterface(e){return this.each((function(){const t=zi.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */C(zi);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
const Ui="popover",Vi=".bs.popover",Xi="bs-popover",Yi={...zi.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Ki={...zi.DefaultType,content:"(string|element|function)"},Qi={HIDE:`hide${Vi}`,HIDDEN:`hidden${Vi}`,SHOW:`show${Vi}`,SHOWN:`shown${Vi}`,INSERTED:`inserted${Vi}`,CLICK:`click${Vi}`,FOCUSIN:`focusin${Vi}`,FOCUSOUT:`focusout${Vi}`,MOUSEENTER:`mouseenter${Vi}`,MOUSELEAVE:`mouseleave${Vi}`},Gi=".popover-header",Ji=".popover-body";
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class Zi extends zi{
// Getters
static get Default(){return Yi}static get NAME(){return Ui}static get Event(){return Qi}static get DefaultType(){return Ki}// Overrides
isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Gi),this._sanitizeAndSetContent(e,this._getContent(),Ji)}// Private
_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return Xi}// Static
static jQueryInterface(e){return this.each((function(){const t=Zi.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */C(Zi);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
const er="scrollspy",tr=".bs.scrollspy",nr={offset:10,method:"auto",target:""},ir={offset:"number",method:"string",target:"(string|element)"},rr=`activate${tr}`,or=`scroll${tr}`,sr=`load${tr}.data-api`,ar="dropdown-item",lr="active",cr='[data-bs-spy="scroll"]',ur=".nav, .list-group",fr=".nav-link",dr=".nav-item",hr=".list-group-item",pr=`${fr}, ${hr}, .${ar}`,gr=".dropdown",mr=".dropdown-toggle",vr="offset",yr="position";
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class br extends G{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,X.on(this._scrollElement,or,(()=>this._process())),this.refresh(),this._process()}// Getters
static get Default(){return nr}static get NAME(){return er}// Public
refresh(){const e=this._scrollElement===this._scrollElement.window?vr:yr,t="auto"===this._config.method?e:this._config.method,n=t===yr?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),ge.find(pr,this._config.target).map((e=>{const i=c(e),r=i?ge.findOne(i):null;if(r){const e=r.getBoundingClientRect();if(e.width||e.height)return[he[t](r).top+n,i]}return null})).filter((e=>e)).sort(((e,t)=>e[0]-t[0])).forEach((e=>{this._offsets.push(e[0]),this._targets.push(e[1])}))}dispose(){X.off(this._scrollElement,tr),super.dispose()}// Private
_getConfig(e){return(e={...nr,...he.getDataAttributes(this._element),..."object"==typeof e&&e?e:{}}).target=p(e.target)||document.documentElement,g(er,e,ir),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;)this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&(void 0===this._offsets[t+1]||e<this._offsets[t+1])&&this._activate(this._targets[t])}}_activate(e){this._activeTarget=e,this._clear();const t=pr.split(",").map((t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),n=ge.findOne(t.join(","),this._config.target);n.classList.add(lr),n.classList.contains(ar)?ge.findOne(mr,n.closest(gr)).classList.add(lr):ge.parents(n,ur).forEach((e=>{
// Set triggered links parents as active
// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
ge.prev(e,`${fr}, ${hr}`).forEach((e=>e.classList.add(lr))),// Handle special case when .nav-link is inside .nav-item
ge.prev(e,dr).forEach((e=>{ge.children(e,fr).forEach((e=>e.classList.add(lr)))}))})),X.trigger(this._scrollElement,rr,{relatedTarget:e})}_clear(){ge.find(pr,this._config.target).filter((e=>e.classList.contains(lr))).forEach((e=>e.classList.remove(lr)))}// Static
static jQueryInterface(e){return this.each((function(){const t=br.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */X.on(window,sr,(()=>{ge.find(cr).forEach((e=>new br(e)))})),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */
C(br);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
const _r="tab",wr=".bs.tab",xr=`hide${wr}`,Er=`hidden${wr}`,Tr=`show${wr}`,Cr=`shown${wr}`,Ar=`click${wr}.data-api`,kr="dropdown-menu",Sr="active",Dr="fade",Or="show",Nr=".dropdown",Lr=".nav, .list-group",jr=".active",$r=":scope > li > .active",Ir='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Pr=".dropdown-toggle",Hr=":scope > .dropdown-menu .active";
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class Mr extends G{
// Getters
static get NAME(){return _r}// Public
show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Sr))return;let e;const t=u(this._element),n=this._element.closest(Lr);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?$r:jr;e=ge.find(t,n),e=e[e.length-1]}const i=e?X.trigger(e,xr,{relatedTarget:this._element}):null;if(X.trigger(this._element,Tr,{relatedTarget:e}).defaultPrevented||null!==i&&i.defaultPrevented)return;this._activate(this._element,n);const r=()=>{X.trigger(e,Er,{relatedTarget:this._element}),X.trigger(this._element,Cr,{relatedTarget:e})};t?this._activate(t,t.parentNode,r):r()}// Private
_activate(e,t,n){const i=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?ge.children(t,jr):ge.find($r,t))[0],r=n&&i&&i.classList.contains(Dr),o=()=>this._transitionComplete(e,i,n);i&&r?(i.classList.remove(Or),this._queueCallback(o,e,!0)):o()}_transitionComplete(e,t,n){if(t){t.classList.remove(Sr);const e=ge.findOne(Hr,t.parentNode);e&&e.classList.remove(Sr),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(Sr),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),_(e),e.classList.contains(Dr)&&e.classList.add(Or);let i=e.parentNode;if(i&&"LI"===i.nodeName&&(i=i.parentNode),i&&i.classList.contains(kr)){const t=e.closest(Nr);t&&ge.find(Pr,t).forEach((e=>e.classList.add(Sr))),e.setAttribute("aria-expanded",!0)}n&&n()}// Static
static jQueryInterface(e){return this.each((function(){const t=Mr.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */X.on(document,Ar,Ir,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),v(this)||Mr.getOrCreateInstance(this).show()})),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */
C(Mr);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
const qr="toast",Rr=".bs.toast",Br=`mouseover${Rr}`,Wr=`mouseout${Rr}`,Fr=`focusin${Rr}`,zr=`focusout${Rr}`,Ur=`hide${Rr}`,Vr=`hidden${Rr}`,Xr=`show${Rr}`,Yr=`shown${Rr}`,Kr="fade",Qr="hide",Gr="show",Jr="showing",Zr={animation:"boolean",autohide:"boolean",delay:"number"},eo={animation:!0,autohide:!0,delay:5e3};
/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
class to extends G{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}// Getters
static get DefaultType(){return Zr}static get Default(){return eo}static get NAME(){return qr}// Public
show(){if(X.trigger(this._element,Xr).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Kr);const e=()=>{this._element.classList.remove(Jr),X.trigger(this._element,Yr),this._maybeScheduleHide()};this._element.classList.remove(Qr),// @deprecated
_(this._element),this._element.classList.add(Gr),this._element.classList.add(Jr),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Gr))return;if(X.trigger(this._element,Ur).defaultPrevented)return;const e=()=>{this._element.classList.add(Qr),// @deprecated
this._element.classList.remove(Jr),this._element.classList.remove(Gr),X.trigger(this._element,Vr)};this._element.classList.add(Jr),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Gr)&&this._element.classList.remove(Gr),super.dispose()}// Private
_getConfig(e){return e={...eo,...he.getDataAttributes(this._element),..."object"==typeof e&&e?e:{}},g(qr,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){X.on(this._element,Br,(e=>this._onInteraction(e,!0))),X.on(this._element,Wr,(e=>this._onInteraction(e,!1))),X.on(this._element,Fr,(e=>this._onInteraction(e,!0))),X.on(this._element,zr,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}// Static
static jQueryInterface(e){return this.each((function(){const t=to.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return J(to),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */
C(to),{Alert:oe,Button:ue,Carousel:st,Collapse:kt,Dropdown:cn,Modal:ei,Offcanvas:yi,Popover:Zi,ScrollSpy:br,Tab:Mr,Toast:to,Tooltip:zi}}(n(750));
//# sourceMappingURL=bootstrap.js.map
/***/},
/***/755:
/***/function(e,t){var n;
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */!function(t,n){"use strict";"object"==typeof e.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t);
// Pass this if window is not defined yet
}("undefined"!=typeof window?window:this,(function(i,r){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var o=[],s=Object.getPrototypeOf,a=o.slice,l=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},c=o.push,u=o.indexOf,f={},d=f.toString,h=f.hasOwnProperty,p=h.toString,g=p.call(Object),m={},v=function(e){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},b=i.document,_={type:!0,src:!0,nonce:!0,noModule:!0};function w(e,t,n){var i,r,o=(n=n||b).createElement("script");if(o.text=e,t)for(i in _)
// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(r=t[i]||t.getAttribute&&t.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[d.call(e)]||"object":typeof e;
// Support: Android <=2.3 only (functionish RegExp)
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var E="3.6.0",
// Define a local copy of jQuery
T=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new T.fn.init(e,t)};function C(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}T.fn=T.prototype={
// The current version of jQuery being used
jquery:E,constructor:T,
// The default length of a jQuery object is 0
length:0,toArray:function(){return a.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
return null==e?a.call(this):e<0?this[e+this.length]:this[e];
// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=T.merge(this.constructor(),e);
// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(T.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:c,sort:o.sort,splice:o.splice},T.extend=T.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,c=!1;
// Handle a deep copy situation
for("boolean"==typeof s&&(c=s,
// Skip the boolean and the target
s=arguments[a]||{},a++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof s||v(s)||(s={}),
// Extend jQuery itself if only one argument is passed
a===l&&(s=this,a--);a<l;a++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[a]))
// Extend the base object
for(t in e)i=e[t],
// Prevent Object.prototype pollution
// Prevent never-ending loop
"__proto__"!==t&&s!==i&&(
// Recurse if we're merging plain objects or arrays
c&&i&&(T.isPlainObject(i)||(r=Array.isArray(i)))?(n=s[t],
// Ensure proper type for the source value
o=r&&!Array.isArray(n)?[]:r||T.isPlainObject(n)?n:{},r=!1,
// Never move original objects, clone them
s[t]=T.extend(c,o,i)):void 0!==i&&(s[t]=i));
// Return the modified object
return s},T.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(E+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!e||"[object Object]"!==d.call(e))&&(
// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(t=s(e))||"function"==typeof(
// Objects with prototype are plain iff they were constructed by a global Object function
n=h.call(t,"constructor")&&t.constructor)&&p.call(n)===g)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},
// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(C(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?T.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var i=[],r=0,o=e.length,s=!n;r<o;r++)!t(e[r],r)!==s&&i.push(e[r]);return i},
// arg is for internal usage only
map:function(e,t,n){var i,r,o=0,s=[];
// Go through the array, translating each of the items to their new values
if(C(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&s.push(r);
// Go through every key on the object,
else for(o in e)null!=(r=t(e[o],o,n))&&s.push(r);
// Flatten any nested arrays
return l(s)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:m}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=o[Symbol.iterator]),
// Populate the class2type map
T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){f["[object "+t+"]"]=t.toLowerCase()}));var A=
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
function(e){var t,n,i,r,o,s,a,l,c,u,f,
// Local document vars
d,h,p,g,m,v,y,b,
// Instance-specific data
_="sizzle"+1*new Date,w=e.document,x=0,E=0,T=le(),C=le(),A=le(),k=le(),S=function(e,t){return e===t&&(f=!0),0},
// Instance methods
D={}.hasOwnProperty,O=[],N=O.pop,L=O.push,j=O.push,$=O.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
I=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
H="[\\x20\\t\\r\\n\\f]",
// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
M="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
q="\\[[\\x20\\t\\r\\n\\f]*("+M+")(?:"+H+
// Operator (capture 2)
"*([*^$|!~]?=)"+H+
// "Attribute values must be CSS identifiers [capture 5]
// or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+H+"*\\]",R=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+q+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
B=new RegExp(H+"+","g"),W=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),F=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),z=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),U=new RegExp(H+"|>"),V=new RegExp(R),X=new RegExp("^"+M+"$"),Y={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+q),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},K=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
te=new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(
// Replace a hexadecimal escape sequence with the encoded Unicode code point
// Support: IE <=11+
// For values outside the Basic Multilingual Plane (BMP), manually construct a
// surrogate pair
n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,re=function(e,t){return t?
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;
// Other potentially-special ASCII characters get backslash-escaped
},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
oe=function(){d()},se=_e((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{j.apply(O=$.call(w.childNodes),w.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
O[w.childNodes.length].nodeType}catch(e){j={apply:O.length?
// Leverage slice if possible
function(e,t){L.apply(e,$.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function ae(e,t,i,r){var o,a,c,u,f,p,v,y=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
w=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(i=i||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return i;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&(d(t),t=t||h,g)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==w&&(f=Z.exec(e)))
// ID selector
if(o=f[1]){
// Document context
if(9===w){if(!(c=t.getElementById(o)))return i;
// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(c.id===o)return i.push(c),i}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(y&&(c=y.getElementById(o))&&b(t,c)&&c.id===o)return i.push(c),i;
// Type selector
}else{if(f[2])return j.apply(i,t.getElementsByTagName(e)),i;
// Class selector
if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return j.apply(i,t.getElementsByClassName(o)),i}
// Take advantage of querySelectorAll
if(n.qsa&&!k[e+" "]&&(!m||!m.test(e))&&(
// Support: IE 8 only
// Exclude object elements
1!==w||"object"!==t.nodeName.toLowerCase())){
// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(v=e,y=t,1===w&&(U.test(e)||z.test(e))){for(
// Expand context for sibling selectors
// We can use :scope instead of the ID hack if the browser
// supports it & if we're not changing the context.
(y=ee.test(e)&&ve(t.parentNode)||t)===t&&n.scope||(
// Capture the context ID, setting it first if necessary
(u=t.getAttribute("id"))?u=u.replace(ie,re):t.setAttribute("id",u=_)),a=(
// Prefix every selector in the list
p=s(e)).length;a--;)p[a]=(u?"#"+u:":scope")+" "+be(p[a]);v=p.join(",")}try{return j.apply(i,y.querySelectorAll(v)),i}catch(t){k(e,!0)}finally{u===_&&t.removeAttribute("id")}}}
// All others
return l(e.replace(W,"$1"),t,i,r)}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function le(){var e=[];return function t(n,r){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return e.push(n+" ")>i.cacheLength&&
// Only keep the most recent entries
delete t[e.shift()],t[n+" "]=r}}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function ce(e){return e[_]=!0,e}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function ue(e){var t=h.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function fe(e,t){for(var n=e.split("|"),r=n.length;r--;)i.attrHandle[n[r]]=t}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function de(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(i)return i;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function he(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}
/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function ge(e){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in t?
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?
// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||
// Where there is no isDisabled, check manually
/* jshint -W018 */
t.isDisabled!==!e&&se(t)===e:t.disabled===e:"label"in t&&t.disabled===e;
// Remaining elements are neither :enabled nor :disabled
}}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function me(e){return ce((function(t){return t=+t,ce((function(n,i){
// Match elements found at the specified indexes
for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))}))}))}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function ve(e){return e&&void 0!==e.getElementsByTagName&&e}
// Expose support vars for convenience
// Add button/input type pseudos
for(t in n=ae.support={},
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
o=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;
// Support: IE <=8
// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
// https://bugs.jquery.com/ticket/4833
return!K.test(t||n&&n.nodeName||"HTML")},
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
d=ae.setDocument=function(e){var t,r,s=e?e.ownerDocument||e:w;
// Return early if doc is invalid or already selected
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
return s!=h&&9===s.nodeType&&s.documentElement?(
// Update global variables
p=(h=s).documentElement,g=!o(h),
// Support: IE 9 - 11+, Edge 12 - 18+
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
w!=h&&(r=h.defaultView)&&r.top!==r&&(
// Support: IE 11, Edge
r.addEventListener?r.addEventListener("unload",oe,!1):r.attachEvent&&r.attachEvent("onunload",oe)),
// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
// Safari 4 - 5 only, Opera <=11.6 - 12.x only
// IE/Edge & older browsers don't support the :scope pseudo-class.
// Support: Safari 6.0 only
// Safari 6.0 supports :scope but it's an alias of :root there.
n.scope=ue((function(e){return p.appendChild(e).appendChild(h.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
n.attributes=ue((function(e){return e.className="i",!e.getAttribute("className")})),
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
n.getElementsByTagName=ue((function(e){return e.appendChild(h.createComment("")),!e.getElementsByTagName("*").length})),
// Support: IE<9
n.getElementsByClassName=J.test(h.getElementsByClassName),
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
n.getById=ue((function(e){return p.appendChild(e).id=_,!h.getElementsByName||!h.getElementsByName(_).length})),
// ID filter and find
n.getById?(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,i,r,o=t.getElementById(e);if(o){if((
// Verify the id attribute
n=o.getAttributeNode("id"))&&n.value===e)return[o];
// Fall back on getElementsByName
for(r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),
// Tag
i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e);
// Filter out possible comments
if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},
// Class
i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
v=[],
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
m=[],(n.qsa=J.test(h.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
ue((function(e){var t;
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
p.appendChild(e).innerHTML="<a id='"+_+"'></a><select id='"+_+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+P+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+_+"-]").length||m.push("~="),(
// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
t=h.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||m.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+_+"+*").length||m.push(".#.+[+~]"),
// Support: Firefox <=3.6 - 5 only
// Old Firefox doesn't throw on a badly-escaped identifier.
e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ue((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=h.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),
// Support: Opera 10 - 11 only
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=J.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ue((function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
n.disconnectedMatch=y.call(e,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
y.call(e,"[s!='']:x"),v.push("!=",R)})),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),
/* Contains
	---------------------------------------------------------------------- */
t=J.test(p.compareDocumentPosition),
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
b=t||J.test(p.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
S=t?function(e,t){
// Flag for duplicate removal
if(e===t)return f=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(
// Disconnected nodes
1&(
// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
i=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):
// Otherwise we know they are disconnected
1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?
// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e==h||e.ownerDocument==w&&b(w,e)?-1:
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
t==h||t.ownerDocument==w&&b(w,t)?1:u?I(u,e)-I(u,t):0:4&i?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return f=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,s=[e],a=[t];
// Parentless nodes are either documents or disconnected
if(!r||!o)
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
/* eslint-disable eqeqeq */
return e==h?-1:t==h?1:
/* eslint-enable eqeqeq */
r?-1:o?1:u?I(u,e)-I(u,t):0;
// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(r===o)return de(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);
// Walk down the tree looking for a discrepancy
for(;s[i]===a[i];)i++;return i?
// Do a sibling check if the nodes have a common ancestor
de(s[i],a[i]):
// Otherwise nodes in our document sort first
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
/* eslint-disable eqeqeq */
s[i]==w?-1:a[i]==w?1:
/* eslint-enable eqeqeq */
0},h):h},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(d(e),n.matchesSelector&&g&&!k[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var i=y.call(e,t);
// IE 9's matchesSelector returns false on disconnected nodes
if(i||n.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return i}catch(e){k(t,!0)}return ae(t,h,null,[e]).length>0},ae.contains=function(e,t){
// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
return(e.ownerDocument||e)!=h&&d(e),b(e,t)},ae.attr=function(e,t){
// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=h&&d(e);var r=i.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
o=r&&D.call(i.attrHandle,t.toLowerCase())?r(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ae.escape=function(e){return(e+"").replace(ie,re)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
ae.uniqueSort=function(e){var t,i=[],r=0,o=0;
// Unless we *know* we can detect duplicates, assume their presence
if(f=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(S),f){for(;t=e[o++];)t===e[o]&&(r=i.push(o));for(;r--;)e.splice(i[r],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return u=null,e},
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
r=ae.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===o||4===o)return e.nodeValue;
// Do not include comment or processing instruction nodes
}else
// If no nodeType, this is expected to be an array
for(;t=e[i++];)
// Do not traverse comment nodes
n+=r(t);return n},i=ae.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:ce,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),
// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){
/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(
// nth-* requires argument
e[3]||ae.error(e[0]),
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Y.CHILD.test(e[0])?null:(
// Accept quoted arguments as-is
e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(
// Get excess from tokenize (recursively)
t=s(n,!0))&&(
// advance to the next closing parenthesis
t=n.indexOf(")",n.length-t)-n.length)&&(
// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+H+"|$)"))&&T(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(i){var r=ae.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(B," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?
// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(t,n,l){var c,u,f,d,h,p,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(m){
// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(d=t;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
p=g="only"===e&&!p&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(p=[s?m.firstChild:m.lastChild],s&&y){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
b=(h=(c=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
u=(f=(d=m)[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===x&&c[1])&&c[2],d=h&&m.childNodes[h];d=++h&&d&&d[g]||(
// Fallback to seeking `elem` from the start
b=h=0)||p.pop();)
// When found, cache indexes on `parent` and break
if(1===d.nodeType&&++b&&d===t){u[e]=[x,h,b];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
y&&(b=h=(c=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
u=(f=(
// ...in a gzip-friendly way
d=t)[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===x&&c[1]),!1===b)
// Use the same loop as above to seek `elem` from the start
for(;(d=++h&&d&&d[g]||(b=h=0)||p.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(
// Cache the index of each encountered element
y&&((
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
u=(f=d[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[x,b]),d!==t)););
// Incorporate the offset, then check against cycle size
return(b-=r)===i||b%i==0&&b/i>=0}}},PSEUDO:function(e,t){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return r[_]?r(t):
// But maintain support for old signatures
r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ce((function(e,n){for(var i,o=r(e,t),s=o.length;s--;)e[i=I(e,o[s])]=!(n[i]=o[s])})):function(e){return r(e,0,n)}):r}},pseudos:{
// Potentially complex pseudos
not:ce((function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=a(e.replace(W,"$1"));return i[_]?ce((function(e,t,n,r){
// Match elements unmatched by `matcher`
for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))})):function(e,r,o){return t[0]=e,i(t,null,o,n),
// Don't keep the element (issue #299)
t[0]=null,!n.pop()}})),has:ce((function(e){return function(t){return ae(e,t).length>0}})),contains:ce((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||r(t)).indexOf(e)>-1}})),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:ce((function(e){
// lang value must be a valid identifier
return X.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),
// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:ge(!1),disabled:ge(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&
// eslint-disable-next-line no-unused-expressions
e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},
// Element/input types
header:function(e){return G.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e})),gt:me((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}},i.pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=he(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=pe(t);
// Easy API for creating new setFilters
function ye(){}function be(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function _e(e,t,n){var i=t.dir,r=t.next,o=r||i,s=n&&"parentNode"===o,a=E++;return t.first?
// Check against closest ancestor/preceding element
function(t,n,r){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,r);return!1}:
// Check against all ancestor/preceding elements
function(t,n,l){var c,u,f,d=[x,a];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s)if(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
u=(f=t[_]||(t[_]={}))[t.uniqueID]||(f[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((c=u[o])&&c[0]===x&&c[1]===a)
// Assign to newCache so results back-propagate to previous elements
return d[2]=c[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
u[o]=d,d[2]=e(t,n,l))return!0}return!1}}function we(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function xe(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(o=e[a])&&(n&&!n(o,i,r)||(s.push(o),c&&t.push(a)));return s}function Ee(e,t,n,i,r,o){return i&&!i[_]&&(i=Ee(i)),r&&!r[_]&&(r=Ee(r,o)),ce((function(o,s,a,l){var c,u,f,d=[],h=[],p=s.length,
// Get initial elements from seed or context
g=o||function(e,t,n){for(var i=0,r=t.length;i<r;i++)ae(e,t[i],n);return n}(t||"*",a.nodeType?[a]:a,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
m=!e||!o&&t?g:xe(g,d,e,a,l),v=n?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
r||(o?e:p||i)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
s:m;
// Find primary matches
// Apply postFilter
if(n&&n(m,v,a,l),i)for(c=xe(v,h),i(c,[],a,l),
// Un-match failing elements by moving them back to matcherIn
u=c.length;u--;)(f=c[u])&&(v[h[u]]=!(m[h[u]]=f));if(o){if(r||e){if(r){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
c=[],u=v.length;u--;)(f=v[u])&&
// Restore matcherIn since elem is not yet a final match
c.push(m[u]=f);r(null,v=[],c,l)}
// Move matched elements from seed to results to keep them synchronized
for(u=v.length;u--;)(f=v[u])&&(c=r?I(o,f):d[u])>-1&&(o[c]=!(s[c]=f))}
// Add elements to results, through postFinder if defined
}else v=xe(v===s?v.splice(p,v.length):v),r?r(null,s,v,l):j.apply(s,v)}))}function Te(e){for(var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
u=_e((function(e){return e===t}),a,!0),f=_e((function(e){return I(t,e)>-1}),a,!0),d=[function(e,n,i){var r=!s&&(i||n!==c)||((t=n).nodeType?u(e,n,i):f(e,n,i));
// Avoid hanging onto element (issue #299)
return t=null,r}];l<o;l++)if(n=i.relative[e[l].type])d=[_e(we(d),n)];else{
// Return special upon seeing a positional matcher
if((n=i.filter[e[l].type].apply(null,e[l].matches))[_]){for(
// Find the next relative operator (if any) for proper handling
r=++l;r<o&&!i.relative[e[r].type];r++);return Ee(l>1&&we(d),l>1&&be(
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(W,"$1"),n,l<r&&Te(e.slice(l,r)),r<o&&Te(e=e.slice(r)),r<o&&be(e))}d.push(n)}return we(d)}return ye.prototype=i.filters=i.pseudos,i.setFilters=new ye,s=ae.tokenize=function(e,t){var n,r,o,s,a,l,c,u=C[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=i.preFilter;a;){
// Filters
for(s in
// Comma and first run
n&&!(r=F.exec(a))||(r&&(
// Don't consume trailing commas as valid
a=a.slice(r[0].length)||a),l.push(o=[])),n=!1,
// Combinators
(r=z.exec(a))&&(n=r.shift(),o.push({value:n,
// Cast descendant combinators to space
type:r[0].replace(W," ")}),a=a.slice(n.length)),i.filter)!(r=Y[s].exec(a))||c[s]&&!(r=c[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return t?a.length:a?ae.error(e):
// Cache the tokens
C(e,l).slice(0)},a=ae.compile=function(e,t/* Internal Use Only */){var n,r=[],o=[],a=A[e+" "];if(!a){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=s(e)),n=t.length;n--;)(a=Te(t[n]))[_]?r.push(a):o.push(a);
// Cache the compiled function
a=A(e,function(e,t){var n=t.length>0,r=e.length>0,o=function(o,s,a,l,u){var f,p,m,v=0,y="0",b=o&&[],_=[],w=c,
// We must always have either seed elements or outermost context
E=o||r&&i.find.TAG("*",u),
// Use integer dirruns iff this is the outermost matcher
T=x+=null==w?1:Math.random()||.1,C=E.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(u&&(
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
c=s==h||s||u);y!==C&&null!=(f=E[y]);y++){if(r&&f){for(p=0,
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
s||f.ownerDocument==h||(d(f),a=!g);m=e[p++];)if(m(f,s||h,a)){l.push(f);break}u&&(x=T)}
// Track unmatched elements for set filters
n&&(
// They will have gone through all possible matchers
(f=!m&&f)&&v--,
// Lengthen the array for every element, matched or not
o&&b.push(f))}
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(v+=y,n&&y!==v){for(p=0;m=t[p++];)m(b,_,s,a);if(o){
// Reintegrate element matches to eliminate the need for sorting
if(v>0)for(;y--;)b[y]||_[y]||(_[y]=N.call(l));
// Discard index placeholder values to get only actual matches
_=xe(_)}
// Add matches to results
j.apply(l,_),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
u&&!o&&_.length>0&&v+t.length>1&&ae.uniqueSort(l)}
// Override manipulation of globals by nested matchers
return u&&(x=T,c=w),b};return n?ce(o):o}(o,r)),
// Save selector and tokenization
a.selector=e}return a},
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
l=ae.select=function(e,t,n,r){var o,l,c,u,f,d="function"==typeof e&&e,h=!r&&s(e=d.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===h.length){if((
// Reduce context if the leading compound selector is an ID
l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===t.nodeType&&g&&i.relative[l[1].type]){if(!(t=(i.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;
// Precompiled matchers will still verify ancestry, so step up a level
d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}
// Fetch a seed set for right-to-left matching
for(o=Y.needsContext.test(e)?0:l.length;o--&&(c=l[o],!i.relative[u=c.type]);)if((f=i.find[u])&&(r=f(c.matches[0].replace(te,ne),ee.test(l[0].type)&&ve(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
l.splice(o,1),!(e=r.length&&be(l)))return j.apply(n,r),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(d||a(e,h))(r,t,!g,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},
// One-time assignments
// Sort stability
n.sortStable=_.split("").sort(S).join("")===_,
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
n.detectDuplicates=!!f,
// Initialize against the default document
d(),
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
n.sortDetached=ue((function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(h.createElement("fieldset"))})),
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
ue((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||fe("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
n.attributes&&ue((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||fe("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
ue((function(e){return null==e.getAttribute("disabled")}))||fe(P,(function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),ae}(i);T.find=A,T.expr=A.selectors,
// Deprecated
T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=A.uniqueSort,T.text=A.getText,T.isXMLDoc=A.isXML,T.contains=A.contains,T.escapeSelector=A.escape;var k=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&T(e).is(n))break;i.push(e)}return i},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=T.expr.match.needsContext;function O(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
// Implement the identical functionality for filter and not
function L(e,t,n){return v(t)?T.grep(e,(function(e,i){return!!t.call(e,i,e)!==n})):
// Single element
t.nodeType?T.grep(e,(function(e){return e===t!==n})):
// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof t?T.grep(e,(function(e){return u.call(t,e)>-1!==n})):T.filter(t,e,n)}T.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?T.find.matchesSelector(i,e)?[i]:[]:T.find.matches(e,T.grep(t,(function(e){return 1===e.nodeType})))},T.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(T(e).filter((function(){for(t=0;t<i;t++)if(T.contains(r[t],this))return!0})));for(n=this.pushStack([]),t=0;t<i;t++)T.find(e,r[t],n);return i>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&D.test(e)?T(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var j,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
$=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
// Give the init function the jQuery prototype for later instantiation
(T.fn.init=function(e,t,n){var i,r;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||j,"string"==typeof e){
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:$.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(i[1]){
// HANDLE: $(html, props)
if(t=t instanceof T?t[0]:t,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
T.merge(this,T.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),N.test(i[1])&&T.isPlainObject(t))for(i in t)
// Properties of context are called as methods if possible
v(this[i])?this[i](t[i]):this.attr(i,t[i]);return this;
// HANDLE: $(#id)
}
// HANDLE: $(expr, $(...))
return(r=b.getElementById(i[2]))&&(
// Inject the element directly into the jQuery object
this[0]=r,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):
// Execute immediately if ready is not present
e(T):T.makeArray(e,this)}).prototype=T.fn,
// Initialize central reference
j=T(b);var I=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
P={children:!0,contents:!0,next:!0,prev:!0};function H(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0}))},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&T(e);
// Positional selectors never match, since there's no _selection_ context
if(!D.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(s?s.index(n)>-1:
// Don't pass non-elements to Sizzle
1===n.nodeType&&T.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?T.uniqueSort(o):o)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
return e?
// Index in selector
"string"==typeof e?u.call(T(e),this[0]):u.call(this,
// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return H(e,"nextSibling")},prev:function(e){return H(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return null!=e.contentDocument&&
// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
s(e.contentDocument)?e.contentDocument:(
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
O(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},(function(e,t){T.fn[e]=function(n,i){var r=T.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=T.filter(i,r)),this.length>1&&(
// Remove duplicates
P[e]||T.uniqueSort(r),
// Reverse order for parents* and prev-derivatives
I.test(e)&&r.reverse()),this.pushStack(r)}}));var M=/[^\x20\t\r\n\f]+/g;
// Convert String-formatted options into Object-formatted ones
function q(e){return e}function R(e){throw e}function B(e,t,n,i){var r;try{
// Check for promise aspect first to privilege synchronous behavior
e&&v(r=e.promise)?r.call(e).done(t).fail(n):e&&v(r=e.then)?r.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(i));
// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
T.Callbacks=function(e){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?function(e){var t={};return T.each(e.match(M)||[],(function(e,n){t[n]=!0})),t}(e):T.extend({},e);var// Flag to know if list is currently firing
t,
// Last fire value for non-forgettable lists
n,
// Flag to know if list was already fired
i,
// Flag to prevent firing
r,
// Actual callback list
o=[],
// Queue of execution data for repeatable lists
s=[],
// Index of currently firing callback (modified by add/remove as needed)
a=-1,
// Fire callbacks
l=function(){for(
// Enforce single-firing
r=r||e.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
i=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)
// Run callback and check for early termination
!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
a=o.length,n=!1);
// Forget the data if we're done with it
e.memory||(n=!1),t=!1,
// Clean up if we're done firing for good
r&&(
// Keep an empty list if we have data for future add calls
o=n?[]:"")},
// Actual Callbacks object
c={
// Add a callback or a collection of callbacks to the list
add:function(){return o&&(
// If we have memory from a past run, we should fire after adding
n&&!t&&(a=o.length-1,s.push(n)),function t(n){T.each(n,(function(n,i){v(i)?e.unique&&c.has(i)||o.push(i):i&&i.length&&"string"!==x(i)&&
// Inspect recursively
t(i)}))}(arguments),n&&!t&&l()),this},
// Remove a callback from the list
remove:function(){return T.each(arguments,(function(e,t){for(var n;(n=T.inArray(t,o,n))>-1;)o.splice(n,1),
// Handle firing indexes
n<=a&&a--})),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?T.inArray(e,o)>-1:o.length>0},
// Remove all callbacks from the list
empty:function(){return o&&(o=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return r=s=[],o=n="",this},disabled:function(){return!o},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return r=s=[],n||t||(o=n=""),this},locked:function(){return!!r},
// Call all callbacks with the given context and arguments
fireWith:function(e,n){return r||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||l()),this},
// Call all the callbacks with the given arguments
fire:function(){return c.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!i}};return c},T.extend({Deferred:function(e){var t=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],n="pending",r={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var e=arguments;return T.Deferred((function(n){T.each(t,(function(t,i){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var r=v(e[i[4]])&&e[i[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[i[1]]((function(){var e=r&&r.apply(this,arguments);e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,r){var o=0;function s(e,t,n,r){return function(){var a=this,l=arguments,c=function(){var i,c;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<o)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((i=n.apply(a,l))===t.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=i&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof i||"function"==typeof i)&&i.then,
// Handle a returned thenable
v(c)?
// Special processors (notify) just wait for resolution
r?c.call(i,s(o,t,q,r),s(o,t,R,r)):(
// ...and disregard older resolution values
o++,c.call(i,s(o,t,q,r),s(o,t,R,r),s(o,t,q,t.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
n!==q&&(a=void 0,l=[i]),
// Process the value(s)
// Default process is resolve
(r||t.resolveWith)(a,l))}},
// Only normal processors (resolve) catch and reject exceptions
u=r?c:function(){try{c()}catch(i){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(i,u.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
e+1>=o&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
n!==R&&(a=void 0,l=[i]),t.rejectWith(a,l))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?u():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
T.Deferred.getStackHook&&(u.stackTrace=T.Deferred.getStackHook()),i.setTimeout(u))}}return T.Deferred((function(i){
// progress_handlers.add( ... )
t[0][3].add(s(0,i,v(r)?r:q,i.notifyWith)),
// fulfilled_handlers.add( ... )
t[1][3].add(s(0,i,v(e)?e:q)),
// rejected_handlers.add( ... )
t[2][3].add(s(0,i,v(n)?n:R))})).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?T.extend(e,r):r}},o={};
// Add list-specific methods
// All done!
return T.each(t,(function(e,i){var s=i[2],a=i[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
r[i[1]]=s.add,
// Handle state
a&&s.add((function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
n=a}),
// rejected_callbacks.disable
// fulfilled_callbacks.disable
t[3-e][2].disable,
// rejected_handlers.disable
// fulfilled_handlers.disable
t[3-e][3].disable,
// progress_callbacks.lock
t[0][2].lock,
// progress_handlers.lock
t[0][3].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
s.add(i[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[i[0]]=function(){return o[i[0]+"With"](this===o?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[i[0]+"With"]=s.fireWith})),
// Make the deferred a promise
r.promise(o),
// Call given func if any
e&&e.call(o,o),o},
// Deferred helper
when:function(e){var
// count of uncompleted subordinates
t=arguments.length,
// count of unprocessed arguments
n=t,
// subordinate fulfillment data
i=Array(n),r=a.call(arguments),
// the primary Deferred
o=T.Deferred(),
// subordinate callback factory
s=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?a.call(arguments):n,--t||o.resolveWith(i,r)}};
// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(B(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||v(r[n]&&r[n].then)))return o.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)B(r[n],s(n),o.reject);return o.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
i.console&&i.console.warn&&e&&W.test(e.name)&&i.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},T.readyException=function(e){i.setTimeout((function(){throw e}))};
// The deferred used on DOM ready
var F=T.Deferred();
// The ready event handler and self cleanup method
function z(){b.removeEventListener("DOMContentLoaded",z),i.removeEventListener("load",z),T.ready()}
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
T.fn.ready=function(e){return F.then(e).catch((function(e){T.readyException(e)})),this},T.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--T.readyWait:T.isReady)||(
// Remember that the DOM is ready
T.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
!0!==e&&--T.readyWait>0||
// If there are functions bound, to execute
F.resolveWith(b,[T]))}}),T.ready.then=F.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
i.setTimeout(T.ready):(
// Use the handy event callback
b.addEventListener("DOMContentLoaded",z),
// A fallback to window.onload, that will always work
i.addEventListener("load",z));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var U=function(e,t,n,i,r,o,s){var a=0,l=e.length,c=null==n;
// Sets many values
if("object"===x(n))for(a in r=!0,n)U(e,t,a,n[a],!0,o,s);
// Sets one value
else if(void 0!==i&&(r=!0,v(i)||(s=!0),c&&(
// Bulk operations run against the entire set
s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(T(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:
// Gets
c?t.call(e):l?t(e[0],n):o},V=/^-ms-/,X=/-([a-z])/g;
// Matches dashed string for camelizing
// Used by camelCase as callback to replace()
function Y(e,t){return t.toUpperCase()}
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function K(e){return e.replace(V,"ms-").replace(X,Y)}var Q=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=T.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];
// If not, create one
return t||(t={},
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
Q(e)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)r[K(t)]=n;
// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(i in t)r[K(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):
// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][K(t)]},access:function(e,t,n){
// In cases where either:
//   1. No key was specified
//   2. A string key was specified, but no value provided
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//   1. The entire cache object
//   2. The data stored at the key
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//   1. An object of properties
//   2. A key and value
this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(
// Support array or space separated string of keys
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(K):(t=K(t))in i?[t]:t.match(M)||[]).length;for(;n--;)delete i[t[n]]}
// Remove the expando if there's no more data
(void 0===t||T.isEmptyObject(i))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var J=new G,Z=new G,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g;function ne(e,t,n){var i;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:
// Only convert to a number if it doesn't change the string
e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}
// Make sure we set the data so it isn't changed later
Z.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return Z.hasData(e)||J.hasData(e)},data:function(e,t,n){return Z.access(e,t,n)},removeData:function(e,t){Z.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;
// Gets all values
if(void 0===e){if(this.length&&(r=Z.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(n=s.length;n--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=K(i.slice(5)),ne(o,i,r[i]));J.set(o,"hasDataAttrs",!0)}return r}
// Sets multiple values
return"object"==typeof e?this.each((function(){Z.set(this,e)})):U(this,(function(t){var n;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
n=Z.get(o,e))||void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
n=ne(o,e))?n:
// We tried really hard, but the data doesn't exist.
void 0;
// Set the data...
this.each((function(){
// We always store the camelCased key
Z.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){Z.remove(this,e)}))}}),T.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=J.get(e,t),
// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!i||Array.isArray(n)?i=J.access(e,t,T.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),i=n.length,r=n.shift(),o=T._queueHooks(e,t);
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===r&&(r=n.shift(),i--),r&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete o.stop,r.call(e,(function(){T.dequeue(e,t)}),o)),!i&&o&&o.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:T.Callbacks("once memory").add((function(){J.remove(e,[t+"queue",n])}))})}}),T.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each((function(){var n=T.queue(this,e,t);
// Ensure a hooks for this queue
T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){T.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,i=1,r=T.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=J.get(o[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,re=new RegExp("^(?:([+-])=|)("+ie+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],se=b.documentElement,ae=function(e){return T.contains(e.ownerDocument,e)},le={composed:!0};
// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
// Check attachment across shadow DOM boundaries when possible (gh-3504)
// Support: iOS 10.0-10.2 only
// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
// leading to errors. We need to check for `getRootNode`.
se.getRootNode&&(ae=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(le)===e.ownerDocument});var ce=function(e,t){
// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
e=t||e).style.display||""===e.style.display&&
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ae(e)&&"none"===T.css(e,"display")};function ue(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return T.css(e,t,"")},l=a(),c=n&&n[3]||(T.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
u=e.nodeType&&(T.cssNumber[t]||"px"!==c&&+l)&&re.exec(T.css(e,t));if(u&&u[3]!==c){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,
// Trust units reported by jQuery.css
c=c||u[3],
// Iteratively approximate from a nonzero starting point
u=+l||1;s--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
T.style(e,t,u+c),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),u/=o;u*=2,T.style(e,t,u+c),
// Make sure we update the tween properties later on
n=n||[]}return n&&(u=+u||+l||0,
// Apply relative offset (+=/-=) if specified
r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var fe={};function de(e){var t,n=e.ownerDocument,i=e.nodeName,r=fe[i];return r||(t=n.body.appendChild(n.createElement(i)),r=T.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),fe[i]=r,r)}function he(e,t){
// Determine new display value for elements that need to change
for(var n,i,r=[],o=0,s=e.length;o<s;o++)(i=e[o]).style&&(n=i.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(r[o]=J.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&ce(i)&&(r[o]=de(i))):"none"!==n&&(r[o]="none",
// Remember what we're overwriting
J.set(i,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<s;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}T.fn.extend({show:function(){return he(this,!0)},hide:function(){return he(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ce(this)?T(this).show():T(this).hide()}))}});var pe,ge,me=/^(?:checkbox|radio)$/i,ve=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ye=/^$|^module$|\/(?:java|ecma)script/i;pe=b.createDocumentFragment().appendChild(b.createElement("div")),
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(ge=b.createElement("input")).setAttribute("type","radio"),ge.setAttribute("checked","checked"),ge.setAttribute("name","t"),pe.appendChild(ge),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
m.checkClone=pe.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
pe.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!pe.cloneNode(!0).lastChild.defaultValue,
// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
pe.innerHTML="<option></option>",m.option=!!pe.lastChild;
// We have to close these tags to support XHTML (#13200)
var be={
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function _e(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&O(e,t)?T.merge([e],n):n}
// Mark scripts as having already been evaluated
function we(e,t){for(var n=0,i=e.length;n<i;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,
// Support: IE <=9 only
m.option||(be.optgroup=be.option=[1,"<select multiple='multiple'>","</select>"]);var xe=/<|&#?\w+;/;function Ee(e,t,n,i,r){for(var o,s,a,l,c,u,f=t.createDocumentFragment(),d=[],h=0,p=e.length;h<p;h++)if((o=e[h])||0===o)
// Add nodes directly
if("object"===x(o))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
T.merge(d,o.nodeType?[o]:o);
// Convert non-html into a text node
else if(xe.test(o)){for(s=s||f.appendChild(t.createElement("div")),
// Deserialize a standard representation
a=(ve.exec(o)||["",""])[1].toLowerCase(),l=be[a]||be._default,s.innerHTML=l[1]+T.htmlPrefilter(o)+l[2],
// Descend through wrappers to the right content
u=l[0];u--;)s=s.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
T.merge(d,s.childNodes),
// Ensure the created nodes are orphaned (#12392)
(
// Remember the top-level container
s=f.firstChild).textContent=""}else d.push(t.createTextNode(o));
// Convert html into DOM nodes
// Remove wrapper from fragment
for(f.textContent="",h=0;o=d[h++];)
// Skip elements already in the context collection (trac-4087)
if(i&&T.inArray(o,i)>-1)r&&r.push(o);else
// Capture executables
if(c=ae(o),
// Append to fragment
s=_e(f.appendChild(o),"script"),
// Preserve script evaluation history
c&&we(s),n)for(u=0;o=s[u++];)ye.test(o.type||"")&&n.push(o);return f}var Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ae(){return!1}
// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function ke(e,t){return e===
// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return b.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,i,r,o){var s,a;
// Types can be a map of types/handlers
if("object"==typeof t){for(a in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
i=i||n,n=void 0),t)Se(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(
// ( types, fn )
r=n,i=n=void 0):null==r&&("string"==typeof n?(
// ( types, selector, fn )
r=i,i=void 0):(
// ( types, data, fn )
r=i,i=n,n=void 0)),!1===r)r=Ae;else if(!r)return e;return 1===o&&(s=r,r=function(e){
// Can use an empty set, since event contains the info
return T().off(e),s.apply(this,arguments)},
// Use same guid so caller can remove using origFn
r.guid=s.guid||(s.guid=T.guid++)),e.each((function(){T.event.add(this,t,r,i,n)}))}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function De(e,t,n){
// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
n?(
// Register the controller as a special universal handler for all event namespaces
J.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var i,r,o=J.get(this,t);if(1&e.isTrigger&&this[t]){
// Interrupt processing of the outer synthetic .trigger()ed event
// Saved data should be false in such cases, but might be a leftover capture object
// from an async native handler (gh-4350)
if(o.length)(T.event.special[t]||{}).delegateType&&e.stopPropagation();
// If this is a native event triggered above, everything is now in order
// Fire an inner synthetic event with the original arguments
else if(
// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
o=a.call(arguments),J.set(this,t,o),
// Trigger the native event and capture its result
// Support: IE <=9 - 11+
// focus() and blur() are asynchronous
i=n(this,t),this[t](),o!==(r=J.get(this,t))||i?J.set(this,t,!1):r={},o!==r)
// Support: Chrome 86+
// In Chrome, if an element having a focusout handler is blurred by
// clicking outside of it, it invokes the handler synchronously. If
// that handler calls `.remove()` on the element, the data is cleared,
// leaving `result` undefined. We need to guard against this.
// Cancel the outer synthetic event
return e.stopImmediatePropagation(),e.preventDefault(),r&&r.value;
// If this is an inner synthetic event for an event with a bubbling surrogate
// (focus or blur), assume that the surrogate already propagated from triggering the
// native event and prevent that from happening again here.
// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
// bubbling surrogate propagates *after* the non-bubbling base), but that seems
// less bad than duplication.
}else o.length&&(
// ...and capture the result
J.set(this,t,{value:T.event.trigger(
// Support: IE <=9 - 11+
// Extend with the prototype to reset the above stopImmediatePropagation()
T.extend(o[0],T.Event.prototype),o.slice(1),this)}),
// Abort handling of the native event
e.stopImmediatePropagation())}})):void 0===J.get(e,t)&&T.event.add(e,t,Ce)}T.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,c,u,f,d,h,p,g,m=J.get(e);
// Only attach events to objects that accept data
if(Q(e))for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(o=n).handler,r=o.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
r&&T.find.matchesSelector(se,r),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=T.guid++),
// Init the element's event structure and main handler, if this is the first
(l=m.events)||(l=m.events=Object.create(null)),(s=m.handle)||(s=m.handle=function(t){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),c=(
// Handle multiple events separated by a space
t=(t||"").match(M)||[""]).length;c--;)h=g=(a=Te.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
h&&(
// If event changes its type, use the special event handlers for the changed type
f=T.event.special[h]||{},
// If selector defined, determine special event api type, otherwise given type
h=(r?f.delegateType:f.bindType)||h,
// Update special based on newly reset type
f=T.event.special[h]||{},
// handleObj is passed to all event handlers
u=T.extend({type:h,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&T.expr.match.needsContext.test(r),namespace:p.join(".")},o),
// Init the event handler queue if we're the first
(d=l[h])||((d=l[h]=[]).delegateCount=0,
// Only use addEventListener if the special events handler returns false
f.setup&&!1!==f.setup.call(e,i,p,s)||e.addEventListener&&e.addEventListener(h,s)),f.add&&(f.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
r?d.splice(d.delegateCount++,0,u):d.push(u),
// Keep track of which events have ever been used, for event optimization
T.event.global[h]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,i,r){var o,s,a,l,c,u,f,d,h,p,g,m=J.hasData(e)&&J.get(e);if(m&&(l=m.events)){for(c=(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(M)||[""]).length;c--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=g=(a=Te.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),h){for(f=T.event.special[h]||{},d=l[h=(i?f.delegateType:f.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
s=o=d.length;o--;)u=d[o],!r&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(d.splice(o,1),u.selector&&d.delegateCount--,f.remove&&f.remove.call(e,u));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
s&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,p,m.handle)||T.removeEvent(e,h,m.handle),delete l[h])}else for(h in l)T.event.remove(e,h+t[c],n,i,!0);
// Remove data and the expando if it's no longer used
T.isEmptyObject(l)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s,a=new Array(arguments.length),
// Make a writable jQuery.Event from the native event object
l=T.event.fix(e),c=(J.get(this,"events")||Object.create(null))[l.type]||[],u=T.event.special[l.type]||{};
// Use the fix-ed jQuery.Event rather than the (read-only) native event
for(a[0]=l,t=1;t<arguments.length;t++)a[t]=arguments[t];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(
// Determine handlers
s=T.event.handlers.call(this,l,c),
// Run delegates first; they may want to stop propagation beneath us
t=0;(r=s[t++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!l.isImmediatePropagationStopped();)
// If the event is namespaced, then each handler is only invoked if it is
// specially universal or its namespaces are a superset of the event's.
l.rnamespace&&!1!==o.namespace&&!l.rnamespace.test(o.namespace)||(l.handleObj=o,l.data=o.data,void 0!==(i=((T.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));
// Call the postDispatch hook for the mapped type
return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,i,r,o,s,a=[],l=t.delegateCount,c=e.target;
// Find delegate handlers
if(l&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],s={},n=0;n<l;n++)void 0===s[
// Don't conflict with Object.prototype properties (#13203)
r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?T(r,this).index(c)>-1:T.find(r,this,null,[c]).length),s[r]&&o.push(i);o.length&&a.push({elem:c,handlers:o})}
// Add the remaining (directly-bound) handlers
return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{
// Utilize native event to ensure correct state for checkable inputs
setup:function(e){
// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;
// Claim the first handler
// Return false to allow normal processing in the caller
return me.test(t.type)&&t.click&&O(t,"input")&&
// dataPriv.set( el, "click", ... )
De(t,"click",Ce),!1},trigger:function(e){
// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;
// Force setup before triggering a click
// Return non-false to allow normal event-path propagation
return me.test(t.type)&&t.click&&O(t,"input")&&De(t,"click"),!0},
// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return me.test(t.type)&&t.click&&O(t,"input")&&J.get(t,"click")||O(t,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof T.Event))return new T.Event(e,t);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&
// Support: Android <=2.3 only
!1===e.returnValue?Ce:Ae,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,
// Put explicitly provided properties onto the event object
t&&T.extend(this,t),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),
// Mark it as fixed
this[T.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
T.Event.prototype={constructor:T.Event,isDefaultPrevented:Ae,isPropagationStopped:Ae,isImmediatePropagationStopped:Ae,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},(function(e,t){T.event.special[e]={
// Utilize native event if possible so blur/focus sequence is correct
setup:function(){
// Return false to allow normal processing in the caller
// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
return De(this,e,ke),!1},trigger:function(){
// Return non-false to allow normal event-path propagation
// Force setup before trigger
return De(this,e),!0},
// Suppress native focus or blur as it's already being fired
// in leverageNative.
_default:function(){return!0},delegateType:t}})),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return r&&(r===i||T.contains(i,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),T.fn.extend({on:function(e,t,n,i){return Se(this,e,t,n,i)},one:function(e,t,n,i){return Se(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return i=e.handleObj,T(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){
// ( types-object [, selector] )
for(r in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(
// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=Ae),this.each((function(){T.event.remove(this,e,n,t)}))}});var
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
Oe=/<script|<style|<link/i,
// checked="checked" or checked
Ne=/checked\s*(?:[^=]|=\s*.checked.)/i,Le=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
// Prefer a tbody over its parent table for containing new rows
function je(e,t){return O(e,"table")&&O(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function $e(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ie(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,i,r,o,s,a;if(1===t.nodeType){
// 1. Copy private data: events, handlers, etc.
if(J.hasData(e)&&(a=J.get(e).events))for(r in J.remove(t,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)T.event.add(t,r,a[r][n]);
// 2. Copy user data
Z.hasData(e)&&(o=Z.access(e),s=T.extend({},o),Z.set(t,s))}}
// Fix IE bugs, see support tests
function He(e,t){var n=t.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&me.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Me(e,t,n,i){
// Flatten any nested arrays
t=l(t);var r,o,s,a,c,u,f=0,d=e.length,h=d-1,p=t[0],g=v(p);
// We can't cloneNode fragments that contain checked, in WebKit
if(g||d>1&&"string"==typeof p&&!m.checkClone&&Ne.test(p))return e.each((function(r){var o=e.eq(r);g&&(t[0]=p.call(this,r,o.html())),Me(o,t,n,i)}));if(d&&(o=(r=Ee(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(a=(s=T.map(_e(r,"script"),$e)).length;f<d;f++)c=r,f!==h&&(c=T.clone(c,!0,!0),
// Keep references to cloned scripts for later restoration
a&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
T.merge(s,_e(c,"script"))),n.call(e[f],c,f);if(a)
// Evaluate executable scripts on first document insertion
for(u=s[s.length-1].ownerDocument,
// Reenable scripts
T.map(s,Ie),f=0;f<a;f++)c=s[f],ye.test(c.type||"")&&!J.access(c,"globalEval")&&T.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
T._evalUrl&&!c.noModule&&T._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):w(c.textContent.replace(Le,""),c,u))}return e}function qe(e,t,n){for(var i,r=t?T.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||T.cleanData(_e(i)),i.parentNode&&(n&&ae(i)&&we(_e(i,"script")),i.parentNode.removeChild(i));return e}T.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=ae(e);
// Fix IE cloning issues
if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
s=_e(a),i=0,r=(o=_e(e)).length;i<r;i++)He(o[i],s[i]);
// Copy the events from the original to the clone
if(t)if(n)for(o=o||_e(e),s=s||_e(a),i=0,r=o.length;i<r;i++)Pe(o[i],s[i]);else Pe(e,a);
// Preserve script evaluation history
// Return the cloned set
return(s=_e(a,"script")).length>0&&we(s,!l&&_e(e,"script")),a},cleanData:function(e){for(var t,n,i,r=T.event.special,o=0;void 0!==(n=e[o]);o++)if(Q(n)){if(t=n[J.expando]){if(t.events)for(i in t.events)r[i]?T.event.remove(n,i):T.removeEvent(n,i,t.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[J.expando]=void 0}n[Z.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Z.expando]=void 0)}}}),T.fn.extend({detach:function(e){return qe(this,e,!0)},remove:function(e){return qe(this,e)},text:function(e){return U(this,(function(e){return void 0===e?T.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Me(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)}))},prepend:function(){return Me(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
T.cleanData(_e(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return T.clone(this,e,t)}))},html:function(e){return U(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!Oe.test(e)&&!be[(ve.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<i;n++)
// Remove element nodes and prevent memory leaks
1===(t=this[n]||{}).nodeType&&(T.cleanData(_e(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];
// Make the changes, replacing each non-ignored context element with the new content
return Me(this,arguments,(function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(_e(this)),n&&n.replaceChild(t,this));
// Force callback invocation
}),e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){T.fn[e]=function(e){for(var n,i=[],r=T(e),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),T(r[s])[t](n),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
c.apply(i,n.get());return this.pushStack(i)}}));var Re=new RegExp("^("+ie+")(?!px)[a-z%]+$","i"),Be=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=i),t.getComputedStyle(e)},We=function(e,t,n){var i,r,o={};
// Remember the old values, and insert the new ones
for(r in t)o[r]=e.style[r],e.style[r]=t[r];
// Revert the old values
for(r in i=n.call(e),t)e.style[r]=o[r];return i},Fe=new RegExp(oe.join("|"),"i");function ze(e,t,n){var i,r,o,s,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
a=e.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||Be(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||ae(e)||(s=T.style(e,t)),
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!m.pixelBoxStyles()&&Re.test(s)&&Fe.test(t)&&(
// Remember the original values
i=a.width,r=a.minWidth,o=a.maxWidth,
// Put in the new values to get a computed value out
a.minWidth=a.maxWidth=a.width=s,s=n.width,
// Revert the changed values
a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
s+"":s}function Ue(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(!e())
// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments);
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get}}}!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",se.appendChild(c).appendChild(u);var e=i.getComputedStyle(u);n="1%"!==e.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l=12===t(e.marginLeft),
// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
u.style.right="60%",s=36===t(e.right),
// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
r=36===t(e.width),
// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
u.style.position="absolute",o=12===t(u.offsetWidth/3),se.removeChild(c),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,o,s,a,l,c=b.createElement("div"),u=b.createElement("div");
// Finish early in limited (non-browser) environments
u.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===u.style.backgroundClip,T.extend(m,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),o},
// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=b.createElement("table"),t=b.createElement("tr"),n=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",
// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
t.style.height="1px",n.style.height="9px",
// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is display: block
// gets around this issue.
n.style.display="block",se.appendChild(e).appendChild(t).appendChild(n),r=i.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,se.removeChild(e)),a}}))}();var Ve=["Webkit","Moz","ms"],Xe=b.createElement("div").style,Ye={};
// Return a vendor-prefixed property or undefined
// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function Ke(e){var t=T.cssProps[e]||Ye[e];return t||(e in Xe?e:Ye[e]=function(e){for(
// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=Ve.length;n--;)if((e=Ve[n]+t)in Xe)return e}(e)||e)}var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
Qe=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:"0",fontWeight:"400"};function et(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var i=re.exec(t);return i?
// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function tt(e,t,n,i,r,o){var s="width"===t?1:0,a=0,l=0;
// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)
// Both box models exclude margin
"margin"===n&&(l+=T.css(e,n+oe[s],!0,r)),
// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
i?(
// For "content", subtract padding
"content"===n&&(l-=T.css(e,"padding"+oe[s],!0,r)),
// For "content" or "padding", subtract border
"margin"!==n&&(l-=T.css(e,"border"+oe[s]+"Width",!0,r))):(
// Add padding
l+=T.css(e,"padding"+oe[s],!0,r),
// For "border" or "margin", add border
"padding"!==n?l+=T.css(e,"border"+oe[s]+"Width",!0,r):a+=T.css(e,"border"+oe[s]+"Width",!0,r));
// Account for positive content-box scroll gutter when requested by providing computedVal
return!i&&o>=0&&(
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))||0),l}function nt(e,t,n){
// Start with computed style
var i=Be(e),r=(!m.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,i),o=r,s=ze(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);
// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(Re.test(s)){if(!n)return s;s="auto"}
// Support: IE 9 - 11 only
// Use offsetWidth/offsetHeight for when box sizing is unreliable.
// In those cases, the computed value can be trusted to be border-box.
// Adjust for the element's box model
return(!m.boxSizingReliable()&&r||
// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!m.reliableTrDimensions()&&O(e,"tr")||
// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===s||
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(s)&&"inline"===T.css(e,"display",!1,i))&&
// Make sure the element is visible & connected
e.getClientRects().length&&(r="border-box"===T.css(e,"boxSizing",!1,i),(
// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
o=a in e)&&(s=e[a])),(
// Normalize "" and auto
s=parseFloat(s)||0)+tt(e,t,n||(r?"border":"content"),o,i,
// Provide the current computed size to request scroll gutter calculation (gh-3589)
s)+"px"}function it(e,t,n,i,r){return new it.prototype.init(e,t,n,i,r)}T.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=ze(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(e,t,n,i){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var r,o,s,a=K(t),l=Ge.test(t),c=e.style;
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(l||(t=Ke(a)),
// Gets hook for the prefixed version, then unprefixed version
s=T.cssHooks[t]||T.cssHooks[a],void 0===n)
// If a hook was provided get the non-computed value from there
return s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:c[t];
// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(o=typeof n)&&(r=re.exec(n))&&r[1]&&(n=ue(e,t,r),
// Fixes bug #9237
o="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
// "px" to a few hardcoded values.
"number"!==o||l||(n+=r&&r[3]||(T.cssNumber[a]?"":"px")),
// background-* props affect original clone's values
m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var r,o,s,a=K(t);
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return Ge.test(t)||(t=Ke(a)),
// If a hook was provided get the computed value from there
(
// Try prefixed name followed by the unprefixed name
s=T.cssHooks[t]||T.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),
// Otherwise, if a way to get the computed value exists, use that
void 0===r&&(r=ze(e,t,i)),
// Convert "normal" to computed value
"normal"===r&&t in Ze&&(r=Ze[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),T.each(["height","width"],(function(e,t){T.cssHooks[t]={get:function(e,n,i){if(n)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!Qe.test(T.css(e,"display"))||
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?nt(e,t,i):We(e,Je,(function(){return nt(e,t,i)}))},set:function(e,n,i){var r,o=Be(e),
// Only read styles.position if the test has a chance to fail
// to avoid forcing a reflow.
s=!m.scrollboxSize()&&"absolute"===o.position,a=(s||i)&&"border-box"===T.css(e,"boxSizing",!1,o),l=i?tt(e,t,i,a,o):0;
// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-tt(e,t,"border",!1,o)-.5)),
// Convert to pixels if value adjustment is needed
l&&(r=re.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),et(0,n,l)}}})),T.cssHooks.marginLeft=Ue(m.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(ze(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),
// These hooks are used by animate to expand properties
T.each({margin:"",padding:"",border:"Width"},(function(e,t){T.cssHooks[e+t]={expand:function(n){for(var i=0,r={},
// Assumes a single number if not a string
o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+oe[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(T.cssHooks[e+t].set=et)})),T.fn.extend({css:function(e,t){return U(this,(function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=Be(e),r=t.length;s<r;s++)o[t[s]]=T.css(e,t[s],!1,i);return o}return void 0!==n?T.style(e,t,n):T.css(e,t)}),e,t,arguments.length>1)}}),T.Tween=it,it.prototype={constructor:it,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(T.cssNumber[n]?"":"px")},cur:function(){var e=it.propHooks[this.prop];return e&&e.get?e.get(this):it.propHooks._default.get(this)},run:function(e){var t,n=it.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):it.propHooks._default.set(this),this}},it.prototype.init.prototype=it.prototype,it.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||!T.cssHooks[e.prop]&&null==e.elem.style[Ke(e.prop)]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
it.propHooks.scrollTop=it.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=it.prototype.init,
// Back compat <1.8 extension point
T.fx.step={};var rt,ot,st=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function lt(){ot&&(!1===b.hidden&&i.requestAnimationFrame?i.requestAnimationFrame(lt):i.setTimeout(lt,T.fx.interval),T.fx.tick())}
// Animations created synchronously will run synchronously
function ct(){return i.setTimeout((function(){rt=void 0})),rt=Date.now()}
// Generate parameters to create a standard animation
function ut(e,t){var n,i=0,r={height:e};
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=oe[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function ft(e,t,n){for(var i,r=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))
// We're done with this property
return i}function dt(e,t,n){var i,r,o=0,s=dt.prefilters.length,a=T.Deferred().always((function(){
// Don't match elem in the :animated selector
delete l.elem})),l=function(){if(r)return!1;for(var t=rt||ct(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),o=0,s=c.tweens.length;o<s;o++)c.tweens[o].run(i);
// If there's more to do, yield
return a.notifyWith(e,[c,i,n]),i<1&&s?n:(
// If this was an empty animation, synthesize a final progress notification
s||a.notifyWith(e,[c,1,0]),
// Resolve the animation and report its conclusion
a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:rt||ct(),duration:n.duration,tweens:[],createTween:function(t,n){var i=T.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(!function(e,t){var n,i,r,o,s;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=t[i=K(n)],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=T.cssHooks[i])&&"expand"in s)
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=s.expand(o),delete e[i],o)n in e||(e[n]=o[n],t[n]=r);else t[i]=r}(u,c.opts.specialEasing);o<s;o++)if(i=dt.prefilters[o].call(c,e,u,c.opts))return v(i.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return T.map(u,ft,c),v(c.opts.start)&&c.opts.start.call(e,c),
// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,re.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(M);for(var n,i=0,r=e.length;i<r;i++)n=e[i],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,s,a,l,c,u,f="width"in t||"height"in t,d=this,h={},p=e.style,g=e.nodeType&&ce(e),m=J.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(i in n.queue||(null==(s=T._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always((function(){
// Ensure the complete handler is called before this completes
d.always((function(){s.unqueued--,T.queue(e,"fx").length||s.empty.fire()}))}))),t)if(r=t[i],st.test(r)){if(delete t[i],o=o||"toggle"===r,r===(g?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==r||!m||void 0===m[i])continue;g=!0}h[i]=m&&m[i]||T.style(e,i)}
// Bail out if this is a no-op like .hide().hide()
if((l=!T.isEmptyObject(t))||!T.isEmptyObject(h))for(i in
// Restrict "overflow" and "display" styles during box animations
f&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(
// Identify a display type, preferring old show/hide data over the CSS cascade
c=m&&m.display)&&(c=J.get(e,"display")),"none"===(u=T.css(e,"display"))&&(c?u=c:(
// Get nonempty value(s) by temporarily forcing visibility
he([e],!0),c=e.style.display||c,u=T.css(e,"display"),he([e]))),
// Animate inline elements as inline-block
("inline"===u||"inline-block"===u&&null!=c)&&"none"===T.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(d.done((function(){p.display=c})),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),
// Implement show/hide animations
l=!1,h)
// General show/hide setup for this element animation
l||(m?"hidden"in m&&(g=m.hidden):m=J.access(e,"fxshow",{display:c}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
o&&(m.hidden=!g),
// Show elements before animating them
g&&he([e],!0)
/* eslint-disable no-loop-func */,d.done((function(){for(i in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
g||he([e]),J.remove(e,"fxshow"),h)T.style(e,i,h[i])}))),
// Per-property setup
l=ft(g?m[i]:0,i,d),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),T.speed=function(e,t,n){var i=e&&"object"==typeof e?T.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};
// Go to the end state if fx are off
return T.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in T.fx.speeds?i.duration=T.fx.speeds[i.duration]:i.duration=T.fx.speeds._default),
// Normalize opt.queue - true/undefined/null -> "fx"
null!=i.queue&&!0!==i.queue||(i.queue="fx"),
// Queueing
i.old=i.complete,i.complete=function(){v(i.old)&&i.old.call(this),i.queue&&T.dequeue(this,i.queue)},i},T.fn.extend({fadeTo:function(e,t,n,i){
// Show any hidden elements after setting opacity to 0
return this.filter(ce).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=T.isEmptyObject(e),o=T.speed(t,n,i),s=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=dt(this,T.extend({},e),o);
// Empty animations, or finishing resolves immediately
(r||J.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,r=null!=e&&e+"queueHooks",o=T.timers,s=J.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&at.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!t&&n||T.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=J.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=T.timers,s=i?i.length:0;
// Enable finishing flag on private data
// Look for any active animations, and finish them
for(n.finish=!0,
// Empty the queue first
T.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
// Look for any animations in the old queue and finish them
for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);
// Turn off finishing flag
delete n.finish}))}}),T.each(["toggle","show","hide"],(function(e,t){var n=T.fn[t];T.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,i,r)}})),
// Generate shortcuts for custom animations
T.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){T.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(rt=Date.now();t<n.length;t++)
// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),rt=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){ot||(ot=!0,lt())},T.fx.stop=function(){ot=null},T.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
T.fn.delay=function(e,t){return e=T.fx&&T.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var r=i.setTimeout(t,e);n.stop=function(){i.clearTimeout(r)}}))},function(){var e=b.createElement("input"),t=b.createElement("select").appendChild(b.createElement("option"));e.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
m.checkOn=""!==e.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
m.optSelected=t.selected,(
// Support: IE <=11 only
// An input loses its value after becoming a radio
e=b.createElement("input")).value="t",e.type="radio",m.radioValue="t"===e.value}();var ht,pt=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return U(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){T.removeAttr(this,e)}))}}),T.extend({attr:function(e,t,n){var i,r,o=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fallback to prop when attributes are not supported
return void 0===e.getAttribute?T.prop(e,t,n):(
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===o&&T.isXMLDoc(e)||(r=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=T.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&O(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
r=t&&t.match(M);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),
// Hooks for boolean attributes
ht={set:function(e,t,n){return!1===t?
// Remove boolean attributes when set to false
T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=pt[t]||T.find.attr;pt[t]=function(e,t,i){var r,o,s=t.toLowerCase();return i||(
// Avoid an infinite loop by temporarily removing this function from the getter
o=pt[s],pt[s]=r,r=null!=n(e,t,i)?s:null,pt[s]=o),r}}));var gt=/^(?:input|select|textarea|button)$/i,mt=/^(?:a|area)$/i;
// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function vt(e){return(e.match(M)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(M)||[]}T.fn.extend({prop:function(e,t){return U(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[T.propFix[e]||e]}))}}),T.extend({prop:function(e,t,n){var i,r,o=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return 1===o&&T.isXMLDoc(e)||(
// Fix name and attach hooks
t=T.propFix[t]||t,r=T.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||mt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
m.optSelected||(T.propHooks.selected={get:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){T.propFix[this.toLowerCase()]=this})),T.fn.extend({addClass:function(e){var t,n,i,r,o,s,a,l=0;if(v(e))return this.each((function(t){T(this).addClass(e.call(this,t,yt(this)))}));if((t=bt(e)).length)for(;n=this[l++];)if(r=yt(n),i=1===n.nodeType&&" "+vt(r)+" "){for(s=0;o=t[s++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");
// Only assign if different to avoid unneeded rendering.
r!==(a=vt(i))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,r,o,s,a,l=0;if(v(e))return this.each((function(t){T(this).removeClass(e.call(this,t,yt(this)))}));if(!arguments.length)return this.attr("class","");if((t=bt(e)).length)for(;n=this[l++];)if(r=yt(n),
// This expression is here for better compressibility (see addClass)
i=1===n.nodeType&&" "+vt(r)+" "){for(s=0;o=t[s++];)
// Remove *all* instances
for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");
// Only assign if different to avoid unneeded rendering.
r!==(a=vt(i))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):v(e)?this.each((function(n){T(this).toggleClass(e.call(this,n,yt(this),t),t)})):this.each((function(){var t,r,o,s;if(i)for(
// Toggle individual class names
r=0,o=T(this),s=bt(e);t=s[r++];)
// Check each className given, space separated list
o.hasClass(t)?o.removeClass(t):o.addClass(t);
// Toggle whole class name
else void 0!==e&&"boolean"!==n||((t=yt(this))&&
// Store className if set
J.set(this,"__className__",t),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+vt(yt(n))+" ").indexOf(t)>-1)return!0;return!1}});var _t=/\r/g;T.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=v(e),this.each((function(n){var r;1===this.nodeType&&(
// Treat null/undefined as ""; convert numbers to string
null==(r=i?e.call(this,n,T(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=T.map(r,(function(e){return null==e?"":e+""}))),
// If set returns undefined, fall back to normal setting
(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}))):r?(t=T.valHooks[r.type]||T.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:
// Handle most common string cases
"string"==typeof(n=r.value)?n.replace(_t,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
vt(T.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?o+1:r.length;
// Loop through all the selected options
for(i=o<0?l:s?o:0;i<l;i++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=r[i]).selected||i===o)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!O(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=T(n).val(),s)return t;
// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,o=T.makeArray(t),s=r.length;s--;)
/* eslint-disable no-cond-assign */
((i=r[s]).selected=T.inArray(T.valHooks.option.get(i),o)>-1)&&(n=!0)
/* eslint-enable no-cond-assign */;
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),o}}}}),
// Radios and checkboxes getter/setter
T.each(["radio","checkbox"],(function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},m.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),
// Return jQuery for attributes-only inclusion
m.focusin="onfocusin"in i;var wt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(e,t,n,r){var o,s,a,l,c,u,f,d,p=[n||b],g=h.call(e,"type")?e.type:e,m=h.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(s=d=a=n=n||b,3!==n.nodeType&&8!==n.nodeType&&!wt.test(g+T.event.triggered)&&(g.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
m=g.split("."),g=m.shift(),m.sort()),c=g.indexOf(":")<0&&"on"+g,
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[T.expando]?e:new T.Event(g,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:T.makeArray(t,[e]),
// Allow special events to draw outside the lines
f=T.event.special[g]||{},r||!f.trigger||!1!==f.trigger.apply(n,t))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!r&&!f.noBubble&&!y(n)){for(l=f.delegateType||g,wt.test(l+g)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
a===(n.ownerDocument||b)&&p.push(a.defaultView||a.parentWindow||i)}
// Fire handlers on the event path
for(o=0;(s=p[o++])&&!e.isPropagationStopped();)d=s,e.type=o>1?l:f.bindType||g,(
// jQuery handler
u=(J.get(s,"events")||Object.create(null))[e.type]&&J.get(s,"handle"))&&u.apply(s,t),(
// Native handler
u=c&&s[c])&&u.apply&&Q(s)&&(e.result=u.apply(s,t),!1===e.result&&e.preventDefault());return e.type=g,
// If nobody prevented the default action, do it now
r||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(p.pop(),t)||!Q(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
c&&v(n[g])&&!y(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(a=n[c])&&(n[c]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
T.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,xt),n[g](),e.isPropagationStopped()&&d.removeEventListener(g,xt),T.event.triggered=void 0,a&&(n[c]=a)),e.result}
// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var i=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(i,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each((function(){T.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}}),
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
m.focusin||T.each({focus:"focusin",blur:"focusout"},(function(e,t){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){T.event.simulate(t,e.target,T.event.fix(e))};T.event.special[t]={setup:function(){
// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var i=this.ownerDocument||this.document||this,r=J.access(i,t);r||i.addEventListener(e,n,!0),J.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=J.access(i,t)-1;r?J.access(i,t,r):(i.removeEventListener(e,n,!0),J.remove(i,t))}}}));var Et=i.location,Tt={guid:Date.now()},Ct=/\?/;
// Cross-browser xml parsing
T.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new i.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||T.error("Invalid XML: "+(n?T.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t};var At=/\[\]$/,kt=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;function Ot(e,t,n,i){var r;if(Array.isArray(t))
// Serialize array item.
T.each(t,(function(t,r){n||At.test(e)?
// Treat each array item as a scalar.
i(e,r):
// Item is non-scalar (array or object), encode its numeric index.
Ot(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)}));else if(n||"object"!==x(t))
// Serialize scalar item.
i(e,t);else
// Serialize object item.
for(r in t)Ot(e+"["+r+"]",t[r],n,i)}
// Serialize an array of form elements or a set of
// key/values into a query string
T.param=function(e,t){var n,i=[],r=function(e,t){
// If value is a function, invoke it and use its return value
var n=v(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))
// Serialize the form elements
T.each(e,(function(){r(this.name,this.value)}));else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)Ot(n,e[n],t,r);
// Return the resulting serialization
return i.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map((function(){
// Can add propHook for "elements" to filter or add form elements
var e=T.prop(this,"elements");return e?T.makeArray(e):this})).filter((function(){var e=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!T(this).is(":disabled")&&Dt.test(this.nodeName)&&!St.test(e)&&(this.checked||!me.test(e))})).map((function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,(function(e){return{name:t.name,value:e.replace(kt,"\r\n")}})):{name:t.name,value:n.replace(kt,"\r\n")}})).get()}});var Nt=/%20/g,Lt=/#.*$/,jt=/([?&])_=[^&]*/,$t=/^(.*?):[ \t]*([^\r\n]*)$/gm,It=/^(?:GET|HEAD)$/,Pt=/^\/\//,
/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Ht={},
/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Mt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
qt="*/".concat("*"),
// Anchor tag for parsing the document origin
Rt=b.createElement("a");
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function Bt(e){
// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(M)||[];if(v(n))
// For each dataType in the dataTypeExpression
for(;i=o[r++];)
// Prepend if requested
"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}
// Base inspection function for prefilters and transports
function Wt(e,t,n,i){var r={},o=e===Mt;function s(a){var l;return r[a]=!0,T.each(e[a]||[],(function(e,a){var c=a(t,n,i);return"string"!=typeof c||o||r[c]?o?!(l=c):void 0:(t.dataTypes.unshift(c),s(c),!1)})),l}return s(t.dataTypes[0])||!r["*"]&&s("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function Ft(e,t){var n,i,r=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&T.extend(!0,e,i),e}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */Rt.href=Et.href,T.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":qt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":T.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?
// Building a settings object
Ft(Ft(e,T.ajaxSettings),t):
// Extending ajaxSettings
Ft(T.ajaxSettings,e)},ajaxPrefilter:Bt(Ht),ajaxTransport:Bt(Mt),
// Main method
ajax:function(e,t){
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var n,
// URL without anti-cache param
r,
// Response headers
o,s,
// timeout handle
a,
// Url cleanup var
l,
// Request state (becomes false upon send and true upon completion)
c,
// To know if global events are to be dispatched
u,
// Loop variable
f,
// uncached part of the url
d,
// Create the final options object
h=T.ajaxSetup({},t),
// Callbacks context
p=h.context||h,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
g=h.context&&(p.nodeType||p.jquery)?T(p):T.event,
// Deferreds
m=T.Deferred(),v=T.Callbacks("once memory"),
// Status-dependent callbacks
y=h.statusCode||{},
// Headers (they are sent all at once)
_={},w={},
// Default abort message
x="canceled",
// Fake xhr
E={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=$t.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},
// Raw string
getAllResponseHeaders:function(){return c?o:null},
// Caches the header
setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,_[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(c)
// Execute the appropriate callbacks
E.always(e[E.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)y[t]=[y[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||x;return n&&n.abort(t),C(0,t),this}};
// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(m.promise(E),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
h.url=((e||h.url||Et.href)+"").replace(Pt,Et.protocol+"//"),
// Alias method option to type as per ticket #12004
h.type=t.method||t.type||h.method||h.type,
// Extract dataTypes list
h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=b.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=h.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,h.crossDomain=Rt.protocol+"//"+Rt.host!=l.protocol+"//"+l.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
h.crossDomain=!0}}
// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=T.param(h.data,h.traditional)),
// Apply prefilters
Wt(Ht,h,t,E),c)return E;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(f in
// Watch for a new set of requests
(u=T.event&&h.global)&&0==T.active++&&T.event.trigger("ajaxStart"),
// Uppercase the type
h.type=h.type.toUpperCase(),
// Determine if request has content
h.hasContent=!It.test(h.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
r=h.url.replace(Lt,""),
// More options handling for requests with no content
h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Nt,"+")):(
// Remember the hash so we can put it back
d=h.url.slice(r.length),
// If data is available and should be processed, append data to url
h.data&&(h.processData||"string"==typeof h.data)&&(r+=(Ct.test(r)?"&":"?")+h.data,
// #9682: remove data so that it's not used in an eventual retry
delete h.data),
// Add or update anti-cache param if needed
!1===h.cache&&(r=r.replace(jt,"$1"),d=(Ct.test(r)?"&":"?")+"_="+Tt.guid+++d),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
h.url=r+d),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
h.ifModified&&(T.lastModified[r]&&E.setRequestHeader("If-Modified-Since",T.lastModified[r]),T.etag[r]&&E.setRequestHeader("If-None-Match",T.etag[r])),
// Set the correct header, if data is being sent
(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&E.setRequestHeader("Content-Type",h.contentType),
// Set the Accepts header for the server, depending on the dataType
E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+qt+"; q=0.01":""):h.accepts["*"]),h.headers)E.setRequestHeader(f,h.headers[f]);
// Allow custom headers/mimetypes and early abort
if(h.beforeSend&&(!1===h.beforeSend.call(p,E,h)||c))
// Abort if not done already and return
return E.abort();
// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(x="abort",
// Install callbacks on deferreds
v.add(h.complete),E.done(h.success),E.fail(h.error),
// Get transport
n=Wt(Mt,h,t,E)){
// If request was aborted inside ajaxSend, stop there
if(E.readyState=1,
// Send global event
u&&g.trigger("ajaxSend",[E,h]),c)return E;
// Timeout
h.async&&h.timeout>0&&(a=i.setTimeout((function(){E.abort("timeout")}),h.timeout));try{c=!1,n.send(_,C)}catch(e){
// Rethrow post-completion exceptions
if(c)throw e;
// Propagate others as results
C(-1,e)}}
// Callback for when everything is done
else C(-1,"No Transport");function C(e,t,s,l){var f,d,b,_,w,x=t;
// Ignore repeat invocations
c||(c=!0,
// Clear timeout if it exists
a&&i.clearTimeout(a),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
n=void 0,
// Cache response headers
o=l||"",
// Set readyState
E.readyState=e>0?4:0,
// Determine if successful
f=e>=200&&e<300||304===e,
// Get response data
s&&(_=function(e,t,n){
// Remove auto dataType and get content-type in the process
for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}
// Check to see if we have a response for the expected dataType
if(l[0]in n)o=l[0];else{
// Try convertible dataTypes
for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}
// Or just use first one
o=o||s}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==l[0]&&l.unshift(o),n[o]}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */(h,E,s)),
// Use a noop converter for missing script but not if jsonp
!f&&T.inArray("script",h.dataTypes)>-1&&T.inArray("json",h.dataTypes)<0&&(h.converters["text script"]=function(){}),
// Convert no matter what (that way responseXXX fields are always set)
_=function(e,t,n,i){var r,o,s,a,l,c={},
// Work with a copy of dataTypes in case we need to modify it for conversion
u=e.dataTypes.slice();
// Create converters map with lowercased keys
if(u[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];
// Convert to each sequential dataType
for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),
// Apply the dataFilter if provided
!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=l;
// Convert response if prev dataType is non-auto and differs from current
else if("*"!==l&&l!==o){
// If none found, seek a pair
if(!(
// Seek a direct converter
s=c[l+" "+o]||c["* "+o]))for(r in c)if((
// If conv2 outputs current
a=r.split(" "))[1]===o&&(
// If prev can be converted to accepted input
s=c[l+" "+a[0]]||c["* "+a[0]])){
// Condense equivalence converters
!0===s?s=c[r]:!0!==c[r]&&(o=a[0],u.unshift(a[1]));break}
// Apply converter (if not an equivalence)
if(!0!==s)
// Unless errors are allowed to bubble, catch and return them
if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(h,_,E,f),
// If successful, handle type chaining
f?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
h.ifModified&&((w=E.getResponseHeader("Last-Modified"))&&(T.lastModified[r]=w),(w=E.getResponseHeader("etag"))&&(T.etag[r]=w)),
// if no content
204===e||"HEAD"===h.type?x="nocontent":304===e?x="notmodified":(x=_.state,d=_.data,f=!(b=_.error))):(
// Extract error from statusText and normalize for non-aborts
b=x,!e&&x||(x="error",e<0&&(e=0))),
// Set data for the fake xhr object
E.status=e,E.statusText=(t||x)+"",
// Success/Error
f?m.resolveWith(p,[d,x,E]):m.rejectWith(p,[E,x,b]),
// Status-dependent callbacks
E.statusCode(y),y=void 0,u&&g.trigger(f?"ajaxSuccess":"ajaxError",[E,h,f?d:b]),
// Complete
v.fireWith(p,[E,x]),u&&(g.trigger("ajaxComplete",[E,h]),
// Handle the global AJAX counter
--T.active||T.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],(function(e,t){T[t]=function(e,n,i,r){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return v(n)&&(r=r||i,i=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:r,data:n,success:i},T.isPlainObject(e)&&e))}})),T.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),T._evalUrl=function(e,t,n){return T.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,
// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t,n)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),
// The elements to wrap the target around
t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){T(this).wrapInner(e.call(this,t))})):this.each((function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e);return this.each((function(n){T(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){T(this).replaceWith(this.childNodes)})),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(e){}};var zt={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Ut=T.ajaxSettings.xhr();m.cors=!!Ut&&"withCredentials"in Ut,m.ajax=Ut=!!Ut,T.ajaxTransport((function(e){var t,n;
// Cross domain only allowed if supported through XMLHttpRequest
if(m.cors||Ut&&!e.crossDomain)return{send:function(r,o){var s,a=e.xhr();
// Apply custom fields if provided
if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];
// Override mime type if needed
// Set headers
for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(s,r[s]);
// Callback
t=function(e){return function(){t&&(t=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof a.status?o(0,"error"):o(
// File: protocol always yields status 0; see #8605, #14207
a.status,a.statusText):o(zt[a.status]||a.status,a.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},
// Listen to events
a.onload=t(),n=a.onerror=a.ontimeout=t("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===a.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
i.setTimeout((function(){t&&n()}))},
// Create the abort callback
t=t("abort");try{
// Do send the request (this may raise an exception)
a.send(e.hasContent&&e.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(t)throw e}},abort:function(){t&&t()}}})),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
T.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),
// Install script dataType
T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
T.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),
// Bind script tag hack transport
T.ajaxTransport("script",(function(e){var t,n;
// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs)return{send:function(i,r){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
b.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Vt,Xt=[],Yt=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||T.expando+"_"+Tt.guid++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
T.ajaxPrefilter("json jsonp",(function(e,t,n){var r,o,s,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,
// Insert callback into url or form data
a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(Ct.test(e.url)?"&":"?")+e.jsonp+"="+r),
// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return s||T.error(r+" was not called"),s[0]},
// Force json dataType
e.dataTypes[0]="json",
// Install callback
o=i[r],i[r]=function(){s=arguments},
// Clean-up function (fires after converters)
n.always((function(){
// If previous value didn't exist - remove it
void 0===o?T(i).removeProp(r):i[r]=o,
// Save back as free
e[r]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// Save the callback name for future use
Xt.push(r)),
// Call if it was a function and we have a response
s&&v(o)&&o(s[0]),s=o=void 0})),"script"})),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
m.createHTMLDocument=((Vt=b.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:(
// Single tag
"boolean"==typeof t&&(n=t,t=!1),t||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
m.createHTMLDocument?((
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
i=(t=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,t.head.appendChild(i)):t=b),o=!n&&[],(r=N.exec(e))?[t.createElement(r[1])]:(r=Ee([e],t,o),o&&o.length&&T(o).remove(),T.merge([],r.childNodes)));var i,r,o},
/**
 * Load a url into a page
 */
T.fn.load=function(e,t,n){var i,r,o,s=this,a=e.indexOf(" ");return a>-1&&(i=vt(e.slice(a)),e=e.slice(0,a)),
// If it's a function
v(t)?(
// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),
// If we have elements to modify, make the request
s.length>0&&T.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:r||"GET",dataType:"html",data:t}).done((function(e){
// Save response for use in complete callback
o=arguments,s.html(i?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
T("<div>").append(T.parseHTML(e)).find(i):
// Otherwise use the full result
e)})).always(n&&function(e,t){s.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},T.expr.pseudos.animated=function(e){return T.grep(T.timers,(function(t){return e===t.elem})).length},T.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,c=T.css(e,"position"),u=T(e),f={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),a=u.offset(),o=T.css(e,"top"),l=T.css(e,"left"),
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(s=(i=u.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),v(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,T.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+r),"using"in t?t.using.call(e,f):u.css(f)}},T.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each((function(t){T.offset.setOffset(this,e,t)}));var t,n,i=this[0];return i?
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(
// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};
// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===T.css(i,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
t=i.getBoundingClientRect();else{for(t=this.offset(),
// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
(r=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),r.left+=T.css(e,"borderLeftWidth",!0))}
// Subtract parent offsets and element margins
return{top:t.top-r.top-T.css(i,"marginTop",!0),left:t.left-r.left-T.css(i,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||se}))}}),
// Create scrollLeft and scrollTop methods
T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;T.fn[e]=function(i){return U(this,(function(e,i,r){
// Coalesce documents and windows
var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r}),e,i,arguments.length)}})),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
T.each(["top","left"],(function(e,t){T.cssHooks[t]=Ue(m.pixelPosition,(function(e,n){if(n)
// If curCSS returns percentage, fallback to offset
return n=ze(e,t),Re.test(n)?T(e).position()[t]+"px":n}))})),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
T.each({Height:"height",Width:"width"},(function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,i){
// Margin is only for outerHeight, outerWidth
T.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return U(this,(function(t,n,r){var o;return y(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:
// Get document width or height
9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?
// Get width or height on the element, requesting but not forcing parseFloat
T.css(t,n,a):
// Set width or height on the element
T.style(t,n,r,a)}),t,s?r:void 0,s)}}))})),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){T.fn[t]=function(e){return this.on(t,e)}})),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){
// Handle event binding
T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var Kt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
T.proxy=function(e,t){var n,i,r;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))
// Simulated bind
return i=a.call(arguments,2),r=function(){return e.apply(t||this,i.concat(a.call(arguments)))},
// Set the guid of unique handler to the same of original handler, so it can be removed
r.guid=e.guid=e.guid||T.guid++,r},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=O,T.isFunction=v,T.isWindow=y,T.camelCase=K,T.type=x,T.now=Date.now,T.isNumeric=function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=T.type(e);return("number"===t||"string"===t)&&
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},T.trim=function(e){return null==e?"":(e+"").replace(Kt,"")},void 0===(n=function(){return T}.apply(t,[]))||(e.exports=n);var
// Map over jQuery in case of overwrite
Qt=i.jQuery,
// Map over the $ in case of overwrite
Gt=i.$;return T.noConflict=function(e){return i.$===T&&(i.$=Gt),e&&i.jQuery===T&&(i.jQuery=Qt),T},
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
void 0===r&&(i.jQuery=i.$=T),T}))}}]);