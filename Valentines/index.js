const yesBtn = document.querySelector('#yes-button');
const noBtn = document.querySelector('#no-button');
const questionText = document.querySelector('#question');
const mainGif = document.querySelector('#display-gif');

        // Function to move the "No" button
        function moveButton() {
            // Calculate random positions within the screen bounds
            // Subtracting button size so it doesn't go off edge
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        }

        // Desktop: Move on hover
        noBtn.addEventListener('mouseover', moveButton);

        // Mobile: Move on touch
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Stop the click from firing
            moveButton();
        });

        // The Success Moment
        yesBtn.addEventListener('click', () => {
            // 1. Fire Confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff4d6d', '#ffffff', '#ffafcc']
            });

            // 2. Update the Page
            questionText.innerText = "Yay! See you soon! ❤️";
            mainGif.src = "gif/Love You Hearts GIF by Mino Games.gif" ; // Success GIF
            
            // 3. Clean up
            noBtn.classList.add('hidden');
            yesBtn.style.transform = "scale(1.2)";
            yesBtn.innerText = "Success!";
        });
