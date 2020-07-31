(this.webpackJsonpperview=this.webpackJsonpperview||[]).push([[0],{30:function(e,t,n){e.exports=n(39)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),a=n(27),i=n.n(a),c=(n(37),n(29)),s=n(45),u=n(0),l=n(1),p=n(2),m=n(3),d=function(e){Object(m.a)(Attack,e);var t=Object(p.a)(Attack);function Attack(){var e;Object(u.a)(this,Attack);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).projectileColor="#000000",e.projectileSpeed=0,e.projectileLifetime=0,e.projectileDamage=0,e.minimumRefactoryPeriod=0,e.lastAttack=0,e}return Attack}(l.a);d.schema={projectileColor:{type:l.d.String},projectileSpeed:{type:l.d.Number},projectileLifetime:{type:l.d.Number},projectileDamage:{type:l.d.Number},minimumRefactoryPeriod:{type:l.d.Number},lastAttack:{type:l.d.Number}};var f=d,g=function(e){Object(m.a)(Circle,e);var t=Object(p.a)(Circle);function Circle(){var e;Object(u.a)(this,Circle);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).color="#000000",e.radius=0,e}return Circle}(l.a);g.schema={color:{type:l.d.String},radius:{type:l.d.Number}};var h=g,v=function(e){Object(m.a)(Collidable,e);var t=Object(p.a)(Collidable);function Collidable(){return Object(u.a)(this,Collidable),t.apply(this,arguments)}return Collidable}(l.c),b=function(e){Object(m.a)(Debug,e);var t=Object(p.a)(Debug);function Debug(){return Object(u.a)(this,Debug),t.apply(this,arguments)}return Debug}(l.c),y=function Vector2(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(u.a)(this,Vector2),this.x=void 0,this.y=void 0,this.set=function(t,n){return e.x=t,e.y=n,e},this.copy=function(t){return e.x=t.x,e.y=t.y,e},this.clone=function(){return(new Vector2).copy(e)},this.add=function(t){return e.clone().addMut(t)},this.addMut=function(t){return e.x+=t.x,e.y+=t.y,e},this.angleTo=function(t){var n=e.x,r=e.y,o=n*t.x+r*t.y,a=e.magnitude()*t.magnitude();return Math.acos(o/a)},this.limit=function(t){return e.clone().limitMut(t)},this.limitMut=function(t){var n=e.magnitude();return t<n&&e.divideScalarMut(n/t),e},this.divideScalar=function(t){return e.clone().divideScalarMut(t)},this.divideScalarMut=function(t){return e.x/=t,e.y/=t,e},this.magnitude=function(){return Math.sqrt(e.x*e.x+e.y*e.y)},this.multiplyScalar=function(t){return e.clone().multiplyScalarMut(t)},this.multiplyScalarMut=function(t){return e.x*=t,e.y*=t,e},this.toJSON=function(t){var n=e.x,r=e.y;return JSON.stringify({x:n,y:r},null,null!==t&&void 0!==t?t:0)},this.subtract=function(t){return e.clone().subtractMut(t)},this.subtractMut=function(t){return e.x-=t.x,e.y-=t.y,e},this.unit=function(){return e.clone().unitMut()},this.unitMut=function(){var t=e.magnitude();return 0===t?e.multiplyScalar(0):e.divideScalarMut(t)},this.x=t,this.y=n},C=y,S=Object(l.h)({name:"Vector2",default:new y,copy:l.g,clone:l.f}),j=function(e){Object(m.a)(DebugVector,e);var t=Object(p.a)(DebugVector);function DebugVector(){var e;Object(u.a)(this,DebugVector);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).position=new C,e.direction=new C,e.color="#ff00ff",e}return DebugVector}(l.a);j.schema={position:{type:S},direction:{type:S},color:{type:l.d.String}};var O=j,w=function(e){Object(m.a)(Destination,e);var t=Object(p.a)(Destination);function Destination(){var e;Object(u.a)(this,Destination);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).position=new C,e}return Destination}(l.a);w.schema={position:{type:S}};var M=w,D=function(e){Object(m.a)(DestroyedOnImpact,e);var t=Object(p.a)(DestroyedOnImpact);function DestroyedOnImpact(){return Object(u.a)(this,DestroyedOnImpact),t.apply(this,arguments)}return DestroyedOnImpact}(l.c),x=function(e){Object(m.a)(DoesDamage,e);var t=Object(p.a)(DoesDamage);function DoesDamage(){var e;Object(u.a)(this,DoesDamage);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).damage=0,e}return DoesDamage}(l.a);x.schema={damage:{type:l.d.Number}};var k=x,E=function(e){Object(m.a)(Health,e);var t=Object(p.a)(Health);function Health(){var e;Object(u.a)(this,Health);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).maxHealth=0,e.health=0,e}return Health}(l.a);E.schema={maxHealth:{type:l.d.Number},health:{type:l.d.Number}};var A=E,q=function(e){Object(m.a)(Lifespan,e);var t=Object(p.a)(Lifespan);function Lifespan(){var e;Object(u.a)(this,Lifespan);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).ttl=0,e.createdAt=0,e}return Lifespan}(l.a);q.schema={ttl:{type:l.d.Number},createdAt:{type:l.d.Number}};var P=q,R=function(e){Object(m.a)(Moveable,e);var t=Object(p.a)(Moveable);function Moveable(){var e;Object(u.a)(this,Moveable);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).direction=new C,e.maxSpeed=0,e.minSeparation=0,e.separation=0,e}return Moveable}(l.a);R.schema={direction:{type:S},maxSpeed:{type:l.d.Number},minSeparation:{type:l.d.Number},separation:{type:l.d.Number}};var V=R,N=function(e){Object(m.a)(Position,e);var t=Object(p.a)(Position);function Position(){var e;Object(u.a)(this,Position);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).position=new C,e}return Position}(l.a);N.schema={position:{type:S}};var T=N,H=function(e){Object(m.a)(RectangleSelection,e);var t=Object(p.a)(RectangleSelection);function RectangleSelection(){var e;Object(u.a)(this,RectangleSelection);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).startPosition=new C,e.endPosition=new C,e}return RectangleSelection}(l.a);H.schema={startPosition:{type:S},endPosition:{type:S}};var L=H,F=function(e){Object(m.a)(Selectable,e);var t=Object(p.a)(Selectable);function Selectable(){var e;Object(u.a)(this,Selectable);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).selected=!1,e}return Selectable}(l.a);F.schema={selected:{type:l.d.Boolean}};var I=F,U=function(e){Object(m.a)(Team,e);var t=Object(p.a)(Team);function Team(){var e;Object(u.a)(this,Team);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).name="unknown",e}return Team}(l.a);U.schema={name:{type:l.d.String}};var B=U,W=n(4),K=n(41),X=n(44),Y=n(47),J=n(42),z=function(e){Object(m.a)(Attacker,e);var t=Object(p.a)(Attacker);function Attacker(){var e;Object(u.a)(this,Attacker);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closestUnObstructedTarget=function(t){var n=t.getComponent(T).position,r=t.getComponent(B),o=e.queries.targets.results.filter((function(e){return r.name!==e.getComponent(B).name})),a=e.getTeammates(t),i=o.filter((function(n){return e.inRange(t,n)})).filter((function(n){return!e.isObstructed(t,n,a)}));return K.a((function(e){return e.getComponent(T).position.subtract(n).magnitude()}),i)[0]},e.inRange=function(e,t){var n=e.getComponent(T).position,r=t.getComponent(T).position,o=e.getComponent(f),a=o.projectileSpeed*o.projectileLifetime/1e3;return r.subtract(n).magnitude()<=a},e.isObstructed=function(t,n,r){var o=X.a([t],r);return Y.a(e.inTheWayOfTarget(t)(n),o)},e.dv=function(t,n,r){e.world.createEntity().addComponent(O,{color:r,position:t,direction:n})},e.inTheWayOfTarget=J.a((function(e,t,n){var r=e.getComponent(T).position,o=t.getComponent(T).position,a=n.getComponent(T).position,i=n.getComponent(h).radius,c=o.subtract(r),s=a.subtract(o),u=c.angleTo(s);return!(c.magnitude()<s.magnitude())&&(!(u>Math.PI/2)&&Math.sin(u)*s.magnitude()<i)})),e.attackTarget=function(t,n,r){var o=n.getMutableComponent(f);o.lastAttack=t;var a=n.getComponent(h).radius,i=n.getComponent(T).position,c=r.getComponent(T).position.subtract(i).unitMut().multiplyScalarMut(o.projectileSpeed),s=c.unit().multiplyScalarMut(a+3).addMut(i);e.world.createEntity().addComponent(h,{color:o.projectileColor,radius:2}).addComponent(k,{damage:o.projectileDamage}).addComponent(D).addComponent(V,{maxSpeed:o.projectileSpeed,direction:c}).addComponent(T,{position:s}).addComponent(P,{createdAt:t,ttl:o.projectileLifetime})},e.getTeammates=function(t){var n=t.getComponent(B).name;return X.a([t],e.queries.attackers.results).filter((function(e){return n===e.getComponent(B).name}))},e}return Object(W.a)(Attacker,[{key:"execute",value:function execute(e,t){var n=this;this.queries.attackers.results.forEach((function(e){var r=e.getComponent(f);if(!(t<r.lastAttack+r.minimumRefactoryPeriod)){var o=n.closestUnObstructedTarget(e);o&&n.attackTarget(t,e,o)}}))}}]),Attacker}(l.b);z.queries={attackers:{components:[f,h,T,B]},targets:{components:[T,B,h]}};var G=z,$=n(48),Q=n(46),Z=function(e){Object(m.a)(Boidser,e);var t=Object(p.a)(Boidser);function Boidser(){var e;Object(u.a)(this,Boidser);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).executeEntity=function(t){var n=t.getComponent(T).position,r=t.getMutableComponent(V),o=r.direction,a=r.maxSpeed,i=e.getTeammates(t),c=e.calcDestinationForce(t),s=e.calcSeparationForce(50,t,i),u=e.calcCohesionForce(t,i),l=e.calcAlignmentForce(t,i);if(o.set(0,0).addMut(c).addMut(s).addMut(u.divideScalarMut(1e3)).addMut(l.multiplyScalarMut(10)).limitMut(a),e.world.createEntity().addComponent(O,{color:"#f00",position:n,direction:o}),Number.isNaN(o.x)||Number.isNaN(o.y))throw new Error("divided.x was NaN")},e.calcAlignmentForce=function(e,t){var n=new C(0,0),r=e.getComponent(T).position;return t.forEach((function(e){var t=e.getComponent(T).position,o=e.getComponent(V).direction,a=r.subtract(t).magnitude(),i=o.divideScalar(a);n.addMut(i)})),$.a(t)?n:n.divideScalarMut(t.length)},e.calcAveragePosition=function(e){var t=e.map((function(e){return e.getComponent(T).position})),n=new C(0,0);return t.forEach(n.addMut),$.a(t)?n:n.divideScalarMut(t.length)},e.calcCohesionForce=function(t,n){var r=t.getComponent(T).position;return e.calcAveragePosition(n).subtractMut(r)},e.calcDestinationForce=function(e){if(!e.hasComponent(M))return new C(0,0);var t=e.getComponent(M).position,n=e.getComponent(T).position;return t.subtract(n)},e.calcSeparationForce=function(t,n,r){var o=new C(0,0),a=Q.a(e.calcSingleSeparationForce(t)(n),r),i=n.getComponent(T).position;return a.forEach((function(t){e.world.createEntity().addComponent(O,{color:"rgba(0, 255, 0, 0.05)",position:i,direction:t})})),a.forEach(o.addMut),$.a(a)?o:o.divideScalar(a.length)},e.calcSingleSeparationForce=J.a((function(e,t,n){var r=t.getComponent(T).position,o=n.getComponent(T).position,a=t.getComponent(V),i=a.minSeparation,c=a.separation,s=r.subtract(o),u=o.subtract(r).limitMut(i).addMut(r).subtractMut(o).magnitude(),l=s.magnitude();return c<u?s.multiplyScalarMut(0):0===u||l<i?s.multiplyScalarMut(Math.pow(10,10)):s.divideScalarMut(u).multiplyScalarMut(e)})),e.getTeammates=function(t){var n=t.getComponent(B).name;return X.a([t],e.queries.entities.results).filter((function(e){return n===e.getComponent(B).name}))},e}return Object(W.a)(Boidser,[{key:"execute",value:function execute(e,t){this.queries.entities.results.forEach(this.executeEntity)}}]),Boidser}(l.b);Z.queries={entities:{components:[V,T,B]}};var _=Z,ee=function(e){Object(m.a)(DestinationSetter,e);var t=Object(p.a)(DestinationSetter);function DestinationSetter(){var e;Object(u.a)(this,DestinationSetter);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onMouseDown=function(t){if(2===t.button){var n=t.clientX,r=t.clientY;e.selected().forEach((function(e){e.hasComponent(M)||e.addComponent(M),e.getMutableComponent(M).position.set(n,r)}))}},e.selected=function(){return e.queries.selectables.results.filter((function(e){return e.getComponent(I).selected}))},e}return Object(W.a)(DestinationSetter,[{key:"execute",value:function execute(e,t){}}]),DestinationSetter}(l.b);ee.queries={selectables:{components:[V,I]}};var te=ee,ne=function(e){Object(m.a)(EnforceHealth,e);var t=Object(p.a)(EnforceHealth);function EnforceHealth(){return Object(u.a)(this,EnforceHealth),t.apply(this,arguments)}return Object(W.a)(EnforceHealth,[{key:"execute",value:function execute(e,t){this.queries.withHealth.results.forEach((function(e){e.getComponent(A).health<=0&&e.remove()}))}}]),EnforceHealth}(l.b);ne.queries={withHealth:{components:[A]}};var re=ne,oe=function(e){Object(m.a)(EnforceLifespan,e);var t=Object(p.a)(EnforceLifespan);function EnforceLifespan(){return Object(u.a)(this,EnforceLifespan),t.apply(this,arguments)}return Object(W.a)(EnforceLifespan,[{key:"execute",value:function execute(e,t){this.queries.withLifepan.results.forEach((function(e){var n=e.getComponent(P),r=n.ttl;n.createdAt+r<t&&e.remove()}))}}]),EnforceLifespan}(l.b);oe.queries={withLifepan:{components:[P]}};var ae=oe,ie=function(e){Object(m.a)(Mover,e);var t=Object(p.a)(Mover);function Mover(){return Object(u.a)(this,Mover),t.apply(this,arguments)}return Object(W.a)(Mover,[{key:"execute",value:function execute(e,t){this.queries.moveables.results.forEach((function(t){var n=t.getMutableComponent(T).position,r=t.getComponent(V).direction,o=r.x*(e/1e3),a=r.y*(e/1e3);n.x+=o,n.y+=a}))}}]),Mover}(l.b);ie.queries={moveables:{components:[V,T]}};var ce=ie,se=function distanceBetween(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)},ue=function positionsAreClose(e,t,n){return se(e,t)<=n},le=function(e){Object(m.a)(Camera,e);var t=Object(p.a)(Camera);function Camera(){var e;Object(u.a)(this,Camera);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).panSpeed=0,e}return Camera}(l.a);le.schema={panSpeed:{type:l.d.Number}};var pe=le,me=function(e){Object(m.a)(RectangleSelector,e);var t=Object(p.a)(RectangleSelector);function RectangleSelector(){var e;Object(u.a)(this,RectangleSelector);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onMouseDown=function(t){if(0===t.button&&!(e.queries.rectangleSelections.results.length>0)){var n=new C(t.clientX,t.clientY).subtractMut(e.cameraOffset()),r=new C(t.clientX,t.clientY).subtractMut(e.cameraOffset());e.world.createEntity().addComponent(L,{startPosition:n,endPosition:r})}},e.onMouseMove=function(t){var n=t.clientX,r=t.clientY;e.queries.rectangleSelections.results.forEach((function(t){var o=t.getComponent(L).endPosition;n!==o.x&&r!==o.y&&t.getMutableComponent(L).endPosition.set(n,r).subtractMut(e.cameraOffset())}))},e.onMouseUp=function(t){0===t.button&&e.queries.rectangleSelections.results.forEach((function(t){var n=t.getComponent(L),r=n.startPosition,o=n.endPosition;t.remove(),ue(r,o,5)||e.queries.selectables.results.forEach((function(e){var t=e.getMutableComponent(I),n=e.getComponent(T).position,a=n.x,i=n.y,c=r.x<a&&a<o.x||o.x<a&&a<r.x,s=r.y<i&&i<o.y||o.y<i&&i<r.y;t.selected=c&&s}))}))},e.cameraOffset=function(){return e.queries.cameras.results[0].getComponent(T).position},e}return Object(W.a)(RectangleSelector,[{key:"execute",value:function execute(e,t){}}]),RectangleSelector}(l.b);me.queries={cameras:{components:[pe,T]},selectables:{components:[T,I]},rectangleSelections:{components:[L]}};var de=me,fe=function(e){Object(m.a)(VectorDebugState,e);var t=Object(p.a)(VectorDebugState);function VectorDebugState(){var e;Object(u.a)(this,VectorDebugState);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).enabled=!1,e}return VectorDebugState}(l.a);fe.schema={enabled:{type:l.d.Boolean}};var ge=fe,he=function(e){Object(m.a)(Renderer,e);var t=Object(p.a)(Renderer);function Renderer(e,n){var r,o=n.canvas,a=n.colors,i=n.priority;return Object(u.a)(this,Renderer),(r=t.call(this,e,{priority:i})).canvas=void 0,r.colors=void 0,r.ctx=void 0,r.renderCircles=function(){return r.queries.circles.results.forEach(r.renderCircle)},r.renderHealths=function(){return r.queries.healths.results.forEach(r.renderHealth)},r.renderRectangleSelections=function(){return r.queries.rectangleSelections.results.forEach(r.renderRectangleSelection)},r.cameraOffset=function(){return r.queries.cameras.results[0].getComponent(T).position},r.clear=function(){r.ctx&&(r.ctx.fillStyle=r.colors.background,r.ctx.fillRect(0,0,r.canvas.width,r.canvas.height))},r.renderCircle=function(e){var t,n;if(r.ctx){var o=r.ctx,a=e.getComponent(h),i=a.color,c=a.radius,s=e.getComponent(T).position,u=null!==(t=null===(n=e.getComponent(I))||void 0===n?void 0:n.selected)&&void 0!==t&&t,l=s.add(r.cameraOffset()),p=l.x,m=l.y;o.fillStyle=i,o.beginPath(),o.arc(p,m,c,0,2*Math.PI,!1),o.fill(),o.lineWidth=2,o.strokeStyle="#222",o.stroke(),u&&(o.beginPath(),o.arc(p,m,c+2,0,2*Math.PI,!1),o.lineWidth=2,o.strokeStyle=r.colors.selection,o.stroke())}},r.renderDebugVector=function(e){return r.renderVector(e.getComponent(O))},r.renderHealth=function(e){var t=r.ctx;if(t){var n=e.getComponent(T).position.add(r.cameraOffset()),o=e.getComponent(A),a=o.health,i=o.maxHealth,c=n.x-10,s=n.y+15,u=20*a/i;t.lineWidth=2,t.strokeStyle="#222",t.strokeRect(c,s,20,4),t.lineWidth=0,t.fillStyle=r.colors.selection,t.fillRect(c,s,u,4)}},r.renderRectangleSelection=function(e){if(r.ctx){var t=r.ctx,n=e.getComponent(L),o=n.startPosition.add(r.cameraOffset()),a=n.endPosition.add(r.cameraOffset());if(!ue(o,a,5)){var i=o.x,c=o.y,s=a.x-i,u=a.y-c;t.lineWidth=2,t.strokeStyle=r.colors.selection,t.strokeRect(i,c,s,u)}}},r.renderVector=function(e){var t=e.position,n=e.direction,o=e.color;if(r.ctx){var a=t.add(r.cameraOffset()),i=a.add(n),c=i.x,s=i.y,u=r.ctx;u.lineWidth=2,u.strokeStyle=o,u.beginPath(),u.moveTo(a.x,a.y),u.lineTo(c,s),u.stroke()}},r.vectorDebugEnabled=function(){var e;return null===(e=r.queries.vectorDebugStates.results[0])||void 0===e?void 0:e.getComponent(ge).enabled},r.canvas=o,r.colors=a,r.ctx=r.canvas.getContext("2d"),r}return Object(W.a)(Renderer,[{key:"execute",value:function execute(e,t){this.clear(),this.renderCircles(),this.renderHealths(),this.renderRectangleSelections(),this.renderDebugVectors()}},{key:"renderDebugVectors",value:function renderDebugVectors(){this.vectorDebugEnabled()&&this.queries.debugVectors.results.forEach(this.renderDebugVector),this.queries.debugVectors.results.forEach((function(e){return e.remove()}))}}]),Renderer}(l.b);he.queries={cameras:{components:[pe,T]},circles:{components:[h,T]},debugVectors:{components:[O]},healths:{components:[A,T]},rectangleSelections:{components:[L]},vectorDebugStates:{components:[ge]}};var ve=he,be=function(e){Object(m.a)(Selector,e);var t=Object(p.a)(Selector);function Selector(){var e;Object(u.a)(this,Selector);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onMouseDown=function(t){if(0===t.button){var n=new C(t.clientX,t.clientY).subtractMut(e.cameraOffset());e.selectCircles(n)}},e.selectCircles=function(t){e.deselectAllCircles(),e.queries.circles.results.forEach((function(e){var n=e.getComponent(h).radius,r=e.getComponent(T).position;ue(t,r,n)&&(e.getMutableComponent(I).selected=!0)}))},e.deselectAllCircles=function(){e.queries.circles.results.forEach((function(e){e.getComponent(I).selected&&(e.getMutableComponent(I).selected=!1)}))},e.cameraOffset=function(){return e.queries.cameras.results[0].getComponent(T).position},e}return Object(W.a)(Selector,[{key:"execute",value:function execute(e,t){}}]),Selector}(l.b);be.queries={cameras:{components:[pe,T]},circles:{components:[h,T,I]}};var ye=be,Ce=n(49),Se=n(43),je=J.a((function(e,t){if(e===t)return!1;var n=e.getComponent(h),r=e.getComponent(T),o=t.getComponent(h),a=t.getComponent(T),i=n.radius+o.radius;return ue(r.position,a.position,i)})),Oe=function(e){Object(m.a)(Stopper,e);var t=Object(p.a)(Stopper);function Stopper(){var e;Object(u.a)(this,Stopper);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).stopIfAtDestination=function(e){var t=e.getComponent(T).position,n=e.getComponent(M).position;ue(t,n,1)&&(e.getMutableComponent(V).direction.set(0,0),e.removeComponent(M))},e.stopIfColliding=function(t){var n=Ce.a(je(t),e.queries.collideables.results);if(!Se.a(n)){if(t.getMutableComponent(V).direction.set(0,0),t.hasComponent(k)&&n.hasComponent(A)){var r=t.getComponent(k).damage;n.getMutableComponent(A).health-=r}t.hasComponent(D)&&t.remove()}},e}return Object(W.a)(Stopper,[{key:"execute",value:function execute(e,t){this.queries.moveables.results.forEach(this.stopIfColliding),this.queries.withDestination.results.forEach(this.stopIfAtDestination)}}]),Stopper}(l.b);Oe.queries={collideables:{components:[h,v,T]},moveables:{components:[h,V,T]},withDestination:{components:[M,V,T]}};var we=Oe,Me=function(e){Object(m.a)(VectorDebugger,e);var t=Object(p.a)(VectorDebugger);function VectorDebugger(){var e;Object(u.a)(this,VectorDebugger);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onKeyDown=function(t){if("v"===t.key){var n=e.queries.vectorDebugStates.results[0].getMutableComponent(ge);n.enabled=!n.enabled}},e}return Object(W.a)(VectorDebugger,[{key:"execute",value:function execute(e,t){}}]),VectorDebugger}(l.b);Me.queries={vectorDebugStates:{components:[ge]}};var De=Me,xe=function(e){Object(m.a)(CameraPanner,e);var t=Object(p.a)(CameraPanner);function CameraPanner(){var e;Object(u.a)(this,CameraPanner);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).panning={up:!1,right:!1,down:!1,left:!1},e.onKeyDown=function(t){"w"===t.key&&(e.panning.up=!0),"d"===t.key&&(e.panning.right=!0),"s"===t.key&&(e.panning.down=!0),"a"===t.key&&(e.panning.left=!0)},e.onKeyUp=function(t){"w"===t.key&&(e.panning.up=!1),"d"===t.key&&(e.panning.right=!1),"s"===t.key&&(e.panning.down=!1),"a"===t.key&&(e.panning.left=!1)},e}return Object(W.a)(CameraPanner,[{key:"execute",value:function execute(e,t){var n=this.queries.cameras.results[0],r=n.getMutableComponent(pe).panSpeed,o=n.getMutableComponent(T).position,a=new C((this.panning.left?1:0)+(this.panning.right?-1:0),(this.panning.up?1:0)+(this.panning.down?-1:0)).multiplyScalarMut(r*e/1e3);o.addMut(a)}}]),CameraPanner}(l.b);xe.queries={cameras:{components:[pe,T]}};var ke=xe,Ee={friendly:"#59cd90",enemy:"#c73e1d",projectile:"#ffe74c",background:"#545e75",selection:"#57b8ff"},Ae=function Game(e){var t=this,n=e.canvas;Object(u.a)(this,Game),this.world=void 0,this.lastTime=void 0,this.animationFrameRequest=void 0,this.start=function(){t.createCamera(),t.createVectorDebugState();for(var e=0;e<10;e++)t.createFriendly(50+50*e,500),t.createEnemy(50+50*e,100);t.run()},this.stop=function(){t.animationFrameRequest&&cancelAnimationFrame(t.animationFrameRequest)},this.onKeyDown=function(e){t.vectorDebugger().onKeyDown(e),t.cameraPanner().onKeyDown(e)},this.onKeyUp=function(e){t.cameraPanner().onKeyUp(e)},this.onMouseDown=function(e){t.destinationSetter().onMouseDown(e),t.selector().onMouseDown(e),t.rectangleSelector().onMouseDown(e)},this.onMouseMove=function(e){return t.rectangleSelector().onMouseMove(e)},this.onMouseUp=function(e){return t.rectangleSelector().onMouseUp(e)},this.createCamera=function(){t.world.createEntity().addComponent(pe,{panSpeed:500}).addComponent(T,{position:new C(0,0)})},this.createEnemy=function(e,n){var r=Ee.enemy,o=new C(e,n),a=Ee.projectile;t.world.createEntity().addComponent(f,{projectileColor:a,projectileSpeed:200,projectileLifetime:1800,projectileDamage:10,minimumRefactoryPeriod:500}).addComponent(h,{radius:10,color:r}).addComponent(v).addComponent(A,{health:100,maxHealth:100}).addComponent(T,{position:o}).addComponent(B,{name:"Enemy"})},this.createFriendly=function(e,n){var r=Ee.friendly,o=new C,a=new C(e,n),i=Ee.projectile;t.world.createEntity().addComponent(f,{projectileColor:i,projectileSpeed:200,projectileLifetime:1800,projectileDamage:10,minimumRefactoryPeriod:500}).addComponent(h,{radius:10,color:r}).addComponent(v).addComponent(A,{health:100,maxHealth:100}).addComponent(V,{direction:o,maxSpeed:100,separation:30,minSeparation:20}).addComponent(T,{position:a}).addComponent(I).addComponent(B,{name:"Friendly"})},this.createVectorDebugState=function(){t.world.createEntity().addComponent(ge)},this.run=function(){var e=performance.now(),n=e-t.lastTime;t.world.execute(n,e),t.lastTime=e,t.animationFrameRequest=requestAnimationFrame(t.run)},this.cameraPanner=function(){return t.world.getSystem(ke)},this.destinationSetter=function(){return t.world.getSystem(te)},this.rectangleSelector=function(){return t.world.getSystem(de)},this.renderer=function(){return t.world.getSystem(ve)},this.selector=function(){return t.world.getSystem(ye)},this.vectorDebugger=function(){return t.world.getSystem(De)},this.lastTime=performance.now(),this.animationFrameRequest=null,this.world=(new l.e).registerSystem(G).registerSystem(_).registerSystem(ke).registerSystem(te).registerSystem(ae).registerSystem(re).registerSystem(ce).registerSystem(de).registerSystem(ve,{canvas:n,colors:Ee}).registerSystem(ye).registerSystem(we).registerSystem(De).registerComponent(f).registerComponent(pe).registerComponent(h).registerComponent(v).registerComponent(b).registerComponent(O).registerComponent(M).registerComponent(D).registerComponent(k).registerComponent(A).registerComponent(P).registerComponent(V).registerComponent(T).registerComponent(L).registerComponent(I).registerComponent(B).registerComponent(ge)},qe=(n(38),function App(){var e=o.a.useState(null),t=Object(c.a)(e,2),n=t[0],r=t[1],a=o.a.useRef(null);o.a.useEffect((function(){if(n)return a.current=new Ae({canvas:n}),a.current.start(),function(){var e;null===(e=a.current)||void 0===e||e.stop(),a.current=null}}),[n]),o.a.useEffect((function(){var e=function handleResize(){n&&(n.width=window.innerWidth,n.height=window.innerHeight)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n]);return Object(s.a)((function(){return!0}),(function(e){var t;return null===(t=a.current)||void 0===t?void 0:t.onKeyDown(e)}),{event:"keydown"}),Object(s.a)((function(){return!0}),(function(e){var t;return null===(t=a.current)||void 0===t?void 0:t.onKeyUp(e)}),{event:"keyup"}),o.a.createElement("div",{className:"App"},o.a.createElement("canvas",{ref:r,onMouseDown:function onMouseDown(e){var t;e.preventDefault(),e.stopPropagation(),null===(t=a.current)||void 0===t||t.onMouseDown(e)},onMouseMove:function onMouseMove(e){var t;return null===(t=a.current)||void 0===t?void 0:t.onMouseMove(e)},onMouseUp:function onMouseUp(e){var t;return null===(t=a.current)||void 0===t?void 0:t.onMouseUp(e)},onContextMenu:function onContextMenu(e){return e.preventDefault()}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(qe,null)),document.getElementById("root")),function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}()}},[[30,1,2]]]);
//# sourceMappingURL=main.4a4e4760.chunk.js.map