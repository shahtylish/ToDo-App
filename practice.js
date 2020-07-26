var taskPlus = document.getElementById("plus");
var createTaskDiv = document.getElementById("createTaskDiv");

var add = document.getElementById("add");
var listDiv = document.getElementById("listDiv");

var dynamicDiv;
var createText;
var del;
var count = 0;
var num = 0;





function showTaskDiv(){
    createTaskDiv.style.display = 'flex';
}

function addTaskToDiv(){
    createText = document.getElementById("createText");
    if(createText.value.length !== 0){
        dynamicDiv = 
                    "<table id='tab' class='table table-borderless'>" +
                        "<tr id='task'>" +
                    
                        "<td id='getTask'>" + createText.value + "</td>" +
                    
                        "<td id='Ebutton'>" +
                        "<button id='delete' class='editBtn btn btn-danger' onclick='deleteTask(this)'>Delete<i id='del' class='material-icons'>delete_sweep</i></button>" +
                        "</td>" +
            
                        "<tr>" +
                    "</table>";
        listDiv.innerHTML += dynamicDiv;
        document.getElementById("createText").value = null;
        createTaskDiv.style.display = 'none';
        }
    else{
        alert("Empty Task does not created!");
    }
}

function deleteTask(x){
    del = x.parentNode.parentNode.parentNode.parentNode;
    del.remove();
}

















