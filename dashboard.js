document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('eventsContainer');
    const userNameSpan = document.getElementById('userName');
    const logoutButton = document.getElementById('logoutButton');

    // Fetch and display the user's name
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
        userNameSpan.textContent = user.name;
    }
    // Fetch events from the server
    fetch('http://localhost:3000/api/events')
        .then(response => response.json())
        .then(events => {
            // Clear the container
            eventsContainer.innerHTML = '';

            // Iterate over each event and create HTML elements to display them
            events.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';

                const eventName = document.createElement('h2');
                eventName.textContent = event.name;
                eventDiv.appendChild(eventName);

                const eventOrg = document.createElement('p');
                eventOrg.textContent = `Organization: ${event.organization}`;
                eventDiv.appendChild(eventOrg);

                const eventDesc = document.createElement('p');
                eventDesc.textContent = `Description: ${event.description}`;
                eventDiv.appendChild(eventDesc);

                const eventTime = document.createElement('p');
                eventTime.textContent = `Time: ${event.time}`;
                eventDiv.appendChild(eventTime);

                const eventDate = document.createElement('p');
                eventDate.textContent = `Date: ${event.date}`;
                eventDiv.appendChild(eventDate);

                const eventPlace = document.createElement('p');
                eventPlace.textContent = `Place: ${event.place}`;
                eventDiv.appendChild(eventPlace);

                const eventSkills = document.createElement('p');
                eventSkills.textContent = `Skills: ${event.skills.join(', ')}`;
                eventDiv.appendChild(eventSkills);

                eventsContainer.appendChild(eventDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
});
