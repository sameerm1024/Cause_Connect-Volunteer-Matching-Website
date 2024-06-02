document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const skills = document.getElementById('skills').value;

            const registerData = { name, email, password, skills };

            fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registerData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'User registered successfully') {
                    alert('Registration successful');
                    window.location.href = 'login.html';
                } else {
                    alert(`Registration failed: ${data.message}`);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert(`Registration failed: ${error.message}`);
            });
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const loginData = { email, password };

            fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Login successful') {
                    alert('Login successful');
                    window.location.href = 'dashboard.html';
                } else {
                    alert(`Login failed: ${data.message}`);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert(`Login failed: ${error.message}`);
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    
    if (eventForm) {
        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const eventName = document.getElementById('eventName').value;
            const organizationName = document.getElementById('organizationName').value;
            const eventDescription = document.getElementById('eventDescription').value;
            const eventTime = document.getElementById('eventTime').value;
            const eventDate = document.getElementById('eventDate').value;
            const eventPlace = document.getElementById('eventPlace').value;
            const eventSkills = document.getElementById('eventSkills').value.split(',').map(skill => skill.trim());

            const eventData = {
                name: eventName,
                organization: organizationName,
                description: eventDescription,
                time: eventTime,
                date: eventDate,
                place: eventPlace,
                skills: eventSkills
            };

            fetch('http://localhost:3000/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Event added successfully') {
                    alert('Event added successfully');
                    window.location.href = 'dashboard.html';
                } else {
                    alert('Failed to add event');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to add event');
            });
        });
    }
});
