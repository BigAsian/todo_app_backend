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