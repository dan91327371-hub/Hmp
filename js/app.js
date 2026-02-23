// HMP Application JavaScript Functions

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
}

function renderData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.name; // Assuming each item has a name property
        container.appendChild(div);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Form submitted:', Object.fromEntries(formData));
}

// Additional utility functions can be added here...