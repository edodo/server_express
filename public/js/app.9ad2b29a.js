(function(){"use strict";var o={8931:function(o,e,t){var n=t(9242),a=t(3396);const d={id:"app"};function s(o,e,t,n,s,l){const r=(0,a.up)("TodoHeader"),c=(0,a.up)("TodoInput"),i=(0,a.up)("TodoList"),u=(0,a.up)("TodoFooter");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(r),(0,a.Wm)(c),(0,a.Wm)(i),(0,a.Wm)(u)])}var l=t(7139);function r(o,e,t,n,d,s){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("header",null,[(0,a._)("h2",null,"TODO it! ("+(0,l.zw)(n.mode)+")",1)])])}var c={setup(){const o="Prod Mode";return{mode:o}}},i=t(89);const u=(0,i.Z)(c,[["render",r],["__scopeId","data-v-20ec3386"]]);var m=u,p=t(4870);const v={class:"modal-mask"},f={class:"modal-wrapper"},h={class:"modal-container"},T={class:"modal-header"},_={class:"modal-body"},g={class:"modal-footer"};function I(o,e){return(0,a.wg)(),(0,a.j4)(n.uT,{name:"modal"},{default:(0,a.w5)((()=>[(0,a._)("div",v,[(0,a._)("div",f,[(0,a._)("div",h,[(0,a._)("div",T,[(0,a.WI)(o.$slots,"header",{},(()=>[(0,a.Uk)(" default header ")]))]),(0,a._)("div",_,[(0,a.WI)(o.$slots,"body",{},(()=>[(0,a.Uk)(" default body ")]))]),(0,a._)("div",g,[(0,a.WI)(o.$slots,"footer",{},(()=>[(0,a.Uk)(" default footer "),(0,a._)("button",{class:"modal-default-button",onClick:e[0]||(e[0]=e=>o.$emit("close"))}," OK ")]))])])])])])),_:3})}const w={},b=(0,i.Z)(w,[["render",I]]);var k=b,C=t(65);const y=o=>((0,a.dD)("data-v-a58fbdf2"),o=o(),(0,a.Cn)(),o),O={class:"inputBox shadow"},x=["value","onKeyup"],D=y((()=>(0,a._)("i",{class:"fas fa-plus addBtn"},null,-1))),W=[D],j=y((()=>(0,a._)("div",null,"할일을 입력하세요!",-1)));var Z={__name:"TodoInput",emits:["input:todo"],setup(o,{emit:e}){const t=(0,C.oR)(),d=(0,p.iH)(!1),s=(0,p.iH)(""),l=o=>{const t=o.target.value;t&&(e("input:todo",t),s.value=t)},r=()=>{if(""!==s.value){const o=s.value,e={completed:!1,item:o};t.dispatch("moduleTodo/addTodo",e),c()}else d.value=!d.value},c=()=>{s.value=""};return(o,e)=>((0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("input",{type:"text",value:s.value,onInput:l,onKeyup:(0,n.D2)(r,["enter"])},null,40,x),(0,a._)("span",{class:"addContainer",onClick:r},W),(0,a.wy)((0,a.Wm)(k,{onClose:e[1]||(e[1]=o=>d.value=!1)},{header:(0,a.w5)((()=>[(0,a._)("h3",null,[(0,a.Uk)(" 경고! "),(0,a._)("i",{class:"closeModalBtn fas fa-times",onClick:e[0]||(e[0]=o=>d.value=!1)})])])),body:(0,a.w5)((()=>[j])),_:1},512),[[n.F8,d.value]])]))}};const B=(0,i.Z)(Z,[["__scopeId","data-v-a58fbdf2"]]);var S=B;const $=o=>((0,a.dD)("data-v-37ce6716"),o=o(),(0,a.Cn)(),o),A=["onClick"],F=["onClick"],H=$((()=>(0,a._)("i",{class:"fas fa-trash-alt"},null,-1))),M=[H];var U={__name:"TodoList",setup(o){const e=(0,C.oR)(),t=(0,a.Fl)((()=>e.state.moduleTodo.todoItems));(0,a.bv)((()=>{console.log("onMounted..."),e.dispatch("moduleTodo/loadTodoItems")}));const d=o=>{e.dispatch("moduleTodo/removeTodo",o)},s=o=>{o.completed=!o.completed,e.dispatch("moduleTodo/toggleTodo",o)};return(o,e)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(n.W3,{name:"list",tag:"ul"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.value,((o,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"shadow"},[(0,a._)("i",{class:(0,l.C_)(["fas fa-check checkBtn",{checkBtnCompleted:o.completed}]),onClick:e=>s(o)},null,10,A),(0,a._)("span",{class:(0,l.C_)({textCompleted:o.completed})},(0,l.zw)(o.item),3),(0,a._)("span",{class:"removeBtn",onClick:e=>d(o)},M,8,F)])))),128))])),_:1})]))}};const K=(0,i.Z)(U,[["__scopeId","data-v-37ce6716"]]);var L=K;const R={class:"clearAllContainer"};function P(o,e,t,n,d,s){return(0,a.wg)(),(0,a.iD)("div",R,[(0,a._)("span",{class:"clearAllBtn",onClick:e[0]||(e[0]=(...o)=>n.clearTodo&&n.clearTodo(...o))},"Clear All")])}var z={setup(){const o=(0,C.oR)(),e=()=>{o.dispatch("moduleTodo/clearTodo")};return{clearTodo:e}}};const E=(0,i.Z)(z,[["render",P],["__scopeId","data-v-9ac47f66"]]);var J=E,N={name:"App",components:{TodoHeader:m,TodoInput:S,TodoList:L,TodoFooter:J}};const Y=(0,i.Z)(N,[["render",s]]);var q=Y,G=(t(7658),t(4161));const Q="http://localhost:4500/api",V=G.Z.create({baseURL:Q,headers:{"Content-type":"application/json"}});var X=V;const oo={namespaced:!0,state:()=>({todoItems:[]}),actions:{loadTodoItems({commit:o}){X.get("/todos").then((o=>o.data)).then((e=>{o("setTodoItems",e)})).catch((o=>{if(!G.Z.isAxiosError(o))throw console.error(o),new o;console.log(o?.response?.status+" : "+o.message)}))},removeTodo({commit:o},e){X.delete(`/todos/${e.id}`).then((o=>o.data)).then((e=>{o("setTodoItems",e)}))},addTodo({commit:o},e){X.post("/todos",e).then((o=>o.data)).then((e=>{o("setTodoItems",e)}))},toggleTodo({commit:o},e){X.patch(`/todos/${e.id}`,e).then((o=>o.data)).then((e=>{o("setTodoItems",e)}))},clearTodo({commit:o}){X.delete("/todos").then((o=>o.data)).then((e=>{o("setTodoItems",e)}))}},mutations:{setTodoItems(o,e){o.todoItems=e},addTodo(o,e){const t={completed:!1,item:e};localStorage.setItem(e,JSON.stringify(t)),o.todoItems.push(t)},removeTodo(o,e){const{todoItem:t,index:n}=e;localStorage.removeItem(t.item),o.todoItems.splice(n,1)},toggleTodo(o,e){const{todoItem:{item:t,completed:n},index:a}=e;o.todoItems[a].completed=!n,localStorage.removeItem(t),localStorage.setItem(t,JSON.stringify(o.todoItems[a]))},clearTodo(o){localStorage.clear(),o.todoItems=[]}}},eo=(0,C.MT)({plugins:[],modules:{moduleTodo:oo}});(0,n.ri)(q).use(eo).mount("#app")}},e={};function t(n){var a=e[n];if(void 0!==a)return a.exports;var d=e[n]={exports:{}};return o[n].call(d.exports,d,d.exports,t),d.exports}t.m=o,function(){var o=[];t.O=function(e,n,a,d){if(!n){var s=1/0;for(i=0;i<o.length;i++){n=o[i][0],a=o[i][1],d=o[i][2];for(var l=!0,r=0;r<n.length;r++)(!1&d||s>=d)&&Object.keys(t.O).every((function(o){return t.O[o](n[r])}))?n.splice(r--,1):(l=!1,d<s&&(s=d));if(l){o.splice(i--,1);var c=a();void 0!==c&&(e=c)}}return e}d=d||0;for(var i=o.length;i>0&&o[i-1][2]>d;i--)o[i]=o[i-1];o[i]=[n,a,d]}}(),function(){t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,{a:e}),e}}(),function(){t.d=function(o,e){for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){var o={143:0};t.O.j=function(e){return 0===o[e]};var e=function(e,n){var a,d,s=n[0],l=n[1],r=n[2],c=0;if(s.some((function(e){return 0!==o[e]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(r)var i=r(t)}for(e&&e(n);c<s.length;c++)d=s[c],t.o(o,d)&&o[d]&&o[d][0](),o[d]=0;return t.O(i)},n=self["webpackChunkvue3_todo"]=self["webpackChunkvue3_todo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(8931)}));n=t.O(n)})();
//# sourceMappingURL=app.9ad2b29a.js.map