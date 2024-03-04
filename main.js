const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.vacio');
var index = 0;


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const text= input.value;

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent =text;


    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(addDelete());
    input.value='';
    empty.style.display='none';
    li.setAttribute("id",index)
    index++;
    
});

//boton eliminar tareas
function addDelete(){
    const btnDelete = document.createElement("button");
    btnDelete.textContent='X';
  

    btnDelete.addEventListener('click', (event) =>{
        const item = event.target.parentElement;
        ul.removeChild(item);

})
return btnDelete;
}




