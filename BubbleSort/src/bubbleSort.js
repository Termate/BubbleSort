var arrX, arrayTo, inputText, xmax, xmin, length;
var tegs = [];
var mass = [];
var i = 0;
var j = 0;
var next = document.getElementById('next');
inputText = document.getElementById('inputText');
var position = document.getElementById('list');


inputText.onkeypress = function (e) {
        check(e);
    }

function check(e) {
    var key = e.keyCode || e.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      e.returnValue = false;
      if(e.preventDefault) {
          e.preventDefault();
      }
    }else{
      mass.push(key);
      addP(mass)
       }
  }

function addP(x) {
 for (var i = 0; i < x.length; i++) {
    var p = document.createElement('p');
    p.className = "pclass";
    p.innerHTML = x[i];
    styleForm(x[i], p);

 }
 toBlue()
 position.appendChild(p);
 tegs = document.getElementsByTagName('p'); 
 length = tegs.length;
}


function toBlue(){

setTimeout(function() {
  var quer = document.getElementsByClassName('pclass')
   for (var i=0; i<quer.length; i++) {
    quer[i].style.backgroundColor = "#49ccf9";
  } }, 200);

}

function styleForm(x, p) {

    if (x == 0) {
      p.style.height = "10px";
      p.style.backgroundColor = "#c7240c";
    }else{
      p.style.height = 20 * x + "px";
      p.style.backgroundColor = "#c7240c";
      }
}

function sort() {


    if (i < length) {
      if (j < length - 1) {
        if (tegs[j].innerHTML > tegs[j + 1].innerHTML) {

          tegs[j].style.left = '10px';
          tegs[j+1].style.left = '-10px';

          setTimeout(function() {
            tegs[j-1].style.left = '0px';
            tegs[j].style.left = '0px';
            xmax = tegs[j-1].innerHTML;
            xmin = tegs[j].innerHTML;
            tegs[j].innerHTML = xmax;
            tegs[j-1].innerHTML = xmin;
            styleForm(xmax, tegs[j]);
            styleForm(xmin, tegs[j-1]);
          },60);

          tegs[j].style.backgroundColor = "#c7240c";
          tegs[j+1].style.backgroundColor = "#c7240c";

          setTimeout(function() {
            tegs[j].style.backgroundColor = '#49ccf9';
            tegs[j-1].style.backgroundColor = '#49ccf9';
          }, 200);

        }
        j++;
      }

    }else{
      i = 0;
      j = 0;
    }
    i++;
  if (i == length){
    length-=1;
  }
}
