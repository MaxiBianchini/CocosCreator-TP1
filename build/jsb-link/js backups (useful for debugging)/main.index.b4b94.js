window.__require = function t(e, o, r) {
function n(c, s) {
if (!o[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var l = o[c] = {
exports: {}
};
e[c][0].call(l.exports, function(t) {
return n(e[c][1][t] || t);
}, l, l.exports, t, e, o, r);
}
return o[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < r.length; c++) n(r[c]);
return n;
}({
Asteroide: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ece13tUrfNNqbUKrcAhmFYH", "Asteroide");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.Destruir = function() {
this.node.getPosition().y > 0 && this.node.destroy();
};
e.prototype.onCollisionEnter = function(t, e) {
if ("Asteroide<PolygonCollider>" == e.name && "Nave2<PolygonCollider>" == t.name) {
this.node.parent.getComponent("Game").CollisionAsteroide();
this.node.destroy();
}
};
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {};
e.prototype.update = function(t) {
this.node.setPosition(this.node.position.x, this.node.position.y -= 300 * t);
};
e.prototype.onDestroy = function() {};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Estrella: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "03a3eANkMVPk6w68W8K0sy+", "Estrella");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCollisionEnter = function(t, e) {
if ("Estrella<PolygonCollider>" == e.name && "Nave<PolygonCollider>" == t.name) {
this.node.parent.getComponent("Game").gainScoreEstrella();
this.node.parent.getComponent("Game").DibujarNuevaEstrella();
this.node.destroy();
}
};
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {};
e.prototype.onDestroy = function() {};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Game: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4748fmqtKJA7aF7M6XDvurq", "Game");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.EstrellaPrefab = null;
e.AsteroidePrefab = null;
e.maxDuracionEstrella = 0;
e.minDuracionEstrella = 0;
e.Nave = null;
e.Nave2 = null;
e.playerScore = 0;
e.score = null;
return e;
}
e.prototype.gainScoreEstrella = function() {
this.playerScore += 10;
this.score.string = "Score: " + this.playerScore.toString();
};
e.prototype.gainScore = function() {
this.playerScore += 1;
this.score.string = "Score: " + this.playerScore.toString();
};
e.prototype.onLoad = function() {
this.timerEstrella = 0;
this.timerAsteroide = 0;
this.timer = 0;
this.DuracionEstrella = 0;
this.DibujarNuevaEstrella();
this.DibujarNuevoAsteroide();
cc.director.preloadScene("Game");
this.playerScore = 0;
};
e.prototype.DibujarNuevoAsteroide = function() {
var t = cc.instantiate(this.AsteroidePrefab);
t.getComponent(cc.PolygonCollider).points;
t.group = "Asteroide";
t.setPosition(this.getNuevaPosicionAsteroide());
this.node.addChild(t);
this.timerAsteroide = 0;
};
e.prototype.getNuevaPosicionAsteroide = function() {
var t;
this.node.width;
t = -400 * Math.random() - 50;
return cc.v2(t, 640);
};
e.prototype.DibujarNuevaEstrella = function() {
var t = cc.instantiate(this.EstrellaPrefab);
t.getComponent(cc.PolygonCollider).points;
t.group = "Estrella";
t.setPosition(this.getNuevaPosicionEstrella());
this.node.addChild(t);
this.DuracionEstrella = this.minDuracionEstrella + Math.random() * (this.maxDuracionEstrella - this.minDuracionEstrella);
this.timerEstrella = 0;
};
e.prototype.getNuevaPosicionEstrella = function() {
var t, e;
t = 460 * Math.random() + 10;
e = 600 * Math.random() - 300;
return cc.v2(t, e);
};
e.prototype.CollisionAsteroide = function() {
this.ColisionAsteroide = !0;
};
e.prototype.start = function() {};
e.prototype.gameOver = function() {
this.Nave.stopAllActions();
this.Nave2.stopAllActions();
cc.director.loadScene("Menu");
};
e.prototype.update = function(t) {
if (this.timerEstrella > this.DuracionEstrella) this.gameOver(); else if (this.ColisionAsteroide) this.gameOver(); else {
this.timerAsteroide >= .7 && this.DibujarNuevoAsteroide();
if (this.timer >= 1) {
this.gainScore();
this.timer = 0;
}
this.timer += t;
this.timerEstrella += t;
this.timerAsteroide += t;
}
};
i([ a(cc.Prefab) ], e.prototype, "EstrellaPrefab", void 0);
i([ a(cc.Prefab) ], e.prototype, "AsteroidePrefab", void 0);
i([ a ], e.prototype, "maxDuracionEstrella", void 0);
i([ a ], e.prototype, "minDuracionEstrella", void 0);
i([ a(cc.Node) ], e.prototype, "Nave", void 0);
i([ a(cc.Node) ], e.prototype, "Nave2", void 0);
i([ a ], e.prototype, "DuracionEstrella", void 0);
i([ a(cc.Label) ], e.prototype, "score", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
MenuButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e285bcH/5dC2Yry5W3wb2RZ", "MenuButton");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Game");
this.node.on("touchstart", function() {
cc.director.loadScene("Game");
});
};
e.prototype.start = function() {};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Nave2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b819d699LVDBpMursg3D61u", "Nave2");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.MoverIzquierda = 0;
e.MoverDerecha = 0;
return e;
}
e.prototype.MoverPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.a:
this.MoverIzquierda = 1;
break;

