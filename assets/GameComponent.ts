import { _decorator, Component, Node, EventMouse, input, Input, Color, profiler } from 'cc';
import { StrokeComponent } from './StrokeComponent';
const { ccclass, property } = _decorator;

@ccclass('GameComponent')
export class GameComponent extends Component {
    @property({type: StrokeComponent})
    public stroke: StrokeComponent | null = null;

    // start() {
    //     this.init();
    //     // input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    //     // input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
    //     // input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
    //     // this.init();
    // }

    onLoad() {
        // 去掉模拟器上的FPS信息
        profiler.hideStats();
        this.stroke = new StrokeComponent();
        console.log('this.stroke', this.stroke);
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        
        // console.log('new StrokeComponent()', new StrokeComponent());
        // if(this.stroke) {
        //     console.log('this.stroke', this.stroke);
        //     this.stroke.setBrushColor(Color.BLACK);
        //     this.stroke.setBrushLineWidth(2);
        //     input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        //     input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        // }
        
        // eraserWidth
    }

    // onMouseUp(event: EventMouse) {

    // }
    onMouseDown(event: EventMouse) {
        console.log(event.getLocation());
        // const pos = event.getLocation();
        // this.stroke.setBrushPos(pos.x, pos.y);
    }

    onMouseMove(event: EventMouse) {
        console.log(event.getLocation());
        // const pos = event.getLocation();
        // this.stroke.drawTo(pos.x, pos.y);
    }

    update(deltaTime: number) {
        
    }
}


