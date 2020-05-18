
  

const hideBtn = document.getElementById('hideShowBtn');


hideBtn.onclick = function() {
    let div = document.getElementById('chatbox');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};



/*function showBtn() {
    document.getElementById("display").style.display = "none";
    let hide = document.querySelectorAll("");
    hide.forEach(function(hide) {
       hide.src = hide.dataset.src
        })
  }*/
  