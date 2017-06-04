'use strict'

var Ui = (function() {

    function todoDataDrawer(todoData) {
        let rowcontainer = document.querySelector('.rowcontainer');
        rowcontainer.innerHTML = '';


        for (let i = 0; i < todoData.length; i++) {

            let todorow = document.createElement('div');
            rowcontainer.appendChild(todorow);
            todorow.setAttribute('class', 'todorow');

            let title = document.createElement('div');
            todorow.appendChild(title);
            title.innerHTML = todoData[i].title;
            title.setAttribute('class', 'title');

            let del = document.createElement('div');
            todorow.appendChild(del);
            del.setAttribute('class', 'delete');
            Controller.eventListenerRouter(del, InputHandler.delClicked);

            let readycheck = document.createElement('div');
            todorow.appendChild(readycheck);
            readycheck.setAttribute('class', 'uncheck');
            Controller.eventListenerRouter(readycheck, InputHandler.readycheckClicked);

        }
    }


    function staticHtmlEventListeners() {
        let addbutton = document.querySelector('.addbutton');

        Controller.eventListenerRouter(addbutton, InputHandler.addbuttonClicked);
    }

    return {
        todoDataDrawer: todoDataDrawer,
        staticHtmlEventListeners: staticHtmlEventListeners,
        input: document.querySelector('input')
    }

})();
