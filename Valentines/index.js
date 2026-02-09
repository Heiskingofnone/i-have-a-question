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

        
        // Mobile: Move on touch
        noBtn.addEventListener('click', () => {
             questionText.innerText = "OH, ARE YOU SURE? 😜";
            mainGif.src = "https://tenor.com/en-GB/view/drake-shrug-sad-disappointed-gif-3654380992546976451.gif" ; // dissapointed GIF
            
           
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
            questionText.innerText = "Im going to give you the world darling! ❤️";
            mainGif.src = "https://tenor.com/en-GB/view/ride-your-wave-kimi-to-nami-ni-noretara-ride-your-wave2019-2019-gkids-gif-25660833.gif" ; // Success GIF
            
            // 3. Clean up
            noBtn.classList.add('hidden');
            yesBtn.style.transform = "scale(1.2)";
            yesBtn.innerText = "Success!";
        });
