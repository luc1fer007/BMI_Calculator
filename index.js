const btnB = document.getElementById("btn");
const bmiInput = document.getElementById("total");
const weightCondition = document.getElementById("weight-condition");

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

function calculateBMI() {
  const height = Number(heightInput.value) / 100;
  const weight = Number(weightInput.value);

  if (!height || !weight) {
    weightCondition.innerText = "Please Enter both height and weight";
    return;
  }
  const BMIValue = weight / (height * height);
  bmiInput.value = BMIValue.toFixed(3);

  if (BMIValue < 18.5) {
    weightCondition.innerText = "You are under weight 😔";
  } else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
    weightCondition.innerText = "Congratulations! You have Normal Weight 😀";
  } else if (BMIValue >= 25 && BMIValue <= 29.9) {
    weightCondition.innerText = "Oh no! You are OverWeight 😐";
  } else if (BMIValue >= 30) {
    weightCondition.innerText = "Caution!! Obesity 🤯";
  }
}
heightInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculateBMI();
  }
});
weightInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculateBMI();
  }
});
btnB.addEventListener("click", calculateBMI);
