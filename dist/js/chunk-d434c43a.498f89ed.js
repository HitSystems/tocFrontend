(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d434c43a"],{2716:function(t,e,a){"use strict";a("4c42")},"37c0":function(t,e,a){"use strict";a.r(e);var n=a("7a23");function c(t,e,a,c,o,r){var s=Object(n["E"])("MenuTecnicoComponent");return Object(n["w"])(),Object(n["g"])("div",null,[Object(n["j"])(s)])}var o=function(t){return Object(n["z"])("data-v-3735fc7e"),t=t(),Object(n["x"])(),t},r={class:"container-fliud"},s={class:"row text-center mt-2"},i={class:"col"},l={class:"row text-center mt-2"},d={class:"col"},u={class:"row text-center mt-2"},b={class:"col"},m=o((function(){return Object(n["h"])("div",{class:"row text-center mt-2"},[Object(n["h"])("div",{class:"col"},[Object(n["h"])("button",{class:"btn btn-primary buttonSizeTecnico","data-bs-toggle":"modal","data-bs-target":"#modalConfigImpresora"},"Config. VID y PID impresora")])],-1)})),p={class:"position-fixed bottom-0 start-0 ms-2 mb-2"},f={class:"modal fade",id:"modalConfigImpresora",tabindex:"-1","aria-hidden":"true"},j={class:"modal-dialog"},h={class:"modal-content"},O=o((function(){return Object(n["h"])("div",{class:"modal-header"},[Object(n["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},"Configuración VID y PID impresora"),Object(n["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)})),v={class:"modal-body"},g={class:"input-group mb-3"},C=o((function(){return Object(n["h"])("span",{class:"input-group-text",id:"basic-addon1"},"VID",-1)})),I={class:"input-group mb-3"},T=o((function(){return Object(n["h"])("span",{class:"input-group-text",id:"basic-addon1"},"PID",-1)})),k={class:"modal-footer"},x=o((function(){return Object(n["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cerrar",-1)}));function y(t,e,a,c,o,y){return Object(n["w"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",r,[Object(n["h"])("div",s,[Object(n["h"])("div",i,[Object(n["h"])("button",{class:"btn btn-primary buttonSizeTecnico",onClick:e[0]||(e[0]=function(t){return c.descargarClientesFinales()})},"Descargar clientes finales")])]),Object(n["h"])("div",l,[Object(n["h"])("div",d,[Object(n["h"])("button",{class:"btn btn-primary buttonSizeTecnico",onClick:e[1]||(e[1]=function(t){return c.descargarTicketInfo()})},"Descargar info. ticket finales")])]),Object(n["h"])("div",u,[Object(n["h"])("div",b,[Object(n["h"])("button",{class:"btn btn-primary buttonSizeTecnico",onClick:e[2]||(e[2]=function(t){return c.actualizarTeclados()})},"Actualizar teclado")])]),m]),Object(n["h"])("div",p,[Object(n["h"])("button",{class:"btn btn-warning buttonSizeTecnico",onClick:e[3]||(e[3]=function(t){return c.volver()})},"Volver")]),Object(n["h"])("div",f,[Object(n["h"])("div",j,[Object(n["h"])("div",h,[O,Object(n["h"])("div",v,[Object(n["h"])("div",g,[C,Object(n["Q"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"0x4B8","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.vid=t})},null,512),[[n["M"],c.vid]])]),Object(n["h"])("div",I,[T,Object(n["Q"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"0x202","onUpdate:modelValue":e[5]||(e[5]=function(t){return c.pid=t})},null,512),[[n["M"],c.pid]])])]),Object(n["h"])("div",k,[x,Object(n["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=function(t){return c.guardarCambiosImpresora()})},"Guardar cambios")])])])])],64)}var w=a("bc3a"),z=a.n(w),D=a("a18c"),V=a("0180"),A=a("a1e9"),E=a("5c40"),M={setup:function(){var t=Object(V["b"])(),e=Object(A["l"])(""),a=Object(A["l"])("");function n(){z.a.post("clientes/descargarClientesFinales").then((function(e){0==e.data.error?t.success("Clientes descargados OK"):t.error(e.data.mensaje)}))["catch"]((function(e){console.log(e),t.error("Error descargarClientesFinales CATCH")}))}function c(){D["a"].push("/menu/caja")}function o(){z.a.post("teclado/actualizarTeclado").then((function(e){0==e.data.error?t.success("OK"):t.error(e.data.mensaje)}))["catch"]((function(e){console.log(e),t.error("Error catch")}))}function r(){z.a.post("parametros/vidAndPid",{vid:e.value,pid:a.value}).then((function(e){0==e.data.error?t.success("Cambios guardados"):t.error(e.data.mensaje)}))["catch"]((function(e){console.log(e),t.error("Error guardarCambiosImpresora CATCH")}))}function s(){z.a.post("params-ticket/descargarInfoTicket").then((function(e){0==e.data.error?t.success("Info. ticket actualizada"):t.error(e.data.mensaje)}))["catch"]((function(e){console.log(e),t.error("Error en Catch")}))}return Object(E["A"])((function(){z.a.get("parametros/getVidAndPid").then((function(n){0==n.data.error?(e.value=n.data.info.impresoraUsbInfo.vid,a.value=n.data.info.impresoraUsbInfo.pid):t.error(n.data.mensaje)}))["catch"]((function(e){console.log(e),t.error("Error get")}))})),{guardarCambiosImpresora:r,vid:e,pid:a,descargarTicketInfo:s,volver:c,descargarClientesFinales:n,actualizarTeclados:o}}},P=(a("2716"),a("d959")),S=a.n(P);const F=S()(M,[["render",y],["__scopeId","data-v-3735fc7e"]]);var U=F,H={name:"MenuTecnico",components:{MenuTecnicoComponent:U}};const J=S()(H,[["render",c]]);e["default"]=J},"4c42":function(t,e,a){}}]);
//# sourceMappingURL=chunk-d434c43a.498f89ed.js.map