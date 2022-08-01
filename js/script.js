var validated=false;
$("#email-input").on('input', function() {
    if(validated){
        $("#error-svg").css("visibility","hidden");
        $("#email-input").css("border","1px solid hsl(0, 36%, 70%)");
        $("#err-msg").css("visibility","hidden");
        $("#fa-circle-check").css("visibility","hidden");
    }
});


function validate(email){
    const regex = new RegExp('^[^0-9][a-z|A-Z]+\.?[0-9]*@[a-z]+[\.]{1}[a-z]{2,5}$');
    var validationResult=regex.test(email);
    if(validationResult || email==''){
        $("#error-svg").css("visibility","hidden");
        $("#email-input").css("border","1px solid hsl(0, 36%, 70%)");
        $("#err-msg").css("visibility","hidden");
        $("#fa-circle-check").css("visibility","visible");
    }
    else{
        $("#error-svg").css("visibility","visible");
        $("#email-input").css("border","1px solid red");
        $("#err-msg").css("visibility","visible");
        $("#fa-circle-check").css("visibility","hidden");
        validated=true;
    }
}
function validateSend(){
    console.log($("#email-input").val());
    if($("#email-input").val()==''){
        $("#error-svg").css("visibility","visible");
        $("#email-input").css("border","1px solid red");
        $("#err-msg").css("visibility","visible");
    }else{
        validate($("#email-input").val());
    }
    
}