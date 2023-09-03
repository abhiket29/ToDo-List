(function(){
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');
    const taskCounter = document.getElementById('span');
    taskCounter.textContent = 'Task : 0';
    listContainer.appendChild(taskCounter);

    function addTask(text){
        const li = document.createElement('li');
        li.textContent = text;
        listContainer.appendChild(li);

        let deleteButton = document.createElement('span');
        deleteButton.textContent = '\u00d7';
        li.appendChild(deleteButton);

        taskCounter.textContent = `Task : 
${listContainer.querySelectorAll("li").length}`;
    }
    
        function handleInputKeypress(e){
            if(e.key === 'Enter'){
                const text = inputBox.value.trim();
                if(!text){
                    alert("Add Task Section cannot be Empty!");
                    return;
                }
                addTask(text);
                inputBox.value = "";

            }
        }

        listContainer.addEventListener('click',function(e){
            if (e.target.tagName === "LI"){
                e.target.classList.toggle('checked');
            }else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                taskCounter.textContent = `Task:
${listContainer.querySelectorAll('li').length}`;
            }
         }.false);
    // ------------------------------------------- animation
        const box = document.querySelector(".box");
        const divs = [];

        for (let i = 0; i < 10; i++) {
        const div = document.createElement("div");
        div.style.height = "60px";
        div.style.width = "60px";
        div.style.postition = "absolute";
        div.style.backgroundColor = "inherit";
        div.style.border = "6px solid white";
        div.style.boxShadow = "0px 0px 4px 2px rgba(231, 229, 0.8)";

        div.style.top = Math.floor(Math.random() * 100) + "%";
        div.style.left = Math.floor(Math.random() * 100) + "%";

        divs.push(div);
        box.appendChild(div);
        }

        function initializeApp(){
            inputBox.addEventListener('keyup', handleInputKeypress);
        }

        initializeApp();
})()