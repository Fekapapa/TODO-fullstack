'use strict'

var Ajax = (function() {

    function getTodoData() {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let todoData = JSON.parse(xhr.response);
                Controller.todoDataRouter(todoData);            }
        }
        xhr.open('GET', 'http://localhost:3000/todo_data_get');
        xhr.send();
    }


    function postTodoData(value) {
        let xhr = new XMLHttpRequest();

        let data = {
            'title': '"' + value + '"',
            'status': 0,
        }
        xhr.open('POST', 'http://localhost:3000/todo_data_post');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }

    function postTodoDataDelete(title) {
        let xhr = new XMLHttpRequest();

        let data = {
            'title': title
        }
        xhr.open('POST', 'http://localhost:3000/todo_data_delete');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }

    function putTodoReady() {
        let xhr = new XMLHttpRequest();
        let data = {
            'title': 'Be smart'
        }
        xhr.open('PUT', 'http://localhost:3000/todo_ready_check');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }

    function putTodoReadyUncheck() {
        let xhr = new XMLHttpRequest();
        let data = {
            'title': 'Be smart'
        }
        xhr.open('PUT', 'http://localhost:3000/todo_ready_uncheck');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }

    return {
        getTodoData: getTodoData,
        postTodoData: postTodoData,
        postTodoDataDelete: postTodoDataDelete,
        putTodoReady: putTodoReady,
        putTodoReadyUncheck: putTodoReadyUncheck
    }

})();
