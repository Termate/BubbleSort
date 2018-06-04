var arrX;

// var currentNum = 0;
// var ChildNodes = [];
var arrayTo;

// получает данные в виде строковых значений
function check(input) {
    var value = input.value;
    var rep = /[-\.;":,'a-zA-Zа-яА-Я]/;
    var x = toNumber();
    arrX = x;
    addP(arrX);
    // console.log(arrX);
    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }
}
// приводит строковые значения к числовым
function toNumber() {
  var inputText = document.getElementById('inputText').value;
  var x = inputText.split('')
  for (var i=0; i<x.length; i++) {
    x[i] = x[i]*1;
  }
  console.log('toNumber: '+x)
  return x;
}

// создает элемент <p> и добавляет его в <div> с id ='list'
function addP(x) {
 for (var i = 0; i < x.length; i++) {
    var p = document.createElement('p');//создается элемент <р>
    p.className = "pclass"; //создается класс
    p.id = x[i];  // создается id параграфа
    p.innerHTML = x[i]; // присваивается значение элементу 5
    styleForm(x[i], p);
    var position = document.getElementById('list');//нахождение элемента <div>
 }
 position.appendChild(p);//добавляем в <div> элемент <p>
 tegs = document.getElementsByTagName('p'); //назодим все элементы по тегу
 // arrayTo = toArray();
 arrayTo = toNumber();
 console.log(arrayTo)
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





var tegs = [];

var zi = 0;
var j = 1;
var min;
var count = 0;

function sort() {
  if (count < arrayTo.length-1){
   if (arrayTo[zi] > arrayTo[j]){
     min = arrayTo[j];
     arrayTo[j] = arrayTo[zi];
     arrayTo[zi] = min;
     zi++;
     j++;
     // styleForm() меняем блоки через стили

   } else {
     zi++;
     j++;
   }
   count++;
  } else {
    zi = 0;
    j = 1;
    count = 0;
    }

    console.log(arrayTo);
    // styleForm(zi,j)
  }




















  //создает массив из числовых значений введенных в поле <input>
  // function toArray() {
  //   var x = [];
  //   for(var i =0; i < tegs.length; i++) {
  //       x = x + tegs[i].innerHTML;
  //   }
  //   var y = x.split('');
  //   for (var i=0; i<y.length; i++) {
  //       y[i] = y[i]*1;
  //     }
  //     return y;
  //     console.log('toArray: '+ y)
  // }
















//=======
