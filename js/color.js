 
   
//function for setting colors from slides to document
//need to refactor to different file
function setColor(){

    var resultElement = document.getElementById('result'),
	sliders = document.getElementsByClassName('sliders');
	// Get the slider values,
	// stick them together.
	var color = 'rgb(' +
		sliders[0].noUiSlider.get() + ',' +
		sliders[1].noUiSlider.get() + ',' +
		sliders[2].noUiSlider.get() + ')';


	resultElement.style.background = color;
	resultElement.style.color = color;
    document.getElementById('volume').style.backgroundColor = color;
    colorSelection = color;

    }
    


    