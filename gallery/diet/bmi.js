var obj = document.getElementById("btn");

obj.addEventListener("click",function() {
  var BodyWait = document.getElementById("taizyuu").value;
  var Height = document.getElementById("sintyou").value;

  if(BodyWait === 0 || BodyWait === "") {
    alert("体重を入力してください");
    return;
  }

  if(isNaN(BodyWait) === true) {
    alert("体重は数値を入力してください");
    return;
  }

  if(Height === 0 || Height === "") {
    alert("身長を入力してください");
    return;
  }

  if(isNaN(Height) === true) {
    alert("身長は数値を入力してください");
    return;
  }

  
 var divHTML = document.getElementById("foto");
  var HeightMeter = Height / 100;

  var BMI = BodyWait / (HeightMeter * HeightMeter);
  if(BMI <= 18.5 ) {
    document.getElementById("comment").textContent ="痩せすぎです。";
  divHTML.innerHTML = '<img src="img/yase.png" alt="痩せてます">';
  }else if((BMI => 18.5) &&( BMI<= 25))  {
    document.getElementById("comment").textContent ="普通体形です。";
   divHTML.innerHTML = '<img src="img/hutuu.png" alt="普通体型です">';
  }else if(BMI => 25){
    document.getElementById("comment").textContent ="太りぎみです。";
   divHTML.innerHTML = '<img src="img/hitoi.png" alt="太り気味です">';
  }else if(BMI => 30) {
    document.getElementById("comment").textContent ="肥満です。";
   divHTML.innerHTML = '<img src="img/himan.png" alt="肥満です">';
  }else {
    document.getElementById("comment").textContent ="正しく入力してください。";
  }

  document.getElementById("bmi").value = Math.round(BMI);
},false);



