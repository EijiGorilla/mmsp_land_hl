"use strict";(self.webpackChunkmmsp_land_hl=self.webpackChunkmmsp_land_hl||[]).push([[7387],{67387:(e,r,t)=>{t.r(r),t.d(r,{getGeometryServiceURL:()=>c,projectGeometry:()=>u});var n=t(42265),l=t(10064),i=t(7575),o=t(45362),a=t(81943);async function c(){var e;let r,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1?arguments[1]:void 0;if(n.default.geometryServiceUrl)return n.default.geometryServiceUrl;if(!t)throw new l.Z("internal:geometry-service-url-not-configured");r="portal"in t?t.portal||i.Z.getDefault():t,await r.load({signal:o});const a=null===(e=r.helperServices)||void 0===e||null===(e=e.geometry)||void 0===e?void 0:e.url;if(!a)throw new l.Z("internal:geometry-service-url-not-configured");return a}async function u(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;const i=await c(t,n),u=new a.Z;u.geometries=[e],u.outSpatialReference=r;const s=await(0,o.i)(i,u,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new l.Z("internal:geometry-service-projection-failed")}}}]);
//# sourceMappingURL=7387.a3b0f5b3.chunk.js.map