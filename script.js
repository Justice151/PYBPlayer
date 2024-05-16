function validateGameCode() {
    const gameCode = document.getElementById("game-code").value.trim();
    if (gameCode !== "") {
        fetch('http://localhost:5000/check_game_code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code: gameCode })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("message").innerText = data.error;
            } else {
                window.location.href = `player.html?code=${gameCode}`;
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        document.getElementById("message").innerText = "Please enter a game code.";
    }
}
