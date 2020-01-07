var button = document.querySelector(".menu");
var menu = document.querySelector(".newNav");
var submit = document.querySelector("#form-submit");
var confirm = document.querySelector("#form-checkbox");
var submit2 = document.querySelector("#form-submit2");
var confirm2 = document.querySelector("#form-checkbox2");

submit.addEventListener('click', function(e){
    e.preventDefault()
	var name = document.querySelector(".form-name").value;
    var number = document.querySelector(".form-number").value;
    if (confirm.checked && name !== null && name !== '' && number !== null && number !== '') {
        fetch ('', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: name,
                number: number
            })
        })
        .then(function() {
            alert('Успешно отправлено!');
        });
    } else {
        alert('Вы должны принять пользовательское соглашение и заполнить все поля!');
    }
})

submit2.addEventListener('click', function(e){
    e.preventDefault()
	var name2 = document.querySelector("#form-name2").value;
    var number2 = document.querySelector("#form-number2").value;
    if (confirm2.checked && name2 !== null && name2 !== '' && number2 !== null && number2 !== '') {
        fetch ('', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: name2,
                number: number2
            })
        })
        .then(function() {
            alert('Успешно отправлено!');
        });
    } else {
        alert('Вы должны принять пользовательское соглашение и заполнить все поля!');
    }
})

button.onclick = function(e) {
    var target = e.target;
    if (target.classList.contains('closed')) {
        target.classList.remove('closed');
        this.classList.add('opened');
        menu.style.display = "flex";
        button.setAttribute('src', './img/svg/close.svg');
    } else {
        target.classList.remove('opened');
        this.classList.add('closed');
        menu.style.display = "none";
        button.setAttribute('src', './img/svg/menu.svg');
    }
}


