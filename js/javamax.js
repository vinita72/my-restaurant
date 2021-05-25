function myFunction() {
    var a = Math.max(1, 2, 5);
    var b = Math.max(0, 199, 30, 20, 38);
    var c = Math.max(-5, 10);
    var d = Math.max(-5, -10);
    var e = Math.max(1.5, 2.5);
  
    var x = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
    document.getElementById("demo").innerHTML = x;
  }