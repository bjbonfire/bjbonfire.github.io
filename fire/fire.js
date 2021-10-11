//NyarukoFire by kagurazakayashi@bjgouhuo

var timer;
const fire = $(".fire");
// const firedebug = $(".firedebug"); //DEBUG
var firei = 0;

const fire_mainspeed = 150; //主计时器速度
const fire_speed = 2000; //动画速度
const fire_hmin = 20; //最小长度
const fire_hmax = 70; //最大长度
const fire_wmin = 1; //最细尺寸
const fire_wmax = 7; //最粗尺寸
const fire_clry = 0.5; //最低开始消失位置百分比

$(function(){
    timer = setInterval(function(){
        fireanistart();
    },fire_mainspeed);
});
function fireanistart() {
    firei++;
    if (firei >= 65536) firei = 0;
    fire_startp();
}
function randomw() {
    return randomint(0,fire.width());
}
function randomint(min,max) {
    return parseInt(Math.random()*(max-min+1)+min);
}
function fire_startp() {
    const w = fire.width();
    const h = fire.height();
    var fx = randomint(0,w);
    var fw = randomint(fire_wmin,fire_wmax);
    var fh = randomint(fire_hmin,fire_hmax);
    var tx = randomint(0,w);
    var ty = randomint(0,h*fire_clry);
    var angle = getAngle(fx,h,tx,ty);
    var fstyle = "width:"+fw+"px;height:"+fh+"px;left:"+fx+"px;top:"+h+"px;opacity:1;transform:rotate("+angle+"deg);border-radius:"+fw+"px";
    var tstyle = {"left":tx,"top":ty,"opacity":0};
    var nid = "firechild" + firei;
    fire.append('<div class="firef" id="'+nid+'" style="'+fstyle+'">');
    var nobj = $("#"+nid);
    nobj.animate(tstyle,fire_speed,function() {
        this.remove();
    });
    // firedebugt(angle); //DEBUG
}
function getAngle(px,py,mx,my) {
    var x = Math.abs(px-mx);
    var y = Math.abs(py-my);
    var z = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
    var cos = y/z;
    var radina = Math.acos(cos);
    var angle = Math.floor(180/(Math.PI/radina));
    if (mx < px && my < py) angle = 360 - angle;
    return angle;
}
function firedebugt(nid) {
    const childrennum = fire.children().length;
    firedebug.html("<code>舞台元素数量:&nbsp;"+childrennum+"&emsp;已生成元素数量:&nbsp;"+firei+"&emsp;已卸载元素数量:&nbsp;"+(firei-childrennum)+"&emsp;当前元素方向:&nbsp;"+nid+"<code>");
}