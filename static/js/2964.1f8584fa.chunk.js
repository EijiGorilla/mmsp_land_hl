"use strict";(self.webpackChunkmmsp_land_hl=self.webpackChunkmmsp_land_hl||[]).push([[2964],{12964:(e,t,o)=>{o.r(t),o.d(t,{executeRelationshipQuery:()=>f,executeRelationshipQueryForCount:()=>y});var n=o(23084),r=o(76200),a=o(92975),s=o(22585);function d(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),!o.outFields||null!==t&&void 0!==t&&t.returnCountOnly?delete o.outFields:o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","),o.outSR&&(o.outSR=(0,a.B9)(o.outSR)),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function u(e,t,o){const n=await c(e,t,o),r=n.data,a=r.geometryType,s=r.spatialReference,d={};for(const u of r.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:s,hasZ:!!r.hasZ,hasM:!!r.hasM,features:u.relatedRecords};if(null!=u.objectId)d[u.objectId]=e;else for(const t of Object.keys(u))"relatedRecords"!==t&&(d[u[t]]=e)}return{...n,data:d}}async function c(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;const a=(0,s.A)({...e.query,f:"json",...n,...d(t,n)});return(0,r.Z)(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...a}})}var l=o(49818),i=o(99086);async function f(e,t,o){t=i.default.from(t);return u((0,n.en)(e),t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=l.Z.fromJSON(t[e]))),o}))}async function y(e,t,o){t=i.default.from(t);return async function(e,t,o){const n=await c(e,t,o,{returnCountOnly:!0}),r=n.data,a={};for(const s of r.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return{...n,data:a}}((0,n.en)(e),t,{...o}).then((e=>e.data))}}}]);
//# sourceMappingURL=2964.1f8584fa.chunk.js.map