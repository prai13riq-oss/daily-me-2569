const todoList = document.getElementById("todoList");
const input = document.getElementById("newItem");
const bagCount = document.getElementById("bagCount");

let todos = JSON.parse(localStorage.getItem("dailyChecklist")) || [];
let packedItems = JSON.parse(localStorage.getItem("packedItems")) || [];

function saveChecklist(){
    localStorage.setItem("dailyChecklist", JSON.stringify(todos));
}

function savePacked(){
    localStorage.setItem("packedItems", JSON.stringify(packedItems));
    bagCount.innerText = `${packedItems.length} items packed today 🎒`;
}

function renderChecklist(){

    todoList.innerHTML="";

    todos.forEach((task,index)=>{

        const li=document.createElement("li");

        li.className="flex items-center justify-between bg-white border-2 border-black rounded-xl p-3";

        li.innerHTML=`
            <div class="flex gap-3 flex-1 items-center">
                <input type="checkbox"
                ${task.done?"checked":""}
                onchange="toggleDone(${index})">

                <input value="${task.text}"
                onchange="editItem(${index},this.value)"
                class="flex-1 outline-none bg-transparent ${task.done?"line-through text-gray-400":""}">
            </div>

            <button onclick="removeItem(${index})">🗑️</button>
        `;

        todoList.appendChild(li);

    });

    saveChecklist();

}

function addItem(){

    if(input.value.trim()=="") return;

    todos.push({
        text:input.value,
        done:false
    });

    input.value="";
    renderChecklist();

}

function removeItem(index){

    todos.splice(index,1);
    renderChecklist();

}

function toggleDone(index){

    todos[index].done=!todos[index].done;
    renderChecklist();

}

function editItem(index,value){

    todos[index].text=value;
    saveChecklist();

}

/* Cute Bag Items */

function toggleItem(button,name){

    button.classList.toggle("selected");

    if(packedItems.includes(name)){
        packedItems = packedItems.filter(item=>item!==name);
    }else{
        packedItems.push(name);
    }

    savePacked();

}

savePacked();
renderChecklist();