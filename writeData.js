function Todo(e1, e2, e3,e4, e5,n1, n2, n3,n4, n5, o1,o2, o3, o4,o5, v1,v2, v3, v4,v5, g1,g2, g3, g4,g5) {
    this.e1 = e1;
    this.e2 = e2;
    this.e3 = e3;
    this.e4 = e4;
    this.e5 = e5;
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
    this.n4 = n4;
    this.n5 = n5;
    this.o1 = o1;
    this.o2 = o2;
    this.o3 = o3;
    this.o4 = o4;
    this.o5 = o5;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
    this.v4 = v4;
    this.v5 = v5;
    this.g1 = g1;
    this.g2 = g2;
    this.g3 = g3;
    this.g4 = g4;
    this.g5 = g5;
    this.done = false;
}
                      
var todos = new Array();

function init() {
    getTodoData();
    getFormData();
}

function getTodoData() {
    var request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.onreadystatechange = function() {
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText) { 
                parseTodoItems(this.responseText);
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
        console.log("Error: the data list array is empty!");
        return;
    }
    for (var i = 0; i < todoArray.length; i++) {
        var todoItem = todoArray[i];
        todos.push(todoItem);
    }
}

function getFormData() {
    var e1 = document.getElementById("e1").value;
    if (checkInputText(e1, "Please enter a task")) return;

    var e2 = document.getElementById("e2").value;
    if (checkInputText(e2, "Please enter a person to do the task")) return;

    var e3 = document.getElementById("e3").value;
    if (checkInputText(e3, "Please enter a due date")) return;
    
    var e4 = document.getElementById("e4").value;
    if (checkInputText(e4, "Bitte entscheiden Sie sich für einen Wert!")) return;
    
    var e5 = document.getElementById("e5").value;
    if (checkInputText(e5, "Bitte entscheiden Sie sich für einen Wert!")) return;
    
    var n1 = document.getElementById("n1").value;
    if (checkInputText(n1, "Please enter a task")) return;

    var n2 = document.getElementById("n2").value;
    if (checkInputText(n2, "Please enter a person to do the task")) return;

    var n3 = document.getElementById("n3").value;
    if (checkInputText(n3, "Please enter a due date")) return;
    
    var n4 = document.getElementById("n4").value;
    if (checkInputText(n4, "Bitte entscheiden Sie sich für einen Wert!")) return;
    
    var n5 = document.getElementById("n5").value;
    if (checkInputText(n5, "Bitte entscheiden Sie sich für einen Wert!")) return;
    
    var o1 = document.getElementById("o1").value;
    if (checkInputText(o1, "Please enter a task")) return;

    var o2 = document.getElementById("o2").value;
    if (checkInputText(o2, "Please enter a person to do the task")) return;

    var o3 = document.getElementById("o3").value;
    if (checkInputText(o3, "Please enter a due date")) return;
    
    var o4 = document.getElementById("o4").value;
    if (checkInputText(o4, "Bitte entscheiden Sie sich für einen Wert!")) return;
    
    var o5 = document.getElementById("o5").value;
    if (checkInputText(o5, "Bitte entscheiden Sie sich für einen Wert!")) return;
    
    var v1 = document.getElementById("v1").value;
    if (checkInputText(v1, "Please enter a task")) return;

    var v2 = document.getElementById("v2").value;
    if (checkInputText(v2, "Please enter a person to do the task")) return;

    var v3 = document.getElementById("v3").value;
    if (checkInputText(v3, "Please enter a due date")) return;
    
    var v4 = document.getElementById("v4").value;
    if (checkInputText(v4, "Bitte entscheiden Sie sich für einen Wert!")) return;
    
    var v5 = document.getElementById("v5").value;
    if (checkInputText(v5, "Bitte entscheiden Sie sich für einen Wert!")) return;
    
    var g1 = document.getElementById("g1").value;
    if (checkInputText(g1, "Please enter a task")) return;

    var g2 = document.getElementById("g2").value;
    if (checkInputText(g2, "Please enter a person to do the task")) return;

    var g3 = document.getElementById("g3").value;
    if (checkInputText(g3, "Please enter a due date")) return;
    
    var g4 = document.getElementById("g4").value;
    if (checkInputText(g4, "Bitte entscheiden Sie sich für einen Wert!")) return;
    
    var g5 = document.getElementById("g5").value;
    if (checkInputText(g5, "Bitte entscheiden Sie sich für einen Wert!")) return;


    var todoItem = new Todo(e1, e2, e3, e4, e5,n1, n2, n3, n4, n5,o1, o2, o3, o4, o5,v1, v2, v3, v4, v5,g1, g2, g3, g4, g5);
    todos.push(todoItem);
    saveTodoData();
    document.forms[0].reset();
    done();
}

function checkInputText(value, msg) {
    if (value == null || value == "") {
        alert(msg);
        return true;
    }
    return false;
}        

function done(){
    document.getElementById("done").innerHTML = "Die Daten wurden gespeichert!";
}

function saveTodoData() {
    var todoJSON = JSON.stringify(todos);
    var request = new XMLHttpRequest();
    var URL = "save.php?data=" + encodeURI(todoJSON);
    request.open("GET", URL);
    request.setRequestHeader("Content-Type",
                             "text/plain;charset=UTF-8");
    request.send();
    read();
}