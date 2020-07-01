define(['jquery'], function($){
    let methods = {};

    methods.changeHTML = function(arg) {
        $("body").html(arg);
    }

    return methods;
});