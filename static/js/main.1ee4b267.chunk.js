(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){e.exports=a.p+"static/media/ava0.daa048b9.jpg"},165:function(e,t,a){e.exports=a.p+"static/media/ava1.5d3ba618.jpg"},166:function(e,t,a){e.exports=a.p+"static/media/ava2.8d555391.jpg"},167:function(e,t,a){e.exports=a.p+"static/media/ava3.673d5472.png"},178:function(e,t,a){e.exports=a(330)},325:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),i=a.n(r),c=a(50),o=a(51),s=a(57),d=a(52),m=a(58),h=a(159),u=a.n(h),v=a(35),p=a(21),f=a(82),g=a.n(f),E=a(11),w=a.n(E),y=a(339),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.events,a=e.date,n=e.view,r=e.children,i=e.onViewChange,c=e.onEventDrop,o=e.onEventResize;return l.a.createElement("div",{className:"main-calendar-container"},l.a.createElement("div",{className:"header"},r,l.a.createElement("div",{className:"current-date"},w()(a).format("MMMM D, YYYY")),l.a.createElement(y.a.Group,{size:"small",value:n,onChange:function(e){var t=e.target;return i(t.value)}},l.a.createElement(y.a.Button,{size:"small",value:"agendaDay"},"day"),l.a.createElement(y.a.Button,{size:"small",value:"agendaWeek"},"week"),l.a.createElement(y.a.Button,{size:"small",value:"month"},"month"))),l.a.createElement(g.a,{id:"calendar-view",header:{left:"",center:"title",right:"agendaDay,agendaWeek,month"},defaultDate:a,editable:!0,eventLimit:!0,events:t,defaultView:n,eventDrop:c,eventResize:o}))}}]),t}(l.a.Component),M=a(161),N=a.n(M),C=(a(247),function(e){var t=e.events,a=e.date;return l.a.createElement(g.a,{id:"calendar-list-view",header:{left:"",center:"title",right:""},defaultDate:a,events:t,defaultView:"list",noEventsMessage:""})}),z=function(e){var t=e.events,a=e.date,n=e.onDayChange,r=e.onMonthChange;return l.a.createElement("aside",{className:"right-aside"},l.a.createElement("div",{className:"current-date"},w()(a).format("dddd \u25cf D MMMM")),l.a.createElement(N.a,{selectedDays:new Date(a),todayButton:"Go to Today",onTodayButtonClick:n,onDayClick:n,onMonthChange:r}),l.a.createElement(C,{events:t,date:a}))},x=a(175),O=a(7),k=a.n(O),V=a(162),D=a.n(V),S=a(163),j=a.n(S),A=new D.a({id:"sprite",use:"sprite-usage",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="sprite"><defs></defs><symbol id="sprite_bell" viewBox="0 0 510 510"><path d="M255 510c28.05 0 51-22.95 51-51H204c0 28.05 22.95 51 51 51zm165.75-153V216.75c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25 17.85 275.4 0 255 0s-38.25 17.85-38.25 38.25V56.1c-73.95 17.85-127.5 81.6-127.5 160.65V357l-51 51v25.5h433.5V408l-51-51zm-51 25.5h-229.5V216.75C140.25 153 191.25 102 255 102s114.75 51 114.75 114.75V382.5z" /></symbol><symbol id="sprite_calendar" viewBox="0 0 512 512"><path d="M452 40h-24V0h-40v40H124V0H84v40H60C26.92 40 0 66.92 0 100v352c0 33.08 26.92 60 60 60h392c33.08 0 60-26.92 60-60V100c0-33.08-26.92-60-60-60zm20 412c0 11.03-8.97 20-20 20H60c-11.03 0-20-8.97-20-20V188h432v264zm0-304H40v-48c0-11.03 8.97-20 20-20h24v40h40V80h264v40h40V80h24c11.03 0 20 8.97 20 20v48z" /><rect width="40" height="40" x="76" y="230" /><rect width="40" height="40" x="156" y="230" /><rect width="40" height="40" x="236" y="230" /><rect width="40" height="40" x="316" y="230" /><rect width="40" height="40" x="396" y="230" /><rect width="40" height="40" x="76" y="310" /><rect width="40" height="40" x="156" y="310" /><rect width="40" height="40" x="236" y="310" /><rect width="40" height="40" x="316" y="310" /><rect width="40" height="40" x="76" y="390" /><rect width="40" height="40" x="156" y="390" /><rect width="40" height="40" x="236" y="390" /><rect width="40" height="40" x="316" y="390" /><rect width="40" height="40" x="396" y="310" /></symbol><symbol id="sprite_document" viewBox="0 0 512 512"><path d="M352.46 220a20 20 0 0 0-20-20h-206a20 20 0 1 0 0 40h206a20 20 0 0 0 20-20zm-226 60a20 20 0 1 0 0 40h125.11a20 20 0 1 0 0-40H126.46z" /><path d="M173.46 472h-66.89c-22.06 0-40-17.94-40-40V80c0-22.06 17.94-40 40-40h245.89c22.06 0 40 17.94 40 40v123a20 20 0 1 0 40 0V80c0-44.11-35.89-80-80-80H106.57c-44.11 0-80 35.89-80 80v352c0 44.11 35.89 80 80 80h66.89a20 20 0 1 0 0-40z" /><path d="M467.88 289.57a60.06 60.06 0 0 0-84.83-.01l-109.8 109.56a20 20 0 0 0-5.02 8.34l-23.9 78.73a20 20 0 0 0 24.47 25.08l80.72-22.36a20 20 0 0 0 8.8-5.12l109.57-109.36a60.07 60.07 0 0 0 0-84.86zm-134.1 162.2l-40.62 11.25 11.89-39.13 74.09-73.93 28.29 28.3-73.65 73.5zm105.84-105.64l-3.88 3.87-28.29-28.29 3.87-3.85c7.8-7.8 20.48-7.8 28.28 0 7.8 7.8 7.8 20.48.01 28.27zM332.46 120h-206a20 20 0 1 0 0 40h206a20 20 0 1 0 0-40z" /></symbol><symbol id="sprite_homework" viewBox="0 0 19.12 19.12"><path d="M16.98 0H2.14c-.4 0-.74.33-.74.74v17.64c0 .41.33.74.74.74h14.84c.4 0 .74-.33.74-.74V.74a.74.74 0 0 0-.74-.74zm-.73 17.65H2.87V1.47h13.37v16.18z" /><path d="M7.64 4.67h-2.7v2.7h2.7v-2.7zm-.33.9l-1.2 1.19a.08.08 0 0 1-.1 0l-.74-.73a.09.09 0 0 1 0-.12l.18-.17a.08.08 0 0 1 .11 0l.5.5.96-.97a.08.08 0 0 1 .12 0l.17.18c.04.03.04.08 0 .11z" /><rect width="6.16" height="1.48" x="8.2" y="5.27" /><path d="M7.64 8.18h-2.7v2.7h2.7v-2.7zm-.33.9l-1.2 1.19a.08.08 0 0 1-.1 0l-.74-.73a.08.08 0 0 1 0-.12l.18-.17a.08.08 0 0 1 .11 0l.5.5.96-.97a.08.08 0 0 1 .12 0l.17.18c.04.03.04.08 0 .11z" /><rect width="6.16" height="1.48" x="8.2" y="8.79" /><rect width="2.69" height="2.69" x="4.95" y="11.77" /><rect width="6.16" height="1.48" x="8.2" y="12.38" /></symbol><symbol id="sprite_setup" viewBox="0 0 480.3 480.3"><path d="M254.15 234.1V13.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v220.6c-31.3 6.3-55 34-55 67.2s23.7 60.9 55 67.2v98.2c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-98.2c31.3-6.3 55-34 55-67.2 0-33.1-23.6-60.9-55-67.2zm-13.5 108.7c-22.9 0-41.5-18.6-41.5-41.5s18.6-41.5 41.5-41.5 41.5 18.6 41.5 41.5-18.6 41.5-41.5 41.5zM88.85 120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v107.4c-31.3 6.3-55 34-55 67.2s23.7 60.9 55 67.2v211.4c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V255.2c31.3-6.3 55-34 55-67.2s-23.7-60.8-55-67.1zm-13.5 108.7c-22.9 0-41.5-18.6-41.5-41.5s18.6-41.5 41.5-41.5 41.5 18.6 41.5 41.5-18.7 41.5-41.5 41.5zm343.1-108.7V13.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v107.4c-31.3 6.3-55 34-55 67.2s23.7 60.9 55 67.2v211.5c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V255.2c31.3-6.3 55-34 55-67.2s-23.6-60.8-55-67.1zm-13.5 108.7c-22.9 0-41.5-18.6-41.5-41.5s18.6-41.5 41.5-41.5 41.5 18.6 41.5 41.5-18.6 41.5-41.5 41.5z" /></symbol><symbol id="sprite_target" viewBox="0 0 512 512"><path d="M507.6 486.4l-60.29-60.3C489.12 379.19 512 319.36 512 256a254.2 254.2 0 0 0-40.2-137.77l35.8-35.82a15 15 0 0 0-5.86-24.83l-35.48-11.83-11.83-35.5a15.02 15.02 0 0 0-24.84-5.86l-35.81 35.82A254.24 254.24 0 0 0 256 0C187.62 0 123.33 26.63 74.98 74.98 26.63 123.33 0 187.62 0 256c0 63.36 22.88 123.19 64.7 170.1L4.4 486.4a15 15 0 1 0 21.2 21.2l60.3-60.3C132.81 489.14 192.64 512 256 512s123.19-22.88 170.1-64.7l60.3 60.3A14.95 14.95 0 0 0 497 512a15 15 0 0 0 10.6-25.6zM433.65 42.76l6.53 19.57a15 15 0 0 0 9.48 9.5l19.58 6.52-33.09 33.09-26.69-8.9-8.9-26.7zM321.34 256A65.41 65.41 0 0 1 256 321.33 65.4 65.4 0 0 1 190.67 256 65.4 65.4 0 0 1 256 190.67a64.91 64.91 0 0 1 34.34 9.78l-44.95 44.94a15 15 0 1 0 21.22 21.22l44.94-44.95a64.92 64.92 0 0 1 9.79 34.34zm-9.4-77.15A94.83 94.83 0 0 0 256 160.67c-52.57 0-95.33 42.76-95.33 95.33s42.76 95.33 95.33 95.33 95.34-42.76 95.34-95.33a94.81 94.81 0 0 0-18.2-55.94l35.87-35.86a144.98 144.98 0 0 1 32.66 91.8c0 80.32-65.35 145.67-145.67 145.67S110.34 336.32 110.34 256 175.68 110.33 256 110.33A145 145 0 0 1 347.8 143zM30 256C30 131.38 131.38 30 256 30c41.3 0 81.06 11.02 116.03 32.01a15 15 0 0 0-2.87 14.54l11.27 33.8-11.34 11.35A174.88 174.88 0 0 0 256 80.33c-96.86 0-175.66 78.8-175.66 175.67 0 96.86 78.8 175.67 175.66 175.67S431.67 352.87 431.67 256c0-43.04-15.57-82.51-41.37-113.1l11.34-11.33 33.81 11.27a15 15 0 0 0 14.53-2.88A224.45 224.45 0 0 1 482 256c0 124.62-101.38 226-226 226S30 380.62 30 256zm0 0" /></symbol></symbol>'}),B=(j.a.add(A),function(e){var t=e.className,a=e.id,n=Object(x.a)(e,["className","id"]);return l.a.createElement("svg",Object.assign({},n,{className:k()("svg-icon",a,t)}),l.a.createElement("use",{xlinkHref:"#sprite_".concat(a)}))}),T=a(164),Y=a.n(T),H=a(165),R=a.n(H),W=a(166),F=a.n(W),P=a(167),_=a.n(P),L=[Y.a,R.a,F.a,_.a],U=L[Math.floor(Math.random()*L.length)],q=function(){return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:U,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"avatar"}),l.a.createElement("div",{className:"fullname"},"\u0410\u043d\u0434\u0440\u0435\u0439 \u0412\u0438\u043a\u0442\u043e\u0440\u043e\u0432\u0438\u0447"),l.a.createElement("div",{className:"badge"},"premium")),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"title"},"Menu"),l.a.createElement("ul",{className:"menu"},l.a.createElement("li",{className:"menu-item active"},l.a.createElement(B,{id:"calendar",className:"menu-icon"}),l.a.createElement("span",{className:"menu-title"},"Calendar")),l.a.createElement("li",{className:"menu-item"},l.a.createElement(B,{id:"document",className:"menu-icon"}),l.a.createElement("span",{className:"menu-title"},"Notes")),l.a.createElement("li",{className:"menu-item"},l.a.createElement(B,{id:"bell",className:"menu-icon"}),l.a.createElement("span",{className:"menu-title"},"Alerts")),l.a.createElement("li",{className:"menu-item"},l.a.createElement(B,{id:"homework",className:"menu-icon"}),l.a.createElement("span",{className:"menu-title"},"Tasks")),l.a.createElement("li",{className:"menu-item"},l.a.createElement(B,{id:"target",className:"menu-icon"}),l.a.createElement("span",{className:"menu-title"},"Purposes")))),l.a.createElement("div",{className:"footer"},l.a.createElement("ul",{className:"menu"},l.a.createElement("li",{className:"menu-item"},l.a.createElement(B,{id:"setup",className:"menu-icon"}),l.a.createElement("span",{className:"menu-title"},"Settings")))))},G=a(334),I=a(337),J=a(338),$=a(332),K=a(333),Q=a(335),X=a(331),Z=a(336),ee=function(e){var t=e.color;return l.a.createElement("span",{className:k()("colored-dot",t)})};ee.defaultProps={color:"blue"};var te=ee,ae=G.a.Item,ne=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(a.props.onSubmit(t),a.props.form.resetFields())})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.props.form.resetFields()}},{key:"render",value:function(){var e=this.props,t=e.isOpen,a=e.onClose,n=e.onSubmit,r=this.props.form.getFieldDecorator;return l.a.createElement(I.a,{visible:t,title:"Add event",onOk:n,onCancel:a,footer:!1},l.a.createElement(G.a,{onSubmit:this.handleSubmit,className:"creation-form"},l.a.createElement(ae,null,r("title",{rules:[{required:!0,message:"Please input title!"}]})(l.a.createElement(J.a,{placeholder:"Title"}))),l.a.createElement(ae,null,l.a.createElement($.a,{gutter:8},l.a.createElement(K.a,{span:14},r("startDate",{initialValue:w()(),rules:[{required:!0,message:"Please input start date!"}]})(l.a.createElement(Q.a,{style:{width:"100%"},placeholder:"Start date"}))),l.a.createElement(K.a,{span:10},r("startTime",{})(l.a.createElement(X.a,{style:{width:"100%"},placeholder:"Start time"}))))),l.a.createElement(ae,null,l.a.createElement($.a,{gutter:8},l.a.createElement(K.a,{span:14},r("endDate",{})(l.a.createElement(Q.a,{style:{width:"100%"},placeholder:"End date"}))),l.a.createElement(K.a,{span:10},r("endTime",{})(l.a.createElement(X.a,{style:{width:"100%"},placeholder:"End time"}))))),l.a.createElement(ae,null,r("color",{initialValue:"blue"})(l.a.createElement(Z.a,{style:{width:"100%"}},l.a.createElement(Z.a.Option,{value:"blue"},l.a.createElement(te,{color:"blue"}),"Blue"),l.a.createElement(Z.a.Option,{value:"red"},l.a.createElement(te,{color:"red"}),"Red"),l.a.createElement(Z.a.Option,{value:"yellow"},l.a.createElement(te,{color:"yellow"}),"Yellow")))),l.a.createElement(ae,{className:"creation-form-footer"},l.a.createElement(v.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Create"))))}}]),t}(n.Component),le=G.a.create()(ne),re=[{id:1,title:"All Day Event",start:"2018-12-01"},{id:2,title:"Long Event",start:"2018-12-07",end:"2018-12-10"},{id:3,title:"Repeating Event",start:"2018-12-09T16:00:00"},{id:4,title:"Repeating Event",start:"2018-12-16T16:00:00"},{id:5,title:"Conference",start:"2018-12-11",end:"2018-12-13"},{id:6,title:"Meeting",start:"2018-12-12T10:30:00",end:"2018-12-12T12:30:00"},{id:7,title:"Birthday Party",start:"2018-12-13T07:00:00"},{id:8,title:"Click for Google",url:"http://google.com/",start:"2018-12-28"}],ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={date:w()().format(),view:"month",isModalOpen:!1},a.handleViewChange=function(e){return a.setState({view:e})},a.handleDayChange=function(e){return a.setState({date:w()(e).format()})},a.handleEventDrop=function(e,t){var a=e.id;re.forEach(function(e){if(e.id===a){if(e.start){var n=e.start.length;e.start=w()(e.start).add(t).format().substring(0,n)}if(e.end){var l=e.end.length;e.end=w()(e.end).add(t).format().substring(0,l)}}})},a.handleEventResize=function(e,t){var a=e.id;re.forEach(function(e){if(e.id===a)if(e.end){var n=e.end.length;e.end=w()(e.end).add(t).format().substring(0,n)}else{var l=e.start.length;e.end=w()(e.start).add(t).add(1,"d").format().substring(0,l)}})},a.handleMonthChange=function(e){return a.setState(function(t){var a=w()(e).month();return w()(t.date).month()!==a?{date:e}:{date:w()(t.date).month(a).format()}})},a.handleModalClose=function(){return a.setState({isModalOpen:!1})},a.handleModalOpen=function(){return a.setState({isModalOpen:!0})},a.handleModalSubmit=function(e){var t=e.title,n=e.startDate,l=e.startTime,r=e.endDate,i=e.endTime,c=e.color,o={id:u.a.uniqueId("test"),title:t};switch(o.start=l?n.add(l).format():n.format("YYYY-MM-DD"),r&&(o.end=i?r.add(i).format():r.format("YYYY-MM-DD")),c){case"red":o.color="#ffecec",o.textColor="#230F0F";break;case"yellow":o.color="#fff3e4",o.textColor="#23110F";break;default:o.color="#f0f5ff",o.textColor="#0B1123"}console.log(o),re.push(o),a.setState({isModalOpen:!1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.date,a=e.view,n=e.isModalOpen;return l.a.createElement("div",{className:"App"},l.a.createElement(q,null),l.a.createElement(b,{events:re,date:t,view:a,onViewChange:this.handleViewChange,onEventDrop:this.handleEventDrop,onEventResize:this.handleEventResize},l.a.createElement(v.a,{shape:"circle",onClick:this.handleModalOpen},l.a.createElement(p.a,{type:"plus"}))),l.a.createElement(z,{events:re,date:t,onDayChange:this.handleDayChange,onMonthChange:this.handleMonthChange}),l.a.createElement(le,{isOpen:n,onClose:this.handleModalClose,onSubmit:this.handleModalSubmit}))}}]),t}(n.Component),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(325),a(328);i.a.render(l.a.createElement(ie,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");ce?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):oe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):oe(t,e)})}}()}},[[178,2,1]]]);
//# sourceMappingURL=main.1ee4b267.chunk.js.map