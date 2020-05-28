var unlock = false;
var move = 0;

function currentTime() {
  var date = new Date(); /* Gets current date */
  var hour = date.getHours();
  var min = date.getMinutes();
  hour = updateTime(hour);
  min = updateTime(min);
  var day = date.getDay();
  var dayN =  date.getDate();
  var month = date.getMonth();
  
  switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
  switch (month){
    case 0:
      month = "January";
      break;
    case 1:
      month = "Febuary"
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April"
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June"
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August"
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October"
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December"
      
  }
 
  
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("date").innerHTML = day + ' ' + dayN + ' ' + month;
 
  
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
 
}

function updateTime(k) {
 
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

function unlocks(){
var elementExists = document.getElementById("meme");
  
  if(elementExists === null){
var x = document.createElement("iframe");
  x.setAttribute("src","https://youtube.com/embed/dQw4w9WgXcQ?autoplay=1");
  x.setAttribute("id","meme");
  x.setAttribute("width", "80%");
  x.setAttribute("height", "500");
  document.body.appendChild(x);
  } else {elementExists.remove()}
}


function lockdrop(){

 
  let scroll = document.getElementById("unlock");
  let icon = document.getElementById("lock");
  var login = document.getElementById("login");
   
  if(unlock==false){
    while (move <= 600){
      move += 1;
      scroll.style.margin = move +"px";
    } 
  login.removeAttribute("hidden");  
  icon.setAttribute("class", "fa fa-unlock fa-3x");
  unlock = true;
  } else {
        while (move > 0){
        move -= 1;
        scroll.style.margin = move +"px";
        } 
    
      unlocked.setAttribute("hidden", true);
      login.setAttribute("hidden",true); 
      icon.setAttribute("class", "fa fa-lock fa-3x");
      unlock = false;
  }
  
}

function loginsubmit(){
  let username = document.getElementById("userinput").value;
  let password = document.getElementById("passinput").value;
  var unlocked = document.getElementById("unlocked");
  
  document.getElementById("userinput").value = '';
  document.getElementById("passinput").value = '';
  
  if(username.toLowerCase() == "username" && password.toLowerCase() == "password" ){
    unlocked.removeAttribute("hidden");
    login.setAttribute("hidden",true); 
    
  }
  
  else { 
    
    alert("Wrong username or password")}
  
}

currentTime();
