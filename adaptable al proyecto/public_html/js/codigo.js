$(document).ready(function (){
    var te =0;
    var xr1=0,xr2=0,xr3=0,xr4=0;
    var xt1=0,xt2=0,xt3=0,xt4=0;
    
    $("#fmr1").submit(function (evt){
        evt.preventDefault();
        te++;
        if($("#p11").is(":checked")){
            xr1++;
            $("#r1").html(xr1);
        }
        if($("#p12").is(":checked")){
            xr2++;
            $("#r2").html(xr2);
        }
        if($("#p13").is(":checked")){
            xr3++;
            $("#r3").html(xr3);
        }
        if($("#p14").is(":checked")){
            xr4++;
            $("#r4").html(xr4);
        }
            
        if($("#p21").is(":checked")){
            xt1++;
            $("#t1").html(xt1);
        }
        if($("#p22").is(":checked")){
            xt2++;
            $("#t2").html(xt2);
        }
        if($("#p23").is(":checked")){
            xt3++;
            $("#t3").html(xt3);
        }
        if($("#p24").is(":checked")){
            xt4++;
            $("#t4").html(xt4);
        }




          
        $("#divres").html("Total Encuestados: " + te);  
          
    });    
});

