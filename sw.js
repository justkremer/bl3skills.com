var __wpo = {"assets":{"main":["/45598562077bdc84281b5330ff4d283e.png","/6274c9808eb08785f146a2b78283b5f6.jpg","/bundle.13ef5.css","/bundle.1e107c05.js","/assets/favicon.png","/assets/hunters/fl4k.png","/assets/manifest.json","/assets/robots.txt","/"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"6e148698d382b2c0806ba60a00e5e3e431d7232f":"/45598562077bdc84281b5330ff4d283e.png","507dda73c3ff7f9e08f8788d03b518bb39678b85":"/6274c9808eb08785f146a2b78283b5f6.jpg","d27a1bae6ecef3d0d0870f662aebb5884cc73310":"/bundle.13ef5.css","be62b4cbb6a866615c011bf42b599ec7575d1151":"/bundle.1e107c05.js","67af5559591f22ffba90d13299f3df513e5cbc52":"/assets/favicon.png","dd512257c8c0c3b649954b0b3dd8c5ad04324ded":"/assets/hunters/fl4k.png","3a03eb4a327cd89d096bd1ed9f95366649e8e259":"/assets/manifest.json","c47ccf1a49c24cc5842430aa75c72ef491292412":"/assets/robots.txt","a95082b9962ff8a2c4fd67a639d548b07596ddca":"/"},"strategy":"changed","responseStrategy":"cache-first","version":"5/6/2019, 4:03:00 PM","name":"webpack-offline","pluginVersion":"5.0.7","relativePaths":false};

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(n){return e[n]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s="+N4f")}({"+N4f":function(e,n,t){"use strict";function r(e,n){return caches.match(e,{cacheName:n}).then(function(t){return o(t)?t:i(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function o(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function i(e){return o(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function a(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}var c,s,u;if(c=ExtendableEvent.prototype.waitUntil,s=FetchEvent.prototype.respondWith,u=new WeakMap,ExtendableEvent.prototype.waitUntil=function(e){var n=this,t=u.get(n);if(!t)return t=[Promise.resolve(e)],u.set(n,t),c.call(n,Promise.resolve().then(function e(){var r=t.length;return Promise.all(t.map(function(e){return e.catch(function(){})})).then(function(){return t.length!=r?e():(u.delete(n),Promise.all(t))})}));t.push(Promise.resolve(e))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),s.call(this,e)},void 0===f)var f=!1;!function(e,n){function t(n){var t=w[n];return caches.open(q).then(function(r){return h(r,t,{bust:e.version,request:b,failAll:"main"===n})}).then(function(){a("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function o(n){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&0!==(t=e[n]).indexOf(P););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(R,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}}).then(function(r){if(!r)return t(n);var o=r[0],i=r[1],c=r[2],s=c.hashmap;if(!c.hashmap||c.version===e.version)return t(n);var u=Object.keys(s).map(function(e){return s[e]}),f=i.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),l=w[n],d=[],p=l.filter(function(e){return-1===f.indexOf(e)||-1===u.indexOf(e)});Object.keys(y).forEach(function(e){var n=y[e];if(-1!==l.indexOf(n)&&-1===p.indexOf(n)&&-1===d.indexOf(n)){var t=s[e];t&&-1!==f.indexOf(t)?d.push([t,n]):p.push(n)}}),a("Changed assets: "+n,p),a("Moved assets: "+n,d);var v=Promise.all(d.map(function(e){return o.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(q).then(function(t){var r=v.then(function(e){return Promise.all(e.map(function(e){return t.put(e[0],e[1])}))});return Promise.all([r,h(t,p,{bust:e.version,request:b,failAll:"main"===n,deleteFirst:"main"!==n})])})})}function c(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(P)&&0!==e.indexOf(q))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function s(){return caches.open(q).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:y}));return n.put(new URL(R,location).toString(),t)})}function u(e,n,t){return function(e){if(v&&"function"==typeof v.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=v.map(new URL(e.request.url),e.request);n&&function(e,n){var t=new URL(e,location),r=n.preloadResponse;x.set(r,{url:t,response:r});var o=function(){return x.has(r)},i=r.then(function(e){if(e&&o()){var n=e.clone();return caches.open(O).then(function(e){if(o())return e.put(t,n).then(function(){if(!o())return caches.open(O).then(function(e){return e.delete(t)})})})}});n.waitUntil(i)}(n,e)}}(e),r(t,q).then(function(r){return r?(f&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(f&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&(o=r.clone(),i=caches.open(q).then(function(e){return e.put(n,o)}).then(function(){console.log("[SW]:","Cache asset: "+n)}),e.waitUntil(i)),r):(f&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r);var o,i})})}function l(e){var n=new URL(e.request.url);if(self.registration.navigationPreload&&v&&v.test&&v.test(n,e.request)){var t=function(e){if(x){var n=void 0,t=void 0;return x.forEach(function(r,o){r.url.href===e.href&&(n=r.response,t=o)}),n?(x.delete(t),n):void 0}}(n),o=e.request;return t?(e.waitUntil(caches.open(O).then(function(e){return e.delete(o)})),t):r(o,O).then(function(n){return n&&e.waitUntil(caches.open(O).then(function(e){return e.delete(o)})),n||fetch(e.request)})}}function h(e,n,t){n=n.slice();var r=t.bust,o=!1!==t.failAll,a=!0===t.deleteFirst,c=t.request||{credentials:"omit",mode:"cors"},s=Promise.resolve();return a&&(s=Promise.all(n.map(function(n){return e.delete(n).catch(function(){})}))),Promise.all(n.map(function(e){var n,t,o;return r&&(t=r,o=-1!==(n=e).indexOf("?"),e=n+(o?"&":"?")+"__uncache="+encodeURIComponent(t)),fetch(e,c).then(i).then(function(e){return e.ok?{response:e}:{error:!0}},function(){return{error:!0}})})).then(function(t){return o&&t.some(function(e){return e.error})?Promise.reject(new Error("Wrong response status")):(o||(t=t.filter(function(e,t){return!e.error||(n.splice(t,1),!1)})),s.then(function(){var r=t.map(function(t,r){return e.put(n[r],t.response)});return Promise.all(r)}))})}function d(e){return e.preloadResponse&&!0===v?e.preloadResponse.then(function(n){return n||fetch(e.request)}):fetch(e.request)}var p=n.cacheMaps,v=n.navigationPreload,m=e.strategy,g=e.responseStrategy,w=e.assets,y=e.hashesMap,U=e.externals,b=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},P=e.name,q=P+":"+e.version,O=P+"$preload",R="__offline_webpack__data";Object.keys(w).forEach(function(e){w[e]=w[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===U.indexOf(e)&&(n.search=""),n.toString()})}),y=Object.keys(y).reduce(function(e,n){var t=new URL(y[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),U=U.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()});var S=[].concat(w.main,w.additional,w.optional);self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===m?o("main"):t("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=w.additional.length?(f&&console.log("[SW]:","Caching additional"),("changed"===m?o("additional"):t("additional")).catch(function(){console.error("[SW]:","Cache section `additional` failed to load")})):Promise.resolve();n=(n=(n=n.then(s)).then(c)).then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),v&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)}),self.addEventListener("fetch",function(e){if("GET"===e.request.method&&("only-if-cached"!==e.request.cache||"same-origin"===e.request.mode)){var n=new URL(e.request.url);n.hash="";var t=n.toString();-1===U.indexOf(t)&&(n.search="",t=n.toString());var o=-1!==S.indexOf(t),i=t;if(!o){var a=function(e){var n=e.url,t=new URL(n),r=void 0;r=function(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}(e)?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<p.length;o++){var i=p[o];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var a=void 0;if((a="function"==typeof i.match?i.match(t,e):n.replace(i.match,i.to))&&a!==n)return a}}}(e.request);a&&(i=a,o=!0)}if(o){var c=void 0;c="network-first"===g?function(e,n,t){return d(e).then(function(e){if(e.ok)return f&&console.log("[SW]:","URL ["+n+"] from network"),e;throw e}).catch(function(e){return f&&console.log("[SW]:","URL ["+n+"] from cache if possible"),r(t,q).then(function(n){if(n)return n;if(e instanceof Response)return e;throw e})})}(e,t,i):u(e,t,i),e.respondWith(c)}else{if("navigate"===e.request.mode&&!0===v)return void e.respondWith(d(e));if(v){var s=l(e);if(s)return void e.respondWith(s)}}}}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}});var x=new Map}(__wpo,{loaders:{},cacheMaps:[{match:function(e){if(e.pathname!==location.pathname)return new URL("/index.html",location)},to:null,requestTypes:["navigate"]}],navigationPreload:!1}),e.exports=t("Qq/U")},"Qq/U":function(){}});