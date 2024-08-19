"use strict";(self.webpackChunkmmsp_land_hl=self.webpackChunkmmsp_land_hl||[]).push([[2719],{93655:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(27366),s=i(49861),n=(i(93169),i(32718),i(84936),i(69912)),o=i(68748),l=i(30651),a=i(6693),h=i(56811),d=i(78983),p=i(64575);let y=class extends((0,a.h7)((0,h.M)(l.Z))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new d.J,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,r._)([(0,s.Cb)({type:p.Z})],y.prototype,"elevationInfo",void 0),(0,r._)([(0,s.Cb)((0,o.z)(d.J,"graphics"))],y.prototype,"graphics",void 0),(0,r._)([(0,s.Cb)({type:["show","hide"]})],y.prototype,"listMode",void 0),(0,r._)([(0,s.Cb)()],y.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,s.Cb)({readOnly:!0})],y.prototype,"type",void 0),(0,r._)([(0,s.Cb)({constructOnly:!0})],y.prototype,"internal",void 0),y=(0,r._)([(0,n.j)("esri.layers.GraphicsLayer")],y);const c=y},72335:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(27366),s=i(11582),n=i(46784),o=i(49861),l=(i(93169),i(32718),i(84936),i(69912));let a=class extends((0,s.J)(n.wq)){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};(0,r._)([(0,o.Cb)({type:Boolean})],a.prototype,"frameCenter",void 0),(0,r._)([(0,o.Cb)({type:Boolean})],a.prototype,"frameOutline",void 0),(0,r._)([(0,o.Cb)({type:Boolean})],a.prototype,"lineOfSight",void 0),(0,r._)([(0,o.Cb)({type:Boolean})],a.prototype,"sensorLocation",void 0),(0,r._)([(0,o.Cb)({type:Boolean})],a.prototype,"sensorTrail",void 0),a=(0,r._)([(0,l.j)("esri.layers.support.TelemetryDisplay")],a);const h=a},52719:(e,t,i)=>{i.r(t),i.d(t,{default:()=>R});var r=i(27366),s=i(51995),n=i(52639),o=(i(51508),i(92026)),l=i(94172),a=i(49861),h=(i(93169),i(32718),i(84936),i(69912)),d=i(93655),p=i(72335),y=i(70508),c=(i(59486),i(98928)),m=i(100),u=i(17842),v=i(6644),_=i(45925),g=i(87422),f=i(20921),C=i(44070),b=i(8548),w=i(57808),x=i(52311),T=i(45412),P=i(80885),O=i(848);class G extends g.s{constructor(e){super(),this.element=e,this._handles=new m.Z,this.isWrapAround=!1,this.perspectiveTransform=(0,v.Ue)(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add((0,l.gx)((()=>this.element),(()=>{const e=this.element;this.ready(),e&&this._handles.add((0,c.on)(e,"play",(()=>this.requestRender())))}),l.nn))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=(0,o.M2)(this.texture),this._vao&&(this._vao.dispose(),this._vao=null),this._vbo&&(this._vbo.dispose(),this._vbo=null),this.texture&&(this.texture.dispose(),this.texture=null)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(null==t)return;const{context:i}=e,{videoWidth:r,videoHeight:s}=t;if(0!==r&&0!==s){if(this.texture)t.paused||this.texture.setData(t);else{const e=new x.X;e.wrapMode=b.e8.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=r,e.height=s,this.texture=new w.x(i,e,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,i,r){const s=this.element,n=this._getFrameInfo();if(!s||!n)return;this._initializeData(e,n,i);const{controlPoints:o,horizon:l}=n,a=Math.sqrt(o.length),h=a,{x:d,y:p}=e,y=this._vertices,c=o[0],m=o[a-1],u=o[(h-1)*a],v=o[(h-1)*a+a-1],g=(0,_.project)(l?l[0].mapPoint:c.mapPoint,i),C=(0,_.project)(l?l[1].mapPoint:m.mapPoint,i),b=(0,_.project)(u.mapPoint,i),w=(0,_.project)(v.mapPoint,i);this.clipGeometry=l?new f.Z({geometry:P.Z.fromJSON({rings:[[[b.x,b.y],[w.x,w.y],[C.x,C.y],[g.x,g.y],[b.x,b.y]]],spatialReference:i})}):null;for(let f=0;f<o.length;f++){const e=o[f],{sourcePoint:t,mapPoint:r}=e;if(null==t||null==r)continue;const s=(0,_.project)(r,i);y[2*f+0]=s.x-d,y[2*f+1]=s.y-p}let x=t;if(r){const e=Math.min(g.x,C.x,b.x,w.x),t=Math.max(g.x,C.x,b.x,w.x),{worldWidth:i,xBounds:s}=r,[n,o]=s;e<n&&t>n?x=i:t>o&&e<o&&(x=-i)}this.wrapAroundShift=x,this.isWrapAround=0!==x}getVAO(e,t,i){if(null==this._vertices)return null;const r=this._vertices;if(this._vao)this._vbo.setData(r);else{this._vbo=C.f.createVertex(e,b.l1.DYNAMIC_DRAW,r);const s=C.f.createVertex(e,b.l1.STATIC_DRAW,this._texCoords);this._ibo=C.f.createIndex(e,b.l1.DYNAMIC_DRAW,this._indices),this._vao=new T.U(e,i,t,{geometry:this._vbo,tex:s},this._ibo)}return this._vao}draw(e){e.drawElements(b.MX.TRIANGLE_STRIP,this._indices.length,e.gl.UNSIGNED_SHORT,0)}_initializeData(e,t,i){if(null!=this._vertices&&null!=this._indices)return;const{controlPoints:r}=t,s=Math.sqrt(r.length),n=s,o=new Float32Array(2*r.length),l=new Uint16Array(2*r.length);for(let d=0;d<r.length;d++){const t=r[d],{sourcePoint:s,mapPoint:n}=t;if(null==s||null==n)continue;const a=(0,_.project)(n,i);o[2*d+0]=a.x-e.x,o[2*d+1]=a.y-e.y,l[2*d+0]=s.x,l[2*d+1]=s.y}const a=new Uint16Array(n*s+(n-2)*(s+2));let h=0;for(let d=0;d<n;d++){for(let e=0;e<s;e++)a[h++]=d*s+e,a[h++]=(d+1)*s+e;d<n-2&&(a[h++]=(d+1)*s+(s-1),a[h++]=(d+1)*s)}this._vertices=o,this._texCoords=l,this._indices=a}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let i=null;if(t){const e=t.startX,r=t.startY,s=t.endX,n=t.endY;i=[{sourcePoint:(0,u.vW)(e,r),mapPoint:new O.Z(t.startLongitude,t.startLatitude)},{sourcePoint:(0,u.vW)(s,n),mapPoint:new O.Z(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:i}}_getFrameControlPoints(){const e=this.groundControlPoints,t=null===e||void 0===e?void 0:e.length;if(!t)return[];const i=new Array(t);for(let r=0;r<t;r++){const{x:t,y:s,lat:n,lon:o}=e[r];i[r]={sourcePoint:(0,u.vW)(t,-s),mapPoint:new O.Z(o,n)}}return i}}var D=i(88109),L=i(75391),S=i(85992),Z=i(67581),A=i(61459),E=i(16851),M=i(16072);const H=new s.Z([255,127,0]);let V=class extends((0,D.y)(Z.Z)){constructor(){super(...arguments),this._graphicsLayer=new d.Z,this._frameOutlineGraphic=new n.Z({symbol:new A.Z({outline:{type:"simple-line",color:H}})}),this._sensorTrailGraphic=new n.Z({symbol:new E.Z({color:H})}),this._lineOfSightGraphic=new n.Z({symbol:new E.Z({color:H})}),this._sensorLocationGraphic=new n.Z({symbol:new M.Z({color:H})}),this._frameCenterGraphic=new n.Z({symbol:new M.Z({color:H})}),this._overlayContainer=null,this.layer=null,this.symbolColor=H,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=(0,o.SC)(this._graphicsLayer)}initialize(){var e,t,i,r,s,n,o,a,h,d;this.addHandles((0,l.YP)((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor}),l.nn)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new p.Z({frameCenter:null===(e=null===(t=this.layer.telemetryDisplay)||void 0===t?void 0:t.frameCenter)||void 0===e||e,frameOutline:null===(i=null===(r=this.layer.telemetryDisplay)||void 0===r?void 0:r.frameOutline)||void 0===i||i,lineOfSight:null===(s=null===(n=this.layer.telemetryDisplay)||void 0===n?void 0:n.lineOfSight)||void 0===s||s,sensorLocation:null===(o=null===(a=this.layer.telemetryDisplay)||void 0===a?void 0:a.sensorLocation)||void 0===o||o,sensorTrail:null===(h=null===(d=this.layer.telemetryDisplay)||void 0===d?void 0:d.sensorTrail)||void 0===h||h})}attach(){this._overlayContainer=new y.Z,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new S.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new L.Z(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([(0,l.YP)((()=>{var e,t,i,r,s;return[null===(e=this.layer.telemetryDisplay)||void 0===e?void 0:e.frameCenter,null===(t=this.layer.telemetryDisplay)||void 0===t?void 0:t.frameOutline,null===(i=this.layer.telemetryDisplay)||void 0===i?void 0:i.sensorLocation,null===(r=this.layer.telemetryDisplay)||void 0===r?void 0:r.sensorTrail,null===(s=this.layer.telemetryDisplay)||void 0===s?void 0:s.lineOfSight]}),(()=>this._updateVisibleTelemetryElements()),l.nn),(0,l.YP)((()=>{var e,t,i,r,s;return[this.layer.telemetry,null===(e=this.visibleTelemetryElements)||void 0===e?void 0:e.frameCenter,null===(t=this.visibleTelemetryElements)||void 0===t?void 0:t.frameOutline,null===(i=this.visibleTelemetryElements)||void 0===i?void 0:i.sensorLocation,null===(r=this.visibleTelemetryElements)||void 0===r?void 0:r.sensorTrail,null===(s=this.visibleTelemetryElements)||void 0===s?void 0:s.lineOfSight]}),(()=>this._updateGraphicGeometries()),l.nn)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=(0,o.SC)(this.graphicsView)}supportsSpatialReference(e){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:t}=this;e&&t&&(t.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,t.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,t.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,t.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,t.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const e=new G(this.layer.videoElement);this.addAttachHandles([(0,l.YP)((()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints]),(()=>{e.frameHorizonPoints=this.layer.frameHorizonPoints,e.groundControlPoints=this.layer.groundControlPoints}),l.nn)]),this._overlayContainer.addChild(e),this.view.stage.requestRender()}};(0,r._)([(0,a.Cb)()],V.prototype,"graphicsView",void 0),(0,r._)([(0,a.Cb)()],V.prototype,"layer",void 0),(0,r._)([(0,a.Cb)()],V.prototype,"symbolColor",void 0),(0,r._)([(0,a.Cb)({type:p.Z})],V.prototype,"visibleTelemetryElements",void 0),V=(0,r._)([(0,h.j)("esri.views.2d.layers.VideoLayerView2D")],V);const R=V},75391:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(80613),s=i(39444),n=i(39594);class o extends s.K{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case r.jx.MAP:this._renderChildren(e,r.Xq.All);break;case r.jx.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,n.P9)(e,!1,(e=>{this._renderChildren(e,r.Xq.Highlight)}))}}}}]);
//# sourceMappingURL=2719.16579b19.chunk.js.map