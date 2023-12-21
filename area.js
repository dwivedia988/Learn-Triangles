const inputSide = document.querySelectorAll(".input-side");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box");

function calculateSemiPerimeter(side1,side2,side3){
    const perimeter = (side1 + side2 + side3) / 2;

    return perimeter;
}


function areaOfTriangle(){
    const firstSide = Number(inputSide[0].value);
    const secondSide = Number(inputSide[1].value);
    const thirdSide = Number(inputSide[2].value);


    if ( (firstSide + secondSide) > thirdSide && (secondSide + thirdSide) > firstSide && (thirdSide +firstSide) > secondSide){

        const semiperimeter = calculateSemiPerimeter(firstSide,secondSide,thirdSide);

        const  area = Math.sqrt(semiperimeter * (semiperimeter - firstSide) * (semiperimeter - secondSide) * (semiperimeter - thirdSide)).toFixed(4);

        outputBox.innerText = "Area of Triangle using Heron's Formula is " + area + " units."
    } else {
        outputBox.innerText = "Enter valid side lengths of the triangle. "
    }
    
}

calculateBtn.addEventListener("click", areaOfTriangle);
