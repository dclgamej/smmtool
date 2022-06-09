var export_template  = 'Freeform',
        export_w = 0,
        export_h = 0;


var dList = $('#toggle-aspect-ratio')
$.each(config_data, function(i)
{
console.log(i)
/*
config_data[i].width
config_data[i].height
config_data[i].template
*/

  var aaa = $('<span/>')
      .addClass('btn')
      .attr('data-t',config_data[i].template)
      .attr('data-w',config_data[i].width)
      .attr('data-h',config_data[i].height)

      .attr('data-value',config_data[i].width/config_data[i].height)
      .html(config_data[i].width+'x'+config_data[i].height)
      .appendTo(dList);
});


var cList = $('#clrs')
$.each(filter, function(i)
{
console.log(i)

var aaa = $('<span/>')
    .addClass('btn')
    .attr('data-color',filter[i].color)
    .html(filter[i].type)
    .appendTo(cList);

});

$(".slctml").on('click', function(data){
console.log('s')
     export_template = this.getAttribute('data-t');
     export_w = this.getAttribute('data-w');
     export_h = this.getAttribute('data-h');

});

$(".clrtml").on('click', function(data){
    var dtype = this.getAttribute('data-type');
    var dcolor = this.getAttribute('data-color');
    console.log('cl',dtype,dcolor)
});







var canvas  = $("#canvas"),
    context = canvas.get(0).getContext("2d"),
    $result = $('#result');



$('#fileInput').on( 'change', function(){
    if (this.files && this.files[0]) {
      if ( this.files[0].type.match(/^image\//) ) {
        var reader = new FileReader();
        reader.onload = function(evt) {
           var img = new Image();
           img.onload = function() {
             context.canvas.height = img.height;
             context.canvas.width  = img.width;
             context.drawImage(img, 0, 0);
             // initial set up

            var options = {
                aspectRatio: 16/9,
            };

             var cropper = canvas.cropper(options);

             $('#btnCrop').click(function() {


              if (export_template  == 'Freeform') {
                var croppedImageDataURL = canvas.cropper('getCroppedCanvas').toDataURL("image/png");
              } else {
                var croppedImageDataURL = canvas.cropper('getCroppedCanvas', {
  width: export_w, height: export_h
}).toDataURL("image/png");
              }



                $result.append( $('<img id="imageid">').attr('src', croppedImageDataURL) );


                var i = new Image();

                i.onload = function(){
                    document.getElementById('exp_name').value = export_template +'_'+ i.width+"_"+i.height

                };

                i.src = croppedImageDataURL;


             });

             /*
             $('#btnRestore').click(function() {
               canvas.cropper('reset');
               $result.empty();
             });
             */

             $('#toggle-aspect-ratio .btn').click(function() {
               $("#toggle-aspect-ratio .active").removeClass("active");
               $(this).addClass('active');
               export_template =  $(this).attr('data-t');
               export_w =  $(this).attr('data-w');
               export_h =  $(this).attr('data-h');
               options.aspectRatio = $(this).attr('data-value');
               canvas.cropper('destroy').cropper(options);
             });

            /*
            $('#clrs .btn').click(function() {
              $("#clrs .active").removeClass("active");
              $(this).addClass('active');



               context.drawImage(img,0,0); // image to change
               context.globalCompositeOperation = "saturation";
               context.fillStyle = "hsl(0,100%,50%)";  // saturation at 100%
               context.fillRect(0,0,img.width,img.height);  // apply the comp filter
               context.globalCompositeOperation = "source-over";  // restore default comp


              canvas.cropper('destroy').cropper(options);
            });
            */





           };
           img.src = evt.target.result;
				};
        reader.readAsDataURL(this.files[0]);
      }
      else {
        alert("Invalid file type! Please select an image file.");
      }
    }
    else {
      alert('No file(s) selected.');
    }
});


/*


const input = document.getElementById("img-input");
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
    const canvas  = document.createElement("canvas");
    canvas.width  = img.width;
    canvas.height = img.height;
    const ctx     = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);

    document.getElementById("root").append(canvas);
    //let data = canvas.toDataURL(mime_type,quality);
    //downloadURI(data, 'stage.jpg');

    canvas.toBlob(blob => {
        let localfile = new File([blob], 'a.jpg',{type:"image/jpeg", lastModified:new Date().getTime()}, 'utf-8');
        let container = new DataTransfer();
        container.items.add(localfile);
        document.querySelector('#img-input').files = container.files;
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
*/
