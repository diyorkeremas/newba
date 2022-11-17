const forma = document.querySelector('.forma');
const inputs = document.querySelector('.input');
const wrapp = document.querySelector('.wrapper');



forma.addEventListener('submit',(e)=> {
    e.preventDefault();
    const ul = document.createElement('ul')
    const elli = document.createElement('li')
    forma.append(ul)
    ul.innerHTML = `
    <li>${inputs.value}</li>
    `
    inputs.value = null;

    
})
function deletetext() {
    let delBtn = document.createElement('button')
    delBtn.className = 'delet'
    delBtn.textContent = '-'
    elli.append(delBtn);
    delBtn.addEventListener('click',()=> {
        elli.remove
    })
}
deletetext()


