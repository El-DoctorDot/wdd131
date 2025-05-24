const temperature = 5;   
const windSpeed = 10;    

function calculateWindChill(T, V) {
  return 13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16);
}

function formatWindChill(value) {
  return value.toFixed(1);
}

window.addEventListener('load', () => {
  const windChillElement = document.getElementById('windchill');

  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = formatWindChill(windChill) + '°C';
  } else {
    windChillElement.textContent = 'N/A';
  }
});

const lastModifiedDate = new Date(document.lastModified).toLocaleDateString('en-US');
const lastModifiedTime = new Date(document.lastModified).toLocaleTimeString('en-US');
const lastModifiedParagraph = document.getElementById('lastmodified');
lastModifiedParagraph.innerHTML = `Last modified on: ${lastModifiedDate} at ${lastModifiedTime}`;

const year = new Date().getFullYear();
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = year;
}