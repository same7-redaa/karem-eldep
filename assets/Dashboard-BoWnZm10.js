import{r as x,j as e,L as u}from"./index-Dy8_206y.js";import{A as v,B as w,D as k,G as _,H as b,I as p,J as M}from"./index.esm-DRT0T-Ox.js";import{d as l}from"./firebase-DKfs1rqW.js";import{c}from"./createLucideIcon-B1SRA3KK.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],z=c("arrow-down",A);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],$=c("arrow-up",E);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],D=c("eye",q);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],L=c("plus",C);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],S=c("square-pen",P);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],I=c("trash-2",H),J=()=>{const[t,j]=x.useState([]),[g,y]=x.useState(!0),i=async()=>{try{const s=v(w(l,"articles"),k("order","asc")),r=await _(s),o=[];r.forEach(a=>{o.push({id:a.id,...a.data()})}),j(o)}catch(s){console.error("Error fetching articles:",s)}finally{y(!1)}};x.useEffect(()=>{i()},[]);const f=async s=>{if(window.confirm("هل أنت متأكد من حذف هذا المقال؟"))try{await M(p(l,"articles",s)),i()}catch(r){console.error("Error deleting article:",r)}},m=async(s,r)=>{if(r==="up"&&s===0||r==="down"&&s===t.length-1)return;const o=r==="up"?s-1:s+1,a=t[s],h=t[o];if(!a.id||!h.id)return;let d=h.order,n=a.order;(d===void 0||n===void 0||d===n)&&(d=o,n=s);try{await b(p(l,"articles",a.id),{order:d}),await b(p(l,"articles",h.id),{order:n}),i()}catch(N){console.error("Error reordering:",N)}};return g?e.jsx("div",{children:"جاري التحميل..."}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"إدارة المقالات"}),e.jsxs(u,{to:"/admin/new",className:"bg-[#c8a876] text-[#0b1a33] px-4 py-2 rounded flex items-center gap-2 font-bold hover:bg-white transition-colors",children:[e.jsx(L,{size:20}),"مقال جديد"]})]}),e.jsxs("div",{className:"bg-[#1a2d4d] rounded-lg overflow-hidden border border-[#c8a876]/20",children:[e.jsxs("table",{className:"w-full text-right",children:[e.jsx("thead",{className:"bg-[#0b1a33] text-[#c8a876]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-4",children:"الصورة"}),e.jsx("th",{className:"p-4",children:"العنوان"}),e.jsx("th",{className:"p-4",children:"التاريخ"}),e.jsx("th",{className:"p-4",children:"الحالة"}),e.jsx("th",{className:"p-4",children:"ترتيب"}),e.jsx("th",{className:"p-4",children:"إجراءات"})]})}),e.jsx("tbody",{children:t.map((s,r)=>e.jsxs("tr",{className:"border-b border-gray-700 hover:bg-[#0b1a33]/50",children:[e.jsx("td",{className:"p-4",children:e.jsx("img",{src:s.image,alt:s.title,className:"w-16 h-12 object-cover rounded"})}),e.jsx("td",{className:"p-4 font-bold text-white max-w-xs truncate",children:s.title}),e.jsx("td",{className:"p-4 text-gray-400",children:s.date}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:`px-2 py-1 rounded text-xs ${s.isPublished!==!1?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:s.isPublished!==!1?"منشور":"مسودة"})}),e.jsxs("td",{className:"p-4 flex gap-1",children:[e.jsx("button",{onClick:()=>m(r,"up"),disabled:r===0,className:"p-1 hover:text-[#c8a876] disabled:opacity-30",children:e.jsx($,{size:16})}),e.jsx("button",{onClick:()=>m(r,"down"),disabled:r===t.length-1,className:"p-1 hover:text-[#c8a876] disabled:opacity-30",children:e.jsx(z,{size:16})})]}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(u,{to:`/admin/edit/${s.id}`,className:"p-2 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/40",children:e.jsx(S,{size:16})}),e.jsx("a",{href:`/blog/${s.slug}`,target:"_blank",rel:"noreferrer",className:"p-2 bg-green-600/20 text-green-400 rounded hover:bg-green-600/40",children:e.jsx(D,{size:16})}),e.jsx("button",{onClick:()=>f(s.id),className:"p-2 bg-red-600/20 text-red-400 rounded hover:bg-red-600/40",children:e.jsx(I,{size:16})})]})})]},s.id))})]}),t.length===0&&e.jsx("div",{className:"p-8 text-center text-gray-400",children:"لا يوجد مقالات حالياً. ابدأ بإضافة مقال جديد."})]})]})};export{J as default};
