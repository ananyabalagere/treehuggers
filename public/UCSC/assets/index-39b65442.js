var em=Object.defineProperty;var nm=(n,t,e)=>t in n?em(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ls=(n,t,e)=>(nm(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Sn(){}function cl(n){return n()}function vu(){return Object.create(null)}function zr(n){n.forEach(cl)}function ll(n){return typeof n=="function"}function hl(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let di;function Au(n,t){return n===t?!0:(di||(di=document.createElement("a")),di.href=t,n===di.href)}function rm(n){return Object.keys(n).length===0}function Bs(n,t){n.appendChild(t)}function Ve(n,t,e){n.insertBefore(t,e||null)}function ne(n){n.parentNode&&n.parentNode.removeChild(n)}function En(n){return document.createElement(n)}function dl(n){return document.createTextNode(n)}function oo(){return dl(" ")}function Ru(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function Us(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function im(n){return Array.from(n.childNodes)}function sm(n,t){t=""+t,n.data!==t&&(n.data=t)}let _r;function cr(n){_r=n}function om(){if(!_r)throw new Error("Function called outside component initialization");return _r}function am(n){om().$$.on_mount.push(n)}const dn=[],Su=[];let Tn=[];const bu=[],um=Promise.resolve();let ao=!1;function cm(){ao||(ao=!0,um.then(fl))}function uo(n){Tn.push(n)}const qs=new Set;let on=0;function fl(){if(on!==0)return;const n=_r;do{try{for(;on<dn.length;){const t=dn[on];on++,cr(t),lm(t.$$)}}catch(t){throw dn.length=0,on=0,t}for(cr(null),dn.length=0,on=0;Su.length;)Su.pop()();for(let t=0;t<Tn.length;t+=1){const e=Tn[t];qs.has(e)||(qs.add(e),e())}Tn.length=0}while(dn.length);for(;bu.length;)bu.pop()();ao=!1,qs.clear(),cr(n)}function lm(n){if(n.fragment!==null){n.update(),zr(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(uo)}}function hm(n){const t=[],e=[];Tn.forEach(r=>n.indexOf(r)===-1?t.push(r):e.push(r)),e.forEach(r=>r()),Tn=t}const vi=new Set;let dm;function ml(n,t){n&&n.i&&(vi.delete(n),n.i(t))}function fm(n,t,e,r){if(n&&n.o){if(vi.has(n))return;vi.add(n),dm.c.push(()=>{vi.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}function mm(n){n&&n.c()}function gl(n,t,e){const{fragment:r,after_update:i}=n.$$;r&&r.m(t,e),uo(()=>{const s=n.$$.on_mount.map(cl).filter(ll);n.$$.on_destroy?n.$$.on_destroy.push(...s):zr(s),n.$$.on_mount=[]}),i.forEach(uo)}function pl(n,t){const e=n.$$;e.fragment!==null&&(hm(e.after_update),zr(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function gm(n,t){n.$$.dirty[0]===-1&&(dn.push(n),cm(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function _l(n,t,e,r,i,s,o=null,a=[-1]){const u=_r;cr(n);const c=n.$$={fragment:null,ctx:[],props:s,update:Sn,not_equal:i,bound:vu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:vu(),dirty:a,skip_bound:!1,root:t.target||u.$$.root};o&&o(c.root);let l=!1;if(c.ctx=e?e(n,t.props||{},(h,d,...f)=>{const I=f.length?f[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=I)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](I),l&&gm(n,h)),d}):[],c.update(),l=!0,zr(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const h=im(t.target);c.fragment&&c.fragment.l(h),h.forEach(ne)}else c.fragment&&c.fragment.c();t.intro&&ml(n.$$.fragment),gl(n,t.target,t.anchor),fl()}cr(u)}class yl{constructor(){Ls(this,"$$");Ls(this,"$$set")}$destroy(){pl(this,1),this.$destroy=Sn}$on(t,e){if(!ll(e))return Sn;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const i=r.indexOf(e);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!rm(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pm="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pm);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},_m=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;u||(f=64,o||(d=64)),r.push(e[l],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Il(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_m(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const c=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new ym;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const I=c<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ym extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Im=function(n){const t=Il(n);return El.encodeByteArray(t,!0)},xi=function(n){return Im(n).replace(/\./g,"")},Em=function(n){try{return El.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Ni(n,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const e=t;return new Date(e.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return t}for(const e in t)!t.hasOwnProperty(e)||!Tm(e)||(n[e]=Ni(n[e],t[e]));return n}function Tm(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=()=>wm().__FIREBASE_DEFAULTS__,Am=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Em(n[1]);return t&&JSON.parse(t)},Tl=()=>{try{return vm()||Am()||Rm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wl=()=>{var n;return(n=Tl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[xi(JSON.stringify(e)),xi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pm(){var n;const t=(n=Tl())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vm(){return typeof self=="object"&&self.self===self}function Dm(){return!Pm()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vl(){try{return typeof indexedDB=="object"}catch{return!1}}function Cm(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="FirebaseError";class Xe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=xm,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Nm(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xe(i,a,r)}}function Nm(n,t){return n.replace(km,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const km=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function lo(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Vu(s)&&Vu(o)){if(!lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Vu(n){return n!==null&&typeof n=="object"}function Om(n,t){const e=new Mm(n,t);return e.subscribe.bind(e)}class Mm{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Fm(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=$s),i.error===void 0&&(i.error=$s),i.complete===void 0&&(i.complete=$s);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fm(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function $s(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Sm;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Um(t))try{this.getOrInitializeService({instanceIdentifier:be})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=be){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=be){return this.instances.has(t)}getOptions(t=be){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bm(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=be){return this.component?this.component.multipleInstances?t:be:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bm(n){return n===be?void 0:n}function Um(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Lm(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=[];var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const Al={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},$m=N.INFO,zm={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Gm=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=zm[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xo{constructor(t){this.name=t,this._logLevel=$m,this._logHandler=Gm,this._userLogHandler=null,Yo.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Al[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}function jm(n){Yo.forEach(t=>{t.setLogLevel(n)})}function Km(n,t){for(const e of Yo){let r=null;t&&t.level&&(r=Al[t.level]),n===null?e.userLogHandler=null:e.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:N[s].toLowerCase(),message:a,args:o,type:i.name})}}}const Wm=(n,t)=>t.some(e=>n instanceof e);let Du,Cu;function Qm(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hm(){return Cu||(Cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rl=new WeakMap,ho=new WeakMap,Sl=new WeakMap,zs=new WeakMap,Jo=new WeakMap;function Ym(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(oe(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Rl.set(e,n)}).catch(()=>{}),Jo.set(t,n),t}function Xm(n){if(ho.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ho.set(n,t)}let fo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ho.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Sl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return oe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jm(n){fo=n(fo)}function Zm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Gs(this),t,...e);return Sl.set(r,t.sort?t.sort():[t]),oe(r)}:Hm().includes(n)?function(...t){return n.apply(Gs(this),t),oe(Rl.get(this))}:function(...t){return oe(n.apply(Gs(this),t))}}function tg(n){return typeof n=="function"?Zm(n):(n instanceof IDBTransaction&&Xm(n),Wm(n,Qm())?new Proxy(n,fo):n)}function oe(n){if(n instanceof IDBRequest)return Ym(n);if(zs.has(n))return zs.get(n);const t=tg(n);return t!==n&&(zs.set(n,t),Jo.set(t,n)),t}const Gs=n=>Jo.get(n);function eg(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=oe(o);return r&&o.addEventListener("upgradeneeded",u=>{r(oe(o.result),u.oldVersion,u.newVersion,oe(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ng=["get","getKey","getAll","getAllKeys","count"],rg=["put","add","delete","clear"],js=new Map;function xu(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(js.get(t))return js.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=rg.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ng.includes(e)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),i&&u.done]))[0]};return js.set(t,s),s}Jm(n=>({...n,get:(t,e,r)=>xu(t,e)||n.get(t,e,r),has:(t,e)=>!!xu(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(sg(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function sg(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mo="@firebase/app",Nu="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new Xo("@firebase/app"),og="@firebase/app-compat",ag="@firebase/analytics-compat",ug="@firebase/analytics",cg="@firebase/app-check-compat",lg="@firebase/app-check",hg="@firebase/auth",dg="@firebase/auth-compat",fg="@firebase/database",mg="@firebase/database-compat",gg="@firebase/functions",pg="@firebase/functions-compat",_g="@firebase/installations",yg="@firebase/installations-compat",Ig="@firebase/messaging",Eg="@firebase/messaging-compat",Tg="@firebase/performance",wg="@firebase/performance-compat",vg="@firebase/remote-config",Ag="@firebase/remote-config-compat",Rg="@firebase/storage",Sg="@firebase/storage-compat",bg="@firebase/firestore",Pg="@firebase/firestore-compat",Vg="firebase",Dg="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="[DEFAULT]",Cg={[mo]:"fire-core",[og]:"fire-core-compat",[ug]:"fire-analytics",[ag]:"fire-analytics-compat",[lg]:"fire-app-check",[cg]:"fire-app-check-compat",[hg]:"fire-auth",[dg]:"fire-auth-compat",[fg]:"fire-rtdb",[mg]:"fire-rtdb-compat",[gg]:"fire-fn",[pg]:"fire-fn-compat",[_g]:"fire-iid",[yg]:"fire-iid-compat",[Ig]:"fire-fcm",[Eg]:"fire-fcm-compat",[Tg]:"fire-perf",[wg]:"fire-perf-compat",[vg]:"fire-rc",[Ag]:"fire-rc-compat",[Rg]:"fire-gcs",[Sg]:"fire-gcs-compat",[bg]:"fire-fst",[Pg]:"fire-fst-compat","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map,yr=new Map;function ki(n,t){try{n.container.addComponent(t)}catch(e){qe.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function bl(n,t){n.container.addOrOverwriteComponent(t)}function bn(n){const t=n.name;if(yr.has(t))return qe.debug(`There were multiple attempts to register component ${t}.`),!1;yr.set(t,n);for(const e of le.values())ki(e,n);return!0}function Pl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function xg(n,t,e=ce){Pl(n,t).clearInstance(e)}function Ng(){yr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new es("app","Firebase",kg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Og=class{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=Dg;function ta(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ce,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(e||(e=wl()),!e)throw Wt.create("no-options");const s=le.get(i);if(s){if(lo(e,s.options)&&lo(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}const o=new qm(i);for(const u of yr.values())o.addComponent(u);const a=new Og(e,r,o);return le.set(i,a),a}function Mg(n=ce){const t=le.get(n);if(!t&&n===ce&&wl())return ta();if(!t)throw Wt.create("no-app",{appName:n});return t}function Fg(){return Array.from(le.values())}async function Vl(n){const t=n.name;le.has(t)&&(le.delete(t),await Promise.all(n.container.getProviders().map(e=>e.delete())),n.isDeleted=!0)}function ae(n,t,e){var r;let i=(r=Cg[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qe.warn(a.join(" "));return}bn(new Ue(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function Dl(n,t){if(n!==null&&typeof n!="function")throw Wt.create("invalid-log-argument");Km(n,t)}function Cl(n){jm(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="firebase-heartbeat-database",Bg=1,Ir="firebase-heartbeat-store";let Ks=null;function xl(){return Ks||(Ks=eg(Lg,Bg,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Ir)}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),Ks}async function Ug(n){try{return await(await xl()).transaction(Ir).objectStore(Ir).get(Nl(n))}catch(t){if(t instanceof Xe)qe.warn(t.message);else{const e=Wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qe.warn(e.message)}}}async function ku(n,t){try{const r=(await xl()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(t,Nl(n)),await r.done}catch(e){if(e instanceof Xe)qe.warn(e.message);else{const r=Wt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});qe.warn(r.message)}}}function Nl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=1024,$g=30*24*60*60*1e3;class zg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jg(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ou();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=$g}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ou(),{heartbeatsToSend:r,unsentEntries:i}=Gg(this._heartbeatsCache.heartbeats),s=xi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ou(){return new Date().toISOString().substring(0,10)}function Gg(n,t=qg){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mu(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Mu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class jg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vl()?Cm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ug(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ku(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ku(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Mu(n){return xi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(n){bn(new Ue("platform-logger",t=>new ig(t),"PRIVATE")),bn(new Ue("heartbeat",t=>new zg(t),"PRIVATE")),ae(mo,Nu,n),ae(mo,Nu,"esm2017"),ae("fire-js","")}Kg("");const Wg=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Xe,SDK_VERSION:Zo,_DEFAULT_ENTRY_NAME:ce,_addComponent:ki,_addOrOverwriteComponent:bl,_apps:le,_clearComponents:Ng,_components:yr,_getProvider:Pl,_registerComponent:bn,_removeServiceInstance:xg,deleteApp:Vl,getApp:Mg,getApps:Fg,initializeApp:ta,onLog:Dl,registerVersion:ae,setLogLevel:Cl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(t,e){this._delegate=t,this.firebase=e,ki(t,new Ue("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Vl(this._delegate)))}_getService(t,e=ce){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:e})}_removeServiceInstance(t,e=ce){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){ki(this._delegate,t)}_addOrOverwriteComponent(t){bl(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fu=new es("app-compat","Firebase",Hg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n){const t={},e={__esModule:!0,initializeApp:s,app:i,registerVersion:ae,setLogLevel:Cl,onLog:Dl,apps:null,SDK_VERSION:Zo,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:Wg}};e.default=e,Object.defineProperty(e,"apps",{get:o});function r(c){delete t[c]}function i(c){if(c=c||ce,!Pu(t,c))throw Fu.create("no-app",{appName:c});return t[c]}i.App=n;function s(c,l={}){const h=ta(c,l);if(Pu(t,h.name))return t[h.name];const d=new n(h,e);return t[h.name]=d,d}function o(){return Object.keys(t).map(c=>t[c])}function a(c){const l=c.name,h=l.replace("-compat","");if(bn(c)&&c.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Fu.create("invalid-app-argument",{appName:l});return f[h]()};c.serviceProps!==void 0&&Ni(d,c.serviceProps),e[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,c.multipleInstances?f:[])}}return c.type==="PUBLIC"?e[h]:null}function u(c,l){return l==="serverAuth"?null:l}return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){const n=Yg(Qg);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:kl,extendNamespace:t,createSubscribe:Om,ErrorFactory:es,deepExtend:Ni});function t(e){Ni(n,e)}return n}const Xg=kl();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Xo("@firebase/app-compat"),Jg="@firebase/app-compat",Zg="0.2.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n){ae(Jg,Zg,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Vm()&&self.firebase!==void 0){Lu.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Lu.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const yn=Xg;tp();var ep="firebase",np="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.registerVersion(ep,np,"app-compat");var rp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,ea=ea||{},b=rp||self;function ns(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Gr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function ip(n){return Object.prototype.hasOwnProperty.call(n,Ws)&&n[Ws]||(n[Ws]=++sp)}var Ws="closure_uid_"+(1e9*Math.random()>>>0),sp=0;function op(n,t,e){return n.call.apply(n.bind,arguments)}function ap(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function _t(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=op:_t=ap,_t.apply(null,arguments)}function fi(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ct(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ee(){this.s=this.s,this.o=this.o}var up=0;Ee.prototype.s=!1;Ee.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),up!=0)&&ip(this)};Ee.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ol=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function na(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Bu(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(ns(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function yt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var cp=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{b.addEventListener("test",()=>{},t),b.removeEventListener("test",()=>{},t)}catch{}return n}();function Er(n){return/^[\s\xa0]*$/.test(n)}function rs(){var n=b.navigator;return n&&(n=n.userAgent)?n:""}function Ft(n){return rs().indexOf(n)!=-1}function ra(n){return ra[" "](n),n}ra[" "]=function(){};function lp(n,t){var e=n_;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var hp=Ft("Opera"),Pn=Ft("Trident")||Ft("MSIE"),Ml=Ft("Edge"),go=Ml||Pn,Fl=Ft("Gecko")&&!(rs().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),dp=rs().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function Ll(){var n=b.document;return n?n.documentMode:void 0}var po;t:{var Qs="",Hs=function(){var n=rs();if(Fl)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ml)return/Edge\/([\d\.]+)/.exec(n);if(Pn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(dp)return/WebKit\/(\S+)/.exec(n);if(hp)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Hs&&(Qs=Hs?Hs[1]:""),Pn){var Ys=Ll();if(Ys!=null&&Ys>parseFloat(Qs)){po=String(Ys);break t}}po=Qs}var _o;if(b.document&&Pn){var Uu=Ll();_o=Uu||parseInt(po,10)||void 0}else _o=void 0;var fp=_o;function Tr(n,t){if(yt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Fl){t:{try{ra(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:mp[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Tr.$.h.call(this)}}ct(Tr,yt);var mp={2:"touch",3:"pen",4:"mouse"};Tr.prototype.h=function(){Tr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),gp=0;function pp(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++gp,this.fa=this.ia=!1}function is(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ia(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function _p(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Bl(n){const t={};for(const e in n)t[e]=n[e];return t}const qu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ul(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<qu.length;s++)e=qu[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function ss(n){this.src=n,this.g={},this.h=0}ss.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Io(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new pp(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function yo(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Ol(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(is(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Io(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var sa="closure_lm_"+(1e6*Math.random()|0),Xs={};function ql(n,t,e,r,i){if(r&&r.once)return zl(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ql(n,t[s],e,r,i);return null}return e=ua(e),n&&n[jr]?n.O(t,e,Gr(r)?!!r.capture:!!r,i):$l(n,t,e,!1,r,i)}function $l(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Gr(i)?!!i.capture:!!i,a=aa(n);if(a||(n[sa]=a=new ss(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=yp(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)cp||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(jl(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function yp(){function n(e){return t.call(n.src,n.listener,e)}const t=Ip;return n}function zl(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)zl(n,t[s],e,r,i);return null}return e=ua(e),n&&n[jr]?n.P(t,e,Gr(r)?!!r.capture:!!r,i):$l(n,t,e,!0,r,i)}function Gl(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Gl(n,t[s],e,r,i);else r=Gr(r)?!!r.capture:!!r,e=ua(e),n&&n[jr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Io(s,e,r,i),-1<e&&(is(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=aa(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Io(t,e,r,i)),(e=-1<n?t[n]:null)&&oa(e))}function oa(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[jr])yo(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(jl(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=aa(t))?(yo(e,n),e.h==0&&(e.src=null,t[sa]=null)):is(n)}}}function jl(n){return n in Xs?Xs[n]:Xs[n]="on"+n}function Ip(n,t){if(n.fa)n=!0;else{t=new Tr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&oa(n),n=e.call(r,t)}return n}function aa(n){return n=n[sa],n instanceof ss?n:null}var Js="__closure_events_fn_"+(1e9*Math.random()>>>0);function ua(n){return typeof n=="function"?n:(n[Js]||(n[Js]=function(t){return n.handleEvent(t)}),n[Js])}function ut(){Ee.call(this),this.i=new ss(this),this.S=this,this.J=null}ct(ut,Ee);ut.prototype[jr]=!0;ut.prototype.removeEventListener=function(n,t,e,r){Gl(this,n,t,e,r)};function gt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new yt(t,n);else if(t instanceof yt)t.target=t.target||n;else{var i=t;t=new yt(r,n),Ul(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=mi(o,r,!0,t)&&i}if(o=t.g=n,i=mi(o,r,!0,t)&&i,i=mi(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=mi(o,r,!1,t)&&i}ut.prototype.N=function(){if(ut.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)is(e[r]);delete n.g[t],n.h--}}this.J=null};ut.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};ut.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function mi(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&yo(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var ca=b.JSON.stringify;class Ep{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Tp(){var n=la;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class wp{constructor(){this.h=this.g=null}add(t,e){const r=Kl.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Kl=new Ep(()=>new vp,n=>n.reset());class vp{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ap(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Rp(n){b.setTimeout(()=>{throw n},0)}let wr,vr=!1,la=new wp,Wl=()=>{const n=b.Promise.resolve(void 0);wr=()=>{n.then(Sp)}};var Sp=()=>{for(var n;n=Tp();){try{n.h.call(n.g)}catch(e){Rp(e)}var t=Kl;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}vr=!1};function os(n,t){ut.call(this),this.h=n||1,this.g=t||b,this.j=_t(this.qb,this),this.l=Date.now()}ct(os,ut);T=os.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),gt(this,"tick"),this.ga&&(ha(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ha(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}T.N=function(){os.$.N.call(this),ha(this),delete this.g};function da(n,t,e){if(typeof n=="function")e&&(n=_t(n,e));else if(n&&typeof n.handleEvent=="function")n=_t(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(n,t||0)}function Ql(n){n.g=da(()=>{n.g=null,n.i&&(n.i=!1,Ql(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class bp extends Ee{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ql(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ar(n){Ee.call(this),this.h=n,this.g={}}ct(Ar,Ee);var $u=[];function Hl(n,t,e,r){Array.isArray(e)||(e&&($u[0]=e.toString()),e=$u);for(var i=0;i<e.length;i++){var s=ql(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Yl(n){ia(n.g,function(t,e){this.g.hasOwnProperty(e)&&oa(t)},n),n.g={}}Ar.prototype.N=function(){Ar.$.N.call(this),Yl(this)};Ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function as(){this.g=!0}as.prototype.Ea=function(){this.g=!1};function Pp(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Vp(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function In(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Cp(n,e)+(r?" "+r:"")})}function Dp(n,t){n.info(function(){return"TIMEOUT: "+t})}as.prototype.info=function(){};function Cp(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ca(e)}catch{return t}}var Je={},zu=null;function us(){return zu=zu||new ut}Je.Ta="serverreachability";function Xl(n){yt.call(this,Je.Ta,n)}ct(Xl,yt);function Rr(n){const t=us();gt(t,new Xl(t))}Je.STAT_EVENT="statevent";function Jl(n,t){yt.call(this,Je.STAT_EVENT,n),this.stat=t}ct(Jl,yt);function Tt(n){const t=us();gt(t,new Jl(t,n))}Je.Ua="timingevent";function Zl(n,t){yt.call(this,Je.Ua,n),this.size=t}ct(Zl,yt);function Kr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){n()},t)}var cs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},th={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fa(){}fa.prototype.h=null;function Gu(n){return n.h||(n.h=n.i())}function eh(){}var Wr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ma(){yt.call(this,"d")}ct(ma,yt);function ga(){yt.call(this,"c")}ct(ga,yt);var Eo;function ls(){}ct(ls,fa);ls.prototype.g=function(){return new XMLHttpRequest};ls.prototype.i=function(){return{}};Eo=new ls;function Qr(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Ar(this),this.P=xp,n=go?125:void 0,this.V=new os(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nh}function nh(){this.i=null,this.g="",this.h=!1}var xp=45e3,To={},Oi={};T=Qr.prototype;T.setTimeout=function(n){this.P=n};function wo(n,t,e){n.L=1,n.v=ds(Qt(t)),n.s=e,n.S=!0,rh(n,null)}function rh(n,t){n.G=Date.now(),Hr(n),n.A=Qt(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),hh(e.i,"t",r),n.C=0,e=n.l.J,n.h=new nh,n.g=xh(n.l,e?t:null,!n.s),0<n.O&&(n.M=new bp(_t(n.Pa,n,n.g),n.O)),Hl(n.U,n.g,"readystatechange",n.nb),t=n.I?Bl(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),Rr(),Pp(n.j,n.u,n.A,n.m,n.W,n.s)}T.nb=function(n){n=n.target;const t=this.M;t&&Lt(n)==3?t.l():this.Pa(n)};T.Pa=function(n){try{if(n==this.g)t:{const l=Lt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||go||this.g&&(this.h.h||this.g.ja()||Qu(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Rr(3):Rr(2)),hs(this);var e=this.g.da();this.ca=e;e:if(ih(this)){var r=Qu(this.g);n="";var i=r.length,s=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Oe(this),lr(this);var o="";break e}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Vp(this.j,this.u,this.A,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Er(a)){var c=a;break e}}c=null}if(e=c)In(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vo(this,e);else{this.i=!1,this.o=3,Tt(12),Oe(this),lr(this);break t}}this.S?(sh(this,l,o),go&&this.i&&l==3&&(Hl(this.U,this.V,"tick",this.mb),this.V.start())):(In(this.j,this.m,o,null),vo(this,o)),l==4&&Oe(this),this.i&&!this.J&&(l==4?Ph(this.l,this):(this.i=!1,Hr(this)))}else Zp(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),Oe(this),lr(this)}}}catch{}finally{}};function ih(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function sh(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=Np(n,e),i==Oi){t==4&&(n.o=4,Tt(14),r=!1),In(n.j,n.m,null,"[Incomplete Response]");break}else if(i==To){n.o=4,Tt(15),In(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else In(n.j,n.m,i,null),vo(n,i);ih(n)&&i!=Oi&&i!=To&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Tt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ta(t),t.M=!0,Tt(11))):(In(n.j,n.m,e,"[Invalid Chunked Response]"),Oe(n),lr(n))}T.mb=function(){if(this.g){var n=Lt(this.g),t=this.g.ja();this.C<t.length&&(hs(this),sh(this,n,t),this.i&&n!=4&&Hr(this))}};function Np(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Oi:(e=Number(t.substring(e,r)),isNaN(e)?To:(r+=1,r+e>t.length?Oi:(t=t.slice(r,r+e),n.C=r+e,t)))}T.cancel=function(){this.J=!0,Oe(this)};function Hr(n){n.Y=Date.now()+n.P,oh(n,n.P)}function oh(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Kr(_t(n.lb,n),t)}function hs(n){n.B&&(b.clearTimeout(n.B),n.B=null)}T.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Dp(this.j,this.A),this.L!=2&&(Rr(),Tt(17)),Oe(this),this.o=2,lr(this)):oh(this,this.Y-n)};function lr(n){n.l.H==0||n.J||Ph(n.l,n)}function Oe(n){hs(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,ha(n.V),Yl(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function vo(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Ao(e.i,n))){if(!n.K&&Ao(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Li(e),gs(e);else break t;Ea(e),Tt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Kr(_t(e.ib,e),6e3));if(1>=mh(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Me(e,11)}else if((n.K||e.g==n)&&Li(e),!Er(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const l=c[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const I=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(pa(s,s.h),s.h=null))}if(r.F){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,$(r.I,r.F,w))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Ch(r,r.J?r.pa:null,r.Y),o.K){gh(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(hs(a),Hr(a)),r.g=o}else Sh(r);0<e.j.length&&ps(e)}else c[0]!="stop"&&c[0]!="close"||Me(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Me(e,7):Ia(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}Rr(4)}catch{}}function kp(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ns(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Op(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ns(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function ah(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(ns(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Op(n),r=kp(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mp(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Be(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Be){this.h=n.h,Mi(this,n.j),this.s=n.s,this.g=n.g,Fi(this,n.m),this.l=n.l;var t=n.i,e=new Sr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ju(this,e),this.o=n.o}else n&&(t=String(n).match(uh))?(this.h=!1,Mi(this,t[1]||"",!0),this.s=ir(t[2]||""),this.g=ir(t[3]||"",!0),Fi(this,t[4]),this.l=ir(t[5]||"",!0),ju(this,t[6]||"",!0),this.o=ir(t[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}Be.prototype.toString=function(){var n=[],t=this.j;t&&n.push(sr(t,Ku,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(sr(t,Ku,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(sr(e,e.charAt(0)=="/"?Bp:Lp,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",sr(e,qp)),n.join("")};function Qt(n){return new Be(n)}function Mi(n,t,e){n.j=e?ir(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Fi(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ju(n,t,e){t instanceof Sr?(n.i=t,$p(n.i,n.h)):(e||(t=sr(t,Up)),n.i=new Sr(t,n.h))}function $(n,t,e){n.i.set(t,e)}function ds(n){return $(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ir(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function sr(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Fp),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Fp(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ku=/[#\/\?@]/g,Lp=/[#\?:]/g,Bp=/[#\?]/g,Up=/[#\?@]/g,qp=/#/g;function Sr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Te(n){n.g||(n.g=new Map,n.h=0,n.i&&Mp(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}T=Sr.prototype;T.add=function(n,t){Te(this),this.i=null,n=qn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function ch(n,t){Te(n),t=qn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function lh(n,t){return Te(n),t=qn(n,t),n.g.has(t)}T.forEach=function(n,t){Te(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};T.ta=function(){Te(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};T.Z=function(n){Te(this);let t=[];if(typeof n=="string")lh(this,n)&&(t=t.concat(this.g.get(qn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};T.set=function(n,t){return Te(this),this.i=null,n=qn(this,n),lh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};T.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function hh(n,t,e){ch(n,t),0<e.length&&(n.i=null,n.g.set(qn(n,t),na(e)),n.h+=e.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function qn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function $p(n,t){t&&!n.j&&(Te(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(ch(this,r),hh(this,i,e))},n)),n.j=t}var zp=class{constructor(n,t){this.g=n,this.map=t}};function dh(n){this.l=n||Gp,b.PerformanceNavigationTiming?(n=b.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Gp=10;function fh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function mh(n){return n.h?1:n.g?n.g.size:0}function Ao(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function pa(n,t){n.g?n.g.add(t):n.h=t}function gh(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}dh.prototype.cancel=function(){if(this.i=ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ph(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return na(n.i)}var jp=class{stringify(n){return b.JSON.stringify(n,void 0)}parse(n){return b.JSON.parse(n,void 0)}};function Kp(){this.g=new jp}function Wp(n,t,e){const r=e||"";try{ah(n,function(i,s){let o=i;Gr(i)&&(o=ca(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Qp(n,t){const e=new as;if(b.Image){const r=new Image;r.onload=fi(gi,e,r,"TestLoadImage: loaded",!0,t),r.onerror=fi(gi,e,r,"TestLoadImage: error",!1,t),r.onabort=fi(gi,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=fi(gi,e,r,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function gi(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Yr(n){this.l=n.ec||null,this.j=n.ob||!1}ct(Yr,fa);Yr.prototype.g=function(){return new fs(this.l,this.j)};Yr.prototype.i=function(n){return function(){return n}}({});function fs(n,t){ut.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=_a,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(fs,ut);var _a=0;T=fs.prototype;T.open=function(n,t){if(this.readyState!=_a)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,br(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=_a};T.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_h(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function _h(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}T.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Xr(this):br(this),this.readyState==3&&_h(this)}};T.Za=function(n){this.g&&(this.response=this.responseText=n,Xr(this))};T.Ya=function(n){this.g&&(this.response=n,Xr(this))};T.ka=function(){this.g&&Xr(this)};function Xr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,br(n)}T.setRequestHeader=function(n,t){this.v.append(n,t)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function br(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Hp=b.JSON.parse;function X(n){ut.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yh,this.L=this.M=!1}ct(X,ut);var yh="",Yp=/^https?$/i,Xp=["POST","PUT"];T=X.prototype;T.Oa=function(n){this.M=n};T.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Eo.g(),this.C=this.u?Gu(this.u):Gu(Eo),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Wu(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&n instanceof b.FormData,!(0<=Ol(Xp,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Th(this),0<this.B&&((this.L=Jp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=da(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Wu(this,s)}};function Jp(n){return Pn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.ua=function(){typeof ea<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,gt(this,"timeout"),this.abort(8))};function Wu(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Ih(n),ms(n)}function Ih(n){n.F||(n.F=!0,gt(n,"complete"),gt(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,gt(this,"complete"),gt(this,"abort"),ms(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ms(this,!0)),X.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?Eh(this):this.kb())};T.kb=function(){Eh(this)};function Eh(n){if(n.h&&typeof ea<"u"&&(!n.C[1]||Lt(n)!=4||n.da()!=2)){if(n.v&&Lt(n)==4)da(n.La,0,n);else if(gt(n,"readystatechange"),Lt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(uh)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!Yp.test(i?i.toLowerCase():"")}e=r}if(e)gt(n,"complete"),gt(n,"success");else{n.m=6;try{var s=2<Lt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Ih(n)}}finally{ms(n)}}}}function ms(n,t){if(n.g){Th(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||gt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Th(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(b.clearTimeout(n.A),n.A=null)}T.isActive=function(){return!!this.g};function Lt(n){return n.g?n.g.readyState:0}T.da=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Hp(t)}};function Qu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case yh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Zp(n){const t={};n=(n.g&&2<=Lt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Er(n[r]))continue;var e=Ap(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}_p(t,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wh(n){let t="";return ia(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function ya(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=wh(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):$(n,t,e))}function Xn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function vh(n){this.Ga=0,this.j=[],this.l=new as,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xn("baseRetryDelayMs",5e3,n),this.hb=Xn("retryDelaySeedMs",1e4,n),this.eb=Xn("forwardChannelMaxRetries",2,n),this.xa=Xn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new dh(n&&n.concurrentRequestLimit),this.Ja=new Kp,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=vh.prototype;T.ra=8;T.H=1;function Ia(n){if(Ah(n),n.H==3){var t=n.W++,e=Qt(n.I);if($(e,"SID",n.K),$(e,"RID",t),$(e,"TYPE","terminate"),Jr(n,e),t=new Qr(n,n.l,t),t.L=2,t.v=ds(Qt(e)),e=!1,b.navigator&&b.navigator.sendBeacon)try{e=b.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&b.Image&&(new Image().src=t.v,e=!0),e||(t.g=xh(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Hr(t)}Dh(n)}function gs(n){n.g&&(Ta(n),n.g.cancel(),n.g=null)}function Ah(n){gs(n),n.u&&(b.clearTimeout(n.u),n.u=null),Li(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&b.clearTimeout(n.m),n.m=null)}function ps(n){if(!fh(n.i)&&!n.m){n.m=!0;var t=n.Na;wr||Wl(),vr||(wr(),vr=!0),la.add(t,n),n.C=0}}function t_(n,t){return mh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Kr(_t(n.Na,n,t),Vh(n,n.C)),n.C++,!0)}T.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Qr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Bl(s),Ul(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Rh(this,i,t),e=Qt(this.I),$(e,"RID",n),$(e,"CVER",22),this.F&&$(e,"X-HTTP-Session-Id",this.F),Jr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(wh(s)))+"&"+t:this.o&&ya(e,this.o,s)),pa(this.i,i),this.bb&&$(e,"TYPE","init"),this.P?($(e,"$req",t),$(e,"SID","null"),i.aa=!0,wo(i,e,null)):wo(i,e,t),this.H=2}}else this.H==3&&(n?Hu(this,n):this.j.length==0||fh(this.i)||Hu(this))};function Hu(n,t){var e;t?e=t.m:e=n.W++;const r=Qt(n.I);$(r,"SID",n.K),$(r,"RID",e),$(r,"AID",n.V),Jr(n,r),n.o&&n.s&&ya(r,n.o,n.s),e=new Qr(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Rh(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),pa(n.i,e),wo(e,r,t)}function Jr(n,t){n.na&&ia(n.na,function(e,r){$(t,r,e)}),n.h&&ah({},function(e,r){$(t,r,e)})}function Rh(n,t,e){e=Math.min(n.j.length,e);var r=n.h?_t(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let c=i[u].g;const l=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{Wp(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Sh(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;wr||Wl(),vr||(wr(),vr=!0),la.add(t,n),n.A=0}}function Ea(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Kr(_t(n.Ma,n),Vh(n,n.A)),n.A++,!0)}T.Ma=function(){if(this.u=null,bh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Kr(_t(this.jb,this),n)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Tt(10),gs(this),bh(this))};function Ta(n){n.B!=null&&(b.clearTimeout(n.B),n.B=null)}function bh(n){n.g=new Qr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Qt(n.wa);$(t,"RID","rpc"),$(t,"SID",n.K),$(t,"AID",n.V),$(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&$(t,"TO",n.qa),$(t,"TYPE","xmlhttp"),Jr(n,t),n.o&&n.s&&ya(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=ds(Qt(t)),e.s=null,e.S=!0,rh(e,n)}T.ib=function(){this.v!=null&&(this.v=null,gs(this),Ea(this),Tt(19))};function Li(n){n.v!=null&&(b.clearTimeout(n.v),n.v=null)}function Ph(n,t){var e=null;if(n.g==t){Li(n),Ta(n),n.g=null;var r=2}else if(Ao(n.i,t))e=t.F,gh(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=us(),gt(r,new Zl(r,e)),ps(n)}else Sh(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&t_(n,t)||r==2&&Ea(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Me(n,5);break;case 4:Me(n,10);break;case 3:Me(n,6);break;default:Me(n,2)}}}function Vh(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Me(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=_t(n.pb,n);e||(e=new Be("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Mi(e,"https"),ds(e)),Qp(e.toString(),r)}else Tt(2);n.H=0,n.h&&n.h.za(t),Dh(n),Ah(n)}T.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Tt(2)):(this.l.info("Failed to ping google.com"),Tt(1))};function Dh(n){if(n.H=0,n.ma=[],n.h){const t=ph(n.i);(t.length!=0||n.j.length!=0)&&(Bu(n.ma,t),Bu(n.ma,n.j),n.i.i.length=0,na(n.j),n.j.length=0),n.h.ya()}}function Ch(n,t,e){var r=e instanceof Be?Qt(e):new Be(e);if(r.g!="")t&&(r.g=t+"."+r.g),Fi(r,r.m);else{var i=b.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Be(null);r&&Mi(s,r),t&&(s.g=t),i&&Fi(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&$(r,e,t),$(r,"VER",n.ra),Jr(n,r),r}function xh(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new X(new Yr({ob:!0})):new X(n.va),t.Oa(n.J),t}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function Nh(){}T=Nh.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function Bi(){if(Pn&&!(10<=Number(fp)))throw Error("Environmental error: no available transport.")}Bi.prototype.g=function(n,t){return new Dt(n,t)};function Dt(n,t){ut.call(this),this.g=new vh(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Er(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Er(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new $n(this)}ct(Dt,ut);Dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Tt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Ch(n,null,n.Y),ps(n)};Dt.prototype.close=function(){Ia(this.g)};Dt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=ca(n),n=e);t.j.push(new zp(t.fb++,n)),t.H==3&&ps(t)};Dt.prototype.N=function(){this.g.h=null,delete this.j,Ia(this.g),delete this.g,Dt.$.N.call(this)};function kh(n){ma.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}ct(kh,ma);function Oh(){ga.call(this),this.status=1}ct(Oh,ga);function $n(n){this.g=n}ct($n,Nh);$n.prototype.Ba=function(){gt(this.g,"a")};$n.prototype.Aa=function(n){gt(this.g,new kh(n))};$n.prototype.za=function(n){gt(this.g,new Oh)};$n.prototype.ya=function(){gt(this.g,"b")};function e_(){this.blockSize=-1}function Ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ct(Ot,e_);Ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Zs(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Ot.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Zs(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Zs(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Zs(this,r),i=0;break}}this.h=i,this.i+=t};Ot.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function B(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var n_={};function wa(n){return-128<=n&&128>n?lp(n,function(t){return new B([t|0],0>t?-1:0)}):new B([n|0],0>n?-1:0)}function Bt(n){if(isNaN(n)||!isFinite(n))return wn;if(0>n)return ft(Bt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Ro;return new B(t,0)}function Mh(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return ft(Mh(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Bt(Math.pow(t,8)),r=wn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Bt(Math.pow(t,s)),r=r.R(s).add(Bt(o))):(r=r.R(e),r=r.add(Bt(o)))}return r}var Ro=4294967296,wn=wa(0),So=wa(1),Yu=wa(16777216);T=B.prototype;T.ea=function(){if(xt(this))return-ft(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Ro+r)*t,t*=Ro}return n};T.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(jt(this))return"0";if(xt(this))return"-"+ft(this).toString(n);for(var t=Bt(Math.pow(n,6)),e=this,r="";;){var i=qi(e,t).g;e=Ui(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,jt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};T.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function jt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function xt(n){return n.h==-1}T.X=function(n){return n=Ui(this,n),xt(n)?-1:jt(n)?0:1};function ft(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new B(e,~n.h).add(So)}T.abs=function(){return xt(this)?ft(this):this};T.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new B(e,e[e.length-1]&-2147483648?-1:0)};function Ui(n,t){return n.add(ft(t))}T.R=function(n){if(jt(this)||jt(n))return wn;if(xt(this))return xt(n)?ft(this).R(ft(n)):ft(ft(this).R(n));if(xt(n))return ft(this.R(ft(n)));if(0>this.X(Yu)&&0>n.X(Yu))return Bt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,pi(e,2*r+2*i),e[2*r+2*i+1]+=s*u,pi(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,pi(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,pi(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new B(e,0)};function pi(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Jn(n,t){this.g=n,this.h=t}function qi(n,t){if(jt(t))throw Error("division by zero");if(jt(n))return new Jn(wn,wn);if(xt(n))return t=qi(ft(n),t),new Jn(ft(t.g),ft(t.h));if(xt(t))return t=qi(n,ft(t)),new Jn(ft(t.g),t.h);if(30<n.g.length){if(xt(n)||xt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=So,r=t;0>=r.X(n);)e=Xu(e),r=Xu(r);var i=an(e,1),s=an(r,1);for(r=an(r,2),e=an(e,2);!jt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=an(r,1),e=an(e,1)}return t=Ui(n,i.R(t)),new Jn(i,t)}for(i=wn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Bt(e),o=s.R(t);xt(o)||0<o.X(n);)e-=r,s=Bt(e),o=s.R(t);jt(s)&&(s=So),i=i.add(s),n=Ui(n,o)}return new Jn(i,n)}T.gb=function(n){return qi(this,n).h};T.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new B(e,this.h&n.h)};T.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new B(e,this.h|n.h)};T.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new B(e,this.h^n.h)};function Xu(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new B(e,n.h)}function an(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new B(i,n.h)}Bi.prototype.createWebChannel=Bi.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;cs.NO_ERROR=0;cs.TIMEOUT=8;cs.HTTP_ERROR=6;th.COMPLETE="complete";eh.EventType=Wr;Wr.OPEN="a";Wr.CLOSE="b";Wr.ERROR="c";Wr.MESSAGE="d";ut.prototype.listen=ut.prototype.O;X.prototype.listenOnce=X.prototype.P;X.prototype.getLastError=X.prototype.Sa;X.prototype.getLastErrorCode=X.prototype.Ia;X.prototype.getStatus=X.prototype.da;X.prototype.getResponseJson=X.prototype.Wa;X.prototype.getResponseText=X.prototype.ja;X.prototype.send=X.prototype.ha;X.prototype.setWithCredentials=X.prototype.Oa;Ot.prototype.digest=Ot.prototype.l;Ot.prototype.reset=Ot.prototype.reset;Ot.prototype.update=Ot.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=Bt;B.fromString=Mh;var r_=function(){return new Bi},i_=function(){return us()},to=cs,s_=th,o_=Je,Ju={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},a_=Yr,_i=eh,u_=X,c_=Ot,vn=B;const Zu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Xo("@firebase/firestore");function fn(){return he.logLevel}function l_(n){he.setLogLevel(n)}function _(n,...t){if(he.logLevel<=N.DEBUG){const e=t.map(va);he.debug(`Firestore (${zn}): ${n}`,...e)}}function tt(n,...t){if(he.logLevel<=N.ERROR){const e=t.map(va);he.error(`Firestore (${zn}): ${n}`,...e)}}function Mt(n,...t){if(he.logLevel<=N.WARN){const e=t.map(va);he.warn(`Firestore (${zn}): ${n}`,...e)}}function va(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const t=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+n;throw tt(t),new Error(t)}function S(n,t){n||A()}function h_(n,t){n||A()}function E(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Xe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class d_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ot.UNAUTHENTICATED))}shutdown(){}}class f_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class m_{constructor(t){this.t=t,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new at;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new at,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new at)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(S(typeof r.accessToken=="string"),new Fh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return S(t===null||typeof t=="string"),new ot(t)}}class g_{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class p_{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new g_(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class __{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(S(typeof e.token=="string"),this.R=e.token,new __(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=I_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function P(n,t){return n<t?-1:n>t?1:0}function Vn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}function Bh(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new K(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new K(0,0))}static max(){return new R(new K(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e,r){e===void 0?e=0:e>t.length&&A(),r===void 0?r=t.length-e:r>t.length-e&&A(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class O extends Pr{construct(t,e,r){return new O(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new O(e)}static emptyPath(){return new O([])}}const E_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends Pr{construct(t,e,r){return new G(t,e,r)}static isValidIdentifier(t){return E_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new p(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new p(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new G(e)}static emptyPath(){return new G([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this.path=t}static fromPath(t){return new y(O.fromString(t))}static fromName(t){return new y(O.fromString(t).popFirst(5))}static empty(){return new y(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return O.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new y(new O(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e,r,i){this.indexId=t,this.collectionGroup=e,this.fields=r,this.indexState=i}}function bo(n){return n.fields.find(t=>t.kind===2)}function Pe(n){return n.fields.filter(t=>t.kind!==2)}$i.UNKNOWN_ID=-1;class Ai{constructor(t,e){this.fieldPath=t,this.kind=e}}class Vr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Vr(0,Ct.min())}}function Uh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=R.fromTimestamp(r===1e9?new K(e+1,0):new K(e,r));return new Ct(i,y.empty(),t)}function qh(n){return new Ct(n.readTime,n.key,-1)}class Ct{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ct(R.min(),y.empty(),-1)}static max(){return new Ct(R.max(),y.empty(),-1)}}function Aa(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=y.comparator(n.documentKey,t.documentKey),e!==0?e:P(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==$h)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,r)=>{e(t)})}static reject(t){return new m((e,r)=>{r(t)})}static waitFor(t){return new m((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=m.resolve(!1);for(const r of t)e=e.next(i=>i?m.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new m((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;e(t[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new m((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new at,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new hr(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Ra(r.target.error);this.V.reject(new hr(t,i))}}static open(t,e,r,i){try{return new _s(e,t.transaction(i,r))}catch(s){throw new hr(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new w_(e)}}class kt{constructor(t,e,r){this.name=t,this.version=e,this.p=r,kt.S(co())===12.2&&tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),De(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!vl())return!1;if(kt.C())return!0;const t=co(),e=kt.S(t),r=0<e&&e<10,i=kt.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new hr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new p(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new hr(t,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=_s.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),m.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class T_{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return De(this.k.delete())}}class hr extends p{constructor(t,e){super(g.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ve(n){return n.name==="IndexedDbTransactionError"}class w_{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(_("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),De(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),De(this.store.add(t))}get(t){return De(this.store.get(t)).next(e=>(e===void 0&&(e=null),_("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),De(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),De(this.store.count())}W(t,e){const r=this.options(t,e);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new m((r,i)=>{e.onerror=s=>{const o=Ra(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new m((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new T_(a),c=e(a.primaryKey,a.value,u);if(c instanceof m){const l=c.catch(h=>(u.done(),m.reject(h)));r.push(l)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>m.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function De(n){return new m((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Ra(r.target.error);e(i)}})}let tc=!1;function Ra(n){const t=kt.S(co());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return tc||(tc=!0,setTimeout(()=>{throw r},0)),r}}return n}class v_{constructor(t,e){this.asyncQueue=t,this.X=e,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(t){_("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(e){ve(e)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await we(e)}await this.ee(6e4)})}}class A_{constructor(t,e){this.localStore=t,this.persistence=e}async te(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.ne(e,t))}ne(t,e){const r=new Set;let i=e,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.re(t,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>e-i)}re(t,e,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(t,o).next(()=>this.ie(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(t,e,a))).next(()=>o.size)}))}ie(t,e){let r=t;return e.changes.forEach((i,s)=>{const o=qh(s);Aa(o,r)>0&&(r=o)}),new Ct(r.readTime,r.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}bt._e=-1;function Zr(n){return n==null}function Dr(n){return n===0&&1/n==-1/0}function Gh(n){return typeof n=="number"&&Number.isInteger(n)&&!Dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ec(t)),t=R_(n.get(e),t);return ec(t)}function R_(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":e+="";break;case"":e+="";break;default:e+=s}}return e}function ec(n){return n+""}function Ut(n){const t=n.length;if(S(t>=2),t===2)return S(n.charAt(0)===""&&n.charAt(1)===""),O.emptyPath();const e=t-2,r=[];let i="";for(let s=0;s<t;){const o=n.indexOf("",s);switch((o<0||o>e)&&A(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:A()}s=o+2}return new O(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n,t){return[n,wt(t)]}function jh(n,t,e){return[n,wt(t),e]}const S_={},b_=["prefixPath","collectionGroup","readTime","documentId"],P_=["prefixPath","collectionGroup","documentId"],V_=["collectionGroup","readTime","prefixPath","documentId"],D_=["canonicalId","targetId"],C_=["targetId","path"],x_=["path","targetId"],N_=["collectionId","parent"],k_=["indexId","uid"],O_=["uid","sequenceNumber"],M_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],F_=["indexId","uid","orderedDocumentKey"],L_=["userId","collectionPath","documentId"],B_=["userId","collectionPath","largestBatchId"],U_=["userId","collectionGroup","largestBatchId"],Kh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],q_=[...Kh,"documentOverlays"],Wh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Qh=Wh,$_=[...Qh,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends zh{constructor(t,e){super(),this.ae=t,this.currentSequenceNumber=e}}function lt(n,t){const e=E(n);return kt.M(e.ae,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ze(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Hh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e){this.comparator=t,this.root=e||dt.EMPTY}insert(t,e){return new q(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new q(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yi(this.root,t,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yi(this.root,t,this.comparator,!0)}}class yi{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=s??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new dt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,r,i,s){return this}insert(t,e,r){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.comparator=t,this.data=new q(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ic(this.data.getIterator())}getIteratorFrom(t){return new ic(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof U)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new U(this.comparator);return e.data=t,e}}class ic{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function un(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.fields=t,t.sort(G.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new U(G.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Vn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Yh("Invalid base64 string: "+s):s}}(t);return new it(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new it(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}it.EMPTY_BYTE_STRING=new it("");const G_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function de(n){if(S(!!n),typeof n=="string"){let t=0;const e=G_.exec(n);if(S(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Y(n.seconds),nanos:Y(n.nanos)}}function Y(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Sa(n){const t=n.mapValue.fields.__previous_value__;return ys(t)?Sa(t):t}function Cr(n){const t=de(n.mapValue.fields.__local_write_time__.timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,e,r,i,s,o,a,u,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class me{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new me("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof me&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Si={nullValue:"NULL_VALUE"};function $e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ys(n)?4:Xh(n)?9007199254740991:10:A()}function zt(n,t){if(n===t)return!0;const e=$e(n);if(e!==$e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Cr(n).isEqual(Cr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=de(i.timestampValue),a=de(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return fe(i.bytesValue).isEqual(fe(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return Y(i.geoPointValue.latitude)===Y(s.geoPointValue.latitude)&&Y(i.geoPointValue.longitude)===Y(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Y(i.integerValue)===Y(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Y(i.doubleValue),a=Y(s.doubleValue);return o===a?Dr(o)===Dr(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Vn(n.arrayValue.values||[],t.arrayValue.values||[],zt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(rc(o)!==rc(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!zt(o[u],a[u])))return!1;return!0}(n,t);default:return A()}}function xr(n,t){return(n.values||[]).find(e=>zt(e,t))!==void 0}function ge(n,t){if(n===t)return 0;const e=$e(n),r=$e(t);if(e!==r)return P(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return P(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Y(s.integerValue||s.doubleValue),u=Y(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return sc(n.timestampValue,t.timestampValue);case 4:return sc(Cr(n),Cr(t));case 5:return P(n.stringValue,t.stringValue);case 6:return function(s,o){const a=fe(s),u=fe(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=P(a[c],u[c]);if(l!==0)return l}return P(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=P(Y(s.latitude),Y(o.latitude));return a!==0?a:P(Y(s.longitude),Y(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=ge(a[c],u[c]);if(l)return l}return P(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===se.mapValue&&o===se.mapValue)return 0;if(s===se.mapValue)return 1;if(o===se.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=P(u[h],l[h]);if(d!==0)return d;const f=ge(a[u[h]],c[l[h]]);if(f!==0)return f}return P(u.length,l.length)}(n.mapValue,t.mapValue);default:throw A()}}function sc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return P(n,t);const e=de(n),r=de(t),i=P(e.seconds,r.seconds);return i!==0?i:P(e.nanos,r.nanos)}function Dn(n){return Vo(n)}function Vo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=de(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return y.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Vo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vo(e.fields[o])}`;return i+"}"}(n.mapValue):A()}function ze(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Do(n){return!!n&&"integerValue"in n}function Nr(n){return!!n&&"arrayValue"in n}function oc(n){return!!n&&"nullValue"in n}function ac(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bi(n){return!!n&&"mapValue"in n}function dr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ze(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=dr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=dr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Xh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function K_(n){return"nullValue"in n?Si:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ze(me.empty(),y.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function W_(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ze(me.empty(),y.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?se:A()}function uc(n,t){const e=ge(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?-1:!n.inclusive&&t.inclusive?1:0}function cc(n,t){const e=ge(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?1:!n.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!bi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dr(e)}setAll(t){let e=G.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=dr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());bi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];bi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ze(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new mt(dr(this.value))}}function Jh(n){const t=[];return Ze(n.fields,(e,r)=>{const i=new G([e]);if(bi(r)){const s=Jh(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new z(t,0,R.min(),R.min(),R.min(),mt.empty(),0)}static newFoundDocument(t,e,r,i){return new z(t,1,e,R.min(),r,i,0)}static newNoDocument(t,e){return new z(t,2,e,R.min(),R.min(),mt.empty(),0)}static newUnknownDocument(t,e){return new z(t,3,e,R.min(),R.min(),mt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.position=t,this.inclusive=e}}function lc(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=y.comparator(y.fromName(o.referenceValue),e.key):r=ge(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!zt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Q_(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{}class x extends Zh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new H_(t,e,r):e==="array-contains"?new J_(t,r):e==="in"?new sd(t,r):e==="not-in"?new Z_(t,r):e==="array-contains-any"?new ty(t,r):new x(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Y_(t,r):new X_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ge(e,this.value)):e!==null&&$e(this.value)===$e(e)&&this.matchesComparison(ge(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class L extends Zh{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new L(t,e)}matches(t){return Cn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Cn(n){return n.op==="and"}function Co(n){return n.op==="or"}function ba(n){return td(n)&&Cn(n)}function td(n){for(const t of n.filters)if(t instanceof L)return!1;return!0}function xo(n){if(n instanceof x)return n.field.canonicalString()+n.op.toString()+Dn(n.value);if(ba(n))return n.filters.map(t=>xo(t)).join(",");{const t=n.filters.map(e=>xo(e)).join(",");return`${n.op}(${t})`}}function ed(n,t){return n instanceof x?function(r,i){return i instanceof x&&r.op===i.op&&r.field.isEqual(i.field)&&zt(r.value,i.value)}(n,t):n instanceof L?function(r,i){return i instanceof L&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ed(o,i.filters[a]),!0):!1}(n,t):void A()}function nd(n,t){const e=n.filters.concat(t);return L.create(e,n.op)}function rd(n){return n instanceof x?function(e){return`${e.field.canonicalString()} ${e.op} ${Dn(e.value)}`}(n):n instanceof L?function(e){return e.op.toString()+" {"+e.getFilters().map(rd).join(" ,")+"}"}(n):"Filter"}class H_ extends x{constructor(t,e,r){super(t,e,r),this.key=y.fromName(r.referenceValue)}matches(t){const e=y.comparator(t.key,this.key);return this.matchesComparison(e)}}class Y_ extends x{constructor(t,e){super(t,"in",e),this.keys=id("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class X_ extends x{constructor(t,e){super(t,"not-in",e),this.keys=id("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function id(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>y.fromName(r.referenceValue))}class J_ extends x{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Nr(e)&&xr(e.arrayValue,this.value)}}class sd extends x{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&xr(this.value.arrayValue,e)}}class Z_ extends x{constructor(t,e){super(t,"not-in",e)}matches(t){if(xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!xr(this.value.arrayValue,e)}}class ty extends x{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Nr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>xr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function No(n,t=null,e=[],r=[],i=null,s=null,o=null){return new ey(n,t,e,r,i,s,o)}function Ge(n){const t=E(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>xo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Dn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Dn(r)).join(",")),t.ce=e}return t.ce}function ti(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Q_(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ed(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!hc(n.startAt,t.startAt)&&hc(n.endAt,t.endAt)}function zi(n){return y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Gi(n,t){return n.filters.filter(e=>e instanceof x&&e.field.isEqual(t))}function dc(n,t,e){let r=Si,i=!0;for(const s of Gi(n,t)){let o=Si,a=!0;switch(s.op){case"<":case"<=":o=K_(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Si}uc({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];uc({value:r,inclusive:i},{value:o,inclusive:e.inclusive})<0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}function fc(n,t,e){let r=se,i=!0;for(const s of Gi(n,t)){let o=se,a=!0;switch(s.op){case">=":case">":o=W_(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=se}cc({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];cc({value:r,inclusive:i},{value:o,inclusive:e.inclusive})>0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function od(n,t,e,r,i,s,o,a){return new Yt(n,t,e,r,i,s,o,a)}function Gn(n){return new Yt(n)}function mc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pa(n){return n.collectionGroup!==null}function An(n){const t=E(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new U(G.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new kr(s,r))}),e.has(G.keyField().canonicalString())||t.le.push(new kr(G.keyField(),r))}return t.le}function vt(n){const t=E(n);return t.he||(t.he=ny(t,An(n))),t.he}function ny(n,t){if(n.limitType==="F")return No(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kr(i.field,s)});const e=n.endAt?new pe(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pe(n.startAt.position,n.startAt.inclusive):null;return No(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ko(n,t){const e=n.filters.concat([t]);return new Yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ji(n,t,e){return new Yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ei(n,t){return ti(vt(n),vt(t))&&n.limitType===t.limitType}function ad(n){return`${Ge(vt(n))}|lt:${n.limitType}`}function mn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>rd(i)).join(", ")}]`),Zr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Dn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Dn(i)).join(",")),`Target(${r})`}(vt(n))}; limitType=${n.limitType})`}function ni(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of An(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=lc(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,An(r),i)||r.endAt&&!function(o,a,u){const c=lc(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,An(r),i))}(n,t)}function ud(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cd(n){return(t,e)=>{let r=!1;for(const i of An(n)){const s=ry(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ry(n,t,e){const r=n.field.isKeyField()?y.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ge(u,c):A()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ze(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Hh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new q(y.comparator);function Vt(){return iy}const ld=new q(y.comparator);function or(...n){let t=ld;for(const e of n)t=t.insert(e.key,e);return t}function hd(n){let t=ld;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function qt(){return fr()}function dd(){return fr()}function fr(){return new Ae(n=>n.toString(),(n,t)=>n.isEqual(t))}const sy=new q(y.comparator),oy=new U(y.comparator);function V(...n){let t=oy;for(const e of n)t=t.add(e);return t}const ay=new U(P);function Va(){return ay}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(t)?"-0":t}}function md(n){return{integerValue:""+n}}function gd(n,t){return Gh(t)?md(t):fd(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this._=void 0}}function uy(n,t,e){return n instanceof xn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ys(s)&&(s=Sa(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof je?_d(n,t):n instanceof Ke?yd(n,t):function(i,s){const o=pd(i,s),a=gc(o)+gc(i.Ie);return Do(o)&&Do(i.Ie)?md(a):fd(i.serializer,a)}(n,t)}function cy(n,t,e){return n instanceof je?_d(n,t):n instanceof Ke?yd(n,t):e}function pd(n,t){return n instanceof Nn?function(r){return Do(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class xn extends Is{}class je extends Is{constructor(t){super(),this.elements=t}}function _d(n,t){const e=Id(t);for(const r of n.elements)e.some(i=>zt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Ke extends Is{constructor(t){super(),this.elements=t}}function yd(n,t){let e=Id(t);for(const r of n.elements)e=e.filter(i=>!zt(i,r));return{arrayValue:{values:e}}}class Nn extends Is{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function gc(n){return Y(n.integerValue||n.doubleValue)}function Id(n){return Nr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e){this.field=t,this.transform=e}}function ly(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof je&&i instanceof je||r instanceof Ke&&i instanceof Ke?Vn(r.elements,i.elements,zt):r instanceof Nn&&i instanceof Nn?zt(r.Ie,i.Ie):r instanceof xn&&i instanceof xn}(n.transform,t.transform)}class hy{constructor(t,e){this.version=t,this.transformResults=e}}class j{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new j}static exists(t){return new j(void 0,t)}static updateTime(t){return new j(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Es{}function Ed(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Kn(n.key,j.none()):new jn(n.key,n.data,j.none());{const e=n.data,r=mt.empty();let i=new U(G.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xt(n.key,r,new Pt(i.toArray()),j.none())}}function dy(n,t,e){n instanceof jn?function(i,s,o){const a=i.value.clone(),u=_c(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Xt?function(i,s,o){if(!Pi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=_c(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Td(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function mr(n,t,e,r){return n instanceof jn?function(s,o,a,u){if(!Pi(s.precondition,o))return a;const c=s.value.clone(),l=yc(s.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof Xt?function(s,o,a,u){if(!Pi(s.precondition,o))return a;const c=yc(s.fieldTransforms,u,o),l=o.data;return l.setAll(Td(s)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return Pi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function fy(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=pd(r.transform,i||null);s!=null&&(e===null&&(e=mt.empty()),e.set(r.field,s))}return e||null}function pc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vn(r,i,(s,o)=>ly(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class jn extends Es{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xt extends Es{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Td(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function _c(n,t,e){const r=new Map;S(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,cy(o,a,e[i]))}return r}function yc(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,uy(s,o,t))}return r}class Kn extends Es{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Da extends Es{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&dy(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=mr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=mr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=dd();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=Ed(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(R.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),V())}isEqual(t){return this.batchId===t.batchId&&Vn(this.mutations,t.mutations,(e,r)=>pc(e,r))&&Vn(this.baseMutations,t.baseMutations,(e,r)=>pc(e,r))}}class xa{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){S(t.mutations.length===r.length);let i=function(){return sy}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xa(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,k;function wd(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function vd(n){if(n===void 0)return tt("GRPC error has no .code"),g.UNKNOWN;switch(n){case nt.OK:return g.OK;case nt.CANCELLED:return g.CANCELLED;case nt.UNKNOWN:return g.UNKNOWN;case nt.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case nt.INTERNAL:return g.INTERNAL;case nt.UNAVAILABLE:return g.UNAVAILABLE;case nt.UNAUTHENTICATED:return g.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case nt.NOT_FOUND:return g.NOT_FOUND;case nt.ALREADY_EXISTS:return g.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return g.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case nt.ABORTED:return g.ABORTED;case nt.OUT_OF_RANGE:return g.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return g.UNIMPLEMENTED;case nt.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(k=nt||(nt={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=new vn([4294967295,4294967295],0);function Ic(n){const t=Ad().encode(n),e=new c_;return e.update(t),new Uint8Array(e.digest())}function Ec(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new vn([e,r],0),new vn([i,s],0)]}class ka{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new ar(`Invalid padding: ${e}`);if(r<0)throw new ar(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ar(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new ar(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=vn.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(vn.fromNumber(r)));return i.compare(gy)===1&&(i=new vn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Ic(t),[r,i]=Ec(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new ka(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=Ic(t),[r,i]=Ec(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,si.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ii(R.min(),i,new q(P),Vt(),V())}}class si{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new si(r,e,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class Rd{constructor(t,e){this.targetId=t,this.fe=e}}class Sd{constructor(t,e,r=it.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Tc{constructor(){this.ge=0,this.pe=vc(),this.ye=it.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=V(),e=V(),r=V();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:A()}}),new si(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=vc()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class py{constructor(t){this.Le=t,this.ke=new Map,this.qe=Vt(),this.Qe=wc(),this.Ke=new q(P)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(zi(s))if(r===0){const o=new y(s.path);this.We(e,o,z.newNoDocument(o,R.min()))}else S(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=fe(r).toUint8Array()}catch(u){if(u instanceof Yh)return Mt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ka(o,i,s)}catch(u){return Mt(u instanceof ar?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&zi(a.target)){const u=new y(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,z.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=V();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new ii(t,e,this.Ke,this.qe,r);return this.qe=Vt(),this.Qe=wc(),this.Ke=new q(P),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Tc,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new U(P),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Tc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function wc(){return new q(y.comparator)}function vc(){return new q(y.comparator)}const _y=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Iy=(()=>({and:"AND",or:"OR"}))();class Ey{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Oo(n,t){return n.useProto3Json||Zr(t)?t:{value:t}}function kn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ty(n,t){return kn(n,t.toTimestamp())}function et(n){return S(!!n),R.fromTimestamp(function(e){const r=de(e);return new K(r.seconds,r.nanos)}(n))}function Oa(n,t){return function(r){return new O(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Pd(n){const t=O.fromString(n);return S(Fd(t)),t}function Or(n,t){return Oa(n.databaseId,t.path)}function $t(n,t){const e=Pd(t);if(e.get(1)!==n.databaseId.projectId)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new y(Dd(e))}function Mo(n,t){return Oa(n.databaseId,t)}function Vd(n){const t=Pd(n);return t.length===4?O.emptyPath():Dd(t)}function Mr(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dd(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ac(n,t,e){return{name:Or(n,t),fields:e.value.mapValue.fields}}function Cd(n,t,e){const r=$t(n,t.name),i=et(t.updateTime),s=t.createTime?et(t.createTime):R.min(),o=new mt({mapValue:{fields:t.fields}}),a=z.newFoundDocument(r,i,s,o);return e&&a.setHasCommittedMutations(),e?a.setHasCommittedMutations():a}function wy(n,t){return"found"in t?function(r,i){S(!!i.found),i.found.name,i.found.updateTime;const s=$t(r,i.found.name),o=et(i.found.updateTime),a=i.found.createTime?et(i.found.createTime):R.min(),u=new mt({mapValue:{fields:i.found.fields}});return z.newFoundDocument(s,o,a,u)}(n,t):"missing"in t?function(r,i){S(!!i.missing),S(!!i.readTime);const s=$t(r,i.missing),o=et(i.readTime);return z.newNoDocument(s,o)}(n,t):A()}function vy(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(S(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(S(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?g.UNKNOWN:vd(c.code);return new p(l,c.message||"")}(o);e=new Sd(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=$t(n,r.document.name),s=et(r.document.updateTime),o=r.document.createTime?et(r.document.createTime):R.min(),a=new mt({mapValue:{fields:r.document.fields}}),u=z.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];e=new Vi(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=$t(n,r.document),s=r.readTime?et(r.readTime):R.min(),o=z.newNoDocument(i,s),a=r.removedTargetIds||[];e=new Vi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=$t(n,r.document),s=r.removedTargetIds||[];e=new Vi([],s,i,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new my(i,s),a=r.targetId;e=new Rd(a,o)}}return e}function Fr(n,t){let e;if(t instanceof jn)e={update:Ac(n,t.key,t.value)};else if(t instanceof Kn)e={delete:Or(n,t.key)};else if(t instanceof Xt)e={update:Ac(n,t.key,t.data),updateMask:Vy(t.fieldMask)};else{if(!(t instanceof Da))return A();e={verify:Or(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof je)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ke)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ty(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,t.precondition)),e}function Fo(n,t){const e=t.currentDocument?function(s){return s.updateTime!==void 0?j.updateTime(et(s.updateTime)):s.exists!==void 0?j.exists(s.exists):j.none()}(t.currentDocument):j.none(),r=t.updateTransforms?t.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)S(a.setToServerValue==="REQUEST_TIME"),u=new xn;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];u=new je(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];u=new Ke(l)}else"increment"in a?u=new Nn(o,a.increment):A();const c=G.fromServerFormat(a.fieldPath);return new ri(c,u)}(n,i)):[];if(t.update){t.update.name;const i=$t(n,t.update.name),s=new mt({mapValue:{fields:t.update.fields}});if(t.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Pt(c.map(l=>G.fromServerFormat(l)))}(t.updateMask);return new Xt(i,s,o,e,r)}return new jn(i,s,e,r)}if(t.delete){const i=$t(n,t.delete);return new Kn(i,e)}if(t.verify){const i=$t(n,t.verify);return new Da(i,e)}return A()}function Ay(n,t){return n&&n.length>0?(S(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?et(i.updateTime):et(s);return o.isEqual(R.min())&&(o=et(s)),new hy(o,i.transformResults||[])}(e,t))):[]}function xd(n,t){return{documents:[Mo(n,t.path)]}}function Nd(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=Mo(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=Mo(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return Md(L.create(u,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:gn(h.field),direction:Sy(h.dir)}}(c))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=Oo(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),e}function kd(n){let t=Vd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){S(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(h){const d=Od(h);return d instanceof L&&ba(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(I){return new kr(pn(I.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Zr(d)?null:d}(e.limit));let u=null;e.startAt&&(u=function(h){const d=!!h.before,f=h.values||[];return new pe(f,d)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new pe(f,d)}(e.endAt)),od(t,i,o,s,a,"F",u,c)}function Ry(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Od(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=pn(e.unaryFilter.field);return x.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pn(e.unaryFilter.field);return x.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pn(e.unaryFilter.field);return x.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pn(e.unaryFilter.field);return x.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return x.create(pn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return L.create(e.compositeFilter.filters.map(r=>Od(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function Sy(n){return _y[n]}function by(n){return yy[n]}function Py(n){return Iy[n]}function gn(n){return{fieldPath:n.canonicalString()}}function pn(n){return G.fromServerFormat(n.fieldPath)}function Md(n){return n instanceof x?function(e){if(e.op==="=="){if(ac(e.value))return{unaryFilter:{field:gn(e.field),op:"IS_NAN"}};if(oc(e.value))return{unaryFilter:{field:gn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ac(e.value))return{unaryFilter:{field:gn(e.field),op:"IS_NOT_NAN"}};if(oc(e.value))return{unaryFilter:{field:gn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(e.field),op:by(e.op),value:e.value}}}(n):n instanceof L?function(e){const r=e.getFilters().map(i=>Md(i));return r.length===1?r[0]:{compositeFilter:{op:Py(e.op),filters:r}}}(n):A()}function Vy(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Fd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,r,i,s=R.min(),o=R.min(),a=it.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t){this.ut=t}}function Dy(n,t){let e;if(t.document)e=Cd(n.ut,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const r=y.fromSegments(t.noDocument.path),i=Qe(t.noDocument.readTime);e=z.newNoDocument(r,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return A();{const r=y.fromSegments(t.unknownDocument.path),i=Qe(t.unknownDocument.version);e=z.newUnknownDocument(r,i)}}return t.readTime&&e.setReadTime(function(i){const s=new K(i[0],i[1]);return R.fromTimestamp(s)}(t.readTime)),e}function Rc(n,t){const e=t.key,r={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Ki(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(s,o){return{name:Or(s,o.key),fields:o.data.value.mapValue.fields,updateTime:kn(s,o.version.toTimestamp()),createTime:kn(s,o.createTime.toTimestamp())}}(n.ut,t);else if(t.isNoDocument())r.noDocument={path:e.path.toArray(),readTime:We(t.version)};else{if(!t.isUnknownDocument())return A();r.unknownDocument={path:e.path.toArray(),version:We(t.version)}}return r}function Ki(n){const t=n.toTimestamp();return[t.seconds,t.nanoseconds]}function We(n){const t=n.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Qe(n){const t=new K(n.seconds,n.nanoseconds);return R.fromTimestamp(t)}function Ce(n,t){const e=(t.baseMutations||[]).map(s=>Fo(n.ut,s));for(let s=0;s<t.mutations.length-1;++s){const o=t.mutations[s];if(s+1<t.mutations.length&&t.mutations[s+1].transform!==void 0){const a=t.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(s=>Fo(n.ut,s)),i=K.fromMillis(t.localWriteTimeMs);return new Ca(t.batchId,i,e,r)}function ur(n){const t=Qe(n.readTime),e=n.lastLimboFreeSnapshotVersion!==void 0?Qe(n.lastLimboFreeSnapshotVersion):R.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return S(s.documents.length===1),vt(Gn(Vd(s.documents[0])))}(n.query):function(s){return vt(kd(s))}(n.query),new Kt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,t,e,it.fromBase64String(n.resumeToken))}function Bd(n,t){const e=We(t.snapshotVersion),r=We(t.lastLimboFreeSnapshotVersion);let i;i=zi(t.target)?xd(n.ut,t.target):Nd(n.ut,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ge(t.target),readTime:e,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ma(n){const t=kd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ji(t,t.limit,"L"):t}function eo(n,t){return new Na(t.largestBatchId,Fo(n.ut,t.overlayMutation))}function Sc(n,t){const e=t.path.lastSegment();return[n,wt(t.path.popLast()),e]}function bc(n,t,e,r){return{indexId:n,uid:t.uid||"",sequenceNumber:e,readTime:We(r.readTime),documentKey:wt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{getBundleMetadata(t,e){return Pc(t).get(e).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Qe(s.createTime),version:s.version}}(r)})}saveBundleMetadata(t,e){return Pc(t).put(function(i){return{bundleId:i.id,createTime:We(et(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return Vc(t).get(e).next(r=>{if(r)return function(s){return{name:s.name,query:Ma(s.bundledQuery),readTime:Qe(s.readTime)}}(r)})}saveNamedQuery(t,e){return Vc(t).put(function(i){return{name:i.name,readTime:We(et(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function Pc(n){return lt(n,"bundles")}function Vc(n){return lt(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,e){this.serializer=t,this.userId=e}static ct(t,e){const r=e.uid||"";return new Ts(t,r)}getOverlay(t,e){return Zn(t).get(Sc(this.userId,e)).next(r=>r?eo(this.serializer,r):null)}getOverlays(t,e){const r=qt();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){const i=[];return r.forEach((s,o)=>{const a=new Na(e,o);i.push(this.lt(t,a))}),m.waitFor(i)}removeOverlaysForBatchId(t,e,r){const i=new Set;e.forEach(o=>i.add(wt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Zn(t).H("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(t,e,r){const i=qt(),s=wt(e),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Zn(t).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=eo(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(t,e,r,i){const s=qt();let o;const a=IDBKeyRange.bound([this.userId,e,r],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Zn(t).Y({index:"collectionGroupOverlayIndex",range:a},(u,c,l)=>{const h=eo(this.serializer,c);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}lt(t,e){return Zn(t).put(function(i,s,o){const[a,u,c]=Sc(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Fr(i.ut,o.mutation)}}(this.serializer,this.userId,e))}}function Zn(n){return lt(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(Y(t.integerValue));else if("doubleValue"in t){const r=Y(t.doubleValue);isNaN(r)?this.Tt(e,13):(this.Tt(e,15),Dr(r)?e.Et(0):e.Et(r))}else if("timestampValue"in t){const r=t.timestampValue;this.Tt(e,20),typeof r=="string"?e.dt(r):(e.dt(`${r.seconds||""}`),e.Et(r.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(fe(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const r=t.geoPointValue;this.Tt(e,45),e.Et(r.latitude||0),e.Et(r.longitude||0)}else"mapValue"in t?Xh(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):A()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const r=t.fields||{};this.Tt(e,55);for(const i of Object.keys(r))this.At(i,e),this.Pt(r[i],e)}yt(t,e){const r=t.values||[];this.Tt(e,50);for(const i of r)this.Pt(i,e)}ft(t,e){this.Tt(e,37),y.fromName(t).path.forEach(r=>{this.Tt(e,60),this.wt(r,e)})}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}xe.St=new xe;function xy(n){if(n===0)return 8;let t=0;return!(n>>4)&&(t+=4,n<<=4),!(n>>6)&&(t+=2,n<<=2),!(n>>7)&&(t+=1),t}function Dc(n){const t=64-function(r){let i=0;for(let s=0;s<8;++s){const o=xy(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(t/8)}class Ny{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Dt(r.value),r=e.next();this.Ct()}vt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Ft(r.value),r=e.next();this.Mt()}xt(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=e.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=e.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(t){const e=this.Bt(t),r=Dc(e);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=255&e[i]}kt(t){const e=this.Bt(t),r=Dc(e);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(t){this.Lt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Ut(){return this.buffer.slice(0,this.position)}Bt(t){const e=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(t),r=(128&e[0])!=0;e[0]^=r?255:128;for(let i=1;i<e.length;++i)e[i]^=r?255:0;return e}Dt(t){const e=255&t;e===0?(this.Qt(0),this.Qt(255)):e===255?(this.Qt(255),this.Qt(0)):this.Qt(e)}Ft(t){const e=255&t;e===0?(this.$t(0),this.$t(255)):e===255?(this.$t(255),this.$t(0)):this.$t(t)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(t){this.Lt(1),this.buffer[this.position++]=t}$t(t){this.Lt(1),this.buffer[this.position++]=~t}Lt(t){const e=t+this.position;if(e<=this.buffer.length)return;let r=2*this.buffer.length;r<e&&(r=e);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class ky{constructor(t){this.Wt=t}Vt(t){this.Wt.bt(t)}dt(t){this.Wt.xt(t)}Et(t){this.Wt.Nt(t)}It(){this.Wt.qt()}}class Oy{constructor(t){this.Wt=t}Vt(t){this.Wt.vt(t)}dt(t){this.Wt.Ot(t)}Et(t){this.Wt.kt(t)}It(){this.Wt.Kt()}}class tr{constructor(){this.Wt=new Ny,this.Gt=new ky(this.Wt),this.zt=new Oy(this.Wt)}seed(t){this.Wt.seed(t)}jt(t){return t===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e,r,i){this.indexId=t,this.documentKey=e,this.arrayValue=r,this.directionalValue=i}Ht(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,r=new Uint8Array(e);return r.set(this.directionalValue,0),e!==t?r.set([0],this.directionalValue.length):++r[r.length-1],new Ne(this.indexId,this.documentKey,this.arrayValue,r)}}function Zt(n,t){let e=n.indexId-t.indexId;return e!==0?e:(e=Cc(n.arrayValue,t.arrayValue),e!==0?e:(e=Cc(n.directionalValue,t.directionalValue),e!==0?e:y.comparator(n.documentKey,t.documentKey)))}function Cc(n,t){for(let e=0;e<n.length&&e<t.length;++e){const r=n[e]-t[e];if(r!==0)return r}return n.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.Jt=new U((e,r)=>G.comparator(e.field,r.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.Yt=t.orderBy,this.Zt=[];for(const e of t.filters){const r=e;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(t){if(S(t.collectionGroup===this.collectionId),this.Xt)return!1;const e=bo(t);if(e!==void 0&&!this.tn(e))return!1;const r=Pe(t);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.nn(a,u)||!this.rn(this.Yt[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let t=new U(G.comparator);const e=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")e.push(new Ai(r.field,2));else{if(t.has(r.field))continue;t=t.add(r.field),e.push(new Ai(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||t.has(r.field)||(t=t.add(r.field),e.push(new Ai(r.field,r.dir==="asc"?0:1)));return new $i($i.UNKNOWN_ID,this.collectionId,e,Vr.empty())}tn(t){for(const e of this.Zt)if(this.nn(e,t))return!0;return!1}nn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const r=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===r}rn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n){var t,e;if(S(n instanceof x||n instanceof L),n instanceof x){if(n instanceof sd){const i=((e=(t=n.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(s=>x.create(n.field,"==",s)))||[];return L.create(i,"or")}return n}const r=n.filters.map(i=>Ud(i));return L.create(r,n.op)}function My(n){if(n.getFilters().length===0)return[];const t=Uo(Ud(n));return S(qd(t)),Lo(t)||Bo(t)?[t]:t.getFilters()}function Lo(n){return n instanceof x}function Bo(n){return n instanceof L&&ba(n)}function qd(n){return Lo(n)||Bo(n)||function(e){if(e instanceof L&&Co(e)){for(const r of e.getFilters())if(!Lo(r)&&!Bo(r))return!1;return!0}return!1}(n)}function Uo(n){if(S(n instanceof x||n instanceof L),n instanceof x)return n;if(n.filters.length===1)return Uo(n.filters[0]);const t=n.filters.map(r=>Uo(r));let e=L.create(t,n.op);return e=Wi(e),qd(e)?e:(S(e instanceof L),S(Cn(e)),S(e.filters.length>1),e.filters.reduce((r,i)=>Fa(r,i)))}function Fa(n,t){let e;return S(n instanceof x||n instanceof L),S(t instanceof x||t instanceof L),e=n instanceof x?t instanceof x?function(i,s){return L.create([i,s],"and")}(n,t):Nc(n,t):t instanceof x?Nc(t,n):function(i,s){if(S(i.filters.length>0&&s.filters.length>0),Cn(i)&&Cn(s))return nd(i,s.getFilters());const o=Co(i)?i:s,a=Co(i)?s:i,u=o.filters.map(c=>Fa(c,a));return L.create(u,"or")}(n,t),Wi(e)}function Nc(n,t){if(Cn(t))return nd(t,n.getFilters());{const e=t.filters.map(r=>Fa(n,r));return L.create(e,"or")}}function Wi(n){if(S(n instanceof x||n instanceof L),n instanceof x)return n;const t=n.getFilters();if(t.length===1)return Wi(t[0]);if(td(n))return n;const e=t.map(i=>Wi(i)),r=[];return e.forEach(i=>{i instanceof x?r.push(i):i instanceof L&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:L.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.on=new La}addToCollectionParentIndex(t,e){return this.on.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(Ct.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(Ct.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class La{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new U(O.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new U(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Uint8Array(0);class Ly{constructor(t,e){this.user=t,this.databaseId=e,this._n=new La,this.an=new Ae(r=>Ge(r),(r,i)=>ti(r,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this._n.has(e)){const r=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this._n.add(e)});const s={collectionId:r,parent:wt(i)};return kc(t).put(s)}return m.resolve()}getCollectionParents(t,e){const r=[],i=IDBKeyRange.bound([e,""],[Bh(e),""],!1,!0);return kc(t).W(i).next(s=>{for(const o of s){if(o.collectionId!==e)break;r.push(Ut(o.parent))}return r})}addFieldIndex(t,e){const r=er(t),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(e);delete i.indexId;const s=r.add(i);if(e.indexState){const o=ln(t);return s.next(a=>{o.put(bc(a,this.user,e.indexState.sequenceNumber,e.indexState.offset))})}return s.next()}deleteFieldIndex(t,e){const r=er(t),i=ln(t),s=cn(t);return r.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=er(t),r=cn(t),i=ln(t);return e.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(t,e){return m.forEach(this.un(e),r=>this.getIndexType(t,r).next(i=>{if(i===0||i===1){const s=new xc(r).sn();if(s!=null)return this.addFieldIndex(t,s)}}))}getDocumentsMatchingTarget(t,e){const r=cn(t);let i=!0;const s=new Map;return m.forEach(this.un(e),o=>this.cn(t,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=V();const a=[];return m.forEach(s,(u,c)=>{_("IndexedDbIndexManager",`Using index ${function(C){return`id=${C.indexId}|cg=${C.collectionGroup}|f=${C.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(u)} to execute ${Ge(e)}`);const l=function(C,Q){const H=bo(Q);if(H===void 0)return null;for(const Z of Gi(C,H.fieldPath))switch(Z.op){case"array-contains-any":return Z.value.arrayValue.values||[];case"array-contains":return[Z.value]}return null}(c,u),h=function(C,Q){const H=new Map;for(const Z of Pe(Q))for(const Rt of Gi(C,Z.fieldPath))switch(Rt.op){case"==":case"in":H.set(Z.fieldPath.canonicalString(),Rt.value);break;case"not-in":case"!=":return H.set(Z.fieldPath.canonicalString(),Rt.value),Array.from(H.values())}return null}(c,u),d=function(C,Q){const H=[];let Z=!0;for(const Rt of Pe(Q)){const sn=Rt.kind===0?dc(C,Rt.fieldPath,C.startAt):fc(C,Rt.fieldPath,C.startAt);H.push(sn.value),Z&&(Z=sn.inclusive)}return new pe(H,Z)}(c,u),f=function(C,Q){const H=[];let Z=!0;for(const Rt of Pe(Q)){const sn=Rt.kind===0?fc(C,Rt.fieldPath,C.endAt):dc(C,Rt.fieldPath,C.endAt);H.push(sn.value),Z&&(Z=sn.inclusive)}return new pe(H,Z)}(c,u),I=this.ln(u,c,d),w=this.ln(u,c,f),v=this.hn(u,c,h),D=this.Pn(u.indexId,l,I,d.inclusive,w,f.inclusive,v);return m.forEach(D,F=>r.j(F,e.limit).next(C=>{C.forEach(Q=>{const H=y.fromSegments(Q.documentKey);o.has(H)||(o=o.add(H),a.push(H))})}))}).next(()=>a)}return m.resolve(null)})}un(t){let e=this.an.get(t);return e||(t.filters.length===0?e=[t]:e=My(L.create(t.filters,"and")).map(r=>No(t.path,t.collectionGroup,t.orderBy,r.getFilters(),t.limit,t.startAt,t.endAt)),this.an.set(t,e),e)}Pn(t,e,r,i,s,o,a){const u=(e!=null?e.length:1)*Math.max(r.length,s.length),c=u/(e!=null?e.length:1),l=[];for(let h=0;h<u;++h){const d=e?this.In(e[h/c]):Ii,f=this.Tn(t,d,r[h%c],i),I=this.En(t,d,s[h%c],o),w=a.map(v=>this.Tn(t,d,v,!0));l.push(...this.createRange(f,I,w))}return l}Tn(t,e,r,i){const s=new Ne(t,y.empty(),e,r);return i?s:s.Ht()}En(t,e,r,i){const s=new Ne(t,y.empty(),e,r);return i?s.Ht():s}cn(t,e){const r=new xc(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(t,e){let r=2;const i=this.un(e);return m.forEach(i,s=>this.cn(t,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new U(G.comparator),l=!1;for(const h of u.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:c=c.add(d.field));for(const h of u.orderBy)h.field.isKeyField()||(c=c.add(h.field));return c.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(e)&&i.length>1&&r===2?1:r)}dn(t,e){const r=new tr;for(const i of Pe(t)){const s=e.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);xe.St.ht(s,o)}return r.Ut()}In(t){const e=new tr;return xe.St.ht(t,e.jt(0)),e.Ut()}An(t,e){const r=new tr;return xe.St.ht(ze(this.databaseId,e),r.jt(function(s){const o=Pe(s);return o.length===0?0:o[o.length-1].kind}(t))),r.Ut()}hn(t,e,r){if(r===null)return[];let i=[];i.push(new tr);let s=0;for(const o of Pe(t)){const a=r[s++];for(const u of i)if(this.Rn(e,o.fieldPath)&&Nr(a))i=this.Vn(i,o,a);else{const c=u.jt(o.kind);xe.St.ht(a,c)}}return this.mn(i)}ln(t,e,r){return this.hn(t,e,r.position)}mn(t){const e=[];for(let r=0;r<t.length;++r)e[r]=t[r].Ut();return e}Vn(t,e,r){const i=[...t],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new tr;u.seed(a.Ut()),xe.St.ht(o,u.jt(e.kind)),s.push(u)}return s}Rn(t,e){return!!t.filters.find(r=>r instanceof x&&r.field.isEqual(e)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(t,e){const r=er(t),i=ln(t);return(e?r.W("collectionGroupIndex",IDBKeyRange.bound(e,e)):r.W()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,h){const d=h?new Vr(h.sequenceNumber,new Ct(Qe(h.readTime),new y(Ut(h.documentKey)),h.largestBatchId)):Vr.empty(),f=l.fields.map(([I,w])=>new Ai(G.fromServerFormat(I),w));return new $i(l.indexId,l.collectionGroup,f,d)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:P(r.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,r){const i=er(t),s=ln(t);return this.fn(t).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(a=>m.forEach(a,u=>s.put(bc(u.indexId,this.user,o,r)))))}updateIndexEntries(t,e){const r=new Map;return m.forEach(e,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(t,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,u=>this.gn(t,i,u).next(c=>{const l=this.pn(s,u);return c.isEqual(l)?m.resolve():this.yn(t,s,u,c,l)}))))})}wn(t,e,r,i){return cn(t).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,e.key),documentKey:e.key.path.toArray()})}Sn(t,e,r,i){return cn(t).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,e.key),e.key.path.toArray()])}gn(t,e,r){const i=cn(t);let s=new U(Zt);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,e)])},(o,a)=>{s=s.add(new Ne(r.indexId,e,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(t,e){let r=new U(Zt);const i=this.dn(e,t);if(i==null)return r;const s=bo(e);if(s!=null){const o=t.data.field(s.fieldPath);if(Nr(o))for(const a of o.arrayValue.values||[])r=r.add(new Ne(e.indexId,t.key,this.In(a),i))}else r=r.add(new Ne(e.indexId,t.key,Ii,i));return r}yn(t,e,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const o=[];return function(u,c,l,h,d){const f=u.getIterator(),I=c.getIterator();let w=un(f),v=un(I);for(;w||v;){let D=!1,F=!1;if(w&&v){const C=l(w,v);C<0?F=!0:C>0&&(D=!0)}else w!=null?F=!0:D=!0;D?(h(v),v=un(I)):F?(d(w),w=un(f)):(w=un(f),v=un(I))}}(i,s,Zt,a=>{o.push(this.wn(t,e,r,a))},a=>{o.push(this.Sn(t,e,r,a))}),m.waitFor(o)}fn(t){let e=1;return ln(t).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,r){r=r.sort((o,a)=>Zt(o,a)).filter((o,a,u)=>!a||Zt(o,u[a-1])!==0);const i=[];i.push(t);for(const o of r){const a=Zt(o,t),u=Zt(o,e);if(a===0)i[0]=t.Ht();else if(a>0&&u<0)i.push(o),i.push(o.Ht());else if(u>0)break}i.push(e);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ii,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ii,[]];s.push(IDBKeyRange.bound(a,u))}return s}bn(t,e){return Zt(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Oc)}getMinOffset(t,e){return m.mapArray(this.un(e),r=>this.cn(t,r).next(i=>i||A())).next(Oc)}}function kc(n){return lt(n,"collectionParents")}function cn(n){return lt(n,"indexEntries")}function er(n){return lt(n,"indexConfiguration")}function ln(n){return lt(n,"indexState")}function Oc(n){S(n.length!==0);let t=n[0].indexState.offset,e=t.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Aa(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new Ct(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class St{constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new St(t,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n,t,e){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(e.batchId);let a=0;const u=r.Y({range:o},(l,h,d)=>(a++,d.delete()));s.push(u.next(()=>{S(a===1)}));const c=[];for(const l of e.mutations){const h=jh(t,l.key.path,e.batchId);s.push(i.delete(h)),c.push(l.key)}return m.waitFor(s).next(()=>c)}function Qi(n){if(!n)return 0;let t;if(n.document)t=n.document;else if(n.unknownDocument)t=n.unknownDocument;else{if(!n.noDocument)throw A();t=n.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(41943040,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);class ws{constructor(t,e,r,i){this.userId=t,this.serializer=e,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(t,e,r,i){S(t.uid!=="");const s=t.isAuthenticated()?t.uid:"";return new ws(s,e,r,i)}checkEmpty(t){let e=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return te(t).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{e=!1,o.done()}).next(()=>e)}addMutationBatch(t,e,r,i){const s=_n(t),o=te(t);return o.add({}).next(a=>{S(typeof a=="number");const u=new Ca(a,e,r,i),c=function(f,I,w){const v=w.baseMutations.map(F=>Fr(f.ut,F)),D=w.mutations.map(F=>Fr(f.ut,F));return{userId:I,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:v,mutations:D}}(this.serializer,this.userId,u),l=[];let h=new U((d,f)=>P(d.canonicalString(),f.canonicalString()));for(const d of i){const f=jh(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(c)),l.push(s.put(f,S_))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(t,d))}),t.addOnCommittedListener(()=>{this.Dn[a]=u.keys()}),m.waitFor(l).next(()=>u)})}lookupMutationBatch(t,e){return te(t).get(e).next(r=>r?(S(r.userId===this.userId),Ce(this.serializer,r)):null)}Cn(t,e){return this.Dn[e]?m.resolve(this.Dn[e]):this.lookupMutationBatch(t,e).next(r=>{if(r){const i=r.keys();return this.Dn[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return te(t).Y({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(S(a.batchId>=r),s=Ce(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return te(t).Y({index:"userMutationsIndex",range:e,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return te(t).W("userMutationsIndex",e).next(r=>r.map(i=>Ce(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const r=Ri(this.userId,e.path),i=IDBKeyRange.lowerBound(r),s=[];return _n(t).Y({range:i},(o,a,u)=>{const[c,l,h]=o,d=Ut(l);if(c===this.userId&&e.path.isEqual(d))return te(t).get(h).next(f=>{if(!f)throw A();S(f.userId===this.userId),s.push(Ce(this.serializer,f))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new U(P);const i=[];return e.forEach(s=>{const o=Ri(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=_n(t).Y({range:a},(c,l,h)=>{const[d,f,I]=c,w=Ut(f);d===this.userId&&s.path.isEqual(w)?r=r.add(I):h.done()});i.push(u)}),m.waitFor(i).next(()=>this.vn(t,r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1,s=Ri(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new U(P);return _n(t).Y({range:o},(u,c,l)=>{const[h,d,f]=u,I=Ut(d);h===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(t,a))}vn(t,e){const r=[],i=[];return e.forEach(s=>{i.push(te(t).get(s).next(o=>{if(o===null)throw A();S(o.userId===this.userId),r.push(Ce(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(t,e){return $d(t.ae,this.userId,e).next(r=>(t.addOnCommittedListener(()=>{this.Fn(e.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}Fn(t){delete this.Dn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return _n(t).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Ut(s[1]);i.push(u)}else a.done()}).next(()=>{S(i.length===0)})})}containsKey(t,e){return zd(t,this.userId,e)}Mn(t){return Gd(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function zd(n,t,e){const r=Ri(t,e.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return _n(n).Y({range:s,J:!0},(a,u,c)=>{const[l,h,d]=a;l===t&&h===i&&(o=!0),c.done()}).next(()=>o)}function te(n){return lt(n,"mutations")}function _n(n){return lt(n,"documentMutations")}function Gd(n){return lt(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new He(0)}static Nn(){return new He(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Bn(t).next(e=>{const r=new He(e.highestTargetId);return e.highestTargetId=r.next(),this.Ln(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Bn(t).next(e=>R.fromTimestamp(new K(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Bn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,r){return this.Bn(t).next(i=>(i.highestListenSequenceNumber=e,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.Ln(t,i)))}addTargetData(t,e){return this.kn(t,e).next(()=>this.Bn(t).next(r=>(r.targetCount+=1,this.qn(e,r),this.Ln(t,r))))}updateTargetData(t,e){return this.kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>hn(t).delete(e.targetId)).next(()=>this.Bn(t)).next(r=>(S(r.targetCount>0),r.targetCount-=1,this.Ln(t,r)))}removeTargets(t,e,r){let i=0;const s=[];return hn(t).Y((o,a)=>{const u=ur(a);u.sequenceNumber<=e&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(t,u)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(t,e){return hn(t).Y((r,i)=>{const s=ur(i);e(s)})}Bn(t){return Fc(t).get("targetGlobalKey").next(e=>(S(e!==null),e))}Ln(t,e){return Fc(t).put("targetGlobalKey",e)}kn(t,e){return hn(t).put(Bd(this.serializer,e))}qn(t,e){let r=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,r=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,r=!0),r}getTargetCount(t){return this.Bn(t).next(e=>e.targetCount)}getTargetData(t,e){const r=Ge(e),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return hn(t).Y({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=ur(a);ti(e,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(t,e,r){const i=[],s=re(t);return e.forEach(o=>{const a=wt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(t,r,o))}),m.waitFor(i)}removeMatchingKeys(t,e,r){const i=re(t);return m.forEach(e,s=>{const o=wt(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(t,r,s)])})}removeMatchingKeysForTargetId(t,e){const r=re(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(t,e){const r=IDBKeyRange.bound([e],[e+1],!1,!0),i=re(t);let s=V();return i.Y({range:r,J:!0},(o,a,u)=>{const c=Ut(o[1]),l=new y(c);s=s.add(l)}).next(()=>s)}containsKey(t,e){const r=wt(e.path),i=IDBKeyRange.bound([r],[Bh(r)],!1,!0);let s=0;return re(t).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}_t(t,e){return hn(t).get(e).next(r=>r?ur(r):null)}}function hn(n){return lt(n,"targets")}function Fc(n){return lt(n,"targetGlobal")}function re(n){return lt(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc([n,t],[e,r]){const i=P(n,e);return i===0?P(t,r):i}class Uy{constructor(t){this.Qn=t,this.buffer=new U(Lc),this.Kn=0}$n(){return++this.Kn}Un(t){const e=[t,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Lc(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class qy{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(t){_("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ve(e)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await we(e)}await this.Gn(3e5)})}}class $y{constructor(t,e){this.zn=t,this.params=e}calculateTargetCount(t,e){return this.zn.jn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return m.resolve(bt._e);const r=new Uy(e);return this.zn.forEachTarget(t,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(t,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Mc)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mc):this.Jn(t,e))}getCacheSize(t){return this.zn.getCacheSize(t)}Jn(t,e){let r,i,s,o,a,u,c;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(t,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(t,r,e))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(h=>(c=Date.now(),fn()<=N.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function zy(n,t){return new $y(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t,e){this.db=t,this.garbageCollector=zy(this,e)}jn(t){const e=this.Yn(t);return this.db.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Yn(t){let e=0;return this.Hn(t,r=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Hn(t,e){return this.Zn(t,(r,i)=>e(i))}addReference(t,e,r){return Ei(t,r)}removeReference(t,e,r){return Ei(t,r)}removeTargets(t,e,r){return this.db.getTargetCache().removeTargets(t,e,r)}markPotentiallyOrphaned(t,e){return Ei(t,e)}Xn(t,e){return function(i,s){let o=!1;return Gd(i).Z(a=>zd(i,a,s).next(u=>(u&&(o=!0),m.resolve(!u)))).next(()=>o)}(t,e)}removeOrphanedDocuments(t,e){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(t,(o,a)=>{if(a<=e){const u=this.Xn(t,o).next(c=>{if(!c)return s++,r.getEntry(t,o).next(()=>(r.removeEntry(o,R.min()),re(t).delete(function(h){return[0,wt(h.path)]}(o))))});i.push(u)}}).next(()=>m.waitFor(i)).next(()=>r.apply(t)).next(()=>s)}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,r)}updateLimboDocument(t,e){return Ei(t,e)}Zn(t,e){const r=re(t);let i,s=bt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==bt._e&&e(new y(Ut(i)),s),s=c,i=u):s=bt._e}).next(()=>{s!==bt._e&&e(new y(Ut(i)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ei(n,t){return re(n).put(function(r,i){return{targetId:0,path:wt(r.path),sequenceNumber:i}}(t,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.changes=new Ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,z.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,r){return Se(t).put(r)}removeEntry(t,e,r){return Se(t).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ki(o),a[a.length-1]]}(e,r))}updateMetadata(t,e){return this.getMetadata(t).next(r=>(r.byteSize+=e,this.er(t,r)))}getEntry(t,e){let r=z.newInvalidDocument(e);return Se(t).Y({index:"documentKeyIndex",range:IDBKeyRange.only(nr(e))},(i,s)=>{r=this.tr(e,s)}).next(()=>r)}nr(t,e){let r={size:0,document:z.newInvalidDocument(e)};return Se(t).Y({index:"documentKeyIndex",range:IDBKeyRange.only(nr(e))},(i,s)=>{r={document:this.tr(e,s),size:Qi(s)}}).next(()=>r)}getEntries(t,e){let r=Vt();return this.rr(t,e,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(t,e){let r=Vt(),i=new q(y.comparator);return this.rr(t,e,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,Qi(o))}).next(()=>({documents:r,sr:i}))}rr(t,e,r){if(e.isEmpty())return m.resolve();let i=new U(qc);e.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(nr(i.first()),nr(i.last())),o=i.getIterator();let a=o.getNext();return Se(t).Y({index:"documentKeyIndex",range:s},(u,c,l)=>{const h=y.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&qc(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?l.U(nr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(t,e,r,i,s){const o=e.path,a=[o.popLast().toArray(),o.lastSegment(),Ki(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Se(t).W(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let l=Vt();for(const h of c){const d=this.tr(y.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(ni(e,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(t,e,r,i){let s=Vt();const o=Uc(e,r),a=Uc(e,Ct.max());return Se(t).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,l)=>{const h=this.tr(y.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(t){return new Ky(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Bc(t).get("remoteDocumentGlobalKey").next(e=>(S(!!e),e))}er(t,e){return Bc(t).put("remoteDocumentGlobalKey",e)}tr(t,e){if(e){const r=Dy(this.serializer,e);if(!(r.isNoDocument()&&r.version.isEqual(R.min())))return r}return z.newInvalidDocument(t)}}function Kd(n){return new jy(n)}class Ky extends jd{constructor(t,e){super(),this._r=t,this.trackRemovals=e,this.ar=new Ae(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(t){const e=[];let r=0,i=new U((s,o)=>P(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(e.push(this._r.removeEntry(t,s,a.readTime)),o.isValidDocument()){const u=Rc(this._r.serializer,o);i=i.add(s.path.popLast());const c=Qi(u);r+=c-a.size,e.push(this._r.addEntry(t,s,u))}else if(r-=a.size,this.trackRemovals){const u=Rc(this._r.serializer,o.convertToNoDocument(R.min()));e.push(this._r.addEntry(t,s,u))}}),i.forEach(s=>{e.push(this._r.indexManager.addToCollectionParentIndex(t,s))}),e.push(this._r.updateMetadata(t,r)),m.waitFor(e)}getFromCache(t,e){return this._r.nr(t,e).next(r=>(this.ar.set(e,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(t,e){return this._r.ir(t,e).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Bc(n){return lt(n,"remoteDocumentGlobal")}function Se(n){return lt(n,"remoteDocumentsV14")}function nr(n){const t=n.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Uc(n,t){const e=t.documentKey.path.toArray();return[n,Ki(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function qc(n,t){const e=n.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<e.length-2&&s<r.length-2;++s)if(i=P(e[s],r[s]),i)return i;return i=P(e.length,r.length),i||(i=P(e[e.length-2],r[r.length-2]),i||P(e[e.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&mr(r.mutation,i,Pt.empty(),K.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,V()).next(()=>r))}getLocalViewOfDocuments(t,e,r=V()){const i=qt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=or();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=qt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,V()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Vt();const o=fr(),a=function(){return fr()}();return e.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof Xt)?s=s.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),mr(l.mutation,c,l.mutation.getFieldMask(),K.now())):o.set(c.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),e.forEach((c,l)=>{var h;return a.set(c,new Wy(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=fr();let i=new q((o,a)=>o-a),s=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let l=r.get(u)||Pt.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||V()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=dd();l.forEach(d=>{if(!s.has(d)){const f=Ed(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Pa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):m.resolve(qt());let a=-1,u=s;return o.next(c=>m.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,V())).next(l=>({batchId:a,changes:hd(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new y(e)).next(r=>{let i=or();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=or();return this.indexManager.getCollectionParents(t,s).next(a=>m.forEach(a,u=>{const c=function(h,d){return new Yt(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,z.newInvalidDocument(l)))});let a=or();return o.forEach((u,c)=>{const l=s.get(u);l!==void 0&&mr(l.mutation,c,Pt.empty(),K.now()),ni(e,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return m.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(i){return{id:i.id,version:i.version,createTime:et(i.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(i){return{name:i.name,query:Ma(i.bundledQuery),readTime:et(i.readTime)}}(e)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.overlays=new q(y.comparator),this.lr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=qt();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.lt(t,e,s)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const i=qt(),s=e.length+1,o=new y(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return m.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new q((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=qt(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=qt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return m.resolve(a)}lt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Na(e,r));let s=this.lr.get(e);s===void 0&&(s=V(),this.lr.set(e,s)),this.lr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.hr=new U(st.Pr),this.Ir=new U(st.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new st(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new st(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new y(new O([])),r=new st(e,t),i=new st(e,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new y(new O([])),r=new st(e,t),i=new st(e,t+1);let s=V();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new st(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return y.comparator(t.key,e.key)||P(t.gr,e.gr)}static Tr(t,e){return P(t.gr,e.gr)||y.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new U(st.Pr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ca(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Sr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new U(P);return e.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;y.isDocumentKey(s)||(s=s.child(""));const o=new st(new y(s),0);let a=new U(P);return this.yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.gr)),!0)},o),m.resolve(this.br(a))}br(t){const e=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){S(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(e.mutations,i=>{const s=new st(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new st(e,0),i=this.yr.firstAfterOrEqual(r);return m.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(t){this.Cr=t,this.docs=function(){return new q(y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():z.newInvalidDocument(e))}getEntries(t,e){let r=Vt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():z.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Vt();const o=e.path,a=new y(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Aa(qh(l),r)<=0||(i.has(l.key)||ni(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,e,r,i){A()}vr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Jy(this)}getSize(t){return m.resolve(this.size)}}class Jy extends jd{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(t){this.persistence=t,this.Fr=new Ae(e=>Ge(e),ti),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ba,this.targetCount=0,this.Nr=He.On()}forEachTarget(t,e){return this.Fr.forEach((r,i)=>e(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),m.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new He(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.kn(e),m.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Or.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e){this.Br={},this.overlays={},this.Lr=new bt(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Zy(this),this.indexManager=new Fy,this.remoteDocumentCache=function(i){return new Xy(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Ld(e),this.Kr=new Qy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Yy(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const i=new tI(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,e){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class tI extends zh{constructor(t){super(),this.currentSequenceNumber=t}}class vs{constructor(t){this.persistence=t,this.Gr=new Ba,this.zr=null}static jr(t){return new vs(t)}get Hr(){if(this.zr)return this.zr;throw A()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),m.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const i=y.fromPath(r);return this.Jr(t,i).next(s=>{s||e.removeEntry(i,R.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return m.or([()=>m.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t){this.serializer=t}N(t,e,r,i){const s=new _s("createOrUpgrade",e);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(t),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nc,{unique:!0}),u.createObjectStore("documentMutations")}(t),$c(t),function(u){u.createObjectStore("remoteDocuments")}(t));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(t),$c(t)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:R.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").W().next(l=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nc,{unique:!0});const h=c.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(t,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(t),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(t,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(t)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:L_});c.createIndex("collectionPathOverlayIndex",B_,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",U_,{unique:!1})})(t)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:b_});c.createIndex("documentKeyIndex",P_),c.createIndex("collectionGroupIndex",V_)}(t)).next(()=>this.ri(t,s)).next(()=>t.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(t,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:k_}).createIndex("sequenceNumberIndex",O_,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:M_}).createIndex("documentKeyIndex",F_,{unique:!1})}(t))),o}Xr(t){let e=0;return t.store("remoteDocuments").Y((r,i)=>{e+=Qi(i)}).next(()=>{const r={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(t){const e=t.store("mutationQueues"),r=t.store("mutations");return e.W().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>m.forEach(a,u=>{S(u.userId===s.userId);const c=Ce(this.serializer,u);return $d(t,s.userId,c).next(()=>{})}))}))}ei(t){const e=t.store("targetDocuments"),r=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const u=new O(o),c=function(h){return[0,wt(h)]}(u);s.push(e.get(c).next(l=>l?m.resolve():(h=>e.put({targetId:0,path:wt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>m.waitFor(s))})}ti(t,e){t.createObjectStore("collectionParents",{keyPath:N_});const r=e.store("collectionParents"),i=new La,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:wt(u)})}};return e.store("remoteDocuments").Y({J:!0},(o,a)=>{const u=new O(o);return s(u.popLast())}).next(()=>e.store("documentMutations").Y({J:!0},([o,a,u],c)=>{const l=Ut(a);return s(l.popLast())}))}ni(t){const e=t.store("targets");return e.Y((r,i)=>{const s=ur(i),o=Bd(this.serializer,s);return e.put(o)})}ri(t,e){const r=e.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=e.store("remoteDocumentsV14"),u=function(h){return h.document?new y(O.fromString(h.document.name).popFirst(5)):h.noDocument?y.fromSegments(h.noDocument.path):h.unknownDocument?y.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>m.waitFor(i))}ii(t,e){const r=e.store("mutations"),i=Kd(this.serializer),s=new Qd(vs.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var c;let l=(c=a.get(u.userId))!==null&&c!==void 0?c:V();Ce(this.serializer,u).keys().forEach(h=>l=l.add(h)),a.set(u.userId,l)}),m.forEach(a,(u,c)=>{const l=new ot(c),h=Ts.ct(this.serializer,l),d=s.getIndexManager(l),f=ws.ct(l,this.serializer,d,s.referenceDelegate);return new Wd(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Po(e,bt._e),u).next()})})}}function $c(n){n.createObjectStore("targetDocuments",{keyPath:C_}).createIndex("documentTargetsIndex",x_,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",D_,{unique:!0}),n.createObjectStore("targetGlobal")}const no="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ua{constructor(t,e,r,i,s,o,a,u,c,l,h=15){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=c,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!Ua.D())throw new p(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Gy(this,i),this.Ii=e+"main",this.serializer=new Ld(u),this.Ti=new kt(this.Ii,this.ai,new eI(this.serializer)),this.qr=new By(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Kd(this.serializer),this.Kr=new Cy,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&tt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,no);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.qr.getHighestSequenceNumber(t))}).then(t=>{this.Lr=new bt(t,this.oi)}).then(()=>{this.kr=!0}).catch(t=>(this.Ti&&this.Ti.close(),Promise.reject(t)))}mi(t){return this.Pi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ti.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Ti(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(t).next(e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(t)).next(e=>this.isPrimary&&!e?this.pi(t).next(()=>!1):!!e&&this.yi(t).next(()=>!0))).catch(t=>{if(ve(t))return _("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.si.enqueueRetryable(()=>this.Pi(t)),this.isPrimary=t})}fi(t){return rr(t).get("owner").next(e=>m.resolve(this.wi(e)))}Si(t){return Ti(t).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const r=lt(e,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const e of t)this.Ei.removeItem(this.vi(e.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(t){return!!t&&t.ownerId===this.clientId}gi(t){return this._i?m.resolve(!0):rr(t).get("owner").next(e=>{if(e!==null&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)){if(this.wi(e)&&this.networkEnabled)return!0;if(!this.wi(e)){if(!e.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,no);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ti(t).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&_("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new Po(t,bt._e);return this.pi(e).next(()=>this.Si(e))}),this.Ti.close(),this.Ni()}Ci(t,e){return t.filter(r=>this.Di(r.updateTimeMs,e)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",t=>Ti(t).W().next(e=>this.Ci(e,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(t,e){return ws.ct(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Ly(t,this.serializer.ut.databaseId)}getDocumentOverlayCache(t){return Ts.ct(this.serializer,t)}getBundleCache(){return this.Kr}runTransaction(t,e,r){_("IndexedDbPersistence","Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",s=function(u){return u===15?$_:u===14?Qh:u===13?Wh:u===12?q_:u===11?Kh:void A()}(this.ai);let o;return this.Ti.runTransaction(t,i,s,a=>(o=new Po(a,this.Lr?this.Lr.next():bt._e),e==="readwrite-primary"?this.fi(o).next(u=>!!u||this.gi(o)).next(u=>{if(!u)throw tt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new p(g.FAILED_PRECONDITION,$h);return r(o)}).next(u=>this.yi(o).next(()=>u)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(t){return rr(t).get("owner").next(e=>{if(e!==null&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)&&!this.wi(e)&&!(this._i||this.allowTabSynchronization&&e.allowTabSynchronization))throw new p(g.FAILED_PRECONDITION,no)})}yi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return rr(t).put("owner",e)}static D(){return kt.D()}pi(t){const e=rr(t);return e.get("owner").next(r=>this.wi(r)?(_("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):m.resolve())}Di(t,e){const r=Date.now();return!(t<r-e)&&(!(t>r)||(tt(`Detected an update time that is in the future: ${t} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const e=/(?:Version|Mobile)\/1[456]/;Dm()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(t){var e;try{const r=((e=this.Ei)===null||e===void 0?void 0:e.getItem(this.vi(t)))!==null;return _("IndexedDbPersistence",`Client '${t}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return tt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(t){tt("Failed to set zombie client id.",t)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function rr(n){return lt(n,"owner")}function Ti(n){return lt(n,"clientMetadata")}function qa(n,t){let e=n.projectId;return n.isDefaultDatabase||(e+="."+n.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=i}static Qi(t,e){let r=V(),i=V();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $a(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.zi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nI;return this.Hi(t,e,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>s.result)}Ji(t,e,r,i){return r.documentReadCount<this.Ui?(fn()<=N.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",mn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(fn()<=N.DEBUG&&_("QueryEngine","Query:",mn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(fn()<=N.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",mn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,vt(e))):m.resolve())}zi(t,e){if(mc(e))return m.resolve(null);let r=vt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ji(e,null,"F"),r=vt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=V(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Yi(e,a);return this.Zi(e,c,o,u.readTime)?this.zi(t,ji(e,null,"F")):this.Xi(t,c,e,u)}))})))}ji(t,e,r,i){return mc(e)||i.isEqual(R.min())?m.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(e,s);return this.Zi(e,o,r,i)?m.resolve(null):(fn()<=N.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mn(e)),this.Xi(t,o,e,Uh(i,-1)).next(a=>a))})}Yi(t,e){let r=new U(cd(t));return e.forEach((i,s)=>{ni(t,s)&&(r=r.add(s))}),r}Zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,e,r){return fn()<=N.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",mn(e)),this.Gi.getDocumentsMatchingQuery(t,e,Ct.min(),r)}Xi(t,e,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(t,e,r,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new q(P),this.ns=new Ae(s=>Ge(s),ti),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wd(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function Yd(n,t,e,r){return new rI(n,t,e,r)}async function Xd(n,t){const e=E(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=V();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(r,u).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function iI(n,t){const e=E(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,d=h.keys();let f=m.resolve();return d.forEach(I=>{f=f.next(()=>l.getEntry(u,I)).next(w=>{const v=c.docVersions.get(I);S(v!==null),w.version.compareTo(v)<0&&(h.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),l.addEntry(w)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=V();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Jd(n){const t=E(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function sI(n,t){const e=E(n),r=t.snapshotVersion;let i=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});i=e.ts;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(e.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>e.qr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(it.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(w,v,D){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,f,l)&&a.push(e.qr.updateTargetData(s,f))});let u=Vt(),c=V();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Zd(s,o,t.documentUpdates).next(l=>{u=l.us,c=l.cs})),!r.isEqual(R.min())){const l=e.qr.getLastRemoteSnapshotVersion(s).next(h=>e.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(e.ts=i,s))}function Zd(n,t,e){let r=V(),i=V();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Vt();return e.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(R.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{us:o,cs:i}})}function oI(n,t){const e=E(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function On(n,t){const e=E(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.qr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):e.qr.allocateTargetId(r).next(o=>(i=new Kt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function Mn(n,t,e){const r=E(n),i=r.ts.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ve(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function Hi(n,t,e){const r=E(n);let i=R.min(),s=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=E(u),d=h.ns.get(l);return d!==void 0?m.resolve(h.ts.get(d)):h.qr.getTargetData(c,l)}(r,o,vt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?i:R.min(),e?s:V())).next(a=>(nf(r,ud(t),a),{documents:a,ls:s})))}function tf(n,t){const e=E(n),r=E(e.qr),i=e.ts.get(t);return i?Promise.resolve(i.target):e.persistence.runTransaction("Get target data","readonly",s=>r._t(s,t).next(o=>o?o.target:null))}function ef(n,t){const e=E(n),r=e.rs.get(t)||R.min();return e.persistence.runTransaction("Get new document changes","readonly",i=>e.ss.getAllFromCollectionGroup(i,t,Uh(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(nf(e,t,i),i))}function nf(n,t,e){let r=n.rs.get(t)||R.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(t,r)}async function aI(n,t,e,r){const i=E(n);let s=V(),o=Vt();for(const c of e){const l=t.hs(c.metadata.name);c.document&&(s=s.add(l));const h=t.Ps(c);h.setReadTime(t.Is(c.metadata.readTime)),o=o.insert(l,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),u=await On(i,function(l){return vt(Gn(O.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>Zd(c,a,o).next(l=>(a.apply(c),l)).next(l=>i.qr.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.qr.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,l.us,l.cs)).next(()=>l.us)))}async function uI(n,t,e=V()){const r=await On(n,vt(Ma(t.bundledQuery))),i=E(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=et(t.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,t);const a=r.withResumeToken(it.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,e,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,t))})}function zc(n,t){return`firestore_clients_${n}_${t}`}function Gc(n,t,e){let r=`firestore_mutations_${n}_${e}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function ro(n,t){return`firestore_targets_${n}_${t}`}class Yi{constructor(t,e,r,i){this.user=t,this.batchId=e,this.state=r,this.error=i}static Ts(t,e,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new p(i.error.code,i.error.message))),o?new Yi(t,e,i.state,s):(tt("SharedClientState",`Failed to parse mutation state for ID '${e}': ${r}`),null)}Es(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class gr{constructor(t,e,r){this.targetId=t,this.state=e,this.error=r}static Ts(t,e){const r=JSON.parse(e);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new p(r.error.code,r.error.message))),s?new gr(t,r.state,i):(tt("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Es(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Xi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ts(t,e){const r=JSON.parse(e);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Va();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Gh(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Xi(t,s):(tt("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class za{constructor(t,e){this.clientId=t,this.onlineState=e}static Ts(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new za(e.clientId,e.onlineState):(tt("SharedClientState",`Failed to parse online state: ${t}`),null)}}class qo{constructor(){this.activeTargetIds=Va()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class io{constructor(t,e,r,i,s){this.window=t,this.si=e,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new q(P),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=zc(this.persistenceKey,this.Rs),this.ws=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new qo),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.vs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Bi();for(const r of t){if(r===this.Rs)continue;const i=this.getItem(zc(this.persistenceKey,r));if(i){const s=Xi.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const e=this.storage.getItem(this.Cs);if(e){const r=this.Ms(e);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.ws,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(t){let e=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Ns(t,"pending")}updateMutationState(t,e,r){this.Ns(t,e,r),this.Bs(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const r=this.storage.getItem(ro(this.persistenceKey,t));if(r){const i=gr.Ts(t,r);i&&(e=i.state)}}return this.Ls.ds(t),this.Fs(),e}removeLocalQueryTarget(t){this.Ls.As(t),this.Fs()}isLocalQueryTarget(t){return this.Ls.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(ro(this.persistenceKey,t))}updateQueryState(t,e,r){this.ks(t,e,r)}handleUserChange(t,e,r){e.forEach(i=>{this.Bs(i)}),this.currentUser=t,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(t){this.qs(t)}notifyBundleLoaded(t){this.Qs(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return _("SharedClientState","READ",t,e),e}setItem(t,e){_("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){_("SharedClientState","REMOVE",t),this.storage.removeItem(t)}fs(t){const e=t;if(e.storageArea===this.storage){if(_("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ys)return void tt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.Ss.test(e.key)){if(e.newValue==null){const r=this.Ks(e.key);return this.$s(r,null)}{const r=this.Us(e.key,e.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(e.key)){if(e.newValue!==null){const r=this.Ws(e.key,e.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(e.key)){if(e.newValue!==null){const r=this.zs(e.key,e.newValue);if(r)return this.js(r)}}else if(e.key===this.Cs){if(e.newValue!==null){const r=this.Ms(e.newValue);if(r)return this.xs(r)}}else if(e.key===this.ws){const r=function(s){let o=bt._e;if(s!=null)try{const a=JSON.parse(s);S(typeof a=="number"),o=a}catch(a){tt("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(e.newValue);r!==bt._e&&this.sequenceNumberHandler(r)}else if(e.key===this.vs){const r=this.Hs(e.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(e)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(t,e,r){const i=new Yi(this.currentUser,t,e,r),s=Gc(this.persistenceKey,this.currentUser,t);this.setItem(s,i.Es())}Bs(t){const e=Gc(this.persistenceKey,this.currentUser,t);this.removeItem(e)}qs(t){const e={clientId:this.Rs,onlineState:t};this.storage.setItem(this.Cs,JSON.stringify(e))}ks(t,e,r){const i=ro(this.persistenceKey,t),s=new gr(t,e,r);this.setItem(i,s.Es())}Qs(t){const e=JSON.stringify(Array.from(t));this.setItem(this.vs,e)}Ks(t){const e=this.Ss.exec(t);return e?e[1]:null}Us(t,e){const r=this.Ks(t);return Xi.Ts(r,e)}Ws(t,e){const r=this.bs.exec(t),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Yi.Ts(new ot(s),i,e)}zs(t,e){const r=this.Ds.exec(t),i=Number(r[1]);return gr.Ts(i,e)}Ms(t){return za.Ts(t)}Hs(t){return JSON.parse(t)}async Gs(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Ys(t.batchId,t.state,t.error);_("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}js(t){return this.syncEngine.Zs(t.targetId,t.state,t.error)}$s(t,e){const r=e?this.gs.insert(t,e):this.gs.remove(t),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(t){this.gs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Os(t){let e=Va();return t.forEach((r,i)=>{e=e.unionWith(i.activeTargetIds)}),e}}class rf{constructor(){this.eo=new qo,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new qo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi=null;function so(){return wi===null?wi=function(){return 268435456+Math.round(2147483648*Math.random())}():wi++,"0x"+wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class dI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+e.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(e,r,i,s,o){const a=so(),u=this.So(e,r);_("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,s,o),this.Do(e,u,c,i).then(l=>(_("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw Mt("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}Co(e,r,i,s,o,a){return this.wo(e,r,i,s,o)}bo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}So(e,r){const i=lI[e];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,r,i){const s=so();return new Promise((o,a)=>{const u=new u_;u.setWithCredentials(!0),u.listenOnce(s_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case to.NO_ERROR:const l=u.getResponseJson();_(pt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case to.TIMEOUT:_(pt,`RPC '${t}' ${s} timed out`),a(new p(g.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const h=u.getStatus();if(_(pt,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const I=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(D)>=0?D:g.UNKNOWN}(f.status);a(new p(I,f.message))}else a(new p(g.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new p(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(pt,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);_(pt,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",c,r,15)})}vo(t,e,r){const i=so(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=r_(),a=i_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new a_({})),this.bo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const l=s.join("");_(pt,`Creating RPC '${t}' stream ${i}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,f=!1;const I=new hI({co:v=>{f?_(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,v):(d||(_(pt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(pt,`RPC '${t}' stream ${i} sending:`,v),h.send(v))},lo:()=>h.close()}),w=(v,D,F)=>{v.listen(D,C=>{try{F(C)}catch(Q){setTimeout(()=>{throw Q},0)}})};return w(h,_i.EventType.OPEN,()=>{f||_(pt,`RPC '${t}' stream ${i} transport opened.`)}),w(h,_i.EventType.CLOSE,()=>{f||(f=!0,_(pt,`RPC '${t}' stream ${i} transport closed`),I.Ro())}),w(h,_i.EventType.ERROR,v=>{f||(f=!0,Mt(pt,`RPC '${t}' stream ${i} transport errored:`,v),I.Ro(new p(g.UNAVAILABLE,"The operation could not be completed")))}),w(h,_i.EventType.MESSAGE,v=>{var D;if(!f){const F=v.data[0];S(!!F);const C=F,Q=C.error||((D=C[0])===null||D===void 0?void 0:D.error);if(Q){_(pt,`RPC '${t}' stream ${i} received error:`,Q);const H=Q.status;let Z=function(tm){const wu=nt[tm];if(wu!==void 0)return vd(wu)}(H),Rt=Q.message;Z===void 0&&(Z=g.INTERNAL,Rt="Unknown error status: "+H+" with message "+Q.message),f=!0,I.Ro(new p(Z,Rt)),h.close()}else _(pt,`RPC '${t}' stream ${i} received:`,F),I.Vo(F)}}),w(a,o_.STAT_EVENT,v=>{v.stat===Ju.PROXY?_(pt,`RPC '${t}' stream ${i} detected buffering proxy`):v.stat===Ju.NOPROXY&&_(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Ao()},0),I}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){return typeof window<"u"?window:null}function Di(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){return new Ey(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,e,r,i,s,o,a,u){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Ga(t,e)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():e&&e.code===g.RESOURCE_EXHAUSTED?(tt(e.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===e&&this.s_(r,i)},r=>{t(()=>{const i=new p(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,e){const r=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget(()=>this.Uo===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fI extends of{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=vy(this.serializer,t),r=function(s){if(!("targetChange"in s))return R.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?R.min():o.readTime?et(o.readTime):R.min()}(t);return this.listener.a_(e,r)}u_(t){const e={};e.database=Mr(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=zi(u)?{documents:xd(s,u)}:{query:Nd(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bd(s,o.resumeToken);const c=Oo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(R.min())>0){a.readTime=kn(s,o.snapshotVersion.toTimestamp());const c=Oo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=Ry(this.serializer,t);r&&(e.labels=r),this.e_(e)}c_(t){const e={};e.database=Mr(this.serializer),e.removeTarget=t,this.e_(e)}}class mI extends of{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(S(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=Ay(t.writeResults,t.commitTime),r=et(t.commitTime);return this.listener.I_(r,e)}return S(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Mr(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Fr(this.serializer,r))};this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(g.UNKNOWN,i.toString())})}Co(t,e,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new p(g.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class pI{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(tt(e),this.f_=!1):_("OnlineStateTracker",e)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Re(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=E(u);c.C_.add(4),await Wn(c),c.M_.set("Unknown"),c.C_.delete(4),await ai(c)}(this))})}),this.M_=new pI(r,i)}}async function ai(n){if(Re(n))for(const t of n.v_)await t(!0)}async function Wn(n){for(const t of n.v_)await t(!1)}function As(n,t){const e=E(n);e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),Wa(e)?Ka(e):Hn(e).Ho()&&ja(e,t))}function Lr(n,t){const e=E(n),r=Hn(e);e.D_.delete(t),r.Ho()&&af(e,t),e.D_.size===0&&(r.Ho()?r.Zo():Re(e)&&e.M_.set("Unknown"))}function ja(n,t){if(n.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(R.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Hn(n).u_(t)}function af(n,t){n.x_.Oe(t),Hn(n).c_(t)}function Ka(n){n.x_=new py({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.D_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Hn(n).start(),n.M_.g_()}function Wa(n){return Re(n)&&!Hn(n).jo()&&n.D_.size>0}function Re(n){return E(n).C_.size===0}function uf(n){n.x_=void 0}async function yI(n){n.D_.forEach((t,e)=>{ja(n,t)})}async function II(n,t){uf(n),Wa(n)?(n.M_.w_(t),Ka(n)):n.M_.set("Unknown")}async function EI(n,t,e){if(n.M_.set("Online"),t instanceof Sd&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ji(n,r)}else if(t instanceof Vi?n.x_.$e(t):t instanceof Rd?n.x_.Je(t):n.x_.Ge(t),!e.isEqual(R.min()))try{const r=await Jd(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.D_.get(c);l&&s.D_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=s.D_.get(u);if(!l)return;s.D_.set(u,l.withResumeToken(it.EMPTY_BYTE_STRING,l.snapshotVersion)),af(s,u);const h=new Kt(l.target,u,c,l.sequenceNumber);ja(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Ji(n,r)}}async function Ji(n,t,e){if(!ve(t))throw t;n.C_.add(1),await Wn(n),n.M_.set("Offline"),e||(e=()=>Jd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await e(),n.C_.delete(1),await ai(n)})}function cf(n,t){return t().catch(e=>Ji(n,e,t))}async function Qn(n){const t=E(n),e=_e(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;TI(t);)try{const i=await oI(t.localStore,r);if(i===null){t.b_.length===0&&e.Zo();break}r=i.batchId,wI(t,i)}catch(i){await Ji(t,i)}lf(t)&&hf(t)}function TI(n){return Re(n)&&n.b_.length<10}function wI(n,t){n.b_.push(t);const e=_e(n);e.Ho()&&e.h_&&e.P_(t.mutations)}function lf(n){return Re(n)&&!_e(n).jo()&&n.b_.length>0}function hf(n){_e(n).start()}async function vI(n){_e(n).E_()}async function AI(n){const t=_e(n);for(const e of n.b_)t.P_(e.mutations)}async function RI(n,t,e){const r=n.b_.shift(),i=xa.from(r,t,e);await cf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Qn(n)}async function SI(n,t){t&&_e(n).h_&&await async function(r,i){if(function(o){return wd(o)&&o!==g.ABORTED}(i.code)){const s=r.b_.shift();_e(r).Yo(),await cf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qn(r)}}(n,t),lf(n)&&hf(n)}async function Kc(n,t){const e=E(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Re(e);e.C_.add(3),await Wn(e),r&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await ai(e)}async function $o(n,t){const e=E(n);t?(e.C_.delete(2),await ai(e)):t||(e.C_.add(2),await Wn(e),e.M_.set("Unknown"))}function Hn(n){return n.O_||(n.O_=function(e,r,i){const s=E(e);return s.A_(),new fI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:yI.bind(null,n),Io:II.bind(null,n),a_:EI.bind(null,n)}),n.v_.push(async t=>{t?(n.O_.Yo(),Wa(n)?Ka(n):n.M_.set("Unknown")):(await n.O_.stop(),uf(n))})),n.O_}function _e(n){return n.N_||(n.N_=function(e,r,i){const s=E(e);return s.A_(),new mI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:vI.bind(null,n),Io:SI.bind(null,n),T_:AI.bind(null,n),I_:RI.bind(null,n)}),n.v_.push(async t=>{t?(n.N_.Yo(),await Qn(n)):(await n.N_.stop(),n.b_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Qa(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yn(n,t){if(tt("AsyncQueue",`${t}: ${n}`),ve(n))return new p(g.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||y.comparator(e.key,r.key):(e,r)=>y.comparator(e.key,r.key),this.keyedMap=or(),this.sortedSet=new q(this.comparator)}static emptySet(t){return new Rn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Rn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Rn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.B_=new q(y.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):A():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Fn{constructor(t,e,r,i,s,o,a,u,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Fn(t,e,Rn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ei(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.k_=void 0,this.listeners=[]}}class PI{constructor(){this.queries=new Ae(t=>ad(t),ei),this.onlineState="Unknown",this.q_=new Set}}async function Ha(n,t){const e=E(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new bI),i)try{s.k_=await e.onListen(r)}catch(o){const a=Yn(o,`Initialization of query '${mn(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.Q_(e.onlineState),s.k_&&t.K_(s.k_)&&Xa(e)}async function Ya(n,t){const e=E(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function VI(n,t){const e=E(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Xa(e)}function DI(n,t,e){const r=E(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function Xa(n){n.q_.forEach(t=>{t.next()})}class Ja{constructor(t,e,r){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Fn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}H_(t){t=Fn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(t,e){this.Y_=t,this.byteLength=e}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t){this.serializer=t}hs(t){return $t(this.serializer,t)}Ps(t){return t.metadata.exists?Cd(this.serializer,t.document,!1):z.newNoDocument(this.hs(t.metadata.name),this.Is(t.metadata.readTime))}Is(t){return et(t)}}class xI{constructor(t,e,r){this.X_=t,this.localStore=e,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=df(t)}ea(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.Y_.namedQuery)this.queries.push(t.Y_.namedQuery);else if(t.Y_.documentMetadata){this.documents.push({metadata:t.Y_.documentMetadata}),t.Y_.documentMetadata.exists||++e;const r=O.fromString(t.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else t.Y_.document&&(this.documents[this.documents.length-1].document=t.Y_.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}ta(t){const e=new Map,r=new Qc(this.serializer);for(const i of t)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(e.get(o)||V()).add(s);e.set(o,a)}}return e}async complete(){const t=await aI(this.localStore,new Qc(this.serializer),this.documents,this.X_.id),e=this.ta(this.documents);for(const r of this.queries)await uI(this.localStore,r,e.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:t}}}function df(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t){this.key=t}}class mf{constructor(t){this.key=t}}class gf{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=V(),this.mutatedKeys=V(),this._a=cd(t),this.aa=new Rn(this._a)}get ua(){return this.ia}ca(t,e){const r=e?e.la:new Wc,i=e?e.aa:this.aa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),f=ni(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),w=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?I!==w&&(r.track({type:3,doc:f}),v=!0):this.ha(d,f)||(r.track({type:2,doc:f}),v=!0,(u&&this._a(f,u)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(u||c)&&(a=!0)),v&&(f?(o=o.add(f),s=w?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((c,l)=>function(d,f){const I=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return I(d)-I(f)}(c.type,l.type)||this._a(c.doc,l.doc)),this.Pa(r);const o=e?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,s.length!==0||u?{snapshot:new Fn(this.query,t.aa,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Wc,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=V(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const e=[];return t.forEach(r=>{this.oa.has(r)||e.push(new mf(r))}),this.oa.forEach(r=>{t.has(r)||e.push(new ff(r))}),e}da(t){this.ia=t.ls,this.oa=V();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return Fn.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class NI{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class kI{constructor(t){this.key=t,this.Ra=!1}}class OI{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ae(a=>ad(a),ei),this.fa=new Map,this.ga=new Set,this.pa=new q(y.comparator),this.ya=new Map,this.wa=new Ba,this.Sa={},this.ba=new Map,this.Da=He.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function MI(n,t){const e=ru(n);let r,i;const s=e.ma.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await On(e.localStore,vt(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Za(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&As(e.remoteStore,o)}return i}async function Za(n,t,e,r,i){n.va=(h,d,f)=>async function(w,v,D,F){let C=v.view.ca(D);C.Zi&&(C=await Hi(w.localStore,v.query,!1).then(({documents:Z})=>v.view.ca(Z,C)));const Q=F&&F.targetChanges.get(v.targetId),H=v.view.applyChanges(C,w.isPrimaryClient,Q);return zo(w,v.targetId,H.Ta),H.snapshot}(n,h,d,f);const s=await Hi(n.localStore,t,!0),o=new gf(t,s.ls),a=o.ca(s.documents),u=si.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);zo(n,e,c.Ta);const l=new NI(t,e,o);return n.ma.set(t,l),n.fa.has(e)?n.fa.get(e).push(t):n.fa.set(e,[t]),c.snapshot}async function FI(n,t){const e=E(n),r=e.ma.get(t),i=e.fa.get(r.targetId);if(i.length>1)return e.fa.set(r.targetId,i.filter(s=>!ei(s,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await Mn(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),Lr(e.remoteStore,r.targetId),Ln(e,r.targetId)}).catch(we)):(Ln(e,r.targetId),await Mn(e.localStore,r.targetId,!0))}async function LI(n,t,e){const r=iu(n);try{const i=await function(o,a){const u=E(o),c=K.now(),l=a.reduce((f,I)=>f.add(I.key),V());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",f=>{let I=Vt(),w=V();return u.ss.getEntries(f,l).next(v=>{I=v,I.forEach((D,F)=>{F.isValidDocument()||(w=w.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(f,I)).next(v=>{h=v;const D=[];for(const F of a){const C=fy(F,h.get(F.key).overlayedDocument);C!=null&&D.push(new Xt(F.key,C,Jh(C.value.mapValue),j.exists(!0)))}return u.mutationQueue.addMutationBatch(f,c,D,a)}).next(v=>{d=v;const D=v.applyToLocalDocumentSet(h,w);return u.documentOverlayCache.saveOverlays(f,v.batchId,D)})}).then(()=>({batchId:d.batchId,changes:hd(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Sa[o.currentUser.toKey()];c||(c=new q(P)),c=c.insert(a,u),o.Sa[o.currentUser.toKey()]=c}(r,i.batchId,e),await Jt(r,i.changes),await Qn(r.remoteStore)}catch(i){const s=Yn(i,"Failed to persist write");e.reject(s)}}async function pf(n,t){const e=E(n);try{const r=await sI(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.ya.get(s);o&&(S(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?S(o.Ra):i.removedDocuments.size>0&&(S(o.Ra),o.Ra=!1))}),await Jt(e,r,t)}catch(r){await we(r)}}function Hc(n,t,e){const r=E(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=E(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&Xa(u)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function BI(n,t,e){const r=E(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new q(y.comparator);o=o.insert(s,z.newNoDocument(s,R.min()));const a=V().add(s),u=new ii(R.min(),new Map,new q(P),o,a);await pf(r,u),r.pa=r.pa.remove(s),r.ya.delete(t),nu(r)}else await Mn(r.localStore,t,!1).then(()=>Ln(r,t,e)).catch(we)}async function UI(n,t){const e=E(n),r=t.batch.batchId;try{const i=await iI(e.localStore,t);eu(e,r,null),tu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Jt(e,i)}catch(i){await we(i)}}async function qI(n,t,e){const r=E(n);try{const i=await function(o,a){const u=E(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(S(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);eu(r,t,e),tu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Jt(r,i)}catch(i){await we(i)}}async function $I(n,t){const e=E(n);Re(e.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=E(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(e.localStore);if(r===-1)return void t.resolve();const i=e.ba.get(r)||[];i.push(t),e.ba.set(r,i)}catch(r){const i=Yn(r,"Initialization of waitForPendingWrites() operation failed");t.reject(i)}}function tu(n,t){(n.ba.get(t)||[]).forEach(e=>{e.resolve()}),n.ba.delete(t)}function eu(n,t,e){const r=E(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function Ln(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.fa.get(t))n.ma.delete(r),e&&n.Va.Fa(r,e);n.fa.delete(t),n.isPrimaryClient&&n.wa.Rr(t).forEach(r=>{n.wa.containsKey(r)||_f(n,r)})}function _f(n,t){n.ga.delete(t.path.canonicalString());const e=n.pa.get(t);e!==null&&(Lr(n.remoteStore,e),n.pa=n.pa.remove(t),n.ya.delete(e),nu(n))}function zo(n,t,e){for(const r of e)r instanceof ff?(n.wa.addReference(r.key,t),zI(n,r)):r instanceof mf?(_("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,t),n.wa.containsKey(r.key)||_f(n,r.key)):A()}function zI(n,t){const e=t.key,r=e.path.canonicalString();n.pa.get(e)||n.ga.has(r)||(_("SyncEngine","New document in limbo: "+e),n.ga.add(r),nu(n))}function nu(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const t=n.ga.values().next().value;n.ga.delete(t);const e=new y(O.fromString(t)),r=n.Da.next();n.ya.set(r,new kI(e)),n.pa=n.pa.insert(e,r),As(n.remoteStore,new Kt(vt(Gn(e.path)),r,"TargetPurposeLimboResolution",bt._e))}}async function Jt(n,t,e){const r=E(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=$a.Qi(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(u,c){const l=E(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(c,d=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ve(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=l.ts.get(d),I=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(I);l.ts=l.ts.insert(d,w)}}}(r.localStore,s))}async function GI(n,t){const e=E(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Xd(e.localStore,t);e.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(u=>{u.reject(new p(g.CANCELLED,o))})}),s.ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Jt(e,r._s)}}function jI(n,t){const e=E(n),r=e.ya.get(t);if(r&&r.Ra)return V().add(r.key);{let i=V();const s=e.fa.get(t);if(!s)return i;for(const o of s){const a=e.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function KI(n,t){const e=E(n),r=await Hi(e.localStore,t.query,!0),i=t.view.da(r);return e.isPrimaryClient&&zo(e,t.targetId,i.Ta),i}async function WI(n,t){const e=E(n);return ef(e.localStore,t).then(r=>Jt(e,r))}async function QI(n,t,e,r){const i=E(n),s=await function(a,u){const c=E(a),l=E(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Cn(h,u).next(d=>d?c.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,t);s!==null?(e==="pending"?await Qn(i.remoteStore):e==="acknowledged"||e==="rejected"?(eu(i,t,r||null),tu(i,t),function(a,u){E(E(a).mutationQueue).Fn(u)}(i.localStore,t)):A(),await Jt(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+t)}async function HI(n,t){const e=E(n);if(ru(e),iu(e),t===!0&&e.Ca!==!0){const r=e.sharedClientState.getAllActiveQueryTargets(),i=await Yc(e,r.toArray());e.Ca=!0,await $o(e.remoteStore,!0);for(const s of i)As(e.remoteStore,s)}else if(t===!1&&e.Ca!==!1){const r=[];let i=Promise.resolve();e.fa.forEach((s,o)=>{e.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ln(e,o),Mn(e.localStore,o,!0))),Lr(e.remoteStore,o)}),await i,await Yc(e,r),function(o){const a=E(o);a.ya.forEach((u,c)=>{Lr(a.remoteStore,c)}),a.wa.Vr(),a.ya=new Map,a.pa=new q(y.comparator)}(e),e.Ca=!1,await $o(e.remoteStore,!1)}}async function Yc(n,t,e){const r=E(n),i=[],s=[];for(const o of t){let a;const u=r.fa.get(o);if(u&&u.length!==0){a=await On(r.localStore,vt(u[0]));for(const c of u){const l=r.ma.get(c),h=await KI(r,l);h.snapshot&&s.push(h.snapshot)}}else{const c=await tf(r.localStore,o);a=await On(r.localStore,c),await Za(r,yf(c),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function yf(n){return od(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function YI(n){return function(e){return E(E(e).persistence).Bi()}(E(n).localStore)}async function XI(n,t,e,r){const i=E(n);if(i.Ca)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(t);if(s&&s.length>0)switch(e){case"current":case"not-current":{const o=await ef(i.localStore,ud(s[0])),a=ii.createSynthesizedRemoteEventForCurrentChange(t,e==="current",it.EMPTY_BYTE_STRING);await Jt(i,o,a);break}case"rejected":await Mn(i.localStore,t,!0),Ln(i,t,r);break;default:A()}}async function JI(n,t,e){const r=ru(n);if(r.Ca){for(const i of t){if(r.fa.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await tf(r.localStore,i),o=await On(r.localStore,s);await Za(r,yf(s),o.targetId,!1,o.resumeToken),As(r.remoteStore,o)}for(const i of e)r.fa.has(i)&&await Mn(r.localStore,i,!1).then(()=>{Lr(r.remoteStore,i),Ln(r,i)}).catch(we)}}function ru(n){const t=E(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=pf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=BI.bind(null,t),t.Va.a_=VI.bind(null,t.eventManager),t.Va.Fa=DI.bind(null,t.eventManager),t}function iu(n){const t=E(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=UI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qI.bind(null,t),t}function ZI(n,t,e){const r=E(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(f,I){const w=E(f),v=et(I.createTime);return w.persistence.runTransaction("hasNewerBundle","readonly",D=>w.Kr.getBundleMetadata(D,I.id)).then(D=>!!D&&D.createTime.compareTo(v)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(df(u));const c=new xI(u,s.localStore,o.serializer);let l=await o.Ma();for(;l;){const d=await c.ea(l);d&&a._updateProgress(d),l=await o.Ma()}const h=await c.complete();return await Jt(s,h.ra,void 0),await function(f,I){const w=E(f);return w.persistence.runTransaction("Save bundle","readwrite",v=>w.Kr.saveBundleMetadata(v,I))}(s.localStore,u),a._completeWith(h.progress),Promise.resolve(h.na)}catch(u){return Mt("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,t,e).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Go{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=oi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Yd(this.persistence,new Hd,t.initialUser,this.serializer)}createPersistence(t){return new Qd(vs.jr,this.serializer)}createSharedClientState(t){return new rf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class If extends Go{constructor(t,e,r){super(),this.xa=t,this.cacheSizeBytes=e,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xa.initialize(this,t),await iu(this.xa.syncEngine),await Qn(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(t){return Yd(this.persistence,new Hd,t.initialUser,this.serializer)}createGarbageCollectionScheduler(t,e){const r=this.persistence.referenceDelegate.garbageCollector;return new qy(r,t.asyncQueue,e)}createIndexBackfillerScheduler(t,e){const r=new A_(e,this.persistence);return new v_(t.asyncQueue,r)}createPersistence(t){const e=qa(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new Ua(this.synchronizeTabs,e,t.clientId,r,t.asyncQueue,sf(),Di(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(t){return new rf}}class tE extends If{constructor(t,e){super(t,e,!1),this.xa=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.xa.syncEngine;this.sharedClientState instanceof io&&(this.sharedClientState.syncEngine={Ys:QI.bind(null,e),Zs:XI.bind(null,e),Xs:JI.bind(null,e),Bi:YI.bind(null,e),Js:WI.bind(null,e)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await HI(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(t){const e=sf();if(!io.D(e))throw new p(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=qa(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new io(e,t.asyncQueue,r,t.clientId,t.initialUser)}}class su{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GI.bind(null,this.syncEngine),await $o(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new PI}()}createDatastore(t){const e=oi(t.databaseInfo.databaseId),r=function(s){return new dI(s)}(t.databaseInfo);return function(s,o,a,u){return new gI(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new _I(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Hc(this.syncEngine,e,0),function(){return jc.D()?new jc:new cI}())}createSyncEngine(t,e){return function(i,s,o,a,u,c,l){const h=new OI(i,s,o,a,u,c);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=E(e);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Wn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n,t=10240){let e=0;return{async read(){if(e<n.byteLength){const r={value:n.slice(e,e+t),done:!1};return e+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):tt("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(t,e){this.Ba=t,this.serializer=e,this.metadata=new at,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const t=await this.qa();if(t===null)return null;const e=this.La.decode(t),r=Number(e);isNaN(r)&&this.Qa(`length string (${e}) is not valid number`);const i=await this.Ka(r);return new CI(JSON.parse(i),t.length+r)}$a(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const t=this.$a();t<0&&this.Qa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Ka(t){for(;this.buffer.length<t;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const e=this.La.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Qa(t){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${t}`)}async Ua(){const t=await this.Ba.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=E(i),a=Mr(o.serializer)+"/documents",u={documents:s.map(d=>Or(o.serializer,d))},c=await o.Co("BatchGetDocuments",a,u,s.length),l=new Map;c.forEach(d=>{const f=wy(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());S(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Kn(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=y.fromPath(r);this.mutations.push(new Da(i,this.precondition(i)))}),await async function(r,i){const s=E(r),o=Mr(s.serializer)+"/documents",a={writes:i.map(u=>Fr(s.serializer,u))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw A();e=R.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new p(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(R.min())?j.exists(!1):j.updateTime(e):j.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(R.min()))throw new p(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return j.updateTime(e)}return j.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new Ga(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const t=new nE(this.datastore),e=this.za(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(t){try{const e=this.updateFunction(t);return!Zr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ja(t){this.Wa>0&&this.Ha(t)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(t)}Ha(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!wd(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=Lh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Yn(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ci(n,t){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xd(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function jo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ou(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Kc(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Kc(t.remoteStore,s)),n._onlineComponents=t}function Ef(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ou(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ci(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Ef(e))throw e;Mt("Error using user provided cache. Falling back to memory cache: "+e),await Ci(n,new Go)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Ci(n,new Go);return n._offlineComponents}async function Ss(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await jo(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await jo(n,new su))),n._onlineComponents}function Tf(n){return ou(n).then(t=>t.persistence)}function au(n){return ou(n).then(t=>t.localStore)}function wf(n){return Ss(n).then(t=>t.remoteStore)}function uu(n){return Ss(n).then(t=>t.syncEngine)}function sE(n){return Ss(n).then(t=>t.datastore)}async function Bn(n){const t=await Ss(n),e=t.eventManager;return e.onListen=MI.bind(null,t.syncEngine),e.onUnlisten=FI.bind(null,t.syncEngine),e}function oE(n){return n.asyncQueue.enqueue(async()=>{const t=await Tf(n),e=await wf(n);return t.setNetworkEnabled(!0),function(i){const s=E(i);return s.C_.delete(0),ai(s)}(e)})}function aE(n){return n.asyncQueue.enqueue(async()=>{const t=await Tf(n),e=await wf(n);return t.setNetworkEnabled(!1),async function(i){const s=E(i);s.C_.add(0),await Wn(s),s.M_.set("Offline")}(e)})}function uE(n,t){const e=new at;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,l){const h=E(c);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new p(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Yn(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await au(n),t,e)),e.promise}function vf(n,t,e={}){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new Rs({next:d=>{o.enqueueAndForget(()=>Ya(s,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new p(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&u&&u.source==="server"?c.reject(new p(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Ja(Gn(a.path),l,{includeMetadataChanges:!0,J_:!0});return Ha(s,h)}(await Bn(n),n.asyncQueue,t,e,r)),r.promise}function cE(n,t){const e=new at;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Hi(i,s,!0),u=new gf(s,a.ls),c=u.ca(a.documents),l=u.applyChanges(c,!1);o.resolve(l.snapshot)}catch(a){const u=Yn(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await au(n),t,e)),e.promise}function Af(n,t,e={}){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new Rs({next:d=>{o.enqueueAndForget(()=>Ya(s,h)),d.fromCache&&u.source==="server"?c.reject(new p(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Ja(a,l,{includeMetadataChanges:!0,J_:!0});return Ha(s,h)}(await Bn(n),n.asyncQueue,t,e,r)),r.promise}function lE(n,t){const e=new Rs(t);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){E(i).q_.add(s),s.next()}(await Bn(n),e)),()=>{e.Na(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){E(i).q_.delete(s)}(await Bn(n),e))}}function hE(n,t,e,r){const i=function(o,a){let u;return u=typeof o=="string"?Ad().encode(o):o,function(l,h){return new eE(l,h)}(function(l,h){if(l instanceof Uint8Array)return Xc(l,h);if(l instanceof ArrayBuffer)return Xc(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(e,oi(t));n.asyncQueue.enqueueAndForget(async()=>{ZI(await uu(n),i,r)})}function dE(n,t){return n.asyncQueue.enqueue(async()=>function(r,i){const s=E(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await au(n),t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n,t,e){if(!e)throw new p(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Sf(n,t,e,r){if(t===!0&&r===!0)throw new p(g.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Zc(n){if(!y.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tl(n){if(y.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function M(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new p(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=bs(n);throw new p(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function bf(n,t){if(t<=0)throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new p(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Sf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rf((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ui{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new el({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new el(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d_;switch(r.type){case"firstParty":return new p_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new p(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Jc.get(e);r&&(_("ComponentProvider","Removing Datastore"),Jc.delete(e),r.terminate())}(this),Promise.resolve()}}function fE(n,t,e,r={}){var i;const s=(n=M(n,ui))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Mt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ot.MOCK_USER;else{a=bm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new p(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(c)}n._authCredentials=new f_(new Fh(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At=class Pf{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Pf(this.firestore,t,this._query)}},W=class Vf{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Vf(this.firestore,t,this._key)}},ue=class Df extends At{constructor(t,e,r){super(t,e,Gn(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new W(this.firestore,null,new y(t))}withConverter(t){return new Df(this.firestore,t,this._path)}};function Cf(n,t,...e){if(n=rt(n),cu("collection","path",t),n instanceof ui){const r=O.fromString(t,...e);return tl(r),new ue(n,null,r)}{if(!(n instanceof W||n instanceof ue))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(t,...e));return tl(r),new ue(n.firestore,null,r)}}function mE(n,t){if(n=M(n,ui),cu("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new At(n,null,function(r){return new Yt(O.emptyPath(),r)}(t))}function Zi(n,t,...e){if(n=rt(n),arguments.length===1&&(t=Lh.newId()),cu("doc","path",t),n instanceof ui){const r=O.fromString(t,...e);return Zc(r),new W(n,null,new y(r))}{if(!(n instanceof W||n instanceof ue))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(t,...e));return Zc(r),new W(n.firestore,n instanceof ue?n.converter:null,new y(r))}}function xf(n,t){return n=rt(n),t=rt(t),(n instanceof W||n instanceof ue)&&(t instanceof W||t instanceof ue)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function Nf(n,t){return n=rt(n),t=rt(t),n instanceof At&&t instanceof At&&n.firestore===t.firestore&&ei(n._query,t._query)&&n.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Ga(this,"async_queue_retry"),this.iu=()=>{const e=Di();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const t=Di();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=Di();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const e=new at;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!ve(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const e=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=e,e}enqueueAfterDelay(t,e,r){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=Qa.createAndSchedule(this,t,e,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&A()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Xa)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}function Ko(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class pE{constructor(){this._progressObserver={},this._taskCompletionResolver=new at,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,r){this._progressObserver={next:t,error:e,complete:r}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=-1;let J=class extends ui{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new gE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kf(this),this._firestoreClient.terminate()}};function ht(n){return n._firestoreClient||kf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function kf(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,c,l){return new j_(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Rf(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new iE(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function yE(n,t){Mf(n=M(n,J));const e=ht(n);if(e._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Mt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new su;return Of(e,i,new If(i,r.cacheSizeBytes,t==null?void 0:t.forceOwnership))}function IE(n){Mf(n=M(n,J));const t=ht(n);if(t._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Mt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings(),r=new su;return Of(t,r,new tE(r,e.cacheSizeBytes))}function Of(n,t,e){const r=new at;return n.asyncQueue.enqueue(async()=>{try{await Ci(n,e),await jo(n,t),r.resolve()}catch(i){const s=i;if(!Ef(s))throw s;Mt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function EE(n){if(n._initialized&&!n._terminated)throw new p(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new at;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!kt.D())return Promise.resolve();const i=r+"main";await kt.delete(i)}(qa(n._databaseId,n._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function TE(n){return function(e){const r=new at;return e.asyncQueue.enqueueAndForget(async()=>$I(await uu(e),r)),r.promise}(ht(n=M(n,J)))}function wE(n){return oE(ht(n=M(n,J)))}function vE(n){return aE(ht(n=M(n,J)))}function AE(n,t){const e=ht(n=M(n,J)),r=new pE;return hE(e,n._databaseId,t,r),r}function RE(n,t){return dE(ht(n=M(n,J)),t).then(e=>e?new At(n,null,e.query):null)}function Mf(n){if(n._initialized||n._terminated)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gt(it.fromBase64String(t))}catch(e){throw new p(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Gt(it.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ye=class{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new p(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn=class{constructor(t){this._methodName=t}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new p(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new p(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=/^__.*__$/;class bE{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Xt(t,this.data,this.fieldMask,e,this.fieldTransforms):new jn(t,this.data,e,this.fieldTransforms)}}class Ff{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Xt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Lf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Vs{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Vs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return ts(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(Lf(this.Iu)&&SE.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class PE{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||oi(t)}pu(t,e,r,i=!1){return new Vs({Iu:t,methodName:e,gu:r,path:G.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function en(n){const t=n._freezeSettings(),e=oi(n._databaseId);return new PE(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ds(n,t,e,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,t,e,i);fu("Data must be an object, but it was:",o,r);const a=qf(r,o);let u,c;if(s.merge)u=new Pt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Wo(t,h,e);if(!o.contains(d))throw new p(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zf(l,d)||l.push(d)}u=new Pt(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new bE(new mt(a),u,c)}class ci extends tn{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ci}}function Bf(n,t,e){return new Vs({Iu:3,gu:t.settings.gu,methodName:n._methodName,du:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class lu extends tn{_toFieldTransform(t){return new ri(t.path,new xn)}isEqual(t){return t instanceof lu}}class VE extends tn{constructor(t,e){super(t),this.yu=e}_toFieldTransform(t){const e=Bf(this,t,!0),r=this.yu.map(s=>nn(s,e)),i=new je(r);return new ri(t.path,i)}isEqual(t){return this===t}}class DE extends tn{constructor(t,e){super(t),this.yu=e}_toFieldTransform(t){const e=Bf(this,t,!0),r=this.yu.map(s=>nn(s,e)),i=new Ke(r);return new ri(t.path,i)}isEqual(t){return this===t}}class CE extends tn{constructor(t,e){super(t),this.wu=e}_toFieldTransform(t){const e=new Nn(t.serializer,gd(t.serializer,this.wu));return new ri(t.path,e)}isEqual(t){return this===t}}function hu(n,t,e,r){const i=n.pu(1,t,e);fu("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();Ze(r,(u,c)=>{const l=mu(t,u,e);c=rt(c);const h=i.Ru(l);if(c instanceof ci)s.push(l);else{const d=nn(c,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Pt(s);return new Ff(o,a,i.fieldTransforms)}function du(n,t,e,r,i,s){const o=n.pu(1,t,e),a=[Wo(t,r,e)],u=[i];if(s.length%2!=0)throw new p(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Wo(t,s[d])),u.push(s[d+1]);const c=[],l=mt.empty();for(let d=a.length-1;d>=0;--d)if(!zf(c,a[d])){const f=a[d];let I=u[d];I=rt(I);const w=o.Ru(f);if(I instanceof ci)c.push(f);else{const v=nn(I,w);v!=null&&(c.push(f),l.set(f,v))}}const h=new Pt(c);return new Ff(l,h,o.fieldTransforms)}function Uf(n,t,e,r=!1){return nn(e,n.pu(r?4:3,t))}function nn(n,t){if($f(n=rt(n)))return fu("Unsupported field value:",t,n),qf(n,t);if(n instanceof tn)return function(r,i){if(!Lf(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=nn(a,i.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=K.fromDate(r);return{timestampValue:kn(i.serializer,s)}}if(r instanceof K){const s=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kn(i.serializer,s)}}if(r instanceof Ps)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:bd(i.serializer,r._byteString)};if(r instanceof W){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Oa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${bs(r)}`)}(n,t)}function qf(n,t){const e={};return Hh(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ze(n,(r,i)=>{const s=nn(i,t.Eu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function $f(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof Ps||n instanceof Gt||n instanceof W||n instanceof tn)}function fu(n,t,e){if(!$f(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=bs(e);throw r==="an object"?t.mu(n+" a custom object"):t.mu(n+" "+r)}}function Wo(n,t,e){if((t=rt(t))instanceof ye)return t._internalPath;if(typeof t=="string")return mu(n,t);throw ts("Field path arguments must be of type string or ",n,!1,void 0,e)}const xE=new RegExp("[~\\*/\\[\\]]");function mu(n,t,e){if(t.search(xE)>=0)throw ts(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ye(...t.split("."))._internalPath}catch{throw ts(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ts(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new p(g.INVALID_ARGUMENT,a+n+u)}function zf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new W(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new NE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Cs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class NE extends Br{data(){return super.data()}}function Cs(n,t){return typeof t=="string"?mu(n,t):t instanceof ye?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gu{}class li extends gu{}function ee(n,t,...e){let r=[];t instanceof gu&&r.push(t),r=r.concat(e),function(s){const o=s.filter(u=>u instanceof pu).length,a=s.filter(u=>u instanceof xs).length;if(o>1||o>0&&a>0)throw new p(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class xs extends li{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new xs(t,e,r)}_apply(t){const e=this._parse(t);return Kf(t._query,e),new At(t.firestore,t.converter,ko(t._query,e))}_parse(t){const e=en(t.firestore);return function(s,o,a,u,c,l,h){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){rl(h,l);const f=[];for(const I of h)f.push(nl(u,s,I));d={arrayValue:{values:f}}}else d=nl(u,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||rl(h,l),d=Uf(a,o,h,l==="in"||l==="not-in");return x.create(c,l,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function kE(n,t,e){const r=t,i=Cs("where",n);return xs._create(i,r,e)}class pu extends gu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new pu(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:L.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Kf(o,u),o=ko(o,u)}(t._query,e),new At(t.firestore,t.converter,ko(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _u extends li{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new _u(t,e)}_apply(t){const e=function(i,s,o){if(i.startAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kr(s,o)}(t._query,this._field,this._direction);return new At(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Yt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function OE(n,t="asc"){const e=t,r=Cs("orderBy",n);return _u._create(r,e)}class Ns extends li{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Ns(t,e,r)}_apply(t){return new At(t.firestore,t.converter,ji(t._query,this._limit,this._limitType))}}function ME(n){return bf("limit",n),Ns._create("limit",n,"F")}function FE(n){return bf("limitToLast",n),Ns._create("limitToLast",n,"L")}class ks extends li{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ks(t,e,r)}_apply(t){const e=jf(t,this.type,this._docOrFields,this._inclusive);return new At(t.firestore,t.converter,function(i,s){return new Yt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(t._query,e))}}function LE(...n){return ks._create("startAt",n,!0)}function BE(...n){return ks._create("startAfter",n,!1)}class Os extends li{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Os(t,e,r)}_apply(t){const e=jf(t,this.type,this._docOrFields,this._inclusive);return new At(t.firestore,t.converter,function(i,s){return new Yt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(t._query,e))}}function UE(...n){return Os._create("endBefore",n,!1)}function qE(...n){return Os._create("endAt",n,!0)}function jf(n,t,e,r){if(e[0]=rt(e[0]),e[0]instanceof Br)return function(s,o,a,u,c){if(!u)throw new p(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of An(s))if(h.field.isKeyField())l.push(ze(o,u.key));else{const d=u.data.field(h.field);if(ys(d))throw new p(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new p(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new pe(l,c)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const i=en(n.firestore);return function(o,a,u,c,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(g.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let I=0;I<l.length;I++){const w=l[I];if(d[I].field.isKeyField()){if(typeof w!="string")throw new p(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof w}`);if(!Pa(o)&&w.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${w}' contains a slash.`);const v=o.path.child(O.fromString(w));if(!y.isDocumentKey(v))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const D=new y(v);f.push(ze(a,D))}else{const v=Uf(u,c,w);f.push(v)}}return new pe(f,h)}(n._query,n.firestore._databaseId,i,t,e,r)}}function nl(n,t,e){if(typeof(e=rt(e))=="string"){if(e==="")throw new p(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pa(t)&&e.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(O.fromString(e));if(!y.isDocumentKey(r))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ze(n,new y(r))}if(e instanceof W)return ze(n,e._key);throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bs(e)}.`)}function rl(n,t){if(!Array.isArray(n)||n.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Kf(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class yu{convertValue(t,e="none"){switch($e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ze(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Ps(Y(t.latitude),Y(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Sa(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Cr(t));default:return null}}convertTimestamp(t){const e=de(t);return new K(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=O.fromString(t);S(Fd(r));const i=new me(r.get(1),r.get(3)),s=new y(r.popFirst(5));return i.isEqual(e)||tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class $E extends yu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new W(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}let Ht=class extends Br{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Cs("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}},pr=class extends Ht{data(t={}){return super.data(t)}},Ie=class{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Fe(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new pr(this._firestore,this._userDataWriter,r.key,r,new Fe(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new p(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new pr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fe(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new pr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fe(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:zE(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}};function zE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}function Wf(n,t){return n instanceof Ht&&t instanceof Ht?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof Ie&&t instanceof Ie&&n._firestore===t._firestore&&Nf(n.query,t.query)&&n.metadata.isEqual(t.metadata)&&n._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n){n=M(n,W);const t=M(n.firestore,J);return vf(ht(t),n._key).then(e=>Iu(t,n,e))}class rn extends yu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new W(this.firestore,null,e)}}function jE(n){n=M(n,W);const t=M(n.firestore,J),e=ht(t),r=new rn(t);return uE(e,n._key).then(i=>new Ht(t,r,n._key,i,new Fe(i!==null&&i.hasLocalMutations,!0),n.converter))}function KE(n){n=M(n,W);const t=M(n.firestore,J);return vf(ht(t),n._key,{source:"server"}).then(e=>Iu(t,n,e))}function WE(n){n=M(n,At);const t=M(n.firestore,J),e=ht(t),r=new rn(t);return Gf(n._query),Af(e,n._query).then(i=>new Ie(t,r,n,i))}function QE(n){n=M(n,At);const t=M(n.firestore,J),e=ht(t),r=new rn(t);return cE(e,n._query).then(i=>new Ie(t,r,n,i))}function HE(n){n=M(n,At);const t=M(n.firestore,J),e=ht(t),r=new rn(t);return Af(e,n._query,{source:"server"}).then(i=>new Ie(t,r,n,i))}function il(n,t,e){n=M(n,W);const r=M(n.firestore,J),i=Ms(n.converter,t,e);return hi(r,[Ds(en(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,j.none())])}function sl(n,t,e,...r){n=M(n,W);const i=M(n.firestore,J),s=en(i);let o;return o=typeof(t=rt(t))=="string"||t instanceof ye?du(s,"updateDoc",n._key,t,e,r):hu(s,"updateDoc",n._key,t),hi(i,[o.toMutation(n._key,j.exists(!0))])}function YE(n){return hi(M(n.firestore,J),[new Kn(n._key,j.none())])}function XE(n,t){const e=M(n.firestore,J),r=Zi(n),i=Ms(n.converter,t);return hi(e,[Ds(en(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,j.exists(!1))]).then(()=>r)}function Qf(n,...t){var e,r,i;n=rt(n);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ko(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ko(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,l;if(n instanceof W)c=M(n.firestore,J),l=Gn(n._key.path),u={next:h=>{t[o]&&t[o](Iu(c,n,h))},error:t[o+1],complete:t[o+2]};else{const h=M(n,At);c=M(h.firestore,J),l=h._query;const d=new rn(c);u={next:f=>{t[o]&&t[o](new Ie(c,d,h,f))},error:t[o+1],complete:t[o+2]},Gf(n._query)}return function(d,f,I,w){const v=new Rs(w),D=new Ja(f,v,I);return d.asyncQueue.enqueueAndForget(async()=>Ha(await Bn(d),D)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>Ya(await Bn(d),D))}}(ht(c),l,a,u)}function JE(n,t){return lE(ht(n=M(n,J)),Ko(t)?t:{next:t})}function hi(n,t){return function(r,i){const s=new at;return r.asyncQueue.enqueueAndForget(async()=>LI(await uu(r),i,s)),s.promise}(ht(n),t)}function Iu(n,t,e){const r=e.docs.get(t._key),i=new rn(n);return new Ht(n,i,t._key,r,new Fe(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tT=class{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=en(t)}set(t,e,r){this._verifyNotCommitted();const i=ie(t,this._firestore),s=Ms(i.converter,e,r),o=Ds(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,j.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=ie(t,this._firestore);let o;return o=typeof(e=rt(e))=="string"||e instanceof ye?du(this._dataReader,"WriteBatch.update",s._key,e,r,i):hu(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(o.toMutation(s._key,j.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ie(t,this._firestore);return this._mutations=this._mutations.concat(new Kn(e._key,j.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ie(n,t){if((n=rt(n)).firestore!==t)throw new p(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eT=class extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=en(e)}get(e){const r=ie(e,this._firestore),i=new $E(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return A();const o=s[0];if(o.isFoundDocument())return new Br(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Br(this._firestore,i,r._key,null,r.converter);throw A()})}set(e,r,i){const s=ie(e,this._firestore),o=Ms(s.converter,r,i),a=Ds(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=ie(e,this._firestore);let a;return a=typeof(r=rt(r))=="string"||r instanceof ye?du(this._dataReader,"Transaction.update",o._key,r,i,s):hu(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=ie(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ie(t,this._firestore),r=new rn(this._firestore);return super.get(t).then(i=>new Ht(this._firestore,r,e._key,i._document,new Fe(!1,!1),e.converter))}};function nT(n,t,e){n=M(n,J);const r=Object.assign(Object.assign({},ZE),e);return function(s){if(s.maxAttempts<1)throw new p(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new at;return s.asyncQueue.enqueueAndForget(async()=>{const c=await sE(s);new rE(s.asyncQueue,c,a,o,u).run()}),u.promise}(ht(n),i=>t(new eT(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(){return new ci("deleteField")}function iT(){return new lu("serverTimestamp")}function sT(...n){return new VE("arrayUnion",n)}function oT(...n){return new DE("arrayRemove",n)}function aT(n){return new CE("increment",n)}(function(t,e=!0){(function(i){zn=i})(Zo),bn(new Ue("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new J(new m_(r.getProvider("auth-internal")),new y_(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new p(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new me(c.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ae(Zu,"4.3.2",t),ae(Zu,"4.3.2","esm2017")})();const uT="@firebase/firestore-compat",cT="0.3.22";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n,t){if(t===void 0)return{merge:!1};if(t.mergeFields!==void 0&&t.merge!==void 0)throw new p("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){if(typeof Uint8Array>"u")throw new p("unimplemented","Uint8Arrays are not available in this environment.")}function al(){if(!z_())throw new p("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ur{constructor(t){this._delegate=t}static fromBase64String(t){return al(),new Ur(Gt.fromBase64String(t))}static fromUint8Array(t){return ol(),new Ur(Gt.fromUint8Array(t))}toBase64(){return al(),this._delegate.toBase64()}toUint8Array(){return ol(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){return lT(n,["next","error","complete"])}function lT(n,t){if(typeof n!="object"||n===null)return!1;const e=n;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{enableIndexedDbPersistence(t,e){return yE(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return IE(t._delegate)}clearIndexedDbPersistence(t){return EE(t._delegate)}}class Hf{constructor(t,e,r){this._delegate=e,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},t instanceof me||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();!t.merge&&e.host!==t.host&&Mt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,r={}){fE(this._delegate,t,e,r)}enableNetwork(){return wE(this._delegate)}disableNetwork(){return vE(this._delegate)}enablePersistence(t){let e=!1,r=!1;return t&&(e=!!t.synchronizeTabs,r=!!t.experimentalForceOwningTab,Sf("synchronizeTabs",e,"experimentalForceOwningTab",r)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return TE(this._delegate)}onSnapshotsInSync(t){return JE(this._delegate,t)}get app(){if(!this._appCompat)throw new p("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new Un(this,Cf(this._delegate,t))}catch(e){throw Et(e,"collection()","Firestore.collection()")}}doc(t){try{return new Nt(this,Zi(this._delegate,t))}catch(e){throw Et(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new It(this,mE(this._delegate,t))}catch(e){throw Et(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return nT(this._delegate,e=>t(new Yf(this,e)))}batch(){return ht(this._delegate),new Xf(new tT(this._delegate,t=>hi(this._delegate,t)))}loadBundle(t){return AE(this._delegate,t)}namedQuery(t){return RE(this._delegate,t).then(e=>e?new It(this,e):null)}}class Fs extends yu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ur(new Gt(t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return Nt.forKey(e,this.firestore,null)}}function dT(n){l_(n)}class Yf{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new Fs(t)}get(t){const e=Le(t);return this._delegate.get(e).then(r=>new qr(this._firestore,new Ht(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,e.converter)))}set(t,e,r){const i=Le(t);return r?(Eu("Transaction.set",r),this._delegate.set(i,e,r)):this._delegate.set(i,e),this}update(t,e,r,...i){const s=Le(t);return arguments.length===2?this._delegate.update(s,e):this._delegate.update(s,e,r,...i),this}delete(t){const e=Le(t);return this._delegate.delete(e),this}}class Xf{constructor(t){this._delegate=t}set(t,e,r){const i=Le(t);return r?(Eu("WriteBatch.set",r),this._delegate.set(i,e,r)):this._delegate.set(i,e),this}update(t,e,r,...i){const s=Le(t);return arguments.length===2?this._delegate.update(s,e):this._delegate.update(s,e,r,...i),this}delete(t){const e=Le(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class Ye{constructor(t,e,r){this._firestore=t,this._userDataWriter=e,this._delegate=r}fromFirestore(t,e){const r=new pr(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new $r(this._firestore,r),e??{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const r=Ye.INSTANCES;let i=r.get(t);i||(i=new WeakMap,r.set(t,i));let s=i.get(e);return s||(s=new Ye(t,new Fs(t),e),i.set(e,s)),s}}Ye.INSTANCES=new WeakMap;class Nt{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Fs(t)}static forPath(t,e,r){if(t.length%2!==0)throw new p("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new Nt(e,new W(e._delegate,r,new y(t)))}static forKey(t,e,r){return new Nt(e,new W(e._delegate,r,t))}get id(){return this._delegate.id}get parent(){return new Un(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new Un(this.firestore,Cf(this._delegate,t))}catch(e){throw Et(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=rt(t),t instanceof W?xf(this._delegate,t):!1}set(t,e){e=Eu("DocumentReference.set",e);try{return e?il(this._delegate,t,e):il(this._delegate,t)}catch(r){throw Et(r,"setDoc()","DocumentReference.set()")}}update(t,e,...r){try{return arguments.length===1?sl(this._delegate,t):sl(this._delegate,t,e,...r)}catch(i){throw Et(i,"updateDoc()","DocumentReference.update()")}}delete(){return YE(this._delegate)}onSnapshot(...t){const e=Jf(t),r=Zf(t,i=>new qr(this.firestore,new Ht(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Qf(this._delegate,e,r)}get(t){let e;return(t==null?void 0:t.source)==="cache"?e=jE(this._delegate):(t==null?void 0:t.source)==="server"?e=KE(this._delegate):e=GE(this._delegate),e.then(r=>new qr(this.firestore,new Ht(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(t){return new Nt(this.firestore,t?this._delegate.withConverter(Ye.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Et(n,t,e){return n.message=n.message.replace(t,e),n}function Jf(n){for(const t of n)if(typeof t=="object"&&!Qo(t))return t;return{}}function Zf(n,t){var e,r;let i;return Qo(n[0])?i=n[0]:Qo(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(t(s))},error:(e=i.error)===null||e===void 0?void 0:e.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class qr{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new Nt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Wf(this._delegate,t._delegate)}}class $r extends qr{data(t){const e=this._delegate.data(t);return this._delegate._converter||h_(e!==void 0),e}}class It{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Fs(t)}where(t,e,r){try{return new It(this.firestore,ee(this._delegate,kE(t,e,r)))}catch(i){throw Et(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new It(this.firestore,ee(this._delegate,OE(t,e)))}catch(r){throw Et(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new It(this.firestore,ee(this._delegate,ME(t)))}catch(e){throw Et(e,"limit()","Query.limit()")}}limitToLast(t){try{return new It(this.firestore,ee(this._delegate,FE(t)))}catch(e){throw Et(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new It(this.firestore,ee(this._delegate,LE(...t)))}catch(e){throw Et(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new It(this.firestore,ee(this._delegate,BE(...t)))}catch(e){throw Et(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new It(this.firestore,ee(this._delegate,UE(...t)))}catch(e){throw Et(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new It(this.firestore,ee(this._delegate,qE(...t)))}catch(e){throw Et(e,"endAt()","Query.endAt()")}}isEqual(t){return Nf(this._delegate,t._delegate)}get(t){let e;return(t==null?void 0:t.source)==="cache"?e=QE(this._delegate):(t==null?void 0:t.source)==="server"?e=HE(this._delegate):e=WE(this._delegate),e.then(r=>new Ho(this.firestore,new Ie(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...t){const e=Jf(t),r=Zf(t,i=>new Ho(this.firestore,new Ie(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Qf(this._delegate,e,r)}withConverter(t){return new It(this.firestore,t?this._delegate.withConverter(Ye.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class fT{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new $r(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ho{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new It(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new $r(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(e=>new fT(this._firestore,e))}forEach(t,e){this._delegate.forEach(r=>{t.call(e,new $r(this._firestore,r))})}isEqual(t){return Wf(this._delegate,t._delegate)}}class Un extends It{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new Nt(this.firestore,t):null}doc(t){try{return t===void 0?new Nt(this.firestore,Zi(this._delegate)):new Nt(this.firestore,Zi(this._delegate,t))}catch(e){throw Et(e,"doc()","CollectionReference.doc()")}}add(t){return XE(this._delegate,t).then(e=>new Nt(this.firestore,e))}isEqual(t){return xf(this._delegate,t._delegate)}withConverter(t){return new Un(this.firestore,t?this._delegate.withConverter(Ye.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Le(n){return M(n,W)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(...t){this._delegate=new ye(...t)}static documentId(){return new Tu(G.keyField().canonicalString())}isEqual(t){return t=rt(t),t instanceof ye?this._delegate._internalPath.isEqual(t._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this._delegate=t}static serverTimestamp(){const t=iT();return t._methodName="FieldValue.serverTimestamp",new ke(t)}static delete(){const t=rT();return t._methodName="FieldValue.delete",new ke(t)}static arrayUnion(...t){const e=sT(...t);return e._methodName="FieldValue.arrayUnion",new ke(e)}static arrayRemove(...t){const e=oT(...t);return e._methodName="FieldValue.arrayRemove",new ke(e)}static increment(t){const e=aT(t);return e._methodName="FieldValue.increment",new ke(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={Firestore:Hf,GeoPoint:Ps,Timestamp:K,Blob:Ur,Transaction:Yf,WriteBatch:Xf,DocumentReference:Nt,DocumentSnapshot:qr,Query:It,QueryDocumentSnapshot:$r,QuerySnapshot:Ho,CollectionReference:Un,FieldPath:Tu,FieldValue:ke,setLogLevel:dT,CACHE_SIZE_UNLIMITED:_E};function gT(n,t){n.INTERNAL.registerComponent(new Ue("firestore-compat",e=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("firestore").getImmediate();return t(r,i)},"PUBLIC").setServiceProps(Object.assign({},mT)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(n){gT(n,(t,e)=>new Hf(t,e,new hT)),n.registerVersion(uT,cT)}pT(yn);function ul(n){let t,e,r,i,s,o,a,u;return{c(){t=En("img"),r=oo(),i=En("button"),i.textContent="Next",s=oo(),o=En("button"),o.textContent="Like and Next",Au(t.src,e=n[0][n[1]].IMG)||Us(t,"src",e),Us(t,"alt","ucsc")},m(c,l){Ve(c,t,l),Ve(c,r,l),Ve(c,i,l),Ve(c,s,l),Ve(c,o,l),a||(u=[Ru(i,"click",n[2]),Ru(o,"click",n[3])],a=!0)},p(c,l){l&3&&!Au(t.src,e=c[0][c[1]].IMG)&&Us(t,"src",e)},d(c){c&&(ne(t),ne(r),ne(i),ne(s),ne(o)),a=!1,zr(u)}}}function _T(n){let t,e,r=n[0].length+"",i,s,o=n[0].length>0&&ul(n);return{c(){t=En("main"),e=En("p"),i=dl(r),s=oo(),o&&o.c()},m(a,u){Ve(a,t,u),Bs(t,e),Bs(e,i),Bs(t,s),o&&o.m(t,null)},p(a,[u]){u&1&&r!==(r=a[0].length+"")&&sm(i,r),a[0].length>0?o?o.p(a,u):(o=ul(a),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},i:Sn,o:Sn,d(a){a&&ne(t),o&&o.d()}}}function yT(n,t,e){const r={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN,projectId:{}.VITE_FIREBASE_PROJECT_ID,storageBucket:{}.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:{}.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID,measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID};yn.apps.length||yn.initializeApp(r);const s=yn.firestore().collection("location-UCSC");let o=[],a=0;am(async()=>{const l=await s.get(),h=[];l.forEach(d=>{const f={id:d.id,IMG:d.get("IMG")};h.push(f)}),e(0,o=h),console.log(o)});const u=()=>{e(1,a=(a+1)%o.length)};return[o,a,u,async()=>{await s.doc(o[a].id).update({CLICKS:yn.firestore.FieldValue.increment(1)}),u()}]}class IT extends yl{constructor(t){super(),_l(this,t,yT,_T,hl,{})}}function ET(n){let t,e,r;return e=new IT({}),{c(){t=En("main"),mm(e.$$.fragment)},m(i,s){Ve(i,t,s),gl(e,t,null),r=!0},p:Sn,i(i){r||(ml(e.$$.fragment,i),r=!0)},o(i){fm(e.$$.fragment,i),r=!1},d(i){i&&ne(t),pl(e)}}}class TT extends yl{constructor(t){super(),_l(this,t,null,ET,hl,{})}}new TT({target:document.getElementById("app")});
