(this.webpackJsonpqueuetask=this.webpackJsonpqueuetask||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),l=c(7),r=c.n(l),i=c(6),o=c(4),j=function(e){var t=e.showAll,c=e.tasks,n=c.length>0?c[0]:"",a=t&&c.length>0?c.slice(1):[];return n?Object(s.jsxs)("ul",{className:"list-group",children:[Object(s.jsx)("li",{className:"list-group-item active",children:n.value},n.creationDate),a.map((function(e){return Object(s.jsx)("li",{className:"list-group-item",children:e.value},e.creationDate)}))]}):Object(s.jsx)("p",{className:"alert alert-success",children:"All Done!"})},u=function(){return Object(s.jsxs)("div",{className:"jumbotron text-center",children:[Object(s.jsx)("h1",{children:"QueueTask"}),Object(s.jsxs)("em",{children:["Deal with the task at hand, and ",Object(s.jsx)("strong",{children:"only"})," the task at hand."]})]})},b=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],l=Object(n.useState)([]),r=Object(o.a)(l,2),u=r[0],b=r[1],h=Object(n.useState)(!1),d=Object(o.a)(h,2),m=d[0],O=d[1],x=(Object(n.useEffect)((function(){document.title=u.length>0?"(".concat(u.length,") QueueTask"):"QueueTask"}),[u]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("savedTasks"));e&&b(e)}),[]),function(e){b(e),localStorage.setItem("savedTasks",JSON.stringify(e))});return Object(s.jsxs)("div",{className:"container text-center",children:[Object(s.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(s.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"showAllCheckbox",onClick:function(e){O(e.target.checked)}}),Object(s.jsx)("label",{className:"custom-control-label",for:"showAllCheckbox",children:"Show All Tasks"})]}),Object(s.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),c.length>0){var t={value:c,creationDate:(new Date).toISOString()},s=[].concat(Object(i.a)(u),[t]);x(s),a("")}},children:Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("div",{className:"input-group mb-3",children:[Object(s.jsx)("input",{type:"text",className:"form-control",value:c,onChange:function(e){a(e.target.value)}}),Object(s.jsx)("div",{className:"input-group-append",children:Object(s.jsx)("button",{className:"btn btn-primary",children:"Add"})})]})})}),Object(s.jsxs)("div",{className:"btn-group m-1",role:"group","aria-label":"taskActionGroup",children:[Object(s.jsx)("button",{onClick:function(){u.length>0&&x(u.slice(1))},className:"btn btn-success",children:"Remove Top"}),Object(s.jsx)("button",{onClick:function(){u.length>1&&x([].concat(Object(i.a)(u.slice(1)),[u[0]]))},className:"btn btn-secondary",children:"Reveal Next"})]}),Object(s.jsx)("div",{className:"m-3",children:Object(s.jsx)(j,{showAll:m,tasks:u})})]})},h=function(){return Object(s.jsx)("footer",{className:"footer p-1",children:Object(s.jsx)("div",{className:"container p-1",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col text-right",children:Object(s.jsx)("a",{href:"https://www.sahansk.com",children:"\xa9 Sahan Kumarasinghe 2021"})})})})})},d=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(u,{}),Object(s.jsx)(b,{}),Object(s.jsx)(h,{})]})};c(13);r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.22d568ab.chunk.js.map