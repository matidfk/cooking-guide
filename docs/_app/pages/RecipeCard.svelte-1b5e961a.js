import{S as z,i as B,s as F,e as v,t as u,k as H,c as m,a as _,h as p,d as c,m as J,b as i,f as G,g as w,J as r,l as K,K as j}from"../chunks/vendor-b2366b0d.js";import{r as L}from"../chunks/recipes-5063cd40.js";function M(l){let e,s,t,a,h=l[1].name+"",b,g,n,D,S=l[1].cookTime+l[1].prepTime+"",I,V,C,o,T=l[1].description+"",R,y;return{c(){e=v("a"),s=v("div"),t=v("div"),a=v("h2"),b=u(h),g=H(),n=v("div"),D=u("\u23F1 "),I=u(S),V=u(" min"),C=H(),o=v("div"),R=u(T),this.h()},l(f){e=m(f,"A",{href:!0,id:!0,style:!0,class:!0});var d=_(e);s=m(d,"DIV",{id:!0,class:!0});var k=_(s);t=m(k,"DIV",{id:!0,class:!0});var q=_(t);a=m(q,"H2",{class:!0});var x=_(a);b=p(x,h),x.forEach(c),q.forEach(c),g=J(k),n=m(k,"DIV",{id:!0,class:!0});var E=_(n);D=p(E,"\u23F1 "),I=p(E,S),V=p(E," min"),E.forEach(c),k.forEach(c),C=J(d),o=m(d,"DIV",{id:!0,class:!0});var A=_(o);R=p(A,T),A.forEach(c),d.forEach(c),this.h()},h(){i(a,"class","svelte-14fm8hn"),i(t,"id","name"),i(t,"class","svelte-14fm8hn"),i(n,"id","time"),i(n,"class","svelte-14fm8hn"),i(s,"id","top"),i(s,"class","svelte-14fm8hn"),i(o,"id","description"),i(o,"class","svelte-14fm8hn"),i(e,"href",y="recipe/"+l[0]),i(e,"id","card"),G(e,"background-image","url('"+l[1].image+"')"),i(e,"class","svelte-14fm8hn")},m(f,d){w(f,e,d),r(e,s),r(s,t),r(t,a),r(a,b),r(s,g),r(s,n),r(n,D),r(n,I),r(n,V),r(e,C),r(e,o),r(o,R)},p(f,d){d&1&&y!==(y="recipe/"+f[0])&&i(e,"href",y)},d(f){f&&c(e)}}}function N(l){let e,s=l[1]&&M(l);return{c(){s&&s.c(),e=K()},l(t){s&&s.l(t),e=K()},m(t,a){s&&s.m(t,a),w(t,e,a)},p(t,[a]){t[1]&&s.p(t,a)},i:j,o:j,d(t){s&&s.d(t),t&&c(e)}}}function O(l,e,s){let{index:t}=e;const a=L[t];return l.$$set=h=>{"index"in h&&s(0,t=h.index)},[t,a]}class U extends z{constructor(e){super();B(this,e,O,N,F,{index:0})}}export{U as default};
