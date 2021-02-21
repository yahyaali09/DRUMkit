
var numOfButtonsClicked = document.querySelectorAll(".drum").length;

for(var i = 0; i<numOfButtonsClicked; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("No Sound Right Now, but after clicking letter....Sound Would Play!!!");


    });

}


