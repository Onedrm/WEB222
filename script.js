/** Add any JavaScript you need to this file. */
const items = [
  {
    id: 'squirrel',
    id2: 'squirrel2',
    itemName: 'Squirrel Pillow',
    price: '12.99',
    itemCategory: 'Pillow',
    src: 'pillow1.jpg',
    description: 'This is Squirrel Pillow'
  },
  {
    id: 'fox',
    id2: 'fox2',
    itemName: 'Fox Pillow',
    price: '12.99',
    itemCategory: 'Pillow',
    src: 'pillow2.jpg',
    description: 'This is Fox Pillow'
  },
  {
    id: 'littlePanda',
    id2: 'littlePanda2',
    itemName: 'Little Panda Pillow',
    price: '12.99',
    itemCategory: 'Pillow',
    src: 'pillow3.jpg',
    description: 'This is Little Panda Pillow'
  },
  {
    id: 'potato',
    id2: 'potato2',
    itemName: 'Potato Pillow',
    price: '12.99',
    itemCategory: 'Pillow',
    src: 'pillow4.jpg',
    description: 'This is Potato Pillow'
  },
  {
    id: 'panda',
    id2: 'panda2',
    itemName: 'Panda Pillow',
    price: '12.99',
    itemCategory: 'Pillow',
    src: 'pillow5.jpg',
    description: 'This is Panda Pillow'
  },
  {
    id: 'ball',
    id2: 'ball2',
    itemName: 'Ball Pom Fringe Duvets',
    price: '12.99',
    itemCategory: 'Duvets',
    src: 'BALL_POM_FRINGE_DUVETS.jpg',
    description: 'This is Ball Pom Fringe Duvets'
  },
  {
    id: 'bamboo',
    id2: 'bamboo2',
    itemName: 'Bamboo Sheet',
    price: '12.99',
    itemCategory: 'Sheets',
    src: 'Bamboo_Sheet.jpg',
    description: 'This is Bamboo Sheet'
  },
  {
    id: 'cotton',
    id2: 'cotton2',
    itemName: 'Cotton Sheet',
    price: '12.99',
    itemCategory: 'Sheets',
    src: 'cotton.jpg',
    description: 'This is Cotton Sheet'
  },
  {
    id: 'flannel',
    id2: 'flannel2',
    itemName: 'Flannel Sheet',
    price: '12.99',
    itemCategory: 'Sheets',
    src: 'Flannel_sheet.jpg',
    description: 'This is Flannel Sheet'
  },
  {
    id: 'vida',
    id2: 'vida2',
    itemName: 'VIDA Duvets',
    price: '12.99',
    itemCategory: 'Duvets',
    src: 'VIDA_Duvet.jpg',
    description: 'This is VIDA Duvets'
  }
];

const selectItem = document.querySelector('#selectItem');
const leftItem = document.querySelector('#item_left');
const rightItem = document.querySelector('#item_right');

function addClick() {
  for (let i = 0; i < items.length; i++) {
    document.getElementById(items[i].id).onclick = function() {
      leftItem.style = 'display: none';
      rightItem.style = 'display: none';
      selectItem.innerHTML = `<div>
      <div><img src="${items[i].src}" alt="" /></div>
      <h2 class="itemName">${items[i].itemName}</h2>
      <h4 class="description">${items[i].description}</h5>
      <h3 class="price">${items[i].price}</h3>
      <h3 class="itemCategory">${items[i].itemCategory}</h4>
      </div>`;
      selectItem.removeAttribute('hidden');
      if (!document.getElementById('contactFill').hidden) {
        document.getElementById('contactFill').hidden = 'hidden';
      }
    };
  }
  for (let i = 0; i < items.length; i++) {
    document.getElementById(items[i].id2).onclick = function() {
      leftItem.style = 'display: none';
      rightItem.style = 'display: none';
      selectItem.innerHTML = `<div>
    <div><img src="${items[i].src}" alt="" /></div>
    <h2 class="itemName" >${items[i].itemName}</h2>
    <h4 class="description">${items[i].description}</h5>
    <h3 class="price">${items[i].price}</h3>
    <h3 class="itemCategory">${items[i].itemCategory}</h4>
    </div>`;
      selectItem.removeAttribute('hidden');
      if (!document.getElementById('contactFill').hidden) {
        document.getElementById('contactFill').hidden = 'hidden';
      }
    };
  }
}
document.getElementById('main_page').addEventListener('click', function() {
  selectItem.hidden = 'hidden';
  rightItem.style = 'display: block';
  leftItem.style = 'display: block';
});
var pElement = document.getElementById('drop').querySelectorAll('p');

