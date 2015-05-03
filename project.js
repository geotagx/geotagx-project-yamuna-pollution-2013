// Run the application.
geotagx.task.run("yamuna2013_poll", function(question, answer){
    switch (question){
        case 1: // Can you see any water in the photo?
            if (answer === "Yes")
                geotagx.task.showNextQuestion();
            else
                geotagx.task.finish();
            break;
        case  2: // What is the colour of the water?
        case  3: // Can you see rubbish floating in the water?
        case  4: // Can you see piles of dumped household or industrial waste?
        case  5: // Can you see an open sewer (nullah)?
        case  6: // Can you see chemical foam?
        case  7: // Can you see plastic bags in or near the water?
        case  8: // Can you see pieces of plastic in or near the water?
        case  9: // Can you see faeces?
        case 10: // Can you see dead fish floating in the water?
        case 11: // Can you see motorised vehicles?
        case 12: // Can you see any bikes or cycle rickshaws in the water?
        case 13: // Can you see powerlines in or near the water?
        case 14: // Can you see furniture or other household items in or near the water?
            geotagx.task.showNextQuestion();
        default:
            break;
    }
});
