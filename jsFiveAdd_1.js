let grabY;
let drawX, drawY;

let move_stand = {

    1 : 73,
    2 : 133,
    3 : 191,
    4 : 250,
    5 : 307,
    6 : 365,
    7 : 424,
   
   };
   
   let move_right = {
   
       1 : 0,
       2 : 59,
       3 : 116,
       4 : 174,
       5 : 231,
       6 : 288,
       7 : 346,
       8 : 404,
       9 : 471,

    };

let move_sit = {
    1 : 974,
    2 : 1030,
    3 : 1114,
    grab1Y : 13,
    grab2Y : 37,
    grab3Y : 53,
    draw_x1 : 45,
    draw_y1 : 89,
    draw_x2 : 45,
    draw_y2 : 65,
    draw_x3 : 44,
    draw_y3 : 49,

}

let move_blockSit = {
    1 : 831,
    2 : 1200,
    grab1Y : 889,
    grab2Y : 33,
    draw_x1 : 41,
    draw_y1 : 55,
    draw_x2 : 41,
    draw_y2 : 69,
}

let move_raise = {
    1 : 565,
    grab1Y : 158,
    draw_x1 : 43,
    draw_y1 : 73,
}

let move_fall = {
    1 : 619,
    grab1Y : 124,
    draw_x1 : 45,
    draw_y1 : 107,
}

let move_endFall = {
    1 : 675,
    grab1Y : 141,
    draw_x1 : 41,
    draw_y1 : 90,
}


let scorpion = document.getElementById('scorpion');
let scorpion_M = document.getElementById('scorpion_M');
let background = document.getElementById('background');

 function moveRight_ (image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight ){
    ctx.drawImage(scorpion, frame, 128, 54, 103, purpleX, purpleY, 51, -103);
} 
function moveLeft_ (image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight ){
    ctx.drawImage(scorpion, frame, 128, 54, 103, purpleX, purpleY, 51, -103);
} 

 function moveStand_ (image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
    ctx.drawImage(scorpion, frame, 3, 54, 98,  purpleX, purpleY, 51, -98);
} 

function moveSit_ (image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
    ctx.drawImage(scorpion, frame, grabY, drawX, drawY,  purpleX, purpleY, drawX, -drawY);
} 

function moveBlockSit_ (image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
    ctx.drawImage(scorpion, frame, grabY, drawX, drawY,  purpleX, purpleY, drawX, -drawY);
} 

function moveJumpRaise_(image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
    ctx.drawImage(scorpion, 565, 158, 43, 73,  purpleX, purpleY, 43, -73);
} 

function moveJumpFall_(image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
    ctx.drawImage(scorpion, frame, grabY, drawX, drawY,  purpleX, purpleY, drawX, -drawY);
} 

function moveJumpEnd_(image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
    ctx.drawImage(scorpion, 675, 141, 41, 90,  purpleX, purpleY, 41, -90);
} 