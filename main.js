const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.vacio');


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const text= input.value;

    const li = document.createElement('li');
    const p = document.createElement('p');
    const btnDelete = document.createElement('button')
    p.textContent =text;


    li.appendChild(p);
    ul.appendChild(li);
    p.appendChild(btnDelete);
    input.value='';
    empty.style.display='none';
});

//agregar funcion de eliminar tarea al boton
btnDelete.addEventListener('click', (e)=>{
        e.remove();
} )





