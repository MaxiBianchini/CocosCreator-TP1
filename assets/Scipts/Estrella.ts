// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    onCollisionEnter(otherCollider,selfCollider){
        if(selfCollider.name == 'Estrella<PolygonCollider>' && otherCollider.name == 'Nave<PolygonCollider>'){
            this.node.parent.getComponent('Game').gainScoreEstrella();
            this.node.parent.getComponent('Game').DibujarNuevaEstrella();
            this.node.destroy(); 
        }
    }

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

    }

    start () {}

    // update (dt) {}
    
    onDestroy(){}
}
