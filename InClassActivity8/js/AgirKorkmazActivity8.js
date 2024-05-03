$(document).ready(function(){
    
    $("#birthday").datepicker();


    var programmingLanguages = ["ActionScript","AppleScript","Asp", "Javascript","Lisp","Perl","PHP","Phyton"];

    $("#programmingLangugage").autocomplete({source: programmingLanguages});
});