import{_ as g}from"./AuthenticatedLayout.a2274cf2.js";import{M as b}from"./Modal.e34d3789.js";import{m as _,b as f,o as r,a as n,f as l,u as i,e as p,F as h,H as y,i as v,h as t,t as a,g as w,J as N}from"./app.08105c48.js";import{t as C}from"./laravel-vue-pagination.es.f36c96b1.js";import"./_plugin-vue_export-helper.cdc0426e.js";const k=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," \u0627\u0633\u062A\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0632\u0648\u0627\u062C - \u0627\u0644\u0645\u062D\u0643\u0645\u0629 ",-1),F=t("h3",{class:"text-center"}," \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0627\u062A",-1),R={key:0},$={id:"alert-2",class:"p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 text-center",role:"alert"},B={class:"ml-3 text-sm font-medium text-red-700 dark:text-red-800"},D={class:"py-12"},I={class:"max-w-9xl mx-auto sm:px-6 lg:px-8"},M={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},S={class:"p-6 bg-white border-b border-gray-200"},V={class:"overflow-x-auto shadow-md"},H={class:"w-full my-5"},P=t("thead",{class:"700 bg-rose-500 text-white text-center rounded-l-lg"},[t("tr",{class:"bg-rose-500 rounded-l-lg mb-2 sm:mb-0"},[t("th",{className:"px-4 py-2 w-20"},"\u0627\u0644\u0631\u0642\u0645"),t("th",{className:"px-4 py-2"},"\u0627\u0633\u0645 \u0627\u0644\u0632\u0648\u062C"),t("th",{className:"px-4 py-2"},"\u0627\u0633\u0645 \u0627\u0644\u0632\u0648\u062C\u0629"),t("th",{className:"px-4 py-2"},"\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644"),t("th",{className:"px-4 py-2"},"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0632\u0648\u062C"),t("th",{className:"px-4 py-2"},"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0632\u0648\u062C\u0629"),t("th",{className:"px-4 py-2"},"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062F\u062E\u0627\u0644"),t("th",{className:"px-4 py-2"},"\u062A\u0646\u0641\u064A\u0630")])],-1),j={className:"border px-4 py-2"},A={className:"border px-4 py-2 td"},E={className:"border px-4 py-2 td"},J={className:"border px-4 py-2 td"},L={className:"border px-4 py-2 td"},T={className:"border px-4 py-2 td"},q={className:"border px-4 py-2"},z={className:"border px-2 py-2"},G=["href"],K=["href"],O={class:"mt-3 text-center",style:{direction:"ltr"}},tt={__name:"FormRegistrationCourt",props:{url:String},setup(Q){const c=_({});_({});const m=async(s=1)=>{const d=await fetch(`/getIndexFormRegistrationCourt?page=${s}`);c.value=await d.json()};m();const x=f();let o=_(!1);function u(s){x.get(route("sentToCourt",s)),m(),o.value=!1}return(s,d)=>(r(),n(h,null,[l(i(y),{title:"Dashboard"}),l(g,null,{header:p(()=>[k]),default:p(()=>[l(b,{show:!!i(o),data:i(o).toString(),onA:d[0]||(d[0]=e=>u(e,s.arg1)),onClose:d[1]||(d[1]=e=>v(o)?o.value=!1:o=!1)},{header:p(()=>[F]),_:1},8,["show","data"]),s.$page.props.success?(r(),n("div",R,[t("div",$,[t("div",B,a(s.$page.props.success),1)])])):w("",!0),t("div",D,[t("div",I,[t("div",M,[t("div",S,[t("div",V,[t("table",H,[P,t("tbody",null,[(r(!0),n(h,null,N(c.value.data,e=>(r(),n("tr",{key:e.id,class:"hover:bg-gray-100 text-center"},[t("td",j,a(e.no),1),t("td",A,a(e.husband_name),1),t("td",E,a(e.wife_name),1),t("td",J,a(e.phone_number),1),t("td",L,a(e.husband_address),1),t("td",T,a(e.wife_address),1),t("td",q,a(e.created_at.substring(0,10)),1),t("td",z,[t("a",{tabIndex:"-1",className:"mx-1 px-2 py-1 text-sm text-white bg-gray-400 rounded",href:s.route("document",e.id),target:"_self"}," \u0637\u0628\u0627\u0639\u0629 ",8,G),t("a",{tabIndex:"-1",className:"mx-1 px-2 py-1 text-sm text-white bg-blue-400 rounded",href:s.route("show",e.id),target:"_blank"}," \u0639\u0631\u0636 ",8,K)])]))),128))])])]),t("div",O,[l(i(C),{data:c.value,onPaginationChangePage:m,limit:10},null,8,["data"])])])])])])]),_:1})],64))}};export{tt as default};
