"use strict";(self.webpackChunkmmsp_land_hl=self.webpackChunkmmsp_land_hl||[]).push([[788],{94109:(e,t,i)=>{i.d(t,{$6:()=>$,$y:()=>V,BB:()=>U,Cj:()=>z,FM:()=>he,Fn:()=>H,GS:()=>te,Ib:()=>w,Im:()=>C,JS:()=>B,KA:()=>K,Kg:()=>n,Kt:()=>g,NG:()=>de,NS:()=>E,Of:()=>O,Pp:()=>h,S:()=>q,SQ:()=>W,Sf:()=>L,T3:()=>G,U8:()=>x,Ux:()=>re,Uz:()=>oe,Vo:()=>F,WD:()=>se,Wq:()=>ie,XO:()=>_,XT:()=>c,Zt:()=>P,_E:()=>X,ad:()=>d,av:()=>le,b7:()=>v,dD:()=>Y,do:()=>M,g3:()=>I,gV:()=>ae,gr:()=>l,i9:()=>a,iD:()=>y,j9:()=>Z,jS:()=>m,k9:()=>r,kU:()=>k,mb:()=>j,nY:()=>N,o2:()=>S,oh:()=>o,pZ:()=>Q,pb:()=>R,qu:()=>T,rL:()=>ee,s4:()=>D,tg:()=>f,uk:()=>u,vk:()=>A,wJ:()=>b,x_:()=>p,yc:()=>J,zE:()=>ne});var s=i(93169);const r=1e-30,l=4294967295,a=512,n=128,o=511,d=16777216,h=8,p=10,u=29,y=24,c=8,v={metrics:{width:15,height:17,left:0,top:-7,advance:14}},g=0,b=0,w=0,_=1,m=2,f=3,V=4,C=5,S=6,R=12,P=5,L=6,O=5,A=6,Z=0,q=1,x=2,j=3,H=4,E=2,U=1,I=2,k=4,M=1.05,N=(0,s.Z)("featurelayer-force-marker-text-draw-order")?.5:3,Y=5,X=6,F=1.15,D=2,T=128-2*D,G=8,z=500,B=10,K=1024,W=2,J=0,$=1,Q=4,ee=8,te=16,ie=4,se=1,re=4,le=8,ae=32,ne=64,oe=128,de=4,he=2},60531:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var s=i(27366),r=(i(32718),i(25243),i(63780),i(93169),i(10064),i(69912)),l=i(95986),a=i(40281),n=i(60354),o=i(94172),d=i(49861),h=i(67581);let p=class extends h.Z{constructor(e){super(e),this.type="group",this.layerViews=new a.Z}destroy(){this.layerViews.length=0}_allLayerViewVisibility(e){this.layerViews.forEach((t=>{t.visible=e}))}initialize(){this.addHandles([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),(0,o.YP)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.visibilityMode}),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))}),o.Z_),(0,o.YP)((()=>this.visible),(e=>{this._applyVisibility((()=>this._allLayerViewVisibility(e)),(()=>{}))}),o.Z_)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(e){this._set("layerViews",(0,n.Z)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,t)=>e+t.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.layerViews.some((e=>e.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((t=>t.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const t=this._findLayerViewForLayer(e);return!(null===t||void 0===t||!t.visible)}));return e&&this._findLayerViewForLayer(e)}_applyExclusiveVisibility(e){null==e&&null==(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((t=>{t.visible=t===e}))}_layerViewsChangeHandler(e){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map((e=>(0,o.YP)((()=>e.visible),(t=>this._applyVisibility((()=>{t!==this.visible&&(e.visible=this.visible)}),(()=>this._applyExclusiveVisibility(t?e:null)))),o.Z_))).toArray(),"grouplayerview:visible");const t=e.added[e.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null!==t&&void 0!==t&&t.visible?t:null)))}_applyVisibility(e,t){var i,s;this._hasLayerViewVisibleOverrides()&&("inherited"===(null===(i=this.layer)||void 0===i?void 0:i.visibilityMode)?e():"exclusive"===(null===(s=this.layer)||void 0===s?void 0:s.visibilityMode)&&t())}};(0,s._)([(0,d.Cb)({cast:n.R})],p.prototype,"layerViews",null),(0,s._)([(0,d.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],p.prototype,"view",void 0),p=(0,s._)([(0,r.j)("esri.views.layers.GroupLayerView")],p);const u=p;let y=class extends((0,l.y)(u)){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};y=(0,s._)([(0,r.j)("esri.views.2d.layers.GroupLayerView2D")],y);const c=y},95986:(e,t,i)=>{i.d(t,{y:()=>Z});var s=i(27366),r=i(40281),l=i(60354),a=i(10064),n=i(94172),o=i(49861),d=(i(25243),i(63780),i(93169),i(69912)),h=i(82582),p=i(33624),u=i(64634),y=i(46784);let c=class extends y.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({readOnly:!0})],c.prototype,"version",null),c=(0,s._)([(0,d.j)("esri.views.layers.support.ClipArea")],c);const v=c;var g;let b=g=class extends v{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],b.prototype,"left",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],b.prototype,"right",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],b.prototype,"top",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],b.prototype,"bottom",void 0),b=g=(0,s._)([(0,d.j)("esri.views.layers.support.ClipRect")],b);const w=b;i(59486);var _,m=i(32238),f=i(77981),V=i(53866),C=i(80885);const S={base:m.Z,key:"type",typeMap:{extent:V.Z,polygon:C.Z}};let R=_=class extends v{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new _({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,o.Cb)({types:S,json:{read:f.im,write:!0}})],R.prototype,"geometry",void 0),R=_=(0,s._)([(0,d.j)("esri.views.layers.support.Geometry")],R);const P=R;let L=class extends v{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,o.Cb)({type:[[[Number]]],json:{write:!0}})],L.prototype,"path",void 0),L=(0,s._)([(0,d.j)("esri.views.layers.support.Path")],L);const O=L,A=r.Z.ofType({key:"type",base:null,typeMap:{rect:w,path:O,geometry:P}}),Z=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new A,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,n.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),n.tX),(0,n.YP)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),n.tX),(0,n.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),n.tX),(0,n.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),n.tX),(0,n.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),n.tX),(0,n.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),n.tX),(0,n.YP)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),n.tX)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,h.o2)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,o.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,o.Cb)({type:A,set(e){const t=(0,l.Z)(e,this._get("clips"),A);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updating",null),(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,o.Cb)({type:u.Z})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,d.j)("esri.views.2d.layers.LayerView2D")],t),t}},67581:(e,t,i)=>{i.d(t,{Z:()=>c});var s=i(27366),r=i(7138),l=i(91505),a=i(79056),n=i(32718),o=i(92026),d=i(67426),h=i(49861),p=(i(25243),i(63780),i(93169),i(69912)),u=i(46634);let y=class extends((0,a.IG)((0,d.v)(l.Z.EventedMixin(r.Z)))){constructor(e){super(e),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";n.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,h.Cb)()],y.prototype,"fullOpacity",null),(0,s._)([(0,h.Cb)()],y.prototype,"layer",void 0),(0,s._)([(0,h.Cb)()],y.prototype,"parent",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,s._)([(0,h.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,s._)([(0,h.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,s._)([(0,h.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,s._)([(0,h.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,s._)([(0,h.Cb)()],y.prototype,"visible",null),(0,s._)([(0,h.Cb)()],y.prototype,"view",void 0),y=(0,s._)([(0,p.j)("esri.views.layers.LayerView")],y);const c=y}}]);
//# sourceMappingURL=788.908ecc91.chunk.js.map