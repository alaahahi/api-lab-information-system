import{p as F,M,c as x,m as L,o,a as c,h as t,r as m,w as C,l as R,f as i,e as s,n as f,u as g,T as S,d as h,L as w,g as n,j as a,t as k}from"./app.08105c48.js";const N={class:"relative"},B={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(d){const r=d,e=_=>{u.value&&_.key==="Escape"&&(u.value=!1)};F(()=>document.addEventListener("keydown",e)),M(()=>document.removeEventListener("keydown",e));const l=x(()=>({48:"w-48"})[r.width.toString()]),b=x(()=>r.align==="left"?"origin-top-left left-0":r.align==="right"?"origin-top-right right-0":"origin-top"),u=L(!1);return(_,v)=>(o(),c("div",N,[t("div",{onClick:v[0]||(v[0]=$=>u.value=!u.value)},[m(_.$slots,"trigger")]),C(t("div",{class:"fixed inset-0 z-40",onClick:v[1]||(v[1]=$=>u.value=!1)},null,512),[[R,u.value]]),i(S,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:s(()=>[C(t("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[g(l),g(b)]]),style:{display:"none"},onClick:v[2]||(v[2]=$=>u.value=!1)},[t("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",d.contentClasses])},[m(_.$slots,"content")],2)],2),[[R,u.value]])]),_:3})]))}},j={__name:"DropdownLink",setup(d){return(r,e)=>(o(),h(g(w),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:s(()=>[m(r.$slots,"default")]),_:3}))}},y={__name:"NavLink",props:["href","active"],setup(d){const r=d,e=x(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(l,b)=>(o(),h(g(w),{href:d.href,class:f(g(e))},{default:s(()=>[m(l.$slots,"default")]),_:3},8,["href","class"]))}},p={__name:"ResponsiveNavLink",props:["href","active"],setup(d){const r=d,e=x(()=>r.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(l,b)=>(o(),h(g(w),{href:d.href,class:f(g(e))},{default:s(()=>[m(l.$slots,"default")]),_:3},8,["href","class"]))}},D={class:"min-h-screen bg-gray-100"},E={class:"bg-white border-b border-gray-100"},z={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},V={class:"flex justify-between h-16"},T={class:"flex"},A={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},O={key:1,class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},U={key:2,class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},q={key:3,class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},G={key:4,class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},H={class:"hidden sm:flex sm:items-center sm:ml-6"},I={class:"ml-3 relative"},J={class:"inline-flex rounded-md"},K={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},P=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Q={class:"-mr-2 flex items-center sm:hidden"},W={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},X={class:"pt-2 pb-3 space-y-1"},Y={class:"pt-4 pb-1 border-t border-gray-200"},Z={class:"px-4"},ee={class:"font-medium text-base text-gray-800"},te={class:"font-medium text-sm text-gray-500"},se={class:"mt-3 space-y-1"},re={key:0,class:"bg-white shadow"},oe={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ne={__name:"AuthenticatedLayout",setup(d){const r=L(!1);return(e,l)=>(o(),c("div",null,[t("div",D,[t("nav",E,[t("div",z,[t("div",V,[t("div",T,[n("",!0),t("div",A,[i(y,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:s(()=>[a(" \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ")]),_:1},8,["href","active"])]),e.$page.props.auth.user.type_id==1?(o(),c("div",O,[i(y,{href:e.route("users.index"),active:e.route().current("users.index")},{default:s(()=>[a(" \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 ")]),_:1},8,["href","active"])])):n("",!0),e.$page.props.auth.user.type_id!=5?(o(),c("div",U,[i(y,{href:e.route("formRegistration"),active:e.route().current("formRegistration")},{default:s(()=>[a(" \u0627\u0633\u062A\u0645\u0627\u0631\u0629 \u0627\u0644\u0632\u0648\u0627\u062C ")]),_:1},8,["href","active"])])):n("",!0),e.$page.props.auth.user.type_id==1||e.$page.props.auth.user.type_id==2||e.$page.props.auth.user.type_id==4?(o(),c("div",q,[i(y,{href:e.route("FormRegistrationCompleted"),active:e.route().current("FormRegistrationCompleted")},{default:s(()=>[a(" \u0627\u0633\u062A\u0645\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062C\u0632\u0629 ")]),_:1},8,["href","active"])])):n("",!0),e.$page.props.auth.user.type_id==1||e.$page.props.auth.user.type_id==2?(o(),c("div",G,[i(y,{href:e.route("FormRegistrationSaved"),active:e.route().current("FormRegistrationSaved")},{default:s(()=>[a(" \u0627\u0644\u0623\u0631\u0634\u0641\u0629 ")]),_:1},8,["href","active"])])):n("",!0),n("",!0)]),t("div",H,[t("div",I,[i(B,{align:"right",width:"48"},{trigger:s(()=>[t("span",J,[t("button",K,[a(k(e.$page.props.auth.user.name)+" ",1),P])])]),content:s(()=>[i(j,{href:e.route("logout"),method:"post",as:"button"},{default:s(()=>[a(" \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C ")]),_:1},8,["href"])]),_:1})])]),t("div",Q,[t("button",{onClick:l[0]||(l[0]=b=>r.value=!r.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(o(),c("svg",W,[t("path",{class:f({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:f({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:f([{block:r.value,hidden:!r.value},"sm:hidden"])},[t("div",X,[i(p,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:s(()=>[a(" \u0644\u0648\u062D\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 ")]),_:1},8,["href","active"])]),t("div",Y,[t("div",Z,[t("div",ee,k(e.$page.props.auth.user.name),1),t("div",te,k(e.$page.props.auth.user.email),1)]),t("div",se,[i(p,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:s(()=>[a(" \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ")]),_:1},8,["href","active"]),e.$page.props.auth.user.type_id==1?(o(),h(p,{key:0,href:e.route("users.index"),active:e.route().current("users.index")},{default:s(()=>[a(" \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 ")]),_:1},8,["href","active"])):n("",!0),e.$page.props.auth.user.type_id!=5?(o(),h(p,{key:1,href:e.route("formRegistration"),active:e.route().current("formRegistration")},{default:s(()=>[a(" \u0627\u0633\u062A\u0645\u0627\u0631\u0629 \u0627\u0644\u0632\u0648\u0627\u062C ")]),_:1},8,["href","active"])):n("",!0),e.$page.props.auth.user.type_id==1||e.$page.props.auth.user.type_id==2||e.$page.props.auth.user.type_id==4?(o(),h(p,{key:2,href:e.route("FormRegistrationCompleted"),active:e.route().current("FormRegistrationCompleted")},{default:s(()=>[a(" \u0627\u0633\u062A\u0645\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062C\u0632\u0629 ")]),_:1},8,["href","active"])):n("",!0),e.$page.props.auth.user.type_id==1||e.$page.props.auth.user.type_id==2?(o(),h(p,{key:3,href:e.route("FormRegistrationSaved"),active:e.route().current("FormRegistrationSaved")},{default:s(()=>[a(" \u0627\u0644\u0623\u0631\u0634\u0641\u0629 ")]),_:1},8,["href","active"])):n("",!0),i(p,{href:e.route("logout"),method:"post",as:"button"},{default:s(()=>[a(" \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C ")]),_:1},8,["href"])])])],2)]),e.$slots.header?(o(),c("header",re,[t("div",oe,[m(e.$slots,"header")])])):n("",!0),t("main",null,[m(e.$slots,"default")])])]))}};export{ne as _};