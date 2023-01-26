
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scipts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0NBbElELEFBa0lDLENBbElxQyxFQUFFLENBQUMsU0FBUyxHQWtJakQ7a0JBbElvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEVzdHJlbGxhUHJlZmFiOmNjLlByZWZhYiAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEFzdGVyb2lkZVByZWZhYjpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4RHVyYWNpb25Fc3RyZWxsYTpudW1iZXIgID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWluRHVyYWNpb25Fc3RyZWxsYTogbnVtYmVyICA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE5hdmU6Y2MuTm9kZSAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBOYXZlMjpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIER1cmFjaW9uRXN0cmVsbGE6IG51bWJlcjtcclxuICAgIFxyXG4gICAgdGltZXJFc3RyZWxsYTogbnVtYmVyO1xyXG4gICAgdGltZXJBc3Rlcm9pZGU6IG51bWJlcjtcclxuICAgIENvbGlzaW9uQXN0ZXJvaWRlOiBib29sZWFuO1xyXG4gICAgcGxheWVyU2NvcmU6bnVtYmVyID0gMDtcclxuICAgIHRpbWVyOiBudW1iZXI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmU6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGdhaW5TY29yZUVzdHJlbGxhKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSArPSAxMDtcclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9ICdTY29yZTogJysgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhaW5TY29yZSgpe1xyXG4gICAgICAgIHRoaXMucGxheWVyU2NvcmUgKz0gMTtcclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9ICdTY29yZTogJysgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lckVzdHJlbGxhID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVyQXN0ZXJvaWRlID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lcj0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5EdXJhY2lvbkVzdHJlbGxhID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5EaWJ1amFyTnVldmFFc3RyZWxsYSgpO1xyXG4gICAgICAgIHRoaXMuRGlidWphck51ZXZvQXN0ZXJvaWRlKCk7XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnR2FtZScpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBEaWJ1amFyTnVldm9Bc3Rlcm9pZGUoKXtcclxuICAgICAgICB2YXIgbnVldm9Bc3Rlcm9pZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFzdGVyb2lkZVByZWZhYik7XHJcblxyXG4gICAgICAgbnVldm9Bc3Rlcm9pZGUuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikucG9pbnRzOyBcclxuICAgICAgIG51ZXZvQXN0ZXJvaWRlLmdyb3VwID0gJ0FzdGVyb2lkZSc7XHJcbiAgICAgICBudWV2b0FzdGVyb2lkZS5zZXRQb3NpdGlvbih0aGlzLmdldE51ZXZhUG9zaWNpb25Bc3Rlcm9pZGUoKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG51ZXZvQXN0ZXJvaWRlKTtcclxuXHJcbiAgICAgICB0aGlzLnRpbWVyQXN0ZXJvaWRlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXROdWV2YVBvc2ljaW9uQXN0ZXJvaWRlKCl7XHJcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcclxuICAgICAgICB2YXIgbWF4WCAgPSB0aGlzLm5vZGUud2lkdGgvMjtcclxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpICogLTQwMCkgLSA1MDtcclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsNjQwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgRGlidWphck51ZXZhRXN0cmVsbGEoKXtcclxuICAgICAgICB2YXIgbnVldmFFc3RyZWxsYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuRXN0cmVsbGFQcmVmYWIpO1xyXG4gICAgICAgIG51ZXZhRXN0cmVsbGEuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikucG9pbnRzO1xyXG4gICAgICAgIG51ZXZhRXN0cmVsbGEuZ3JvdXAgPSAnRXN0cmVsbGEnO1xyXG4gICAgICAgIG51ZXZhRXN0cmVsbGEuc2V0UG9zaXRpb24odGhpcy5nZXROdWV2YVBvc2ljaW9uRXN0cmVsbGEoKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG51ZXZhRXN0cmVsbGEpO1xyXG5cclxuICAgICAgICB0aGlzLkR1cmFjaW9uRXN0cmVsbGEgPSB0aGlzLm1pbkR1cmFjaW9uRXN0cmVsbGEgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4RHVyYWNpb25Fc3RyZWxsYS10aGlzLm1pbkR1cmFjaW9uRXN0cmVsbGEpO1xyXG4gICAgICAgIHRoaXMudGltZXJFc3RyZWxsYSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVldmFQb3NpY2lvbkVzdHJlbGxhKCl7XHJcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcclxuICAgICAgICB2YXIgcmFuZFkgPSAwO1xyXG4gICAgICAgIHJhbmRYID0gKE1hdGgucmFuZG9tKCkqIDQ2MCkgICsgMTA7XHJcbiAgICAgICAgcmFuZFkgPSAoTWF0aC5yYW5kb20oKSogNjAwKSAgLSAzMDA7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLHJhbmRZKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQ29sbGlzaW9uQXN0ZXJvaWRlKCl7XHJcbiAgICAgICAgdGhpcy5Db2xpc2lvbkFzdGVyb2lkZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnYW1lT3Zlcigpe1xyXG4gICAgICAgIHRoaXMuTmF2ZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuTmF2ZTIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIGlmKHRoaXMudGltZXJFc3RyZWxsYT50aGlzLkR1cmFjaW9uRXN0cmVsbGEpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuQ29saXNpb25Bc3Rlcm9pZGUpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXJBc3Rlcm9pZGUgPj0gMC43KXtcclxuICAgICAgICAgICAgdGhpcy5EaWJ1amFyTnVldm9Bc3Rlcm9pZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50aW1lciA+PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5nYWluU2NvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgdGhpcy50aW1lckVzdHJlbGxhICs9IGR0O1xyXG4gICAgICAgIHRoaXMudGltZXJBc3Rlcm9pZGUgKz0gZHQ7XHJcbiAgICB9ICBcclxufVxyXG4iXX0=