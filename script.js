function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.box');
    let l = document.getElementsByTagName('h3');
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('h3')[0];
        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        }
        else {
            item[i].style.display = "none";
        }
    }
};

let darkmode = document.querySelector('#darkmode');

darkmode.onclick= () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color')
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color')
    }
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('navlist');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll =() => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal ({
    distance: '70px',
    duration: 2700,
    reset: true
});
sr.reveal('.hero-img',{delay:350, origin: 'top'});