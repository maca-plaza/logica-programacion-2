const celcius = document.querySelector("input[name='celcius']");
const fahrenheit = document.querySelector("input[name='fahrenheit']");
const kelvin = document.querySelector("input[name='kelvin']");

const celciusToFahrenheit = (celcius) => {
  return celcius * 1.8 + 32;
};
const celciusToKelvin = (celcius) => {
  return celcius + 273.15;
};

celcius.addEventListener("change", (c) => {
  fahrenheit.value = celciusToFahrenheit(Number(c.target.value));
  kelvin.value = celciusToKelvin(Number(c.target.value));
});