'use strict'

var InputHandler = (function() {

    function delClicked(e) {
        let parentElement = e.target.parentNode.querySelector('div:nth-child(1)');
        let title = parentElement.innerHTML;
        Controller.postTodoDataDelete(title);
    }

    function readycheckClicked() {
        let parentElement = e.target.parentNode.querySelector('div:nth-child(1)');
        let title = parentElement.innerHTML;
        Controller.readycheckClicked(title);
    }

    function addbuttonClicked() {
        Controller.addbuttonClicked(Ui.input.value);
    }

    return {
        delClicked: delClicked,
        readycheckClicked: readycheckClicked,
        addbuttonClicked: addbuttonClicked,
    }

})();
