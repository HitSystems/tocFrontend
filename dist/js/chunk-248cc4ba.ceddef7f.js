(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-248cc4ba"],{"669e":function(t,e,c){"use strict";c("df25")},df25:function(t,e,c){},f75f:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a={class:"row ms-4 align-items-center"},o={class:"row"},i={class:"col"},s=Object(n["j"])(" Tickets "),b={class:"col"},r=Object(n["j"])(" Salida de dinero "),l={class:"col"},d=Object(n["j"])(" Entrada de dinero "),u={class:"col"},j=Object(n["j"])(" Cerrar caja "),O={class:"row"};function f(t,e,c,f,k,v){var p=Object(n["F"])("router-link"),h=Object(n["F"])("router-view");return Object(n["x"])(),Object(n["g"])("div",a,[Object(n["h"])("div",o,[Object(n["h"])("div",i,[Object(n["k"])(p,{to:"/menu/caja/tickets",class:"btn btn-secondary botonesPrincipales w-100 btn-block botonesWidth"},{default:Object(n["Q"])((function(){return[s]})),_:1})]),Object(n["h"])("div",b,[Object(n["k"])(p,{to:"/menu/caja/salida",class:"btn btn-secondary botonesPrincipales w-100 btn-block botonesWidth"},{default:Object(n["Q"])((function(){return[r]})),_:1})]),Object(n["h"])("div",l,[Object(n["k"])(p,{to:"/menu/caja/entrada",class:"btn btn-secondary botonesPrincipales w-100 btn-block botonesWidth"},{default:Object(n["Q"])((function(){return[d]})),_:1})]),Object(n["h"])("div",u,[Object(n["k"])(p,{to:"/menu/caja/cerrar-caja",class:"btn btn-secondary botonesPrincipales w-100 h-100 btn-block botonesWidth"},{default:Object(n["Q"])((function(){return[j]})),_:1})])]),Object(n["h"])("div",O,[Object(n["k"])(h)])])}c("3f20"),c("47e6"),c("53ed");var k=c("bc3a"),v=c.n(k),p=c("c1df"),h=c.n(p),m=c("5502"),w=c("a18c"),T=(c("0180"),{name:"Caja",setup:function(){var t=Object(n["C"])(null),e=Object(n["C"])(0),c=Object(n["C"])([]),a=Object(n["C"])(null);Object(m["b"])();function o(t){w["a"].push(t)}function i(){null!=t.value?(v.a.post("impresora/imprimirTicket",{idTicket:t.value}),o("/")):console.log("Primero selecciona un ticket")}return Object(n["v"])((function(){v.a.post("tickets/getTicketsIntervalo").then((function(t){e.value=0;for(var n=0;n<t.data.length;n+=1)e.value+=t.data[n].total;c.value=t.data}))})),{goTo:o,listaTickets:c,activo:t,total:e,moment:h.a,ticketInfo:a,imprimirTicket:i}}}),g=(c("669e"),c("d959")),C=c.n(g);const _=C()(T,[["render",f],["__scopeId","data-v-0dbb18dd"]]);e["default"]=_}}]);
//# sourceMappingURL=chunk-248cc4ba.ceddef7f.js.map