montecarlo = function () {
    (function () {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;
    })();



var uderzony = document.getElementById('uderzenia');
var spudlowany = document.getElementById("pudlo");
var pil = document.getElementById("pi");
//var stop = document.getElementById('stop');
//stop = addEventListener("click", function(){})
// koniec statystyk
/*    var rec = document.getElementById("myCanvas");
    var ctx = rec.getContext("2d");
    ctx.rect(0,0,500,500);
    ctx.stroke();
    <h1 id="header"> Wizualizacja metody Monte Carlo </h1>
*/

        //moze tu blad

    var rad = document.getElementById('kolo');
    ctx = rad.getContext('2d');
      var lacznie = 0;
      var uderzenia = 0;
      var pudlo = 0;
      var width = rad.width;
     var height = rad.height;
      var prom = width/2;
  //  ctx.beginPath();
    ctx.arc(width / 2, height / 2, prom, 0, 2*Math.PI);
    ctx.rect(0,0, width, height);
    ctx.stroke();


    var rzutCtx = document.getElementById('rzuty').getContext('2d');

    redPx = rzutCtx.createImageData(0.1, 0.1);
    redPx.data[0] = 0; // R
    redPx.data[1] = 0; // G
    redPx.data[2] = 255; // B
    redPx.data[3] = 255; // A

    greenPx = rzutCtx.createImageData(0.1, 0.1);
    greenPx.data[0] = 255; // R
    greenPx.data[1] = 160; // G
    greenPx.data[2] = 0; // B
    greenPx.data[3] = 255; // A



    function petla() {
      for (var i=0; i<50;++i) {
          put();
      }
      setTimeout(petla,0);
    }

    function put() {
    var x = Math.random() * 2 - 1;
    var y = Math.random() * 2 - 1;

    if (Math.pow(x,2) + Math.pow(y,2) <= 1)
    {
      ++uderzenia;
      uderzony.textContent = uderzenia;
      var coloredPx = greenPx;
    }
    else
    {
      ++pudlo;
      spudlowany.textContent = pudlo;
      var coloredPx = redPx;
    }
    ++lacznie;
    pil.textContent = (4*uderzenia)/lacznie;

    var imgX = (x + 1) / 2 * width;
       var imgY = (y + 1) / 2 * height;

       rzutCtx.putImageData(coloredPx, imgX, imgY);
   };

   setTimeout(petla, 0);
};
