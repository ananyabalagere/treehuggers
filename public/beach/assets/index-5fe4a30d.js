var tm=Object.defineProperty;var nm=(n,e,t)=>e in n?tm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ls=(n,e,t)=>(nm(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Sn(){}function ul(n){return n()}function vc(){return Object.create(null)}function zr(n){n.forEach(ul)}function ll(n){return typeof n=="function"}function hl(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let di;function Ac(n,e){return n===e?!0:(di||(di=document.createElement("a")),di.href=e,n===di.href)}function rm(n){return Object.keys(n).length===0}function Bs(n,e){n.appendChild(e)}function Vt(n,e,t){n.insertBefore(e,t||null)}function nt(n){n.parentNode&&n.parentNode.removeChild(n)}function En(n){return document.createElement(n)}function dl(n){return document.createTextNode(n)}function oo(){return dl(" ")}function Rc(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function qs(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function im(n){return Array.from(n.childNodes)}function sm(n,e){e=""+e,n.data!==e&&(n.data=e)}let _r;function ur(n){_r=n}function om(){if(!_r)throw new Error("Function called outside component initialization");return _r}function am(n){om().$$.on_mount.push(n)}const dn=[],Sc=[];let wn=[];const bc=[],cm=Promise.resolve();let ao=!1;function um(){ao||(ao=!0,cm.then(fl))}function co(n){wn.push(n)}const Us=new Set;let on=0;function fl(){if(on!==0)return;const n=_r;do{try{for(;on<dn.length;){const e=dn[on];on++,ur(e),lm(e.$$)}}catch(e){throw dn.length=0,on=0,e}for(ur(null),dn.length=0,on=0;Sc.length;)Sc.pop()();for(let e=0;e<wn.length;e+=1){const t=wn[e];Us.has(t)||(Us.add(t),t())}wn.length=0}while(dn.length);for(;bc.length;)bc.pop()();ao=!1,Us.clear(),ur(n)}function lm(n){if(n.fragment!==null){n.update(),zr(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(co)}}function hm(n){const e=[],t=[];wn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),wn=e}const vi=new Set;let dm;function ml(n,e){n&&n.i&&(vi.delete(n),n.i(e))}function fm(n,e,t,r){if(n&&n.o){if(vi.has(n))return;vi.add(n),dm.c.push(()=>{vi.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function mm(n){n&&n.c()}function gl(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),co(()=>{const s=n.$$.on_mount.map(ul).filter(ll);n.$$.on_destroy?n.$$.on_destroy.push(...s):zr(s),n.$$.on_mount=[]}),i.forEach(co)}function pl(n,e){const t=n.$$;t.fragment!==null&&(hm(t.after_update),zr(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function gm(n,e){n.$$.dirty[0]===-1&&(dn.push(n),um(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function _l(n,e,t,r,i,s,o=null,a=[-1]){const c=_r;ur(n);const u=n.$$={fragment:null,ctx:[],props:s,update:Sn,not_equal:i,bound:vc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:vc(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=t?t(n,e.props||{},(h,d,...f)=>{const I=f.length?f[0]:d;return u.ctx&&i(u.ctx[h],u.ctx[h]=I)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](I),l&&gm(n,h)),d}):[],u.update(),l=!0,zr(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const h=im(e.target);u.fragment&&u.fragment.l(h),h.forEach(nt)}else u.fragment&&u.fragment.c();e.intro&&ml(n.$$.fragment),gl(n,e.target,e.anchor),fl()}ur(c)}class yl{constructor(){Ls(this,"$$");Ls(this,"$$set")}$destroy(){pl(this,1),this.$destroy=Sn}$on(e,t){if(!ll(t))return Sn;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!rm(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pm="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pm);/**
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
 */const Il=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_m=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Il(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_m(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new ym;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const I=u<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ym extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Im=function(n){const e=Il(n);return El.encodeByteArray(e,!0)},xi=function(n){return Im(n).replace(/\./g,"")},Em=function(n){try{return El.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ni(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!wm(t)||(n[t]=Ni(n[t],e[t]));return n}function wm(n){return n!=="__proto__"}/**
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
 */function Tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vm=()=>Tm().__FIREBASE_DEFAULTS__,Am=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Em(n[1]);return e&&JSON.parse(e)},wl=()=>{try{return vm()||Am()||Rm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tl=()=>{var n;return(n=wl())===null||n===void 0?void 0:n.config};/**
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
 */class Sm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function bm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[xi(JSON.stringify(t)),xi(JSON.stringify(o)),a].join(".")}/**
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
 */function uo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pm(){var n;const e=(n=wl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vm(){return typeof self=="object"&&self.self===self}function Dm(){return!Pm()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vl(){try{return typeof indexedDB=="object"}catch{return!1}}function Cm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const xm="FirebaseError";class Xt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xm,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ts.prototype.create)}}class ts{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Nm(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,a,r)}}function Nm(n,e){return n.replace(km,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const km=/\{\$([^}]+)}/g;/**
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
 */function Pc(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function lo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Vc(s)&&Vc(o)){if(!lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Vc(n){return n!==null&&typeof n=="object"}function Om(n,e){const t=new Mm(n,e);return t.subscribe.bind(t)}class Mm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Fm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=$s),i.error===void 0&&(i.error=$s),i.complete===void 0&&(i.complete=$s);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $s(){}/**
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
 */function re(n){return n&&n._delegate?n._delegate:n}class qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bt="[DEFAULT]";/**
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
 */class Lm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qm(e))try{this.getOrInitializeService({instanceIdentifier:bt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bt){return this.instances.has(e)}getOptions(e=bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bt){return this.component?this.component.multipleInstances?e:bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bm(n){return n===bt?void 0:n}function qm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Um{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Lm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Yo=[];var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const Al={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},$m=N.INFO,zm={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},jm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=zm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xo{constructor(e){this.name=e,this._logLevel=$m,this._logHandler=jm,this._userLogHandler=null,Yo.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Al[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}function Gm(n){Yo.forEach(e=>{e.setLogLevel(n)})}function Km(n,e){for(const t of Yo){let r=null;e&&e.level&&(r=Al[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:N[s].toLowerCase(),message:a,args:o,type:i.name})}}}const Wm=(n,e)=>e.some(t=>n instanceof t);let Dc,Cc;function Qm(){return Dc||(Dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hm(){return Cc||(Cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rl=new WeakMap,ho=new WeakMap,Sl=new WeakMap,zs=new WeakMap,Jo=new WeakMap;function Ym(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ot(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Rl.set(t,n)}).catch(()=>{}),Jo.set(e,n),e}function Xm(n){if(ho.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ho.set(n,e)}let fo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ho.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Jm(n){fo=n(fo)}function Zm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(js(this),e,...t);return Sl.set(r,e.sort?e.sort():[e]),ot(r)}:Hm().includes(n)?function(...e){return n.apply(js(this),e),ot(Rl.get(this))}:function(...e){return ot(n.apply(js(this),e))}}function eg(n){return typeof n=="function"?Zm(n):(n instanceof IDBTransaction&&Xm(n),Wm(n,Qm())?new Proxy(n,fo):n)}function ot(n){if(n instanceof IDBRequest)return Ym(n);if(zs.has(n))return zs.get(n);const e=eg(n);return e!==n&&(zs.set(n,e),Jo.set(e,n)),e}const js=n=>Jo.get(n);function tg(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=ot(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ot(o.result),c.oldVersion,c.newVersion,ot(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ng=["get","getKey","getAll","getAllKeys","count"],rg=["put","add","delete","clear"],Gs=new Map;function xc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Gs.get(e))return Gs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=rg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ng.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Gs.set(e,s),s}Jm(n=>({...n,get:(e,t,r)=>xc(e,t)||n.get(e,t,r),has:(e,t)=>!!xc(e,t)||n.has(e,t)}));/**
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
 */class ig{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",Nc="0.9.23";/**
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
 */const Ut=new Xo("@firebase/app"),og="@firebase/app-compat",ag="@firebase/analytics-compat",cg="@firebase/analytics",ug="@firebase/app-check-compat",lg="@firebase/app-check",hg="@firebase/auth",dg="@firebase/auth-compat",fg="@firebase/database",mg="@firebase/database-compat",gg="@firebase/functions",pg="@firebase/functions-compat",_g="@firebase/installations",yg="@firebase/installations-compat",Ig="@firebase/messaging",Eg="@firebase/messaging-compat",wg="@firebase/performance",Tg="@firebase/performance-compat",vg="@firebase/remote-config",Ag="@firebase/remote-config-compat",Rg="@firebase/storage",Sg="@firebase/storage-compat",bg="@firebase/firestore",Pg="@firebase/firestore-compat",Vg="firebase",Dg="10.6.0";/**
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
 */const ut="[DEFAULT]",Cg={[mo]:"fire-core",[og]:"fire-core-compat",[cg]:"fire-analytics",[ag]:"fire-analytics-compat",[lg]:"fire-app-check",[ug]:"fire-app-check-compat",[hg]:"fire-auth",[dg]:"fire-auth-compat",[fg]:"fire-rtdb",[mg]:"fire-rtdb-compat",[gg]:"fire-fn",[pg]:"fire-fn-compat",[_g]:"fire-iid",[yg]:"fire-iid-compat",[Ig]:"fire-fcm",[Eg]:"fire-fcm-compat",[wg]:"fire-perf",[Tg]:"fire-perf-compat",[vg]:"fire-rc",[Ag]:"fire-rc-compat",[Rg]:"fire-gcs",[Sg]:"fire-gcs-compat",[bg]:"fire-fst",[Pg]:"fire-fst-compat","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
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
 */const lt=new Map,yr=new Map;function ki(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bl(n,e){n.container.addOrOverwriteComponent(e)}function bn(n){const e=n.name;if(yr.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;yr.set(e,n);for(const t of lt.values())ki(t,n);return!0}function Pl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xg(n,e,t=ut){Pl(n,e).clearInstance(t)}function Ng(){yr.clear()}/**
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
 */const kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},We=new ts("app","Firebase",kg);/**
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
 */let Og=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}};/**
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
 */const Zo=Dg;function ea(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ut,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw We.create("bad-app-name",{appName:String(i)});if(t||(t=Tl()),!t)throw We.create("no-options");const s=lt.get(i);if(s){if(lo(t,s.options)&&lo(r,s.config))return s;throw We.create("duplicate-app",{appName:i})}const o=new Um(i);for(const c of yr.values())o.addComponent(c);const a=new Og(t,r,o);return lt.set(i,a),a}function Mg(n=ut){const e=lt.get(n);if(!e&&n===ut&&Tl())return ea();if(!e)throw We.create("no-app",{appName:n});return e}function Fg(){return Array.from(lt.values())}async function Vl(n){const e=n.name;lt.has(e)&&(lt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function at(n,e,t){var r;let i=(r=Cg[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}bn(new qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Dl(n,e){if(n!==null&&typeof n!="function")throw We.create("invalid-log-argument");Km(n,e)}function Cl(n){Gm(n)}/**
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
 */const Lg="firebase-heartbeat-database",Bg=1,Ir="firebase-heartbeat-store";let Ks=null;function xl(){return Ks||(Ks=tg(Lg,Bg,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ir)}}}).catch(n=>{throw We.create("idb-open",{originalErrorMessage:n.message})})),Ks}async function qg(n){try{return await(await xl()).transaction(Ir).objectStore(Ir).get(Nl(n))}catch(e){if(e instanceof Xt)Ut.warn(e.message);else{const t=We.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function kc(n,e){try{const r=(await xl()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,Nl(n)),await r.done}catch(t){if(t instanceof Xt)Ut.warn(t.message);else{const r=We.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(r.message)}}}function Nl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ug=1024,$g=30*24*60*60*1e3;class zg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Oc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=$g}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Oc(),{heartbeatsToSend:r,unsentEntries:i}=jg(this._heartbeatsCache.heartbeats),s=xi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Oc(){return new Date().toISOString().substring(0,10)}function jg(n,e=Ug){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Mc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Gg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vl()?Cm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return kc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return kc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mc(n){return xi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Kg(n){bn(new qt("platform-logger",e=>new ig(e),"PRIVATE")),bn(new qt("heartbeat",e=>new zg(e),"PRIVATE")),at(mo,Nc,n),at(mo,Nc,"esm2017"),at("fire-js","")}Kg("");const Wg=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Xt,SDK_VERSION:Zo,_DEFAULT_ENTRY_NAME:ut,_addComponent:ki,_addOrOverwriteComponent:bl,_apps:lt,_clearComponents:Ng,_components:yr,_getProvider:Pl,_registerComponent:bn,_removeServiceInstance:xg,deleteApp:Vl,getApp:Mg,getApps:Fg,initializeApp:ea,onLog:Dl,registerVersion:at,setLogLevel:Cl},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Qg{constructor(e,t){this._delegate=e,this.firebase=t,ki(e,new qt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Vl(this._delegate)))}_getService(e,t=ut){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=ut){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ki(this._delegate,e)}_addOrOverwriteComponent(e){bl(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Hg={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fc=new ts("app-compat","Firebase",Hg);/**
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
 */function Yg(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:at,setLogLevel:Cl,onLog:Dl,apps:null,SDK_VERSION:Zo,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Wg}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||ut,!Pc(e,u))throw Fc.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=ea(u,l);if(Pc(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(bn(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Fc.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&Ni(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function kl(){const n=Yg(Qg);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:kl,extendNamespace:e,createSubscribe:Om,ErrorFactory:ts,deepExtend:Ni});function e(t){Ni(n,t)}return n}const Xg=kl();/**
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
 */const Lc=new Xo("@firebase/app-compat"),Jg="@firebase/app-compat",Zg="0.2.23";/**
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
 */function ep(n){at(Jg,Zg,n)}/**
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
 */if(Vm()&&self.firebase!==void 0){Lc.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Lc.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const yn=Xg;ep();var tp="firebase",np="10.6.0";/**
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
 */yn.registerVersion(tp,np,"app-compat");var rp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,ta=ta||{},b=rp||self;function ns(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function jr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function ip(n){return Object.prototype.hasOwnProperty.call(n,Ws)&&n[Ws]||(n[Ws]=++sp)}var Ws="closure_uid_"+(1e9*Math.random()>>>0),sp=0;function op(n,e,t){return n.call.apply(n.bind,arguments)}function ap(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function _e(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_e=op:_e=ap,_e.apply(null,arguments)}function fi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ue(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Et(){this.s=this.s,this.o=this.o}var cp=0;Et.prototype.s=!1;Et.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),cp!=0)&&ip(this)};Et.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ol=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function na(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Bc(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ns(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function ye(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var up=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{b.addEventListener("test",()=>{},e),b.removeEventListener("test",()=>{},e)}catch{}return n}();function Er(n){return/^[\s\xa0]*$/.test(n)}function rs(){var n=b.navigator;return n&&(n=n.userAgent)?n:""}function Fe(n){return rs().indexOf(n)!=-1}function ra(n){return ra[" "](n),n}ra[" "]=function(){};function lp(n,e){var t=n_;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var hp=Fe("Opera"),Pn=Fe("Trident")||Fe("MSIE"),Ml=Fe("Edge"),go=Ml||Pn,Fl=Fe("Gecko")&&!(rs().toLowerCase().indexOf("webkit")!=-1&&!Fe("Edge"))&&!(Fe("Trident")||Fe("MSIE"))&&!Fe("Edge"),dp=rs().toLowerCase().indexOf("webkit")!=-1&&!Fe("Edge");function Ll(){var n=b.document;return n?n.documentMode:void 0}var po;e:{var Qs="",Hs=function(){var n=rs();if(Fl)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ml)return/Edge\/([\d\.]+)/.exec(n);if(Pn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(dp)return/WebKit\/(\S+)/.exec(n);if(hp)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Hs&&(Qs=Hs?Hs[1]:""),Pn){var Ys=Ll();if(Ys!=null&&Ys>parseFloat(Qs)){po=String(Ys);break e}}po=Qs}var _o;if(b.document&&Pn){var qc=Ll();_o=qc||parseInt(po,10)||void 0}else _o=void 0;var fp=_o;function wr(n,e){if(ye.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Fl){e:{try{ra(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:mp[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&wr.$.h.call(this)}}ue(wr,ye);var mp={2:"touch",3:"pen",4:"mouse"};wr.prototype.h=function(){wr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),gp=0;function pp(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++gp,this.fa=this.ia=!1}function is(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ia(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function _p(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Bl(n){const e={};for(const t in n)e[t]=n[t];return e}const Uc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ql(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Uc.length;s++)t=Uc[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function ss(n){this.src=n,this.g={},this.h=0}ss.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Io(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new pp(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function yo(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Ol(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(is(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Io(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var sa="closure_lm_"+(1e6*Math.random()|0),Xs={};function Ul(n,e,t,r,i){if(r&&r.once)return zl(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ul(n,e[s],t,r,i);return null}return t=ca(t),n&&n[Gr]?n.O(e,t,jr(r)?!!r.capture:!!r,i):$l(n,e,t,!1,r,i)}function $l(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=jr(i)?!!i.capture:!!i,a=aa(n);if(a||(n[sa]=a=new ss(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=yp(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)up||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Gl(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function yp(){function n(t){return e.call(n.src,n.listener,t)}const e=Ip;return n}function zl(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)zl(n,e[s],t,r,i);return null}return t=ca(t),n&&n[Gr]?n.P(e,t,jr(r)?!!r.capture:!!r,i):$l(n,e,t,!0,r,i)}function jl(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)jl(n,e[s],t,r,i);else r=jr(r)?!!r.capture:!!r,t=ca(t),n&&n[Gr]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Io(s,t,r,i),-1<t&&(is(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=aa(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Io(e,t,r,i)),(t=-1<n?e[n]:null)&&oa(t))}function oa(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Gr])yo(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Gl(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=aa(e))?(yo(t,n),t.h==0&&(t.src=null,e[sa]=null)):is(n)}}}function Gl(n){return n in Xs?Xs[n]:Xs[n]="on"+n}function Ip(n,e){if(n.fa)n=!0;else{e=new wr(e,this);var t=n.listener,r=n.la||n.src;n.ia&&oa(n),n=t.call(r,e)}return n}function aa(n){return n=n[sa],n instanceof ss?n:null}var Js="__closure_events_fn_"+(1e9*Math.random()>>>0);function ca(n){return typeof n=="function"?n:(n[Js]||(n[Js]=function(e){return n.handleEvent(e)}),n[Js])}function ce(){Et.call(this),this.i=new ss(this),this.S=this,this.J=null}ue(ce,Et);ce.prototype[Gr]=!0;ce.prototype.removeEventListener=function(n,e,t,r){jl(this,n,e,t,r)};function ge(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new ye(e,n);else if(e instanceof ye)e.target=e.target||n;else{var i=e;e=new ye(r,n),ql(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=mi(o,r,!0,e)&&i}if(o=e.g=n,i=mi(o,r,!0,e)&&i,i=mi(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=mi(o,r,!1,e)&&i}ce.prototype.N=function(){if(ce.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)is(t[r]);delete n.g[e],n.h--}}this.J=null};ce.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ce.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function mi(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&yo(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var ua=b.JSON.stringify;class Ep{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function wp(){var n=la;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Tp{constructor(){this.h=this.g=null}add(e,t){const r=Kl.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Kl=new Ep(()=>new vp,n=>n.reset());class vp{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ap(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Rp(n){b.setTimeout(()=>{throw n},0)}let Tr,vr=!1,la=new Tp,Wl=()=>{const n=b.Promise.resolve(void 0);Tr=()=>{n.then(Sp)}};var Sp=()=>{for(var n;n=wp();){try{n.h.call(n.g)}catch(t){Rp(t)}var e=Kl;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}vr=!1};function os(n,e){ce.call(this),this.h=n||1,this.g=e||b,this.j=_e(this.qb,this),this.l=Date.now()}ue(os,ce);w=os.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ge(this,"tick"),this.ga&&(ha(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ha(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}w.N=function(){os.$.N.call(this),ha(this),delete this.g};function da(n,e,t){if(typeof n=="function")t&&(n=_e(n,t));else if(n&&typeof n.handleEvent=="function")n=_e(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(n,e||0)}function Ql(n){n.g=da(()=>{n.g=null,n.i&&(n.i=!1,Ql(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class bp extends Et{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ql(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ar(n){Et.call(this),this.h=n,this.g={}}ue(Ar,Et);var $c=[];function Hl(n,e,t,r){Array.isArray(t)||(t&&($c[0]=t.toString()),t=$c);for(var i=0;i<t.length;i++){var s=Ul(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Yl(n){ia(n.g,function(e,t){this.g.hasOwnProperty(t)&&oa(e)},n),n.g={}}Ar.prototype.N=function(){Ar.$.N.call(this),Yl(this)};Ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function as(){this.g=!0}as.prototype.Ea=function(){this.g=!1};function Pp(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Vp(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function In(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Cp(n,t)+(r?" "+r:"")})}function Dp(n,e){n.info(function(){return"TIMEOUT: "+e})}as.prototype.info=function(){};function Cp(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ua(t)}catch{return e}}var Jt={},zc=null;function cs(){return zc=zc||new ce}Jt.Ta="serverreachability";function Xl(n){ye.call(this,Jt.Ta,n)}ue(Xl,ye);function Rr(n){const e=cs();ge(e,new Xl(e))}Jt.STAT_EVENT="statevent";function Jl(n,e){ye.call(this,Jt.STAT_EVENT,n),this.stat=e}ue(Jl,ye);function we(n){const e=cs();ge(e,new Jl(e,n))}Jt.Ua="timingevent";function Zl(n,e){ye.call(this,Jt.Ua,n),this.size=e}ue(Zl,ye);function Kr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){n()},e)}var us={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fa(){}fa.prototype.h=null;function jc(n){return n.h||(n.h=n.i())}function th(){}var Wr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ma(){ye.call(this,"d")}ue(ma,ye);function ga(){ye.call(this,"c")}ue(ga,ye);var Eo;function ls(){}ue(ls,fa);ls.prototype.g=function(){return new XMLHttpRequest};ls.prototype.i=function(){return{}};Eo=new ls;function Qr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Ar(this),this.P=xp,n=go?125:void 0,this.V=new os(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nh}function nh(){this.i=null,this.g="",this.h=!1}var xp=45e3,wo={},Oi={};w=Qr.prototype;w.setTimeout=function(n){this.P=n};function To(n,e,t){n.L=1,n.v=ds(Qe(e)),n.s=t,n.S=!0,rh(n,null)}function rh(n,e){n.G=Date.now(),Hr(n),n.A=Qe(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),hh(t.i,"t",r),n.C=0,t=n.l.J,n.h=new nh,n.g=xh(n.l,t?e:null,!n.s),0<n.O&&(n.M=new bp(_e(n.Pa,n,n.g),n.O)),Hl(n.U,n.g,"readystatechange",n.nb),e=n.I?Bl(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Rr(),Pp(n.j,n.u,n.A,n.m,n.W,n.s)}w.nb=function(n){n=n.target;const e=this.M;e&&Le(n)==3?e.l():this.Pa(n)};w.Pa=function(n){try{if(n==this.g)e:{const l=Le(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||go||this.g&&(this.h.h||this.g.ja()||Qc(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Rr(3):Rr(2)),hs(this);var t=this.g.da();this.ca=t;t:if(ih(this)){var r=Qc(this.g);n="";var i=r.length,s=Le(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ot(this),lr(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,Vp(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Er(a)){var u=a;break t}}u=null}if(t=u)In(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vo(this,t);else{this.i=!1,this.o=3,we(12),Ot(this),lr(this);break e}}this.S?(sh(this,l,o),go&&this.i&&l==3&&(Hl(this.U,this.V,"tick",this.mb),this.V.start())):(In(this.j,this.m,o,null),vo(this,o)),l==4&&Ot(this),this.i&&!this.J&&(l==4?Ph(this.l,this):(this.i=!1,Hr(this)))}else Zp(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,we(12)):(this.o=0,we(13)),Ot(this),lr(this)}}}catch{}finally{}};function ih(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function sh(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=Np(n,t),i==Oi){e==4&&(n.o=4,we(14),r=!1),In(n.j,n.m,null,"[Incomplete Response]");break}else if(i==wo){n.o=4,we(15),In(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else In(n.j,n.m,i,null),vo(n,i);ih(n)&&i!=Oi&&i!=wo&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,we(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),wa(e),e.M=!0,we(11))):(In(n.j,n.m,t,"[Invalid Chunked Response]"),Ot(n),lr(n))}w.mb=function(){if(this.g){var n=Le(this.g),e=this.g.ja();this.C<e.length&&(hs(this),sh(this,n,e),this.i&&n!=4&&Hr(this))}};function Np(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Oi:(t=Number(e.substring(t,r)),isNaN(t)?wo:(r+=1,r+t>e.length?Oi:(e=e.slice(r,r+t),n.C=r+t,e)))}w.cancel=function(){this.J=!0,Ot(this)};function Hr(n){n.Y=Date.now()+n.P,oh(n,n.P)}function oh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Kr(_e(n.lb,n),e)}function hs(n){n.B&&(b.clearTimeout(n.B),n.B=null)}w.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Dp(this.j,this.A),this.L!=2&&(Rr(),we(17)),Ot(this),this.o=2,lr(this)):oh(this,this.Y-n)};function lr(n){n.l.H==0||n.J||Ph(n.l,n)}function Ot(n){hs(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,ha(n.V),Yl(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function vo(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Ao(t.i,n))){if(!n.K&&Ao(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Li(t),gs(t);else break e;Ea(t),we(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Kr(_e(t.ib,t),6e3));if(1>=mh(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Mt(t,11)}else if((n.K||t.g==n)&&Li(t),!Er(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const I=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(pa(s,s.h),s.h=null))}if(r.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,$(r.I,r.F,T))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Ch(r,r.J?r.pa:null,r.Y),o.K){gh(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(hs(a),Hr(a)),r.g=o}else Sh(r);0<t.j.length&&ps(t)}else u[0]!="stop"&&u[0]!="close"||Mt(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Mt(t,7):Ia(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Rr(4)}catch{}}function kp(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ns(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Op(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ns(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function ah(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ns(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Op(n),r=kp(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mp(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Bt){this.h=n.h,Mi(this,n.j),this.s=n.s,this.g=n.g,Fi(this,n.m),this.l=n.l;var e=n.i,t=new Sr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Gc(this,t),this.o=n.o}else n&&(e=String(n).match(ch))?(this.h=!1,Mi(this,e[1]||"",!0),this.s=ir(e[2]||""),this.g=ir(e[3]||"",!0),Fi(this,e[4]),this.l=ir(e[5]||"",!0),Gc(this,e[6]||"",!0),this.o=ir(e[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}Bt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(sr(e,Kc,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(sr(e,Kc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(sr(t,t.charAt(0)=="/"?Bp:Lp,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",sr(t,Up)),n.join("")};function Qe(n){return new Bt(n)}function Mi(n,e,t){n.j=t?ir(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Fi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Gc(n,e,t){e instanceof Sr?(n.i=e,$p(n.i,n.h)):(t||(e=sr(e,qp)),n.i=new Sr(e,n.h))}function $(n,e,t){n.i.set(e,t)}function ds(n){return $(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ir(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function sr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Fp),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Fp(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Kc=/[#\/\?@]/g,Lp=/[#\?:]/g,Bp=/[#\?]/g,qp=/[#\?@]/g,Up=/#/g;function Sr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function wt(n){n.g||(n.g=new Map,n.h=0,n.i&&Mp(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}w=Sr.prototype;w.add=function(n,e){wt(this),this.i=null,n=Un(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function uh(n,e){wt(n),e=Un(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function lh(n,e){return wt(n),e=Un(n,e),n.g.has(e)}w.forEach=function(n,e){wt(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};w.ta=function(){wt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};w.Z=function(n){wt(this);let e=[];if(typeof n=="string")lh(this,n)&&(e=e.concat(this.g.get(Un(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};w.set=function(n,e){return wt(this),this.i=null,n=Un(this,n),lh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};w.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function hh(n,e,t){uh(n,e),0<t.length&&(n.i=null,n.g.set(Un(n,e),na(t)),n.h+=t.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Un(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function $p(n,e){e&&!n.j&&(wt(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(uh(this,r),hh(this,i,t))},n)),n.j=e}var zp=class{constructor(n,e){this.g=n,this.map=e}};function dh(n){this.l=n||jp,b.PerformanceNavigationTiming?(n=b.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jp=10;function fh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function mh(n){return n.h?1:n.g?n.g.size:0}function Ao(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function pa(n,e){n.g?n.g.add(e):n.h=e}function gh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}dh.prototype.cancel=function(){if(this.i=ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ph(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return na(n.i)}var Gp=class{stringify(n){return b.JSON.stringify(n,void 0)}parse(n){return b.JSON.parse(n,void 0)}};function Kp(){this.g=new Gp}function Wp(n,e,t){const r=t||"";try{ah(n,function(i,s){let o=i;jr(i)&&(o=ua(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Qp(n,e){const t=new as;if(b.Image){const r=new Image;r.onload=fi(gi,t,r,"TestLoadImage: loaded",!0,e),r.onerror=fi(gi,t,r,"TestLoadImage: error",!1,e),r.onabort=fi(gi,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=fi(gi,t,r,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function gi(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Yr(n){this.l=n.ec||null,this.j=n.ob||!1}ue(Yr,fa);Yr.prototype.g=function(){return new fs(this.l,this.j)};Yr.prototype.i=function(n){return function(){return n}}({});function fs(n,e){ce.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=_a,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ue(fs,ce);var _a=0;w=fs.prototype;w.open=function(n,e){if(this.readyState!=_a)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,br(this)};w.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||b).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=_a};w.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_h(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function _h(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}w.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Xr(this):br(this),this.readyState==3&&_h(this)}};w.Za=function(n){this.g&&(this.response=this.responseText=n,Xr(this))};w.Ya=function(n){this.g&&(this.response=n,Xr(this))};w.ka=function(){this.g&&Xr(this)};function Xr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,br(n)}w.setRequestHeader=function(n,e){this.v.append(n,e)};w.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function br(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Hp=b.JSON.parse;function X(n){ce.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yh,this.L=this.M=!1}ue(X,ce);var yh="",Yp=/^https?$/i,Xp=["POST","PUT"];w=X.prototype;w.Oa=function(n){this.M=n};w.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Eo.g(),this.C=this.u?jc(this.u):jc(Eo),this.g.onreadystatechange=_e(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Wc(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&n instanceof b.FormData,!(0<=Ol(Xp,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wh(this),0<this.B&&((this.L=Jp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_e(this.ua,this)):this.A=da(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Wc(this,s)}};function Jp(n){return Pn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}w.ua=function(){typeof ta<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ge(this,"timeout"),this.abort(8))};function Wc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Ih(n),ms(n)}function Ih(n){n.F||(n.F=!0,ge(n,"complete"),ge(n,"error"))}w.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ge(this,"complete"),ge(this,"abort"),ms(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ms(this,!0)),X.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?Eh(this):this.kb())};w.kb=function(){Eh(this)};function Eh(n){if(n.h&&typeof ta<"u"&&(!n.C[1]||Le(n)!=4||n.da()!=2)){if(n.v&&Le(n)==4)da(n.La,0,n);else if(ge(n,"readystatechange"),Le(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(ch)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!Yp.test(i?i.toLowerCase():"")}t=r}if(t)ge(n,"complete"),ge(n,"success");else{n.m=6;try{var s=2<Le(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Ih(n)}}finally{ms(n)}}}}function ms(n,e){if(n.g){wh(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ge(n,"ready");try{t.onreadystatechange=r}catch{}}}function wh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(b.clearTimeout(n.A),n.A=null)}w.isActive=function(){return!!this.g};function Le(n){return n.g?n.g.readyState:0}w.da=function(){try{return 2<Le(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Hp(e)}};function Qc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case yh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Zp(n){const e={};n=(n.g&&2<=Le(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Er(n[r]))continue;var t=Ap(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}_p(e,function(r){return r.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Th(n){let e="";return ia(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function ya(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Th(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):$(n,e,t))}function Xn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function vh(n){this.Ga=0,this.j=[],this.l=new as,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xn("baseRetryDelayMs",5e3,n),this.hb=Xn("retryDelaySeedMs",1e4,n),this.eb=Xn("forwardChannelMaxRetries",2,n),this.xa=Xn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new dh(n&&n.concurrentRequestLimit),this.Ja=new Kp,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=vh.prototype;w.ra=8;w.H=1;function Ia(n){if(Ah(n),n.H==3){var e=n.W++,t=Qe(n.I);if($(t,"SID",n.K),$(t,"RID",e),$(t,"TYPE","terminate"),Jr(n,t),e=new Qr(n,n.l,e),e.L=2,e.v=ds(Qe(t)),t=!1,b.navigator&&b.navigator.sendBeacon)try{t=b.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&b.Image&&(new Image().src=e.v,t=!0),t||(e.g=xh(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Hr(e)}Dh(n)}function gs(n){n.g&&(wa(n),n.g.cancel(),n.g=null)}function Ah(n){gs(n),n.u&&(b.clearTimeout(n.u),n.u=null),Li(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&b.clearTimeout(n.m),n.m=null)}function ps(n){if(!fh(n.i)&&!n.m){n.m=!0;var e=n.Na;Tr||Wl(),vr||(Tr(),vr=!0),la.add(e,n),n.C=0}}function e_(n,e){return mh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Kr(_e(n.Na,n,e),Vh(n,n.C)),n.C++,!0)}w.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Qr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Bl(s),ql(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Rh(this,i,e),t=Qe(this.I),$(t,"RID",n),$(t,"CVER",22),this.F&&$(t,"X-HTTP-Session-Id",this.F),Jr(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Th(s)))+"&"+e:this.o&&ya(t,this.o,s)),pa(this.i,i),this.bb&&$(t,"TYPE","init"),this.P?($(t,"$req",e),$(t,"SID","null"),i.aa=!0,To(i,t,null)):To(i,t,e),this.H=2}}else this.H==3&&(n?Hc(this,n):this.j.length==0||fh(this.i)||Hc(this))};function Hc(n,e){var t;e?t=e.m:t=n.W++;const r=Qe(n.I);$(r,"SID",n.K),$(r,"RID",t),$(r,"AID",n.V),Jr(n,r),n.o&&n.s&&ya(r,n.o,n.s),t=new Qr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Rh(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),pa(n.i,t),To(t,r,e)}function Jr(n,e){n.na&&ia(n.na,function(t,r){$(e,r,t)}),n.h&&ah({},function(t,r){$(e,r,t)})}function Rh(n,e,t){t=Math.min(n.j.length,t);var r=n.h?_e(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{Wp(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Sh(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Tr||Wl(),vr||(Tr(),vr=!0),la.add(e,n),n.A=0}}function Ea(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Kr(_e(n.Ma,n),Vh(n,n.A)),n.A++,!0)}w.Ma=function(){if(this.u=null,bh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Kr(_e(this.jb,this),n)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,we(10),gs(this),bh(this))};function wa(n){n.B!=null&&(b.clearTimeout(n.B),n.B=null)}function bh(n){n.g=new Qr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Qe(n.wa);$(e,"RID","rpc"),$(e,"SID",n.K),$(e,"AID",n.V),$(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&$(e,"TO",n.qa),$(e,"TYPE","xmlhttp"),Jr(n,e),n.o&&n.s&&ya(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=ds(Qe(e)),t.s=null,t.S=!0,rh(t,n)}w.ib=function(){this.v!=null&&(this.v=null,gs(this),Ea(this),we(19))};function Li(n){n.v!=null&&(b.clearTimeout(n.v),n.v=null)}function Ph(n,e){var t=null;if(n.g==e){Li(n),wa(n),n.g=null;var r=2}else if(Ao(n.i,e))t=e.F,gh(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=cs(),ge(r,new Zl(r,t)),ps(n)}else Sh(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&e_(n,e)||r==2&&Ea(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Mt(n,5);break;case 4:Mt(n,10);break;case 3:Mt(n,6);break;default:Mt(n,2)}}}function Vh(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Mt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=_e(n.pb,n);t||(t=new Bt("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Mi(t,"https"),ds(t)),Qp(t.toString(),r)}else we(2);n.H=0,n.h&&n.h.za(e),Dh(n),Ah(n)}w.pb=function(n){n?(this.l.info("Successfully pinged google.com"),we(2)):(this.l.info("Failed to ping google.com"),we(1))};function Dh(n){if(n.H=0,n.ma=[],n.h){const e=ph(n.i);(e.length!=0||n.j.length!=0)&&(Bc(n.ma,e),Bc(n.ma,n.j),n.i.i.length=0,na(n.j),n.j.length=0),n.h.ya()}}function Ch(n,e,t){var r=t instanceof Bt?Qe(t):new Bt(t);if(r.g!="")e&&(r.g=e+"."+r.g),Fi(r,r.m);else{var i=b.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Bt(null);r&&Mi(s,r),e&&(s.g=e),i&&Fi(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&$(r,t,e),$(r,"VER",n.ra),Jr(n,r),r}function xh(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new X(new Yr({ob:!0})):new X(n.va),e.Oa(n.J),e}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function Nh(){}w=Nh.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function Bi(){if(Pn&&!(10<=Number(fp)))throw Error("Environmental error: no available transport.")}Bi.prototype.g=function(n,e){return new De(n,e)};function De(n,e){ce.call(this),this.g=new vh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Er(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Er(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new $n(this)}ue(De,ce);De.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;we(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Ch(n,null,n.Y),ps(n)};De.prototype.close=function(){Ia(this.g)};De.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ua(n),n=t);e.j.push(new zp(e.fb++,n)),e.H==3&&ps(e)};De.prototype.N=function(){this.g.h=null,delete this.j,Ia(this.g),delete this.g,De.$.N.call(this)};function kh(n){ma.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ue(kh,ma);function Oh(){ga.call(this),this.status=1}ue(Oh,ga);function $n(n){this.g=n}ue($n,Nh);$n.prototype.Ba=function(){ge(this.g,"a")};$n.prototype.Aa=function(n){ge(this.g,new kh(n))};$n.prototype.za=function(n){ge(this.g,new Oh)};$n.prototype.ya=function(){ge(this.g,"b")};function t_(){this.blockSize=-1}function Oe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ue(Oe,t_);Oe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Zs(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Oe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Zs(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Zs(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Zs(this,r),i=0;break}}this.h=i,this.i+=e};Oe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function B(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var n_={};function Ta(n){return-128<=n&&128>n?lp(n,function(e){return new B([e|0],0>e?-1:0)}):new B([n|0],0>n?-1:0)}function Be(n){if(isNaN(n)||!isFinite(n))return Tn;if(0>n)return fe(Be(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Ro;return new B(e,0)}function Mh(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return fe(Mh(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Be(Math.pow(e,8)),r=Tn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Be(Math.pow(e,s)),r=r.R(s).add(Be(o))):(r=r.R(t),r=r.add(Be(o)))}return r}var Ro=4294967296,Tn=Ta(0),So=Ta(1),Yc=Ta(16777216);w=B.prototype;w.ea=function(){if(xe(this))return-fe(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Ro+r)*e,e*=Ro}return n};w.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ge(this))return"0";if(xe(this))return"-"+fe(this).toString(n);for(var e=Be(Math.pow(n,6)),t=this,r="";;){var i=Ui(t,e).g;t=qi(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Ge(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};w.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ge(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function xe(n){return n.h==-1}w.X=function(n){return n=qi(this,n),xe(n)?-1:Ge(n)?0:1};function fe(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new B(t,~n.h).add(So)}w.abs=function(){return xe(this)?fe(this):this};w.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new B(t,t[t.length-1]&-2147483648?-1:0)};function qi(n,e){return n.add(fe(e))}w.R=function(n){if(Ge(this)||Ge(n))return Tn;if(xe(this))return xe(n)?fe(this).R(fe(n)):fe(fe(this).R(n));if(xe(n))return fe(this.R(fe(n)));if(0>this.X(Yc)&&0>n.X(Yc))return Be(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,pi(t,2*r+2*i),t[2*r+2*i+1]+=s*c,pi(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,pi(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,pi(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new B(t,0)};function pi(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Jn(n,e){this.g=n,this.h=e}function Ui(n,e){if(Ge(e))throw Error("division by zero");if(Ge(n))return new Jn(Tn,Tn);if(xe(n))return e=Ui(fe(n),e),new Jn(fe(e.g),fe(e.h));if(xe(e))return e=Ui(n,fe(e)),new Jn(fe(e.g),e.h);if(30<n.g.length){if(xe(n)||xe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=So,r=e;0>=r.X(n);)t=Xc(t),r=Xc(r);var i=an(t,1),s=an(r,1);for(r=an(r,2),t=an(t,2);!Ge(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=an(r,1),t=an(t,1)}return e=qi(n,i.R(e)),new Jn(i,e)}for(i=Tn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Be(t),o=s.R(e);xe(o)||0<o.X(n);)t-=r,s=Be(t),o=s.R(e);Ge(s)&&(s=So),i=i.add(s),n=qi(n,o)}return new Jn(i,n)}w.gb=function(n){return Ui(this,n).h};w.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new B(t,this.h&n.h)};w.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new B(t,this.h|n.h)};w.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new B(t,this.h^n.h)};function Xc(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new B(t,n.h)}function an(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new B(i,n.h)}Bi.prototype.createWebChannel=Bi.prototype.g;De.prototype.send=De.prototype.u;De.prototype.open=De.prototype.m;De.prototype.close=De.prototype.close;us.NO_ERROR=0;us.TIMEOUT=8;us.HTTP_ERROR=6;eh.COMPLETE="complete";th.EventType=Wr;Wr.OPEN="a";Wr.CLOSE="b";Wr.ERROR="c";Wr.MESSAGE="d";ce.prototype.listen=ce.prototype.O;X.prototype.listenOnce=X.prototype.P;X.prototype.getLastError=X.prototype.Sa;X.prototype.getLastErrorCode=X.prototype.Ia;X.prototype.getStatus=X.prototype.da;X.prototype.getResponseJson=X.prototype.Wa;X.prototype.getResponseText=X.prototype.ja;X.prototype.send=X.prototype.ha;X.prototype.setWithCredentials=X.prototype.Oa;Oe.prototype.digest=Oe.prototype.l;Oe.prototype.reset=Oe.prototype.reset;Oe.prototype.update=Oe.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=Be;B.fromString=Mh;var r_=function(){return new Bi},i_=function(){return cs()},eo=us,s_=eh,o_=Jt,Jc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},a_=Yr,_i=th,c_=X,u_=Oe,vn=B;const Zc="@firebase/firestore";/**
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
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
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
 */const ht=new Xo("@firebase/firestore");function fn(){return ht.logLevel}function l_(n){ht.setLogLevel(n)}function _(n,...e){if(ht.logLevel<=N.DEBUG){const t=e.map(va);ht.debug(`Firestore (${zn}): ${n}`,...t)}}function ee(n,...e){if(ht.logLevel<=N.ERROR){const t=e.map(va);ht.error(`Firestore (${zn}): ${n}`,...t)}}function Me(n,...e){if(ht.logLevel<=N.WARN){const t=e.map(va);ht.warn(`Firestore (${zn}): ${n}`,...t)}}function va(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function A(n="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+n;throw ee(e),new Error(e)}function S(n,e){n||A()}function h_(n,e){n||A()}function E(n,e){return n}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ae{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Fh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(oe.UNAUTHENTICATED))}shutdown(){}}class f_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class m_{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ae,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ae)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(S(typeof r.accessToken=="string"),new Fh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string"),new oe(e)}}class g_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=oe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class p_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new g_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class __{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(S(typeof t.token=="string"),this.R=t.token,new __(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function I_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Lh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=I_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function P(n,e){return n<e?-1:n>e?1:0}function Vn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Bh(n){return n+"\0"}/**
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
 */class K{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new K(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class R{constructor(e){this.timestamp=e}static fromTimestamp(e){return new R(e)}static min(){return new R(new K(0,0))}static max(){return new R(new K(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pr{constructor(e,t,r){t===void 0?t=0:t>e.length&&A(),r===void 0?r=e.length-t:r>e.length-t&&A(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends Pr{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new O(t)}static emptyPath(){return new O([])}}const E_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends Pr{construct(e,t,r){return new j(e,t,r)}static isValidIdentifier(e){return E_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new j(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new p(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new p(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new j(t)}static emptyPath(){return new j([])}}/**
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
 */class y{constructor(e){this.path=e}static fromPath(e){return new y(O.fromString(e))}static fromName(e){return new y(O.fromString(e).popFirst(5))}static empty(){return new y(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new y(new O(e.slice()))}}/**
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
 */class $i{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function bo(n){return n.fields.find(e=>e.kind===2)}function Pt(n){return n.fields.filter(e=>e.kind!==2)}$i.UNKNOWN_ID=-1;class Ai{constructor(e,t){this.fieldPath=e,this.kind=t}}class Vr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Vr(0,Ce.min())}}function qh(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=R.fromTimestamp(r===1e9?new K(t+1,0):new K(t,r));return new Ce(i,y.empty(),e)}function Uh(n){return new Ce(n.readTime,n.key,-1)}class Ce{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ce(R.min(),y.empty(),-1)}static max(){return new Ce(R.max(),y.empty(),-1)}}function Aa(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=y.comparator(n.documentKey,e.documentKey),t!==0?t:P(n.largestBatchId,e.largestBatchId))}/**
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
 */const $h="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Tt(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==$h)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class _s{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ae,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new hr(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Ra(r.target.error);this.V.reject(new hr(e,i))}}static open(e,t,r,i){try{return new _s(t,e.transaction(i,r))}catch(s){throw new hr(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new T_(t)}}class ke{constructor(e,t,r){this.name=e,this.version=t,this.p=r,ke.S(uo())===12.2&&ee("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),Dt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!vl())return!1;if(ke.C())return!0;const e=uo(),t=ke.S(e),r=0<t&&t<10,i=ke.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new hr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new p(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new hr(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=_s.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class w_{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Dt(this.k.delete())}}class hr extends p{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function vt(n){return n.name==="IndexedDbTransactionError"}class T_{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Dt(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),Dt(this.store.add(e))}get(e){return Dt(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),Dt(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),Dt(this.store.count())}W(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.G(i,t)}Z(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=Ra(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new w_(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Dt(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Ra(r.target.error);t(i)}})}let eu=!1;function Ra(n){const e=ke.S(uo());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eu||(eu=!0,setTimeout(()=>{throw r},0)),r}}return n}class v_{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(t){vt(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Tt(t)}await this.ee(6e4)})}}class A_{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ne(t,e))}ne(e,t){const r=new Set;let i=t,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}re(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ie(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Uh(s);Aa(o,r)>0&&(r=o)}),new Ce(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}be._e=-1;function Zr(n){return n==null}function Dr(n){return n===0&&1/n==-1/0}function jh(n){return typeof n=="number"&&Number.isInteger(n)&&!Dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Te(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=tu(e)),e=R_(n.get(t),e);return tu(e)}function R_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function tu(n){return n+""}function qe(n){const e=n.length;if(S(e>=2),e===2)return S(n.charAt(0)===""&&n.charAt(1)===""),O.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&A(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:A()}s=o+2}return new O(r)}/**
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
 */const nu=["userId","batchId"];/**
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
 */function Ri(n,e){return[n,Te(e)]}function Gh(n,e,t){return[n,Te(e),t]}const S_={},b_=["prefixPath","collectionGroup","readTime","documentId"],P_=["prefixPath","collectionGroup","documentId"],V_=["collectionGroup","readTime","prefixPath","documentId"],D_=["canonicalId","targetId"],C_=["targetId","path"],x_=["path","targetId"],N_=["collectionId","parent"],k_=["indexId","uid"],O_=["uid","sequenceNumber"],M_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],F_=["indexId","uid","orderedDocumentKey"],L_=["userId","collectionPath","documentId"],B_=["userId","collectionPath","largestBatchId"],q_=["userId","collectionGroup","largestBatchId"],Kh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],U_=[...Kh,"documentOverlays"],Wh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Qh=Wh,$_=[...Qh,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Po extends zh{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function le(n,e){const t=E(n);return ke.M(t.ae,e)}/**
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
 */function ru(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class U{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new U(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new U(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yi(this.root,e,this.comparator,!0)}}class yi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??de.RED,this.left=i??de.EMPTY,this.right=s??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new de(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return de.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,r,i,s){return this}insert(e,t,r){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class q{constructor(e){this.comparator=e,this.data=new U(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iu(this.data.getIterator())}getIteratorFrom(e){return new iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof q)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new q(this.comparator);return t.data=e,t}}class iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function cn(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Pe{constructor(e){this.fields=e,e.sort(j.comparator)}static empty(){return new Pe([])}unionWith(e){let t=new q(j.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Pe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Yh("Invalid base64 string: "+s):s}}(e);return new ie(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const j_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dt(n){if(S(!!n),typeof n=="string"){let e=0;const t=j_.exec(n);if(S(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Y(n.seconds),nanos:Y(n.nanos)}}function Y(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ft(n){return typeof n=="string"?ie.fromBase64String(n):ie.fromUint8Array(n)}/**
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
 */function ys(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Sa(n){const e=n.mapValue.fields.__previous_value__;return ys(e)?Sa(e):e}function Cr(n){const e=dt(n.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}/**
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
 */class G_{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class mt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new mt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const st={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Si={nullValue:"NULL_VALUE"};function $t(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ys(n)?4:Xh(n)?9007199254740991:10:A()}function ze(n,e){if(n===e)return!0;const t=$t(n);if(t!==$t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cr(n).isEqual(Cr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=dt(i.timestampValue),a=dt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return ft(i.bytesValue).isEqual(ft(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Y(i.geoPointValue.latitude)===Y(s.geoPointValue.latitude)&&Y(i.geoPointValue.longitude)===Y(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Y(i.integerValue)===Y(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Y(i.doubleValue),a=Y(s.doubleValue);return o===a?Dr(o)===Dr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Vn(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ru(o)!==ru(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ze(o[c],a[c])))return!1;return!0}(n,e);default:return A()}}function xr(n,e){return(n.values||[]).find(t=>ze(t,e))!==void 0}function gt(n,e){if(n===e)return 0;const t=$t(n),r=$t(e);if(t!==r)return P(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return P(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Y(s.integerValue||s.doubleValue),c=Y(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return su(n.timestampValue,e.timestampValue);case 4:return su(Cr(n),Cr(e));case 5:return P(n.stringValue,e.stringValue);case 6:return function(s,o){const a=ft(s),c=ft(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=P(a[u],c[u]);if(l!==0)return l}return P(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=P(Y(s.latitude),Y(o.latitude));return a!==0?a:P(Y(s.longitude),Y(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=gt(a[u],c[u]);if(l)return l}return P(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===st.mapValue&&o===st.mapValue)return 0;if(s===st.mapValue)return 1;if(o===st.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=P(c[h],l[h]);if(d!==0)return d;const f=gt(a[c[h]],u[l[h]]);if(f!==0)return f}return P(c.length,l.length)}(n.mapValue,e.mapValue);default:throw A()}}function su(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return P(n,e);const t=dt(n),r=dt(e),i=P(t.seconds,r.seconds);return i!==0?i:P(t.nanos,r.nanos)}function Dn(n){return Vo(n)}function Vo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=dt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ft(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Vo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vo(t.fields[o])}`;return i+"}"}(n.mapValue):A()}function zt(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Do(n){return!!n&&"integerValue"in n}function Nr(n){return!!n&&"arrayValue"in n}function ou(n){return!!n&&"nullValue"in n}function au(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bi(n){return!!n&&"mapValue"in n}function dr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=dr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=dr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Xh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function K_(n){return"nullValue"in n?Si:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?zt(mt.empty(),y.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function W_(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?zt(mt.empty(),y.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?st:A()}function cu(n,e){const t=gt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function uu(n,e){const t=gt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class me{constructor(e){this.value=e}static empty(){return new me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dr(t)}setAll(e){let t=j.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=dr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());bi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];bi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Zt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new me(dr(this.value))}}function Jh(n){const e=[];return Zt(n.fields,(t,r)=>{const i=new j([t]);if(bi(r)){const s=Jh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pe(e)}/**
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
 */class z{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new z(e,0,R.min(),R.min(),R.min(),me.empty(),0)}static newFoundDocument(e,t,r,i){return new z(e,1,t,R.min(),r,i,0)}static newNoDocument(e,t){return new z(e,2,t,R.min(),R.min(),me.empty(),0)}static newUnknownDocument(e,t){return new z(e,3,t,R.min(),R.min(),me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pt{constructor(e,t){this.position=e,this.inclusive=t}}function lu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=y.comparator(y.fromName(o.referenceValue),t.key):r=gt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class kr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Q_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zh{}class x extends Zh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new H_(e,t,r):t==="array-contains"?new J_(e,r):t==="in"?new sd(e,r):t==="not-in"?new Z_(e,r):t==="array-contains-any"?new ey(e,r):new x(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Y_(e,r):new X_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(gt(t,this.value)):t!==null&&$t(this.value)===$t(t)&&this.matchesComparison(gt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class L extends Zh{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new L(e,t)}matches(e){return Cn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Cn(n){return n.op==="and"}function Co(n){return n.op==="or"}function ba(n){return ed(n)&&Cn(n)}function ed(n){for(const e of n.filters)if(e instanceof L)return!1;return!0}function xo(n){if(n instanceof x)return n.field.canonicalString()+n.op.toString()+Dn(n.value);if(ba(n))return n.filters.map(e=>xo(e)).join(",");{const e=n.filters.map(t=>xo(t)).join(",");return`${n.op}(${e})`}}function td(n,e){return n instanceof x?function(r,i){return i instanceof x&&r.op===i.op&&r.field.isEqual(i.field)&&ze(r.value,i.value)}(n,e):n instanceof L?function(r,i){return i instanceof L&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&td(o,i.filters[a]),!0):!1}(n,e):void A()}function nd(n,e){const t=n.filters.concat(e);return L.create(t,n.op)}function rd(n){return n instanceof x?function(t){return`${t.field.canonicalString()} ${t.op} ${Dn(t.value)}`}(n):n instanceof L?function(t){return t.op.toString()+" {"+t.getFilters().map(rd).join(" ,")+"}"}(n):"Filter"}class H_ extends x{constructor(e,t,r){super(e,t,r),this.key=y.fromName(r.referenceValue)}matches(e){const t=y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Y_ extends x{constructor(e,t){super(e,"in",t),this.keys=id("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class X_ extends x{constructor(e,t){super(e,"not-in",t),this.keys=id("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function id(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>y.fromName(r.referenceValue))}class J_ extends x{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Nr(t)&&xr(t.arrayValue,this.value)}}class sd extends x{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xr(this.value.arrayValue,t)}}class Z_ extends x{constructor(e,t){super(e,"not-in",t)}matches(e){if(xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!xr(this.value.arrayValue,t)}}class ey extends x{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Nr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>xr(this.value.arrayValue,r))}}/**
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
 */class ty{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function No(n,e=null,t=[],r=[],i=null,s=null,o=null){return new ty(n,e,t,r,i,s,o)}function jt(n){const e=E(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Dn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Dn(r)).join(",")),e.ce=t}return e.ce}function ei(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Q_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!td(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!hu(n.startAt,e.startAt)&&hu(n.endAt,e.endAt)}function zi(n){return y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ji(n,e){return n.filters.filter(t=>t instanceof x&&t.field.isEqual(e))}function du(n,e,t){let r=Si,i=!0;for(const s of ji(n,e)){let o=Si,a=!0;switch(s.op){case"<":case"<=":o=K_(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Si}cu({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];cu({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function fu(n,e,t){let r=st,i=!0;for(const s of ji(n,e)){let o=st,a=!0;switch(s.op){case">=":case">":o=W_(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=st}uu({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];uu({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Ye{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function od(n,e,t,r,i,s,o,a){return new Ye(n,e,t,r,i,s,o,a)}function jn(n){return new Ye(n)}function mu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pa(n){return n.collectionGroup!==null}function An(n){const e=E(n);if(e.le===null){e.le=[];const t=new Set;for(const s of e.explicitOrderBy)e.le.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new q(j.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.le.push(new kr(s,r))}),t.has(j.keyField().canonicalString())||e.le.push(new kr(j.keyField(),r))}return e.le}function ve(n){const e=E(n);return e.he||(e.he=ny(e,An(n))),e.he}function ny(n,e){if(n.limitType==="F")return No(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kr(i.field,s)});const t=n.endAt?new pt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pt(n.startAt.position,n.startAt.inclusive):null;return No(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ko(n,e){const t=n.filters.concat([e]);return new Ye(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Gi(n,e,t){return new Ye(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ti(n,e){return ei(ve(n),ve(e))&&n.limitType===e.limitType}function ad(n){return`${jt(ve(n))}|lt:${n.limitType}`}function mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>rd(i)).join(", ")}]`),Zr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Dn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Dn(i)).join(",")),`Target(${r})`}(ve(n))}; limitType=${n.limitType})`}function ni(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of An(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=lu(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,An(r),i)||r.endAt&&!function(o,a,c){const u=lu(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,An(r),i))}(n,e)}function cd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ud(n){return(e,t)=>{let r=!1;for(const i of An(n)){const s=ry(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ry(n,e,t){const r=n.field.isKeyField()?y.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?gt(c,u):A()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
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
 */class At{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Hh(this.inner)}size(){return this.innerSize}}/**
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
 */const iy=new U(y.comparator);function Ve(){return iy}const ld=new U(y.comparator);function or(...n){let e=ld;for(const t of n)e=e.insert(t.key,t);return e}function hd(n){let e=ld;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ue(){return fr()}function dd(){return fr()}function fr(){return new At(n=>n.toString(),(n,e)=>n.isEqual(e))}const sy=new U(y.comparator),oy=new q(y.comparator);function V(...n){let e=oy;for(const t of n)e=e.add(t);return e}const ay=new q(P);function Va(){return ay}/**
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
 */function fd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(e)?"-0":e}}function md(n){return{integerValue:""+n}}function gd(n,e){return jh(e)?md(e):fd(n,e)}/**
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
 */class Is{constructor(){this._=void 0}}function cy(n,e,t){return n instanceof xn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ys(s)&&(s=Sa(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Gt?_d(n,e):n instanceof Kt?yd(n,e):function(i,s){const o=pd(i,s),a=gu(o)+gu(i.Ie);return Do(o)&&Do(i.Ie)?md(a):fd(i.serializer,a)}(n,e)}function uy(n,e,t){return n instanceof Gt?_d(n,e):n instanceof Kt?yd(n,e):t}function pd(n,e){return n instanceof Nn?function(r){return Do(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xn extends Is{}class Gt extends Is{constructor(e){super(),this.elements=e}}function _d(n,e){const t=Id(e);for(const r of n.elements)t.some(i=>ze(i,r))||t.push(r);return{arrayValue:{values:t}}}class Kt extends Is{constructor(e){super(),this.elements=e}}function yd(n,e){let t=Id(e);for(const r of n.elements)t=t.filter(i=>!ze(i,r));return{arrayValue:{values:t}}}class Nn extends Is{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function gu(n){return Y(n.integerValue||n.doubleValue)}function Id(n){return Nr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ri{constructor(e,t){this.field=e,this.transform=t}}function ly(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Gt&&i instanceof Gt||r instanceof Kt&&i instanceof Kt?Vn(r.elements,i.elements,ze):r instanceof Nn&&i instanceof Nn?ze(r.Ie,i.Ie):r instanceof xn&&i instanceof xn}(n.transform,e.transform)}class hy{constructor(e,t){this.version=e,this.transformResults=t}}class G{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new G}static exists(e){return new G(void 0,e)}static updateTime(e){return new G(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Es{}function Ed(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Kn(n.key,G.none()):new Gn(n.key,n.data,G.none());{const t=n.data,r=me.empty();let i=new q(j.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xe(n.key,r,new Pe(i.toArray()),G.none())}}function dy(n,e,t){n instanceof Gn?function(i,s,o){const a=i.value.clone(),c=_u(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Xe?function(i,s,o){if(!Pi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=_u(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(wd(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function mr(n,e,t,r){return n instanceof Gn?function(s,o,a,c){if(!Pi(s.precondition,o))return a;const u=s.value.clone(),l=yu(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof Xe?function(s,o,a,c){if(!Pi(s.precondition,o))return a;const u=yu(s.fieldTransforms,c,o),l=o.data;return l.setAll(wd(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return Pi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function fy(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=pd(r.transform,i||null);s!=null&&(t===null&&(t=me.empty()),t.set(r.field,s))}return t||null}function pu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vn(r,i,(s,o)=>ly(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gn extends Es{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xe extends Es{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function _u(n,e,t){const r=new Map;S(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,uy(o,a,t[i]))}return r}function yu(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,cy(s,o,e))}return r}class Kn extends Es{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Da extends Es{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ca{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&dy(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=mr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=mr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=dd();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Ed(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),V())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,(t,r)=>pu(t,r))&&Vn(this.baseMutations,e.baseMutations,(t,r)=>pu(t,r))}}class xa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){S(e.mutations.length===r.length);let i=function(){return sy}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xa(e,t,r,i)}}/**
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
 */class Na{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class my{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ne,k;function Td(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function vd(n){if(n===void 0)return ee("GRPC error has no .code"),g.UNKNOWN;switch(n){case ne.OK:return g.OK;case ne.CANCELLED:return g.CANCELLED;case ne.UNKNOWN:return g.UNKNOWN;case ne.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case ne.INTERNAL:return g.INTERNAL;case ne.UNAVAILABLE:return g.UNAVAILABLE;case ne.UNAUTHENTICATED:return g.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case ne.NOT_FOUND:return g.NOT_FOUND;case ne.ALREADY_EXISTS:return g.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return g.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case ne.ABORTED:return g.ABORTED;case ne.OUT_OF_RANGE:return g.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return g.UNIMPLEMENTED;case ne.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(k=ne||(ne={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const gy=new vn([4294967295,4294967295],0);function Iu(n){const e=Ad().encode(n),t=new u_;return t.update(e),new Uint8Array(t.digest())}function Eu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vn([t,r],0),new vn([i,s],0)]}class ka{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ar(`Invalid padding: ${t}`);if(r<0)throw new ar(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ar(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ar(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=vn.fromNumber(this.Te)}de(e,t,r){let i=e.add(t.multiply(vn.fromNumber(r)));return i.compare(gy)===1&&(i=new vn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Iu(e),[r,i]=Eu(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ka(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Iu(e),[r,i]=Eu(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ii{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,si.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ii(R.min(),i,new U(P),Ve(),V())}}class si{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new si(r,t,V(),V(),V())}}/**
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
 */class Vi{constructor(e,t,r,i){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=i}}class Rd{constructor(e,t){this.targetId=e,this.fe=t}}class Sd{constructor(e,t,r=ie.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class wu{constructor(){this.ge=0,this.pe=vu(),this.ye=ie.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=V(),t=V(),r=V();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:A()}}),new si(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=vu()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class py{constructor(e){this.Le=e,this.ke=new Map,this.qe=Ve(),this.Qe=Tu(),this.Ke=new U(P)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:A()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.fe.count,i=this.Ye(t);if(i){const s=i.target;if(zi(s))if(r===0){const o=new y(s.path);this.We(t,o,z.newNoDocument(o,R.min()))}else S(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=ft(r).toUint8Array()}catch(c){if(c instanceof Yh)return Me("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ka(o,i,s)}catch(c){return Me(c instanceof ar?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&zi(a.target)){const c=new y(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,z.newNoDocument(c,e))}s.De&&(t.set(o,s.ve()),s.Fe())}});let r=V();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new ii(e,t,this.Ke,this.qe,r);return this.qe=Ve(),this.Qe=Tu(),this.Ke=new U(P),i}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new wu,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new q(P),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new wu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Tu(){return new U(y.comparator)}function vu(){return new U(y.comparator)}const _y=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Iy=(()=>({and:"AND",or:"OR"}))();class Ey{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Oo(n,e){return n.useProto3Json||Zr(e)?e:{value:e}}function kn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function wy(n,e){return kn(n,e.toTimestamp())}function te(n){return S(!!n),R.fromTimestamp(function(t){const r=dt(t);return new K(r.seconds,r.nanos)}(n))}function Oa(n,e){return function(r){return new O(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Pd(n){const e=O.fromString(n);return S(Fd(e)),e}function Or(n,e){return Oa(n.databaseId,e.path)}function $e(n,e){const t=Pd(e);if(t.get(1)!==n.databaseId.projectId)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new y(Dd(t))}function Mo(n,e){return Oa(n.databaseId,e)}function Vd(n){const e=Pd(n);return e.length===4?O.emptyPath():Dd(e)}function Mr(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dd(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Au(n,e,t){return{name:Or(n,e),fields:t.value.mapValue.fields}}function Cd(n,e,t){const r=$e(n,e.name),i=te(e.updateTime),s=e.createTime?te(e.createTime):R.min(),o=new me({mapValue:{fields:e.fields}}),a=z.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Ty(n,e){return"found"in e?function(r,i){S(!!i.found),i.found.name,i.found.updateTime;const s=$e(r,i.found.name),o=te(i.found.updateTime),a=i.found.createTime?te(i.found.createTime):R.min(),c=new me({mapValue:{fields:i.found.fields}});return z.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){S(!!i.missing),S(!!i.readTime);const s=$e(r,i.missing),o=te(i.readTime);return z.newNoDocument(s,o)}(n,e):A()}function vy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(S(l===void 0||typeof l=="string"),ie.fromBase64String(l||"")):(S(l===void 0||l instanceof Uint8Array),ie.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:vd(u.code);return new p(l,u.message||"")}(o);t=new Sd(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$e(n,r.document.name),s=te(r.document.updateTime),o=r.document.createTime?te(r.document.createTime):R.min(),a=new me({mapValue:{fields:r.document.fields}}),c=z.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Vi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$e(n,r.document),s=r.readTime?te(r.readTime):R.min(),o=z.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Vi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$e(n,r.document),s=r.removedTargetIds||[];t=new Vi([],s,i,null)}else{if(!("filter"in e))return A();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new my(i,s),a=r.targetId;t=new Rd(a,o)}}return t}function Fr(n,e){let t;if(e instanceof Gn)t={update:Au(n,e.key,e.value)};else if(e instanceof Kn)t={delete:Or(n,e.key)};else if(e instanceof Xe)t={update:Au(n,e.key,e.data),updateMask:Vy(e.fieldMask)};else{if(!(e instanceof Da))return A();t={verify:Or(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Kt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,e.precondition)),t}function Fo(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?G.updateTime(te(s.updateTime)):s.exists!==void 0?G.exists(s.exists):G.none()}(e.currentDocument):G.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)S(a.setToServerValue==="REQUEST_TIME"),c=new xn;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Gt(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Kt(l)}else"increment"in a?c=new Nn(o,a.increment):A();const u=j.fromServerFormat(a.fieldPath);return new ri(u,c)}(n,i)):[];if(e.update){e.update.name;const i=$e(n,e.update.name),s=new me({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Pe(u.map(l=>j.fromServerFormat(l)))}(e.updateMask);return new Xe(i,s,o,t,r)}return new Gn(i,s,t,r)}if(e.delete){const i=$e(n,e.delete);return new Kn(i,t)}if(e.verify){const i=$e(n,e.verify);return new Da(i,t)}return A()}function Ay(n,e){return n&&n.length>0?(S(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?te(i.updateTime):te(s);return o.isEqual(R.min())&&(o=te(s)),new hy(o,i.transformResults||[])}(t,e))):[]}function xd(n,e){return{documents:[Mo(n,e.path)]}}function Nd(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Mo(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Mo(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Md(L.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:gn(h.field),direction:Sy(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Oo(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function kd(n){let e=Vd(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){S(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=Od(h);return d instanceof L&&ba(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(I){return new kr(pn(I.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Zr(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new pt(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new pt(f,d)}(t.endAt)),od(e,i,o,s,a,"F",c,u)}function Ry(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Od(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=pn(t.unaryFilter.field);return x.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pn(t.unaryFilter.field);return x.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pn(t.unaryFilter.field);return x.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pn(t.unaryFilter.field);return x.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(t){return x.create(pn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return L.create(t.compositeFilter.filters.map(r=>Od(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(n):A()}function Sy(n){return _y[n]}function by(n){return yy[n]}function Py(n){return Iy[n]}function gn(n){return{fieldPath:n.canonicalString()}}function pn(n){return j.fromServerFormat(n.fieldPath)}function Md(n){return n instanceof x?function(t){if(t.op==="=="){if(au(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(ou(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(au(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(ou(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:by(t.op),value:t.value}}}(n):n instanceof L?function(t){const r=t.getFilters().map(i=>Md(i));return r.length===1?r[0]:{compositeFilter:{op:Py(t.op),filters:r}}}(n):A()}function Vy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Fd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ke{constructor(e,t,r,i,s=R.min(),o=R.min(),a=ie.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ke(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ld{constructor(e){this.ut=e}}function Dy(n,e){let t;if(e.document)t=Cd(n.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=y.fromSegments(e.noDocument.path),i=Qt(e.noDocument.readTime);t=z.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return A();{const r=y.fromSegments(e.unknownDocument.path),i=Qt(e.unknownDocument.version);t=z.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new K(i[0],i[1]);return R.fromTimestamp(s)}(e.readTime)),t}function Ru(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ki(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Or(s,o.key),fields:o.data.value.mapValue.fields,updateTime:kn(s,o.version.toTimestamp()),createTime:kn(s,o.createTime.toTimestamp())}}(n.ut,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Wt(e.version)};else{if(!e.isUnknownDocument())return A();r.unknownDocument={path:t.path.toArray(),version:Wt(e.version)}}return r}function Ki(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Wt(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Qt(n){const e=new K(n.seconds,n.nanoseconds);return R.fromTimestamp(e)}function Ct(n,e){const t=(e.baseMutations||[]).map(s=>Fo(n.ut,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Fo(n.ut,s)),i=K.fromMillis(e.localWriteTimeMs);return new Ca(e.batchId,i,t,r)}function cr(n){const e=Qt(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Qt(n.lastLimboFreeSnapshotVersion):R.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return S(s.documents.length===1),ve(jn(Vd(s.documents[0])))}(n.query):function(s){return ve(kd(s))}(n.query),new Ke(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ie.fromBase64String(n.resumeToken))}function Bd(n,e){const t=Wt(e.snapshotVersion),r=Wt(e.lastLimboFreeSnapshotVersion);let i;i=zi(e.target)?xd(n.ut,e.target):Nd(n.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:jt(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ma(n){const e=kd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gi(e,e.limit,"L"):e}function to(n,e){return new Na(e.largestBatchId,Fo(n.ut,e.overlayMutation))}function Su(n,e){const t=e.path.lastSegment();return[n,Te(e.path.popLast()),t]}function bu(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Wt(r.readTime),documentKey:Te(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class Cy{getBundleMetadata(e,t){return Pu(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Qt(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Pu(e).put(function(i){return{bundleId:i.id,createTime:Wt(te(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Vu(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Ma(s.bundledQuery),readTime:Qt(s.readTime)}}(r)})}saveNamedQuery(e,t){return Vu(e).put(function(i){return{name:i.name,readTime:Wt(te(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Pu(n){return le(n,"bundles")}function Vu(n){return le(n,"namedQueries")}/**
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
 */class ws{constructor(e,t){this.serializer=e,this.userId=t}static ct(e,t){const r=t.uid||"";return new ws(e,r)}getOverlay(e,t){return Zn(e).get(Su(this.userId,t)).next(r=>r?to(this.serializer,r):null)}getOverlays(e,t){const r=Ue();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Na(t,o);i.push(this.lt(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Te(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Zn(e).H("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Ue(),s=Te(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Zn(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=to(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Ue();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Zn(e).Y({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=to(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}lt(e,t){return Zn(e).put(function(i,s,o){const[a,c,u]=Su(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Fr(i.ut,o.mutation)}}(this.serializer,this.userId,t))}}function Zn(n){return le(n,"documentOverlays")}/**
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
 */class xt{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(Y(e.integerValue));else if("doubleValue"in e){const r=Y(e.doubleValue);isNaN(r)?this.Tt(t,13):(this.Tt(t,15),Dr(r)?t.Et(0):t.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(t,20),typeof r=="string"?t.dt(r):(t.dt(`${r.seconds||""}`),t.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(ft(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(t,45),t.Et(r.latitude||0),t.Et(r.longitude||0)}else"mapValue"in e?Xh(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):A()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const r=e.fields||{};this.Tt(t,55);for(const i of Object.keys(r))this.At(i,t),this.Pt(r[i],t)}yt(e,t){const r=e.values||[];this.Tt(t,50);for(const i of r)this.Pt(i,t)}ft(e,t){this.Tt(t,37),y.fromName(e).path.forEach(r=>{this.Tt(t,60),this.wt(r,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}xt.St=new xt;function xy(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Du(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=xy(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class Ny{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Dt(r.value),r=t.next();this.Ct()}vt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=t.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const t=this.Bt(e),r=Du(t);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}kt(e){const t=this.Bt(e),r=Du(t);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Dt(e){const t=255&e;t===0?(this.Qt(0),this.Qt(255)):t===255?(this.Qt(255),this.Qt(0)):this.Qt(t)}Ft(e){const t=255&e;t===0?(this.$t(0),this.$t(255)):t===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class ky{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class Oy{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class er{constructor(){this.Wt=new Ny,this.Gt=new ky(this.Wt),this.zt=new Oy(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
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
 */class Nt{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Nt(this.indexId,this.documentKey,this.arrayValue,r)}}function Ze(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Cu(n.arrayValue,e.arrayValue),t!==0?t:(t=Cu(n.directionalValue,e.directionalValue),t!==0?t:y.comparator(n.documentKey,e.documentKey)))}function Cu(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class xu{constructor(e){this.Jt=new q((t,r)=>j.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(S(e.collectionGroup===this.collectionId),this.Xt)return!1;const t=bo(e);if(t!==void 0&&!this.tn(t))return!1;const r=Pt(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const c=r[s];if(!this.nn(a,c)||!this.rn(this.Yt[o++],c))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new q(j.comparator);const t=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ai(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ai(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ai(r.field,r.dir==="asc"?0:1)));return new $i($i.UNKNOWN_ID,this.collectionId,t,Vr.empty())}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function qd(n){var e,t;if(S(n instanceof x||n instanceof L),n instanceof x){if(n instanceof sd){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>x.create(n.field,"==",s)))||[];return L.create(i,"or")}return n}const r=n.filters.map(i=>qd(i));return L.create(r,n.op)}function My(n){if(n.getFilters().length===0)return[];const e=qo(qd(n));return S(Ud(e)),Lo(e)||Bo(e)?[e]:e.getFilters()}function Lo(n){return n instanceof x}function Bo(n){return n instanceof L&&ba(n)}function Ud(n){return Lo(n)||Bo(n)||function(t){if(t instanceof L&&Co(t)){for(const r of t.getFilters())if(!Lo(r)&&!Bo(r))return!1;return!0}return!1}(n)}function qo(n){if(S(n instanceof x||n instanceof L),n instanceof x)return n;if(n.filters.length===1)return qo(n.filters[0]);const e=n.filters.map(r=>qo(r));let t=L.create(e,n.op);return t=Wi(t),Ud(t)?t:(S(t instanceof L),S(Cn(t)),S(t.filters.length>1),t.filters.reduce((r,i)=>Fa(r,i)))}function Fa(n,e){let t;return S(n instanceof x||n instanceof L),S(e instanceof x||e instanceof L),t=n instanceof x?e instanceof x?function(i,s){return L.create([i,s],"and")}(n,e):Nu(n,e):e instanceof x?Nu(e,n):function(i,s){if(S(i.filters.length>0&&s.filters.length>0),Cn(i)&&Cn(s))return nd(i,s.getFilters());const o=Co(i)?i:s,a=Co(i)?s:i,c=o.filters.map(u=>Fa(u,a));return L.create(c,"or")}(n,e),Wi(t)}function Nu(n,e){if(Cn(e))return nd(e,n.getFilters());{const t=e.filters.map(r=>Fa(n,r));return L.create(t,"or")}}function Wi(n){if(S(n instanceof x||n instanceof L),n instanceof x)return n;const e=n.getFilters();if(e.length===1)return Wi(e[0]);if(ed(n))return n;const t=e.map(i=>Wi(i)),r=[];return t.forEach(i=>{i instanceof x?r.push(i):i instanceof L&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:L.create(r,n.op)}/**
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
 */class Fy{constructor(){this.on=new La}addToCollectionParentIndex(e,t){return this.on.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}deleteAllFieldIndexes(e){return m.resolve()}createTargetIndexes(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Ce.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Ce.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class La{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new q(O.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new q(O.comparator)).toArray()}}/**
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
 */const Ii=new Uint8Array(0);class Ly{constructor(e,t){this.user=e,this.databaseId=t,this._n=new La,this.an=new At(r=>jt(r),(r,i)=>ei(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this._n.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this._n.add(t)});const s={collectionId:r,parent:Te(i)};return ku(e).put(s)}return m.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Bh(t),""],!1,!0);return ku(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(qe(o.parent))}return r})}addFieldIndex(e,t){const r=tr(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=ln(e);return s.next(a=>{o.put(bu(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=tr(e),i=ln(e),s=un(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=tr(e),r=un(e),i=ln(e);return t.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,t){return m.forEach(this.un(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new xu(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=un(e);let i=!0;const s=new Map;return m.forEach(this.un(t),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=V();const a=[];return m.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(C){return`id=${C.indexId}|cg=${C.collectionGroup}|f=${C.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(c)} to execute ${jt(t)}`);const l=function(C,Q){const H=bo(Q);if(H===void 0)return null;for(const Z of ji(C,H.fieldPath))switch(Z.op){case"array-contains-any":return Z.value.arrayValue.values||[];case"array-contains":return[Z.value]}return null}(u,c),h=function(C,Q){const H=new Map;for(const Z of Pt(Q))for(const Re of ji(C,Z.fieldPath))switch(Re.op){case"==":case"in":H.set(Z.fieldPath.canonicalString(),Re.value);break;case"not-in":case"!=":return H.set(Z.fieldPath.canonicalString(),Re.value),Array.from(H.values())}return null}(u,c),d=function(C,Q){const H=[];let Z=!0;for(const Re of Pt(Q)){const sn=Re.kind===0?du(C,Re.fieldPath,C.startAt):fu(C,Re.fieldPath,C.startAt);H.push(sn.value),Z&&(Z=sn.inclusive)}return new pt(H,Z)}(u,c),f=function(C,Q){const H=[];let Z=!0;for(const Re of Pt(Q)){const sn=Re.kind===0?fu(C,Re.fieldPath,C.endAt):du(C,Re.fieldPath,C.endAt);H.push(sn.value),Z&&(Z=sn.inclusive)}return new pt(H,Z)}(u,c),I=this.ln(c,u,d),T=this.ln(c,u,f),v=this.hn(c,u,h),D=this.Pn(c.indexId,l,I,d.inclusive,T,f.inclusive,v);return m.forEach(D,F=>r.j(F,t.limit).next(C=>{C.forEach(Q=>{const H=y.fromSegments(Q.documentKey);o.has(H)||(o=o.add(H),a.push(H))})}))}).next(()=>a)}return m.resolve(null)})}un(e){let t=this.an.get(e);return t||(e.filters.length===0?t=[e]:t=My(L.create(e.filters,"and")).map(r=>No(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,t),t)}Pn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.In(t[h/u]):Ii,f=this.Tn(e,d,r[h%u],i),I=this.En(e,d,s[h%u],o),T=a.map(v=>this.Tn(e,d,v,!0));l.push(...this.createRange(f,I,T))}return l}Tn(e,t,r,i){const s=new Nt(e,y.empty(),t,r);return i?s:s.Ht()}En(e,t,r,i){const s=new Nt(e,y.empty(),t,r);return i?s.Ht():s}cn(e,t){const r=new xu(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.un(t);return m.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new q(j.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}dn(e,t){const r=new er;for(const i of Pt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);xt.St.ht(s,o)}return r.Ut()}In(e){const t=new er;return xt.St.ht(e,t.jt(0)),t.Ut()}An(e,t){const r=new er;return xt.St.ht(zt(this.databaseId,t),r.jt(function(s){const o=Pt(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,t,r){if(r===null)return[];let i=[];i.push(new er);let s=0;for(const o of Pt(e)){const a=r[s++];for(const c of i)if(this.Rn(t,o.fieldPath)&&Nr(a))i=this.Vn(i,o,a);else{const u=c.jt(o.kind);xt.St.ht(a,u)}}return this.mn(i)}ln(e,t,r){return this.hn(e,t,r.position)}mn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Ut();return t}Vn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new er;c.seed(a.Ut()),xt.St.ht(o,c.jt(t.kind)),s.push(c)}return s}Rn(e,t){return!!e.filters.find(r=>r instanceof x&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=tr(e),i=ln(e);return(t?r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.W()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Vr(h.sequenceNumber,new Ce(Qt(h.readTime),new y(qe(h.documentKey)),h.largestBatchId)):Vr.empty(),f=l.fields.map(([I,T])=>new Ai(j.fromServerFormat(I),T));return new $i(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:P(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=tr(e),s=ln(e);return this.fn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>s.put(bu(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.gn(e,i,c).next(u=>{const l=this.pn(s,c);return u.isEqual(l)?m.resolve():this.yn(e,s,c,u,l)}))))})}wn(e,t,r,i){return un(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,t.key),documentKey:t.key.path.toArray()})}Sn(e,t,r,i){return un(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,t.key),t.key.path.toArray()])}gn(e,t,r){const i=un(e);let s=new q(Ze);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,t)])},(o,a)=>{s=s.add(new Nt(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,t){let r=new q(Ze);const i=this.dn(t,e);if(i==null)return r;const s=bo(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Nr(o))for(const a of o.arrayValue.values||[])r=r.add(new Nt(t.indexId,e.key,this.In(a),i))}else r=r.add(new Nt(t.indexId,e.key,Ii,i));return r}yn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),I=u.getIterator();let T=cn(f),v=cn(I);for(;T||v;){let D=!1,F=!1;if(T&&v){const C=l(T,v);C<0?F=!0:C>0&&(D=!0)}else T!=null?F=!0:D=!0;D?(h(v),v=cn(I)):F?(d(T),T=cn(f)):(T=cn(f),v=cn(I))}}(i,s,Ze,a=>{o.push(this.wn(e,t,r,a))},a=>{o.push(this.Sn(e,t,r,a))}),m.waitFor(o)}fn(e){let t=1;return ln(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Ze(o,a)).filter((o,a,c)=>!a||Ze(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ze(o,e),c=Ze(o,t);if(a===0)i[0]=e.Ht();else if(a>0&&c<0)i.push(o),i.push(o.Ht());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ii,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ii,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return Ze(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ou)}getMinOffset(e,t){return m.mapArray(this.un(t),r=>this.cn(e,r).next(i=>i||A())).next(Ou)}}function ku(n){return le(n,"collectionParents")}function un(n){return le(n,"indexEntries")}function tr(n){return le(n,"indexConfiguration")}function ln(n){return le(n,"indexState")}function Ou(n){S(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Aa(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ce(e.readTime,e.documentKey,t)}/**
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
 */const Mu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Se{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Se(e,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function $d(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Y({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{S(a===1)}));const u=[];for(const l of t.mutations){const h=Gh(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function Qi(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw A();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Se.DEFAULT_COLLECTION_PERCENTILE=10,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Se.DEFAULT=new Se(41943040,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Se.DISABLED=new Se(-1,0,0);class Ts{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,t,r,i){S(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ts(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return et(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=_n(e),o=et(e);return o.add({}).next(a=>{S(typeof a=="number");const c=new Ca(a,t,r,i),u=function(f,I,T){const v=T.baseMutations.map(F=>Fr(f.ut,F)),D=T.mutations.map(F=>Fr(f.ut,F));return{userId:I,batchId:T.batchId,localWriteTimeMs:T.localWriteTime.toMillis(),baseMutations:v,mutations:D}}(this.serializer,this.userId,c),l=[];let h=new q((d,f)=>P(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Gh(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,S_))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Dn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return et(e).get(t).next(r=>r?(S(r.userId===this.userId),Ct(this.serializer,r)):null)}Cn(e,t){return this.Dn[t]?m.resolve(this.Dn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Dn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return et(e).Y({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(S(a.batchId>=r),s=Ct(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return et(e).Y({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return et(e).W("userMutationsIndex",t).next(r=>r.map(i=>Ct(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ri(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return _n(e).Y({range:i},(o,a,c)=>{const[u,l,h]=o,d=qe(l);if(u===this.userId&&t.path.isEqual(d))return et(e).get(h).next(f=>{if(!f)throw A();S(f.userId===this.userId),s.push(Ct(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new q(P);const i=[];return t.forEach(s=>{const o=Ri(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=_n(e).Y({range:a},(u,l,h)=>{const[d,f,I]=u,T=qe(f);d===this.userId&&s.path.isEqual(T)?r=r.add(I):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Ri(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new q(P);return _n(e).Y({range:o},(c,u,l)=>{const[h,d,f]=c,I=qe(d);h===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(et(e).get(s).next(o=>{if(o===null)throw A();S(o.userId===this.userId),r.push(Ct(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return $d(e.ae,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Fn(t.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return _n(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=qe(s[1]);i.push(c)}else a.done()}).next(()=>{S(i.length===0)})})}containsKey(e,t){return zd(e,this.userId,t)}Mn(e){return jd(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function zd(n,e,t){const r=Ri(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return _n(n).Y({range:s,J:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function et(n){return le(n,"mutations")}function _n(n){return le(n,"documentMutations")}function jd(n){return le(n,"mutationQueues")}/**
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
 */class Ht{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ht(0)}static Nn(){return new Ht(-1)}}/**
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
 */class By{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{const r=new Ht(t.highestTargetId);return t.highestTargetId=r.next(),this.Ln(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(t=>R.fromTimestamp(new K(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Ln(e,i)))}addTargetData(e,t){return this.kn(e,t).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(t,r),this.Ln(e,r))))}updateTargetData(e,t){return this.kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>hn(e).delete(t.targetId)).next(()=>this.Bn(e)).next(r=>(S(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return hn(e).Y((o,a)=>{const c=cr(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(e,t){return hn(e).Y((r,i)=>{const s=cr(i);t(s)})}Bn(e){return Fu(e).get("targetGlobalKey").next(t=>(S(t!==null),t))}Ln(e,t){return Fu(e).put("targetGlobalKey",t)}kn(e,t){return hn(e).put(Bd(this.serializer,t))}qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=jt(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return hn(e).Y({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=cr(a);ei(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=rt(e);return t.forEach(o=>{const a=Te(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(i)}removeMatchingKeys(e,t,r){const i=rt(e);return m.forEach(t,s=>{const o=Te(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=rt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=rt(e);let s=V();return i.Y({range:r,J:!0},(o,a,c)=>{const u=qe(o[1]),l=new y(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Te(t.path),i=IDBKeyRange.bound([r],[Bh(r)],!1,!0);let s=0;return rt(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,t){return hn(e).get(t).next(r=>r?cr(r):null)}}function hn(n){return le(n,"targets")}function Fu(n){return le(n,"targetGlobal")}function rt(n){return le(n,"targetDocuments")}/**
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
 */function Lu([n,e],[t,r]){const i=P(n,t);return i===0?P(e,r):i}class qy{constructor(e){this.Qn=e,this.buffer=new q(Lu),this.Kn=0}$n(){return++this.Kn}Un(e){const t=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Lu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Uy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vt(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Tt(t)}await this.Gn(3e5)})}}class $y{constructor(e,t){this.zn=e,this.params=t}calculateTargetCount(e,t){return this.zn.jn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(be._e);const r=new qy(t);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Mu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mu):this.Jn(e,t))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),fn()<=N.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function zy(n,e){return new $y(n,e)}/**
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
 */class jy{constructor(e,t){this.db=e,this.garbageCollector=zy(this,t)}jn(e){const t=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Yn(e){let t=0;return this.Hn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Hn(e,t){return this.Zn(e,(r,i)=>t(i))}addReference(e,t,r){return Ei(e,r)}removeReference(e,t,r){return Ei(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ei(e,t)}Xn(e,t){return function(i,s){let o=!1;return jd(i).Z(a=>zd(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,R.min()),rt(e).delete(function(h){return[0,Te(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ei(e,t)}Zn(e,t){const r=rt(e);let i,s=be._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==be._e&&t(new y(qe(i)),s),s=u,i=c):s=be._e}).next(()=>{s!==be._e&&t(new y(qe(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ei(n,e){return rt(n).put(function(r,i){return{targetId:0,path:Te(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class Gd{constructor(){this.changes=new At(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,z.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Gy{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return St(e).put(r)}removeEntry(e,t,r){return St(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ki(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.er(e,r)))}getEntry(e,t){let r=z.newInvalidDocument(t);return St(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(nr(t))},(i,s)=>{r=this.tr(t,s)}).next(()=>r)}nr(e,t){let r={size:0,document:z.newInvalidDocument(t)};return St(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(nr(t))},(i,s)=>{r={document:this.tr(t,s),size:Qi(s)}}).next(()=>r)}getEntries(e,t){let r=Ve();return this.rr(e,t,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,t){let r=Ve(),i=new U(y.comparator);return this.rr(e,t,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,Qi(o))}).next(()=>({documents:r,sr:i}))}rr(e,t,r){if(t.isEmpty())return m.resolve();let i=new q(Uu);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(nr(i.first()),nr(i.last())),o=i.getIterator();let a=o.getNext();return St(e).Y({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=y.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Uu(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.U(nr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Ki(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return St(e).W(IDBKeyRange.bound(a,c,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let l=Ve();for(const h of u){const d=this.tr(y.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(ni(t,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,t,r,i){let s=Ve();const o=qu(t,r),a=qu(t,Ce.max());return St(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.tr(y.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new Ky(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Bu(e).get("remoteDocumentGlobalKey").next(t=>(S(!!t),t))}er(e,t){return Bu(e).put("remoteDocumentGlobalKey",t)}tr(e,t){if(t){const r=Dy(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(R.min())))return r}return z.newInvalidDocument(e)}}function Kd(n){return new Gy(n)}class Ky extends Gd{constructor(e,t){super(),this._r=e,this.trackRemovals=t,this.ar=new At(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new q((s,o)=>P(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(t.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Ru(this._r.serializer,o);i=i.add(s.path.popLast());const u=Qi(c);r+=u-a.size,t.push(this._r.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Ru(this._r.serializer,o.convertToNoDocument(R.min()));t.push(this._r.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),t.push(this._r.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this._r.nr(e,t).next(r=>(this.ar.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this._r.ir(e,t).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Bu(n){return le(n,"remoteDocumentGlobal")}function St(n){return le(n,"remoteDocumentsV14")}function nr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function qu(n,e){const t=e.documentKey.path.toArray();return[n,Ki(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Uu(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=P(t[s],r[s]),i)return i;return i=P(t.length,r.length),i||(i=P(t[t.length-2],r[r.length-2]),i||P(t[t.length-1],r[r.length-1]))}/**
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
 */class Wy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Wd{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&mr(r.mutation,i,Pe.empty(),K.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,V()).next(()=>r))}getLocalViewOfDocuments(e,t,r=V()){const i=Ue();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=or();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Ue();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,V()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ve();const o=fr(),a=function(){return fr()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Xe)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),mr(l.mutation,u,l.mutation.getFieldMask(),K.now())):o.set(u.key,Pe.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new Wy(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=fr();let i=new U((o,a)=>o-a),s=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Pe.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||V()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=dd();l.forEach(d=>{if(!s.has(d)){const f=Ed(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(Ue());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,V())).next(l=>({batchId:a,changes:hd(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new y(t)).next(r=>{let i=or();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=or();return this.indexManager.getCollectionParents(e,s).next(a=>m.forEach(a,c=>{const u=function(h,d){return new Ye(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,z.newInvalidDocument(l)))});let a=or();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&mr(l.mutation,u,Pe.empty(),K.now()),ni(t,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class Qy{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return m.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(i){return{id:i.id,version:i.version,createTime:te(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(i){return{name:i.name,query:Ma(i.bundledQuery),readTime:te(i.readTime)}}(t)),m.resolve()}}/**
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
 */class Hy{constructor(){this.overlays=new U(y.comparator),this.lr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ue();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.lt(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=Ue(),s=t.length+1,o=new y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new U((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Ue(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ue(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}lt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Na(t,r));let s=this.lr.get(t);s===void 0&&(s=V(),this.lr.set(t,s)),this.lr.set(t,s.add(r.key))}}/**
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
 */class Ba{constructor(){this.hr=new q(se.Pr),this.Ir=new q(se.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const r=new se(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.dr(new se(e,t))}Ar(e,t){e.forEach(r=>this.removeReference(r,t))}Rr(e){const t=new y(new O([])),r=new se(t,e),i=new se(t,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new y(new O([])),r=new se(t,e),i=new se(t,e+1);let s=V();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new se(e,0),r=this.hr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class se{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return y.comparator(e.key,t.key)||P(e.gr,t.gr)}static Tr(e,t){return P(e.gr,t.gr)||y.comparator(e.key,t.key)}}/**
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
 */class Yy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new q(se.Pr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ca(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new se(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Sr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new se(t,0),i=new se(t,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new q(P);return t.forEach(i=>{const s=new se(i,0),o=new se(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;y.isDocumentKey(s)||(s=s.child(""));const o=new se(new y(s),0);let a=new q(P);return this.yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.gr)),!0)},o),m.resolve(this.br(a))}br(e){const t=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){S(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(t.mutations,i=>{const s=new se(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){const r=new se(t,0),i=this.yr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Xy{constructor(e){this.Cr=e,this.docs=function(){return new U(y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():z.newInvalidDocument(t))}getEntries(e,t){let r=Ve();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():z.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ve();const o=t.path,a=new y(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Aa(Uh(l),r)<=0||(i.has(l.key)||ni(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){A()}vr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Jy(this)}getSize(e){return m.resolve(this.size)}}class Jy extends Gd{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
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
 */class Zy{constructor(e){this.persistence=e,this.Fr=new At(t=>jt(t),ei),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ba,this.targetCount=0,this.Nr=Ht.On()}forEachTarget(e,t){return this.Fr.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),m.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Ht(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.kn(t),m.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Fr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Or.mr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Or.containsKey(t))}}/**
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
 */class Qd{constructor(e,t){this.Br={},this.overlays={},this.Lr=new be(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Zy(this),this.indexManager=new Fy,this.remoteDocumentCache=function(i){return new Xy(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Ld(t),this.Kr=new Qy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Hy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new Yy(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new eI(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,t){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class eI extends zh{constructor(e){super(),this.currentSequenceNumber=e}}class vs{constructor(e){this.persistence=e,this.Gr=new Ba,this.zr=null}static jr(e){return new vs(e)}get Hr(){if(this.zr)return this.zr;throw A()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),m.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const i=y.fromPath(r);return this.Jr(e,i).next(s=>{s||t.removeEntry(i,R.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(r=>{r?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return m.or([()=>m.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
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
 */class tI{constructor(e){this.serializer=e}N(e,t,r,i){const s=new _s("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nu,{unique:!0}),c.createObjectStore("documentMutations")}(e),$u(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),$u(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:R.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").W().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nu,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:L_});u.createIndex("collectionPathOverlayIndex",B_,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",q_,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:b_});u.createIndex("documentKeyIndex",P_),u.createIndex("collectionGroupIndex",V_)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:k_}).createIndex("sequenceNumberIndex",O_,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:M_}).createIndex("documentKeyIndex",F_,{unique:!1})}(e))),o}Xr(e){let t=0;return e.store("remoteDocuments").Y((r,i)=>{t+=Qi(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.W().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>m.forEach(a,c=>{S(c.userId===s.userId);const u=Ct(this.serializer,c);return $d(e,s.userId,u).next(()=>{})}))}))}ei(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const c=new O(o),u=function(h){return[0,Te(h)]}(c);s.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:Te(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:N_});const r=t.store("collectionParents"),i=new La,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Te(c)})}};return t.store("remoteDocuments").Y({J:!0},(o,a)=>{const c=new O(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Y({J:!0},([o,a,c],u)=>{const l=qe(a);return s(l.popLast())}))}ni(e){const t=e.store("targets");return t.Y((r,i)=>{const s=cr(i),o=Bd(this.serializer,s);return t.put(o)})}ri(e,t){const r=t.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new y(O.fromString(h.document.name).popFirst(5)):h.noDocument?y.fromSegments(h.noDocument.path):h.unknownDocument?y.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}ii(e,t){const r=t.store("mutations"),i=Kd(this.serializer),s=new Qd(vs.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:V();Ct(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new oe(u),h=ws.ct(this.serializer,l),d=s.getIndexManager(l),f=Ts.ct(l,this.serializer,d,s.referenceDelegate);return new Wd(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Po(t,be._e),c).next()})})}}function $u(n){n.createObjectStore("targetDocuments",{keyPath:C_}).createIndex("documentTargetsIndex",x_,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",D_,{unique:!0}),n.createObjectStore("targetGlobal")}const no="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class qa{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!qa.D())throw new p(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new jy(this,i),this.Ii=t+"main",this.serializer=new Ld(c),this.Ti=new ke(this.Ii,this.ai,new tI(this.serializer)),this.qr=new By(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Kd(this.serializer),this.Kr=new Cy,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&ee("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,no);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new be(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>wi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(t=>this.isPrimary&&!t?this.pi(e).next(()=>!1):!!t&&this.yi(e).next(()=>!0))).catch(e=>{if(vt(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return rr(e).get("owner").next(t=>m.resolve(this.wi(t)))}Si(e){return wi(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=le(t,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const t of e)this.Ei.removeItem(this.vi(t.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?m.resolve(!0):rr(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)){if(this.wi(t)&&this.networkEnabled)return!0;if(!this.wi(t)){if(!t.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,no);return!1}}return!(!this.networkEnabled||!this.inForeground)||wi(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Po(e,be._e);return this.pi(t).next(()=>this.Si(t))}),this.Ti.close(),this.Ni()}Ci(e,t){return e.filter(r=>this.Di(r.updateTimeMs,t)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>wi(e).W().next(t=>this.Ci(t,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,t){return Ts.ct(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ly(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return ws.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?$_:c===14?Qh:c===13?Wh:c===12?U_:c===11?Kh:void A()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new Po(a,this.Lr?this.Lr.next():be._e),t==="readwrite-primary"?this.fi(o).next(c=>!!c||this.gi(o)).next(c=>{if(!c)throw ee(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new p(g.FAILED_PRECONDITION,$h);return r(o)}).next(c=>this.yi(o).next(()=>c)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return rr(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)&&!this.wi(t)&&!(this._i||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(g.FAILED_PRECONDITION,no)})}yi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return rr(e).put("owner",t)}static D(){return ke.D()}pi(e){const t=rr(e);return t.get("owner").next(r=>this.wi(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}Di(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ee(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const t=/(?:Version|Mobile)\/1[456]/;Dm()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var t;try{const r=((t=this.Ei)===null||t===void 0?void 0:t.getItem(this.vi(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ee("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){ee("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function rr(n){return le(n,"owner")}function wi(n){return le(n,"clientMetadata")}function Ua(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class $a{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=i}static Qi(e,t){let r=V(),i=V();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $a(e,t.fromCache,r,i)}}/**
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
 */class nI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Hd{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.zi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nI;return this.Hi(e,t,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,t,o,a.size)})}).next(()=>s.result)}Ji(e,t,r,i){return r.documentReadCount<this.Ui?(fn()<=N.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(fn()<=N.DEBUG&&_("QueryEngine","Query:",mn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(fn()<=N.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ve(t))):m.resolve())}zi(e,t){if(mu(t))return m.resolve(null);let r=ve(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Gi(t,null,"F"),r=ve(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=V(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Yi(t,a);return this.Zi(t,u,o,c.readTime)?this.zi(e,Gi(t,null,"F")):this.Xi(e,u,t,c)}))})))}ji(e,t,r,i){return mu(t)||i.isEqual(R.min())?m.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(t,s);return this.Zi(t,o,r,i)?m.resolve(null):(fn()<=N.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mn(t)),this.Xi(e,o,t,qh(i,-1)).next(a=>a))})}Yi(e,t){let r=new q(ud(e));return t.forEach((i,s)=>{ni(e,s)&&(r=r.add(s))}),r}Zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,t,r){return fn()<=N.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",mn(t)),this.Gi.getDocumentsMatchingQuery(e,t,Ce.min(),r)}Xi(e,t,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class rI{constructor(e,t,r,i){this.persistence=e,this.es=t,this.serializer=i,this.ts=new U(P),this.ns=new At(s=>jt(s),ei),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wd(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function Yd(n,e,t,r){return new rI(n,e,t,r)}async function Xd(n,e){const t=E(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.os(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=V();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function iI(n,e){const t=E(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(I=>{f=f.next(()=>l.getEntry(c,I)).next(T=>{const v=u.docVersions.get(I);S(v!==null),T.version.compareTo(v)<0&&(h.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),l.addEntry(T)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=V();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Jd(n){const e=E(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function sI(n,e){const t=E(n),r=e.snapshotVersion;let i=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.ss.newChangeBuffer({trackRemovals:!0});i=t.ts;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.qr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ie.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(T,v,D){return T.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,f,l)&&a.push(t.qr.updateTargetData(s,f))});let c=Ve(),u=V();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Zd(s,o,e.documentUpdates).next(l=>{c=l.us,u=l.cs})),!r.isEqual(R.min())){const l=t.qr.getLastRemoteSnapshotVersion(s).next(h=>t.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.ts=i,s))}function Zd(n,e,t){let r=V(),i=V();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ve();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{us:o,cs:i}})}function oI(n,e){const t=E(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function On(n,e){const t=E(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.qr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.qr.allocateTargetId(r).next(o=>(i=new Ke(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ts=t.ts.insert(r.targetId,r),t.ns.set(e,r.targetId)),r})}async function Mn(n,e,t){const r=E(n),i=r.ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vt(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Hi(n,e,t){const r=E(n);let i=R.min(),s=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=E(c),d=h.ns.get(l);return d!==void 0?m.resolve(h.ts.get(d)):h.qr.getTargetData(u,l)}(r,o,ve(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,t?i:R.min(),t?s:V())).next(a=>(nf(r,cd(e),a),{documents:a,ls:s})))}function ef(n,e){const t=E(n),r=E(t.qr),i=t.ts.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function tf(n,e){const t=E(n),r=t.rs.get(e)||R.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.ss.getAllFromCollectionGroup(i,e,qh(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(nf(t,e,i),i))}function nf(n,e,t){let r=n.rs.get(e)||R.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(e,r)}async function aI(n,e,t,r){const i=E(n);let s=V(),o=Ve();for(const u of t){const l=e.hs(u.metadata.name);u.document&&(s=s.add(l));const h=e.Ps(u);h.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(l,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),c=await On(i,function(l){return ve(jn(O.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Zd(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.qr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.qr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.us,l.cs)).next(()=>l.us)))}async function cI(n,e,t=V()){const r=await On(n,ve(Ma(e.bundledQuery))),i=E(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=te(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken(ie.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function zu(n,e){return`firestore_clients_${n}_${e}`}function ju(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ro(n,e){return`firestore_targets_${n}_${e}`}class Yi{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ts(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new p(i.error.code,i.error.message))),o?new Yi(e,t,i.state,s):(ee("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class gr{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ts(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new p(r.error.code,r.error.message))),s?new gr(e,r.state,i):(ee("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ts(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Va();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=jh(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Xi(e,s):(ee("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class za{constructor(e,t){this.clientId=e,this.onlineState=t}static Ts(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new za(t.clientId,t.onlineState):(ee("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Uo{constructor(){this.activeTargetIds=Va()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class io{constructor(e,t,r,i,s){this.window=e,this.si=t,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new U(P),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=zu(this.persistenceKey,this.Rs),this.ws=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new Uo),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.vs=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(zu(this.persistenceKey,r));if(i){const s=Xi.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const t=this.storage.getItem(this.Cs);if(t){const r=this.Ms(t);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let t=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,t,r){this.Ns(e,t,r),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(ro(this.persistenceKey,e));if(r){const i=gr.Ts(e,r);i&&(t=i.state)}}return this.Ls.ds(e),this.Fs(),t}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ro(this.persistenceKey,e))}updateQueryState(e,t,r){this.ks(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ys)return void ee("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ss.test(t.key)){if(t.newValue==null){const r=this.Ks(t.key);return this.$s(r,null)}{const r=this.Us(t.key,t.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(t.key)){if(t.newValue!==null){const r=this.Ws(t.key,t.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(t.key)){if(t.newValue!==null){const r=this.zs(t.key,t.newValue);if(r)return this.js(r)}}else if(t.key===this.Cs){if(t.newValue!==null){const r=this.Ms(t.newValue);if(r)return this.xs(r)}}else if(t.key===this.ws){const r=function(s){let o=be._e;if(s!=null)try{const a=JSON.parse(s);S(typeof a=="number"),o=a}catch(a){ee("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==be._e&&this.sequenceNumberHandler(r)}else if(t.key===this.vs){const r=this.Hs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(t)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,t,r){const i=new Yi(this.currentUser,e,t,r),s=ju(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const t=ju(this.persistenceKey,this.currentUser,e);this.removeItem(t)}qs(e){const t={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(t))}ks(e,t,r){const i=ro(this.persistenceKey,e),s=new gr(e,t,r);this.setItem(i,s.Es())}Qs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.vs,t)}Ks(e){const t=this.Ss.exec(e);return t?t[1]:null}Us(e,t){const r=this.Ks(e);return Xi.Ts(r,t)}Ws(e,t){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Yi.Ts(new oe(s),i,t)}zs(e,t){const r=this.Ds.exec(e),i=Number(r[1]);return gr.Ts(i,t)}Ms(e){return za.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,t){const r=t?this.gs.insert(e,t):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let t=Va();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class rf{constructor(){this.eo=new Uo,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Uo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uI{ro(e){}shutdown(){}}/**
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
 */class Gu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ti=null;function so(){return Ti===null?Ti=function(){return 268435456+Math.round(2147483648*Math.random())}():Ti++,"0x"+Ti.toString(16)}/**
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
 */class hI{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const pe="WebChannelConnection";class dI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+t.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(t,r,i,s,o){const a=so(),c=this.So(t,r);_("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(t,c,u,i).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Me("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}Co(t,r,i,s,o,a){return this.wo(t,r,i,s,o)}bo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}So(t,r){const i=lI[t];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,r,i){const s=so();return new Promise((o,a)=>{const c=new c_;c.setWithCredentials(!0),c.listenOnce(s_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case eo.NO_ERROR:const l=c.getResponseJson();_(pe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case eo.TIMEOUT:_(pe,`RPC '${e}' ${s} timed out`),a(new p(g.DEADLINE_EXCEEDED,"Request time out"));break;case eo.HTTP_ERROR:const h=c.getStatus();if(_(pe,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const I=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(D)>=0?D:g.UNKNOWN}(f.status);a(new p(I,f.message))}else a(new p(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new p(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(pe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(pe,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}vo(e,t,r){const i=so(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=r_(),a=i_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new a_({})),this.bo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(pe,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const I=new hI({co:v=>{f?_(pe,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(_(pe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(pe,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},lo:()=>h.close()}),T=(v,D,F)=>{v.listen(D,C=>{try{F(C)}catch(Q){setTimeout(()=>{throw Q},0)}})};return T(h,_i.EventType.OPEN,()=>{f||_(pe,`RPC '${e}' stream ${i} transport opened.`)}),T(h,_i.EventType.CLOSE,()=>{f||(f=!0,_(pe,`RPC '${e}' stream ${i} transport closed`),I.Ro())}),T(h,_i.EventType.ERROR,v=>{f||(f=!0,Me(pe,`RPC '${e}' stream ${i} transport errored:`,v),I.Ro(new p(g.UNAVAILABLE,"The operation could not be completed")))}),T(h,_i.EventType.MESSAGE,v=>{var D;if(!f){const F=v.data[0];S(!!F);const C=F,Q=C.error||((D=C[0])===null||D===void 0?void 0:D.error);if(Q){_(pe,`RPC '${e}' stream ${i} received error:`,Q);const H=Q.status;let Z=function(em){const Tc=ne[em];if(Tc!==void 0)return vd(Tc)}(H),Re=Q.message;Z===void 0&&(Z=g.INTERNAL,Re="Unknown error status: "+H+" with message "+Q.message),f=!0,I.Ro(new p(Z,Re)),h.close()}else _(pe,`RPC '${e}' stream ${i} received:`,F),I.Vo(F)}}),T(a,o_.STAT_EVENT,v=>{v.stat===Jc.PROXY?_(pe,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Jc.NOPROXY&&_(pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Ao()},0),I}}/**
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
 */class ja{constructor(e,t,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=t,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class of{constructor(e,t,r,i,s,o,a,c){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ja(e,t)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(ee(t.toString()),ee("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===t&&this.s_(r,i)},r=>{e(()=>{const i=new p(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,t){const r=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fI extends of{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=vy(this.serializer,e),r=function(s){if(!("targetChange"in s))return R.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?R.min():o.readTime?te(o.readTime):R.min()}(e);return this.listener.a_(t,r)}u_(e){const t={};t.database=Mr(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=zi(c)?{documents:xd(s,c)}:{query:Nd(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bd(s,o.resumeToken);const u=Oo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(R.min())>0){a.readTime=kn(s,o.snapshotVersion.toTimestamp());const u=Oo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Ry(this.serializer,e);r&&(t.labels=r),this.e_(t)}c_(e){const t={};t.database=Mr(this.serializer),t.removeTarget=e,this.e_(t)}}class mI extends of{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(S(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=Ay(e.writeResults,e.commitTime),r=te(e.commitTime);return this.listener.I_(r,t)}return S(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Mr(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Fr(this.serializer,r))};this.e_(t)}}/**
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
 */class gI extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(g.UNKNOWN,i.toString())})}Co(e,t,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new p(g.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class pI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(ee(t),this.f_=!1):_("OnlineStateTracker",t)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class _I{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Rt(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=E(c);u.C_.add(4),await Wn(u),u.M_.set("Unknown"),u.C_.delete(4),await ai(u)}(this))})}),this.M_=new pI(r,i)}}async function ai(n){if(Rt(n))for(const e of n.v_)await e(!0)}async function Wn(n){for(const e of n.v_)await e(!1)}function As(n,e){const t=E(n);t.D_.has(e.targetId)||(t.D_.set(e.targetId,e),Wa(t)?Ka(t):Hn(t).Ho()&&Ga(t,e))}function Lr(n,e){const t=E(n),r=Hn(t);t.D_.delete(e),r.Ho()&&af(t,e),t.D_.size===0&&(r.Ho()?r.Zo():Rt(t)&&t.M_.set("Unknown"))}function Ga(n,e){if(n.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(R.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hn(n).u_(e)}function af(n,e){n.x_.Oe(e),Hn(n).c_(e)}function Ka(n){n.x_=new py({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.D_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Hn(n).start(),n.M_.g_()}function Wa(n){return Rt(n)&&!Hn(n).jo()&&n.D_.size>0}function Rt(n){return E(n).C_.size===0}function cf(n){n.x_=void 0}async function yI(n){n.D_.forEach((e,t)=>{Ga(n,e)})}async function II(n,e){cf(n),Wa(n)?(n.M_.w_(e),Ka(n)):n.M_.set("Unknown")}async function EI(n,e,t){if(n.M_.set("Online"),e instanceof Sd&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ji(n,r)}else if(e instanceof Vi?n.x_.$e(e):e instanceof Rd?n.x_.Je(e):n.x_.Ge(e),!t.isEqual(R.min()))try{const r=await Jd(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.D_.get(u);l&&s.D_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.D_.get(c);if(!l)return;s.D_.set(c,l.withResumeToken(ie.EMPTY_BYTE_STRING,l.snapshotVersion)),af(s,c);const h=new Ke(l.target,c,u,l.sequenceNumber);Ga(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Ji(n,r)}}async function Ji(n,e,t){if(!vt(e))throw e;n.C_.add(1),await Wn(n),n.M_.set("Offline"),t||(t=()=>Jd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.C_.delete(1),await ai(n)})}function uf(n,e){return e().catch(t=>Ji(n,t,e))}async function Qn(n){const e=E(n),t=_t(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;wI(e);)try{const i=await oI(e.localStore,r);if(i===null){e.b_.length===0&&t.Zo();break}r=i.batchId,TI(e,i)}catch(i){await Ji(e,i)}lf(e)&&hf(e)}function wI(n){return Rt(n)&&n.b_.length<10}function TI(n,e){n.b_.push(e);const t=_t(n);t.Ho()&&t.h_&&t.P_(e.mutations)}function lf(n){return Rt(n)&&!_t(n).jo()&&n.b_.length>0}function hf(n){_t(n).start()}async function vI(n){_t(n).E_()}async function AI(n){const e=_t(n);for(const t of n.b_)e.P_(t.mutations)}async function RI(n,e,t){const r=n.b_.shift(),i=xa.from(r,e,t);await uf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Qn(n)}async function SI(n,e){e&&_t(n).h_&&await async function(r,i){if(function(o){return Td(o)&&o!==g.ABORTED}(i.code)){const s=r.b_.shift();_t(r).Yo(),await uf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qn(r)}}(n,e),lf(n)&&hf(n)}async function Ku(n,e){const t=E(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Rt(t);t.C_.add(3),await Wn(t),r&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.C_.delete(3),await ai(t)}async function $o(n,e){const t=E(n);e?(t.C_.delete(2),await ai(t)):e||(t.C_.add(2),await Wn(t),t.M_.set("Unknown"))}function Hn(n){return n.O_||(n.O_=function(t,r,i){const s=E(t);return s.A_(),new fI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:yI.bind(null,n),Io:II.bind(null,n),a_:EI.bind(null,n)}),n.v_.push(async e=>{e?(n.O_.Yo(),Wa(n)?Ka(n):n.M_.set("Unknown")):(await n.O_.stop(),cf(n))})),n.O_}function _t(n){return n.N_||(n.N_=function(t,r,i){const s=E(t);return s.A_(),new mI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:vI.bind(null,n),Io:SI.bind(null,n),T_:AI.bind(null,n),I_:RI.bind(null,n)}),n.v_.push(async e=>{e?(n.N_.Yo(),await Qn(n)):(await n.N_.stop(),n.b_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
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
 */class Qa{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Qa(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yn(n,e){if(ee("AsyncQueue",`${e}: ${n}`),vt(n))return new p(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Rn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||y.comparator(t.key,r.key):(t,r)=>y.comparator(t.key,r.key),this.keyedMap=or(),this.sortedSet=new U(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Rn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Wu{constructor(){this.B_=new U(y.comparator)}track(e){const t=e.doc.key,r=this.B_.get(t);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(t,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(t):e.type===1&&r.type===2?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):A():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Fn{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Fn(e,t,Rn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ti(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class bI{constructor(){this.k_=void 0,this.listeners=[]}}class PI{constructor(){this.queries=new At(e=>ad(e),ti),this.onlineState="Unknown",this.q_=new Set}}async function Ha(n,e){const t=E(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new bI),i)try{s.k_=await t.onListen(r)}catch(o){const a=Yn(o,`Initialization of query '${mn(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Q_(t.onlineState),s.k_&&e.K_(s.k_)&&Xa(t)}async function Ya(n,e){const t=E(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function VI(n,e){const t=E(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Xa(t)}function DI(n,e,t){const r=E(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Xa(n){n.q_.forEach(e=>{e.next()})}class Ja{constructor(e,t,r){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}H_(e){e=Fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class CI{constructor(e,t){this.Y_=e,this.byteLength=t}Z_(){return"metadata"in this.Y_}}/**
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
 */class Qu{constructor(e){this.serializer=e}hs(e){return $e(this.serializer,e)}Ps(e){return e.metadata.exists?Cd(this.serializer,e.document,!1):z.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return te(e)}}class xI{constructor(e,t,r){this.X_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=df(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++t;const r=O.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ta(e){const t=new Map,r=new Qu(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||V()).add(s);t.set(o,a)}}return t}async complete(){const e=await aI(this.localStore,new Qu(this.serializer),this.documents,this.X_.id),t=this.ta(this.documents);for(const r of this.queries)await cI(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function df(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class ff{constructor(e){this.key=e}}class mf{constructor(e){this.key=e}}class gf{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=V(),this.mutatedKeys=V(),this._a=ud(e),this.aa=new Rn(this._a)}get ua(){return this.ia}ca(e,t){const r=t?t.la:new Wu,i=t?t.aa:this.aa;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=ni(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?I!==T&&(r.track({type:3,doc:f}),v=!0):this.ha(d,f)||(r.track({type:2,doc:f}),v=!0,(c&&this._a(f,c)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(c||u)&&(a=!0)),v&&(f?(o=o.add(f),s=T?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,l)=>function(d,f){const I=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return I(d)-I(f)}(u.type,l.type)||this._a(u.doc,l.doc)),this.Pa(r);const o=t?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,s.length!==0||c?{snapshot:new Fn(this.query,e.aa,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Wu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(t=>this.ia=this.ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ia=this.ia.delete(t)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=V(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const t=[];return e.forEach(r=>{this.oa.has(r)||t.push(new mf(r))}),this.oa.forEach(r=>{e.has(r)||t.push(new ff(r))}),t}da(e){this.ia=e.ls,this.oa=V();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return Fn.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class NI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class kI{constructor(e){this.key=e,this.Ra=!1}}class OI{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new At(a=>ad(a),ti),this.fa=new Map,this.ga=new Set,this.pa=new U(y.comparator),this.ya=new Map,this.wa=new Ba,this.Sa={},this.ba=new Map,this.Da=Ht.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function MI(n,e){const t=rc(n);let r,i;const s=t.ma.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await On(t.localStore,ve(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Za(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&As(t.remoteStore,o)}return i}async function Za(n,e,t,r,i){n.va=(h,d,f)=>async function(T,v,D,F){let C=v.view.ca(D);C.Zi&&(C=await Hi(T.localStore,v.query,!1).then(({documents:Z})=>v.view.ca(Z,C)));const Q=F&&F.targetChanges.get(v.targetId),H=v.view.applyChanges(C,T.isPrimaryClient,Q);return zo(T,v.targetId,H.Ta),H.snapshot}(n,h,d,f);const s=await Hi(n.localStore,e,!0),o=new gf(e,s.ls),a=o.ca(s.documents),c=si.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);zo(n,t,u.Ta);const l=new NI(e,t,o);return n.ma.set(e,l),n.fa.has(t)?n.fa.get(t).push(e):n.fa.set(t,[e]),u.snapshot}async function FI(n,e){const t=E(n),r=t.ma.get(e),i=t.fa.get(r.targetId);if(i.length>1)return t.fa.set(r.targetId,i.filter(s=>!ti(s,e))),void t.ma.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Mn(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Lr(t.remoteStore,r.targetId),Ln(t,r.targetId)}).catch(Tt)):(Ln(t,r.targetId),await Mn(t.localStore,r.targetId,!0))}async function LI(n,e,t){const r=ic(n);try{const i=await function(o,a){const c=E(o),u=K.now(),l=a.reduce((f,I)=>f.add(I.key),V());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let I=Ve(),T=V();return c.ss.getEntries(f,l).next(v=>{I=v,I.forEach((D,F)=>{F.isValidDocument()||(T=T.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,I)).next(v=>{h=v;const D=[];for(const F of a){const C=fy(F,h.get(F.key).overlayedDocument);C!=null&&D.push(new Xe(F.key,C,Jh(C.value.mapValue),G.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,D,a)}).next(v=>{d=v;const D=v.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(f,v.batchId,D)})}).then(()=>({batchId:d.batchId,changes:hd(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Sa[o.currentUser.toKey()];u||(u=new U(P)),u=u.insert(a,c),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,t),await Je(r,i.changes),await Qn(r.remoteStore)}catch(i){const s=Yn(i,"Failed to persist write");t.reject(s)}}async function pf(n,e){const t=E(n);try{const r=await sI(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.ya.get(s);o&&(S(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?S(o.Ra):i.removedDocuments.size>0&&(S(o.Ra),o.Ra=!1))}),await Je(t,r,e)}catch(r){await Tt(r)}}function Hu(n,e,t){const r=E(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=E(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&Xa(c)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BI(n,e,t){const r=E(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new U(y.comparator);o=o.insert(s,z.newNoDocument(s,R.min()));const a=V().add(s),c=new ii(R.min(),new Map,new U(P),o,a);await pf(r,c),r.pa=r.pa.remove(s),r.ya.delete(e),nc(r)}else await Mn(r.localStore,e,!1).then(()=>Ln(r,e,t)).catch(Tt)}async function qI(n,e){const t=E(n),r=e.batch.batchId;try{const i=await iI(t.localStore,e);tc(t,r,null),ec(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Je(t,i)}catch(i){await Tt(i)}}async function UI(n,e,t){const r=E(n);try{const i=await function(o,a){const c=E(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(S(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);tc(r,e,t),ec(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Je(r,i)}catch(i){await Tt(i)}}async function $I(n,e){const t=E(n);Rt(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=E(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ba.get(r)||[];i.push(e),t.ba.set(r,i)}catch(r){const i=Yn(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ec(n,e){(n.ba.get(e)||[]).forEach(t=>{t.resolve()}),n.ba.delete(e)}function tc(n,e,t){const r=E(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Ln(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.fa.get(e))n.ma.delete(r),t&&n.Va.Fa(r,t);n.fa.delete(e),n.isPrimaryClient&&n.wa.Rr(e).forEach(r=>{n.wa.containsKey(r)||_f(n,r)})}function _f(n,e){n.ga.delete(e.path.canonicalString());const t=n.pa.get(e);t!==null&&(Lr(n.remoteStore,t),n.pa=n.pa.remove(e),n.ya.delete(t),nc(n))}function zo(n,e,t){for(const r of t)r instanceof ff?(n.wa.addReference(r.key,e),zI(n,r)):r instanceof mf?(_("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,e),n.wa.containsKey(r.key)||_f(n,r.key)):A()}function zI(n,e){const t=e.key,r=t.path.canonicalString();n.pa.get(t)||n.ga.has(r)||(_("SyncEngine","New document in limbo: "+t),n.ga.add(r),nc(n))}function nc(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const e=n.ga.values().next().value;n.ga.delete(e);const t=new y(O.fromString(e)),r=n.Da.next();n.ya.set(r,new kI(t)),n.pa=n.pa.insert(t,r),As(n.remoteStore,new Ke(ve(jn(t.path)),r,"TargetPurposeLimboResolution",be._e))}}async function Je(n,e,t){const r=E(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=$a.Qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(c,u){const l=E(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!vt(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.ts.get(d),I=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(I);l.ts=l.ts.insert(d,T)}}}(r.localStore,s))}async function jI(n,e){const t=E(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await Xd(t.localStore,e);t.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(c=>{c.reject(new p(g.CANCELLED,o))})}),s.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Je(t,r._s)}}function GI(n,e){const t=E(n),r=t.ya.get(e);if(r&&r.Ra)return V().add(r.key);{let i=V();const s=t.fa.get(e);if(!s)return i;for(const o of s){const a=t.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function KI(n,e){const t=E(n),r=await Hi(t.localStore,e.query,!0),i=e.view.da(r);return t.isPrimaryClient&&zo(t,e.targetId,i.Ta),i}async function WI(n,e){const t=E(n);return tf(t.localStore,e).then(r=>Je(t,r))}async function QI(n,e,t,r){const i=E(n),s=await function(a,c){const u=E(a),l=E(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Cn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Qn(i.remoteStore):t==="acknowledged"||t==="rejected"?(tc(i,e,r||null),ec(i,e),function(a,c){E(E(a).mutationQueue).Fn(c)}(i.localStore,e)):A(),await Je(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function HI(n,e){const t=E(n);if(rc(t),ic(t),e===!0&&t.Ca!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Yu(t,r.toArray());t.Ca=!0,await $o(t.remoteStore,!0);for(const s of i)As(t.remoteStore,s)}else if(e===!1&&t.Ca!==!1){const r=[];let i=Promise.resolve();t.fa.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ln(t,o),Mn(t.localStore,o,!0))),Lr(t.remoteStore,o)}),await i,await Yu(t,r),function(o){const a=E(o);a.ya.forEach((c,u)=>{Lr(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new U(y.comparator)}(t),t.Ca=!1,await $o(t.remoteStore,!1)}}async function Yu(n,e,t){const r=E(n),i=[],s=[];for(const o of e){let a;const c=r.fa.get(o);if(c&&c.length!==0){a=await On(r.localStore,ve(c[0]));for(const u of c){const l=r.ma.get(u),h=await KI(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await ef(r.localStore,o);a=await On(r.localStore,u),await Za(r,yf(u),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function yf(n){return od(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function YI(n){return function(t){return E(E(t).persistence).Bi()}(E(n).localStore)}async function XI(n,e,t,r){const i=E(n);if(i.Ca)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await tf(i.localStore,cd(s[0])),a=ii.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ie.EMPTY_BYTE_STRING);await Je(i,o,a);break}case"rejected":await Mn(i.localStore,e,!0),Ln(i,e,r);break;default:A()}}async function JI(n,e,t){const r=rc(n);if(r.Ca){for(const i of e){if(r.fa.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await ef(r.localStore,i),o=await On(r.localStore,s);await Za(r,yf(s),o.targetId,!1,o.resumeToken),As(r.remoteStore,o)}for(const i of t)r.fa.has(i)&&await Mn(r.localStore,i,!1).then(()=>{Lr(r.remoteStore,i),Ln(r,i)}).catch(Tt)}}function rc(n){const e=E(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BI.bind(null,e),e.Va.a_=VI.bind(null,e.eventManager),e.Va.Fa=DI.bind(null,e.eventManager),e}function ic(n){const e=E(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UI.bind(null,e),e}function ZI(n,e,t){const r=E(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,I){const T=E(f),v=te(I.createTime);return T.persistence.runTransaction("hasNewerBundle","readonly",D=>T.Kr.getBundleMetadata(D,I.id)).then(D=>!!D&&D.createTime.compareTo(v)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(df(c));const u=new xI(c,s.localStore,o.serializer);let l=await o.Ma();for(;l;){const d=await u.ea(l);d&&a._updateProgress(d),l=await o.Ma()}const h=await u.complete();return await Je(s,h.ra,void 0),await function(f,I){const T=E(f);return T.persistence.runTransaction("Save bundle","readwrite",v=>T.Kr.saveBundleMetadata(v,I))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.na)}catch(c){return Me("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class jo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Yd(this.persistence,new Hd,e.initialUser,this.serializer)}createPersistence(e){return new Qd(vs.jr,this.serializer)}createSharedClientState(e){return new rf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class If extends jo{constructor(e,t,r){super(),this.xa=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await ic(this.xa.syncEngine),await Qn(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Yd(this.persistence,new Hd,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Uy(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new A_(t,this.persistence);return new v_(e.asyncQueue,r)}createPersistence(e){const t=Ua(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Se.withCacheSize(this.cacheSizeBytes):Se.DEFAULT;return new qa(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,sf(),Di(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new rf}}class eE extends If{constructor(e,t){super(e,t,!1),this.xa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xa.syncEngine;this.sharedClientState instanceof io&&(this.sharedClientState.syncEngine={Ys:QI.bind(null,t),Zs:XI.bind(null,t),Xs:JI.bind(null,t),Bi:YI.bind(null,t),Js:WI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await HI(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=sf();if(!io.D(t))throw new p(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Ua(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new io(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class sc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jI.bind(null,this.syncEngine),await $o(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PI}()}createDatastore(e){const t=oi(e.databaseInfo.databaseId),r=function(s){return new dI(s)}(e.databaseInfo);return function(s,o,a,c){return new gI(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new _I(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Hu(this.syncEngine,t,0),function(){return Gu.D()?new Gu:new uI}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new OI(i,s,o,a,c,u);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=E(t);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Wn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */function Xu(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Rs{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):ee("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class tE{constructor(e,t){this.Ba=e,this.serializer=t,this.metadata=new ae,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const t=this.La.decode(e),r=Number(t);isNaN(r)&&this.Qa(`length string (${t}) is not valid number`);const i=await this.Ka(r);return new CI(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const t=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class nE{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const o=E(i),a=Mr(o.serializer)+"/documents",c={documents:s.map(d=>Or(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=Ty(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());S(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Kn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=y.fromPath(r);this.mutations.push(new Da(i,this.precondition(i)))}),await async function(r,i){const s=E(r),o=Mr(s.serializer)+"/documents",a={writes:i.map(c=>Fr(s.serializer,c))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw A();t=R.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new p(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(R.min())?G.exists(!1):G.updateTime(t):G.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(R.min()))throw new p(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return G.updateTime(t)}return G.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class rE{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new ja(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new nE(this.datastore),t=this.za(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const t=this.updateFunction(e);return!Zr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Td(t)}return!1}}/**
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
 */class iE{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=oe.UNAUTHENTICATED,this.clientId=Lh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yn(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ci(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Go(n,e){n.asyncQueue.verifyOperationInProgress();const t=await oc(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Ku(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ku(e.remoteStore,s)),n._onlineComponents=e}function Ef(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function oc(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ci(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Ef(t))throw t;Me("Error using user provided cache. Falling back to memory cache: "+t),await Ci(n,new jo)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Ci(n,new jo);return n._offlineComponents}async function Ss(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Go(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Go(n,new sc))),n._onlineComponents}function wf(n){return oc(n).then(e=>e.persistence)}function ac(n){return oc(n).then(e=>e.localStore)}function Tf(n){return Ss(n).then(e=>e.remoteStore)}function cc(n){return Ss(n).then(e=>e.syncEngine)}function sE(n){return Ss(n).then(e=>e.datastore)}async function Bn(n){const e=await Ss(n),t=e.eventManager;return t.onListen=MI.bind(null,e.syncEngine),t.onUnlisten=FI.bind(null,e.syncEngine),t}function oE(n){return n.asyncQueue.enqueue(async()=>{const e=await wf(n),t=await Tf(n);return e.setNetworkEnabled(!0),function(i){const s=E(i);return s.C_.delete(0),ai(s)}(t)})}function aE(n){return n.asyncQueue.enqueue(async()=>{const e=await wf(n),t=await Tf(n);return e.setNetworkEnabled(!1),async function(i){const s=E(i);s.C_.add(0),await Wn(s),s.M_.set("Offline")}(t)})}function cE(n,e){const t=new ae;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=E(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new p(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Yn(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await ac(n),e,t)),t.promise}function vf(n,e,t={}){const r=new ae;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Rs({next:d=>{o.enqueueAndForget(()=>Ya(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new p(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Ja(jn(a.path),l,{includeMetadataChanges:!0,J_:!0});return Ha(s,h)}(await Bn(n),n.asyncQueue,e,t,r)),r.promise}function uE(n,e){const t=new ae;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Hi(i,s,!0),c=new gf(s,a.ls),u=c.ca(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Yn(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await ac(n),e,t)),t.promise}function Af(n,e,t={}){const r=new ae;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Rs({next:d=>{o.enqueueAndForget(()=>Ya(s,h)),d.fromCache&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Ja(a,l,{includeMetadataChanges:!0,J_:!0});return Ha(s,h)}(await Bn(n),n.asyncQueue,e,t,r)),r.promise}function lE(n,e){const t=new Rs(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){E(i).q_.add(s),s.next()}(await Bn(n),t)),()=>{t.Na(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){E(i).q_.delete(s)}(await Bn(n),t))}}function hE(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?Ad().encode(o):o,function(l,h){return new tE(l,h)}(function(l,h){if(l instanceof Uint8Array)return Xu(l,h);if(l instanceof ArrayBuffer)return Xu(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,oi(e));n.asyncQueue.enqueueAndForget(async()=>{ZI(await cc(n),i,r)})}function dE(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=E(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await ac(n),e))}/**
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
 */function Rf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ju=new Map;/**
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
 */function uc(n,e,t){if(!t)throw new p(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sf(n,e,t,r){if(e===!0&&r===!0)throw new p(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Zu(n){if(!y.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function el(n){if(y.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":A()}function M(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bs(n);throw new p(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function bf(n,e){if(e<=0)throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class tl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new p(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ci{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d_;switch(r.type){case"firstParty":return new p_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new p(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ju.get(t);r&&(_("ComponentProvider","Removing Datastore"),Ju.delete(t),r.terminate())}(this),Promise.resolve()}}function fE(n,e,t,r={}){var i;const s=(n=M(n,ci))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Me("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=oe.MOCK_USER;else{a=bm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new p(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new oe(u)}n._authCredentials=new f_(new Fh(a,c))}}/**
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
 */let Ae=class Pf{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pf(this.firestore,e,this._query)}},W=class Vf{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vf(this.firestore,e,this._key)}},ct=class Df extends Ae{constructor(e,t,r){super(e,t,jn(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new W(this.firestore,null,new y(e))}withConverter(e){return new Df(this.firestore,e,this._path)}};function Cf(n,e,...t){if(n=re(n),uc("collection","path",e),n instanceof ci){const r=O.fromString(e,...t);return el(r),new ct(n,null,r)}{if(!(n instanceof W||n instanceof ct))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return el(r),new ct(n.firestore,null,r)}}function mE(n,e){if(n=M(n,ci),uc("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ae(n,null,function(r){return new Ye(O.emptyPath(),r)}(e))}function Zi(n,e,...t){if(n=re(n),arguments.length===1&&(e=Lh.newId()),uc("doc","path",e),n instanceof ci){const r=O.fromString(e,...t);return Zu(r),new W(n,null,new y(r))}{if(!(n instanceof W||n instanceof ct))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return Zu(r),new W(n.firestore,n instanceof ct?n.converter:null,new y(r))}}function xf(n,e){return n=re(n),e=re(e),(n instanceof W||n instanceof ct)&&(e instanceof W||e instanceof ct)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Nf(n,e){return n=re(n),e=re(e),n instanceof Ae&&e instanceof Ae&&n.firestore===e.firestore&&ti(n._query,e._query)&&n.converter===e.converter}/**
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
 */class gE{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ja(this,"async_queue_retry"),this.iu=()=>{const t=Di();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=Di();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=Di();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new ae;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!vt(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ee("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=t,t}enqueueAfterDelay(e,t,r){this.su(),this.ru.indexOf(e)>-1&&(t=0);const i=Qa.createAndSchedule(this,e,t,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&A()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function Ko(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class pE{constructor(){this._progressObserver={},this._taskCompletionResolver=new ae,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const _E=-1;let J=class extends ci{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new gE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kf(this),this._firestoreClient.terminate()}};function he(n){return n._firestoreClient||kf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function kf(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new G_(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Rf(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new iE(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function yE(n,e){Mf(n=M(n,J));const t=he(n);if(t._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Me("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new sc;return Of(t,i,new If(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function IE(n){Mf(n=M(n,J));const e=he(n);if(e._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Me("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new sc;return Of(e,r,new eE(r,t.cacheSizeBytes))}function Of(n,e,t){const r=new ae;return n.asyncQueue.enqueue(async()=>{try{await Ci(n,t),await Go(n,e),r.resolve()}catch(i){const s=i;if(!Ef(s))throw s;Me("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function EE(n){if(n._initialized&&!n._terminated)throw new p(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ae;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!ke.D())return Promise.resolve();const i=r+"main";await ke.delete(i)}(Ua(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function wE(n){return function(t){const r=new ae;return t.asyncQueue.enqueueAndForget(async()=>$I(await cc(t),r)),r.promise}(he(n=M(n,J)))}function TE(n){return oE(he(n=M(n,J)))}function vE(n){return aE(he(n=M(n,J)))}function AE(n,e){const t=he(n=M(n,J)),r=new pE;return hE(t,n._databaseId,e,r),r}function RE(n,e){return dE(he(n=M(n,J)),e).then(t=>t?new Ae(n,null,t.query):null)}function Mf(n){if(n._initialized||n._terminated)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(ie.fromBase64String(e))}catch(t){throw new p(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let yt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let en=class{constructor(e){this._methodName=e}};/**
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
 */class Ps{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}/**
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
 */const SE=/^__.*__$/;class bE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Xe(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gn(e,this.data,t,this.fieldTransforms)}}class Ff{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Xe(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Lf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Vs{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Vs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return es(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Lf(this.Iu)&&SE.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class PE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oi(e)}pu(e,t,r,i=!1){return new Vs({Iu:e,methodName:t,gu:r,path:j.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tn(n){const e=n._freezeSettings(),t=oi(n._databaseId);return new PE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ds(n,e,t,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,e,t,i);fc("Data must be an object, but it was:",o,r);const a=Uf(r,o);let c,u;if(s.merge)c=new Pe(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Wo(e,h,t);if(!o.contains(d))throw new p(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zf(l,d)||l.push(d)}c=new Pe(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new bE(new me(a),c,u)}class ui extends en{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ui}}function Bf(n,e,t){return new Vs({Iu:3,gu:e.settings.gu,methodName:n._methodName,du:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class lc extends en{_toFieldTransform(e){return new ri(e.path,new xn)}isEqual(e){return e instanceof lc}}class VE extends en{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=Bf(this,e,!0),r=this.yu.map(s=>nn(s,t)),i=new Gt(r);return new ri(e.path,i)}isEqual(e){return this===e}}class DE extends en{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=Bf(this,e,!0),r=this.yu.map(s=>nn(s,t)),i=new Kt(r);return new ri(e.path,i)}isEqual(e){return this===e}}class CE extends en{constructor(e,t){super(e),this.wu=t}_toFieldTransform(e){const t=new Nn(e.serializer,gd(e.serializer,this.wu));return new ri(e.path,t)}isEqual(e){return this===e}}function hc(n,e,t,r){const i=n.pu(1,e,t);fc("Data must be an object, but it was:",i,r);const s=[],o=me.empty();Zt(r,(c,u)=>{const l=mc(e,c,t);u=re(u);const h=i.Ru(l);if(u instanceof ui)s.push(l);else{const d=nn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Pe(s);return new Ff(o,a,i.fieldTransforms)}function dc(n,e,t,r,i,s){const o=n.pu(1,e,t),a=[Wo(e,r,t)],c=[i];if(s.length%2!=0)throw new p(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Wo(e,s[d])),c.push(s[d+1]);const u=[],l=me.empty();for(let d=a.length-1;d>=0;--d)if(!zf(u,a[d])){const f=a[d];let I=c[d];I=re(I);const T=o.Ru(f);if(I instanceof ui)u.push(f);else{const v=nn(I,T);v!=null&&(u.push(f),l.set(f,v))}}const h=new Pe(u);return new Ff(l,h,o.fieldTransforms)}function qf(n,e,t,r=!1){return nn(t,n.pu(r?4:3,e))}function nn(n,e){if($f(n=re(n)))return fc("Unsupported field value:",e,n),Uf(n,e);if(n instanceof en)return function(r,i){if(!Lf(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=nn(a,i.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=K.fromDate(r);return{timestampValue:kn(i.serializer,s)}}if(r instanceof K){const s=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kn(i.serializer,s)}}if(r instanceof Ps)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof je)return{bytesValue:bd(i.serializer,r._byteString)};if(r instanceof W){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Oa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${bs(r)}`)}(n,e)}function Uf(n,e){const t={};return Hh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zt(n,(r,i)=>{const s=nn(i,e.Eu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function $f(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof Ps||n instanceof je||n instanceof W||n instanceof en)}function fc(n,e,t){if(!$f(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=bs(t);throw r==="an object"?e.mu(n+" a custom object"):e.mu(n+" "+r)}}function Wo(n,e,t){if((e=re(e))instanceof yt)return e._internalPath;if(typeof e=="string")return mc(n,e);throw es("Field path arguments must be of type string or ",n,!1,void 0,t)}const xE=new RegExp("[~\\*/\\[\\]]");function mc(n,e,t){if(e.search(xE)>=0)throw es(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yt(...e.split("."))._internalPath}catch{throw es(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function es(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new p(g.INVALID_ARGUMENT,a+n+c)}function zf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Br{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new W(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NE extends Br{data(){return super.data()}}function Cs(n,e){return typeof e=="string"?mc(n,e):e instanceof yt?e._internalPath:e._delegate._internalPath}/**
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
 */function jf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gc{}class li extends gc{}function tt(n,e,...t){let r=[];e instanceof gc&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof pc).length,a=s.filter(c=>c instanceof xs).length;if(o>1||o>0&&a>0)throw new p(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class xs extends li{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new xs(e,t,r)}_apply(e){const t=this._parse(e);return Kf(e._query,t),new Ae(e.firestore,e.converter,ko(e._query,t))}_parse(e){const t=tn(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){rl(h,l);const f=[];for(const I of h)f.push(nl(c,s,I));d={arrayValue:{values:f}}}else d=nl(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||rl(h,l),d=qf(a,o,h,l==="in"||l==="not-in");return x.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function kE(n,e,t){const r=e,i=Cs("where",n);return xs._create(i,r,t)}class pc extends gc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:L.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Kf(o,c),o=ko(o,c)}(e._query,t),new Ae(e.firestore,e.converter,ko(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _c extends li{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _c(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kr(s,o)}(e._query,this._field,this._direction);return new Ae(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ye(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function OE(n,e="asc"){const t=e,r=Cs("orderBy",n);return _c._create(r,t)}class Ns extends li{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ns(e,t,r)}_apply(e){return new Ae(e.firestore,e.converter,Gi(e._query,this._limit,this._limitType))}}function ME(n){return bf("limit",n),Ns._create("limit",n,"F")}function FE(n){return bf("limitToLast",n),Ns._create("limitToLast",n,"L")}class ks extends li{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ks(e,t,r)}_apply(e){const t=Gf(e,this.type,this._docOrFields,this._inclusive);return new Ae(e.firestore,e.converter,function(i,s){return new Ye(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function LE(...n){return ks._create("startAt",n,!0)}function BE(...n){return ks._create("startAfter",n,!1)}class Os extends li{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Os(e,t,r)}_apply(e){const t=Gf(e,this.type,this._docOrFields,this._inclusive);return new Ae(e.firestore,e.converter,function(i,s){return new Ye(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function qE(...n){return Os._create("endBefore",n,!1)}function UE(...n){return Os._create("endAt",n,!0)}function Gf(n,e,t,r){if(t[0]=re(t[0]),t[0]instanceof Br)return function(s,o,a,c,u){if(!c)throw new p(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of An(s))if(h.field.isKeyField())l.push(zt(o,c.key));else{const d=c.data.field(h.field);if(ys(d))throw new p(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new p(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new pt(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=tn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(g.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let I=0;I<l.length;I++){const T=l[I];if(d[I].field.isKeyField()){if(typeof T!="string")throw new p(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof T}`);if(!Pa(o)&&T.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${T}' contains a slash.`);const v=o.path.child(O.fromString(T));if(!y.isDocumentKey(v))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const D=new y(v);f.push(zt(a,D))}else{const v=qf(c,u,T);f.push(v)}}return new pt(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function nl(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new p(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pa(e)&&t.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(O.fromString(t));if(!y.isDocumentKey(r))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zt(n,new y(r))}if(t instanceof W)return zt(n,t._key);throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bs(t)}.`)}function rl(n,e){if(!Array.isArray(n)||n.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kf(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class yc{convertValue(e,t="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Y(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw A()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ps(Y(e.latitude),Y(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Sa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Cr(e));default:return null}}convertTimestamp(e){const t=dt(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=O.fromString(e);S(Fd(r));const i=new mt(r.get(1),r.get(3)),s=new y(r.popFirst(5));return i.isEqual(t)||ee(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Ms(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class $E extends yc{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}/**
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
 */class Ft{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let He=class extends Br{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Cs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},pr=class extends He{data(e={}){return super.data(e)}},It=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ft(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new pr(this._firestore,this._userDataWriter,r.key,r,new Ft(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new pr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ft(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new pr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ft(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:zE(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function zE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}function Wf(n,e){return n instanceof He&&e instanceof He?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof It&&e instanceof It&&n._firestore===e._firestore&&Nf(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function jE(n){n=M(n,W);const e=M(n.firestore,J);return vf(he(e),n._key).then(t=>Ic(e,n,t))}class rn extends yc{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}function GE(n){n=M(n,W);const e=M(n.firestore,J),t=he(e),r=new rn(e);return cE(t,n._key).then(i=>new He(e,r,n._key,i,new Ft(i!==null&&i.hasLocalMutations,!0),n.converter))}function KE(n){n=M(n,W);const e=M(n.firestore,J);return vf(he(e),n._key,{source:"server"}).then(t=>Ic(e,n,t))}function WE(n){n=M(n,Ae);const e=M(n.firestore,J),t=he(e),r=new rn(e);return jf(n._query),Af(t,n._query).then(i=>new It(e,r,n,i))}function QE(n){n=M(n,Ae);const e=M(n.firestore,J),t=he(e),r=new rn(e);return uE(t,n._query).then(i=>new It(e,r,n,i))}function HE(n){n=M(n,Ae);const e=M(n.firestore,J),t=he(e),r=new rn(e);return Af(t,n._query,{source:"server"}).then(i=>new It(e,r,n,i))}function il(n,e,t){n=M(n,W);const r=M(n.firestore,J),i=Ms(n.converter,e,t);return hi(r,[Ds(tn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,G.none())])}function sl(n,e,t,...r){n=M(n,W);const i=M(n.firestore,J),s=tn(i);let o;return o=typeof(e=re(e))=="string"||e instanceof yt?dc(s,"updateDoc",n._key,e,t,r):hc(s,"updateDoc",n._key,e),hi(i,[o.toMutation(n._key,G.exists(!0))])}function YE(n){return hi(M(n.firestore,J),[new Kn(n._key,G.none())])}function XE(n,e){const t=M(n.firestore,J),r=Zi(n),i=Ms(n.converter,e);return hi(t,[Ds(tn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,G.exists(!1))]).then(()=>r)}function Qf(n,...e){var t,r,i;n=re(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ko(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ko(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof W)u=M(n.firestore,J),l=jn(n._key.path),c={next:h=>{e[o]&&e[o](Ic(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=M(n,Ae);u=M(h.firestore,J),l=h._query;const d=new rn(u);c={next:f=>{e[o]&&e[o](new It(u,d,h,f))},error:e[o+1],complete:e[o+2]},jf(n._query)}return function(d,f,I,T){const v=new Rs(T),D=new Ja(f,v,I);return d.asyncQueue.enqueueAndForget(async()=>Ha(await Bn(d),D)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>Ya(await Bn(d),D))}}(he(u),l,a,c)}function JE(n,e){return lE(he(n=M(n,J)),Ko(e)?e:{next:e})}function hi(n,e){return function(r,i){const s=new ae;return r.asyncQueue.enqueueAndForget(async()=>LI(await cc(r),i,s)),s.promise}(he(n),e)}function Ic(n,e,t){const r=t.docs.get(e._key),i=new rn(n);return new He(n,i,e._key,r,new Ft(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */let ew=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=tn(e)}set(e,t,r){this._verifyNotCommitted();const i=it(e,this._firestore),s=Ms(i.converter,t,r),o=Ds(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,G.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=it(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof yt?dc(this._dataReader,"WriteBatch.update",s._key,t,r,i):hc(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,G.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=it(e,this._firestore);return this._mutations=this._mutations.concat(new Kn(t._key,G.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function it(n,e){if((n=re(n)).firestore!==e)throw new p(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */let tw=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=tn(t)}get(t){const r=it(t,this._firestore),i=new $E(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return A();const o=s[0];if(o.isFoundDocument())return new Br(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Br(this._firestore,i,r._key,null,r.converter);throw A()})}set(t,r,i){const s=it(t,this._firestore),o=Ms(s.converter,r,i),a=Ds(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=it(t,this._firestore);let a;return a=typeof(r=re(r))=="string"||r instanceof yt?dc(this._dataReader,"Transaction.update",o._key,r,i,s):hc(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=it(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=it(e,this._firestore),r=new rn(this._firestore);return super.get(e).then(i=>new He(this._firestore,r,t._key,i._document,new Ft(!1,!1),t.converter))}};function nw(n,e,t){n=M(n,J);const r=Object.assign(Object.assign({},ZE),t);return function(s){if(s.maxAttempts<1)throw new p(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new ae;return s.asyncQueue.enqueueAndForget(async()=>{const u=await sE(s);new rE(s.asyncQueue,u,a,o,c).run()}),c.promise}(he(n),i=>e(new tw(n,i)),r)}/**
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
 */function rw(){return new ui("deleteField")}function iw(){return new lc("serverTimestamp")}function sw(...n){return new VE("arrayUnion",n)}function ow(...n){return new DE("arrayRemove",n)}function aw(n){return new CE("increment",n)}(function(e,t=!0){(function(i){zn=i})(Zo),bn(new qt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new J(new m_(r.getProvider("auth-internal")),new y_(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new p(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mt(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),at(Zc,"4.3.2",e),at(Zc,"4.3.2","esm2017")})();const cw="@firebase/firestore-compat",uw="0.3.22";/**
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
 */function Ec(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new p("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function ol(){if(typeof Uint8Array>"u")throw new p("unimplemented","Uint8Arrays are not available in this environment.")}function al(){if(!z_())throw new p("unimplemented","Blobs are unavailable in Firestore in this environment.")}class qr{constructor(e){this._delegate=e}static fromBase64String(e){return al(),new qr(je.fromBase64String(e))}static fromUint8Array(e){return ol(),new qr(je.fromUint8Array(e))}toBase64(){return al(),this._delegate.toBase64()}toUint8Array(){return ol(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Qo(n){return lw(n,["next","error","complete"])}function lw(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class hw{enableIndexedDbPersistence(e,t){return yE(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return IE(e._delegate)}clearIndexedDbPersistence(e){return EE(e._delegate)}}class Hf{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof mt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Me("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){fE(this._delegate,e,t,r)}enableNetwork(){return TE(this._delegate)}disableNetwork(){return vE(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Sf("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return wE(this._delegate)}onSnapshotsInSync(e){return JE(this._delegate,e)}get app(){if(!this._appCompat)throw new p("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new qn(this,Cf(this._delegate,e))}catch(t){throw Ee(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ne(this,Zi(this._delegate,e))}catch(t){throw Ee(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ie(this,mE(this._delegate,e))}catch(t){throw Ee(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return nw(this._delegate,t=>e(new Yf(this,t)))}batch(){return he(this._delegate),new Xf(new ew(this._delegate,e=>hi(this._delegate,e)))}loadBundle(e){return AE(this._delegate,e)}namedQuery(e){return RE(this._delegate,e).then(t=>t?new Ie(this,t):null)}}class Fs extends yc{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(new je(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ne.forKey(t,this.firestore,null)}}function dw(n){l_(n)}class Yf{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Fs(e)}get(e){const t=Lt(e);return this._delegate.get(t).then(r=>new Ur(this._firestore,new He(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Lt(e);return r?(Ec("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Lt(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Lt(e);return this._delegate.delete(t),this}}class Xf{constructor(e){this._delegate=e}set(e,t,r){const i=Lt(e);return r?(Ec("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Lt(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Lt(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Yt{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new pr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new $r(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Yt.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Yt(e,new Fs(e),t),i.set(t,s)),s}}Yt.INSTANCES=new WeakMap;class Ne{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Fs(e)}static forPath(e,t,r){if(e.length%2!==0)throw new p("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ne(t,new W(t._delegate,r,new y(e)))}static forKey(e,t,r){return new Ne(t,new W(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new qn(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new qn(this.firestore,Cf(this._delegate,e))}catch(t){throw Ee(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=re(e),e instanceof W?xf(this._delegate,e):!1}set(e,t){t=Ec("DocumentReference.set",t);try{return t?il(this._delegate,e,t):il(this._delegate,e)}catch(r){throw Ee(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?sl(this._delegate,e):sl(this._delegate,e,t,...r)}catch(i){throw Ee(i,"updateDoc()","DocumentReference.update()")}}delete(){return YE(this._delegate)}onSnapshot(...e){const t=Jf(e),r=Zf(e,i=>new Ur(this.firestore,new He(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Qf(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=GE(this._delegate):(e==null?void 0:e.source)==="server"?t=KE(this._delegate):t=jE(this._delegate),t.then(r=>new Ur(this.firestore,new He(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ne(this.firestore,e?this._delegate.withConverter(Yt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ee(n,e,t){return n.message=n.message.replace(e,t),n}function Jf(n){for(const e of n)if(typeof e=="object"&&!Qo(e))return e;return{}}function Zf(n,e){var t,r;let i;return Qo(n[0])?i=n[0]:Qo(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ur{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ne(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Wf(this._delegate,e._delegate)}}class $r extends Ur{data(e){const t=this._delegate.data(e);return this._delegate._converter||h_(t!==void 0),t}}class Ie{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Fs(e)}where(e,t,r){try{return new Ie(this.firestore,tt(this._delegate,kE(e,t,r)))}catch(i){throw Ee(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ie(this.firestore,tt(this._delegate,OE(e,t)))}catch(r){throw Ee(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ie(this.firestore,tt(this._delegate,ME(e)))}catch(t){throw Ee(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ie(this.firestore,tt(this._delegate,FE(e)))}catch(t){throw Ee(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ie(this.firestore,tt(this._delegate,LE(...e)))}catch(t){throw Ee(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ie(this.firestore,tt(this._delegate,BE(...e)))}catch(t){throw Ee(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ie(this.firestore,tt(this._delegate,qE(...e)))}catch(t){throw Ee(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ie(this.firestore,tt(this._delegate,UE(...e)))}catch(t){throw Ee(t,"endAt()","Query.endAt()")}}isEqual(e){return Nf(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=QE(this._delegate):(e==null?void 0:e.source)==="server"?t=HE(this._delegate):t=WE(this._delegate),t.then(r=>new Ho(this.firestore,new It(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Jf(e),r=Zf(e,i=>new Ho(this.firestore,new It(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Qf(this._delegate,t,r)}withConverter(e){return new Ie(this.firestore,e?this._delegate.withConverter(Yt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class fw{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new $r(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ho{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ie(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new $r(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new fw(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new $r(this._firestore,r))})}isEqual(e){return Wf(this._delegate,e._delegate)}}class qn extends Ie{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ne(this.firestore,e):null}doc(e){try{return e===void 0?new Ne(this.firestore,Zi(this._delegate)):new Ne(this.firestore,Zi(this._delegate,e))}catch(t){throw Ee(t,"doc()","CollectionReference.doc()")}}add(e){return XE(this._delegate,e).then(t=>new Ne(this.firestore,t))}isEqual(e){return xf(this._delegate,e._delegate)}withConverter(e){return new qn(this.firestore,e?this._delegate.withConverter(Yt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Lt(n){return M(n,W)}/**
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
 */class wc{constructor(...e){this._delegate=new yt(...e)}static documentId(){return new wc(j.keyField().canonicalString())}isEqual(e){return e=re(e),e instanceof yt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class kt{constructor(e){this._delegate=e}static serverTimestamp(){const e=iw();return e._methodName="FieldValue.serverTimestamp",new kt(e)}static delete(){const e=rw();return e._methodName="FieldValue.delete",new kt(e)}static arrayUnion(...e){const t=sw(...e);return t._methodName="FieldValue.arrayUnion",new kt(t)}static arrayRemove(...e){const t=ow(...e);return t._methodName="FieldValue.arrayRemove",new kt(t)}static increment(e){const t=aw(e);return t._methodName="FieldValue.increment",new kt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const mw={Firestore:Hf,GeoPoint:Ps,Timestamp:K,Blob:qr,Transaction:Yf,WriteBatch:Xf,DocumentReference:Ne,DocumentSnapshot:Ur,Query:Ie,QueryDocumentSnapshot:$r,QuerySnapshot:Ho,CollectionReference:qn,FieldPath:wc,FieldValue:kt,setLogLevel:dw,CACHE_SIZE_UNLIMITED:_E};function gw(n,e){n.INTERNAL.registerComponent(new qt("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},mw)))}/**
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
 */function pw(n){gw(n,(e,t)=>new Hf(e,t,new hw)),n.registerVersion(cw,uw)}pw(yn);function cl(n){let e,t,r,i,s,o,a,c;return{c(){e=En("img"),r=oo(),i=En("button"),i.textContent="Next",s=oo(),o=En("button"),o.textContent="Like and Next",Ac(e.src,t=n[0][n[1]].IMG)||qs(e,"src",t),qs(e,"alt","beach")},m(u,l){Vt(u,e,l),Vt(u,r,l),Vt(u,i,l),Vt(u,s,l),Vt(u,o,l),a||(c=[Rc(i,"click",n[2]),Rc(o,"click",n[3])],a=!0)},p(u,l){l&3&&!Ac(e.src,t=u[0][u[1]].IMG)&&qs(e,"src",t)},d(u){u&&(nt(e),nt(r),nt(i),nt(s),nt(o)),a=!1,zr(c)}}}function _w(n){let e,t,r=n[0].length+"",i,s,o=n[0].length>0&&cl(n);return{c(){e=En("main"),t=En("p"),i=dl(r),s=oo(),o&&o.c()},m(a,c){Vt(a,e,c),Bs(e,t),Bs(t,i),Bs(e,s),o&&o.m(e,null)},p(a,[c]){c&1&&r!==(r=a[0].length+"")&&sm(i,r),a[0].length>0?o?o.p(a,c):(o=cl(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:Sn,o:Sn,d(a){a&&nt(e),o&&o.d()}}}function yw(n,e,t){const r={apiKey:"AIzaSyAobsnee9HLdWRIe7b2ZzVoyEab0q2l_8c",authDomain:"test0-cb8c5.firebaseapp.com",projectId:"test0-cb8c5",storageBucket:"test0-cb8c5.appspot.com",messagingSenderId:"82222829928",appId:"1:82222829928:web:6e43dd913ee9f3356846dd",measurementId:"G-L9VZ4RDW7C"};yn.apps.length||yn.initializeApp(r);const s=yn.firestore().collection("location-beach");let o=[],a=0;am(async()=>{const l=await s.get(),h=[];l.forEach(d=>{const f={id:d.id,IMG:d.get("IMG")};h.push(f)}),t(0,o=h),console.log(o)});const c=()=>{t(1,a=(a+1)%o.length)};return[o,a,c,async()=>{await s.doc(o[a].id).update({CLICKS:yn.firestore.FieldValue.increment(1)}),c()}]}class Iw extends yl{constructor(e){super(),_l(this,e,yw,_w,hl,{})}}function Ew(n){let e,t,r;return t=new Iw({}),{c(){e=En("main"),mm(t.$$.fragment)},m(i,s){Vt(i,e,s),gl(t,e,null),r=!0},p:Sn,i(i){r||(ml(t.$$.fragment,i),r=!0)},o(i){fm(t.$$.fragment,i),r=!1},d(i){i&&nt(e),pl(t)}}}class ww extends yl{constructor(e){super(),_l(this,e,null,Ew,hl,{})}}new ww({target:document.getElementById("app")});
