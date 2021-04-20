// var main1;
// var greenBox = document.getElementById("main2");
// var greenBox2;
// main1 = document.getElementById("main1");
// console.log('1');
// console.log('2');
// main1.style.fontSize = "40px";
//
// main1.onmouseover = function () {
//     if (main1.style.fontSize == "50px"){
//         main1.style.fontSize = "40px";
//     }
//     else {
//         main1.style.fontSize = "50px";
//     }
//
// }
// greenBox2 = greenBox.style.height;
// console.log(greenBox2);

// var navigation = document.getElementById("navigation_id"),
//     first_but = document.getElementById("first_but");
// first_but.style.color = "blue";


// --------------animation ------------
// var fix_block1 = document.getElementById('fix_block');
//
// for (a = 1; a <= 2; ){
//     setInterval(function () {
//         fix_block1.style.left = +/\d+/.exec(fix_block1.style.left) + 1 + "px";
//     }, 500);
//     a++;
// }

//console.log(fix_block1.style.width);

// var obj = {name:"string"},
//     array = [1,2,3,"four"],
//     regexp = /w+/g,
//     func2 = function (){};
// console.log(typeof obj);
// console.log(typeof array);
// console.log(typeof regexp);
// console.log(typeof func2);
//
// var N = new Number(2000);
// console.log(N.toFixed(2));

let Star1 = document.getElementById('star1'),
    Star2 = document.getElementById('star2'),
    Star3 = document.getElementById('star3'),
    Star4 = document.getElementById('star4'),
    Star5 = document.getElementById('star5');


Star1.onmouseover = function (){
    Star1.style.opacity = 1;
    Star2.style.opacity = 0.2;
    Star3.style.opacity = 0.2;
    Star4.style.opacity = 0.2;
    Star5.style.opacity = 0.2;
}
Star2.onmouseover = function (){
    Star1.style.opacity = 1;
    Star2.style.opacity = 1;
    Star3.style.opacity = 0.2;
    Star4.style.opacity = 0.2;
    Star5.style.opacity = 0.2;
}
Star3.onmouseover = function () {
    Star1.style.opacity = 1;
    Star2.style.opacity = 1;
    Star3.style.opacity = 1;
    Star4.style.opacity = 0.2;
    Star5.style.opacity = 0.2;
}
Star4.onmouseover = function () {
    Star1.style.opacity = 1;
    Star2.style.opacity = 1;
    Star3.style.opacity = 1;
    Star4.style.opacity = 1;
    Star5.style.opacity = 0.2;
}
Star5.onmouseover = function () {
    Star1.style.opacity = 1;
    Star2.style.opacity = 1;
    Star3.style.opacity = 1;
    Star4.style.opacity = 1;
    Star5.style.opacity = 1;
}

let vacantionBlock = document.getElementById('vacantion_block'),
    mailBlock      = document.getElementById('mail_block'),
    butCancel = document.getElementById('but_cancel'),
    mailWrap = document.getElementById('mail_wrap');

butCancel.onclick = function () {
    mailWrap.style.display = "none";
}
mailBlock.onclick = function () {
    mailWrap.style.display = "flex";
}




let buttonOpenClose = document.getElementById('button_open_close'),
    interactiveMenu = document.getElementById('interactive_menu'),
    adButMenu = document.getElementById('ad_but_menu');

buttonOpenClose.onclick = function (){
    interactiveMenu.style.display = 'none';
    adButMenu.style.display = 'block';
}
adButMenu.onclick = function ( ) {
    adButMenu.style.display = 'none';
    interactiveMenu.style.display = 'flex';
}