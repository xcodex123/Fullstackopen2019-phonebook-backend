(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(0),o=t.n(r),s=t(13),u=t.n(s),l=t(2),c=t.n(l),m=function(e){var n=e.newName,t=e.newNumber,a=e.handleSubmit,r=e.handleNameChange,s=e.handleNumberChange;return o.a.createElement("form",{onSubmit:a},o.a.createElement("div",null,"name: ",o.a.createElement("input",{onChange:r,value:n})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{onChange:s,value:t})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},i=function(e){var n=e.person,t=e.delEntry;return o.a.createElement("div",{key:n.id},n.name," ",n.number," ",o.a.createElement("button",{onClick:t},"delete"))},d=function(e){var n=e.persons,t=e.delEntry;return o.a.createElement("div",null,n.map(function(e){return o.a.createElement(i,{person:e,delEntry:t(e.id)})}))},f="/api/persons",g=function(e){return c.a.post(f,e).then(function(e){return e.data})},p=function(e){return c.a.delete("".concat(f,"/").concat(e)).then(function(e){return e.data})};t(36);u.a.render(o.a.createElement(function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],s=n[1],u=Object(r.useState)(""),l=Object(a.a)(u,2),i=l[0],f=l[1],b=Object(r.useState)(""),h=Object(a.a)(b,2),E=h[0],v=h[1],C=Object(r.useState)({message:"",messageClass:"nothing"}),w=Object(a.a)(C,2),N=w[0],j=w[1];Object(r.useEffect)(function(){console.log("effect"),c.a.get("/api/persons").then(function(e){console.log("promise fulfilled"),s(e.data)})},[]);console.log(t);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(function(e){var n=e.message,t=e.messageClass;return""===n?null:o.a.createElement("div",{className:t},n)},{message:N.message,messageClass:N.messageClass}),o.a.createElement(m,{newName:i,newNumber:E,handleSubmit:function(e){e.preventDefault();var n=new RegExp("^"+i+"$","g"),a=new RegExp("^"+i.toLowerCase()+"$","g"),r=new RegExp("^"+i.toUpperCase()+"$","g");0!==t.filter(function(e){return n.test(e.name)||a.test(e.name.toLowerCase())||r.test(e.name.toUpperCase())}).length?alert("".concat(i," is already added to phonebook")):g({name:i,number:E}).then(function(e){s(t.concat(e)),j({message:"Added ".concat(i),messageClass:"added"}),setTimeout(function(){return j({message:"",messageClass:"nothing"})},3e3),f(""),v("")})},handleNameChange:function(e){f(e.target.value)},handleNumberChange:function(e){v(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(d,{persons:t,delEntry:function(e){return function(){var n=t.find(function(n){return n.id===e});window.confirm("Delete ".concat(n.name,"?"))&&p(e).then(function(a){var r=t.filter(function(n){return n.id!==e});s(r),j({message:"".concat(n.name," is Deleted"),messageClass:"deleted"}),setTimeout(function(){return j({message:"",messageClass:"nothing"})},3e3)})}}}))},null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.30f92126.chunk.js.map