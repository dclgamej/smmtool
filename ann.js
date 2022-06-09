
    Caman.DEBUG = true




    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");


    function roundedImage(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}




    var img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0,         canvas.width, canvas.height);
      originalImageData = ctx.canvas.toDataURL();
    }
    img.src = 'template.png';


    function addBrightness() {
      Caman("#canvas", img, function () {
        this.brightness(9);
        this.render();
      //  this.brightness(5).render();
      });
    }
    function rmBrightness() {
      Caman("#canvas", img, function () {
        this.brightness(-5).render();
      });
    }
    function addVintage() {
      Caman("#canvas", img, function () {
        this.vintage().render();
      });
    }
    function addLomo() {
      Caman("#canvas", img, function () {
        this.radialBlur().render();
      });
    }

    function addRed() {
      Caman("#canvas", img, function () {

  this.greyscale();

            // Create the layer
            this.newLayer(function () {
              this.setBlendingMode("multiply");
              this.opacity(100);
              this.fillColor('#d02128');

              this.copyParent();
            });


    this.clip(10);
    this.render();
  });
}

    function addBlack() {
      Caman("#canvas", img, function () {

        this.greyscale();

       this.saturation(-20);
       this.sharpen(10);
       this.exposure(-15);

        this.render();
      });
    }



    function download() {
      Caman('#canvas', function () {
        this.save('png');
      });
    }
    function rmFilters() {
      Caman("#canvas", img, function () {
        this.revert();
      });
    }



