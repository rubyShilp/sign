"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[714],{3714:(e,t,r)=>{r.d(t,{U2:()=>i,v_:()=>u});var n=r(4206);var s=r.n(n);var o=r(8171);s().defaults.headers={"Content-Type":"application/json;charset=utf-8;charset=UTF-8"||0,"X-Frame-Options":"SAMEORIGIN"};s().defaults.baseURL="/";s().interceptors.request.use(function(e){if((0,o.r)()){e.headers.token=(0,o.r)()}return e},function(e){return Promise.reject(e)});s().interceptors.response.use(function(e){if(e.data.position==="sessionOut"){sessionStorage.removeItem("TOKEN");(0,o.Bn)();return}else if(e.status===200){return e}},function(e){return Promise.reject(e)});function u(e,t){return s().post(e,t)}function i(e,t){return s().get(e,{params:t})}function a(e,t){return axios.post(e,t)}function c(e,t){return axios.post(e,t,{responseType:"blob"})}}}]);