"use strict";(self.webpackChunkmmsp_land_hl=self.webpackChunkmmsp_land_hl||[]).push([[1557],{31027:(e,t,r)=>{function n(e){return"function"==typeof e}function s(e,t,r,s){return n(e)?e(t,r,s):e}function i(e){return[e.r,e.g,e.b,e.a]}r.d(t,{$Z:()=>L,BX:()=>w,Cc:()=>C,E_:()=>c,F:()=>T,FG:()=>F,H1:()=>l,JW:()=>O,NA:()=>M,NO:()=>h,On:()=>I,QI:()=>d,Qf:()=>D,Qs:()=>u,RI:()=>S,TB:()=>R,TT:()=>f,W7:()=>x,X_:()=>P,be:()=>y,cO:()=>_,gJ:()=>b,hf:()=>s,k5:()=>g,nn:()=>i,pJ:()=>v,wO:()=>n,wi:()=>k,yL:()=>p,zL:()=>m});const a=" /-,\n";function o(e){let t=e.length;for(;t--;)if(!a.includes(e.charAt(t)))return!1;return!0}function l(e,t){const r=[];let n=0,s=-1;do{if(s=e.indexOf("[",n),s>=n){if(s>n){const t=e.substr(n,s-n);r.push([t,null,o(t)])}if(n=s+1,s=e.indexOf("]",n),s>=n){if(s>n){const i=t[e.substr(n,s-n)];i&&r.push([null,i,!1])}n=s+1}}}while(-1!==s);if(n<e.length-1){const t=e.substr(n);r.push([t,null,o(t)])}return r}function c(e,t,r){let n="",s=null;for(const i of t){const[t,r,a]=i;if(t)a?s=t:(s&&(n+=s,s=null),n+=t);else{const t=e.attributes[r];t&&(s&&(n+=s,s=null),n+=t)}}return d(n,r)}function u(e,t,r){const n=l(t,e);return e=>c(e,n,r)}function d(e,t){switch("string"!=typeof e&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}function f(e,t,r,n,s,i){let a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];const o=t/s,l=r/i,c=Math.ceil(o/2),u=Math.ceil(l/2);for(let d=0;d<i;d++)for(let r=0;r<s;r++){const f=4*(r+(a?i-d-1:d)*s);let h=0,y=0,m=0,p=0,g=0,b=0,M=0;const _=(d+.5)*l;for(let n=Math.floor(d*l);n<(d+1)*l;n++){const s=Math.abs(_-(n+.5))/u,i=(r+.5)*o,a=s*s;for(let l=Math.floor(r*o);l<(r+1)*o;l++){let r=Math.abs(i-(l+.5))/c;const s=Math.sqrt(a+r*r);s>=-1&&s<=1&&(h=2*s*s*s-3*s*s+1,h>0&&(r=4*(l+n*t),M+=h*e[r+3],m+=h,e[r+3]<255&&(h=h*e[r+3]/250),p+=h*e[r],g+=h*e[r+1],b+=h*e[r+2],y+=h))}}n[f]=p/y,n[f+1]=g/y,n[f+2]=b/y,n[f+3]=M/m}}function h(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}}function y(e){var t,r;return null!==(t=null===(r=e.data)||void 0===r?void 0:r.symbol)&&void 0!==t?t:null}function m(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type}function p(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type}function g(e){return null!=e&&("CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type)}function b(e){return null!=e&&("CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type)}const M=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return null==e||isNaN(e)?t:e},_=e=>e.tintColor?h(e.tintColor):{r:255,g:255,b:255,a:1},C=e=>{if(!e)return!1;for(const t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function S(){return Promise.all([r.e(9058),r.e(309)]).then(r.bind(r,50309))}function v(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function I(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function k(e){let t="normal",r="normal";if(e){const n=e.toLowerCase();n.includes("italic")?t="italic":n.includes("oblique")&&(t="oblique"),n.includes("bold")?r="bold":n.includes("light")&&(r="lighter")}return{style:t,weight:r}}function w(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function x(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=x(t);if(null!=e)return e}break;case"CIMTextSymbol":return x(e.symbol);case"CIMSolidFill":return e.color}}function L(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const t=e.symbolLayers;if(t)for(const e of t){const t=L(e);if(null!=t)return t}break}case"CIMTextSymbol":return L(e.symbol);case"CIMSolidStroke":return e.color}}function T(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=T(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return T(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function P(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function F(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function D(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}const R=e=>e.includes("data:image/svg+xml");function O(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}},81735:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27366),s=r(7138),i=r(49861),a=(r(25243),r(63780),r(93169),r(69912));let o=class extends s.Z{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.tileStore.tileScheme.spatialReference;return e&&e.toJSON()||null}};(0,n._)([(0,i.Cb)({readOnly:!0})],o.prototype,"supportsTileUpdates",null),(0,n._)([(0,i.Cb)({constructOnly:!0})],o.prototype,"remoteClient",void 0),(0,n._)([(0,i.Cb)({constructOnly:!0})],o.prototype,"service",void 0),(0,n._)([(0,i.Cb)()],o.prototype,"spatialReference",null),(0,n._)([(0,i.Cb)({constructOnly:!0})],o.prototype,"tileInfo",void 0),(0,n._)([(0,i.Cb)({constructOnly:!0})],o.prototype,"tileStore",void 0),o=(0,n._)([(0,a.j)("esri.views.2d.layers.features.processors.BaseProcessor")],o);const l=o},3561:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(27366),s=r(75746),i=(r(10064),r(93169),r(32718),r(92026)),a=r(66978),o=(r(25243),r(63780),r(69912)),l=r(48732),c=r(78952),u=r(84328),d=r(80613),f=r(72774),h=r(74017),y=r(61909),m=r(69813),p=r(27301),g=r(81735);class b{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}async fetchResource(e,t){const r=this._resourceMap,n=r.get(e);if(n)return n;let s=this._inFlightResourceMap.get(e);if(s)return s;try{s=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...t}),this._inFlightResourceMap.set(e,s),s.then((t=>(this._inFlightResourceMap.delete(e),r.set(e,t),t)))}catch(i){return(0,a.D_)(i)?null:{width:0,height:0}}return s}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}loadFont(e){return Promise.resolve(null)}}function M(e,t){const r=t-t/4,n=t+t/2;return(!e.minScale||e.minScale>=r)&&(!e.maxScale||e.maxScale<=n)}function _(e){const t=e.message,r={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin,version:t.version},transferList:new Array};for(const s in t.data){const e=s,i=t.data[e];if(r.message.data[e]=null,null!=i){var n;const t=i.stride,s=i.indices.slice(0),a=i.vertices.slice(0),o=i.records.slice(0),l={stride:t,indices:s,vertices:a,records:o,metrics:null===(n=i.metrics)||void 0===n?void 0:n.slice(0)};r.transferList.push(s,a,o),r.message.data[e]=l}}return r}let C=class extends g.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new b(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){var r;const n=t.schema.processors[0];if("symbol"!==n.type)return;const s=(0,l.Hg)(this._schema,n);((0,l.uD)(s,"mesh")||(0,l.uD)(s,"target"))&&(e.mesh=!0,null!==(r=e.why)&&void 0!==r&&r.mesh.push("Symbology changed"),this._schema=n,this._factory=this._createFactory(n),this._factory.update(n,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,r,n){return(0,a.k_)(n),this._onTileData(e,t,r,n)}onTileClear(e,t){const r={clear:!0,end:t};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:r})}onTileError(e,t,r){const n=r.signal,s={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:n})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const r of e)r.message.tileKey===t.id&&this._updateTileMesh("append",t,_(r),[],!1,!1,null)}))}_addBufferData(e,t){var r;this._bufferData.has(e)||this._bufferData.set(e,[]),null===(r=this._bufferData.get(e))||void 0===r||r.push(_(t))}_createFactory(e){const{geometryType:t,objectIdField:r,fields:n}=this.service,s={geometryType:t,fields:n,spatialReference:c.Z.fromJSON(this.spatialReference)},i=new y.Wr(((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),this.tileStore.tileScheme.tileInfo),{matcher:a,aggregateMatcher:o}=e.mesh;return this._store=i,this._matchers.feature=(0,m.fL)(a,i,s,this._resourceManagerProxy),this._matchers.aggregate=o?(0,m.fL)(o,i,s,this._resourceManagerProxy):null,new h.j(t,r,i)}async _onTileData(e,t,r,n){var s;(0,a.k_)(n);const{type:i,addOrUpdate:o,remove:l,clear:c,end:u}=t,d=!!this._schema.mesh.sortKey;if(!o){const t={type:i,addOrUpdate:null,remove:l,clear:c,end:u,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},n)}const f=this._processFeatures(e,o,r,n,null===(s=t.status)||void 0===s?void 0:s.version);try{const r=await f;if(null==r){const t={type:i,addOrUpdate:null,remove:l,clear:c,end:u,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},n)}const s=[];for(const t of r){let r=!1;const n=t.message.bufferIds,i=e.key.id,a=t.message.tileKey;if(i!==a&&null!=n){if(!this.tileStore.get(a)){this._addBufferData(i,t),s.push(t);continue}let e=this._bufferIds.get(a);e||(e=new Set,this._bufferIds.set(a,e));const o=Array.from(n);for(const t of o){if(e.has(t)){r=!0;break}e.add(t)}}r||(this._addBufferData(i,t),s.push(t))}await Promise.all(s.map((r=>{const s=e.key.id===r.message.tileKey,a=s?t.remove:[],o=s&&t.end;return this._updateTileMesh(i,e,r,a,o,!!t.clear,n.signal)})))}catch(h){this._handleError(e,h,n)}}async _updateTileMesh(e,t,r,n,s,i,o){var l;const c=e,u=r.message.tileKey,d=!!this._schema.mesh.sortKey;u!==t.key.id&&(s=!1);const f={type:c,addOrUpdate:null===r||void 0===r?void 0:r.message,remove:n,clear:i,end:s,sort:d},h={transferList:null!==(l=null===r||void 0===r?void 0:r.transferList)&&void 0!==l?l:[],signal:o};return(0,a.k_)(h),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:u,data:f},h)}async _processFeatures(e,t,r,n,s){if(null==t||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},o=this._factory,l={viewingMode:"",scale:e.scale},c=await this._matchers.feature,u=await this._matchers.aggregate;(0,a.k_)(n);const d=this._getLabelInfos(e,t);return await o.analyze(t.getCursor(),this._resourceManagerProxy,c,u,i,l),(0,a.k_)(n),this._writeFeatureSet(e,t,i,d,o,r,s)}_writeFeatureSet(e,t,r,n,s,i,a){const o=t.getSize(),l=this._schema.mesh.matcher.symbologyType,c=new f._(e.key.id,{features:o,records:o,metrics:0},l,i,l!==d.mD.HEATMAP,a),u={viewingMode:"",scale:e.scale},h=t.getCursor();for(;h.next();)try{const t=h.getDisplayId(),i=null!=n?n.get(t):null;s.writeCursor(c,h,r,u,e.level,i,this._resourceManagerProxy)}catch(m){}const y=e.tileInfoView.tileInfo.isWrappable;return c.serialize(y)}_handleError(e,t,r){if(!(0,a.D_)(t)){const n={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",n,{signal:r.signal})}return Promise.resolve()}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(null==t)return null;if("subtype"===t.type){const r={type:"subtype",classes:{}};let n=!1;for(const s in t.classes){const i=t.classes[s].filter((t=>M(t,e.scale)));n=n||!!i.length,r.classes[s]=i}return n?r:null}const r=t.classes.filter((t=>M(t,e.scale)));return r.length?{type:"simple",classes:r}:null}_getLabels(e,t){if("subtype"===t.type){var r;const n=this.service.subtypeField;(0,i.O3)(n,"Expected to find subtype Field");const s=e.readAttribute(n);return null==s?[]:null!==(r=t.classes[s])&&void 0!==r?r:[]}return t.classes}_getLabelInfos(e,t){const r=this._getLabelingSchemaForScale(e);if(null==r)return null;const n=new Map,i=t.getCursor();for(;i.next();){const e=i.getDisplayId(),t=[],a=(0,u.nE)(e),o=a&&1!==i.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(i,r);for(const r of l){if(r.target!==o)continue;const n=i.getStorage(),l=a&&"feature"===o?n.getComputedStringAtIndex(i.readAttribute("referenceId"),r.fieldIndex):n.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=(0,s.E)(l.toString()),u=c[0],d=c[1];this._store.getMosaicItem(r.symbol,(0,p._)(u)).then((e=>{var n;t[r.index]={glyphs:null!==(n=e.glyphMosaicItems)&&void 0!==n?n:[],rtl:d,index:r.index}}))}n.set(e,t)}return n}};C=(0,n._)([(0,o.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],C);const S=C},29145:(e,t,r)=>{r.d(t,{x:()=>u,B:()=>c});var n=r(98991),s=r(80613),i=r(54815);const a={marker:s.LW.MARKER,fill:s.LW.FILL,line:s.LW.LINE,text:s.LW.TEXT};class o{constructor(e,t,r,n){const o={minScale:null===t||void 0===t?void 0:t.minScale,maxScale:null===t||void 0===t?void 0:t.maxScale},l=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(o);this.layers=e,this.data=t,this.hash=this._createHash()+l,this.rendererKey=r;const c={isOutline:!1,placement:null,symbologyType:s.mD.DEFAULT,vvFlags:r};for(const s of e){const e=a[s.type];c.isOutline="line"===s.type&&s.isOutline,s.materialKey=(0,i.jj)(e,c),s.maxVVSize=n,s.scaleInfo=o,s.templateHash+=l}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}const l=async(e,t,r)=>{const s=new n._(r,t);return new o(await s.analyzeSymbolReference(e.data,!1),e.data,e.rendererKey,e.maxVVSize)};async function c(e,t,n,s){if(!e)return null;if("cim"===e.type)return l(e,t,n);if("web-style"===e.type){var i;const{fetchCIMSymbolReference:a}=await r.e(656).then(r.bind(r,80656)),o={type:"cim",data:null!==(i=await a(e,null,s))&&void 0!==i?i:void 0,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return l(o,t,n)}return e}function u(e){if(!e)return null;const{avoidSDFRasterization:t,type:r,cim:n,url:s,materialHash:i,maxVVSize:a}=e,o={cim:n,type:r,mosaicHash:i,url:s,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t};switch(r){case"marker":a&&"size"in n&&(n.size=Math.max(a,n.size)),o.size=e.size,o.path=e.path,o.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":o.dashTemplate=e.dashTemplate;break;case"text":o.text=e.text,o.fontName=e.fontName}return o}}}]);
//# sourceMappingURL=1557.3379147b.chunk.js.map