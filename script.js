document.addEventListener('DOMContentLoaded', function() {
    const chef1 = document.getElementById('chef1');
    const chef2 = document.getElementById('chef2');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');

    chef1.addEventListener('click', function() {
        displayMessage("Hello there, I'm Yadnyesh, a programmer with a year of experience.");
    });

    chef2.addEventListener('click', function() {
        displayMenu();
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    function displayMessage(message) {
        popup.innerHTML = `<p>${message}</p>`;
        overlay.style.display = 'block';
    }

    function displayMenu() {
        popup.innerHTML = `
            <p>Menu:</p>
            <ul>
                <li><a href="#">What I have worked with</a></li>
                <li><a href="#">Qualifications</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        `;
        overlay.style.display = 'block';
    }
});
