import{S as k,i as E,s as q,w as B,x as C,y as D,K as y,q as b,o as w,B as I,e as d,t as L,k as S,c as h,a as v,h as V,d as f,m as A,b as m,g as x,J as $,L as J}from"../../chunks/vendor-fba1135e.js";import K from"../RecipeCard.svelte-1a2bd2fa.js";import{r as R}from"../../chunks/recipes-b3f85881.js";function j(o,t,l){const a=o.slice();return a[0]=t[l],a[2]=l,a}function z(o){let t,l;return t=new K({props:{index:o[2]}}),{c(){B(t.$$.fragment)},l(a){C(t.$$.fragment,a)},m(a,n){D(t,a,n),l=!0},p:y,i(a){l||(b(t.$$.fragment,a),l=!0)},o(a){w(t.$$.fragment,a),l=!1},d(a){I(t,a)}}}function F(o){let t,l,a,n,i,_,u=R,s=[];for(let e=0;e<u.length;e+=1)s[e]=z(j(o,u,e));return{c(){t=d("a"),l=L("map"),a=S(),n=d("div"),i=d("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=h(e,"A",{href:!0});var r=v(t);l=V(r,"map"),r.forEach(f),a=A(e),n=h(e,"DIV",{id:!0,class:!0});var c=v(n);i=h(c,"DIV",{id:!0,class:!0});var g=v(i);for(let p=0;p<s.length;p+=1)s[p].l(g);g.forEach(f),c.forEach(f),this.h()},h(){m(t,"href","/recipes/map"),m(i,"id","cards"),m(i,"class","svelte-xbcwne"),m(n,"id","container"),m(n,"class","svelte-xbcwne")},m(e,r){x(e,t,r),$(t,l),x(e,a,r),x(e,n,r),$(n,i);for(let c=0;c<s.length;c+=1)s[c].m(i,null);_=!0},p:y,i(e){if(!_){for(let r=0;r<u.length;r+=1)b(s[r]);_=!0}},o(e){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)w(s[r]);_=!1},d(e){e&&f(t),e&&f(a),e&&f(n),J(s,e)}}}class N extends k{constructor(t){super();E(this,t,null,F,q,{})}}export{N as default};