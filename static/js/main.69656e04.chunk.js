(this.webpackJsonpperview=this.webpackJsonpperview||[]).push([[0],{16:function(e,t,n){e.exports=n(25)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(6),r=n.n(o),i=n(13),a=n.n(i),c=(n(23),n(14)),s=n(0),l=n(1),u=n(4),p=function(){function Vector2(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(s.a)(this,Vector2),this.x=void 0,this.y=void 0,this.x=e,this.y=t}return Object(u.a)(Vector2,[{key:"set",value:function set(e,t){return this.x=e,this.y=t,this}},{key:"copy",value:function copy(e){return this.x=e.x,this.y=e.y,this}},{key:"clone",value:function clone(){return new Vector2(this.x,this.y)}}]),Vector2}(),f=p,d=Object(l.h)({name:"Vector2",default:new p,copy:l.g,clone:l.f}),m=n(2),v=n(3),h=function(e){Object(v.a)(Attack,e);var t=Object(m.a)(Attack);function Attack(){var e;Object(s.a)(this,Attack);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).projectileColor="#000000",e.projectileSpeed=0,e.projectileLifetime=0,e.minimumRefactoryPeriod=0,e.lastAttack=0,e}return Attack}(l.a);h.schema={projectileColor:{type:l.d.String},projectileSpeed:{type:l.d.Number},projectileLifetime:{type:l.d.Number},minimumRefactoryPeriod:{type:l.d.Number},lastAttack:{type:l.d.Number}};var y=h,b=function(e){Object(v.a)(Circle,e);var t=Object(m.a)(Circle);function Circle(){var e;Object(s.a)(this,Circle);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).color="#000000",e.radius=0,e.position=new f,e}return Circle}(l.a);b.schema={color:{type:l.d.String},radius:{type:l.d.Number},position:{type:d}};var g=b,C=function(e){Object(v.a)(Collidable,e);var t=Object(m.a)(Collidable);function Collidable(){return Object(s.a)(this,Collidable),t.apply(this,arguments)}return Collidable}(l.c),w=function(e){Object(v.a)(Destination,e);var t=Object(m.a)(Destination);function Destination(){var e;Object(s.a)(this,Destination);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).position=new f,e}return Destination}(l.a);w.schema={position:{type:d}};var j=w,O=function(e){Object(v.a)(DestroyedOnImpact,e);var t=Object(m.a)(DestroyedOnImpact);function DestroyedOnImpact(){return Object(s.a)(this,DestroyedOnImpact),t.apply(this,arguments)}return DestroyedOnImpact}(l.c),S=function(e){Object(v.a)(Lifespan,e);var t=Object(m.a)(Lifespan);function Lifespan(){var e;Object(s.a)(this,Lifespan);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).ttl=0,e.createdAt=0,e}return Lifespan}(l.a);S.schema={ttl:{type:l.d.Number},createdAt:{type:l.d.Number}};var x=S,M=function(e){Object(v.a)(Moveable,e);var t=Object(m.a)(Moveable);function Moveable(){var e;Object(s.a)(this,Moveable);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).direction=new f,e.speed=0,e}return Moveable}(l.a);M.schema={direction:{type:d},speed:{type:l.d.Number}};var k=M,A=function(e){Object(v.a)(RectangleSelection,e);var t=Object(m.a)(RectangleSelection);function RectangleSelection(){var e;Object(s.a)(this,RectangleSelection);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).startPosition=new f,e.endPosition=new f,e}return RectangleSelection}(l.a);A.schema={startPosition:{type:d},endPosition:{type:d}};var E=A,R=function(e){Object(v.a)(Selectable,e);var t=Object(m.a)(Selectable);function Selectable(){var e;Object(s.a)(this,Selectable);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).selected=!1,e}return Selectable}(l.a);R.schema={selected:{type:l.d.Boolean}};var q=R,D=function(e){Object(v.a)(Team,e);var t=Object(m.a)(Team);function Team(){var e;Object(s.a)(this,Team);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).name="unknown",e}return Team}(l.a);D.schema={name:{type:l.d.String}};var P=D,L=n(26),T=function unitVector(e){var t=e.x,n=e.y,o=Math.sqrt(t*t+n*n);return new f(t/o,n/o)},I=function distanceBetween(e,t){var n=e.x-t.x,o=e.y-t.y;return Math.sqrt(n*n+o*o)},F=function(e){Object(v.a)(Attacker,e);var t=Object(m.a)(Attacker);function Attacker(){var e;Object(s.a)(this,Attacker);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).closestTarget=function(t){var n=t.getComponent(g).position,o=t.getComponent(P),r=e.queries.targets.results.filter((function(e){return o.name!==e.getComponent(P).name}));return L.a((function(e){var t=e.getComponent(g).position;return I(n,t)}),r)[0]},e.attackTarget=function(t,n,o){var r=n.getMutableComponent(y);r.lastAttack=t;var i=n.getComponent(g),a=i.radius,c=i.position,s=o.getComponent(g).position,l=T({x:s.x-c.x,y:s.y-c.y}),u=new f(c.x+l.x*(a+3),c.y+l.y*(a+3));e.world.createEntity().addComponent(g,{color:r.projectileColor,radius:2,position:u}).addComponent(O).addComponent(k,{speed:r.projectileSpeed,direction:l}).addComponent(x,{createdAt:t,ttl:r.projectileLifetime})},e}return Object(u.a)(Attacker,[{key:"execute",value:function execute(e,t){var n=this;this.queries.attackers.results.forEach((function(e){var o=e.getComponent(y);if(!(t<o.lastAttack+o.minimumRefactoryPeriod)){var r=n.closestTarget(e);r&&n.attackTarget(t,e,r)}}))}}]),Attacker}(l.b);F.queries={attackers:{components:[y,g,P]},targets:{components:[g,P]}};var N=F,V=function(e){Object(v.a)(Mover,e);var t=Object(m.a)(Mover);function Mover(){var e;Object(s.a)(this,Mover);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onMouseDown=function(t){if(2===t.button){var n=t.clientX,o=t.clientY;e.selected().forEach((function(e){var t=e.getComponent(g).position,r=T({x:n-t.x,y:o-t.y});e.addComponent(j,{position:new f(n,o)}),e.getMutableComponent(k).direction.set(r.x,r.y)}))}},e.selected=function(){return e.queries.selectables.results.filter((function(e){return e.getComponent(q).selected}))},e}return Object(u.a)(Mover,[{key:"execute",value:function execute(e,t){this.queries.moveables.results.forEach((function(t){var n=t.getMutableComponent(g).position,o=t.getComponent(k),r=o.direction,i=o.speed,a=r.x*(e*i/1e3),c=r.y*(e*i/1e3);n.x+=a,n.y+=c}))}}]),Mover}(l.b);V.queries={moveables:{components:[k,g]},selectables:{components:[k,q]}};var U=V,W=function positionsAreClose(e,t,n){return I(e,t)<=n},X=function(e){Object(v.a)(RectangleSelector,e);var t=Object(m.a)(RectangleSelector);function RectangleSelector(){var e;Object(s.a)(this,RectangleSelector);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onMouseDown=function(t){if(0===t.button){var n=new f(t.clientX,t.clientY),o=new f(t.clientX,t.clientY);e.world.createEntity().addComponent(E,{startPosition:n,endPosition:o})}},e.onMouseMove=function(t){var n=t.clientX,o=t.clientY;e.queries.rectangleSelections.results.forEach((function(e){var t=e.getComponent(E).endPosition;n!==t.x&&o!==t.y&&e.getMutableComponent(E).endPosition.set(n,o)}))},e.onMouseUp=function(t){0===t.button&&e.queries.rectangleSelections.results.forEach((function(t){var n=t.getComponent(E),o=n.startPosition,r=n.endPosition;t.remove(),W(o,r,5)||e.queries.circles.results.forEach((function(e){var t=e.getMutableComponent(q),n=e.getComponent(g).position,i=n.x,a=n.y,c=o.x<i&&i<r.x||r.x<i&&i<o.x,s=o.y<a&&a<r.y||r.y<a&&a<o.y;t.selected=c&&s}))}))},e}return Object(u.a)(RectangleSelector,[{key:"execute",value:function execute(e,t){}}]),RectangleSelector}(l.b);X.queries={circles:{components:[q,g]},rectangleSelections:{components:[E]}};var Y=X,B=function(e){Object(v.a)(Renderer,e);var t=Object(m.a)(Renderer);function Renderer(e,n){var o,r=n.canvas,i=n.colors,a=n.priority;return Object(s.a)(this,Renderer),(o=t.call(this,e,{priority:a})).canvas=void 0,o.colors=void 0,o.ctx=void 0,o.clear=function(){o.ctx&&(o.ctx.fillStyle=o.colors.background,o.ctx.fillRect(0,0,o.canvas.width,o.canvas.height))},o.drawCircle=function(e){var t,n;if(o.ctx){var r=o.ctx,i=e.getComponent(g),a=i.color,c=i.radius,s=i.position,l=null!==(t=null===(n=e.getComponent(q))||void 0===n?void 0:n.selected)&&void 0!==t&&t,u=s.x,p=s.y;r.fillStyle=a,r.beginPath(),r.arc(u,p,c,0,2*Math.PI,!1),r.fill(),r.lineWidth=2,r.strokeStyle="#222",r.stroke(),l&&(r.beginPath(),r.arc(u,p,c+2,0,2*Math.PI,!1),r.lineWidth=2,r.strokeStyle=o.colors.selection,r.stroke())}},o.drawRectangleSelection=function(e){if(o.ctx){var t=o.ctx,n=e.getComponent(E),r=n.startPosition,i=n.endPosition;if(!W(r,i,5)){var a=r.x,c=r.y,s=i.x-a,l=i.y-c;t.lineWidth=2,t.strokeStyle=o.colors.selection,t.strokeRect(a,c,s,l)}}},o.canvas=r,o.colors=i,o.ctx=o.canvas.getContext("2d"),o}return Object(u.a)(Renderer,[{key:"execute",value:function execute(e,t){this.clear(),this.queries.circles.results.forEach(this.drawCircle),this.queries.rectangleSelections.results.forEach(this.drawRectangleSelection)}}]),Renderer}(l.b);B.queries={circles:{components:[g]},rectangleSelections:{components:[E]}};var z=B,G=function(e){Object(v.a)(Selector,e);var t=Object(m.a)(Selector);function Selector(){var e;Object(s.a)(this,Selector);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onMouseDown=function(t){if(0===t.button){var n={x:t.clientX,y:t.clientY};e.selectCircles(n)}},e.selectCircles=function(t){var n=!1;e.queries.circles.results.forEach((function(e){var o=e.getComponent(g),r=o.position,i=o.radius;W(t,r,i)&&(e.getMutableComponent(q).selected=!0,n=!0)})),n||e.deselectAllCircles()},e.deselectAllCircles=function(){e.queries.circles.results.forEach((function(e){e.getComponent(q).selected&&(e.getMutableComponent(q).selected=!1)}))},e}return Object(u.a)(Selector,[{key:"execute",value:function execute(e,t){}}]),Selector}(l.b);G.queries={circles:{components:[q,g]}};var J=G,H=n(28),$=n(27),K=H.a((function(e,t){if(e===t)return!1;var n=e.getComponent(g),o=t.getComponent(g),r=n.radius+o.radius;return W(n.position,o.position,r)})),Q=function(e){Object(v.a)(Stopper,e);var t=Object(m.a)(Stopper);function Stopper(){var e;Object(s.a)(this,Stopper);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).stopIfAtDestination=function(e){var t=e.getComponent(g).position,n=e.getComponent(j).position;W(t,n,1)&&(e.getMutableComponent(k).speed=0,e.removeComponent(j))},e.stopIfColliding=function(t){var n=$.a(K(t),e.queries.collideables.results);n&&(t.getMutableComponent(k).speed=0),n&&t.hasComponent(O)&&t.remove()},e}return Object(u.a)(Stopper,[{key:"execute",value:function execute(e,t){this.queries.moveables.results.forEach(this.stopIfColliding),this.queries.withDestination.results.forEach(this.stopIfAtDestination)}}]),Stopper}(l.b);Q.queries={collideables:{components:[g,C]},moveables:{components:[g,k]},withDestination:{components:[g,j,k]}};var Z=Q,_=function(e){Object(v.a)(EnforceLifespan,e);var t=Object(m.a)(EnforceLifespan);function EnforceLifespan(){return Object(s.a)(this,EnforceLifespan),t.apply(this,arguments)}return Object(u.a)(EnforceLifespan,[{key:"execute",value:function execute(e,t){this.queries.withLifepan.results.forEach((function(e){var n=e.getComponent(x),o=n.ttl;n.createdAt+o<t&&e.remove()}))}}]),EnforceLifespan}(l.b);_.queries={withLifepan:{components:[x]}};var ee=_,te={friendly:"#59cd90",enemy:"#c73e1d",projectile:"#ffe74c",background:"#545e75",selection:"#57b8ff"},ne=function Game(e){var t=this,n=e.canvas;Object(s.a)(this,Game),this.world=void 0,this.canvas=void 0,this.lastTime=void 0,this.animationFrameRequest=void 0,this.start=function(){for(var e=0;e<10;e++)t.createFriendly(50+50*e,500),t.createEnemy(50+50*e,100);t.run()},this.createEnemy=function(e,n){var o=te.enemy,r=new f(e,n),i=te.projectile;t.world.createEntity().addComponent(y,{projectileColor:i,projectileSpeed:200,projectileLifetime:5e3,minimumRefactoryPeriod:500}).addComponent(g,{radius:10,color:o,position:r}).addComponent(C).addComponent(P,{name:"Enemy"})},this.createFriendly=function(e,n){var o=te.friendly,r=new f(e,n),i=te.projectile;t.world.createEntity().addComponent(y,{projectileColor:i,projectileSpeed:200,projectileLifetime:5e3,minimumRefactoryPeriod:500}).addComponent(g,{radius:10,color:o,position:r}).addComponent(C).addComponent(k,{speed:100}).addComponent(q).addComponent(P,{name:"Friendly"})},this.stop=function(){t.animationFrameRequest&&cancelAnimationFrame(t.animationFrameRequest)},this.onMouseDown=function(e){var n=t.world.getSystem(U),o=t.world.getSystem(J),r=t.world.getSystem(Y);n.onMouseDown(e),o.onMouseDown(e),r.onMouseDown(e)},this.onMouseMove=function(e){t.world.getSystem(Y).onMouseMove(e)},this.onMouseUp=function(e){t.world.getSystem(Y).onMouseUp(e)},this.run=function(){var e=performance.now(),n=e-t.lastTime;t.world.execute(n,e),t.lastTime=e,t.animationFrameRequest=requestAnimationFrame(t.run)},this.canvas=n,this.lastTime=performance.now(),this.animationFrameRequest=null,this.world=(new l.e).registerSystem(N).registerSystem(ee).registerSystem(U).registerSystem(Y).registerSystem(z,{canvas:n,colors:te}).registerSystem(J).registerSystem(Z).registerComponent(y).registerComponent(g).registerComponent(C).registerComponent(j).registerComponent(O).registerComponent(x).registerComponent(k).registerComponent(E).registerComponent(q).registerComponent(P)},oe=(n(24),function App(){var e=r.a.useState(null),t=Object(c.a)(e,2),n=t[0],o=t[1],i=r.a.useRef(null);r.a.useEffect((function(){if(n)return i.current=new ne({canvas:n}),i.current.start(),function(){var e;null===(e=i.current)||void 0===e||e.stop(),i.current=null}}),[n]),r.a.useEffect((function(){var e=function handleResize(){n&&(n.width=window.innerWidth,n.height=window.innerHeight)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n]);return r.a.createElement("div",{className:"App"},r.a.createElement("canvas",{ref:o,onMouseDown:function onMouseDown(e){var t;e.preventDefault(),e.stopPropagation(),null===(t=i.current)||void 0===t||t.onMouseDown(e)},onMouseMove:function onMouseMove(e){var t;null===(t=i.current)||void 0===t||t.onMouseMove(e)},onMouseUp:function onMouseUp(e){var t;null===(t=i.current)||void 0===t||t.onMouseUp(e)},onContextMenu:function onContextMenu(e){return e.preventDefault()}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}()}},[[16,1,2]]]);
//# sourceMappingURL=main.69656e04.chunk.js.map