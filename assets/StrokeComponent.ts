import { _decorator, Component, Node, Graphics, GraphicsComponent, input, Input, EventMouse, Color, profiler  } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StrokeComponent')
export class StrokeComponent extends Component {
    private brush: Graphics | null = null;
    start() {
        // input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        // input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }
    init() {
        this.brush = new GraphicsComponent();
        console.log('this.brush', this.brush);
    }

    onMouseDown(event: EventMouse) {
        const pos = event.getLocation();
        this.setBrushPos(pos.x, pos.y);
    }

    onMouseMove(event: EventMouse) {
        const pos = event.getLocation();
        this.drawTo(pos.x, pos.y);
    }

    setBrushPos(x:number, y:number) {
        this.brush.moveTo(x,y);
    }

    setBrushLineWidth(lineWidth: number) {
        this.brush.lineWidth = lineWidth;
        console.log('setBrushLineWidth this.brush', this.brush);
    }

    setBrushColor(color: Color) {
        console.log('setBrushColor this.brush', this.brush);
        console.log('setBrushColor color', color);
        // 设置笔刷颜色(包括边框颜色和填充颜色)
        // this.brush.strokeColor.set(color);
        this.brush.strokeColor = color;
        this.brush.fillColor = color;
    }
 
    drawTo (x:number, y:number) {
        // 从起始位置一直画到目标位置
        this.brush.lineTo(x, y);
        this.brush.stroke();
        this.brush.moveTo(x, y);
    }

    update(deltaTime: number) {
        
    }
}


