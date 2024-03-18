(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function b(){}function W(e){return e()}function R(){return Object.create(null)}function T(e){e.forEach(W)}function X(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function le(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function q(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function Y(e){return document.createTextNode(e)}function $(){return Y(" ")}function j(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function ue(e){return function(t){return t.preventDefault(),e.call(this,t)}}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ce(e){return Array.from(e.childNodes)}function fe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function z(e,t){e.value=t??""}function A(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let V;function U(e){V=e}const L=[],B=[];let E=[];const F=[],ae=Promise.resolve();let N=!1;function de(){N||(N=!0,ae.then(Z))}function P(e){E.push(e)}const D=new Set;let w=0;function Z(){if(w!==0)return;const e=V;do{try{for(;w<L.length;){const t=L[w];w++,U(t),pe(t.$$)}}catch(t){throw L.length=0,w=0,t}for(U(null),L.length=0,w=0;B.length;)B.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];D.has(n)||(D.add(n),n())}E.length=0}while(L.length);for(;F.length;)F.pop()();N=!1,D.clear(),U(e)}function pe(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function he(e){const t=[],n=[];E.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),E=t}const S=new Set;let ge;function ee(e,t){e&&e.i&&(S.delete(e),e.i(t))}function me(e,t,n,r){if(e&&e.o){if(S.has(e))return;S.add(e),ge.c.push(()=>{S.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function _e(e){e&&e.c()}function te(e,t,n,r){const{fragment:o,after_update:c}=e.$$;o&&o.m(t,n),r||P(()=>{const i=e.$$.on_mount.map(W).filter(X);e.$$.on_destroy?e.$$.on_destroy.push(...i):T(i),e.$$.on_mount=[]}),c.forEach(P)}function ne(e,t){const n=e.$$;n.fragment!==null&&(he(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(L.push(e),de(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,r,o,c,i,u=[-1]){const s=V;U(e);const l=e.$$={fragment:null,ctx:[],props:c,update:b,not_equal:o,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:R(),dirty:u,skip_bound:!1,root:t.target||s.$$.root};i&&i(l.root);let a=!1;if(l.ctx=n?n(e,t.props||{},(f,g,..._)=>{const d=_.length?_[0]:g;return l.ctx&&o(l.ctx[f],l.ctx[f]=d)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](d),a&&ye(e,f)),g}):[],l.update(),a=!0,T(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const f=ce(t.target);l.fragment&&l.fragment.l(f),f.forEach(C)}else l.fragment&&l.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),Z()}U(s)}class oe{$destroy(){ne(this,1),this.$destroy=b}$on(t,n){if(!X(n))return b;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const x=[];function ve(e,t=b){let n;const r=new Set;function o(u){if(H(e,u)&&(e=u,n)){const s=!x.length;for(const l of r)l[1](),x.push(l,e);if(s){for(let l=0;l<x.length;l+=2)x[l][0](x[l+1]);x.length=0}}}function c(u){o(u(e))}function i(u,s=b){const l=[u,s];return r.add(l),r.size===1&&(n=t(o)||b),u(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:i}}let O;const be=new Uint8Array(16);function $e(){if(!O&&(O=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!O))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(be)}const p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).slice(1));function we(e,t=0){return(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase()}const xe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),K={randomUUID:xe};function Le(e,t,n){if(K.randomUUID&&!t&&!e)return K.randomUUID();e=e||{};const r=e.random||(e.rng||$e)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let o=0;o<16;++o)t[n+o]=r[o];return t}return we(r)}function Ce(){return Le()}function Ee(e,t){if(e.value.length>255||e.value.length===0)return!1;for(const n of t)if(n.value.toLowerCase()===e.value.toLowerCase())return!1;return!0}function qe(e){const t=e.value[0].toLocaleUpperCase()+e.value.substring(1);return{id:e.id,value:t,done:!1}}function Ue(){const e=I(),t=I(),n=I();return`rgb(${e},${t},${n})`}function I(){return 50+Math.random()*150}const k=ve([]);function G(e,t,n){const r=e.slice();return r[8]=t[n],r}function J(e){let t,n,r,o,c=e[8].value+"",i,u,s,l,a,f;function g(){return e[6](e[8])}function _(){return e[7](e[8])}return{c(){t=v("div"),n=v("button"),n.textContent="✔️",r=$(),o=v("span"),i=Y(c),u=$(),s=v("button"),s.textContent="🗑️",l=$(),h(n,"type","button"),h(n,"class","svelte-q8s35p"),A(o,"text-decoration",e[8].done?"line-through":""),h(o,"class","svelte-q8s35p"),h(s,"type","button"),h(s,"class","svelte-q8s35p"),A(t,"background-color",Ue()),h(t,"class","item svelte-q8s35p")},m(d,y){q(d,t,y),m(t,n),m(t,r),m(t,o),m(o,i),m(t,u),m(t,s),m(t,l),a||(f=[j(n,"click",g),j(s,"click",_)],a=!0)},p(d,y){e=d,y&2&&c!==(c=e[8].value+"")&&fe(i,c),y&2&&A(o,"text-decoration",e[8].done?"line-through":"")},d(d){d&&C(t),a=!1,T(f)}}}function Te(e){let t,n,r,o,c,i=e[1],u=[];for(let s=0;s<i.length;s+=1)u[s]=J(G(e,i,s));return{c(){t=v("input"),n=$(),r=v("div");for(let s=0;s<u.length;s+=1)u[s].c();h(t,"type","text"),h(t,"placeholder","🔍"),h(t,"class","svelte-q8s35p"),h(r,"class","list svelte-q8s35p")},m(s,l){q(s,t,l),z(t,e[0]),q(s,n,l),q(s,r,l);for(let a=0;a<u.length;a+=1)u[a]&&u[a].m(r,null);o||(c=j(t,"input",e[5]),o=!0)},p(s,[l]){if(l&1&&t.value!==s[0]&&z(t,s[0]),l&14){i=s[1];let a;for(a=0;a<i.length;a+=1){const f=G(s,i,a);u[a]?u[a].p(f,l):(u[a]=J(f),u[a].c(),u[a].m(r,null))}for(;a<u.length;a+=1)u[a].d(1);u.length=i.length}},i:b,o:b,d(s){s&&C(t),s&&C(n),s&&C(r),ie(u,s),o=!1,c()}}}function Oe(e,t,n){let{todos:r}=t,o,c="";function i(f){k.update(g=>g.filter(_=>_.id!==f))}function u(f){k.update(g=>{for(let _ of g)_.id===f&&(_.done=!0);return g})}function s(){c=this.value,n(0,c)}const l=f=>u(f.id),a=f=>i(f.id);return e.$$set=f=>{"todos"in f&&n(4,r=f.todos)},e.$$.update=()=>{e.$$.dirty&17&&n(1,o=r.filter(f=>f.value.toLowerCase().includes(c.toLowerCase())))},[c,o,i,u,r,s,l,a]}class Se extends oe{constructor(t){super(),re(this,t,Oe,Te,H,{todos:4})}}function je(e){let t,n,r,o,c,i,u,s,l,a,f,g,_;return o=new Se({props:{todos:e[0]}}),{c(){t=v("main"),n=v("h1"),n.textContent="Todos:",r=$(),_e(o.$$.fragment),c=$(),i=v("progress"),l=$(),a=v("form"),a.innerHTML='<input type="text" placeholder="Add new todo" name="todo" id="todo" class="svelte-j63d8q"/>',h(i,"max",u=e[0].length),i.value=s=e[0].filter(Q).length,h(i,"class","svelte-j63d8q"),h(a,"class","svelte-j63d8q"),h(t,"class","svelte-j63d8q")},m(d,y){q(d,t,y),m(t,n),m(t,r),te(o,t,null),m(t,c),m(t,i),m(t,l),m(t,a),f=!0,g||(_=j(a,"submit",ue(e[1])),g=!0)},p(d,[y]){const M={};y&1&&(M.todos=d[0]),o.$set(M),(!f||y&1&&u!==(u=d[0].length))&&h(i,"max",u),(!f||y&1&&s!==(s=d[0].filter(Q).length))&&(i.value=s)},i(d){f||(ee(o.$$.fragment,d),f=!0)},o(d){me(o.$$.fragment,d),f=!1},d(d){d&&C(t),ne(o),g=!1,_()}}}const Q=e=>e.done===!0;function Ae(e,t,n){let r;k.subscribe(i=>{n(0,r=i)});function o(i){const u=new FormData(i.target);for(let s of u){const[,l]=s;c({id:Ce(),value:l.toString(),done:!1}),i.target[0].value="";return}}function c(i){Ee(i,r)&&(r.push(qe(i)),n(0,r))}return[r,o]}class De extends oe{constructor(t){super(),re(this,t,Ae,je,H,{})}}const se=document.getElementById("app");if(!se)throw new Error("Cannot find element with ID 'app'");new De({target:se});