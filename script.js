const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");
const btnMul = document.querySelector(".mul");
const btnDivision = document.querySelector(".division");
const btnClear = document.querySelector(".clear");
const output = document.querySelector(".output");

btnClear.addEventListener("click", () => {
  n1.value = "";
  n2.value = "";
  output.innerText = "";
});

btnPlus.addEventListener("click", () => {
  const input1 = Number(n1.value);
  const input2 = Number(n2.value);
  output.innerText = input1 + input2;
});

btnMinus.addEventListener("click", () => {
  const input1 = Number(n1.value);
  const input2 = Number(n2.value);
  output.innerText = input1 - input2;
});

btnMul.addEventListener("click", () => {
  const input1 = Number(n1.value);
  const input2 = Number(n2.value);
  output.innerText = input1 * input2;
});

btnDivision.addEventListener("click", () => {
  const input1 = Number(n1.value);
  const input2 = Number(n2.value);
  input1 !== 0 || input2 !== 0
    ? (output.innerText = input1 / input2)
    : (output.innerText = "Enter valid numbers");
});
