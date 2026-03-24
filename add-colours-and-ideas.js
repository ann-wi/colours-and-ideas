const colourProps = document.querySelector('#colourProps');
const colourNameInput = document.querySelector('#colourInput');
const colourHEXInput = document.querySelector('#colourHEXInput');
const addColourBtn = document.querySelector('#addColourBtn');

// let - because get error (assigmnet to constant variable from api)
let coloursPage = [];

const renderColours = (colors = []) => {
  colourProps.innerHTML = '';

  for (let i = 0; i < colors.length; i++) {
    colourProps.insertAdjacentHTML(
      'beforeend',
      getColourItemTemplate(colors[i], i)
    );
  }
};

async function getColorsAPI() {
  try {
    // with API
    // used CORS to get access
    const response = await fetch(
      'https://corsproxy.io/?https://jsonlint.com/datasets/colors.json'
    );
    const { colors } = await response.json();
    coloursPage = colors;
    renderColours(colors);
    console.log(colors);
  } catch (err) {
    colourProps.style.color = 'red';
    colourProps.innerHTML = `<h3>${err.message}</h3>`;
  }
}

const getColourItemTemplate = (data) => {
  return `
  <li class="colourItem">
    <div class="colourDisplay" style="background-color: ${data.hex}; box-shadow: 10px 1px 5px ${data.hex};"></div>
    <h4 class="colourName" id="colourName">${data.name}</h4>
    <p class="colourHex" id="colourHex">${data.hex}</p>
  </li>
  `;
};

renderColours();

// new colours saved temporarely
addColourBtn.addEventListener('click', () => {
  if (colourHEXInput.value.length === 0 && colourNameInput.value.length === 0) {
    return;
  }

  const dataObj = {
    name: colourNameInput.value,
    hex: colourHEXInput.value,
  };

  coloursPage.push(dataObj);
  renderColours(coloursPage);

  colourHEXInput.value = '';
  colourNameInput.value = '';
});

getColorsAPI();
