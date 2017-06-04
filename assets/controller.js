'use strict'

var Controller = (function() {

    function init() {
        Ajax.getTodoData();
        Ui.staticHtmlEventListeners();
    }

    function todoDataRouter(todoData) {
        Ui.todoDataDrawer(todoData);
    }

    function eventListenerRouter(element, action) {
        InnerProcessor.eventListenAdder(element, action);
    }

    function addbuttonClicked(value) {
        if (Ui.input.value != ''){
            Ajax.postTodoData(Ui.input.value);
            Ajax.getTodoData();
            InnerProcessor.inputClear();
        }
    }

    function postTodoDataDelete(title) {
        Ajax.postTodoDataDelete(title);
        Ajax.getTodoData();
    }

function readycheckClicked(title) {
    InnerProcessor.readycheck(title);
    Ajax.postTodoDataDelete(title);
    Ajax.getTodoData();
}

    return {
        init: init,
        todoDataRouter: todoDataRouter,
        eventListenerRouter: eventListenerRouter,
        addbuttonClicked: addbuttonClicked,
        postTodoDataDelete: postTodoDataDelete
    }

})();

Controller.init();
