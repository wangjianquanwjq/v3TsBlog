// 画笔
let ctx: any
// 画布的宽高
let w = window.innerWidth
let h = window.innerHeight
// 存放雨滴的数组
let arr: Array<any>
// 雨滴的数量
let size = 150
// 雨滴的构造函数
class Rain {
    x = random(w);
    y = random(h);
    ySpeed = random(2) + 5;
    show() {
        drawLine(this.x, this.y);
    }
    run() {
        if (this.y > h) {
            this.y = 0;
            this.x = random(w);
        }
        this.y = this.y + this.ySpeed;
    }
}
// 画线（雨滴）
const drawLine = (x1: number, y1: number) => {
    ctx.beginPath();
    ctx.strokeStyle = "#cccccc";
    ctx.moveTo(x1, y1);
    // 雨长度为30
    ctx.lineTo(x1, y1 + 30);
    ctx.stroke();
}
// 生成随机数
const random = (num: number) => {
    return Math.random() * num;
}
// 开始
const start = () => {
    for (var i = 0; i < size; i++) {
        var rain = new Rain();
        arr.push(rain);
        rain.show();
    }
    setInterval(() => {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < size; i++) {
            arr[i].show();
            arr[i].run();
        }
    }, 10);
}
const init = (ctx1: any) => {
    ctx = ctx1;
    start();
}
export { init };