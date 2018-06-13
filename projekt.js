var gender = 0;
var alter = 0;

function alterGender(){
    
     if ( document.getElementsByName('gender')[0].checked ) {
         gender = 0;
         // Hier alternativ auch String "gender = 'Mann'; je nachdem, was wir mit den Daten noch machen wollen (z.B. für ein Kreisdiagramm ist 0/1 geeignet)
	   }
    if ( document.getElementsByName('gender')[1].checked ) {
            gender = 1;
            // Hier alternativ auch String "gender = 'Frau';
	   }

    alter = document.querySelector('#Alter').value*1;
}


function textVerfassen(){
    
    var su = "stark unterdurchschnittlich."; 
    var u = "unterdurchschnittlich."; 
    var d = "durchschnittlich."; 
    var ue = "überdurchschnittlich."; 
    var sue = "stark überdurchschnittlich."; 
    
    if(e6<=2.24){ document.querySelector('#eText').innerHTML = document.querySelector('#eText').innerHTML + su;  }
    if(e6<=2.89 && e6>2.24){ document.querySelector('#eText').innerHTML = document.querySelector('#eText').innerHTML + u;}
    if(e6>2.89 && e6<=4.19){ document.querySelector('#eText').innerHTML = document.querySelector('#eText').innerHTML + d;}
    if(e6>4.19 && e6<=4.84){ document.querySelector('#eText').innerHTML = document.querySelector('#eText').innerHTML + ue;}
    if(e6>4.84){ document.querySelector('#eText').innerHTML = document.querySelector('#eText').innerHTML + sue;}
   
    if(n6<=1.47){ document.querySelector('#nText').innerHTML = document.querySelector('#nText').innerHTML + su;}
    if(n6<=2.05 && n6>1.47){ document.querySelector('#nText').innerHTML = document.querySelector('#nText').innerHTML + u;}
    if(n6>2.05 && n6<=3.21){ document.querySelector('#nText').innerHTML = document.querySelector('#nText').innerHTML + d;}
    if(n6>3.21 && n6<=3.79){ document.querySelector('#nText').innerHTML = document.querySelector('#nText').innerHTML + ue;}
    if(n6>3.79){ document.querySelector('#nText').innerHTML = document.querySelector('#nText').innerHTML + sue;}
    
    if(o6<=2.51){ document.querySelector('#oText').innerHTML = document.querySelector('#oText').innerHTML + su;}
    if(o6<=3.04 && o6>2.51){ document.querySelector('#oText').innerHTML = document.querySelector('#oText').innerHTML + u;}
    if(o6>3.04 && o6<=4.1){ document.querySelector('#oText').innerHTML = document.querySelector('#oText').innerHTML + d;}
    if(o6>4.1 && o6<=4.63){ document.querySelector('#oText').innerHTML = document.querySelector('#oText').innerHTML + ue;}
    if(o6>4.63){ document.querySelector('#oText').innerHTML = document.querySelector('#oText').innerHTML + sue;}
    
    if(v6<=2.73){ document.querySelector('#vText').innerHTML = document.querySelector('#vText').innerHTML + su;}
    if(v6<=3.19 && v6>2.73){ document.querySelector('#vText').innerHTML = document.querySelector('#vText').innerHTML + u;}
    if(v6>3.19 && v6<=4.11){ document.querySelector('#vText').innerHTML = document.querySelector('#vText').innerHTML + d;}
    if(v6>4.11 && v6<=4.57){ document.querySelector('#vText').innerHTML = document.querySelector('#vText').innerHTML + ue;}
    if(v6>4.57){ document.querySelector('#vText').innerHTML = document.querySelector('#vText').innerHTML + sue;}
    
    if(g6<=2.89){ document.querySelector('#gText').innerHTML = document.querySelector('#gText').innerHTML + su;}
    if(g6<=3.35 && g6>2.89){ document.querySelector('#gText').innerHTML = document.querySelector('#gText').innerHTML + u;}
    if(g6>3.35 && g6<=4.27){ document.querySelector('#gText').innerHTML = document.querySelector('#gText').innerHTML + d;}
    if(g6>4.27 && g6<=4.73){ document.querySelector('#gText').innerHTML = document.querySelector('#gText').innerHTML + ue;}
    if(g6>4.73){ document.querySelector('#gText').innerHTML = document.querySelector('#gText').innerHTML + sue;}
    
}


