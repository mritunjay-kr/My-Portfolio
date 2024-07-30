
document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

document.getElementById('darkmode').addEventListener('click', () => {
    document.body.classList.toggle('active');
  });
  
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
});

document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
  
    const formData = new FormData(this);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        console.log('Raw response:', response);
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
        if (data.success) {
            alert('Message sent successfully!');
            this.reset();
        } else {
            alert('Failed to send message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
