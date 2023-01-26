// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    Destruir(){
        if(this.node.getPosition().y > 0){
            this.node.destroy();
        }
    }

    // LIFE-CYCLE CALLBACKS:
    onCollisionEnter(otherCollider,selfCollider){
        if(selfCollider.name == 'Asteroide<PolygonCollider>' && otherCollider.name == 'Nave2<PolygonCollider>'){
            this.node.parent.getComponent('Game').CollisionAsteroide();
            this.node.destroy();  
        }
    }

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }

    start () {}

    update (dt) {
       this.node.setPosition(this.node.position.x,this.node.position.y  -= 300*dt); 
    }

    onDestroy(){}
}
