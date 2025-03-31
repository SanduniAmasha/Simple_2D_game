var girl = document.getElementById("girl");

idleNumber = 0;
animationNumber = 0;

function idleAnimation() {
    idleNumber = idleNumber + 1;

    if (idleNumber == 11) {

        idleNumber = 1;
    }

    girl.src = "Idle (" + idleNumber + ").png";
}

function idleAnimationStart() {
    animationNumber = setInterval(idleAnimation, 200);

}


function key(event){

    if (event.which == 13){ //Enter
        
        if (rw == 0) {
            
            fid = f();

            rw = setInterval(run, 100);
            rs.play();
            clearInterval(animationNumber);

            bw = setInterval(background, 100);

            sw = setInterval(updateScore, 100);

            fw = setInterval(move, 100);
            
        }
    }

    if (event.which == 32) { //Enter

        if (jw == 0){

            clearInterval(rw);
            rs.pause();
            clearInterval(animationNumber);

            rw = -1;

            jw = setInterval(jump, 100);
            js.play();
        }
    }
}

var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3");

var ds = new Audio("dead.mp3");


var fid = 0;

var m = 800;

function f(){

    for (var y = 0; y < 10;y++) {

        var i = document.createElement("img");
        i.src = "dragon.gif";
        i.className = "i";
    
        i.style.marginLeft = m + "px";


        if ( y <= 5){
            m = m + 800;
        }


        if ( y>= 6){
            m = m + 500;
        }
        

        i.id = "a" + y;
    
        document.getElementById("b").appendChild(i);
    }
}

var rw = 0;

var r = 1;

function run(){

    var rimg = document.getElementById("girl");

    r = r + 1;

    if (r == 9) {
        r = 1;
    }

    rimg.src = "Run (" + r + ").png";

}


var bw = 0;

var b = 0;

function background(){

    var bimg = document.getElementById("b");

    b = b - 20;

    bimg.style.backgroundPositionX = b + "px";
}


var sw = 0;

var a = 0;

function updateScore() {

    a = a + 10;

    document.getElementById("score").innerHTML = a;
}



var fw = 0;

function move(){
    for (var y = 0; y < 10; y++){

        var z = getComputedStyle(document.getElementById("a" + y));

        var p = parseInt(z.marginLeft);

        p = p - 20;

        document.getElementById("a" + y).style.marginLeft = p + "px";


        //60   140

        //250

        if(p >= 0 & p <= 100){

            if(mt > 250){

                clearInterval(rw);
                rs.pause();

                clearInterval(jw);
                jw = -1;

                clearInterval(sw);

                clearInterval(bw);

                clearInterval(fw);

                dw = setInterval(dead, 100);
                ds.play();

            }
        }
    }
}


 
var jw = 0;

var j = 1;

var mt = 320;

function jump(){

    var jimg = document.getElementById("girl");

    if (j<= 5){
        mt = mt - 45;
    }

    if(j>= 6){
        mt = mt + 45;
    }

    jimg.style.marginTop = mt + "px";



    j = j + 1;

    if (j == 11){
        j = 1;

        clearInterval(jw);


        rw = setInterval(run, 100);
        rs.play();

        jw = 0;

        if(fid == 0){
            fid = f();
        }

        if (fw == 0) {
            fw = setInterval(move, 100);
        }

        if (sw == 0) {
            sw = setInterval(updateScore, 100);
        }

        if (bw == 0) {
            bw = setInterval(background, 100);
        }

    }

    jimg.src = "Jump ("+j+").png";

}


var dw = 0;

var d = 1;

function dead() {

    var dimg = document.getElementById("girl");

    d = d + 1;

    if (d == 11){
        d = 10;

        clearInterval(dw);

        dimg.style.marginTop = "320px";

        document.getElementById("end").style.visibility = "visible";

        document.getElementById("endgame").innerHTML = a;
    }

    dimg.src = "Dead ("+d+").png";
}

function re(){
    location.reload();
}