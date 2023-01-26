"use strict";
cc._RF.push(module, '4748fmqtKJA7aF7M6XDvurq', 'Game');
// Scipts/Game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EstrellaPrefab = null;
        _this.AsteroidePrefab = null;
        _this.maxDuracionEstrella = 0;
        _this.minDuracionEstrella = 0;
        _this.Nave = null;
        _this.Nave2 = null;
        _this.playerScore = 0;
        _this.score = null;
        return _this;
    }
    NewClass.prototype.gainScoreEstrella = function () {
        this.playerScore += 10;
        this.score.string = 'Score: ' + this.playerScore.toString();
    };
    NewClass.prototype.gainScore = function () {
        this.playerScore += 1;
        this.score.string = 'Score: ' + this.playerScore.toString();
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.timerEstrella = 0;
        this.timerAsteroide = 0;
        this.timer = 0;
        this.DuracionEstrella = 0;
        this.DibujarNuevaEstrella();
        this.DibujarNuevoAsteroide();
        cc.director.preloadScene('Game');
        this.playerScore = 0;
    };
    NewClass.prototype.DibujarNuevoAsteroide = function () {
        var nuevoAsteroide = cc.instantiate(this.AsteroidePrefab);
        nuevoAsteroide.getComponent(cc.PolygonCollider).points;
        nuevoAsteroide.group = 'Asteroide';
        nuevoAsteroide.setPosition(this.getNuevaPosicionAsteroide());
        this.node.addChild(nuevoAsteroide);
        this.timerAsteroide = 0;
    };
    NewClass.prototype.getNuevaPosicionAsteroide = function () {
        var randX = 0;
        var maxX = this.node.width / 2;
        randX = (Math.random() * -400) - 50;
        return cc.v2(randX, 640);
    };
    NewClass.prototype.DibujarNuevaEstrella = function () {
        var nuevaEstrella = cc.instantiate(this.EstrellaPrefab);
        nuevaEstrella.getComponent(cc.PolygonCollider).points;
        nuevaEstrella.group = 'Estrella';
        nuevaEstrella.setPosition(this.getNuevaPosicionEstrella());
        this.node.addChild(nuevaEstrella);
        this.DuracionEstrella = this.minDuracionEstrella + Math.random() * (this.maxDuracionEstrella - this.minDuracionEstrella);
        this.timerEstrella = 0;
    };
    NewClass.prototype.getNuevaPosicionEstrella = function () {
        var randX = 0;
        var randY = 0;
        randX = (Math.random() * 460) + 10;
        randY = (Math.random() * 600) - 300;
        return cc.v2(randX, randY);
    };
    NewClass.prototype.CollisionAsteroide = function () {
        this.ColisionAsteroide = true;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.gameOver = function () {
        this.Nave.stopAllActions();
        this.Nave2.stopAllActions();
        cc.director.loadScene('Menu');
    };
    NewClass.prototype.update = function (dt) {
        if (this.timerEstrella > this.DuracionEstrella) {
            this.gameOver();
            return;
        }
        if (this.ColisionAsteroide) {
            this.gameOver();
            return;
        }
        if (this.timerAsteroide >= 0.7) {
            this.DibujarNuevoAsteroide();
        }
        if (this.timer >= 1) {
            this.gainScore();
            this.timer = 0;
        }
        this.timer += dt;
        this.timerEstrella += dt;
        this.timerAsteroide += dt;
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "EstrellaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "AsteroidePrefab", void 0);
    __decorate([
        property
    ], NewClass.prototype, "maxDuracionEstrella", void 0);
    __decorate([
        property
    ], NewClass.prototype, "minDuracionEstrella", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Nave", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Nave2", void 0);
    __decorate([
        property
    ], NewClass.prototype, "DuracionEstrella", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "score", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();