"use strict";var precacheConfig=[["/yahtzee-game/index.html","efd7785df0add373bcd56303bfa99103"],["/yahtzee-game/static/css/main.49c76f90.css","4e05d657694900912a914a6ca7e9e3b5"],["/yahtzee-game/static/js/main.d90976e5.js","051bf6bd230aefebcd36844b8f6af91e"],["/yahtzee-game/static/media/fa-brands-400.9d2bbde4.ttf","9d2bbde416583cfa5cb30c995b41f732"],["/yahtzee-game/static/media/fa-brands-400.f4bdd85a.woff2","f4bdd85a576812f553ec3cfea8b1a2b5"],["/yahtzee-game/static/media/fa-regular-400.83e2813a.woff2","83e2813a8fe0229d916c5b63fa9eab5e"],["/yahtzee-game/static/media/fa-regular-400.f4175677.ttf","f417567703b4fcfbf750952bd2db8a44"],["/yahtzee-game/static/media/fa-solid-900.3e50e269.woff2","3e50e269ee627bb2279f91d18c085167"],["/yahtzee-game/static/media/fa-solid-900.dd5e5b90.ttf","dd5e5b90ca8ee986b13b04310f9aef9d"],["/yahtzee-game/static/media/fa-v4compatibility.1f9db997.woff2","1f9db9971c2d69b78e7425a012a5e486"],["/yahtzee-game/static/media/fa-v4compatibility.d4a14b7a.ttf","d4a14b7a210bc8b5c2fe661a18e7e8db"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/yahtzee-game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});