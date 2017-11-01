import PouchDB from 'pouchdb-browser';
import './app.css';
const db = new PouchDB('potato_database');


const fadeIn = (msgSelector) => {
    //get the welcome msg element
    const $all_msg = $(msgSelector);
    //get a list of letters from the welcome text
    const $wordList = $(msgSelector).text().split("");
    //clear the welcome text msg
    $(msgSelector).text("");
    //loop through the letters in the $wordList array
    $.each($wordList, (idx, elem) => {
        //create a span for the letter and set opacity to 0
        const newEL = $("<span/>").text(elem).css({
            opacity: 0
        });
        //append it to the welcome message
        newEL.appendTo($all_msg);
        //set the delay on the animation for this element
        newEL.delay(idx * 70);
        //animate the opacity back to full 1
        newEL.animate({
            opacity: 1
        }, 1100);
    });

};