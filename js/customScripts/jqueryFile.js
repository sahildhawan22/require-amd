define(['jquery', 'methods'], function($, methods){
    $("#amdbtn").click(function(){
        methods.changeHTML("I was clicked to demostrate AMD. Check your network tab.");
    });
});