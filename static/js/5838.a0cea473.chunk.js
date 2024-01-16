"use strict";(self.webpackChunkmmsp_land_hl=self.webpackChunkmmsp_land_hl||[]).push([[5838],{96866:(e,t,r)=>{r.d(t,{B:()=>y});var i=r(10064),o=r(9997),s=r(80292),a=r(35995),n=r(71907),l=r(33397),d=r(25265),p=r(49861),u=r(22892),c=r(53283);function y(e){var t;const r=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,i)=>{const o=function(e,t,r){var i;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,r){const i=(0,l.Oe)(t,r);return{type:String,read:(e,t,r)=>{const o=(0,c.r)(e,t,r);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(t,o,n,l){if(null===l||void 0===l||!l.resources)return"string"==typeof t?void(o[n]=(0,c.t)(t,l)):void(o[n]=t.write({},l));const p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,c.t)(p,{...l,verifyItemRelativeUrls:null!==l&&void 0!==l&&l.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},c.M.NO),g=i.type!==String&&(!(0,s.l)(this)||(null===l||void 0===l?void 0:l.origin)&&this.originIdOf(r)>(0,d.M9)(l.origin)),m={object:this,propertyName:r,value:t,targetUrl:y,dest:o,targetPropertyName:n,context:l,params:e};null!==l&&void 0!==l&&l.portalItem&&y&&!(0,a.YP)(y)?g&&null!==e&&void 0!==e&&e.contentAddressed?h(m):g?function(e){var t;const{context:r,targetUrl:i,params:o,value:s,dest:n,targetPropertyName:l}=e;if(!r.portalItem)return;const d=r.portalItem.resourceFromPath(i),p=v(s,i,r),c=(0,u.B)(p),y=(0,a.Ml)(d.path),g=null!==(t=null===o||void 0===o?void 0:o.compress)&&void 0!==t&&t;c===y?(r.resources&&f({...e,resource:d,content:p,compress:g,updates:r.resources.toUpdate}),n[l]=i):h(e)}(m):function(e){let{context:t,targetUrl:r,dest:i,targetPropertyName:o}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),i[o]=r)}(m):null!==l&&void 0!==l&&l.portalItem&&(null==y||null!=(0,c.i)(y)||(0,a.jc)(y)||g)?h(m):o[n]=y}}}}(e,t,r);switch(null!==(i=null===e||void 0===e?void 0:e.type)&&void 0!==i?i:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=c.a;return{read:e,write:t}}}}(e,t,i);for(const e of r){const r=(0,p.CJ)(t,e,i);for(const e in o)r[e]=o[e]}}}function h(e){var t,r,s,l;const{targetUrl:d,params:p,value:y,context:h,dest:g,targetPropertyName:m}=e;if(!h.portalItem)return;const b=(0,c.p)(d),w=v(y,d,h);if(null!==p&&void 0!==p&&p.contentAddressed&&"json"!==w.type)return void(null===(t=h.messages)||void 0===t||t.push(new i.Z("persistable:contentAddressingUnsupported",'Property "'.concat(m,'" is trying to serializing a resource with content of type ').concat(w.type," with content addressing. Content addressing is only supported for json resources."),{content:w})));const _=null!==p&&void 0!==p&&p.contentAddressed&&"json"===w.type?(0,o.F)(w.jsonString):null!==(r=null===b||void 0===b?void 0:b.filename)&&void 0!==r?r:(0,n.DO)(),I=(0,a.v_)(null!==(s=null===p||void 0===p?void 0:p.prefix)&&void 0!==s?s:null===b||void 0===b?void 0:b.prefix,_),L="".concat(I,".").concat((0,u.B)(w));if(null!==p&&void 0!==p&&p.contentAddressed&&h.resources&&"json"===w.type){var F;const e=null!==(F=h.resources.toKeep.find((e=>e.resource.path===L)))&&void 0!==F?F:h.resources.toAdd.find((e=>e.resource.path===L));if(e)return void(g[m]=e.resource.itemRelativeUrl)}const S=h.portalItem.resourceFromPath(L);(0,a.jc)(d)&&h.resources&&h.resources.pendingOperations.push((0,a.gi)(d).then((e=>{S.path="".concat(I,".").concat((0,u.B)({type:"blob",blob:e})),g[m]=S.itemRelativeUrl})).catch((()=>{})));const C=null!==(l=null===p||void 0===p?void 0:p.compress)&&void 0!==l&&l;h.resources&&f({...e,resource:S,content:w,compress:C,updates:h.resources.toAdd}),g[m]=S.itemRelativeUrl}function f(e){let{object:t,propertyName:r,updates:i,resource:o,content:s,compress:a}=e;i.push({resource:o,content:s,compress:a,finish:e=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function v(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},5838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ge});var i=r(27366),o=r(52639),s=r(44055),a=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),n=r(76200),l=r(11582),d=r(40281),p=r(10064),u=r(32718),c=r(97642),y=r(66978),h=r(94172),f=r(35995),v=r(49861),g=(r(25243),r(63780),r(93169),r(23879)),m=r(38511),b=r(69912),w=r(25265),_=r(30651),I=r(27961),L=r(11936),F=r(56601),S=r(6061),C=r(29598),j=r(56811),O=r(81118),x=r(25899),A=r(84076),E=r(96978),P=r(45948),R=r(38558),T=r(87562),Z=r(10536),U=r(25610),D=r(52410),N=r(37270),q=r(34207),G=r(77748),Q=r(85116),k=r(71065),V=r(19610),J=r(46784);let M=class extends J.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,i._)([(0,v.Cb)({type:String,json:{read:!0,write:!0}})],M.prototype,"name",void 0),(0,i._)([(0,v.Cb)({type:String,json:{read:!0,write:!0}})],M.prototype,"field",void 0),(0,i._)([(0,v.Cb)({type:[Number],json:{read:!0,write:!0}})],M.prototype,"currentRangeExtent",void 0),(0,i._)([(0,v.Cb)({type:[Number],json:{read:!0,write:!0}})],M.prototype,"fullRangeExtent",void 0),(0,i._)([(0,v.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],M.prototype,"type",void 0),M=(0,i._)([(0,b.j)("esri.layers.support.RangeInfo")],M);var z,H=r(84652),K=r(96866),B=r(51370),W=r(80885),Y=r(45925);let X=z=class extends((0,J.eC)(d.Z.ofType(W.Z))){constructor(e){super(e)}clone(){return new z(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){var t;const r=null===e||void 0===e||null===(t=e.layer)||void 0===t?void 0:t.spatialReference;return r?this.toArray().map((t=>{if(!r.equals(t.spatialReference)){if(!(0,Y.canProjectWithoutEngine)(t.spatialReference,r))return null!==e&&void 0!==e&&e.messages&&e.messages.push(new B.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const i=new W.Z;(0,Y.projectPolygon)(t,i,r),t=i}const i=t.toJSON(e);return delete i.spatialReference,i})).filter((e=>null!=e)):(null!==e&&void 0!==e&&e.messages&&e.messages.push(new B.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new z;return e.forEach((e=>r.add(W.Z.fromJSON(e,t)))),r}};X=z=(0,i._)([(0,b.j)("esri.layers.support.PolygonCollection")],X);const $=X;var ee,te=r(53283);let re=ee=class extends J.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new $,this._geometriesSource=null}initialize(){this.addHandles((0,h.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),h.Z_))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=$.fromJSON(e,r):this._geometriesSource={url:(0,te.f)(e,r),context:r}}async loadGeometries(e,t){if(null==this._geometriesSource)return;const{url:r,context:i}=this._geometriesSource,o=await(0,n.Z)(r,{responseType:"json",signal:null===t||void 0===t?void 0:t.signal}),s=e.toJSON(),a=o.data.map((e=>({...e,spatialReference:s})));this.geometries=$.fromJSON(a,i),this._geometriesSource=null}clone(){const e=new ee({geometries:(0,H.d9)(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};(0,i._)([(0,v.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],re.prototype,"spatialRelationship",void 0),(0,i._)([(0,v.Cb)({type:$,nonNullable:!0,json:{write:!0}}),(0,K.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],re.prototype,"geometries",void 0),(0,i._)([(0,m.r)(["web-scene","portal-item"],"geometries")],re.prototype,"readGeometries",null),re=ee=(0,i._)([(0,b.j)("esri.layers.support.SceneFilter")],re);const ie=re;var oe=r(21371),se=r(21149),ae=r(74509),ne=r(28554),le=r(81085),de=r(25220),pe=r(24405),ue=r(81219);const ce=new Set(["3DObject","Point"]),ye=(0,U.v)();let he=class extends((0,F.o1)((0,O.Vt)((0,L.Y)((0,S.q)((0,C.I)((0,j.M)((0,c.R)((0,I.V)((0,l.J)(_.Z)))))))))){constructor(){super(...arguments),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new d.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,i,o;const s=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(r=r.domains)||void 0===r?void 0:r[e];return s&&"inherited"!==s.type?s:null!==(i=null===(o=this.getField(e))||void 0===o?void 0:o.domain)&&void 0!==i?i:null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.types)&&void 0!==e?e:[]}get typeIdField(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.typeIdField)&&void 0!==e?e:null}get templates(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.templates)&&void 0!==e?e:null}get formTemplate(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.formTemplate)&&void 0!==e?e:null}get fieldsIndex(){return new D.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:q.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer(null===(e=this.associatedLayer)||void 0===e?void 0:e.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&(0,R.sX)(this.associatedLayer)}get geometryType(){return ve[this.profile]||"mesh"}set renderer(e){(0,N.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer(null===(e=this.associatedLayer)||void 0===e?void 0:e.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){var t;e=null!=e?e:E.C;const{query:r,queryRelated:i,editing:{supportsGlobalId:o,supportsRollbackOnFailure:s,supportsUploadWithItemId:a,supportsGeometryUpdate:n,supportsReturnServiceEditsInSourceSpatialReference:l},data:{supportsZ:d,supportsM:p,isVersioned:u,supportsAttachment:c},operations:{supportsEditing:y,supportsAdd:h,supportsUpdate:f,supportsDelete:v,supportsQuery:g,supportsQueryAttachments:m,supportsAsyncConvert3D:b}}=e,w=e.operations.supportsChangeTracking,_=!(null===(t=this.associatedLayer)||void 0===t||!t.infoFor3D)&&(0,ne.Rx)();return{query:r,queryRelated:i,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:l,supportsRollbackOnFailure:s,supportsGeometryUpdate:_&&n,supportsUploadWithItemId:a},data:{supportsAttachment:c,supportsZ:d,supportsM:p,isVersioned:u},operations:{supportsQuery:g,supportsQueryAttachments:m,supportsEditing:y&&w,supportsAdd:_&&h&&w,supportsDelete:_&&v&&w,supportsUpdate:f&&w,supportsAsyncConvert3D:b}}}get editingEnabled(){var e,t;return this._isOverridden("editingEnabled")?this._get("editingEnabled"):null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.editingEnabled)&&void 0!==e&&e}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.infoFor3D)&&void 0!==e?e:null}get relationships(){var e;return null===(e=this.associatedLayer)||void 0===e?void 0:e.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.displayField)&&void 0!==e?e:null}readProfile(e,t){const r=t.store.profile;return null!=r&&fe[r]?fe[r]:(u.Z.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=null!=e?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(y.r9),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await(0,oe.y)(this,{origin:"service"},t),(0,N.YN)(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){u.Z.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new se.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new p.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new p.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){var r;const i=(0,N.Lk)(this.fieldsIndex,await(0,pe.e7)(this,(0,pe.V5)(this)));return(0,de.xe)(this.parsedUrl.path,null!==(r=this.attributeStorageInfo)&&void 0!==r?r:[],e,t,i)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new p.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new o.Z;return i.attributes=r[0],i.layer=this,i.sourceLayer=this,i}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(u.Z.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,le.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!==e&&void 0!==e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new p.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p.Z("scenelayer:field-unexisting","Field '".concat(e,"' does not exist on the layer"));for(const i of this.statisticsInfo)if(i.name===r.name){const e=(0,f.v_)(this.parsedUrl.path,i.href);return(0,n.Z)(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new p.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(O.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(O.xp.SAVE,e)}async applyEdits(e,t){var i,o;const{applyEdits:s}=await r.e(9887).then(r.bind(r,29887));let a=t;await this.load();const n=this.associatedLayer;if(!n)throw new p.Z("".concat(this.type,"-layer:not-editable"),"Service is not editable");await n.load();const{globalIdField:l}=n,d=!!n.infoFor3D,u=null===(i=null===(o=a)||void 0===o?void 0:o.globalIdUsed)||void 0===i||i;if(d&&null==l)throw new p.Z("".concat(this.type,"-layer:not-editable"),"Valid globalIdField expected on editable SceneLayer");if(d&&!u)throw new p.Z("".concat(this.type,"-layer:globalid-required"),"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return(0,x.M8)(n.url)&&d&&null!=e.deleteFeatures&&null!=l&&(a={...a,globalIdToObjectId:await(0,R.HW)(n,e.deleteFeatures,l)}),s(this,n.source,e,a)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new p.Z("".concat(this.type,"-layer:not-editable"),"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!ce.has(e.layerType))throw new p.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const o=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=o;break;case"vertex-reference-frame":r=!0,i=!o;break;default:r=!1}}if(!r)throw new p.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new p.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new p.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const t of this.fields){var e;const r=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((e=>e.name===t.name))),i=!(null===(e=this.associatedLayer)||void 0===e||null===(e=e.fields)||void 0===e||!e.some((e=>e&&t.name===e.name))),o={supportsLabelingInfo:r,supportsRenderer:r,supportsPopupTemplate:r||i,supportsLayerQuery:i};this._fieldUsageInfo[t.name]=o}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){var e;if(null===(e=this.associatedLayer)||void 0===e||!e.fields)return;let t=null;for(const r of this.associatedLayer.fields){const e=this.getField(r.name);e?(!e.domain&&r.domain&&(e.domain=r.domain.clone()),e.editable=r.editable,e.nullable=r.nullable,e.length=r.length):(t||(t=this.fields?this.fields.slice():[]),t.push(r.clone()))}t&&this._set("fields",t)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=(0,g.vw)(this);for(let r=0;r<e.length;r++){const i=e[r],o=this.originIdOf(i),s=this.associatedLayer.originIdOf(i);o<s&&(s===w.s3.SERVICE||s===w.s3.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],s)}}_applyAssociatedLayerExtentOverride(){var e,t,r,i,o,s;const a=null===(e=this.associatedLayer)||void 0===e||null===(e=e.editingInfo)||void 0===e?void 0:e.lastEditDate,n=null===(t=this.associatedLayer)||void 0===t?void 0:t.serverGens,l=null===(r=this.associatedLayer)||void 0===r?void 0:r.getAtOrigin("fullExtent","service");(0,ne.Rx)()&&null!=(null===(i=this.associatedLayer)||void 0===i?void 0:i.infoFor3D)&&l&&(0,x.M8)(null===(o=this.associatedLayer)||void 0===o?void 0:o.url)&&a&&(null===(s=this.serviceUpdateTimeStamp)||void 0===s?void 0:s.lastUpdate)!==a.getTime()&&(this.serviceUpdateTimeStamp||(null===n||void 0===n?void 0:n.minServerGen)!==(null===n||void 0===n?void 0:n.serverGen))&&(0,g.vw)(this).setAtOrigin("fullExtent",l.clone(),w.s3.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:i}=await(0,A.w)("".concat(this.url,"/layers/").concat(this.layerId),{sceneLayerItem:this.portalItem,apiKey:this.apiKey,signal:e}),o=await V.T.FeatureLayer();this.associatedLayer=new o({url:t,layerId:r,portalItem:i}),await this.associatedLayer.load()}catch(t){(0,y.D_)(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,h.N1)((()=>this.popupEnabled&&null!=this.popupTemplate));const e="this SceneLayer: ".concat(this.title);null==this.attributeStorageInfo?u.Z.getLogger(this).warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ".concat(e)):u.Z.getLogger(this).info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ".concat(e))}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&(0,ae.LR)(u.Z.getLogger(this),(0,ae.Wb)("Mesh scene layers","relative-to-scene",e)),(0,ae.LR)(u.Z.getLogger(this),(0,ae.kf)("Scene layers",e))}};(0,i._)([(0,v.Cb)({types:{key:"type",base:T.B,typeMap:{selection:Z.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],he.prototype,"featureReduction",void 0),(0,i._)([(0,v.Cb)({type:[M],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],he.prototype,"rangeInfos",void 0),(0,i._)([(0,v.Cb)({json:{read:!1}})],he.prototype,"associatedLayer",void 0),(0,i._)([(0,v.Cb)({type:["show","hide"]})],he.prototype,"listMode",void 0),(0,i._)([(0,v.Cb)({type:["ArcGISSceneServiceLayer"]})],he.prototype,"operationalLayerType",void 0),(0,i._)([(0,v.Cb)({json:{read:!1},readOnly:!0})],he.prototype,"type",void 0),(0,i._)([(0,v.Cb)({...ye.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],he.prototype,"fields",void 0),(0,i._)([(0,v.Cb)()],he.prototype,"types",null),(0,i._)([(0,v.Cb)()],he.prototype,"typeIdField",null),(0,i._)([(0,v.Cb)()],he.prototype,"templates",null),(0,i._)([(0,v.Cb)()],he.prototype,"formTemplate",null),(0,i._)([(0,v.Cb)({readOnly:!0,clonable:!1})],he.prototype,"fieldsIndex",null),(0,i._)([(0,v.Cb)({type:k.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],he.prototype,"floorInfo",void 0),(0,i._)([(0,v.Cb)(ye.outFields)],he.prototype,"outFields",void 0),(0,i._)([(0,v.Cb)({type:q.U4,readOnly:!0,json:{read:!1}})],he.prototype,"nodePages",void 0),(0,i._)([(0,m.r)("service","nodePages",["nodePages","pointNodePages"])],he.prototype,"readNodePages",null),(0,i._)([(0,v.Cb)({type:[q.QI],readOnly:!0})],he.prototype,"materialDefinitions",void 0),(0,i._)([(0,v.Cb)({type:[q.Yh],readOnly:!0})],he.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,v.Cb)({type:[q.H3],readOnly:!0})],he.prototype,"geometryDefinitions",void 0),(0,i._)([(0,v.Cb)({readOnly:!0})],he.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,v.Cb)({readOnly:!0})],he.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,v.Cb)({readOnly:!0})],he.prototype,"statisticsInfo",void 0),(0,i._)([(0,v.Cb)({type:d.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],he.prototype,"excludeObjectIds",void 0),(0,i._)([(0,v.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],he.prototype,"definitionExpression",void 0),(0,i._)([(0,v.Cb)({type:ie,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],he.prototype,"filter",void 0),(0,i._)([(0,v.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],he.prototype,"path",void 0),(0,i._)([(0,v.Cb)(P.PV)],he.prototype,"elevationInfo",null),(0,i._)([(0,v.Cb)({readOnly:!0,json:{read:!1}})],he.prototype,"effectiveCapabilities",null),(0,i._)([(0,v.Cb)({readOnly:!0})],he.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,v.Cb)({type:String})],he.prototype,"geometryType",null),(0,i._)([(0,v.Cb)(P.iR)],he.prototype,"labelsVisible",void 0),(0,i._)([(0,v.Cb)({type:[G.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:Q.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Q.r},write:!0}})],he.prototype,"labelingInfo",void 0),(0,i._)([(0,v.Cb)(P.rn)],he.prototype,"legendEnabled",void 0),(0,i._)([(0,v.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r;if("number"==typeof e&&e>=0&&e<=1)return e;const i=null===(r=t.layerDefinition)||void 0===r||null===(r=r.drawingInfo)||void 0===r?void 0:r.transparency;return void 0!==i?(0,ue.b)(i):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],he.prototype,"opacity",void 0),(0,i._)([(0,v.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],he.prototype,"priority",void 0),(0,i._)([(0,v.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],he.prototype,"semantic",void 0),(0,i._)([(0,v.Cb)({types:a.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],he.prototype,"renderer",null),(0,i._)([(0,v.Cb)({json:{read:!1}})],he.prototype,"cachedDrawingInfo",void 0),(0,i._)([(0,m.r)("service","cachedDrawingInfo")],he.prototype,"readCachedDrawingInfo",null),(0,i._)([(0,v.Cb)({readOnly:!0,json:{read:!1}})],he.prototype,"capabilities",null),(0,i._)([(0,v.Cb)({type:Boolean,json:{read:!1}})],he.prototype,"editingEnabled",null),(0,i._)([(0,v.Cb)({readOnly:!0,json:{write:!1,read:!1}})],he.prototype,"infoFor3D",null),(0,i._)([(0,v.Cb)({readOnly:!0,json:{write:!1,read:!1}})],he.prototype,"relationships",null),(0,i._)([(0,v.Cb)(P.C_)],he.prototype,"popupEnabled",void 0),(0,i._)([(0,v.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],he.prototype,"popupTemplate",void 0),(0,i._)([(0,v.Cb)({readOnly:!0,json:{read:!1}})],he.prototype,"defaultPopupTemplate",null),(0,i._)([(0,v.Cb)({type:String,json:{read:!1}})],he.prototype,"objectIdField",void 0),(0,i._)([(0,m.r)("service","objectIdField",["objectIdField","fields"])],he.prototype,"readObjectIdField",null),(0,i._)([(0,v.Cb)({type:String,json:{read:!1}})],he.prototype,"globalIdField",void 0),(0,i._)([(0,m.r)("service","globalIdField",["globalIdField","fields"])],he.prototype,"readGlobalIdField",null),(0,i._)([(0,v.Cb)({readOnly:!0,type:String,json:{read:!1}})],he.prototype,"displayField",null),(0,i._)([(0,v.Cb)({type:String,json:{read:!1}})],he.prototype,"profile",void 0),(0,i._)([(0,m.r)("service","profile",["store.profile"])],he.prototype,"readProfile",null),(0,i._)([(0,v.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],he.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,v.Cb)(P.YI)],he.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,v.Cb)({json:{read:!1,origins:{service:{read:!0}}}})],he.prototype,"serviceItemId",void 0),he=(0,i._)([(0,b.j)("esri.layers.SceneLayer")],he);const fe={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ve={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},ge=he},22892:(e,t,r)=>{r.d(t,{B:()=>o});var i=r(35995);function o(e){return s[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,i.Ml)(e);return l[t]||a}(e.url)}(e)]||n}const s={},a="text/plain",n=s[a],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const d in l)s[l[d]]=d}}]);
//# sourceMappingURL=5838.a0cea473.chunk.js.map