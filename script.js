function add_activity() {
    const custom_text = document.getElementById('custom-active');

    // if (custom_text.value.trim() === '') {
    //     alert("Please Enter An Activity");
    //     return; // Exit if the input is empty
    // }

    // Create the activity container
    const activityContainer = document.createElement('div');
    activityContainer.className = 'activity-container';

    // Create a title for the activity
    const tag = document.createElement("h1");
    const name = document.createTextNode(custom_text.value);
    tag.appendChild(name);
    activityContainer.appendChild(tag);
    custom_text.value = ""; // Clear the input

    // Create the slider container
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';

    // Create the input range (slider)
    const sliderInput = document.createElement('input');
    sliderInput.type = 'range';
    sliderInput.id = 'mySlider';
    sliderInput.name = 'slider';
    sliderInput.min = -100;
    sliderInput.max = 100;
    sliderInput.value = 0;
    sliderInput.step = 1;
    sliderInput.className = 'slider';

    // Create the tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.id = `tooltip-${Date.now()}`; // Unique ID for multiple tooltips
    tooltip.textContent = sliderInput.value; // Set initial tooltip value

    // Append the slider input and tooltip to the slider container
    sliderContainer.appendChild(sliderInput);
    sliderContainer.appendChild(tooltip);

    // Append the slider container to the activity container
    activityContainer.appendChild(sliderContainer);

    // Append the activity container to the target div
    const targetDiv = document.getElementById('new_activity');
    targetDiv.appendChild(activityContainer);

    // Function to position the tooltip
    function positionTooltip() {
        sliderInput.style.width = '300px';
        const value = sliderInput.value;
        tooltip.textContent = value;

        // Calculate the position based on the slider value
        const percentage = (value - sliderInput.min) / (sliderInput.max - sliderInput.min);
        const sliderWidth = sliderInput.clientWidth;
        const tooltipWidth = tooltip.clientWidth;

        // Set tooltip position
        tooltip.style.left = `${percentage * sliderWidth - tooltipWidth / 2}px`;
    }

    // Update tooltip position on input change
    sliderInput.addEventListener('input', positionTooltip);

    // Initial positioning of the tooltip
    positionTooltip();
}

function confirm() {
    const energy_pos = document.getElementById("energy-fill-positive");
    const energy_neg = document.getElementById("energy-fill-negative");
    const energy_box = document.getElementById("energy-box")
    const value_arrow = document.getElementById("value-arrow");
    const value_tip = document.getElementById("value-tip");
    const sliders = document.querySelectorAll("#mySlider");

    // Get the value of the last slider
    const sum = sliders[sliders.length - 1].value;

    // Update the energy bar based on sum
    if ((Number(sum) + Number(value_tip.textContent)) > 0) {
        energy_pos.style.height = ((Number(sum) + Number(value_tip.textContent)) / 2).toString() + "%";
        energy_neg.style.height = "0%";
    } else if ((Number(sum) + Number(value_tip.textContent)) < 0) {
        energy_neg.style.height = (Math.abs(Number(sum) + Number(value_tip.textContent)) / 2).toString() + "%";
        energy_pos.style.height = "0%";
    } else {
        energy_neg.style.height = "0%";
        energy_pos.style.height = "0%";
    }

    // Position the arrow
    if ((Number(sum) + Number(value_tip.textContent)) < -100) {
        value_arrow.style.top = 371 + "px";
        energy_box.classList.add('pulse');
    } else if ((Number(sum) + Number(value_tip.textContent)) > 100) {
        value_arrow.style.top = 69.2 + "px";
        energy_box.classList.add('pulse');
    } else {
        value_arrow.style.top = -1.509 * (Number(sum) + Number(value_tip.textContent)) + 220.1 + "px";
        energy_box.classList.add('pulse');
    }
    var i = setInterval(decrease, 5);
    
    
    var t = (Number(sum) + Number(value_tip.textContent));
    function decrease(){
      if (value_tip.textContent > t){
        value_tip.textContent--;
      }
      else if (value_tip.textContent < t){
        value_tip.textContent++;
      }
      else{
        clearInterval(i)
      }
    }

    // var x = 0;
    // var t = (Number(sum) + Number(value_tip.textContent));
    // while (value_tip.textContent > t){
    //     setTimeout(() => {
    //     //     value_tip.textContent--;
    //     //     console.log(value_tip.textContent)
    //     //     // x++;
    //     }, 1000); // 3 seconds duration for pulse effect
        
    // // }
    //   value_tip.textContent--;
    // }  
    
  

    // Optionally remove the pulse effect after 3 seconds
    setTimeout(() => {
        energy_box.classList.remove('pulse');
    }, 2000); // 3 seconds duration for pulse effect
}




document.addEventListener("DOMContentLoaded", function() {
    const gradientElement = document.querySelector('#energy-fill-positive');
    
    // Generate a random angle between 0 and 360 degrees
    const randomAngle = Math.floor(Math.random() * 360);
    
    // Set the gradient with the random angle
    gradientElement.style.background = `linear-gradient(${randomAngle}deg, #8bc34a, #4caf50)`;
});

//14, 200
//13, 201
//12, 202
//11, 203
//10, 204
//9, 206 
//8, 208
//7, 209
//4, 215
//-96, 365

