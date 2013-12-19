

function BinaryClock() {

}

BinaryClock.prototype.update = function() {

}

BinaryClock.prototype.draw = function() {

}

BinaryClock.prototype.getTimeString = function() {
    
}


bc_time_string = function() {
  var date = new Date();
  var t = ("0" + date.getHours().toString(10)).slice(-2)
  + ("0" + date.getMinutes().toString(10)).slice(-2);
  var s = "";
  for (var i = 0; i < t.length; i++)
    s += ("0000" + parseInt(t[i]).toString(2)).slice(-4);
  return s;
}

bc_draw = function(bcs) {
  var t = document.getElementById('bc');
  t.innerHTML = "";
  var tr, td;
  for (i = 0; i < 4; i++) {
    tr = document.createElement('tr');
    for (k = 0; k < 4; k++) {
      td = document.createElement('td');
      var idx = i + k * 4;
      if (bcs[idx] == "1") td.style.background = '#147cd1';
      else td.style.background = '#8fceff'
      tr.appendChild(td);
    }
    t.appendChild(tr);
  }
}

bc_update_seconds = function() {
  var s = new Date().getSeconds();
  document.getElementById('seconds').style.width = s*(10/6) + "%"
}

bc_start_clock = function() {  
  var t = bc_time_string();
  // console.log("UPDATE: " + t);
  bc_draw(t);
  bc_update_seconds();
  setTimeout("bc_start_clock()", 1000);
}