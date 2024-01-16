"use strict";(self.webpackChunkmmsp_land_hl=self.webpackChunkmmsp_land_hl||[]).push([[3388,519,3139],{28458:(e,r,a)=>{a.d(r,{L:()=>n});var t=a(41226);class n{constructor(){this._serviceMetadatas=new Map}async fetchServiceMetadata(e,r){const a=this._serviceMetadatas.get(e);if(a)return a;const n=await(0,t.T)(e,r);return this._serviceMetadatas.set(e,n),n}}},84076:(e,r,a)=>{a.d(r,{w:()=>u});var t=a(19545),n=a(76200),l=a(10064),i=a(66978),o=a(25899),s=a(7575),c=a(98995);async function u(e,r){var a,u;const p=(0,o.Qc)(e);if(!p)throw new l.Z("invalid-url","Invalid scene service url");const v={...r,sceneServerUrl:p.url.path,layerId:null!==(a=p.sublayer)&&void 0!==a?a:void 0};if(null!==(u=v.sceneLayerItem)&&void 0!==u||(v.sceneLayerItem=await async function(e){const r=(await y(e)).serviceItemId;if(!r)return null;const a=new c.default({id:r,apiKey:e.apiKey}),l=await async function(e){const r=null===t.id||void 0===t.id?void 0:t.id.findServerInfo(e.sceneServerUrl);if(null!==r&&void 0!==r&&r.owningSystemUrl)return r.owningSystemUrl;const a=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const r=(await(0,n.Z)(a,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(r)return r}catch(f){(0,i.r9)(f)}return null}(e);null!=l&&(a.portal=new s.Z({url:l}));try{return a.load({signal:e.signal})}catch(L){return(0,i.r9)(L),null}}(v)),null==v.sceneLayerItem)return d(v.sceneServerUrl.replace("/SceneServer","/FeatureServer"),v);const f=await async function(e){let{sceneLayerItem:r,signal:a}=e;if(!r)return null;try{const e=(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new c.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,i.r9)(t),null}}(v);if(null===f||void 0===f||!f.url)throw new l.Z("related-service-not-found","Could not find feature service through portal item relationship");const L=await d(f.url,v);return L.portalItem=f,L}async function y(e){if(e.rootDocument)return e.rootDocument;const r={query:{f:"json",token:e.apiKey},responseType:"json",signal:e.signal};try{const a=await(0,n.Z)(e.sceneServerUrl,r);e.rootDocument=a.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,r){const a=(0,o.Qc)(e);if(!a)throw new l.Z("invalid-feature-service-url","Invalid feature service url");const t=a.url.path,i=r.layerId;if(null==i)return{serverUrl:t};const s=y(r),c=e=>{const a={query:{f:"json"},responseType:"json",authMode:e,signal:r.signal};return(0,n.Z)(t,a)},u=c("anonymous").catch((()=>c("no-prompt"))),[d,p]=await Promise.all([u,s]),v=null===p||void 0===p?void 0:p.layers,f=d.data&&d.data.layers;if(!Array.isArray(f))throw new Error("expected layers array");if(Array.isArray(v)){for(let n=0;n<Math.min(v.length,f.length);n++)if(v[n].id===i)return{serverUrl:t,layerId:f[n].id}}else if(null!=i&&i<f.length)return{serverUrl:t,layerId:f[i].id};throw new Error("could not find matching associated sublayer")}},74368:(e,r,a)=>{a.d(r,{V:()=>n});var t=a(41226);async function n(e,r){var a;const n=await(0,t.T)(e,r);u(n),o(n);const l={serviceJSON:n};if((null!==(a=n.currentVersion)&&void 0!==a?a:0)<10.5)return l;const i=await(0,t.T)(e+"/layers",r);return u(i),o(i),l.layersJSON={layers:i.layers,tables:i.tables},l}function l(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function i(e){return"Table"===e.type}function o(e){var r,a;e.layers=null===(r=e.layers)||void 0===r?void 0:r.filter(l),e.tables=null===(a=e.tables)||void 0===a?void 0:a.filter(i)}function s(e){e.type||(e.type="Feature Layer")}function c(e){e.type||(e.type="Table")}function u(e){var r,a;null!==(r=e.layers)&&void 0!==r&&r.forEach(s),null===(a=e.tables)||void 0===a||a.forEach(c)}},20519:(e,r,a)=>{a.d(r,{k:()=>G,populateOperationalLayers:()=>u});var t=a(40281),n=(a(93169),a(28458)),l=a(19610),i=a(98995);function o(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var s=a(43139),c=a(21371);async function u(e,r,a){if(!r)return;const t=[];for(const l of r)t.push(h(l,a));const n=await Promise.allSettled(t);for(const l of n)"rejected"===l.status||l.value&&e.add(l.value)}const y={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},v={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},f={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},L={ArcGISFeatureLayer:"FeatureLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},S={...f,LinkChartLayer:"LinkChartLayer"},w={...L},I={...m};async function h(e,r){return async function(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&("GroupLayer"===r.layerType?await G(t,r,a):b(r)?function(e,r,a){r.itemId&&(e.portalItem=new i.default({id:r.itemId,portal:null===a||void 0===a?void 0:a.portal}),e.when((()=>{var t,n;const l=t=>{var n;const l=t.layerId;N(t,e,r,l,a);const i=null===(n=r.featureCollection)||void 0===n||null===(n=n.layers)||void 0===n?void 0:n[l];i&&t.read(i,a)};null!==(t=e.layers)&&void 0!==t&&t.forEach(l),null===(n=e.tables)||void 0===n||n.forEach(l)})))}(t,r,a.context):T(r)&&await async function(e,r,a){var t;const n=l.T.FeatureLayer,i=await n(),o=r.featureCollection,s=null===o||void 0===o?void 0:o.showLegend,c=null===o||void 0===o||null===(t=o.layers)||void 0===t?void 0:t.map(((t,n)=>{const l=new i;l.read(t,a);const o={...a,ignoreDefaults:!0};return N(l,e,r,n,o),null!=s&&l.read({showLegend:s},o),l}));e.layers.addMany(null!==c&&void 0!==c?c:[])}(t,r,a.context)),await(0,c.y)(t,a.context),t}(await g(e,r),e,r)}async function g(e,r){var a,t;const c=r.context,u=M(c);let y=e.layerType||e.type;!y&&(null===r||void 0===r?void 0:r.defaultLayerType)&&(y=r.defaultLayerType);const d=u[y];let p=d?l.T[d]:l.T.UnknownLayer;if(b(e)){const r=null===c||void 0===c?void 0:c.portal;if(e.itemId){const a=new i.default({id:e.itemId,portal:r});await a.load();const t=(await(0,s.v)(a,new n.L)).className||"UnknownLayer";p=l.T[t]}}else"ArcGISFeatureLayer"===y?function(e){return o(e,"notes")}(e)||function(e){return o(e,"markup")}(e)?p=l.T.MapNotesLayer:function(e){return o(e,"route")}(e)?p=l.T.RouteLayer:T(e)&&(p=l.T.GroupLayer):null!==(a=e.wmtsInfo)&&void 0!==a&&a.url&&e.wmtsInfo.layerIdentifier?p=l.T.WMTSLayer:"WFS"===y&&"2.0.0"!==(null===(t=e.wfsInfo)||void 0===t?void 0:t.version)&&(p=l.T.UnsupportedLayer);return p()}function T(e){var r,a;return"ArcGISFeatureLayer"===e.layerType&&!b(e)&&(null!==(r=null===(a=e.featureCollection)||void 0===a||null===(a=a.layers)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>1}function b(e){return"Feature Collection"===e.type}function M(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=v;break;case"ground":r=d;break;case"tables":r=p;break;default:r=y}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=I;break;case"tables":r=w;break;default:r=S}break;default:switch(e.layerContainerType){case"basemap":r=m;break;case"tables":r=L;break;default:r=f}}return r}async function G(e,r,a){const n=new t.Z,l=u(n,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await l,"group"===e.type)return e.layers.addMany(n),e}catch(i){e.destroy();for(const e of n)e.destroy();throw i}}catch(i){throw i}}function N(e,r,a,t,n){var l,i;e.read({id:"".concat(r.id,"-sublayer-").concat(t),visibility:null===(l=null===(i=a.visibleLayers)||void 0===i?void 0:i.includes(t))||void 0===l||l},n)}},32698:(e,r,a)=>{a.d(r,{M4:()=>s,Yv:()=>i,ht:()=>l,wk:()=>o});var t=a(35995),n=a(7575);function l(e){return{origin:"portal-item",url:(0,t.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){const r=(0,t.mN)(e.itemUrl);return{origin:"portal-item",messages:[],writtenProperties:[],url:r,portal:e.portal||n.Z.getDefault(),portalItem:e,verifyItemRelativeUrls:r?{rootPath:r.path,writtenUrls:[]}:null,blockedRelativeUrls:[]}}function o(e){return{origin:"web-map",url:(0,t.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function s(e,r){const a=(0,t.mN)(e.itemUrl);return{origin:"web-map",messages:[],writtenProperties:[],url:a,portal:e.portal||n.Z.getDefault(),portalItem:e,initiator:r,verifyItemRelativeUrls:a?{rootPath:a.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}}}},33388:(e,r,a)=>{a.d(r,{load:()=>f});var t=a(10064),n=a(25899),l=a(74368),i=a(28458),o=a(20519),s=a(19610),c=a(7575),u=a(32698),y=a(97827),d=a(73117),p=a(21371),v=a(41226);async function f(e,r){const a=e.instance.portalItem;if(null!==a&&void 0!==a&&a.id)return await a.load(r),function(e){const r=e.instance.portalItem;if(null===r||void 0===r||!r.type||!e.supportedTypes.includes(r.type))throw new t.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null===r||void 0===r?void 0:r.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,r){var a;const n=e.instance,s=n.portalItem;if(!s)return;const{url:c,title:f}=s,m=(0,u.ht)(s);if("group"===n.type)return async function(e,r,a){const n=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:s,type:c}=n;if("Group Layer"===c){if(!(0,d._$)(n,"Map"))throw new t.Z("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return async function(e){var r;const a=e.portalItem,t=await a.fetchData("json");if(!t)return;const n=(0,u.wk)(a);e.read(t,n),await(0,o.k)(e,t,{context:n}),e.resourceReferences={portalItem:a,paths:null!==(r=n.readResourcePaths)&&void 0!==r?r:[]}}(e)}return e.read({title:s},r),async function(e,r){let a;const{portalItem:n}=e;if(!n)return;const o=n.type,s=r.layerModuleTypeMap;switch(o){case"Feature Service":case"Feature Collection":a=s.FeatureLayer;break;case"Stream Service":a=s.StreamLayer;break;case"Scene Service":a=s.SceneLayer;break;default:throw new t.Z("portal:unsupported-item-type-as-group","The item type '".concat(o,"' is not supported as a 'IGroupLayer'"))}const c=new i.L;let[u,d]=await Promise.all([a(),S(r,c)]),p=()=>u;if("Feature Service"===o){d=n.url?await(0,y.$O)(d,n.url,c):{};const r=(0,y.XX)(d),a=(0,y._Y)(d),t=[];if(r.length||null!==a&&void 0!==a&&a.length){r.length&&t.push("SubtypeGroupLayer"),(null===a||void 0===a?void 0:a.length)&&t.push("OrientedImageryLayer");const e=[];for(const r of t){const a=s[r];e.push(a())}const n=await Promise.all(e),l=new Map;t.forEach(((e,r)=>{l.set(e,n[r])})),p=e=>{var r;return e.layerType&&null!==(r=l.get(e.layerType))&&void 0!==r?r:u}}const i=await async function(e){const{layersJSON:r}=await(0,l.V)(e);if(!r)return null;const a=[...r.layers,...r.tables];return e=>a.find((r=>r.id===e.id))}(n.url);return await L(e,p,d,i)}return"Scene Service"===o&&n.url&&(d=await(0,y.CD)(n,d,c)),(0,y.Q4)(d)>0?await L(e,p,d):await async function(e,r){var a,t;const{portalItem:n}=e;if(null===n||void 0===n||!n.url)return;const l=await(0,v.T)(n.url);l&&L(e,r,{layers:null===(a=l.layers)||void 0===a?void 0:a.map(y.bS),tables:null===(t=l.tables)||void 0===t?void 0:t.map(y.bS)})}(e,p)}(e,a)}(n,m,e);c&&n.read({url:c},m);const w=new i.L,I=await S(e,w,r);return I&&n.read(I,m),n.resourceReferences={portalItem:s,paths:null!==(a=m.readResourcePaths)&&void 0!==a?a:[]},"subtype-group"!==n.type&&n.read({title:f},m),(0,p.y)(n,m)}(e,r)}async function L(e,r,a,t){var n;let l=a.layers||[];const i=a.tables||[];if("Feature Collection"===(null===(n=e.portalItem)||void 0===n?void 0:n.type)?(l.forEach(((e,r)=>{var a;e.id=r,"Table"===(null===e||void 0===e||null===(a=e.layerDefinition)||void 0===a?void 0:a.type)&&i.push(e)})),l=l.filter((e=>{var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))):(l.reverse(),i.reverse()),l.forEach((n=>{const l=null===t||void 0===t?void 0:t(n);if(l||!t){const t=m(e,r(n),a,n,l);e.add(t)}})),i.length){const r=await s.T.FeatureLayer();i.forEach((n=>{const l=null===t||void 0===t?void 0:t(n);if(l||!t){const t=m(e,r,a,n,l);e.tables.add(t)}}))}}function m(e,r,a,t,n){const l=e.portalItem,i={portalItem:l.clone(),layerId:t.id};null!=t.url&&(i.url=t.url);const o=new r(i);if("sourceJSON"in o&&(o.sourceJSON=n),"subtype-group"!==o.type&&(o.sublayerTitleMode="service-name"),"Feature Collection"===l.type){const e={origin:"portal-item",portal:l.portal||c.Z.getDefault()};o.read(t,e);const r=a.showLegend;null!=r&&o.read({showLegend:r},e)}return o}async function S(e,r,a){if(!1===e.supportsData)return;const t=e.instance,l=t.portalItem;if(!l)return;let i=null;try{i=await l.fetchData("json",a)}catch(c){}if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){var o,s;let e=null;const a=await async function(e,r,a){var t,l,i,o,s,c,u,d;if(null!==r&&void 0!==r&&r.layers&&null!==r&&void 0!==r&&r.tables)return(0,y.Q4)(r);const p=(0,n.Qc)(e.url);if(!p)return 1;const v=await a.fetchServiceMetadata(p.url.path).catch((()=>null));return(null!==(t=null!==(l=null===r||void 0===r||null===(i=r.layers)||void 0===i?void 0:i.length)&&void 0!==l?l:null===v||void 0===v||null===(o=v.layers)||void 0===o?void 0:o.length)&&void 0!==t?t:0)+(null!==(s=null!==(c=null===r||void 0===r||null===(u=r.tables)||void 0===u?void 0:u.length)&&void 0!==c?c:null===v||void 0===v||null===(d=v.tables)||void 0===d?void 0:d.length)&&void 0!==s?s:0)}(l,i,r);if((null!==(o=i)&&void 0!==o&&o.layers||null!==(s=i)&&void 0!==s&&s.tables)&&a>0){if(null==t.layerId){const e=(0,y.XX)(i);t.layerId="subtype-group"===t.type?null===e||void 0===e?void 0:e[0]:(0,y.Ok)(i)}e=function(e,r){var a,t;const{layerId:n}=r,l=(null===(a=e.layers)||void 0===a?void 0:a.find((e=>e.id===n)))||(null===(t=e.tables)||void 0===t?void 0:t.find((e=>e.id===n)));return l&&function(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(l,r)?l:null}(i,t),e&&null!=i.showLegend&&(e.showLegend=i.showLegend)}return a>1&&"sublayerTitleMode"in t&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),e}return i}},97827:(e,r,a)=>{a.d(r,{$O:()=>l,CD:()=>u,Ok:()=>i,Q4:()=>o,XX:()=>s,_Y:()=>c,bS:()=>n});var t=a(84076);function n(e){const r={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(r.layerType="OrientedImageryLayer"),r}async function l(e,r,a){var t,l;if(null==(null===(t=e)||void 0===t?void 0:t.layers)||null==(null===(l=e)||void 0===l?void 0:l.tables)){var i,o;const t=await a.fetchServiceMetadata(r);(e=e||{}).layers=e.layers||(null===t||void 0===t||null===(i=t.layers)||void 0===i?void 0:i.map(n)),e.tables=e.tables||(null===t||void 0===t||null===(o=t.tables)||void 0===o?void 0:o.map(n))}return e}function i(e){const r=e.layers;if(null!==r&&void 0!==r&&r.length)return r[0].id;const a=e.tables;return null!==a&&void 0!==a&&a.length?a[0].id:null}function o(e){var r,a,t,n;return(null!==(r=null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.length)&&void 0!==r?r:0)+(null!==(t=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==t?t:0)}function s(e){var r;const a=[];return null!==e&&void 0!==e&&null!==(r=e.layers)&&void 0!==r&&r.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}function c(e){var r;return null===e||void 0===e||null===(r=e.layers)||void 0===r?void 0:r.filter((e=>{let{layerType:r}=e;return"OrientedImageryLayer"===r})).map((e=>{let{id:r}=e;return r}))}async function u(e,r,a){var l,i;if(null===e||void 0===e||!e.url)return null!==(l=r)&&void 0!==l?l:{};if(null!==(i=r)&&void 0!==i||(r={}),!r.layers){var o;const t=await a.fetchServiceMetadata(e.url);r.layers=null===(o=t.layers)||void 0===o?void 0:o.map(n)}const{serverUrl:s,portalItem:c}=await(0,t.w)(e.url,{sceneLayerItem:e}).catch((()=>({serverUrl:null,portalItem:null})));if(null==s)return r.tables=[],r;if(!r.tables&&c){const e=await c.fetchData();if(null!==e&&void 0!==e&&e.tables)r.tables=e.tables.map(n);else{var u;const e=await a.fetchServiceMetadata(s);r.tables=null===e||void 0===e||null===(u=e.tables)||void 0===u?void 0:u.map(n)}}if(r.tables)for(const t of r.tables)t.url="".concat(s,"/").concat(t.id);return r}},43139:(e,r,a)=>{a.d(r,{fromItem:()=>y,v:()=>d});var t=a(10064),n=a(84076),l=a(28458),i=a(37933),o=a(19610),s=a(98995),c=a(97827),u=a(73117);async function y(e){!e.portalItem||e.portalItem instanceof s.default||(e={...e,portalItem:new s.default(e.portalItem)});const r=await async function(e){await e.load();const r=new l.L;return async function(e){const r=e.className,a=o.T[r];return{constructor:await a(),properties:e.properties}}(await d(e,r))}(e.portalItem);return new(0,r.constructor)({portalItem:e.portalItem,...r.properties})}async function d(e,r){switch(e.type){case"Map Service":return async function(e,r){return await async function(e,r){return(await r.fetchServiceMetadata(e.url)).tileInfo}(e,r)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,r);case"Feature Service":return async function(e,r){const a=await p(e,r);if("object"==typeof a){const e={};return null!=a.id&&(e.layerId=a.id),{className:a.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e,r);case"Feature Collection":return async function(e){await e.load();const r=(0,u._$)(e,"Map Notes"),a=(0,u._$)(e,"Markup");if(r||a)return{className:"MapNotesLayer"};if((0,u._$)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,c.Q4)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return async function(e,r){const a=await p(e,r,(async()=>{try{var a;if(!e.url)return[];const{serverUrl:t}=await(0,n.w)(e.url,{sceneLayerItem:e}),l=await r.fetchServiceMetadata(t);return null!==(a=null===l||void 0===l?void 0:l.tables)&&void 0!==a?a:[]}catch{return[]}}));if("object"==typeof a){var t;const n={};let l;if(null!=a.id?(n.layerId=a.id,l="".concat(e.url,"/layers/").concat(a.id)):l=e.url,null!==(t=e.typeKeywords)&&void 0!==t&&t.length)for(const r of Object.keys(i.fb))if(e.typeKeywords.includes(r))return{className:i.fb[r]};const o=await r.fetchServiceMetadata(l);return{className:i.fb[null===o||void 0===o?void 0:o.layerType]||"SceneLayer",properties:n}}if(!1===a){const a=await r.fetchServiceMetadata(e.url);if("Voxel"===(null===a||void 0===a?void 0:a.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,r);case"Image Service":return async function(e,r){var a,t,n,l;await e.load();const i=null!==(a=null===(t=e.typeKeywords)||void 0===t?void 0:t.map((e=>e.toLowerCase())))&&void 0!==a?a:[];if(i.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(i.includes("tiled imagery"))return{className:"ImageryTileLayer"};const o=await e.fetchData(),s=null===o||void 0===o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===s)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return{className:"ImageryLayer"};const c=await r.fetchServiceMetadata(e.url),u=null===(n=c.cacheType)||void 0===n?void 0:n.toLowerCase(),y=null===(l=c.capabilities)||void 0===l?void 0:l.toLowerCase().includes("tilesonly");return"map"===u||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,r);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Group Layer":return{className:"GroupLayer"};default:throw new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function p(e,r,a){const t=e.url;if(!t||/\/\d+$/.test(t))return{};await e.load();let n=await e.fetchData();if("Feature Service"===e.type){const e=await(0,c.$O)(n,t,r),a=v(e);if("object"==typeof a){const r=(0,c.XX)(e),t=(0,c._Y)(e);a.className=null!=a.id&&r.includes(a.id)?"SubtypeGroupLayer":null!=a.id&&null!==t&&void 0!==t&&t.includes(a.id)?"OrientedImageryLayer":"FeatureLayer"}return a}if("Scene Service"===e.type&&(n=await(0,c.CD)(e,n,r)),(0,c.Q4)(n)>0)return v(n);const l=await r.fetchServiceMetadata(t);return a&&(l.tables=await a()),v(l)}function v(e){return 1===(0,c.Q4)(e)&&{id:(0,c.Ok)(e)}}},41226:(e,r,a)=>{a.d(r,{T:()=>n});var t=a(76200);async function n(e,r){const{data:a}=await(0,t.Z)(e,{responseType:"json",query:{f:"json",...null===r||void 0===r?void 0:r.customParameters,token:null===r||void 0===r?void 0:r.apiKey}});return a}}}]);
//# sourceMappingURL=3388.81fcdfcd.chunk.js.map