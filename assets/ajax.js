'use strict'

var Ajax = (function() {

    function getTodoData() {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let todoData = JSON.parse(xhr.response);
                Controller.todoDataRouter(todoData);            }
        }
        http.open('GET', 'http://localhost:3000/todo_data_get');
        http.send();
    }


    function postTodoData() {
        let xhr = new XMLHttpRequest();

        let data = {
            'title': 'Be smart',
            'status': 0,
        }
        http.open('POST', 'http://localhost:3000/todo_data_post');
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(JSON.stringify(data));
    }
    send();

    function postTodoDataDelete() {
        let xhr = new XMLHttpRequest();

        let data = {
            'title': 'Be smart'
        }
        http.open('POST', 'http://localhost:3000/todo_data_delete');
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(JSON.stringify(data));
    }
    send();

    function putTodoReady() {
        let xhr = new XMLHttpRequest();
        let data = {
            'title': 'Be smart'
        }
        http.open('PUT', 'http://localhost:3000/todo_ready_check');
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(JSON.stringify(data));
    }

    function putTodoReadyUncheck() {
        let xhr = new XMLHttpRequest();
        let data = {
            'title': 'Be smart'
        }
        http.open('PUT', 'http://localhost:3000/todo_ready_uncheck');
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(JSON.stringify(data));
    }

    return {
        getTodoData: getTodoData,
        postTodoData: postTodoData,
        postTodoDataDelete: postTodoDataDelete,
        putTodoReady: putTodoReady,
        putTodoReadyUncheck: putTodoReadyUncheck
    }

})();
