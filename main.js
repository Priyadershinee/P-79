function getmenu()
{
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;}

menu_list_array=["Chiken Tandoori Pizza", 
"Veg Supreme Pizza", 
"Paneer Tikka Pizza", 
"Deluxe Veggie Pizza", 
"Veg Extravaganza Pizza"];
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for (var i=0;i<menu_list_array.length;i++){'<img src="pizzalmg"/>'
    htmldata=htmldata+'<li>'+menu_list_array[i]+ '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+"<div class='cards'>"+ '<img src="<img src="pizzalmg"/>'+menu_list_array[i]+'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML=htmldata;
}