let carreElt = document.getElementById('carre');
let arrowElt = document.getElementById('arrow');

let carreYellowElt = document.getElementById('carre_yellow');
let carreOrangeElt = document.getElementById('carre_orange');
let carreRedElt = document.getElementById('carre_red');
let carrePurpleElt = document.getElementById('carre_purple');

let chronoValue = document.getElementById("chronotime");

let y=0;
let x=0;

let yRed = carreRedElt.style.top = "350px";
let xRed = carreRedElt.style.left = "425px";

let yYellow = 0;
let yYellowMax = 650;
let posMaxYellow = false;

let yOrange = 0;
let yOrangeMax = 650;
let posMaxOrange = false;

let yPurple = 350;
let xPurple = 425;
carrePurpleElt.style.top = yPurple+"px";
carrePurpleElt.style.left = xPurple+"px";
let yPurpleMin = 0;
let yPurpleMax = 650;
let xPurpleMin = 0;
let xPurpleMax = 850;
let purleMove = 0;
let posMaxPurpleY = false;
let posMinPurpleY = false;
let posMaxPurpleX = false;
let posMinPurpleX = false;

let startTime = 0;
let start = 0;
let end = 0;
let diff = 0;
let timerID = 0;

window.onload = setInterval(msgLose, 10);
window.onload = setInterval(msgWin, 10);
window.onload = setInterval(moveEnemy2, 80);
window.onload = setInterval(moveEnemy3, 200);
window.onload = setInterval(moveEnemy4, 50);

function moveUp(){
  if(y > 0){
    arrowElt.textContent = "↑";
    y = y-10;
    carreElt.style.top = y+"px";
  }
}

function moveDown(){
  if(y < 700){
    arrowElt.textContent = "↓";
    y = y+10;
    carreElt.style.top = y+"px";
  }
}

function moveLeft(){
  if(x>0){
    arrowElt.textContent = "←";
    x = x-10;
    carreElt.style.left = x+"px";
  }
}

function moveRight(){
  if(x < 900){
    arrowElt.textContent = "→";
    x = x+10;
    carreElt.style.left = x+"px";
  }
}

function msgWin(){
    if(y >= 200 && y <= 500 && x >= 890){
      window.alert('YOU WIN ! \nVotre temps : '+chronoValue.value);
      document.location.reload();
      x=0;
      y=0;
    }
}

function msgLose(){

  if(x > 425-95 &&  x < 425+145 ){
    if( y > 350-95 && y <350+145 ){
      window.alert('YOU LOSE ! \nVotre temps : '+chronoValue.value);
      document.location.reload();
      x=0;
      y=0;
    }
  }
  if(x > 200-95 &&  x < 200+145 ){
    if( y > yYellow-95 && y < yYellow+145 ){
      window.alert('YOU LOSE ! \nVotre temps : '+chronoValue.value);
      document.location.reload();
      x=0;
      y=0;
    }
  }
  if(x > 650-95 &&  x < 650+145 ){
    if( y > yOrange-95 && y < yOrange+145 ){
      window.alert('YOU LOSE ! \nVotre temps : '+chronoValue.value);
      document.location.reload();
      x=0;
      y=0;
    }
  }
  if(x > xPurple-95 &&  x < xPurple+145 ){
    if( y > yPurple-95 && y < yPurple+145 ){
      window.alert('YOU LOSE ! \nVotre temps : '+chronoValue.value);
      document.location.reload();
      x=0;
      y=0;
      yPurple = 325;
      xPurple = 450;
    }
  }
}


function moveEnemy2(){
  if( yYellow >= yYellowMax){
    posMaxYellow = true;
    }
  if( yYellow == 0){
    posMaxYellow = false;
  }

  if(posMaxYellow == false){
    yYellow = yYellow+50;
  }else{
    yYellow = yYellow-50;
  }
  carreYellowElt.style.top = yYellow+"px";
}

function moveEnemy3(){
  if( yOrange >= yOrangeMax){
    posMaxOrange = true;
    }
  if( yOrange == 0){
    posMaxOrange = false;
  }

  if(posMaxOrange == false){
    yOrange = yOrange+50;
  }else{
    yOrange = 0;
  }
  carreOrangeElt.style.top = yOrange+"px";
}

function moveEnemy4(){
  let offSetY = 0;
  let randomNumberY = Math.floor(Math.random() * 101);
  let moduloRandomNumberY = randomNumberY%2;
  let offSetX = 0;
  let randomNumberX = Math.floor(Math.random() * 101);
  let moduloRandomNumberX = randomNumberX%2;

  if(moduloRandomNumberY == 0){
    offSetY = 50;
  }else if(moduloRandomNumberY == 1){
    offSetY = -50;
  }

  if(moduloRandomNumberX == 0){
    offSetX = 50;
  }else if(moduloRandomNumberX == 1){
    offSetX = -50;
  }

  yPurple = yPurple+offSetY;
  xPurple = xPurple+offSetX;

  if( yPurple >= yPurpleMax){
    posMaxPurpleY = true;
    posMinPurpleY = false;
    }
  if( yPurple <= 0){
    posMaxPurpleY = false;
    posMinPurpleY = true;
  }
  if(xPurple >= xPurpleMax){
    posMaxPurpleX = true;
    posMinPurpleX = false;
  }
  if(xPurple <= 0){
    posMaxPurpleX = false;
    posMinPurpleX = true;
  }
  if(posMaxPurpleY == true){
    yPurple = yPurple-50;
  }
  if(posMinPurpleY == true){
    yPurple = yPurple+50;
  }
  if(posMaxPurpleX == true){
    xPurple = xPurple-50;
  }
  if(posMinPurpleX == true){
    xPurple = xPurple+50;
  }
  carrePurpleElt.style.top = yPurple+"px";
  carrePurpleElt.style.left = xPurple+"px";
}

document.addEventListener('keydown',function(e){
  if(e.key == 'q'){
    moveLeft();
  }
});

document.addEventListener('keydown',function(e){
  if(e.key == 'd'){
    moveRight();
  }
});

document.addEventListener('keydown',function(e){
  if(e.key == 'z'){
    moveUp();
  }
});

document.addEventListener('keydown',function(e){
  if(e.key == 's'){
    moveDown();
  }
});

//Chrono
window.onload = chronoStart;

function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	let msec = diff.getMilliseconds()
	let sec = diff.getSeconds()
	let min = diff.getMinutes()
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").value = min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
  chronoValue.textContent = chronoValue.value;
}

function chronoStart(){
	start = new Date()
	chrono()
}
