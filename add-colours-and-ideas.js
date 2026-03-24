const colourProps = document.querySelector('#colourProps');
const colourNameInput = document.querySelector('#colourInput');
const colourHEXInput = document.querySelector('#colourHEXInput');
const addColourBtn = document.querySelector('#addColourBtn');

const colours = [
  {
    name: 'Green Yellow',
    hex: '#adff2f',
  },
  { name: 'Pink', hex: '#ffc0cb' },
  { name: 'Dark Magenta', hex: '#8b008b' },
  {
    name: 'Green Yellow',
    hex: '#adff2f',
  },
  { name: 'Pink', hex: '#ffc0cb' },
  { name: 'Dark Magenta', hex: '#8b008b' },
  {
    name: 'Green Yellow',
    hex: '#adff2f',
  },
  { name: 'Pink', hex: '#ffc0cb' },
  { name: 'Dark Magenta', hex: '#8b008b' },
  {
    name: 'Green Yellow',
    hex: '#adff2f',
  },
  { name: 'Pink', hex: '#ffc0cb' },
  { name: 'Dark Magenta', hex: '#8b008b' },
];

const getColourItemTemplate = (data) => {
  return `
  <li>
    <div class="colour" style="background-color: ${data.hex}"></div>
    <h4 class="colourName" id="colourName">${data.name}</h4>
    <p class="colourHex" id="colourHex">${data.hex}</p>
  </li>
  `;
};

const renderColours = () => {
  colourProps.innerHTML = '';

  for (let i = 0; i < colours.length; i++) {
    colourProps.insertAdjacentHTML(
      'beforeend',
      getColourItemTemplate(colours[i], i)
    );
    console.log(colours[i].hex);
  }
};

renderColours();

addColourBtn.addEventListener('click', () => {
  if (colourHEXInput.value.length === 0 && colourNameInput.value.length === 0) {
    return;
  }

  const dataObj = {
    name: colourNameInput.value,
    hex: colourHEXInput.value,
  };

  colours.push(dataObj);
  renderColours();

  colourHEXInput.value = '';
  colourNameInput.value = '';
});