for (let i = 0; i < pElement.length; i++) {
  pElement[i].addEventListener('click', function() {
    document.querySelector('#item_left').style = 'display: none';
    document.querySelector('#item_right').style = 'display: none';
    selectItem.removeAttribute('hidden');
    selectItem.innerHTML = ``;
    if (this.innerHTML === 'Pillow') {
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategory === 'Pillow') {
          selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
          addClick();
        }
      }
    } else if (this.innerHTML === 'Pillow &amp; Duvets') {
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategory === 'Pillow' || items[i].itemCategory === 'Duvets') {
          selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
          addClick();
        }
      }
    } else if (this.innerHTML === 'BEDDING') {
      for (let i = 0; i < items.length; i++) {
        selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
        addClick();
      }
    } else if (this.innerHTML === 'Duvets') {
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategory === 'Duvets') {
          selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
          addClick();
        }
      }
    } else if (this.innerHTML === 'Sheets') {
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategory === 'Sheets') {
          selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
          addClick();
        }
      }
    }
    if (!document.getElementById('contactFill').hidden) {
      document.getElementById('contactFill').hidden = 'hidden';
    }
  });
}
function addClick2() {
  document.querySelector('#item_left').style = 'display: none';
  document.querySelector('#item_right').style = 'display: none';
  selectItem.removeAttribute('hidden');
  selectItem.innerHTML = ``;
  if (this.innerHTML === 'Pillow') {
    for (let i = 0; i < items.length; i++) {
      if (items[i].itemCategory === 'Pillow') {
        selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
        addClick();
      }
    }
  } else if (this.innerHTML === 'Pillow &amp; Duvets') {
    for (let i = 0; i < items.length; i++) {
      if (items[i].itemCategory === 'Pillow' || items[i].itemCategory === 'Duvets') {
        selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
        addClick();
      }
    }
  } else if (this.innerHTML === 'BEDDING') {
    for (let i = 0; i < items.length; i++) {
      selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
      addClick();
    }
  } else if (this.innerHTML === 'Duvets') {
    for (let i = 0; i < items.length; i++) {
      if (items[i].itemCategory === 'Duvets') {
        selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
        addClick();
      }
    }
  } else if (this.innerHTML === 'Sheets') {
    for (let i = 0; i < items.length; i++) {
      if (items[i].itemCategory === 'Sheets') {
        selectItem.innerHTML += document.getElementById(items[i].id).innerHTML;
        addClick();
      }
    }
  }
  document.getElementById('contactFill').hidden = 'hidden';
}
var pLeft = document.getElementById('leftPart').querySelectorAll('p');
for (let i = 0; i < pLeft.length; i++) {
  pLeft[i].addEventListener('click', addClick2);
  document.getElementById('unClickable').removeEventListener('click', addClick2);
}
addClick();
var oBox = document.getElementsByName('requestType');
for (let i = 0; i < oBox.length; i++) {
  oBox[i].addEventListener('click', function() {
    if (oBox[i].value === 'Older Problem' && oBox[i].checked) {
      if (document.getElementById('orderProblem').hidden) {
        document.getElementById('orderProblem').removeAttribute('hidden');
      }
    } else {
      document.getElementById('orderProblem').hidden = 'hidden';
    }
  });
}
document.getElementById('closeNav').addEventListener('click', function() {
  this.hidden = 'hidden';
  document.getElementById('openNav').removeAttribute('hidden');
  var styleAdd = document.createElement('style');
  styleAdd.id = 'styleAdd';
  styleAdd.innerHTML =
    '#leftPart {width: 10%;}#navTitle{opacity: 0;font-size: 0;}.leftNav{opacity: 0;font-size: 0;}';
  document.head.appendChild(styleAdd);
});
document.getElementById('openNav').addEventListener('click', function() {
  this.hidden = 'hidden';
  document.getElementById('closeNav').removeAttribute('hidden');
  document.head.removeChild(document.getElementById('styleAdd'));
});
