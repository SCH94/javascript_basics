
//Solution for https://codepen.io/sch94/pen/BwOMqb:

var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i].toUpperCase().slice(0,1) + cities[i].toLowerCase().slice(1);
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