function setDefault(){
    document.querySelector('#Alter').value = "";
    
    document.querySelector('#e1').value = "3";
    document.querySelector('#e2').value = "3";
    document.querySelector('#e3').value = "3";
    document.querySelector('#e4').value = "3";
    document.querySelector('#e5').value = "3";
    
    document.querySelector('#n1').value = "3";
    document.querySelector('#n2').value = "3";
    document.querySelector('#n3').value = "3";
    document.querySelector('#n4').value = "3";
    document.querySelector('#n5').value = "3";
    
    document.querySelector('#o1').value = "3";
    document.querySelector('#o2').value = "3";
    document.querySelector('#o3').value = "3";
    document.querySelector('#o4').value = "3";
    document.querySelector('#o5').value = "3";
    
    document.querySelector('#v1').value = "3";
    document.querySelector('#v2').value = "3";
    document.querySelector('#v3').value = "3";
    document.querySelector('#v4').value = "3";
    document.querySelector('#v5').value = "3";
    
    document.querySelector('#g1').value = "3";
    document.querySelector('#g2').value = "3";
    document.querySelector('#g3').value = "3";
    document.querySelector('#g4').value = "3";
    document.querySelector('#g5').value = "3";
}



$(document).ready(function(){
    
    // J-Query zum ein-/ausblenden der Kästen
    
    $('#starten').click(function(){
        $('#demograf').show('slow');
        $('#extraversion').show('slow');
    	$('#intro').hide('slow');
    })
    $('#zurueck0').click(function(){
        $('#extraversion').hide('slow');
        $('#demograf').hide('slow');
    	$('#intro').show('slow');
    })
    
    
    $('#weiter1').click(function(){
            
        var alter2 = document.querySelector('#age');
        var geschlecht = document.querySelector('#genders');
        
        if((document.getElementsByName('gender')[0].checked || document.getElementsByName('gender')[1].checked) && document.querySelector('#Alter').value != "" && document.querySelector('#Alter').value <=110 && document.querySelector('#Alter').value >=10){
            $('#neurotizismus').show('slow');
            $('#demograf').hide('slow');
            $('#extraversion').hide('slow');
            eBerechnen();
            alterGender();
            alter2.style.backgroundColor = "";
            geschlecht.style.backgroundColor = "";
         } else { 
             if(document.getElementsByName('gender')[0].checked || document.getElementsByName('gender')[1].checked){
                alert("die zulässige Altersspanne beträgt 10-110 Jahre.)");
                } else {
                    alert("Bitte ergänzen Sie Ihre Angaben.");
                }
         }
        
        if(document.querySelector('#Alter').value === ""){
            alter2.style.backgroundColor = "red";
            }
        if(document.querySelector('#Alter').value != ""){
            alter2.style.backgroundColor = "";
            }
         if(!document.getElementsByName('gender')[0].checked && !document.getElementsByName('gender')[1].checked){
             geschlecht.style.backgroundColor = 'red'; 
           }        
        if(document.getElementsByName('gender')[0].checked || document.getElementsByName('gender')[1].checked){
             geschlecht.style.backgroundColor = ''; 
           }   
    })
    $('#zurueck1').click(function(){
        $('#extraversion').show('slow');
        $('#demograf').show('slow');
    	$('#neurotizismus').hide('slow');
    })

    
    $('#weiter2').click(function(){
    	$('#neurotizismus').hide('slow');
        $('#offenheit').show('slow');
        nBerechnen();
    })
    $('#zurueck2').click(function(){
        $('#offenheit').hide('slow');
    	$('#neurotizismus').show('slow');
    })

    
    $('#weiter3').click(function(){
    	$('#vertraeglichkeit').show('slow');
        $('#offenheit').hide('slow');
        oBerechnen();
    })
    $('#zurueck3').click(function(){
        $('#offenheit').show('slow');
    	$('#vertraeglichkeit').hide('slow');
    })


    $('#weiter4').click(function(){
    	$('#gewissenhaftigkeit').show('slow');
        $('#vertraeglichkeit').hide('slow');
        vBerechnen();
    })
    $('#zurueck4').click(function(){
        $('#vertraeglichkeit').show('slow');
    	$('#gewissenhaftigkeit').hide('slow');
    })
    

    $('#submit').click(function(){
    	$('#ergebnisse').show(1500);
        $('#feed').show(1500);
        $('#gewissenhaftigkeit').hide('slow');
        gBerechnen();
        eigenScore();
        seitenScore();
        chartErstellen();
        textVerfassen();
        
    })
    
    
    $('#wiederholen').click(function(){
    	location.reload();
        setDefault();
    })
    
  
});


