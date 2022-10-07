// Ajax Api Call function
var loadBtn = document.querySelector('.load-btn a');
var counter = 6;
var counterSecond = 0;

makerequest();
// Load more function
loadBtn.addEventListener('click', function () {
  makerequest();
  counter += 6;
  counterSecond += 6;
})

// fetchApi function
function makerequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = alertContent;
  xhttp.open("GET", 'https://jsonplaceholder.typicode.com/posts');
  xhttp.send();
}

function alertContent() {
  if (this.readyState === 4 && this.status === 200) {
    data = JSON.parse(this.responseText);
    var cardItems = document.querySelector('.card-items');
    counter = counter < data.length ? counter : data.length;
    for (var i = counterSecond; i < counter; i++) {
      if (i === data.length - 1) {
        loadBtn.classList.add('hide-btn');
      }
      var cardList = document.createElement('li');
      cardList.classList.add('card-list');
      cardList.innerHTML = `<h2>${data[i].title.slice(0,20)}</h2>
                            <p>${data[i].body}</p>`;
      cardItems.appendChild(cardList);
    }
  }
}