document.getElementById('export').style.display = "none";
    function reGenerate() {
document.getElementById('canvas').style.display = "none";
document.getElementById('export').style.display = "block";





    var pad_h = 95;
    var pad_w = 95;

    var color1='#ffffff';
    var color2='#ffffff';
    var color3='#ffffff';
    var bgcolor='#ffffff';

    var zdll = 0;
    var xdll = 0;
    var ydll = 0;


     var slogo =  document.getElementById('logo_x').value;
     var scolor =  document.getElementById('color_x').value;
     var stype =  document.getElementById('type_x').value;

     stype =  document.getElementById('type_x').value;

     var postt = 0;
    if (stype != 'none') {
      var idcolor = stype.split('_')
      postt = parseInt(idcolor[1]);
      }  else {
      postt = -1
    }


     if (scolor != 'none') {
       var idcolor = scolor.split('_')
       var nind = parseInt(idcolor[1]);
       console.log(nind)
       var palline = filter[nind].pallete;
       var coms_nam = palline.split(";");
     }  else {
       var nind = 0;
       var palline = filter[nind].pallete;
       var coms_nam = palline.split(";");
     }



           color1=coms_nam[1];
           color2=coms_nam[2];
           color3=coms_nam[3];
           bgcolor=coms_nam[4];

           zdll =coms_nam[0];
           xdll =coms_nam[5];
           ydll = coms_nam[6];




         let myFontb = new FontFace(
   				  "Topb",
   				  "url(font/Raleway-Black.ttf)"
   				);

         let myFontr = new FontFace(
   				  "Topf",
   				  "url(font/Raleway-ExtraBold.ttf)"
   				);

          let myFontrSl = new FontFace(
             "Midf",
             "url(font/Raleway-SemiBold.ttf)"
           );

   			let myFontPT = new FontFace(
   				  "Smaf",
   				  "url(font/KronaOne-Regular.ttf)"
   				);


    console.log('text creatorzz')

    var sour = document.getElementById('canvas');
    var expo = document.getElementById('export');

    if (expo.getContext){
    var ctx = expo.getContext('2d');

    var mtyp = document.getElementById('stats').innerHTML
    var msize = mtyp.split(' x ')
    var mwidth = msize[0]
    var hwidth = msize[1]

    var bottomh = parseInt(msize[1]) - 90;
    var bottomt = parseInt(msize[1]) - 585;
    var bottomm = parseInt(msize[1]) - 455;



    console.log('canvas created',mwidth,hwidth)

    ctx.canvas.width  = mwidth;
    ctx.canvas.height = hwidth;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if( document.getElementById("fileInput").files.length == 0 ){
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, mwidth, hwidth);
    } else {
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
       if (postt==-1) {ctx.globalAlpha = 1; }
       if (postt==0) { ctx.globalAlpha = 0.25; }

       if (postt==1) { ctx.globalAlpha = 0.5; }
       if (postt==2) {ctx.globalAlpha = 0.5; }
       if (postt==3) { ctx.globalAlpha = 0.5; }
       if (postt==4) { ctx.globalAlpha = 0.5; }


      ctx.drawImage(sour, 0, 0);
      ctx.globalAlpha = 1;
    }



    var rightmh = parseInt(msize[0]) - 90;
    var rightmt = parseInt(msize[0]) - 585;
    var rightmm = parseInt(msize[0]) - 455;






  //  base_image = new Image();
  //  base_image.src = 'pst.png';
  //  base_image.onload = function(){
  //  ctx.drawImage(base_image, 0, 0);
  //  }


    }



     if (postt!=1)  {

        var image_h = 115;
        var image_w = 115;



        } else {
          var image_h = 215;
          var image_w = 215;


        }

        var rightmh = parseInt(msize[0]) - 90;
        var rightmt = parseInt(msize[0]) - 585;
        var rightmm = parseInt(msize[0]) - 455;


        var allparts = document.getElementsByClassName('parts');
        var wpadding = 0;
        for (var i=0; i < allparts.length; i++) {
            var inputcanv =  allparts[i].id;
            console.log('inputcanv')
            var incnt = document.getElementById(''+inputcanv);
            var ictx = incnt.getContext('2d');
            var sw = ictx.canvas.width;
            var sh = ictx.canvas.height;

            var srch = image_h;
            var srcw = parseInt((sw * srch)/sh)
            console.log(srch, srcw)
            ctx.drawImage(incnt, rightmh - srcw - wpadding , 90, srcw,srch);
            wpadding = wpadding + image_w + srcw;
        }


        var allparts = document.getElementsByClassName('users');
        var wpadding = 0;
        var imgp = bottomh;

        myFontPT.load().then((font) => {
          document.fonts.add(font);
      })

        //bottomh
        //bottomt
        //bottomm
        for (var i=0; i < allparts.length; i++) {
            var inputcanv =  allparts[i].id;
            var usertext = document.getElementById('i'+inputcanv);
            var uname = usertext.value;

/*
Boule Research Meeting
Join us at 10:00 AM EST, 09 June 2022

Exploring Decentralized max liquidity, min exposure, options protocol
@jeff_unit
@Halko500k

*/

            console.log('inputcanv')
            var incnt = document.getElementById(''+inputcanv);
            var ictx = incnt.getContext('2d');
            var sw = ictx.canvas.width;
            var sh = ictx.canvas.height;

            var srch = image_h*2;
            var srcw = parseInt((sw * srch)/sh)

            console.log(srch, srcw)
            ctx.drawImage(incnt, rightmh - srcw - wpadding , imgp - srch - 70 , srcw,srch);


            ctx.fillStyle = color3;
            var fbtdt = document.getElementById('fs_x').value;
            ctx.font = fbtdt+"px Smaf";

            var textWidth = ctx.measureText(uname).width;
            console.log('textWidth',textWidth)
            var user_w_delta = rightmh - textWidth;
            console.log('user_w_delta',uname,user_w_delta,rightmh - srcw - wpadding)
            ctx.fillText(uname, rightmh - srcw - wpadding, bottomh);




            wpadding = wpadding + image_w + srcw;
        }




    if (slogo !='none') {




 if (postt!=1)  {

    var image_h = 115;
    var image_w = 115;



    } else {
      var image_h = 215;
      var image_w = 215;


    }






      var imgd = new Image();
        imgd.onload = function() {

          var idds = slogo.split('_')
          var logim = parseInt(idds[1]);
          console.log('d',logim, lgs[logim].type)
          if (lgs[logim].type == 'long') {

            var newimage_w = (imgd.width * image_h) / imgd.height;
            image_w = newimage_w ;
          }

          console.log('insert image', imgd.width, imgd.height)
          ctx.drawImage(imgd, pad_w , pad_h , image_w, image_h);
        }
        var idds = slogo.split('_')
        var logim = parseInt(idds[1]);
        if (logim < 100) {
        imgd.src = document.getElementById('x'+slogo).src;
} else {
  console.log('new')
  let roundCornerCanvas = document.getElementById('round-corner');
let roundCornerCtx = roundCornerCanvas.getContext('2d');


  recanvas = document.getElementById('canvas_'+logim)




  ctx.drawImage(recanvas, pad_w , pad_h , image_w, image_h);

}


  }




      var deltaup = 0
      var deltamid = 0

      var deltadown= 0


    var t1 =  document.getElementById("top_text_1").value
    var t2 =  document.getElementById("top_text_2").value

    var m0 =  document.getElementById("mid_text_0").value
    var m1 =  document.getElementById("mid_text_1").value
    var m2 =  document.getElementById("mid_text_2").value
    var m3 =  document.getElementById("mid_text_3").value

    var b0 =  document.getElementById("bot_text_0").value
    var b1 =  document.getElementById("bot_text_1").value
    var b2 =  document.getElementById("bot_text_2").value



        myFontr.load().then((font) => {
  				document.fonts.add(font);

          myFontrSl.load().then((font) => {
            document.fonts.add(font);

            myFontb.load().then((font) => {
              document.fonts.add(font);

              myFontPT.load().then((font) => {
                document.fonts.add(font);






               console.log('posttype =', postt)

               if ((postt==-1) || (postt==0) || (postt==3)) {
if (t1!='') {
                 if (t1[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                 }
                 if (slogo != 'none') {img_w_delta = 90 + image_w + 30; } else {img_w_delta = 90 - exc }

                 if (t1=='') {deltaup=-14; } else  {
                   var deltaup=58;
                   ctx.fillStyle = color2;
                   ctx.font = "80px Topf";
                   ctx.fillText(t1, img_w_delta, 155);
                   }

               if (t2=='') { } else  {
                 ctx.fillStyle = color2;
                 ctx.font = "50px Midf";
                 ctx.fillText(t2, img_w_delta, deltaup+150);
                 deltaup=deltaup + 70;
                 }

                 if (m0!='') {
                 if (m0[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
               }
                 img_w_delta = 90 - exc


                 if (m0=='') {deltamid=0; } else  {
                   var deltamid=60;
                   ctx.fillStyle = color3;
                   ctx.font = "40px Topb";
                   ctx.fillText(m0.toUpperCase(), img_w_delta, bottomt);
                   }

                   if (m1!='') {
                 if (m1[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                 }
                 img_w_delta = 90 - exc

                 if (m1=='') {deltamid=0; } else  {
                   var deltamid=100;
                   ctx.fillStyle = color2;
                   ctx.font = "140px Topb";
                   ctx.fillText(m1, img_w_delta, bottomm);
                   }


                   if (m2=='') { } else  {

                     ctx.fillStyle = color2;
                     ctx.font = "90px Topb";
                     ctx.fillText(m2, img_w_delta, bottomm+deltamid);
                     var deltamid=deltamid + 90;
                     }

                     /*
                     if (m3!='') {
                   if (m3[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                 }
                   img_w_delta = 90 - exc


                   if (m3=='') { } else  {

                     ctx.fillStyle = color2;
                       ctx.font = "90px Topb";
                     ctx.fillText(m3, img_w_delta, 525 + deltamid);
                     }
                     */


                       // --------------------------bottom ------------------------

                       if (b2!='') {
                       if (b2[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                     }
                       img_w_delta = 90 - exc


                       if (b2=='') {deltadown=0; } else  {
                         var deltadown=60;
                         ctx.fillStyle = color3;
                         ctx.font = "50px Smaf";
                         ctx.fillText(b2, img_w_delta, bottomh);
                         }

                         if (b1=='') { } else  {
                           ctx.fillStyle = color3;
                           ctx.font = "50px Smaf";
                           ctx.fillText(b1, img_w_delta, bottomh - deltadown);
                           deltadown= deltadown + 60;
                           }


                         /*
                         if (b0=='') { } else  {
                           ctx.fillStyle = color2;
                           ctx.font = "50px Smaf";
                           ctx.fillText(b0, img_w_delta, bottomh - deltadown);

                           }
                           */

               }












               if (postt==2) {
            if (t1!='') {
                 if (t1[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                 }
                 if (slogo != 'none') {img_w_delta = 90 + image_w + 30; } else {img_w_delta = 90 - exc }

                 if (t1=='') {deltaup=-14; } else  {
                   var deltaup=58;
                   ctx.fillStyle = color2;
                   ctx.font = "80px Topf";
                   ctx.fillText(t1, img_w_delta, 155);
                   }

               if (t2=='') { } else  {
                 ctx.fillStyle = color2;
                 ctx.font = "50px Midf";
                 ctx.fillText(t2, img_w_delta, deltaup+150);
                 deltaup=deltaup + 70;
                 }

                 if (m0!='') {
                 if (m0[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
               }
                 img_w_delta = 90 - exc


                 if (m0=='') {deltamid=0; } else  {
                   var deltamid=60;
                   ctx.fillStyle = color3;
                   ctx.font = "40px Topb";
                   ctx.fillText(m0.toUpperCase(), img_w_delta, bottomt);
                   }

                   if (m1!='') {
                 if (m1[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                 }
                 img_w_delta = 90 - exc

                 if (m1=='') {deltamid=0; } else  {
                   var deltamid=100;
                   ctx.fillStyle = color2;
                   ctx.font = "140px Topb";
                   ctx.fillText(m1, img_w_delta, bottomm);
                   }


                   if (m2=='') { } else  {

                     ctx.fillStyle = color2;
                     ctx.font = "90px Topb";
                     ctx.fillText(m2, img_w_delta, bottomm+deltamid);
                     var deltamid=deltamid + 90;
                     }


                     if (m3!='') {
                   if (m3[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                 }
                   img_w_delta = 90 - exc


                   if (m3=='') { } else  {

                     ctx.fillStyle = color2;
                       ctx.font = "90px Topb";
                     ctx.fillText(m3, img_w_delta, bottomm + deltamid);
                     }



                       // --------------------------bottom ------------------------

                       if (b2!='') {
                       if (b2[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                     }
                       img_w_delta = 90 - exc


                       if (b2=='') {deltadown=0; } else  {
                         var deltadown=40;
                         ctx.fillStyle = color3;
                         ctx.font = "30px Smaf";
                         ctx.fillText(b2, img_w_delta, bottomh);
                         }

                         if (b1=='') { } else  {
                           ctx.fillStyle = color3;
                           ctx.font = "30px Smaf";
                           ctx.fillText(b1, img_w_delta, bottomh - deltadown);
                           deltadown= deltadown + 40;
                           }



                         if (b0=='') { } else  {
                           ctx.fillStyle = color2;
                           ctx.font = "30px Smaf";
                           ctx.fillText(b0, img_w_delta, bottomh - deltadown);

                           }


               }


// ----------------------------------------------------


               if (postt==4)  {
if (t1!='') {
                 if (t1[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
          }
                 if (slogo != 'none') {img_w_delta = 90 + image_w + 30; } else {img_w_delta = 90 - exc }

                 if (t1=='') {deltaup=-14; } else  {
                   var deltaup=58;
                   ctx.fillStyle = color2;
                   ctx.font = "80px Topf";
                   ctx.fillText(t1, img_w_delta, 155);
                   }

               if (t2=='') { } else  {
                 ctx.fillStyle = color2;
                 ctx.font = "50px Midf";
                 ctx.fillText(t2, img_w_delta, deltaup+150);
                 deltaup=deltaup + 70;
                 }

                 if (m3!='') {
               if (m3[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
             }
               img_w_delta = 90 - exc


               if (m3=='') { deltamid = 0; } else  {
                  deltamid = 90;
                 ctx.fillStyle = color2;
                   ctx.font = "90px Topb";
                 ctx.fillText(m3, img_w_delta, bottomh);
                 }


                 if (m2=='') { } else  {

                   ctx.fillStyle = color2;
                   ctx.font = "90px Topb";
                   ctx.fillText(m2, img_w_delta, bottomh- deltamid);
                   var deltamid=deltamid + 90;
                   }

                   if (m1!='') {
                  if (m1[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                  }
                  img_w_delta = 90 - exc

                  if (m1=='') {deltamid=0; } else  {

                   ctx.fillStyle = color2;
                   ctx.font = "140px Topb";
                   ctx.fillText(m1, img_w_delta, bottomh- deltamid);
                   var deltamid=deltamid + 140;
                   }


                 if (m0!='') {
                 if (m0[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
               }
                 img_w_delta = 90 - exc


                 if (m0=='') {deltamid=0; } else  {

                   ctx.fillStyle = color3;
                   ctx.font = "40px Topb";
                   ctx.fillText(m0.toUpperCase(), img_w_delta, bottomh - deltamid);
                   }










                       // --------------------------bottom ------------------------




                         /*

                         if (b2!='') {
                         if (b2[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                       }
                         img_w_delta = 90 - exc


                         if (b2=='') {deltadown=0; } else  {
                           var deltadown=60;
                           ctx.fillStyle = color2;
                           ctx.font = "50px Smaf";
                           ctx.fillText(b2, img_w_delta, bottomh);
                           }

                           if (b1=='') { } else  {
                             ctx.fillStyle = color2;
                             ctx.font = "50px Smaf";
                             ctx.fillText(b1, img_w_delta, bottomh - deltadown);
                             deltadown= deltadown + 60;
                             }

                         if (b0=='') { } else  {
                           ctx.fillStyle = color2;
                           ctx.font = "50px Smaf";
                           ctx.fillText(b0, img_w_delta, bottomh - deltadown);

                           }
                           */

               }




               if (postt==1)  {












                       // --------------------------bottom ------------------------






                         if (b2!='') {
                         if (b2[0].toLowerCase()=='b') {exc = 3;} else {exc = 0;}
                       }
                         img_w_delta = 90 - exc


                         if (b2=='') {deltadown=0; } else  {
                           var deltadown=50;
                           ctx.fillStyle = color2;
                           ctx.font = "40px Smaf";
                           ctx.fillText(b2, img_w_delta, bottomh);
                           }

                           if (b1=='') { } else  {
                             ctx.fillStyle = color2;
                             ctx.font = "40px Smaf";
                             ctx.fillText(b1, img_w_delta, bottomh - deltadown);
                             deltadown= deltadown + 70;
                             }

                         if (b0=='') { } else  {
                           ctx.fillStyle = color2;
                           ctx.font = "90px Topb";
                           ctx.fillText(b0, img_w_delta, bottomh - deltadown);

                           }





               }






});

});
      });
});


}





var cList = $('#tp')
$.each(posttypes, function(i)
{
console.log(i)

var aaa = $('<span/>')
    .addClass('btn')
    .attr('data-s',posttypes[i].src)
    .attr('data-t',posttypes[i].type)
    .attr('id','type_'+i)

    .html(posttypes[i].type)
    .appendTo(cList);

});

$('#tp span').click(function() {

  $("#tp .active").removeClass("active");
  $(this).addClass('active');
  document.getElementById('type_x').value = $(this).attr("id");

});




var cList = $('#lg')
$.each(lgs, function(i)
{
console.log(i)

var aaa = $('<span/>')
    .addClass('btn')
    .attr('data-s',lgs[i].src)
    .attr('data-t',lgs[i].type)
    .attr('id','logo_'+i)

    .html('<img src="'+lgs[i].src+'" id="xlogo_'+i+'">')
    .appendTo(cList);

});


function RemoveLastLine(x) {
    x.pop();
    return y
}

$("#tgs").on("click", "span", function(){

  $(this).toggleClass('active');


var objects = $("#tgs .active").length;
if (objects >0) {
var all = $("#tgs .active").map(function() {
    return '#'+this.innerHTML;
}).get();

var tagslist = all.join();
console.log(tagslist.toString())

$('#tagslist').val(tagslist.toString())

} else {
  $('#tagslist').val('')
}

});

$("#lg").on("click", "span", function(){

      console.log('click')
      $("#lg .active").removeClass("active");
      $(this).addClass('active');
      document.getElementById('logo_x').value = $(this).attr("id");



});


var cList = $('#tgs')
$.each(tags, function(i)
{
console.log(i)

var aaa = $('<span/>')
    .addClass('btn')
    .attr('data-tag',tags[i])
    .attr('id','tag_'+i)
    .html(tags[i])
    .appendTo(cList);

});


var cList = $('#clrs')
$.each(filter, function(i)
{
console.log(i)

var aaa = $('<span/>')
    .addClass('btn')
    .attr('data-color',filter[i].color)
    .attr('data-t',filter[i].type)
    .attr('id','color_'+i)
    .html(filter[i].type)
    .appendTo(cList);

});


$('#clrs span').click(function() {
  console.log('click')
  $("#clrs .active").removeClass("active");
  $(this).addClass('active');
  document.getElementById('color_x').value = $(this).attr("id");

});












$('#templatesImg').click(function(){
document.getElementById("top_text_1").value='Lorem Ipsum'
document.getElementById("top_text_2").value='Welcome'

document.getElementById("mid_text_0").value='Lorem Ipsum'
document.getElementById("mid_text_1").value='Welcome'
document.getElementById("mid_text_2").value='Lorem Ipsum'
document.getElementById("mid_text_3").value='Welcome'

document.getElementById("bot_text_0").value='Lorem Ipsum'
document.getElementById("bot_text_1").value='Welcome'
document.getElementById("bot_text_2").value='Welcome'

});


var ulogs = 100;

const uinput = document.getElementById("userInput");
uinput.onchange = function (ev) {

  ulogs = ulogs + 1
  var uList = $('#user')

  var uuu = $('<span/>')
      .addClass('btn')
      .attr('id','userr_'+ulogs)
      .appendTo(uList);



      var fff = $('<canvas/>')
           .addClass('users')
          .attr('id','user_'+ulogs)
          .appendTo(uuu);
          var fff = $('<input/>')
               .addClass('ipsusers')
              .attr('id','iuser_'+ulogs)
              .appendTo(uuu);


  const fileu    = ev.target.files[0]; // get the file
  const blobURLu = URL.createObjectURL(fileu);
  const imgu     = new Image();
  imgu.src       = blobURLu;

  imgu.onerror = function () {
    URL.revokeObjectURL(this.src);
    console.log("Cannot load image");
  };

  imgu.onload = function () {
    URL.revokeObjectURL(this.src);
    const mime_typeu = "image/jpeg";
    const qualityu = qualityRate(fileu.size);
    const ucanvas  = document.getElementById('user_'+ulogs);
    ucanvas.width  = imgu.width;
    ucanvas.height = imgu.height;
    const ctxu     = ucanvas.getContext("2d");
    ctxu.drawImage(imgu, 0, 0, imgu.width, imgu.height);
  };
};




var plogs = 100;

const partinput = document.getElementById("partInput");
partinput.onchange = function (ev) {

  plogs = plogs + 1
  var pList = $('#part')

  var ppp = $('<span/>')
      .addClass('btn')
      .attr('data-s','lcv_'+plogs)
      .attr('data-t','logo_'+plogs)
      .attr('id','parts_'+plogs)
      .appendTo(pList);

      var vvv = $('<canvas/>')
           .addClass('parts')
          .attr('id','part_'+plogs)
          .appendTo(ppp);


  const filep    = ev.target.files[0]; // get the file
  const blobURLp = URL.createObjectURL(filep);
  const imgp     = new Image();
  imgp.src       = blobURLp;

  imgp.onerror = function () {
    URL.revokeObjectURL(this.src);
    console.log("Cannot load image");
  };

  imgp.onload = function () {
    URL.revokeObjectURL(this.src);
    const mime_typep = "image/jpeg";
    const qualityp = qualityRate(filep.size);
    const partcanvas  = document.getElementById('part_'+plogs);
    partcanvas.width  = imgp.width;
    partcanvas.height = imgp.height;
    const ctxp     = partcanvas.getContext("2d");
    ctxp.drawImage(imgp, 0, 0, imgp.width, imgp.height);
  };
};



var nlogs = 100;

const logoinput = document.getElementById("logoInput");
logoinput.onchange = function (ev) {

  nlogs = nlogs + 1
  var cList = $('#lg')

  var ccc = $('<span/>')
      .addClass('btn')
      .attr('data-s','lcv_'+nlogs)
      .attr('data-t','logo_'+nlogs)
      .attr('id','logo_'+nlogs)
      .appendTo(cList);

      var ccc = $('<canvas/>')
          .attr('id','canvas_'+nlogs)
          .appendTo(ccc);


  const filen    = ev.target.files[0]; // get the file
  const blobURLn = URL.createObjectURL(filen);
  const imgn     = new Image();
  imgn.src       = blobURLn;

  imgn.onerror = function () {
    URL.revokeObjectURL(this.src);
    console.log("Cannot load image");
  };

  imgn.onload = function () {
    URL.revokeObjectURL(this.src);

    const mime_typen = "image/jpeg";
    const qualityn = qualityRate(filen.size);
    const logocanvas  = document.getElementById('canvas_'+nlogs);

    logocanvas.width  = 300;
    logocanvas.height = 300;
    document.getElementById('logostats').innerHTML=imgn.width + ' x ' + imgn.height
    const ctxn     = logocanvas.getContext("2d");
    ctxn.save();
    roundedImage(ctxn, 0, 0, 300, 300, 30);
    ctxn.clip();

    ctxn.drawImage(imgn, 0, 0, 300, 300);
   ctxn.restore();

    //let data = canvas.toDataURL(mime_type,quality);
    //downloadURI(data, 'stage.jpg');

  /*
  logocanvas.toBlob(blob => {
      let localfile = new File([blob], 'a.jpg',{type:"image/jpeg", lastModified:new Date().getTime()}, 'utf-8');
      let container = new DataTransfer();
      container.items.add(localfile);
      document.querySelector('#fileInput').files = container.files;
  },mime_type,quality);
  */


  };
};


const input = document.getElementById("fileInput");
input.onchange = function (ev) {

  const file    = ev.target.files[0]; // get the file
  const blobURL = URL.createObjectURL(file);
  const img     = new Image();
  img.src       = blobURL;

  img.onerror = function () {
    URL.revokeObjectURL(this.src);
    console.log("Cannot load image");
  };

  img.onload = function () {
    URL.revokeObjectURL(this.src);

    const mime_type = "image/jpeg";
    const quality = qualityRate(file.size);
    const canvas  = document.getElementById("canvas");

    canvas.width  = img.width;
    canvas.height = img.height;
    document.getElementById('stats').innerHTML=img.width + ' x ' + img.height
    const ctx     = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);


    //let data = canvas.toDataURL(mime_type,quality);
    //downloadURI(data, 'stage.jpg');

    canvas.toBlob(blob => {
        let localfile = new File([blob], 'a.jpg',{type:"image/jpeg", lastModified:new Date().getTime()}, 'utf-8');
        let container = new DataTransfer();
        container.items.add(localfile);
        document.querySelector('#fileInput').files = container.files;
    },mime_type,quality);


  };
};

function qualityRate(fileSize){
    let QUALITY = 0.5;

    if(1000000 > fileSize){
        QUALITY = 0.5;
    }
    else if(3000000 > fileSize){
        QUALITY = 0.7;
    }
    else if(5000000 > fileSize){
        QUALITY = 0.5;
    }
    else if(10000000 > fileSize){
        QUALITY = 0.9;
    }
    else{
        QUALITY = 0.1;
    }
    console.log(QUALITY);
    return QUALITY;
}

function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}
