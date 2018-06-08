var arrX;
var arrayTo;
var tegs = [];
var i = 0;
var j = 0;

function check(input) {
    var value = input.value;
    var rep = /[-\.;":,'a-zA-Zа-яА-Я]/;
    var x = toNumber();
    arrX = x;
    addP(arrX);
    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }
}


function toNumber(x) {
  var inputText = document.getElementById('inputText').value;
  var x = inputText.split('')
  for (var i=0; i<x.length; i++) {
    x[i] = x[i]*1;
  }
  return x;
}

function addP(x) {
 for (var i = 0; i < x.length; i++) {
    var p = document.createElement('p');
    p.className = "pclass";
    p.id = x[i];
    p.innerHTML = x[i];
    console.log(p.innerHTML);
    styleForm(x[i], p);
    var position = document.getElementById('list');
 }
 position.appendChild(p);
 tegs = document.getElementsByTagName('p'); 
 arrayTo = toNumber();
}

//стили
function styleForm(x, p) {
    if (x == 0) {
      p.style.height = "10px";
      p.style.backgroundColor = "#49ccf9";
      // p.style.border = '1px', solid, black;
    }else{
      p.style.height = 20 * x + "px";
      p.style.backgroundColor = "#49ccf9";
      // p.style.border = '1px', solid, black;
      }
}


function sort() {
  if (i < arrayTo.length) {
    if (j < arrayTo.length - 1) {
      if (arrayTo[j] > arrayTo[j + 1]) {
        var max = arrayTo[j];
        var min = arrayTo[j + 1];
        arrayTo[j] = min;
        arrayTo[j + 1] = max;
        change(min, max)
      }
      j++;
    }
  }else{
    i = 0;
    j = 0;
  }
  i++;
  console.log(arrayTo)
}

function change(a, b) {
  console.log('change a '+a);
  console.log('change b '+b);
  var sp1 = document.getElementById(a);
  var sp2 = document.getElementById(b);
  var parentDiv = sp2.parentNode;
  parentDiv.insertBefore(sp1, sp2);
}





















//=======
