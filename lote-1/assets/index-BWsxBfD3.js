import{r as s,a as y}from"./react-vendor-CK_UPjoB.js";var u={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=s,w=Symbol.for("react.element"),R=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,E=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,o){var r,a={},n=null,i=null;o!==void 0&&(n=""+o),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)h.call(e,r)&&!k.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:w,type:t,key:n,ref:i,props:a,_owner:E.current}}c.Fragment=R;c.jsx=p;c.jsxs=p;u.exports=c;var $=u.exports,b,O,l=y;O=l.createRoot,b=l.hydrateRoot;/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=s.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:a="",children:n,iconNode:i,...m},d)=>s.createElement("svg",{ref:d,...j,width:e,height:e,stroke:t,strokeWidth:r?Number(o)*24/Number(e):o,className:f("lucide",a),...m},[...i.map(([_,v])=>s.createElement(_,v)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(t,e)=>{const o=s.forwardRef(({className:r,...a},n)=>s.createElement(C,{ref:n,iconNode:e,className:f(`lucide-${g(t)}`,r),...a}));return o.displayName=`${t}`,o};export{O as a,A as c,b as h,$ as j};
