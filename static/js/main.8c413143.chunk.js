(this.webpackJsonpperview=this.webpackJsonpperview||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var o=n(6),r=n.n(o),i=n(10),a=n.n(i),c=(n(19),n(11)),s=n(0),l=n(1),u=n(2),p=function(){function Vector2(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(s.a)(this,Vector2),this.x=void 0,this.y=void 0,this.x=e,this.y=t}return Object(u.a)(Vector2,[{key:"set",value:function set(e,t){return this.x=e,this.y=t,this}},{key:"copy",value:function copy(e){return this.x=e.x,this.y=e.y,this}},{key:"clone",value:function clone(){return new Vector2(this.x,this.y)}}]),Vector2}(),v=p,f=Object(l.g)({name:"Vector2",default:new p,copy:l.f,clone:l.e}),m=n(3),d=n(4),h=function(e){Object(d.a)(Circle,e);var t=Object(m.a)(Circle);function Circle(){var e;Object(s.a)(this,Circle);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).color="#000000",e.radius=0,e.position=new v,e}return Circle}(l.a);h.schema={color:{type:l.c.String},radius:{type:l.c.Number},position:{type:f}};var y=h,g=function(e){Object(d.a)(Moveable,e);var t=Object(m.a)(Moveable);function Moveable(){var e;Object(s.a)(this,Moveable);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).hasDestination=!1,e.destination=new v,e.speed=0,e}return Moveable}(l.a);g.schema={hasDestination:{type:l.c.Boolean},destination:{type:f},speed:{type:l.c.Number}};var b=g,w=function(e){Object(d.a)(RectangleSelection,e);var t=Object(m.a)(RectangleSelection);function RectangleSelection(){var e;Object(s.a)(this,RectangleSelection);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).startPosition=new v,e.endPosition=new v,e}return RectangleSelection}(l.a);w.schema={startPosition:{type:f},endPosition:{type:f}};var C=w,j=function(e){Object(d.a)(Selectable,e);var t=Object(m.a)(Selectable);function Selectable(){var e;Object(s.a)(this,Selectable);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).selected=!1,e}return Selectable}(l.a);j.schema={selected:{type:l.c.Boolean}};var S=j,x=function(e){Object(d.a)(Team,e);var t=Object(m.a)(Team);function Team(){var e;Object(s.a)(this,Team);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).name="unknown",e}return Team}(l.a);x.schema={name:{type:l.c.String}};var M=x,O=n(23),k=function(e){Object(d.a)(Attack,e);var t=Object(m.a)(Attack);function Attack(){var e;Object(s.a)(this,Attack);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).projectileColor="#000000",e.projectileSpeed=0,e.projectileLifetime=0,e.minimumRefactoryPeriod=0,e.lastAttack=0,e}return Attack}(l.a);k.schema={projectileColor:{type:l.c.String},projectileSpeed:{type:l.c.Number},projectileLifetime:{type:l.c.Number},minimumRefactoryPeriod:{type:l.c.Number},lastAttack:{type:l.c.Number}};var A=k,R=function unitVector(e){var t=e.x,n=e.y,o=Math.sqrt(t*t+n*n);return{x:t/o,y:n/o}},E=function distanceBetween(e,t){var n=e.x-t.x,o=e.y-t.y;return Math.sqrt(n*n+o*o)},q=function(e){Object(d.a)(Attacker,e);var t=Object(m.a)(Attacker);function Attacker(){var e;Object(s.a)(this,Attacker);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).closestTarget=function(t){var n=t.getComponent(y).position,o=t.getComponent(M),r=e.queries.targets.results.filter((function(e){return o.name!==e.getComponent(M).name}));return O.a((function(e){var t=e.getComponent(y).position;return E(n,t)}),r)[0]},e.attackTarget=function(t,n,o){var r=n.getMutableComponent(A);r.lastAttack=t;var i=n.getComponent(y),a=i.radius,c=i.position,s=o.getComponent(y).position,l=R({x:s.x-c.x,y:s.y-c.y}),u=new v(c.x+l.x*(a+3),c.y+l.y*(a+3));e.world.createEntity().addComponent(y,{color:r.projectileColor,radius:2,position:u}).addComponent(b,{speed:r.projectileSpeed,hasDestination:!0,destination:s})},e}return Object(u.a)(Attacker,[{key:"execute",value:function execute(e,t){var n=this;this.queries.attackers.results.forEach((function(e){var o=e.getComponent(A);if(!(t<o.lastAttack+o.minimumRefactoryPeriod)){var r=n.closestTarget(e);r&&n.attackTarget(t,e,r)}}))}}]),Attacker}(l.b);q.queries={attackers:{components:[A,y,M]},targets:{components:[y,M]}};var D=q,P=function positionsAreClose(e,t,n){return E(e,t)<=n},T=function(e){Object(d.a)(Mover,e);var t=Object(m.a)(Mover);function Mover(){var e;Object(s.a)(this,Mover);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onMouseDown=function(t){if(2===t.button){var n=t.clientX,o=t.clientY;e.selected().forEach((function(e){var t=e.getMutableComponent(b);t.hasDestination=!0,t.destination.set(n,o)}))}},e.selected=function(){return e.queries.selectables.results.filter((function(e){return e.getComponent(S).selected}))},e.withDestination=function(){return e.queries.moveables.results.filter((function(e){return e.getComponent(b).hasDestination}))},e}return Object(u.a)(Mover,[{key:"execute",value:function execute(e,t){this.withDestination().forEach((function(t){var n=t.getMutableComponent(y).position,o=t.getComponent(b),r=o.destination,i=o.speed,a=R({x:r.x-n.x,y:r.y-n.y}),c=a.x*(e*i/1e3),s=a.y*(e*i/1e3);n.x+=c,n.y+=s,P(n,r,1)&&(t.getMutableComponent(b).hasDestination=!1)}))}}]),Mover}(l.b);T.queries={moveables:{components:[b,y]},selectables:{components:[b,S]}};var F=T,N=function(e){Object(d.a)(RectangleSelector,e);var t=Object(m.a)(RectangleSelector);function RectangleSelector(){var e;Object(s.a)(this,RectangleSelector);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onMouseDown=function(t){if(0===t.button){var n=new v(t.clientX,t.clientY),o=new v(t.clientX,t.clientY);e.world.createEntity().addComponent(C,{startPosition:n,endPosition:o})}},e.onMouseMove=function(t){var n=t.clientX,o=t.clientY;e.queries.rectangleSelections.results.forEach((function(e){var t=e.getComponent(C).endPosition;n!==t.x&&o!==t.y&&e.getMutableComponent(C).endPosition.set(n,o)}))},e.onMouseUp=function(t){0===t.button&&e.queries.rectangleSelections.results.forEach((function(t){var n=t.getComponent(C),o=n.startPosition,r=n.endPosition;t.remove(),P(o,r,5)||e.queries.circles.results.forEach((function(e){var t=e.getMutableComponent(S),n=e.getComponent(y).position,i=n.x,a=n.y,c=o.x<i&&i<r.x||r.x<i&&i<o.x,s=o.y<a&&a<r.y||r.y<a&&a<o.y;t.selected=c&&s}))}))},e}return Object(u.a)(RectangleSelector,[{key:"execute",value:function execute(e,t){}}]),RectangleSelector}(l.b);N.queries={circles:{components:[S,y]},rectangleSelections:{components:[C]}};var V=N,U=function(e){Object(d.a)(Renderer,e);var t=Object(m.a)(Renderer);function Renderer(e,n){var o,r=n.canvas,i=n.colors,a=n.priority;return Object(s.a)(this,Renderer),(o=t.call(this,e,{priority:a})).canvas=void 0,o.colors=void 0,o.ctx=void 0,o.clear=function(){o.ctx&&(o.ctx.fillStyle=o.colors.background,o.ctx.fillRect(0,0,o.canvas.width,o.canvas.height))},o.drawCircle=function(e){var t,n;if(o.ctx){var r=o.ctx,i=e.getComponent(y),a=i.color,c=i.radius,s=i.position,l=null!==(t=null===(n=e.getComponent(S))||void 0===n?void 0:n.selected)&&void 0!==t&&t,u=s.x,p=s.y;r.fillStyle=a,r.beginPath(),r.arc(u,p,c,0,2*Math.PI,!1),r.fill(),r.lineWidth=2,r.strokeStyle="#222",r.stroke(),l&&(r.beginPath(),r.arc(u,p,c+2,0,2*Math.PI,!1),r.lineWidth=2,r.strokeStyle=o.colors.selection,r.stroke())}},o.drawRectangleSelection=function(e){if(o.ctx){var t=o.ctx,n=e.getComponent(C),r=n.startPosition,i=n.endPosition;if(!P(r,i,5)){var a=r.x,c=r.y,s=i.x-a,l=i.y-c;t.lineWidth=2,t.strokeStyle=o.colors.selection,t.strokeRect(a,c,s,l)}}},o.canvas=r,o.colors=i,o.ctx=o.canvas.getContext("2d"),o}return Object(u.a)(Renderer,[{key:"execute",value:function execute(e,t){this.clear(),this.queries.circles.results.forEach(this.drawCircle),this.queries.rectangleSelections.results.forEach(this.drawRectangleSelection)}}]),Renderer}(l.b);U.queries={circles:{components:[y]},rectangleSelections:{components:[C]}};var W=U,B=function(e){Object(d.a)(Selector,e);var t=Object(m.a)(Selector);function Selector(){var e;Object(s.a)(this,Selector);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onMouseDown=function(t){if(0===t.button){var n={x:t.clientX,y:t.clientY};e.selectCircles(n)}},e.selectCircles=function(t){var n=!1;e.queries.circles.results.forEach((function(e){var o=e.getComponent(y),r=o.position,i=o.radius;P(t,r,i)&&(e.getMutableComponent(S).selected=!0,n=!0)})),n||e.deselectAllCircles()},e.deselectAllCircles=function(){e.queries.circles.results.forEach((function(e){e.getComponent(S).selected&&(e.getMutableComponent(S).selected=!1)}))},e}return Object(u.a)(Selector,[{key:"execute",value:function execute(e,t){}}]),Selector}(l.b);B.queries={circles:{components:[S,y]}};var I=B,L=function(e){Object(d.a)(Stopper,e);var t=Object(m.a)(Stopper);function Stopper(){var e;Object(s.a)(this,Stopper);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).stopIfColliding=function(t){var n=t.getComponent(y),o=n.radius,r=n.position;e.queries.moveables.results.forEach((function(e){if(t!==e){var n=e.getComponent(y),i=o+n.radius;P(r,n.position,i)&&(t.getMutableComponent(b).hasDestination=!1)}}))},e}return Object(u.a)(Stopper,[{key:"execute",value:function execute(e,t){this.queries.moveables.results.forEach(this.stopIfColliding)}}]),Stopper}(l.b);L.queries={moveables:{components:[b,y]}};var X=L,Y={friendly:"#59cd90",enemy:"#c73e1d",projectile:"#ffe74c",background:"#545e75",selection:"#57b8ff"},z=function Game(e){var t=this,n=e.canvas;Object(s.a)(this,Game),this.world=void 0,this.canvas=void 0,this.lastTime=void 0,this.animationFrameRequest=void 0,this.start=function(){for(var e=0;e<10;e++)t.createFriendly(50+50*e,500),t.createEnemy(50+50*e,100);t.run()},this.createEnemy=function(e,n){var o=Y.enemy,r=new v(e,n);t.world.createEntity().addComponent(y,{radius:10,color:o,position:r}).addComponent(b).addComponent(M,{name:"Enemy"})},this.createFriendly=function(e,n){var o=Y.friendly,r=new v(e,n),i=Y.projectile;t.world.createEntity().addComponent(A,{projectileColor:i,projectileSpeed:500,projectileLifetime:5e3,minimumRefactoryPeriod:1e3}).addComponent(y,{radius:10,color:o,position:r}).addComponent(b,{speed:100}).addComponent(S).addComponent(M,{name:"Friendly"})},this.stop=function(){t.animationFrameRequest&&cancelAnimationFrame(t.animationFrameRequest)},this.onMouseDown=function(e){var n=t.world.getSystem(F),o=t.world.getSystem(I),r=t.world.getSystem(V);n.onMouseDown(e),o.onMouseDown(e),r.onMouseDown(e)},this.onMouseMove=function(e){t.world.getSystem(V).onMouseMove(e)},this.onMouseUp=function(e){t.world.getSystem(V).onMouseUp(e)},this.run=function(){var e=performance.now(),n=e-t.lastTime;t.world.execute(n,e),t.lastTime=e,t.animationFrameRequest=requestAnimationFrame(t.run)},this.canvas=n,this.lastTime=performance.now(),this.animationFrameRequest=null,this.world=(new l.d).registerSystem(D).registerSystem(F).registerSystem(V).registerSystem(W,{canvas:n,colors:Y}).registerSystem(I).registerSystem(X).registerComponent(A).registerComponent(y).registerComponent(b).registerComponent(C).registerComponent(S).registerComponent(M)},G=(n(20),function App(){var e=r.a.useState(null),t=Object(c.a)(e,2),n=t[0],o=t[1],i=r.a.useRef(null);r.a.useEffect((function(){if(n)return i.current=new z({canvas:n}),i.current.start(),function(){var e;null===(e=i.current)||void 0===e||e.stop(),i.current=null}}),[n]),r.a.useEffect((function(){var e=function handleResize(){n&&(n.width=window.innerWidth,n.height=window.innerHeight)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n]);return r.a.createElement("div",{className:"App"},r.a.createElement("canvas",{ref:o,onMouseDown:function onMouseDown(e){var t;e.preventDefault(),e.stopPropagation(),null===(t=i.current)||void 0===t||t.onMouseDown(e)},onMouseMove:function onMouseMove(e){var t;null===(t=i.current)||void 0===t||t.onMouseMove(e)},onMouseUp:function onMouseUp(e){var t;null===(t=i.current)||void 0===t||t.onMouseUp(e)},onContextMenu:function onContextMenu(e){return e.preventDefault()}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}()}},[[12,1,2]]]);
//# sourceMappingURL=main.8c413143.chunk.js.map