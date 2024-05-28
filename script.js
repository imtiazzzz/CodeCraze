// script.js
document.addEventListener('DOMContentLoaded', function() {
    const packages = document.querySelectorAll('.package');
    const signUpButton = document.querySelectorAll('.sign-up');
    const thankYouMessage = document.getElementById('thank-you');
    const chosenRoomsText = document.getElementById('chosen-rooms');
    const contactForm = document.getElementById('contact-form');

    packages.forEach(pkg => {
        const plusButton = pkg.querySelector('.plus');
        const minusButton = pkg.querySelector('.minus');
        const roomsText = pkg.querySelector('.rooms');
        const priceText = pkg.querySelector('.price');
        let roomCount = 1;
        let roomPrice = parseInt(priceText.textContent.replace('$', ''));

        plusButton.addEventListener('click', function() {
            roomCount++;
            updateRoomInfo();
        });

        minusButton.addEventListener('click', function() {
            if (roomCount > 1) {
                roomCount--;
                updateRoomInfo();
            }
        });

        function updateRoomInfo() {
            roomsText.textContent = roomCount + ' room' + (roomCount > 1 ? 's' : '');
            priceText.textContent = '$' + (roomCount * roomPrice);
        }
    });

    signUpButton.forEach(button => {
        button.addEventListener('click', function() {
            const roomsText = button.parentElement.querySelector('.rooms').textContent;
            chosenRoomsText.textContent = roomsText;
            thankYouMessage.style.display = 'block';
        });
    });

    contactForm.addEventListener('Send Message', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('All fields are required.');
        }
    });
});
