import{p as N,M as B,c as _,m as M,o as n,a as p,h as e,r as c,w as $,l as C,f as a,e as o,n as u,u as f,T as j,d as x,L as w,g as v,j as d,t as y}from"./app.f0b5e5ed.js";const D={class:"relative"},E={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(r){const s=r,t=g=>{l.value&&g.key==="Escape"&&(l.value=!1)};N(()=>document.addEventListener("keydown",t)),B(()=>document.removeEventListener("keydown",t));const i=_(()=>({48:"w-48"})[s.width.toString()]),m=_(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),l=M(!1);return(g,h)=>(n(),p("div",D,[e("div",{onClick:h[0]||(h[0]=k=>l.value=!l.value)},[c(g.$slots,"trigger")]),$(e("div",{class:"fixed inset-0 z-40",onClick:h[1]||(h[1]=k=>l.value=!1)},null,512),[[C,l.value]]),a(j,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[$(e("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[f(i),f(m)]]),style:{display:"none"},onClick:h[2]||(h[2]=k=>l.value=!1)},[e("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",r.contentClasses])},[c(g.$slots,"content")],2)],2),[[C,l.value]])]),_:3})]))}},z={__name:"DropdownLink",setup(r){return(s,t)=>(n(),x(f(w),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[c(s.$slots,"default")]),_:3}))}},L={__name:"NavLink",props:["href","active"],setup(r){const s=r,t=_(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(i,m)=>(n(),x(f(w),{href:r.href,class:u(f(t))},{default:o(()=>[c(i.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:["href","active"],setup(r){const s=r,t=_(()=>s.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(i,m)=>(n(),x(f(w),{href:r.href,class:u(f(t))},{default:o(()=>[c(i.$slots,"default")]),_:3},8,["href","class"]))}},S={class:"min-h-screen bg-gray-100"},V={class:"bg-white border-b border-gray-100"},T={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},A={class:"flex justify-between h-16"},O={class:"flex"},R={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},U={key:1,class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},q={key:2,class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},F=e("a",{class:"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",href:"/log-viewer",target:"_blank"}," \u0633\u062C\u0644 \u0627\u0644\u0646\u0634\u0627\u0637 ",-1),G=[F],H={class:"hidden sm:flex sm:items-center sm:ml-6"},I={class:"ml-3 relative"},J={class:"inline-flex rounded-md"},K={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},P=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Q={class:"-mr-2 flex items-center sm:hidden"},W={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},X={class:"pt-2 pb-3 space-y-1"},Y={class:"pt-4 pb-1 border-t border-gray-200"},Z={class:"px-4"},ee={class:"font-medium text-base text-gray-800"},te={class:"font-medium text-sm text-gray-500"},se={class:"mt-3 space-y-1"},oe=e("a",{href:"/log-viewer",target:"_blank"}," \u0633\u062C\u0644 \u0627\u0644\u0646\u0634\u0627\u0637 ",-1),re={key:0,class:"bg-white shadow"},ae={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ie={__name:"AuthenticatedLayout",setup(r){const s=M(!1);return(t,i)=>(n(),p("div",null,[e("div",S,[e("nav",V,[e("div",T,[e("div",A,[e("div",O,[v("",!0),e("div",R,[a(L,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[d(" \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ")]),_:1},8,["href","active"])]),t.$page.props.auth.user.type_id==1?(n(),p("div",U,[a(L,{href:t.route("users.index"),active:t.route().current("users.index")},{default:o(()=>[d(" \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 ")]),_:1},8,["href","active"])])):v("",!0),t.$page.props.auth.user.type_id!=5?(n(),p("div",q,G)):v("",!0)]),e("div",H,[e("div",I,[a(E,{align:"right",width:"48"},{trigger:o(()=>[e("span",J,[e("button",K,[d(y(t.$page.props.auth.user.name)+" ",1),P])])]),content:o(()=>[a(z,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[d(" \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C ")]),_:1},8,["href"])]),_:1})])]),e("div",Q,[e("button",{onClick:i[0]||(i[0]=m=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(n(),p("svg",W,[e("path",{class:u({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",X,[a(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[d(" \u0644\u0648\u062D\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 ")]),_:1},8,["href","active"])]),e("div",Y,[e("div",Z,[e("div",ee,y(t.$page.props.auth.user.name),1),e("div",te,y(t.$page.props.auth.user.email),1)]),e("div",se,[a(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[d(" \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ")]),_:1},8,["href","active"]),a(b,{href:t.route("users.index"),active:t.route().current("users.index")},{default:o(()=>[d(" \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 ")]),_:1},8,["href","active"]),oe,a(b,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[d(" \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C ")]),_:1},8,["href"])])])],2)]),t.$slots.header?(n(),p("header",re,[e("div",ae,[c(t.$slots,"header")])])):v("",!0),e("main",null,[c(t.$slots,"default")])])]))}};export{ie as _};
