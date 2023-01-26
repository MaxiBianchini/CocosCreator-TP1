// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    EstrellaPrefab:cc.Prefab  = null;
    @property(cc.Prefab)
    AsteroidePrefab:cc.Prefab = null;

    @property
    maxDuracionEstrella:number  = 0;
    @property
    minDuracionEstrella: number  = 0;
    @property(cc.Node)
    Nave:cc.Node  = null;
    @property(cc.Node)
    Nave2:cc.Node = null;

    @property
    DuracionEstrella: number;
    
    timerEstrella: number;
    timerAsteroide: number;
    ColisionAsteroide: boolean;
    playerScore:number = 0;
    timer: number;

    @property(cc.Label)
    score:cc.Label = null;

    gainScoreEstrella(){
        this.playerScore += 10;
        this.score.string = 'Score: '+ this.playerScore.toString();
    }

    gainScore(){
        this.playerScore += 1;
        this.score.string = 'Score: '+ this.playerScore.toString();
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.timerEstrella = 0;
        this.timerAsteroide = 0;

        this.timer= 0;

        this.DuracionEstrella = 0;

        this.DibujarNuevaEstrella();
        this.DibujarNuevoAsteroide();

        cc.director.preloadScene('Game');

        this.playerScore = 0;
    }

    DibujarNuevoAsteroide(){
        var nuevoAsteroide = cc.instantiate(this.AsteroidePrefab);

       nuevoAsteroide.getComponent(cc.PolygonCollider).points; 
       nuevoAsteroide.group = 'Asteroide';
       nuevoAsteroide.setPosition(this.getNuevaPosicionAsteroide());
        this.node.addChild(nuevoAsteroide);

       this.timerAsteroide = 0;
    }

    getNuevaPosicionAsteroide(){
        var randX = 0;
        var maxX  = this.node.width/2;
        randX = (Math.random() * -400) - 50;
        return cc.v2(randX,640);

    }

    DibujarNuevaEstrella(){
        var nuevaEstrella = cc.instantiate(this.EstrellaPrefab);
        nuevaEstrella.getComponent(cc.PolygonCollider).points;
        nuevaEstrella.group = 'Estrella';
        nuevaEstrella.setPosition(this.getNuevaPosicionEstrella());
        this.node.addChild(nuevaEstrella);

        this.DuracionEstrella = this.minDuracionEstrella + Math.random() * (this.maxDuracionEstrella-this.minDuracionEstrella);
        this.timerEstrella = 0;
        
    }

    getNuevaPosicionEstrella(){
        var randX = 0;
        var randY = 0;
        randX = (Math.random()* 460)  + 10;
        randY = (Math.random()* 600)  - 300;
        return cc.v2(randX,randY);

    }

    CollisionAsteroide(){
        this.ColisionAsteroide = true;
    }

    start () {

    }

    gameOver(){
        this.Nave.stopAllActions();
        this.Nave2.stopAllActions();
        cc.director.loadScene('Menu');
    }

    update(dt){
        if(this.timerEstrella>this.DuracionEstrella){
            this.gameOver();
            return;
        }
        if (this.ColisionAsteroide){
            this.gameOver();
            return;
        }
        if (this.timerAsteroide >= 0.7){
            this.DibujarNuevoAsteroide();
        }
        if(this.timer >= 1){
            this.gainScore();
            this.timer = 0;
        }
        this.timer += dt;
        this.timerEstrella += dt;
        this.timerAsteroide += dt;
    }  
}
