"use strict";var m=function(u,i){return function(){return i||u((i={exports:{}}).exports,i),i.exports}};var j=m(function(L,p){
var w=require('@stdlib/blas-base-daxpy/dist').ndarray,z=require('@stdlib/blas-base-dscal/dist').ndarray,c=5;function A(u,i,a,o,s,n,r,f,d){var v,e,t,q;if(u<=0)return r;if(i===0)return z(u,n,r,f,d);if(n===1)return w(u,i,a,o,s,r,f,d);if(v=s,e=d,o===1&&f===1){if(t=u%c,t>0)for(q=0;q<t;q++)r[e]=i*a[v]+n*r[e],v+=o,e+=f;if(u<c)return r;for(q=t;q<u;q+=c)r[e]=i*a[v]+n*r[e],r[e+1]=i*a[v+1]+n*r[e+1],r[e+2]=i*a[v+2]+n*r[e+2],r[e+3]=i*a[v+3]+n*r[e+3],r[e+4]=i*a[v+4]+n*r[e+4],v+=c,e+=c;return r}for(q=0;q<u;q++)r[e]=i*a[v]+n*r[e],v+=o,e+=f;return r}p.exports=A
});var E=m(function(P,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),B=j();function C(u,i,a,o,s,n,r){return B(u,i,a,o,R(u,o),s,n,r,R(u,r))}_.exports=C
});var g=m(function(Q,O){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),F=j();D(M,"ndarray",F);O.exports=M
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=g(),x,k=H(G(__dirname,"./native.js"));I(k)?x=J:x=k;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
