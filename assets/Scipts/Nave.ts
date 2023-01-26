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
    MoverArriba:number = 0;
    MoverAbajo:number = 0;
 
    // LIFE-CYCLE CALLBACKS:
    MoverPlayer(event){
        switch(event.keyCode){
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
                break;
        }
    }

    PararPlayer(event){
        switch(event.keyCode){
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

        if(this.node.x >= 40){
            if(this.MoverIzquierda == 1){
                this.node.setPosition(this.node.position.x -= 300*dt,this.node.position.y);
            }
        }
        if(this.node.x <= 450){
            if(this.MoverDerecha == 1){
                this.node.setPosition(this.node.position.x += 300*dt,this.node.position.y);
            }
        }
        if(this.node.y <= 265){
            if(this.MoverArriba == 1){
                this.node.setPosition(this.node.position.x,this.node.position.y += 300*dt);
            }
        }
        if(this.node.y >= -270){
            if(this.MoverAbajo == 1){
                this.node.setPosition(this.node.position.x,this.node.position.y -= 300*dt);
            }
        }
        
    }
}