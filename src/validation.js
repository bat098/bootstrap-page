const email = document.querySelector('.email');
const messageBox = document.querySelector('.messageBox');
const message = document.querySelector('.message');
const submitBtn = document.querySelector('.submitBtn');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    checkdata();
});

function checkdata() {
    const emailValue = email.value
    if (emailValue === '') {

        message.innerHTML = 'Email cannot be blank'
        messageBox.querySelector('#success').classList = 'success'
        messageBox.querySelector('#error').classList = 'error show'

    }
    else {
        if (emailRegex.test(emailValue)) {
            message.innerHTML = 'Email is correct'
            messageBox.querySelector('#success').classList = 'success show'
            messageBox.querySelector('#error').classList = 'error'
        }
        else {
            message.innerHTML = 'email is not valid'
            messageBox.querySelector('#success').classList = 'success'
            messageBox.querySelector('#error').classList = 'error show'
        }
    }
}