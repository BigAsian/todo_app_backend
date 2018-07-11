// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//$(document).ready(console.log("Perspire salty vinegar"));



//$(document).ready($("#add-todo-button").click(function(){console.log("This works");}))
$(document).ready(function(){
    console.log("Oxidize cells")
    $("#add-todo-button").click(function(){
        console.log("Exhale CO2")
        var description= $("#add-todo-text").val()
        var time= $("#add-hour").val()
        console.log(description)
        $("u1").append("<li><input type='checkbox'/>"+description+" <span class='hour-estimate'>"+ time+" hour(s)</span></li>")
        console.log(time)
    //$("checkbox").click(function){
        //$("li").toggleClass()
    })
    $("input[type='checkbox']").click(function(){
         $(this).closest("li").toggleClass("completed-todo")
        console.log("strikethrough")
    })
    
         
})