// Lista inicial

var globalNames = ['Luis', 'Roberto', 'Maria', 'Luciana', 'Débora'];

// Input

var inputName = document.querySelector('#name');

function start() {
  preventFormSubmit();
  inputFocus();
  populateList();
}

start();

// Evitar recarregar a página quando submeter formulário: prevent default

function preventFormSubmit() {
  var form = document.querySelector('form');

  // Escutar evento de submit e executar função

  form.addEventListener('submit', formSubmit);

  function formSubmit(event) {
    event.preventDefault();
  }
}

// Input onfocus quando carregar a página

function inputFocus() {

  // Pegar nome input

  getInputValue();

  inputName.focus();
}

function getInputValue() {
  // Keyup: quando solta a tecla

  inputName.addEventListener('keyup', getValue);

  function getValue(event) {
    // Pegar valor quando apertar enter

    if (event.key === 'Enter') {
      // Adicionar nome na lista

      var newName = event.target.value;
      globalNames.push(newName);

      // Exibir lista com novo nome

      populateList();
    }
  }
}

function populateList() {

  // Pegar div

  var divNames = document.querySelector('#names');

  // Limpar Lista

  divNames.innerHTML = "";

  // Criar ul: createElement

  var ul = document.createElement('ul');

  // Percorrer array de Nomes

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    // Criar li, span e button

    var li = document.createElement('li');
    var span = document.createElement('span');
    var button = createDeleteButton(i);

    span.textContent = currentName;

    // Adicionar nome e button ao item da Lista

    li.appendChild(button);
    li.appendChild(span);

    // Adicionar item a ul

    ul.appendChild(li);
  }

  // Adicionar ul a div

  divNames.appendChild(ul);
  clearInput();
}

// Criar button delete

function createDeleteButton(index) {
  var button = document.createElement('button');
  button.textContent = "x";

  // Adicionar classe ao button

  button.classList.add("deleteButton");

  // Escutar click

  button.addEventListener('click', deleteName);

  function deleteName() {

    // Splice: exclui elementos. posição (1o argumento), qtde elementos (2o), elementos a serem acrescentados (3o - opcional)

    globalNames.splice(index, 1);

    // Mostrar lista
    
    populateList();
  }

  return button;
}

// Limpar input ao adicionar na Lista

function clearInput() {

  inputName.value = "";

  // Focus

  inputName.focus();
}
