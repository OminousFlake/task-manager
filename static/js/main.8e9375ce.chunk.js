(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(36),o=a.n(s),i=a(15),c=(a(107),a(108),a(63),function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)}),l=function(e){var t=function(t,a){e.saveSort(t,a),e.getTasks(t,a,e.currentPage),e.setCurrentPage(1)},a=function(t){return e.sortType===t&&e.sortDirection&&"desc"!==e.sortDirection?"desc":"asc"};return r.a.createElement("div",null,r.a.createElement("span",{className:"sorting-header"},"Sort by"),r.a.createElement("button",{className:"username"===e.sortType?"sort active-sort":"sort non-active-sort",onClick:function(){return t("username",a("username"))}},"name ","username"===e.sortType&&r.a.createElement("span",null,e.sortDirection?"asc"===e.sortDirection?r.a.createElement(c,{label:"ascending",symbol:"\ud83d\udd3a"}):r.a.createElement(c,{label:"descending",symbol:"\ud83d\udd3b"}):"")),r.a.createElement("button",{className:"email"===e.sortType?"sort active-sort":"sort non-active-sort",onClick:function(){return t("email",a("email"))}},"email","email"===e.sortType&&r.a.createElement("span",null,e.sortDirection?"asc"===e.sortDirection?r.a.createElement(c,{label:"ascending",symbol:"\ud83d\udd3a"}):r.a.createElement(c,{label:"descending",symbol:"\ud83d\udd3b"}):"")),r.a.createElement("button",{onClick:function(){return t("status",a("status"))},className:"status"===e.sortType?"sort active-sort":"sort non-active-sort"},"status","status"===e.sortType&&r.a.createElement("span",null,e.sortDirection?"asc"===e.sortDirection?r.a.createElement(c,{label:"ascending",symbol:"\ud83d\udd3a"}):r.a.createElement(c,{label:"descending",symbol:"\ud83d\udd3b"}):"")))},m=a(98),u=a(93),d=a.n(u),E=function(e){return r.a.createElement("div",{className:"edit"},r.a.createElement("img",{src:d.a,alt:"edit"}))},p=r.a.memo((function(e){var t,a,s=Object(n.useState)(e.text),o=Object(m.a)(s,2),i=o[0],c=o[1],l=function(t){e.enterEditMode(e.editModeId===t?null:t)};return r.a.createElement("form",{className:"task"},r.a.createElement("div",{className:"task-header"},r.a.createElement("h3",null,"Task #",e.id),e.isAdmin&&r.a.createElement("div",{onClick:function(){return l(e.id)}},r.a.createElement(E,{symbol:"\u270f"})),e.isAdmin&&e.editModeId===e.id&&r.a.createElement("div",{className:"task-header_save",onClick:function(){return e.editTask(e.authToken,e.id,e.status,i),l(e.id),void e.getTasks(e.sortType,e.sortDirection,e.currentPage)}},r.a.createElement("span",null,"save"))),r.a.createElement("div",{className:"task-info task-username"},r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("p",null,e.username)),r.a.createElement("div",{className:"task-info task-email"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("p",null,e.email)),r.a.createElement("div",{className:"task-info task-text"},r.a.createElement("label",{htmlFor:"text"},"Text:"),e.isAdmin&&e.editModeId===e.id?r.a.createElement("input",{type:"text",value:i,name:"text",onChange:function(e){return function(e){c(e)}(e.target.value)}}):r.a.createElement("p",null,i)),r.a.createElement("div",{className:"task-info task-done"},r.a.createElement("label",{htmlFor:"status"},"Status"),e.isAdmin&&e.editModeId===e.id?r.a.createElement("input",{type:"checkbox",name:"status",onChange:function(){return e.status?(e.editTask(e.authToken,e.id,0,null),e.getTasks(e.sortType,e.sortDirection,e.currentPage)):(e.editTask(e.authToken,e.id,10,null),e.getTasks(e.sortType,e.sortDirection,e.currentPage)),e.status?"checked":"unchecked"},defaultChecked:!!e.status}):r.a.createElement("p",null,(t=e.status,a=function(e,t){return e.some((function(e){return e===t}))},t&&a(e.idsEditedByAdmin,e.id)?"edited by admin / complete":t?"complete":!t&&a(e.idsEditedByAdmin,e.id)?"edited by admin / pending":"pending"))))})),f=function(e){Object(n.useEffect)((function(){e.getTasks(e.sortType,e.sortDirection,e.currentPage)}),[e.currentPage]);for(var t=Math.ceil(e.totalTasksCount/e.pageSize),a=[],s=1;s<=t;s++)a.push(s);var o=e.tasks.map((function(t){return r.a.createElement(p,Object.assign({username:t.username,email:t.email,text:t.text,status:t.status,key:t.id,id:t.id},e))}));return r.a.createElement("div",null,r.a.createElement(l,e),r.a.createElement("div",{className:"tasksContainer"},o),r.a.createElement("div",{className:"pages"},a.map((function(t,a){return r.a.createElement("span",{key:a,className:e.currentPage===t?"page-selected":void 0,onClick:function(){return a=t,void e.setCurrentPage(a);var a}},t)}))))},g=a(226),k=a(225),b=a(56),v=function(e){var t=e.input,a=e.meta,n=Object(b.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},t,n,{className:s?"withError":void 0})),r.a.createElement("div",null,s&&r.a.createElement("span",{className:"errorMessage"},a.error)))},T=function(e){var t=e.input,a=e.meta,n=Object(b.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,n,{className:s?"withError":void 0})),r.a.createElement("div",null,s&&r.a.createElement("span",{className:"errorMessage"},a.error)))},h=function(e){return e?void 0:"Field is required"},y=Object(k.a)({form:"adminLogin"})((function(e){return r.a.createElement("form",{className:"adminLoginForm",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"adminLoginForm-field adminLoginForm-username"},r.a.createElement("label",{htmlFor:"username"},"Admin"),r.a.createElement(g.a,{component:T,type:"text",value:"",placeholder:"enter your username",name:"username",validate:[h]})),r.a.createElement("div",{className:"adminLoginForm-field adminLoginForm-password"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(g.a,{component:T,type:"password",value:"",placeholder:"enter your password",name:"password",validate:[h]})),r.a.createElement("button",{className:"adminLoginForm-loginButton"},"login"))})),O=Object(k.a)({form:"createTask"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"createForm"},r.a.createElement("h2",null,"Create new task"),r.a.createElement("div",{className:"createForm-field createForm-user"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(g.a,{component:T,type:"text",value:"",placeholder:"enter your username",name:"username",validate:[h]})),r.a.createElement("div",{className:"createForm-field createForm-email"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(g.a,{component:T,type:"email",value:"",placeholder:"enter your email",name:"email",validate:[h]})),r.a.createElement("div",{className:"createForm-field createForm-text"},r.a.createElement("label",{htmlFor:"text"},"Your text"),r.a.createElement(g.a,{component:v,placeholder:"enter your text",name:"text",validate:[h]})),r.a.createElement("button",null,"create"))})),A=function(e){return r.a.createElement("main",{className:"tasksPage"},e.isAdmin?r.a.createElement("div",{className:"admin-log-out"},r.a.createElement("span",{onClick:e.exitAdminMode},"Log out")):r.a.createElement("div",{className:"adminLoginFormContainer"},r.a.createElement(y,{onSubmit:function(t){e.logAsAdmin(t)}}),r.a.createElement("span",{onClick:e.closeMessages,className:"showMessage"},e.feedbackOnAdminLogIn)),r.a.createElement("div",{className:"createFormContainer"},r.a.createElement(O,{onSubmit:function(t){e.createNewTask(t),e.getTasks(null,null,e.currentPage)}}),r.a.createElement("span",{onClick:e.closeMessages,className:"showMessage"},e.feedbackOnCreation)),r.a.createElement("div",{className:"tasksContainer"},r.a.createElement("h1",null,"Tasks"),r.a.createElement(f,e)))},N=a(40),_=a(95),D=a(96).create({baseURL:"https://uxcandy.com/~shapoval/test-task-backend/v2/"}),S="?developer=Alex?",C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return e?D.get("".concat(S,"&sort_field=").concat(e,"&sort_direction=").concat(t,"&page=").concat(a)).then((function(e){return e})):D.get("".concat(S,"&sort_direction=").concat(t,"&page=").concat(a)).then((function(e){return e}))},I=function(e){var t=new FormData;return t.append("username",e.username),t.append("email",e.email),t.append("text",e.text),D.post("create".concat(S),t).then((function(e){return e.data}))},P=function(e){var t=new FormData;return t.append("username",e.username),t.append("password",e.password),D.post("login?".concat(S),t).then((function(e){return e.data}))},M=function(e,t,a,n){var r=new FormData;return r.append("token",e),n&&r.append("text",n),r.append("status",a),D.post("/edit/".concat(t).concat(S),r)};function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(_.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x,j=function(e,t){var a=null;return e.forEach((function(e,n){e.id===t&&(a=n)})),a},L=function(e,t){localStorage.setItem(t,e)},B={tasks:[],pageSize:3,totalTasksCount:0,currentPage:1,isAdmin:(x="isAdmin","true"===localStorage.getItem(x)||!1),editModeId:null,sortType:null,sortDirection:null,authToken:null,feedbackOnCreation:null,feedbackOnAdminLogIn:null,idsEditedByAdmin:[]},R=function(e){return{type:"ENTER_ADMIN_MODE",adminLoggedIn:e}},K=function(e){return{type:"SHOW_FEEDBACK_ON_CREATION",feedback:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_TASKS":return F({},e,{tasks:Object(N.a)(t.tasks)});case"SET_TOTAL_TASKS_COUNT":return F({},e,{totalTasksCount:t.tasksCount});case"SET_CURRENT_PAGE":return F({},e,{currentPage:t.page});case"ENTER_ADMIN_MODE":var a=F({},e);return a.isAdmin=t.adminLoggedIn,L("true","isAdmin"),a;case"EXIT_ADMIN_MODE":var n=F({},e);return n.isAdmin=!1,n.authToken=null,L("false","isAdmin"),n;case"ENTER_EDIT_MODE":return F({},e,{editModeId:t.editModeId});case"SAVE_SORT":return F({},e,{sortType:t.sortType,sortDirection:t.sortDirection});case"SET_AUTH_TOKEN":return F({},e,{authToken:t.authToken});case"SHOW_FEEDBACK_ON_CREATION":return F({},e,{feedbackOnCreation:t.feedback});case"SHOW_FEEDBACK_ON_ADMIN_LOG_IN":return F({},e,{feedbackOnAdminLogIn:t.feedback});case"CLOSE_MESSAGES":return F({},e,{feedbackOnCreation:null,feedbackOnAdminLogIn:null});case"ADD_TO_EDITED_IDS":var r=F({},e);r.tasks=Object(N.a)(e.tasks),r.idsEditedByAdmin=Object(N.a)(e.idsEditedByAdmin);var s=j(r.tasks,t.id);return t.text!==r.tasks[s].text&&(r.idsEditedByAdmin.some((function(e){return e===t.id}))||r.idsEditedByAdmin.push(t.id)),r;default:return e}},W=Object(i.b)((function(e){return{tasks:e.tasksPage.tasks,pageSize:e.tasksPage.pageSize,totalTasksCount:e.tasksPage.totalTasksCount,currentPage:e.tasksPage.currentPage,isAdmin:e.tasksPage.isAdmin,editModeId:e.tasksPage.editModeId,sortType:e.tasksPage.sortType,sortDirection:e.tasksPage.sortDirection,authToken:e.tasksPage.authToken,feedbackOnCreation:e.tasksPage.feedbackOnCreation,feedbackOnAdminLogIn:e.tasksPage.feedbackOnAdminLogIn,idsEditedByAdmin:e.tasksPage.idsEditedByAdmin}}),{getTasks:function(e,t,a){return function(n){C(e,t,a).then((function(e){n({type:"DISPLAY_TASKS",tasks:e.data.message.tasks}),n({type:"SET_TOTAL_TASKS_COUNT",tasksCount:e.data.message.total_task_count})}))}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",page:e}},logAsAdmin:function(e){return function(t){P(e).then((function(e){"ok"===e.status?(t(R(!0)),t({type:"SET_AUTH_TOKEN",authToken:e.message.token})):(t(R(!1)),t({type:"SHOW_FEEDBACK_ON_ADMIN_LOG_IN",feedback:"Wrong password or login"}))}))}},enterEditMode:function(e){return{type:"ENTER_EDIT_MODE",editModeId:e}},exitAdminMode:function(){return{type:"EXIT_ADMIN_MODE"}},saveSort:function(e,t){return{type:"SAVE_SORT",sortType:e,sortDirection:t}},editTask:function(e,t,a,n){return function(r){n&&r(function(e,t){return{type:"ADD_TO_EDITED_IDS",id:e,text:t}}(t,n)),M(e,t,a,n)}},createNewTask:function(e){return function(t){I(e).then((function(e){"ok"===e.status?t(K("A new task has been created!")):t(K("Invalid email"))}))}},closeMessages:function(){return{type:"CLOSE_MESSAGES"}}})(A);var G=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(5),z=a(97),Y=a(227),J=Object(H.c)({form:Y.a,tasksPage:U}),V=Object(H.d)(J,Object(H.a)(z.a));o.a.render(r.a.createElement(i.a,{store:V},r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,a){},93:function(e,t,a){e.exports=a.p+"static/media/edit.39dab33f.png"},99:function(e,t,a){e.exports=a(224)}},[[99,1,2]]]);
//# sourceMappingURL=main.8e9375ce.chunk.js.map