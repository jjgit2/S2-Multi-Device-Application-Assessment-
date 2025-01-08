// Page navigation

    // Navigation functionality
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const targetPage = link.getAttribute('href').substring(1); // Use the href attribute for navigation

        pages.forEach(page => {
          page.classList.add('hidden');
        });

        const targetElement = document.getElementById(targetPage);
        if (targetElement) {
          targetElement.classList.remove('hidden');
        }
      });
    });

    // Signup Functionality
    document.getElementById('submit').addEventListener('click', async (event) => {
      event.preventDefault();

      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      if (firstName && lastName && email && password) {
        try {
          const response = await fetch('http://localhost:4000/api/user/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password }),
          });

          const data = await response.json();

          if (response.ok) {
            alert('Sign Up Successful!');
            document.getElementById('signup').classList.add('hidden');
            document.getElementById('login').classList.remove('hidden');
          } else {
            alert(data.message || 'Sign Up Failed!');
          }
        } catch (err) {
          alert('An error occurred. Please try again later.');
        }
      } else {
        alert('All fields are required!');
      }
    });
  