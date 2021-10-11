var touchbox = document.getElementById("touchbox");
var colors = ["F00","0F0","00F","FF0","0FF","F0F"];
var colorsc = colors.length;

function winseizeline() {
    document.getElementById("swc").innerText = "W"+document.body.clientWidth;
    document.getElementById("shc").innerText = "H"+document.body.clientHeight;
}

function showline(e) {
    boxhtm = "";
    var nowcolor = 0;
    [].forEach.call(e.targetTouches,function(touch){
        const timestamp = Date.parse(new Date());
        const tcolor = colors[nowcolor];
        const x = touch.pageX.toFixed(0);
        const y = touch.pageY.toFixed(0);
        boxhtm += '<div class="pline wline" id="wline'+timestamp+'" style="top:'+y+'px;background-color:#'+tcolor+';color:#'+tcolor+';"><code>Y'+y+'</code></div>';
        boxhtm += '<div class="pline hline" id="hline'+timestamp+'" style="left:'+x+'px;background-color:#'+tcolor+';color:#'+tcolor+';"><code>X'+x+'</code></div>';
        nowcolor++;
        if (nowcolor >= colorsc) {
            nowcolor = 0;
        }
    });
    touchbox.innerHTML = boxhtm;
}

document.addEventListener('mousemove',function(e){
    boxhtm = "";
    const timestamp = Date.parse(new Date());
    const x = e.pageX.toFixed(0);
    const y = e.pageY.toFixed(0);
    boxhtm += '<div class="pline wline" id="wline'+timestamp+'" style="top:'+y+'px;background-color:#FFF;color:#FFF"><code>Y'+y+'</code></div>';
    boxhtm += '<div class="pline hline" id="hline'+timestamp+'" style="left:'+x+'px;background-color:#FFF;color:#FFF"><code>X'+x+'</code></div>';
    touchbox.innerHTML = boxhtm;
},false);

window.addEventListener("resize", function () {
    winseizeline();
}, false);

document.addEventListener('touchstart',function(e){
    showline(e);
},false);

document.addEventListener('touchmove',function(e){
    showline(e);
},false);

winseizeline();
