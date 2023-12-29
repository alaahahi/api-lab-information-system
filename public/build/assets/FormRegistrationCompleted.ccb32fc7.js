import{m as u,b as y,o as r,a as d,f as p,u as i,e as h,F as _,H as v,i as w,h as e,t as o,g as c,w as N,I as k,J as $,d as C,L as F,j as I}from"./app.08105c48.js";import{_ as M}from"./AuthenticatedLayout.a2274cf2.js";import{M as R}from"./Modal.e34d3789.js";import{t as T}from"./laravel-vue-pagination.es.f36c96b1.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," \u0627\u0633\u062A\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0632\u0648\u0627\u062C - \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0646\u062C\u0632\u0629 ",-1),V=e("h3",{class:"text-center"},"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0627\u062A",-1),D={key:0},j={id:"alert-2",class:"p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 text-center",role:"alert"},L={class:"ml-3 text-sm font-medium text-red-700 dark:text-red-800"},S={class:"py-12"},q={class:"max-w-9xl mx-auto sm:px-6 lg:px-8"},z={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},A={class:"p-6 bg-white border-b border-gray-200"},E={class:"flex flex-row"},H=e("div",{class:"basis-1/2"},null,-1),P={class:"basis-1/2"},J={class:"flex items-center max-w-5xl"},U=e("label",{for:"simple-search",class:"sr-only"},"\u0628\u062D\u062B",-1),G={class:"relative w-full"},K=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),O={class:"overflow-x-auto shadow-md"},Q={class:"w-full my-5"},W=e("thead",{class:"700 bg-rose-500 text-white text-center rounded-l-lg"},[e("tr",{class:"bg-rose-500 rounded-l-lg mb-2 sm:mb-0"},[e("th",{className:"px-4 py-2 w-20"},"\u0627\u0644\u0631\u0642\u0645"),e("th",{className:"px-4 py-2"},"\u0627\u0633\u0645 \u0627\u0644\u0632\u0648\u062C"),e("th",{className:"px-4 py-2"},"\u0627\u0633\u0645 \u0627\u0644\u0632\u0648\u062C\u0629"),e("th",{className:"px-4 py-2"},"\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644"),e("th",{className:"px-4 py-2"},"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0632\u0648\u062C"),e("th",{className:"px-4 py-2"},"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0632\u0648\u062C\u0629"),e("th",{className:"px-4 py-2"},"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062F\u062E\u0627\u0644"),e("th",{className:"px-4 py-2"},"\u0627\u0644\u062D\u0627\u0644\u0629"),e("th",{className:"px-4 py-2"},"\u062A\u0646\u0641\u064A\u0630")])],-1),X={className:"border px-4 py-2"},Y={className:"border px-4 py-2 td"},Z={className:"border px-4 py-2 td"},ee={className:"border px-4 py-2 td"},te={className:"border px-4 py-2 td"},se={className:"border px-4 py-2 td"},ae={className:"border px-4 py-2"},oe={className:"border px-4 py-2"},re={className:"border px-2 py-2"},de={key:0},le=["href"],ne=["href"],ie={class:"mt-3 text-center",style:{direction:"ltr"}},ge={__name:"FormRegistrationCompleted",props:{url:String},setup(ce){const n=u({});u({});const m=async(t=1)=>{const a=await fetch(`/getIndexFormRegistrationCompleted?page=${t}`);n.value=await a.json()};m();const g=async t=>{n.value=[];const a=await fetch(`/livesearchCompleted?q=${t}`);n.value=await a.json()},x=y();let l=u(!1);const b=t=>{if(t==0)return"\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u062D\u0644\u064A\u0644";if(t==1)return"\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0637\u0628\u064A\u0628";if(t==2)return"\u0645\u0631\u0641\u0648\u0636";if(t==3)return"\u0645\u0643\u062A\u0645\u0644"};function f(t){x.get(route("sentToCourt",t)),m(),l.value=!1}return(t,a)=>(r(),d(_,null,[p(i(v),{title:"Dashboard"}),p(M,null,{header:h(()=>[B]),default:h(()=>[p(R,{show:!!i(l),data:i(l).toString(),onA:a[0]||(a[0]=s=>f(s,t.arg1)),onClose:a[1]||(a[1]=s=>w(l)?l.value=!1:l=!1)},{header:h(()=>[V]),_:1},8,["show","data"]),t.$page.props.success?(r(),d("div",D,[e("div",j,[e("div",L,o(t.$page.props.success),1)])])):c("",!0),e("div",S,[e("div",q,[e("div",z,[e("div",A,[e("div",E,[H,e("div",P,[e("form",J,[U,e("div",G,[K,N(e("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>t.searchTerm=s),onInput:a[3]||(a[3]=s=>g(t.searchTerm)),type:"text",id:"simple-search",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"\u0628\u062D\u062B \u062D\u0633\u0628 \u0631\u0642\u0645 \u0627\u0644\u0648\u0635\u0644 \u0627\u0648 \u0627\u0633\u0645 \u0627\u0644\u0632\u0648\u062C \u0627\u0648 \u0627\u0633\u0645 \u0627\u0644\u0632\u0648\u062C\u0629",required:""},null,544),[[k,t.searchTerm]])])])])]),e("div",O,[e("table",Q,[W,e("tbody",null,[(r(!0),d(_,null,$(n.value.data,s=>(r(),d("tr",{key:s.id,class:"hover:bg-gray-100 text-center"},[e("td",X,o(s.no),1),e("td",Y,o(s.husband_name),1),e("td",Z,o(s.wife_name),1),e("td",ee,o(s.phone_number),1),e("td",te,o(s.husband_address),1),e("td",se,o(s.wife_address),1),e("td",ae,o(s.created_at.substring(0,10)),1),e("td",oe,o(b(s.results)),1),e("td",re,[s.user_accepted?(r(),d("span",de,[t.$page.props.auth.user.type_id!=4?(r(),d("a",{key:0,tabIndex:"-1",className:"mx-1 px-2 py-1 text-sm text-white bg-gray-400 rounded",href:t.route("document",s.id),target:"_self"}," \u0637\u0628\u0627\u0639\u0629 ",8,le)):c("",!0),t.$page.props.auth.user.type_id!=4?(r(),d("a",{key:1,tabIndex:"-1",className:"mx-1 px-2 py-1 text-sm text-white bg-blue-400 rounded",href:t.route("show",s.id),target:"_blank"}," \u0639\u0631\u0636 ",8,ne)):c("",!0),t.$page.props.auth.user.type_id==1||t.$page.props.auth.user.type_id==4?(r(),C(i(F),{key:2,tabIndex:"1",className:"px-2 py-1 text-sm text-white bg-teal-500 mx-1 rounded",href:t.route("doctorResultsEdit",s.id)},{default:h(()=>[I(" \u062A\u0639\u062F\u064A\u0644 \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0637\u0628\u064A\u0628 ")]),_:2},1032,["href"])):c("",!0)])):c("",!0)])]))),128))])])]),e("div",ie,[p(i(T),{data:n.value,onPaginationChangePage:m,limit:10},null,8,["data"])])])])])])]),_:1})],64))}};export{ge as default};
