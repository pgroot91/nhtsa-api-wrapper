import{_ as e}from"./tslib.es6-e8a9b979.js";import{F as r,g as t}from"./Fetch-980165d1.js";class s extends r{constructor(e){super(e)}GetVehicleTypesForMake(r){return e(this,void 0,void 0,(function*(){const e="GetVehicleTypesForMake",s=t(r);if("string"!==s)return Promise.reject(new Error(`${e}, "makeName" argument is required and must be of type string, got: `+`<${s}> ${r}`));const i=yield this.buildQueryString().catch(r=>Promise.reject(new Error(`${e}, Error building query string: ${r}`))),o=`${this.baseUrl}/${e}/${r}${i}`;return yield this.get(o).then(e=>e).catch(r=>Promise.reject(new Error(`${e}, Fetch.get() error: ${r}`)))}))}}export{s as GetVehicleTypesForMake};
//# sourceMappingURL=GetVehicleTypesForMake.js.map