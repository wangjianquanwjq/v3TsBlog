// 画笔
var ctx;
// 画布的宽高
var wh = window.innerWidth;
var ht = window.innerHeight;
// 存放雨滴的数组
var arr = [];
// 雨滴的数量
var size = 150;
// 雨滴的构造函数
class Rain {
    x = random(wh);
    y = random(ht);
    ySpeed = random(2) + 5;
    show() {
        drawLine(this.x, this.y);
    }
    run() {
        if (this.y > ht) {
            this.y = 0;
            this.x = random(wh);
        }
        this.y = this.y + this.ySpeed;
    }
}
// 画线（雨滴）
function drawLine(x1, y1) {
    ctx.beginPath();
    ctx.strokeStyle = "#ddd";
    ctx.moveTo(x1, y1);
    // 雨长度为30
    ctx.lineTo(x1, y1 + 15);
    ctx.stroke();
}
// 生成随机数
function random(num) {
    return Math.random() * num;
}
// 开始
function start() {
    for (var i = 0; i < size; i++) {
        var rain = new Rain();
        arr.push(rain);
        rain.show();
    }
    setInterval(() => {
        ctx.clearRect(0, 0, wh, ht);
        for (var i = 0; i < size; i++) {
            arr[i].show();
            arr[i].run();
        }
    }, 10);
}
// 初始化
function initRain(ctx1) {
    ctx = ctx1;
    start();
}