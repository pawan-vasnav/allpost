(this.webpackJsonpallpost=this.webpackJsonpallpost||[]).push([[0],{37:function(e,t,a){e.exports=a(49)},42:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),l=(a(42),a(9)),s=a(20),u=a(5),i=function(){return r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Welcome, Create your todo list with us"),r.a.createElement("h3",null,"We will provide you Best solution for your todo"),r.a.createElement("div",{className:"todo_home"},r.a.createElement(u.b,{to:"/add_todo"},r.a.createElement("button",{className:"btnhome"},"Add Task Here")),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/checkAddedTodo"},r.a.createElement("button",{className:"btnhome"},"Check Added Task")),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/completeTask"},r.a.createElement("button",{className:"btnhome"},"Completed Task")),r.a.createElement(u.b,{to:"/counter"},r.a.createElement("button",{className:"btnhome"},"Counter")),r.a.createElement(u.b,{to:"/userdata"},r.a.createElement("button",{className:"btnhome"},"UserInfo"))))},m=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(i,null))},p=a(6),d=a(7),b=a(10),E=a(8),h=a(11),f="ADD_POST",O="UPDATE",j="INCREMENT",y="DECREMENT",v="RESET",k="ALL_DATA",T="USER",N=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=a.getTitle.value,n=a.getMessage.value,r={id:new Date,title:t,message:n,editing:!1};a.props.dispatch({type:f,data:r}),a.getTitle.value="",a.getMessage.value=""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"post-container"},r.a.createElement("h1",{className:"post_heading"},"Add Todo"),r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getTitle=t},placeholder:"Enter Todo Title"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{required:!0,rows:"5",ref:function(t){return e.getMessage=t},cols:"28",placeholder:"Enter Description"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("button",null,"Add"),r.a.createElement(u.b,{to:"/checkAddedTodo"},r.a.createElement("button",null,"Goto List")),r.a.createElement(u.b,{to:"/"},r.a.createElement("button",null,"Home")))))}}]),t}(n.Component),g=Object(l.b)()(N),w=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.post;return r.a.createElement("div",{className:"post"},r.a.createElement("h2",{className:"post_title"},t.title),r.a.createElement("p",{className:"post_message"},t.message),r.a.createElement("div",{className:"control-buttons"},r.a.createElement("button",{className:"edit",onClick:function(){return e.props.dispatch({type:"EDIT_POST",id:t.id})}},"Edit"),r.a.createElement("button",{className:"completedd",onClick:function(){return e.props.dispatch({type:"COMPLETE",id:t.id})}},"Complete"),r.a.createElement("button",{className:"delete",onClick:function(){return e.props.dispatch({type:"DELETE_POST",id:t.id})}},"Delete")))}}]),t}(n.Component),A=Object(l.b)()(w),C=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleEdit=function(e){var t=a.props.post;e.preventDefault();var n={newTitle:a.getTitle.value,newMessage:a.getMessage.value};a.props.dispatch({type:O,id:t.id,data:n})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.post;return r.a.createElement("div",{key:t.id,className:"post"},r.a.createElement("form",{className:"form",onSubmit:this.handleEdit},r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getTitle=t},defaultValue:t.title,placeholder:"Enter Post Title"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{required:!0,rows:"5",ref:function(t){return e.getMessage=t},defaultValue:t.message,cols:"28",placeholder:"Enter Post"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Update")))}}]),t}(n.Component),M=Object(l.b)()(C),D=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.posts;return r.a.createElement("div",{className:"post-container"},r.a.createElement("span",{className:"btnCont"},r.a.createElement(u.b,{to:"/add_todo"},r.a.createElement("button",{className:"backButton"},"Go Back")),r.a.createElement(u.b,{to:"/"},r.a.createElement("button",{className:"backButton"},"Home"))),r.a.createElement("h1",{className:"post_heading"},"All Posts"),e.map((function(e){return r.a.createElement("div",{key:e.id},e.editing?r.a.createElement(M,{post:e,key:e.id}):r.a.createElement(A,{post:e,key:e.id}))})))}}]),t}(n.Component),_=Object(l.b)((function(e){return{posts:e.todo.newTaskArray}}))(D),R=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.post;return r.a.createElement("div",{className:"post"},r.a.createElement("h2",{className:"post_title"},e.title),r.a.createElement("p",{className:"post_message"},e.message))}}]),t}(n.Component),S=Object(l.b)()(R),P=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.posts;return r.a.createElement("div",{className:"post-container"},r.a.createElement(u.b,{to:"/"},r.a.createElement("button",{className:"backButton"},"Go Back")),r.a.createElement("h1",{className:"post_heading"},"Comleted Task"),e.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(S,{post:e,key:e.id}))})))}}]),t}(n.Component),B=Object(l.b)((function(e){return{posts:e.todo.completeTaskArray}}))(P),x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).increment=function(){a.props.dispatch({type:j})},a.decrement=function(){a.props.dispatch({type:y})},a.reset=function(){a.props.dispatch({type:v})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"incdec"},r.a.createElement(u.b,{to:"/"},r.a.createElement("button",{className:"backButton"},"Back")),r.a.createElement("h1",null,"INCREMENT AND DECREMENT EXAMPLE"),r.a.createElement("h2",{id:"new"},this.props.posts),r.a.createElement("button",{className:"btn",onClick:this.increment},"INCREMENT"),r.a.createElement("button",{className:"btn",onClick:this.decrement},"DECREMENT"),r.a.createElement("button",{className:"btn",onClick:this.reset},"RESET"))}}]),t}(n.Component),I=Object(l.b)((function(e){return{posts:e.counter}}))(x),L=a(23),U=a.n(L),q=a(27),H=function(){return fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return e}))},G=U.a.mark(J),W=U.a.mark(V);function J(){var e;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("2"),t.next=3,Object(q.a)(H);case 3:return e=t.sent,t.next=6,Object(q.b)({type:k,userArray:e});case 6:case"end":return t.stop()}}),G)}function V(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("3"),e.next=3,Object(q.c)(T,J);case 3:case"end":return e.stop()}}),W)}var X=["ID","NAME","USERNAME","EMAIL","PHONE","WEBSITE"],z=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,X.map((function(e,t){return r.a.createElement("th",{key:t},e)}))))},F=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.user.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"tableRows"},e.id),r.a.createElement("td",{className:"tableRows"},e.name),r.a.createElement("td",{className:"tableRows"},e.username),r.a.createElement("td",{className:"tableRows"},e.email),r.a.createElement("td",{className:"tableRows"},e.phone),r.a.createElement("td",{className:"tableRows"},e.website))}));return r.a.createElement("tbody",null,e)}}]),t}(n.Component),K=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch((console.log("1"),{type:T}))}},{key:"render",value:function(){var e=this.props.post;return r.a.createElement("div",{className:"data"},r.a.createElement(u.b,{to:"/"},r.a.createElement("button",{className:"userbtn"},"Back")),r.a.createElement("table",{className:"addingTaskTable"},r.a.createElement(z,null),r.a.createElement(F,{user:e})))}}]),t}(n.Component),Q=Object(l.b)((function(e){return{post:e.user}}))(K),Y=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/add_todo",component:g}),r.a.createElement(s.b,{path:"/checkAddedTodo",component:_}),r.a.createElement(s.b,{path:"/counter",component:I}),r.a.createElement(s.b,{path:"/completeTask",component:B}),r.a.createElement(s.b,{path:"/userdata",component:Q}),r.a.createElement(s.b,{path:"/",component:m}),r.a.createElement(s.a,{to:"/"}))},Z=a(17),$=a(19),ee=a(21),te={newTaskArray:[],completeTaskArray:[]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(Z.a)({},e,{newTaskArray:[].concat(Object(ee.a)(e.newTaskArray),[t.data])});case"DELETE_POST":return Object(Z.a)({},e,{newTaskArray:Object(ee.a)(e.newTaskArray.filter((function(e){return e.id!==t.id})))});case"EDIT_POST":return Object(Z.a)({},e,{newTaskArray:Object(ee.a)(e.newTaskArray.map((function(e){return e.id===t.id?Object(Z.a)({},e,{editing:!e.editing}):e})))});case O:var a=e.newTaskArray.map((function(e){return e.id===t.id?Object(Z.a)({},e,{title:t.data.newTitle,message:t.data.newMessage,editing:!e.editing}):e}));return Object(Z.a)({},e,{newTaskArray:Object(ee.a)(a)});case"COMPLETE":var n=e.newTaskArray.filter((function(e){return e.id===t.id}));return Object(Z.a)({},e,{newTaskArray:Object(ee.a)(e.newTaskArray.filter((function(e){return e.id!==t.id}))),completeTaskArray:[].concat(Object(ee.a)(e.completeTaskArray),Object(ee.a)(n))});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return e+1;case y:return e-1;case v:return 0;default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.userArray;default:return console.log("4"),e}},ce=a(36),oe=$.d,le=Object($.c)({counter:ne,todo:ae,user:re}),se=function(){var e=Object(ce.a)();return Object(Z.a)({},Object($.e)(le,oe(Object($.a)(e))),{runSaga:e.run(V)})}();o.a.render(r.a.createElement(l.a,{store:se},r.a.createElement(u.a,null,r.a.createElement(Y,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.4f4f70bb.chunk.js.map