

//usage:
let config_data = config;
let src_data = db;
let db_data = db;

var cList = $('#cfg')
$.each(config_data, function(i)
{
console.log(i)
  var li = $('<li/>')
      .addClass('d-flex align-items-start mb-1')
      .attr('role', 'menuitem')
      .appendTo(cList);

  var aaa = $('<div/>')
      .addClass('tmlp')
      .html('<span>'+config_data[i].template+'</span><span>'+config_data[i].width+'px</span><span>'+config_data[i].height+'px</span>')
      .appendTo(li);
});



var cList = $('#src')
$.each(src_data, function(i)
{
if (src_data[i].type=='source') {
  var li = $('<li/>')
      .addClass('d-flex align-items-start mb-1')
      .attr('role', 'menuitem')
      .appendTo(cList);

  var aaa = $('<div/>')
      .addClass('tmlp')
      .html('<span>'+src_data[i].name+'</span><span><a href="'+src_data[i].link+'" target="_blank">'+src_data[i].link+'</a></span>')
      .appendTo(li);
      }
});


var cList = $('#lnk')
$.each(db_data, function(i)
{
if (db_data[i].type=='brand') {
  var li = $('<li/>')
      .addClass('d-flex align-items-start mb-1')
      .attr('role', 'menuitem')
      .appendTo(cList);

  var aaa = $('<div/>')
      .addClass('tmlp')
      .html('<span>'+db_data[i].name+'</span><span><a href="'+db_data[i].link+'" target="_blank">'+db_data[i].link+'</a></span>')
      .appendTo(li);
      }
});
