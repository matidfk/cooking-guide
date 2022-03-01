import{S as x,i as M,s as T,e as u,t as b,k as v,l as w,c as _,a as h,h as k,d as s,m as g,b as f,g as a,J as y,K as m}from"../../chunks/vendor-fba1135e.js";function C(d){let e,l;return{c(){e=u("script"),l=b(`const map = new jsVectorMap({\r
			selector: '#map',\r
			map: 'world',\r
			backgroundColor: '#009',\r
			// visualizeData: {\r
			// 	scale: ['#000', '#fff'],\r
			// 	values: countries\r
			// },\r
			onRegionTooltipShow: function (tooltip, code) {\r
				console.log(code);\r
				tooltip._tooltip.innerHTML += '<br>';\r
                // go through backwards to show newest recipes first\r
				recipes.slice().reverse().forEach((recipe) => {\r
					if (recipe.countryOfOrigin.toUpperCase() == code)\r
						tooltip._tooltip.innerHTML += \`<img src="\${recipe.image}" style="height: 40px">\`;\r
				});\r
			}\r
		});`)},l(o){e=_(o,"SCRIPT",{});var r=h(e);l=k(r,`const map = new jsVectorMap({\r
			selector: '#map',\r
			map: 'world',\r
			backgroundColor: '#009',\r
			// visualizeData: {\r
			// 	scale: ['#000', '#fff'],\r
			// 	values: countries\r
			// },\r
			onRegionTooltipShow: function (tooltip, code) {\r
				console.log(code);\r
				tooltip._tooltip.innerHTML += '<br>';\r
                // go through backwards to show newest recipes first\r
				recipes.slice().reverse().forEach((recipe) => {\r
					if (recipe.countryOfOrigin.toUpperCase() == code)\r
						tooltip._tooltip.innerHTML += \`<img src="\${recipe.image}" style="height: 40px">\`;\r
				});\r
			}\r
		});`),r.forEach(s)},m(o,r){a(o,e,r),y(e,l)},d(o){o&&s(e)}}}function E(d){let e,l,o,r,c,p,n=C();return{c(){e=u("a"),l=b("list"),o=v(),r=u("div"),c=v(),n&&n.c(),p=w(),this.h()},l(t){e=_(t,"A",{href:!0});var i=h(e);l=k(i,"list"),i.forEach(s),o=g(t),r=_(t,"DIV",{id:!0,class:!0}),h(r).forEach(s),c=g(t),n&&n.l(t),p=w(),this.h()},h(){f(e,"href","/recipes/list"),f(r,"id","map"),f(r,"class","svelte-1ji0v5k")},m(t,i){a(t,e,i),y(e,l),a(t,o,i),a(t,r,i),a(t,c,i),n&&n.m(t,i),a(t,p,i)},p:m,i:m,o:m,d(t){t&&s(e),t&&s(o),t&&s(r),t&&s(c),n&&n.d(t),t&&s(p)}}}class j extends x{constructor(e){super();M(this,e,null,E,T,{})}}export{j as default};
