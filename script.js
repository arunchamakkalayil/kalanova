document.addEventListener('DOMContentLoaded', () => {
    // Form submission
    const form = document.getElementById('notify-form');
    const msgElement = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        if (email) {
            // Simulate API call
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Joining...';
            btn.disabled = true;

            setTimeout(() => {
                msgElement.textContent = 'Thank you! We will notify you when we launch.';
                msgElement.className = 'form-message success show';
                form.reset();
                
                btn.textContent = originalText;
                btn.disabled = false;

                setTimeout(() => {
                    msgElement.classList.remove('show');
                }, 5000);
            }, 1500);
        }
    });
});
