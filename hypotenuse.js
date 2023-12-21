const sideInputs = document.querySelectorAll(".side-inputs");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box");


function addSideSquare(base,height){
    const sumOfSquaresOfAngle = base*base + height*height;

    return sumOfSquaresOfAngle;
}

function calculateHypotenuse(){
    const hypotenuse = Math.sqrt(addSideSquare(Number(sideInputs[0].value), Number(sideInputs[1].value))).toFixed(2);

    outputBox.innerText = "Hypotenuse of the Triangle is " + hypotenuse + " cm.";
}

calculateBtn.addEventListener("click", calculateHypotenuse);