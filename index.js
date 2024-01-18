$(document).ready(function(){
    $("#txtemail").keyup(function(){
        let email=$("#txtemail").val();      
        var r=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
       
        if(r.test(email)==false){
            $("#erremail").html("Invalid").addClass("notok").removeClass("ok");
        }
        else {
               $("#erremail").html("Valid").addClass("ok").removeClass("notok");
        }
    });
    //-------------------------------------------------------------------------------
    $("#txtpass").keyup(function(){
        let pass=$("#txtpass").val();
        var m=/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if(m.test(pass)==false)
        {
            $("#errpass").html("Invalid").addClass("notok").removeClass("ok");
        }
        else
        {
            $("#errpass").html("Valid").addClass("ok").removeClass("notok");
        }
    });
    //--------------------------------------------------------------------------
    $(".fa-solid").click(function(){
        $("txtpass").prop("type","text")
    });
});
 
 

function docall()
{
    alert();
}