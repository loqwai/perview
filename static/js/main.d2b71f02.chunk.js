(this.webpackJsonpperview=this.webpackJsonpperview||[]).push([[0],{32:function(e,t,n){e.exports=n(41)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),a=n(28),i=n.n(a),c=(n(39),n(31)),u=n(48),s=n(46),l=n(30),m=n(0),p=n(1),d=n(2),f=n(3),h=function(e){Object(f.a)(Attack,e);var t=Object(d.a)(Attack);function Attack(){var e;Object(m.a)(this,Attack);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).projectileColor="#000000",e.projectileSpeed=0,e.projectileLifetime=0,e.projectileDamage=0,e.minimumRefactoryPeriod=0,e.lastAttack=0,e}return Attack}(p.a);h.schema={projectileColor:{type:p.d.String},projectileSpeed:{type:p.d.Number},projectileLifetime:{type:p.d.Number},projectileDamage:{type:p.d.Number},minimumRefactoryPeriod:{type:p.d.Number},lastAttack:{type:p.d.Number}};var g=h,v=function(e){Object(f.a)(Circle,e);var t=Object(d.a)(Circle);function Circle(){var e;Object(m.a)(this,Circle);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).color="#000000",e.radius=0,e}return Circle}(p.a);v.schema={color:{type:p.d.String},radius:{type:p.d.Number}};var b=v,y=function(e){Object(f.a)(Collidable,e);var t=Object(d.a)(Collidable);function Collidable(){return Object(m.a)(this,Collidable),t.apply(this,arguments)}return Collidable}(p.c),C=function(e){Object(f.a)(Debug,e);var t=Object(d.a)(Debug);function Debug(){return Object(m.a)(this,Debug),t.apply(this,arguments)}return Debug}(p.c),S=function Vector2(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(m.a)(this,Vector2),this.x=void 0,this.y=void 0,this.set=function(t,n){return e.x=t,e.y=n,e},this.copy=function(t){return e.x=t.x,e.y=t.y,e},this.clone=function(){return(new Vector2).copy(e)},this.add=function(t){return e.clone().addMut(t)},this.addMut=function(t){return e.x+=t.x,e.y+=t.y,e},this.angleTo=function(t){var n=e.x,r=e.y,o=n*t.x+r*t.y,a=e.magnitude()*t.magnitude();return Math.acos(o/a)},this.limit=function(t){return e.clone().limitMut(t)},this.limitMut=function(t){var n=e.magnitude();return t<n&&e.divideScalarMut(n/t),e},this.divideScalar=function(t){return e.clone().divideScalarMut(t)},this.divideScalarMut=function(t){return e.x/=t,e.y/=t,e},this.magnitude=function(){return Math.sqrt(e.x*e.x+e.y*e.y)},this.multiplyScalar=function(t){return e.clone().multiplyScalarMut(t)},this.multiplyScalarMut=function(t){return e.x*=t,e.y*=t,e},this.toJSON=function(t){return JSON.stringify(e.toObject(),null,null!==t&&void 0!==t?t:0)},this.toObject=function(){return{x:e.x,y:e.y}},this.subtract=function(t){return e.clone().subtractMut(t)},this.subtractMut=function(t){return e.x-=t.x,e.y-=t.y,e},this.unit=function(){return e.clone().unitMut()},this.unitMut=function(){var t=e.magnitude();return 0===t?e.multiplyScalar(0):e.divideScalarMut(t)},this.x=t,this.y=n},j=S,O=Object(p.h)({name:"Vector2",default:new S,copy:p.g,clone:p.f}),M=function(e){Object(f.a)(DebugVector,e);var t=Object(d.a)(DebugVector);function DebugVector(){var e;Object(m.a)(this,DebugVector);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).position=new j,e.direction=new j,e.color="#ff00ff",e}return DebugVector}(p.a);M.schema={position:{type:O},direction:{type:O},color:{type:p.d.String}};var w=M,D=function(e){Object(f.a)(Destination,e);var t=Object(d.a)(Destination);function Destination(){var e;Object(m.a)(this,Destination);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).position=new j,e}return Destination}(p.a);D.schema={position:{type:O}};var x=D,k=function(e){Object(f.a)(DestroyedOnImpact,e);var t=Object(d.a)(DestroyedOnImpact);function DestroyedOnImpact(){return Object(m.a)(this,DestroyedOnImpact),t.apply(this,arguments)}return DestroyedOnImpact}(p.c),q=function(e){Object(f.a)(DoesDamage,e);var t=Object(d.a)(DoesDamage);function DoesDamage(){var e;Object(m.a)(this,DoesDamage);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).damage=0,e}return DoesDamage}(p.a);q.schema={damage:{type:p.d.Number}};var E=q,A=function(e){Object(f.a)(Health,e);var t=Object(d.a)(Health);function Health(){var e;Object(m.a)(this,Health);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).maxHealth=0,e.health=0,e}return Health}(p.a);A.schema={maxHealth:{type:p.d.Number},health:{type:p.d.Number}};var P=A,R=function(e){Object(f.a)(Lifespan,e);var t=Object(d.a)(Lifespan);function Lifespan(){var e;Object(m.a)(this,Lifespan);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).ttl=0,e.createdAt=0,e}return Lifespan}(p.a);R.schema={ttl:{type:p.d.Number},createdAt:{type:p.d.Number}};var V=R,N=function(e){Object(f.a)(Moveable,e);var t=Object(d.a)(Moveable);function Moveable(){var e;Object(m.a)(this,Moveable);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).direction=new j,e.maxSpeed=0,e.minSeparation=0,e.separation=0,e}return Moveable}(p.a);N.schema={direction:{type:O},maxSpeed:{type:p.d.Number},minSeparation:{type:p.d.Number},separation:{type:p.d.Number}};var z=N,T=function(e){Object(f.a)(Position,e);var t=Object(d.a)(Position);function Position(){var e;Object(m.a)(this,Position);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).position=new j,e}return Position}(p.a);T.schema={position:{type:O}};var H=T,F=function(e){Object(f.a)(RectangleSelection,e);var t=Object(d.a)(RectangleSelection);function RectangleSelection(){var e;Object(m.a)(this,RectangleSelection);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).startPosition=new j,e.endPosition=new j,e}return RectangleSelection}(p.a);F.schema={startPosition:{type:O},endPosition:{type:O}};var L=F,W=function(e){Object(f.a)(Selectable,e);var t=Object(d.a)(Selectable);function Selectable(){var e;Object(m.a)(this,Selectable);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).selected=!1,e}return Selectable}(p.a);W.schema={selected:{type:p.d.Boolean}};var I=W,U=function(e){Object(f.a)(Team,e);var t=Object(d.a)(Team);function Team(){var e;Object(m.a)(this,Team);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).name="unknown",e}return Team}(p.a);U.schema={name:{type:p.d.String}};var B=U,K=n(4),Z=n(43),Y=n(47),X=n(50),J=n(44),G=function(e){Object(f.a)(Attacker,e);var t=Object(d.a)(Attacker);function Attacker(){var e;Object(m.a)(this,Attacker);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closestUnObstructedTarget=function(t){var n=t.getComponent(H).position,r=t.getComponent(B),o=e.queries.targets.results.filter((function(e){return r.name!==e.getComponent(B).name})),a=e.getTeammates(t),i=o.filter((function(n){return e.inRange(t,n)})).filter((function(n){return!e.isObstructed(t,n,a)}));return Z.a((function(e){return e.getComponent(H).position.subtract(n).magnitude()}),i)[0]},e.inRange=function(e,t){var n=e.getComponent(H).position,r=t.getComponent(H).position,o=e.getComponent(g),a=o.projectileSpeed*o.projectileLifetime/1e3;return r.subtract(n).magnitude()<=a},e.isObstructed=function(t,n,r){var o=Y.a([t],r);return X.a(e.inTheWayOfTarget(t)(n),o)},e.inTheWayOfTarget=J.a((function(e,t,n){var r=e.getComponent(H).position,o=t.getComponent(H).position,a=n.getComponent(H).position,i=n.getComponent(b).radius,c=o.subtract(r),u=a.subtract(o),s=c.angleTo(u);return!(c.magnitude()<u.magnitude())&&(!(s>Math.PI/2)&&Math.sin(s)*u.magnitude()<i)})),e.attackTarget=function(t,n,r){var o=n.getMutableComponent(g);o.lastAttack=t;var a=n.getComponent(b).radius,i=n.getComponent(H).position,c=r.getComponent(H).position.subtract(i).unitMut().multiplyScalarMut(o.projectileSpeed),u=c.unit().multiplyScalarMut(a+3).addMut(i);e.world.createEntity().addComponent(b,{color:o.projectileColor,radius:2}).addComponent(E,{damage:o.projectileDamage}).addComponent(k).addComponent(z,{maxSpeed:o.projectileSpeed,direction:c}).addComponent(H,{position:u}).addComponent(V,{createdAt:t,ttl:o.projectileLifetime})},e.getTeammates=function(t){var n=t.getComponent(B).name;return Y.a([t],e.queries.attackers.results).filter((function(e){return n===e.getComponent(B).name}))},e}return Object(K.a)(Attacker,[{key:"execute",value:function execute(e,t){var n=this;this.queries.attackers.results.forEach((function(e){var r=e.getComponent(g);if(!(t<r.lastAttack+r.minimumRefactoryPeriod)){var o=n.closestUnObstructedTarget(e);o&&n.attackTarget(t,e,o)}}))}}]),Attacker}(p.b);G.queries={attackers:{components:[g,b,H,B]},targets:{components:[H,B,b]}};var $=G,Q=n(51),_=n(49),ee=function(e){Object(f.a)(Boidser,e);var t=Object(d.a)(Boidser);function Boidser(){var e;Object(m.a)(this,Boidser);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).executeEntity=function(t){var n=t.getComponent(H).position,r=t.getMutableComponent(z),o=r.direction,a=r.maxSpeed,i=e.getTeammates(t),c=e.calcDestinationForce(t),u=e.calcSeparationForce(50,t,i),s=e.calcCohesionForce(t,i),l=e.calcAlignmentForce(t,i);if(o.set(0,0).addMut(c).addMut(u).addMut(s.divideScalarMut(1e3)).addMut(l.multiplyScalarMut(10)).limitMut(a),e.world.createEntity().addComponent(w,{color:"rgba(255, 0, 0, 0.5)",position:n,direction:o}),Number.isNaN(o.x)||Number.isNaN(o.y))throw new Error("divided.x was NaN")},e.calcAlignmentForce=function(e,t){var n=new j(0,0),r=e.getComponent(H).position;return t.forEach((function(e){var t=e.getComponent(H).position,o=e.getComponent(z).direction,a=r.subtract(t).magnitude(),i=o.divideScalar(a);n.addMut(i)})),Q.a(t)?n:n.divideScalarMut(t.length)},e.calcAveragePosition=function(e){var t=e.map((function(e){return e.getComponent(H).position})),n=new j(0,0);return t.forEach(n.addMut),Q.a(t)?n:n.divideScalarMut(t.length)},e.calcCohesionForce=function(t,n){var r=t.getComponent(H).position;return e.calcAveragePosition(n).subtractMut(r)},e.calcDestinationForce=function(e){if(!e.hasComponent(x))return new j(0,0);var t=e.getComponent(x).position,n=e.getComponent(H).position;return t.subtract(n)},e.calcSeparationForce=function(t,n,r){var o=new j(0,0),a=_.a(e.calcSingleSeparationForce(t)(n),r),i=n.getComponent(H).position;return a.forEach((function(t){e.world.createEntity().addComponent(w,{color:"rgba(0, 255, 0, 0.05)",position:i,direction:t})})),a.forEach(o.addMut),Q.a(a)?o:o.divideScalar(a.length)},e.calcSingleSeparationForce=J.a((function(e,t,n){var r=t.getComponent(H).position,o=n.getComponent(H).position,a=t.getComponent(z),i=a.minSeparation,c=a.separation,u=r.subtract(o),s=o.subtract(r).limitMut(i).addMut(r).subtractMut(o).magnitude(),l=u.magnitude();return c<s?u.multiplyScalarMut(0):0===s||l<i?u.multiplyScalarMut(Math.pow(10,10)):u.divideScalarMut(s).multiplyScalarMut(e)})),e.getTeammates=function(t){var n=t.getComponent(B).name;return Y.a([t],e.queries.entities.results).filter((function(e){return n===e.getComponent(B).name}))},e}return Object(K.a)(Boidser,[{key:"execute",value:function execute(e,t){this.queries.entities.results.forEach(this.executeEntity)}}]),Boidser}(p.b);ee.queries={entities:{components:[z,H,B]}};var te=ee,ne=function(e){Object(f.a)(Camera,e);var t=Object(d.a)(Camera);function Camera(){var e;Object(m.a)(this,Camera);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).panSpeed=0,e.zoomSpeed=0,e.height=0,e.width=0,e.zoom=0,e}return Camera}(p.a);ne.schema={height:{type:p.d.Number},width:{type:p.d.Number},panSpeed:{type:p.d.Number},zoom:{type:p.d.Number},zoomSpeed:{type:p.d.Number}};var re=ne,oe=function(e){Object(f.a)(DestinationSetter,e);var t=Object(d.a)(DestinationSetter);function DestinationSetter(){var e;Object(m.a)(this,DestinationSetter);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onMouseDown=function(t){if(2===t.button){var n=t.clientX,r=t.clientY;e.selected().forEach((function(t){t.hasComponent(x)||t.addComponent(x),t.getMutableComponent(x).position.set(n,r).divideScalarMut(e.cameraScale()).subtractMut(e.cameraOffset())}))}},e.selected=function(){return e.queries.selectables.results.filter((function(e){return e.getComponent(I).selected}))},e.cameraOffset=function(){return e.queries.cameras.results[0].getComponent(H).position},e.cameraScale=function(){return e.queries.cameras.results[0].getComponent(re).zoom},e}return Object(K.a)(DestinationSetter,[{key:"execute",value:function execute(e,t){}}]),DestinationSetter}(p.b);oe.queries={cameras:{components:[re,H]},selectables:{components:[z,I]}};var ae=oe,ie=function(e){Object(f.a)(EnforceHealth,e);var t=Object(d.a)(EnforceHealth);function EnforceHealth(){return Object(m.a)(this,EnforceHealth),t.apply(this,arguments)}return Object(K.a)(EnforceHealth,[{key:"execute",value:function execute(e,t){this.queries.withHealth.results.forEach((function(e){e.getComponent(P).health<=0&&e.remove()}))}}]),EnforceHealth}(p.b);ie.queries={withHealth:{components:[P]}};var ce=ie,ue=function(e){Object(f.a)(EnforceLifespan,e);var t=Object(d.a)(EnforceLifespan);function EnforceLifespan(){return Object(m.a)(this,EnforceLifespan),t.apply(this,arguments)}return Object(K.a)(EnforceLifespan,[{key:"execute",value:function execute(e,t){this.queries.withLifepan.results.forEach((function(e){var n=e.getComponent(V),r=n.ttl;n.createdAt+r<t&&e.remove()}))}}]),EnforceLifespan}(p.b);ue.queries={withLifepan:{components:[V]}};var se=ue,le=function(e){Object(f.a)(Mover,e);var t=Object(d.a)(Mover);function Mover(){return Object(m.a)(this,Mover),t.apply(this,arguments)}return Object(K.a)(Mover,[{key:"execute",value:function execute(e,t){this.queries.moveables.results.forEach((function(t){var n=t.getMutableComponent(H).position,r=t.getComponent(z).direction,o=r.x*(e/1e3),a=r.y*(e/1e3);n.x+=o,n.y+=a}))}}]),Mover}(p.b);le.queries={moveables:{components:[z,H]}};var me=le,pe=function distanceBetween(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)},de=function positionsAreClose(e,t,n){return pe(e,t)<=n},fe=function(e){Object(f.a)(RectangleSelector,e);var t=Object(d.a)(RectangleSelector);function RectangleSelector(){var e;Object(m.a)(this,RectangleSelector);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onMouseDown=function(t){if(0===t.button&&!(e.queries.rectangleSelections.results.length>0)){var n=new j(t.clientX,t.clientY).divideScalarMut(e.cameraScale()).subtractMut(e.cameraOffset()),r=n.clone();e.world.createEntity().addComponent(L,{startPosition:n,endPosition:r})}},e.onMouseMove=function(t){var n=t.clientX,r=t.clientY;e.queries.rectangleSelections.results.forEach((function(t){var o=t.getComponent(L).endPosition;n!==o.x&&r!==o.y&&t.getMutableComponent(L).endPosition.set(n,r).divideScalarMut(e.cameraScale()).subtractMut(e.cameraOffset())}))},e.onMouseUp=function(t){0===t.button&&e.queries.rectangleSelections.results.forEach((function(t){var n=t.getComponent(L),r=n.startPosition,o=n.endPosition;t.remove(),de(r,o,5)||e.queries.selectables.results.forEach((function(e){var t=e.getMutableComponent(I),n=e.getComponent(H).position,a=n.x,i=n.y,c=r.x<a&&a<o.x||o.x<a&&a<r.x,u=r.y<i&&i<o.y||o.y<i&&i<r.y;t.selected=c&&u}))}))},e.cameraOffset=function(){return e.queries.cameras.results[0].getComponent(H).position},e.cameraScale=function(){return e.queries.cameras.results[0].getComponent(re).zoom},e}return Object(K.a)(RectangleSelector,[{key:"execute",value:function execute(e,t){}}]),RectangleSelector}(p.b);fe.queries={cameras:{components:[re,H]},selectables:{components:[H,I]},rectangleSelections:{components:[L]}};var he=fe,ge=function(e){Object(f.a)(VectorDebugState,e);var t=Object(d.a)(VectorDebugState);function VectorDebugState(){var e;Object(m.a)(this,VectorDebugState);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).enabled=!1,e}return VectorDebugState}(p.a);ge.schema={enabled:{type:p.d.Boolean}};var ve=ge,be=function(e){Object(f.a)(Renderer,e);var t=Object(d.a)(Renderer);function Renderer(e,n){var r,o=n.canvas,a=n.colors,i=n.priority;return Object(m.a)(this,Renderer),(r=t.call(this,e,{priority:i})).canvas=void 0,r.colors=void 0,r.ctx=void 0,r.renderCircles=function(){return r.queries.circles.results.forEach(r.renderCircle)},r.renderHealths=function(){return r.queries.healths.results.forEach(r.renderHealth)},r.renderRectangleSelections=function(){return r.queries.rectangleSelections.results.forEach(r.renderRectangleSelection)},r.cameraOffset=function(){return r.queries.cameras.results[0].getComponent(H).position},r.cameraScale=function(){return r.queries.cameras.results[0].getComponent(re).zoom},r.clear=function(){r.ctx&&(r.ctx.fillStyle=r.colors.background,r.ctx.fillRect(0,0,r.canvas.width,r.canvas.height))},r.renderCircle=function(e){var t,n;if(r.ctx){var o=r.cameraOffset(),a=r.cameraScale(),i=r.ctx,c=e.getComponent(b),u=c.color,s=c.radius,l=e.getComponent(H).position,m=null!==(t=null===(n=e.getComponent(I))||void 0===n?void 0:n.selected)&&void 0!==t&&t,p=l.add(o).multiplyScalar(a),d=p.x,f=p.y,h=s*a,g=(s+2)*a;i.fillStyle=u,i.beginPath(),i.arc(d,f,h,0,2*Math.PI,!1),i.fill(),i.lineWidth=2*a,i.strokeStyle="#222",i.stroke(),m&&(i.beginPath(),i.arc(d,f,g,0,2*Math.PI,!1),i.lineWidth=2*a,i.strokeStyle=r.colors.selection,i.stroke())}},r.renderDebugVector=function(e){return r.renderVector(e.getComponent(w))},r.renderHealth=function(e){var t=r.ctx;if(t){var n=r.cameraOffset(),o=r.cameraScale(),a=e.getComponent(H).position,i=e.getComponent(P),c=i.health,u=i.maxHealth,s=a.add(new j(-10,15)).addMut(n).multiplyScalarMut(o),l=s.x,m=s.y,p=20*o,d=4*o,f=p*c/u;t.lineWidth=2*o,t.strokeStyle="#222",t.strokeRect(l,m,p,d),t.lineWidth=0,t.fillStyle=r.colors.selection,t.fillRect(l,m,f,d)}},r.renderRectangleSelection=function(e){if(r.ctx){var t=r.cameraOffset(),n=r.cameraScale(),o=r.ctx,a=e.getComponent(L);if(!de(a.startPosition,a.endPosition,5)){var i=a.startPosition.add(t).multiplyScalarMut(n),c=a.endPosition.add(t).multiplyScalarMut(n),u=i.x,s=i.y,l=c.x-u,m=c.y-s;o.lineWidth=2*n,o.strokeStyle=r.colors.selection,o.strokeRect(u,s,l,m)}}},r.renderVector=function(e){var t=e.position,n=e.direction,o=e.color;if(r.ctx){var a=r.cameraOffset(),i=r.cameraScale(),c=t.add(a).multiplyScalarMut(i),u=c.add(n.multiplyScalar(i)),s=u.x,l=u.y,m=r.ctx;m.lineWidth=2*i,m.strokeStyle=o,m.beginPath(),m.moveTo(c.x,c.y),m.lineTo(s,l),m.stroke()}},r.vectorDebugEnabled=function(){var e;return null===(e=r.queries.vectorDebugStates.results[0])||void 0===e?void 0:e.getComponent(ve).enabled},r.canvas=o,r.colors=a,r.ctx=r.canvas.getContext("2d"),r}return Object(K.a)(Renderer,[{key:"execute",value:function execute(e,t){this.clear(),this.renderCircles(),this.renderHealths(),this.renderRectangleSelections(),this.renderDebugVectors()}},{key:"renderDebugVectors",value:function renderDebugVectors(){this.vectorDebugEnabled()&&this.queries.debugVectors.results.forEach(this.renderDebugVector),this.queries.debugVectors.results.forEach((function(e){return e.remove()}))}}]),Renderer}(p.b);be.queries={cameras:{components:[re,H]},circles:{components:[b,H]},debugVectors:{components:[w]},healths:{components:[P,H]},rectangleSelections:{components:[L]},vectorDebugStates:{components:[ve]}};var ye=be,Ce=function(e){Object(f.a)(Selector,e);var t=Object(d.a)(Selector);function Selector(){var e;Object(m.a)(this,Selector);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onMouseDown=function(t){if(0===t.button){var n=new j(t.clientX,t.clientY).divideScalarMut(e.cameraScale()).subtractMut(e.cameraOffset());e.selectCircles(n)}},e.selectCircles=function(t){e.deselectAllCircles(),e.queries.circles.results.forEach((function(e){var n=e.getComponent(b).radius,r=e.getComponent(H).position;de(t,r,n)&&(e.getMutableComponent(I).selected=!0)}))},e.deselectAllCircles=function(){e.queries.circles.results.forEach((function(e){e.getComponent(I).selected&&(e.getMutableComponent(I).selected=!1)}))},e.cameraOffset=function(){return e.queries.cameras.results[0].getComponent(H).position},e.cameraScale=function(){return e.queries.cameras.results[0].getComponent(re).zoom},e}return Object(K.a)(Selector,[{key:"execute",value:function execute(e,t){}}]),Selector}(p.b);Ce.queries={cameras:{components:[re,H]},circles:{components:[b,H,I]}};var Se=Ce,je=n(52),Oe=n(45),Me=J.a((function(e,t){if(e===t)return!1;var n=e.getComponent(b),r=e.getComponent(H),o=t.getComponent(b),a=t.getComponent(H),i=n.radius+o.radius;return de(r.position,a.position,i)})),we=function(e){Object(f.a)(Stopper,e);var t=Object(d.a)(Stopper);function Stopper(){var e;Object(m.a)(this,Stopper);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).stopIfAtDestination=function(e){var t=e.getComponent(H).position,n=e.getComponent(x).position;de(t,n,1)&&(e.getMutableComponent(z).direction.set(0,0),e.removeComponent(x))},e.stopIfColliding=function(t){var n=je.a(Me(t),e.queries.collideables.results);if(!Oe.a(n)){if(t.getMutableComponent(z).direction.set(0,0),t.hasComponent(E)&&n.hasComponent(P)){var r=t.getComponent(E).damage;n.getMutableComponent(P).health-=r}t.hasComponent(k)&&t.remove()}},e}return Object(K.a)(Stopper,[{key:"execute",value:function execute(e,t){this.queries.moveables.results.forEach(this.stopIfColliding),this.queries.withDestination.results.forEach(this.stopIfAtDestination)}}]),Stopper}(p.b);we.queries={collideables:{components:[b,y,H]},moveables:{components:[b,z,H]},withDestination:{components:[x,z,H]}};var De=we,xe=function(e){Object(f.a)(VectorDebugger,e);var t=Object(d.a)(VectorDebugger);function VectorDebugger(){var e;Object(m.a)(this,VectorDebugger);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onKeyDown=function(t){if("v"===t.key){var n=e.queries.vectorDebugStates.results[0].getMutableComponent(ve);n.enabled=!n.enabled}},e}return Object(K.a)(VectorDebugger,[{key:"execute",value:function execute(e,t){}}]),VectorDebugger}(p.b);xe.queries={vectorDebugStates:{components:[ve]}};var ke=xe,qe=function(e){Object(f.a)(CameraPanner,e);var t=Object(d.a)(CameraPanner);function CameraPanner(){var e;Object(m.a)(this,CameraPanner);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).panning={up:!1,right:!1,down:!1,left:!1},e.onKeyDown=function(t){"w"===t.key&&(e.panning.up=!0),"d"===t.key&&(e.panning.right=!0),"s"===t.key&&(e.panning.down=!0),"a"===t.key&&(e.panning.left=!0)},e.onKeyUp=function(t){"w"===t.key&&(e.panning.up=!1),"d"===t.key&&(e.panning.right=!1),"s"===t.key&&(e.panning.down=!1),"a"===t.key&&(e.panning.left=!1)},e}return Object(K.a)(CameraPanner,[{key:"execute",value:function execute(e,t){var n=this.queries.cameras.results[0],r=n.getMutableComponent(re).panSpeed,o=n.getMutableComponent(H).position,a=new j((this.panning.left?1:0)+(this.panning.right?-1:0),(this.panning.up?1:0)+(this.panning.down?-1:0)).multiplyScalarMut(r*e/1e3);o.addMut(a)}}]),CameraPanner}(p.b);qe.queries={cameras:{components:[re,H]}};var Ee=qe,Ae=function(e){Object(f.a)(CameraZoomer,e);var t=Object(d.a)(CameraZoomer);function CameraZoomer(){var e;Object(m.a)(this,CameraZoomer);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onCanvasResize=function(t){var n=t.width,r=t.height,o=e.queries.cameras.results[0].getMutableComponent(re);o.width=n,o.height=r},e.onMouseWheel=function(t){var n=t.clientX,r=t.clientY,o=t.deltaY,a=e.queries.cameras.results[0].getMutableComponent(H).position,i=e.queries.cameras.results[0].getMutableComponent(re),c=i.zoom,u=-1*o*i.zoomSpeed;i.zoom+=u,i.zoom<=.2&&(i.zoom=.2),i.zoom>10&&(i.zoom=10);var s=i.zoom,l=new j(n,r).divideScalarMut(c).subtractMut(a),m=new j(n,r).divideScalarMut(s).subtractMut(a).subtract(l);a.addMut(m)},e}return Object(K.a)(CameraZoomer,[{key:"execute",value:function execute(e,t){}}]),CameraZoomer}(p.b);Ae.queries={cameras:{components:[re,H]}};var Pe=Ae,Re={friendly:"#59cd90",enemy:"#c73e1d",projectile:"#ffe74c",background:"#545e75",selection:"#57b8ff"},Ve=function Game(e){var t=this,n=e.canvas;Object(m.a)(this,Game),this.world=void 0,this.lastTime=void 0,this.animationFrameRequest=void 0,this.canvasSize=void 0,this.start=function(){t.createCamera(),t.createVectorDebugState();for(var e=0;e<10;e++)t.createFriendly(50+50*e,500),t.createEnemy(50+50*e,100);t.run()},this.stop=function(){t.animationFrameRequest&&cancelAnimationFrame(t.animationFrameRequest)},this.onCanvasResize=function(e){var n=e.width,r=e.height;t.cameraZoomer().onCanvasResize({width:n,height:r})},this.onKeyDown=function(e){t.vectorDebugger().onKeyDown(e),t.cameraPanner().onKeyDown(e)},this.onKeyUp=function(e){t.cameraPanner().onKeyUp(e)},this.onMouseDown=function(e){t.destinationSetter().onMouseDown(e),t.selector().onMouseDown(e),t.rectangleSelector().onMouseDown(e)},this.onMouseMove=function(e){return t.rectangleSelector().onMouseMove(e)},this.onMouseUp=function(e){return t.rectangleSelector().onMouseUp(e)},this.onMouseWheel=function(e){return t.cameraZoomer().onMouseWheel(e)},this.createCamera=function(){var e=t.canvasSize,n=e.width,r=e.height;t.world.createEntity().addComponent(re,{panSpeed:500,zoomSpeed:.01,zoom:1,width:n,height:r}).addComponent(H,{position:new j(0,0)})},this.createEnemy=function(e,n){var r=Re.enemy,o=new j(e,n),a=Re.projectile;t.world.createEntity().addComponent(g,{projectileColor:a,projectileSpeed:200,projectileLifetime:1800,projectileDamage:10,minimumRefactoryPeriod:500}).addComponent(b,{radius:10,color:r}).addComponent(y).addComponent(P,{health:100,maxHealth:100}).addComponent(H,{position:o}).addComponent(B,{name:"Enemy"})},this.createFriendly=function(e,n){var r=Re.friendly,o=new j,a=new j(e,n),i=Re.projectile;t.world.createEntity().addComponent(g,{projectileColor:i,projectileSpeed:200,projectileLifetime:1800,projectileDamage:10,minimumRefactoryPeriod:500}).addComponent(b,{radius:10,color:r}).addComponent(y).addComponent(P,{health:100,maxHealth:100}).addComponent(z,{direction:o,maxSpeed:100,separation:30,minSeparation:20}).addComponent(H,{position:a}).addComponent(I).addComponent(B,{name:"Friendly"})},this.createVectorDebugState=function(){t.world.createEntity().addComponent(ve)},this.run=function(){var e=performance.now(),n=e-t.lastTime;t.world.execute(n,e),t.lastTime=e,t.animationFrameRequest=requestAnimationFrame(t.run)},this.cameraPanner=function(){return t.world.getSystem(Ee)},this.cameraZoomer=function(){return t.world.getSystem(Pe)},this.destinationSetter=function(){return t.world.getSystem(ae)},this.rectangleSelector=function(){return t.world.getSystem(he)},this.renderer=function(){return t.world.getSystem(ye)},this.selector=function(){return t.world.getSystem(Se)},this.vectorDebugger=function(){return t.world.getSystem(ke)},this.lastTime=performance.now(),this.animationFrameRequest=null,this.canvasSize={width:n.width,height:n.height},this.world=(new p.e).registerSystem($).registerSystem(te).registerSystem(Ee).registerSystem(Pe).registerSystem(ae).registerSystem(se).registerSystem(ce).registerSystem(me).registerSystem(he).registerSystem(ye,{canvas:n,colors:Re}).registerSystem(Se).registerSystem(De).registerSystem(ke).registerComponent(g).registerComponent(re).registerComponent(b).registerComponent(y).registerComponent(C).registerComponent(w).registerComponent(x).registerComponent(k).registerComponent(E).registerComponent(P).registerComponent(V).registerComponent(z).registerComponent(H).registerComponent(L).registerComponent(I).registerComponent(B).registerComponent(ve)},Ne=(n(40),function App(){var e=o.a.useState(null),t=Object(c.a)(e,2),n=t[0],r=t[1],a=o.a.useRef(null);o.a.useEffect((function(){if(n)return a.current=new Ve({canvas:n}),a.current.start(),function(){var e;null===(e=a.current)||void 0===e||e.stop(),a.current=null}}),[n]);var i=Object(u.a)(),m=i.width,p=i.height;o.a.useEffect((function(){var e;n&&(n.width=m,n.height=p,null===(e=a.current)||void 0===e||e.onCanvasResize({width:m,height:p}))}),[n,m,p]);return Object(s.a)((function(){return!0}),(function(e){var t;return null===(t=a.current)||void 0===t?void 0:t.onKeyDown(e)}),{event:"keydown"}),Object(s.a)((function(){return!0}),(function(e){var t;return null===(t=a.current)||void 0===t?void 0:t.onKeyUp(e)}),{event:"keyup"}),Object(l.a)("wheel",(function(e){var t;null===(t=a.current)||void 0===t||t.onMouseWheel(e)})),o.a.createElement("div",{className:"App"},o.a.createElement("canvas",{ref:r,onMouseDown:function onMouseDown(e){var t;e.preventDefault(),e.stopPropagation(),null===(t=a.current)||void 0===t||t.onMouseDown(e)},onMouseMove:function onMouseMove(e){var t;return null===(t=a.current)||void 0===t?void 0:t.onMouseMove(e)},onMouseUp:function onMouseUp(e){var t;return null===(t=a.current)||void 0===t?void 0:t.onMouseUp(e)},onContextMenu:function onContextMenu(e){return e.preventDefault()}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ne,null)),document.getElementById("root")),function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}()}},[[32,1,2]]]);
//# sourceMappingURL=main.d2b71f02.chunk.js.map