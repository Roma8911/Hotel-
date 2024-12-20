function toggleScrollUpButton() {
    let TOP_OFFSET = 200;
	let scrollY = window.scrollY;
    if (scrollY > TOP_OFFSET) {
        document.getElementById('scrollUpArrow').classList.add('visible');
    }
    else {
        document.getElementById('scrollUpArrow').classList.remove('visible');
    }
}

window.addEventListener('scroll', () => {
	toggleScrollUpButton();
});

var newFeedbacks = document.getElementById('hiddenFeedbacks');
var button = document.getElementById('showAllFeedbacks');

var show = true;

button.onclick = showAllFeedbacks
    
function showAllFeedbacks() {
    newFeedbacks.classList.toggle('hidden');
    newFeedbacks.classList.toggle('loaded');
    button.classList.toggle('loaded');
};

let buttonUp = document.getElementById('scrollUpArrow');
buttonUp.onclick = scrollUp;

function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

let subscribePopupButton = document.getElementById('subscribePopupButton')
subscribePopupButton.onclick = showModalWindow
function showModalWindow(){
    document.getElementById('overlay').classList.add('visible')
    document.getElementById('popupWindow').classList.add('visible')
}

let subscribePopupCloseButton = document.getElementById('subscribePopupCloseButton')
subscribePopupCloseButton.onclick = closeModalWindow
function closeModalWindow(){
    document.getElementById('overlay').classList.remove('visible')
    document.getElementById('popupWindow').classList.remove('visible')
}

