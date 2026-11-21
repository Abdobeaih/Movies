 // Header shadow on scroll
      window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
          header.classList.add('bg-text', 'shadow-md');
          header.classList.remove('bg-transparent');
        } else {
          header.classList.remove('bg-text', 'shadow-md');
          header.classList.add('bg-transparent');
        }
      });

      // Mobile menu toggle
      const menuIcon = document.getElementById('menu-icon');
      const navbar = document.getElementById('navbar');
      
      menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('top-[-578px]');
        if (!navbar.classList.contains('top-[-578px]')) {
          navbar.classList.add('top-full');
        } else {
          navbar.classList.remove('top-full');
        }
      });

      // Close mobile menu when clicking on links
      const navLinks = document.querySelectorAll('.navbar-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navbar.classList.add('top-[-578px]');
          navbar.classList.remove('top-full');
        });
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
         tailwind.config = {
        theme: {
          extend: {
            colors: {
              'main': '#ff2c1f',
              'text': '#020307',
              'bg': '#fff',
            },
            fontFamily: {
              'poppins': ['Poppins', 'sans-serif'],
            },
            animation: {
              'fade-in': 'fadeIn 0.5s ease-in-out',
            },
            keyframes: {
              fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              }
            }
          }
        }
      }