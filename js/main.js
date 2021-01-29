var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  };
  
  if (text) {
    newElement.textContent = text;
  };
};

const elCards = $_('.cards')
const elCardsItems = $$_('.card')

elCards.addEventListener('click', evt => {
  console.log(evt.target.matches('.card'))
  if(evt.target.matches('.card')) {
    elCardsItems.forEach(item=> {
      item.classList.remove('active')
    });
    evt.target.classList.toggle('active')
  }
})
