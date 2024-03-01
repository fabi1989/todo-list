const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.vacio');


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const text= input.value;

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent =text;


    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(btnDelete);
    input.value='';
    empty.style.display='none';
    
});

//boton eliminar tareas

const btnDelete = document.createElement("button");
btnDelete.textContent='X';


btnDelete.addEventListener('click', () =>{
    li.remove();
}); 
    





