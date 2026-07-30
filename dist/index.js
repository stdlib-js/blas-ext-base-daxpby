"use strict";var m=function(u,i){return function(){try{return i||u((i={exports:{}}).exports,i),i.exports}catch(n){throw (i=0, n)}};};var j=m(function(L,p){
var w=require('@stdlib/blas-base-daxpy/dist').ndarray,z=require('@stdlib/blas-base-dscal/dist').ndarray,c=5;function A(u,i,n,o,s,v,r,f,d){var a,e,t,q;if(u<=0)return r;if(i===0)return z(u,v,r,f,d);if(v===1)return w(u,i,n,o,s,r,f,d);if(a=s,e=d,o===1&&f===1){if(t=u%c,t>0)for(q=0;q<t;q++)r[e]=i*n[a]+v*r[e],a+=o,e+=f;if(u<c)return r;for(q=t;q<u;q+=c)r[e]=i*n[a]+v*r[e],r[e+1]=i*n[a+1]+v*r[e+1],r[e+2]=i*n[a+2]+v*r[e+2],r[e+3]=i*n[a+3]+v*r[e+3],r[e+4]=i*n[a+4]+v*r[e+4],a+=c,e+=c;return r}for(q=0;q<u;q++)r[e]=i*n[a]+v*r[e],a+=o,e+=f;return r}p.exports=A
});var E=m(function(P,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),B=j();function C(u,i,n,o,s,v,r){return B(u,i,n,o,R(u,o),s,v,r,R(u,r))}_.exports=C
});var g=m(function(Q,O){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),F=j();D(M,"ndarray",F);O.exports=M
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=g(),x,k=H(G(__dirname,"./native.js"));I(k)?x=J:x=k;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
