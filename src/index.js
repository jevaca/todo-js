import './styles.css';

import { Todo, TodoList } from './classes'; //busca el index.js por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml( tarea );

/*local storage y session storage. 

No es necesario instalar alguna dependecia, debido a que los navegadores ya cuentan con ese tipo de almacenamiento.

Desde el Backend no se pueden utilizar.

La diferencia entre ambas es que local storage almacena la información sin tiempo de expiración, en cambio en las session storage al cerrar el navegador la información se pierde.

No se debe almacenar información sensible.


localStorage.setItem('mi-key', 'ABC123'); //no colocar espacios o caracteres especiales.
sessionStorage.setItem('mi-key', 'ABC123'); //no colocar espacios o caracteres especiales.

setTimeout(() => {

    localStorage.removeItem('mi-key');

},1500);

*/


