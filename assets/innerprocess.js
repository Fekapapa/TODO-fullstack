'use strict'

var InnerProcessor = (function() {

    function eventListenAdder(element, action) {
        element.addEventListener('click', action);
    }

    function inputClear() {
        Ui.input.value = '';
    }

    function readycheck(title) {
        // title átjön, check if title = serverről kapot adat title status = 0 vagy 1
    }

    // function favoriteClicked() {
    //     if (Controller.tracks[InnerProcessor.currentSong].favorite === 0) {
    //         Controller.setFavorite(Controller.tracks[InnerProcessor.currentSong].title);
    //         Controller.tracks[InnerProcessor.currentSong].favorite = 1;
    //     } else if (Controller.tracks[InnerProcessor.currentSong].favorite === 1) {
    //         Controller.unsetFavorite(Controller.tracks[InnerProcessor.currentSong].title);
    //         Controller.tracks[InnerProcessor.currentSong].favorite = 0;
    //     }
    // }
    //
    // function favoriteCheck() {
    //     if (Controller.tracks[InnerProcessor.currentSong].favorite === 0) {
    //         Controller.favoriteChecked(Drawer.favoriteIconNormal());
    //     } else {
    //         Controller.favoriteChecked(Drawer.favoriteIconHighlight());
    //     }
    // }

    return {
        eventListenAdder: eventListenAdder,
        inputClear: inputClear
    }

})();
