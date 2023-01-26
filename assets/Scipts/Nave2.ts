// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    MoverIzquierda:number = 0;
    MoverDerecha:number = 0;
 
    // LIFE-CYCLE CALLBACKS:
    MoverPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.MoverIzquierda = 1;
                break;
            case cc.macro.KEY.d:
                this.MoverDerecha = 1;
                break;
        }
    }

    PararPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.MoverIzquierda = 0;
                break;
            case cc.macro.KEY.d:
                this.MoverDerecha = 0;
                break;
        }
    }
 
    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.MoverPlayer,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.PararPlayer,this);
    }
 
    start () {
 
    }
 
    update (dt) {
        if(this.node.x >= -450){
            if(this.MoverIzquierda == 1){
                this.node.setPosition(this.node.position.x -= 300*dt,this.node.position.y);
            }
        }
        if(this.node.x <= -40){
            if(this.MoverDerecha == 1){
                this.node.setPosition(this.node.position.x += 300*dt,this.node.position.y);
            }
        }
    }
}