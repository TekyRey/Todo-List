const listBody = document.getElementById('list-body');
const checkbox = document.querySelector('input[name=check]');
const taskDescription = document.querySelector('.taskdescription');
const addList = document.querySelector('input[name=addtext]');
const editList = document.querySelector('input[name=edittext]');
const clear = document.getElementById('clear');
const reloadBtn = document.querySelector('.reload-icon');

export {
  listBody, reloadBtn, editList, checkbox, taskDescription, addList, clear,
};