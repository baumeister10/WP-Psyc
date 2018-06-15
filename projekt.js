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


