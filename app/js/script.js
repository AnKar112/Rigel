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
    if (confirm2.checked && name2 !== null && number2 !== null) {
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

$(document).ready(function() {

	// Smooth Scrolling for anchor tags
	$(document).on('click', 'a.smooth', function(event){
    event.preventDefault();
    smoothScrollTo($.attr(this, 'href'));
	});

  // Scroll Control sections
	var scrollControl = ScrollControl([
		'#section1',
		'#section2',
		'#section3',
        '#section4',
        '#section5',
        '#section6',
        '#section7',
        '#section8',
        '#section9'
	]);

  // Backspace and up/down arrow keys
	// $(document).keydown(function(e) {
    // if (e.which==38) {
    // 	e.preventDefault();
    // 	scrollControl.prevSection();
    // } else if (e.which==40) {
    // 	e.preventDefault();
    // 	scrollControl.nextSection();
    // } else if (e.which==32) {
    // 	e.preventDefault();
    // 	scrollControl.nextSection();
    // }
	// });
});