case cc.macro.KEY.d:
this.MoverDerecha = 1;
}
};
e.prototype.PararPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.a:
this.MoverIzquierda = 0;
break;

case cc.macro.KEY.d:
this.MoverDerecha = 0;
}
};
e.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.PararPlayer, this);
};
e.prototype.start = function() {};
e.prototype.update = function(t) {
this.node.x >= -450 && 1 == this.MoverIzquierda && this.node.setPosition(this.node.position.x -= 300 * t, this.node.position.y);
this.node.x <= -40 && 1 == this.MoverDerecha && this.node.setPosition(this.node.position.x += 300 * t, this.node.position.y);
};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Nave: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7332eofXoJH65UebH5KoVhq", "Nave");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.MoverIzquierda = 0;
e.MoverDerecha = 0;
e.MoverArriba = 0;
e.MoverAbajo = 0;
return e;
}
e.prototype.MoverPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.left:
this.MoverIzquierda = 1;
break;

case cc.macro.KEY.right:
this.MoverDerecha = 1;
break;

case cc.macro.KEY.up:
this.MoverArriba = 1;
break;

case cc.macro.KEY.down:
this.MoverAbajo = 1;
}
};
e.prototype.PararPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.left:
this.MoverIzquierda = 0;
break;

case cc.macro.KEY.right:
this.MoverDerecha = 0;
break;

case cc.macro.KEY.up:
this.MoverArriba = 0;
break;

case cc.macro.KEY.down:
this.MoverAbajo = 0;
}
};
e.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.PararPlayer, this);
};
e.prototype.start = function() {};
e.prototype.update = function(t) {
this.node.x >= 40 && 1 == this.MoverIzquierda && this.node.setPosition(this.node.position.x -= 300 * t, this.node.position.y);
this.node.x <= 450 && 1 == this.MoverDerecha && this.node.setPosition(this.node.position.x += 300 * t, this.node.position.y);
this.node.y <= 265 && 1 == this.MoverArriba && this.node.setPosition(this.node.position.x, this.node.position.y += 300 * t);
this.node.y >= -270 && 1 == this.MoverAbajo && this.node.setPosition(this.node.position.x, this.node.position.y -= 300 * t);
};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ]
}, {}, [ "Asteroide", "Estrella", "Game", "MenuButton", "Nave", "Nave2" ]);