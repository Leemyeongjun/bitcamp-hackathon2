const star1 = document.querySelector('#star-btn1');
const star2 = document.querySelector('#star-btn2');
const star3 = document.querySelector('#star-btn3');
const star4 = document.querySelector('#star-btn4');
const star5 = document.querySelector('#star-btn5');

(function() {

  starAction();

  review();

})();

function review() {
  document.querySelector('#add-btn').onclick = (e) => {
    var content = encodeURIComponent(document.querySelector('#f-content').value);
  
    fetch('http://localhost:8080/reviews', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: `content=${content}`
    })
    .then((response) => {return response.json();})
    .then((obj) => {
      var html = '';

      html = `${content}`;

      document.querySelector('#review1').innerHTML = html;
    })
    .catch((err) => {
      alert("서버 요청 오류!");
      console.log(err);
    });
  };
}

function starAction() {

  star1.addEventListener('click', function() {

    if (star1.className == 'on') {
      star2.classList.remove('on');
      star2.style.color = "lightgray";
      star3.classList.remove('on');
      star3.style.color = "lightgray";
      star4.classList.remove('on');
      star4.style.color = "lightgray";
      star5.classList.remove('on');
      star5.style.color = "lightgray";
    } else {
      star1.classList.add('on');
      star1.style.color = "black";
    }
  });

  star2.addEventListener('click', function() {

    if (star2.className == 'on') {
      star3.classList.remove('on');
      star3.style.color = "lightgray";
      star4.classList.remove('on');
      star4.style.color = "lightgray";
      star5.classList.remove('on');
      star5.style.color = "lightgray";
    } else {
      star1.classList.add('on')
      star2.classList.add('on');
      star1.style.color = "black";
      star2.style.color = "black";
    }
  });

  star3.addEventListener('click', function() {

    if (star3.className == 'on') {
      star4.classList.remove('on');
      star4.style.color = "lightgray";
      star5.classList.remove('on');
      star5.style.color = "lightgray";
    } else {
      star1.classList.add('on')
      star1.style.color = "black";
      star2.classList.add('on');
      star2.style.color = "black";
      star3.classList.add('on');
      star3.style.color = "black";
    }
  });

  star4.addEventListener('click', function() {

    if (star4.className == 'on') {
      star5.classList.remove('on');
      star5.style.color = "lightgray";
    } else {
      star1.classList.add('on')
      star1.style.color = "black";
      star2.classList.add('on');
      star2.style.color = "black";
      star3.classList.add('on');
      star3.style.color = "black";
      star4.classList.add('on');
      star4.style.color = "black";
    }
  });

  star5.addEventListener('click', function() {

    if (star5.className == 'on') {
      star5.classList.remove('on');
      star5.style.color = "lightgray";
    } else {
      star1.classList.add('on')
      star1.style.color = "black";
      star2.classList.add('on');
      star2.style.color = "black";
      star3.classList.add('on');
      star3.style.color = "black";
      star4.classList.add('on');
      star4.style.color = "black";
      star5.classList.add('on');
      star5.style.color = "black";
    }
  });

}