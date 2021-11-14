const loginFormHandler = async (event) => {
    event.preventDefault();

const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            
            document.location.replace('/posts');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector('#name-signup').value.trim();
const email = document.querySelector('#email-signup').value.trim();
const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        // fetch will return the results of passing the name, email, and password
        // to the /api/users endpoint to save it.
        // await tells the program to wait unitl the fetch() request assigns a value
        // back to response. Only then the program will continue execution as normal.
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // Success response, likely 200 code.
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
