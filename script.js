document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        let isValid = true;

        if (!nameInput.value.trim()) {
            isValid = false;
            setError(nameInput, 'Please enter your name');
        } else {
            removeError(nameInput);
        }

        if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
            isValid = false;
            setError(emailInput, 'Please enter a valid email address');
        } else {
            removeError(emailInput);
        }

        if (!messageInput.value.trim()) {
            isValid = false;
            setError(messageInput, 'Please enter your message');
        } else {
            removeError(messageInput);
        }

        // If form is valid, submit the form
        if (isValid) {
            // Here you can add code to submit the form data to your backend or handle it as needed
            alert('Form submitted successfully!');
            form.reset(); // Reset the form
        }
    });

    // Function to set error message for a field
    function setError(input, message) {
        const formControl = input.parentElement;
        const errorMessage = formControl.querySelector('.error-message');

        errorMessage.innerText = message;
        formControl.classList.add('error');
    }

    // Function to remove error message for a field
    function removeError(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('error');
    }

    // Function to validate email format
    function isValidEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});





document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const thumbnail = project.querySelector('img');
        const link = project.querySelector('a');

        thumbnail.addEventListener('click', function(event) {
            event.preventDefault();
            const imageUrl = thumbnail.getAttribute('src');
            const title = link.querySelector('h3').innerText;

            openLightbox(imageUrl, title);
        });
    });

    function openLightbox(imageUrl, title) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        lightbox.appendChild(overlay);
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        lightbox.appendChild(modal);
        
        const img = document.createElement('img');
        img.src = imageUrl;
        modal.appendChild(img);
        
        const caption = document.createElement('p');
        caption.textContent = title;
        modal.appendChild(caption);
        
        document.body.appendChild(lightbox);
        
        overlay.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
    }
});
