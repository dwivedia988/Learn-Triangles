const sideAngles = document.querySelectorAll(".side-angle");
const isTriangleBtn = document.querySelector("#istriangle-btn");
const outputBox = document.querySelector("#output-box");



function calculateSum(angle1,angle2,angle3){
    let sumOfAngles = angle1 + angle2 + angle3;

    return sumOfAngles;
}

function isTriangle() {
    let sum = calculateSum(Number(sideAngles[0].value), Number(sideAngles[1].value), Number(sideAngles[2].value));

    if(sum === 180){
        outputBox.innerText = "Yes, it is a Triangle";
    } else {
        outputBox.innerText = "No, it is not a Triangle";
    }
    
}

isTriangleBtn.addEventListener("click", isTriangle);