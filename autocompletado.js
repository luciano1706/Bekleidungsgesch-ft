$(document).ready(function(){$inputSearchHead=$("#js-search_header");var options={getValue:"title",url:function(phrase){return"/search?q="+phrase},categories:[{listLocation:"items"}],template:{type:"custom",method:function(value,items){return console.log(items),null==items.image_url?"":(img_txt=items.image_url,txt_array=img_txt.split("/"),txt_last=txt_array[txt_array.length-1],add_index="index_"+txt_last,txt_array.splice(-1,1),txt_array.push(add_index),final_url=txt_array.join("/"),"<div> <a href="+items.url+"?variant_id="+items.id+"><img src='"+final_url+"'/><div class='search-item-title'>"+value+"</div></a></div>")}},list:{onChooseEvent:function(){var url=$inputSearchHead.getSelectedItemData().url;$inputSearchHead.val(""),document.location.href=url}},theme:"lean"};$inputSearchHead.easyAutocomplete(options)});