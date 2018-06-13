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
    
    console.log(a);
    
    document.getElementById("eText").innerHTML = "Ihr Extraversions-Score ist: " + a; 
    document.getElementById("nText").innerHTML = "Ihr Neurotizismus-Score ist: " + b;  
    document.getElementById("oText").innerHTML = "Ihr Offenheits-Score ist: " + c;  
    document.getElementById("vText").innerHTML = "Ihr Verträglichkeits-Score ist: " + d;  
    document.getElementById("gText").innerHTML = "Ihr Gewissenhaftigkeits-Score ist: " + e;  
    
    
    //Chart.js mit Daten aus JSON-File
    new Chart(document.getElementById("myChart"), {
    type: 'line',
        data: {
            labels: [1,2,3,4,5],
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