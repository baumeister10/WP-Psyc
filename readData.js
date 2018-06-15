function read(){
    getTodoData();
    
var todos = new Array();



function getTodoData() {
    var request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.onreadystatechange = function() {
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText) { 
                parseTodoItems(this.responseText);
                addTodosToPage();
            }
            else {
                console.log("Error: Data is empty");
            }
        }
    };
    request.send();
}

function parseTodoItems(todoJSON) {
    if (todoJSON == null || todoJSON.trim() == "") {
        return;
    }
    var todoArray = JSON.parse(todoJSON);
    if (todoArray.length == 0) {
        console.log("Error: the to-do list array is empty!");
        return;
    }
    for (var i = 0; i < todoArray.length; i++) {
        var todoItem = todoArray[i];
        todos.push(todoItem);
    }
    console.log("To-do array: ");
    console.log(todos);
}

function addTodosToPage() {
    var ul = document.getElementById("todoList");
    for (var i = 0; i < todos.length; i++) {
        var todoItem = todos[i];
    }
    
    //Durchschnittswerte
    var a1 = (parseFloat(todoItem.e1)+parseFloat(todoItem.e2)+parseFloat(todoItem.e3)+parseFloat(todoItem.e4)+parseFloat(todoItem.e5))/5.0;
    
    var a = a1.toFixed(2);
    
    var b1 = (parseFloat(todoItem.n1)+parseFloat(todoItem.n2)+parseFloat(todoItem.n3)+parseFloat(todoItem.n4)+parseFloat(todoItem.n5))/5.0;
    
    var b = b1.toFixed(2);
    
    var c1 = (parseFloat(todoItem.o1)+parseFloat(todoItem.o2)+parseFloat(todoItem.o3)+parseFloat(todoItem.o4)+parseFloat(todoItem.o5))/5.0;
    
    var c = c1.toFixed(2);
    
    var d1 = (parseFloat(todoItem.v1)+parseFloat(todoItem.v2)+parseFloat(todoItem.v3)+parseFloat(todoItem.v4)+parseFloat(todoItem.v5))/5.0;
    
    var d = d1.toFixed(2);
    
    var e1 = (parseFloat(todoItem.g1)+parseFloat(todoItem.g2)+parseFloat(todoItem.g3)+parseFloat(todoItem.g4)+parseFloat(todoItem.g5))/5.0;
    
    var e = e1.toFixed(2);
    
    document.getElementById("e6").innerHTML = a; 
    document.getElementById("n6").innerHTML = b;  
    document.getElementById("o6").innerHTML = c;  
    document.getElementById("v6").innerHTML = d;  
    document.getElementById("g6").innerHTML = e; 
    

    if(a1<=2.24){document.getElementById("eText").innerHTML = "Ihr Extraversions-Score ist stark unterdurchschnittlich.";}
    if((a1<2.89) && (a1>2.24)){document.getElementById("eText").innerHTML = "Ihr Extraversions-Score ist unterdurchschnittlich.";}
    if(a1>2.89 && a1<=4.19){document.getElementById("eText").innerHTML = "Ihr Extraversions-Score ist durchschnittlich.";}
    if(a1>4.19 && a1<=4.84){document.getElementById("eText").innerHTML = "Ihr Extraversions-Score ist überdurchschnittlich.";}
    if(a1>4.84){document.getElementById("eText").innerHTML = "Ihr Extraversions-Score ist stark überdurchschnittlich.";}
    
    if(b1<=1.47){document.getElementById("nText").innerHTML = "Ihr Neurotizismus-Score ist stark unterdurchschnittlich.";}
    if((b1<2.05) && (b1>1.47)){document.getElementById("nText").innerHTML = "Ihr Neurotizismus-Score ist unterdurchschnittlich.";}
    if(b1>2.05 && b1<=3.21){document.getElementById("nText").innerHTML = "Ihr Neurotizismus-Score ist durchschnittlich.";}
    if(b1>3.21 && b1<=3.79){document.getElementById("nText").innerHTML = "Ihr Neurotizismus-Score ist überdurchschnittlich.";}
    if(b1>3.79){document.getElementById("nText").innerHTML = "Ihr Neurotizismus-Score ist stark überdurchschnittlich.";}
    
    if(c1<=2.51){document.getElementById("oText").innerHTML = "Ihr Offenheits-Score ist stark unterdurchschnittlich.";}
    if((c1<3.04) && (c1>2.51)){document.getElementById("oText").innerHTML = "Ihr Offenheits-Score ist unterdurchschnittlich.";}
    if(c1>3.04 && c1<=4.1){document.getElementById("oText").innerHTML = "Ihr Offenheits-Score ist durchschnittlich.";}
    if(c1>4.1 && c1<=4.63){document.getElementById("oText").innerHTML = "Ihr Offenheits-Score ist überdurchschnittlich.";}
    if(c1>4.63){document.getElementById("oText").innerHTML = "Ihr Offenheits-Score ist stark überdurchschnittlich.";}
    
    if(d1<=2.73){document.getElementById("vText").innerHTML = "Ihr Verträglichkeits-Score ist stark unterdurchschnittlich.";}
    if((d1<3.19) && (d1>2.73)){document.getElementById("vText").innerHTML = "Ihr Verträglichkeits-Score ist unterdurchschnittlich.";}
    if(d1>3.19 && d1<=4.11){document.getElementById("vText").innerHTML = "Ihr Verträglichkeits-Score ist durchschnittlich.";}
    if(d1>4.11 && d1<=4.57){document.getElementById("vText").innerHTML = "Ihr Verträglichkeits-Score ist überdurchschnittlich.";}
    if(d1>4.57){document.getElementById("vText").innerHTML = "Ihr Verträglichkeits-Score ist stark überdurchschnittlich.";}
    
    if(e1<=2.89){document.getElementById("gText").innerHTML = "Ihr Gewissenhaftigkeits-Score ist stark unterdurchschnittlich.";}
    if((e1<3.35) && (e1>2.89)){document.getElementById("gText").innerHTML = "Ihr Gewissenhaftigkeits-Score ist unterdurchschnittlich.";}
    if(e1>3.35 && e1<=4.27){document.getElementById("gText").innerHTML = "Ihr Gewissenhaftigkeits-Score ist durchschnittlich.";}
    if(e1>4.27 && e1<=4.73){document.getElementById("gText").innerHTML = "Ihr Gewissenhaftigkeits-Score ist überdurchschnittlich.";}
    if(e1>4.73){document.getElementById("gText").innerHTML = "Ihr Gewissenhaftigkeits-Score ist stark überdurchschnittlich.";}
     
       
    //Chart.js mit Daten aus JSON-File
    new Chart(document.getElementById("myChart"), {
    type: 'line',
        data: {
            labels: ["Extraversion","Neurotizismus","Offenheit","Verträglichkeit","Gewissenhaftigkeit"],
            datasets: [{ 
        data: [3.54,2.63,3.57,3.65,3.81],
        label: "Populationsdurchschnitt",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [a,b,c,d,e],
        label: "Ihre Werte",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
    options: {
        title: {
        display: true,
        text: 'Vergleich Ihrer Ergebnisse mit dem Bevölkerungsdurchschnitt'
    }
  }
});
}
    
    
    
}