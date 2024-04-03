// Классы

class CaloriesCalc {
  constructor(weight, height, age, activity) {
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.activity = activity;
  }
  calculate() {
    const bmr = this.calculateBMR();
    const mainTans = this.calculateMainTans(bmr);

    return mainTans;
  }
  calculateBMR() {
    // расчет обмен веществ человека по формуле

    return 10 * this.weight + 6.25 * this.height - 5 * this.age;
  }
  calculateMainTans(bmr) {
    // Суточная норма калории для поддержания тек.веса
    return bmr * this.activity;
  }
}

const pasreInfo = () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const activity = parseFloat(document.getElementById("activity").value);
  const calc = new CaloriesCalc(weight, height, age, activity);
  const mainTans = calc.calculate();
  document.querySelector(
    "#result"
  ).innerText = `Ваша суточная норма калории ${mainTans.toFixed()} `;
};
