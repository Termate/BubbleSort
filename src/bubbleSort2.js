var arrX, arrayTo, inputText;
var tegs = [];
var mass = [];
var i = 0;
var j = 0;

inputText = document.getElementById('inputText');

inputText.onkeypress = function (e) {
        check(e);
    }

function check(e) {
    // var value = e.value;
    var key = e.keyCode || e.which;
    //метод fromCharCode возвращает элементарную строку, а не объект типа String.
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    //Чтобы выяснить, есть ли совпадения регулярного выражения со строкой используем test
    if( !regex.test(key) ) {
      e.returnValue = false;
      //Для отмены действия браузера существует стандартный метод event.preventDefault()
      if(e.preventDefault) {
          e.preventDefault();
      }
    }else{
      mass.push(key);
      addP(mass)
       }
  }

function toNumber(wx) {
  for (var i=0; i<mass.length; i++) {
    mass[i] = mass[i]*1;
  }
  // console.log(mass);
  return mass;
}


// создает элемент <p> и добавляет его в <div> с id ='list'
function addP(x) {
 for (var i = 0; i < x.length; i++) {
    var p = document.createElement('p');
    p.className = "pclass";
    p.id = ('s'+x[i]);
    p.innerHTML = x[i];
    // console.log(p.innerHTML);
    styleForm(x[i], p);
    var position = document.getElementById('list');//нахождение элемента <div>
 }
 start()
 position.appendChild(p);//добавляем в <div> элемент <p>
 tegs = document.getElementsByTagName('p'); //назодим все элементы по тегу
 arrayTo = toNumber();
// console.log(p)
}


//при каждом создании элемента должна сробатывать функция
function start(){
  var quer = document.getElementsByClassName('pclass')
   for (var i=0; i<quer.length; i++) {
    quer[i].style.backgroundColor = "#c7240c";
  };

setTimeout(function() {
  var quer = document.getElementsByClassName('pclass')
   for (var i=0; i<quer.length; i++) {
    quer[i].style.backgroundColor = "#49ccf9";
  } }, 200);

}


//стили
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
  if (i < arrayTo.length) {
    if (j < arrayTo.length - 1) {
      if (arrayTo[j] > arrayTo[j + 1]) {
        var max = arrayTo[j];
        var min = arrayTo[j + 1];
        arrayTo[j] = min;
        arrayTo[j + 1] = max;
        tegs[j].innerHTML = arrayTo[j];

        styleForm(arrayTo[j], tegs[j]);
        tegs[j + 1].innerHTML = arrayTo[j + 1];
        styleForm(arrayTo[j+1], tegs[j+1]);
        console.log(tegs[j+1]);
        setTimeout(function() {
          tegs[j].style.backgroundColor = '#49ccf9';
          // tegs[j].style.transition = 'right 1s ease-out 0.5s;'
          tegs[j-1].style.backgroundColor = '#49ccf9';
        }, 200)

      }
      j++;
    }

  }else{
    i = 0;
    j = 0;
  }
  i++;
}







//=======
