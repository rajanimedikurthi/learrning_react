(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{18:function(e,t,n){e.exports={button:"NewButton_button__20ZDx"}},23:function(e,t,n){},24:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a,c,r=n(1),i=n.n(r),l=n(13),s=n.n(l),o=(n(23),n(8)),u=n(2),d=(n.p,n(24),n(5)),b=n(6),j=b.a.div(a||(a=Object(d.a)(["\n  margin: 0.5rem;\n  & input {\n    display: block;\n    width: 100%;\n    border: 1px solid ",";\n    background-color: ",";\n  }\n\n  & label {\n    color: ",";\n  }\n  & input:focus {\n    outline: none;\n    background-color: #d4c197;\n    border-color: #d89707;\n  }\n"])),(function(e){return e.invalid?"rgb(240, 5, 5)":"#ccc"}),(function(e){return e.invalid?"rgb(250, 128, 114)":"transparent"}),(function(e){return e.invalid?"rgb(240, 5, 5)":"inherit"})),x=b.a.button(c||(c=Object(d.a)(["\n  width: 100%;\n  font: inherit;\n  border: 1px solid #8b005d;\n  color: #fff;\n  background-color: #8b005d;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  padding: 0.5rem 1.5rem;\n\n  &:focus {\n    outline: none;\n  }\n  &:hover,\n  &:active {\n    background-color: #ac0e77;\n    border-color: #ac0e77;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);\n  }\n  @media (min-width: 768px) {\n    width: auto;\n  }\n"]))),v=n(0),O=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),a=Object(r.useState)(!0),c=Object(u.a)(a,2),i=c[0],l=c[1],s=Object(r.useState)(!0),o=Object(u.a)(s,2),d=o[0],b=o[1];return Object(v.jsxs)("form",{onSubmit:function(a){a.preventDefault();var c=t.current.value,r=n.current.value;if(0===c.trim().length||0===r.trim().length)return 0===c.trim().length&&l(!1),void(0===r.trim().length&&b(!1));localStorage.setItem("isLoggedIn","logged"),e.onLogin()},children:[Object(v.jsxs)(j,{invalid:!i,children:[Object(v.jsx)("label",{children:"UserId"}),Object(v.jsx)("input",{type:"text",ref:t})]}),Object(v.jsxs)(j,{invalid:!d,children:[Object(v.jsx)("label",{children:"Password"}),Object(v.jsx)("input",{type:"password",ref:n})]}),Object(v.jsx)(x,{type:"submit",children:"Login"})]})};n(28),n(29),n(30);var h=function(e){var t={month:e.date.toLocaleString("en-US",{month:"short"}),year:e.date.getFullYear(),day:e.date.toLocaleString("en-US",{day:"2-digit"})},n=t.month,a=t.year,c=t.day;return Object(v.jsxs)("div",{className:"Calendar-Display",children:[Object(v.jsx)("div",{className:"year",children:a}),Object(v.jsx)("div",{className:"month",children:n}),Object(v.jsx)("div",{className:"day",children:c})]})};n(31);var f=function(e){var t="card "+e.className;return Object(v.jsx)("div",{className:t,children:e.children})};var m=function(e){var t=e.item,n=t.date,a=t.title,c=t.amount;return Object(v.jsxs)(f,{className:"expense-item flex-container align-center",children:[Object(v.jsx)("div",{className:"date",children:Object(v.jsx)(h,{date:n})}),Object(v.jsx)("div",{className:"text",children:a}),Object(v.jsx)("div",{className:"amount",children:c})]})},p=function(e){return Object(v.jsxs)("div",{className:"flex-container justify-flex-end",children:[Object(v.jsx)("label",{className:"display-inline",children:"Filter by year "}),Object(v.jsxs)("select",{value:e.selected,onChange:function(t){var n=t.target.value;e.onFilterChange(n)},children:[Object(v.jsx)("option",{value:"2022",children:"2022"}),Object(v.jsx)("option",{value:"2021",children:"2021"}),Object(v.jsx)("option",{value:"2020",children:"2020"}),Object(v.jsx)("option",{value:"2019",children:"2019"})]})]})},g=n(17),y=(n(32),function(e){var t=e.label,n=e.value,a=e.max,c="0%";return a>0&&(c=Math.round(n/a*100)+"%"),Object(v.jsxs)("div",{className:"chart-bar",children:[Object(v.jsx)("div",{className:"chart-bar-inner",children:Object(v.jsx)("div",{className:"chart-bar-fill",style:{height:c}})}),Object(v.jsx)("div",{className:"chart-bar-label",children:t})]})}),S=(n(33),function(e){var t=e.datapoints.map((function(e){return e.value}));console.log(t);var n=Math.max.apply(Math,Object(o.a)(t));return Object(v.jsx)("div",{className:"chart",children:e.datapoints.map((function(e){return Object(v.jsx)(y,{max:n,label:e.label,value:e.value},e.label)}))})}),N=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(g.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(r){a.e(r)}finally{a.f()}return Object(v.jsx)(S,{datapoints:n})};var w=function(e){var t=e.expenses,n=Object(r.useState)("2021"),a=Object(u.a)(n,2),c=a[0],i=a[1],l=t.filter((function(e){return e.date.getFullYear().toString()===c})),s=Object(v.jsx)("p",{children:"No expenses found "});return l.length&&(s=l.map((function(e){return Object(v.jsx)(m,{item:e},e.id)}))),Object(v.jsxs)(f,{className:"expense-list box",children:[Object(v.jsx)(p,{selected:c,onFilterChange:function(e){i(e)}}),Object(v.jsx)(N,{expenses:l}),s]})},D=n(11),k=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),a=Object(r.useRef)(),c=Object(r.useState)(!0),i=Object(u.a)(c,2),l=i[0],s=i[1],o=Object(r.useState)(!0),d=Object(u.a)(o,2),b=d[0],O=d[1],h=Object(r.useState)(!0),f=Object(u.a)(h,2),m=f[0],p=f[1];return Object(v.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r=t.current.value,i=n.current.value,l=a.current.value;if(0===r.trim().length||0===i.trim().length||0===l.trim().length)return 0===r.trim().length&&s(!1),0===i.trim().length&&O(!1),void(0===l.trim().length&&p(!1));var o={title:r,amount:i,date:new Date(l)};t.current.value="",n.current.value="",a.current.value="",e.onSaveExpenseData(o),e.onStopEdit(),s(!1),s(!1),s(!1)},children:[Object(v.jsxs)(j,{invalid:!l,children:[Object(v.jsx)("label",{children:"Title"}),Object(v.jsx)("input",{type:"text",ref:t})]}),Object(v.jsxs)(j,{invalid:!b,children:[Object(v.jsx)("label",{children:"Amount"}),Object(v.jsx)("input",{type:"number",ref:n})]}),Object(v.jsxs)(j,{invalid:!m,children:[Object(v.jsx)("label",{children:"Date"}),Object(v.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",ref:a})]}),Object(v.jsxs)("div",{className:"form-actions 2-column",children:[Object(v.jsx)(x,{onClick:function(){e.onStopEdit()},children:"cancel"}),Object(v.jsx)(x,{type:"submit",children:"Add expenses"})]})]})},C=(n(34),n(18)),F=n.n(C),L=function(e){return Object(v.jsx)("button",{type:e.type,className:F.a.button,onClick:e.onClick,children:e.children})},E=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(v.jsxs)("div",{className:"expense-form flex-container column box",children:[!a&&Object(v.jsx)(L,{onClick:function(){c(!0)},children:" Add new expense form "}),a&&Object(v.jsx)(k,{onStopEdit:function(){c(!1)},onSaveExpenseData:function(t){var n=Object(D.a)(Object(D.a)({},t),{},{id:Math.random().toString()});e.onAddExpenseData(n)}})]})},I=[{id:"e1",date:new Date(2021,2,28),title:"Car insurance",amount:"16000"},{id:"e2",date:new Date(2020,10,16),title:"Rent",amount:"48000"},{id:"e3",date:new Date(2020,5,18),title:"Medical bills",amount:"12000"},{id:"e4",date:new Date(2019,11,6),title:"Home insurance",amount:"12000"}];var M=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){"logged"==localStorage.getItem("isLoggedIn")&&a(!0)}),[]);var c=Object(r.useState)(I),i=Object(u.a)(c,2),l=i[0],s=i[1];return Object(v.jsxs)("div",{children:[!n&&Object(v.jsx)(O,{onLogin:function(){a(!0)}}),n&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x,{onClick:function(){localStorage.removeItem("isLoggedIn"),a(!1)},children:"Logout"}),Object(v.jsx)(E,{onAddExpenseData:function(e){s((function(t){return[e].concat(Object(o.a)(t))}))}}),Object(v.jsx)(w,{expenses:l})," "]})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),A()}},[[35,1,2]]]);
//# sourceMappingURL=main.3a4c4894.chunk.js.map