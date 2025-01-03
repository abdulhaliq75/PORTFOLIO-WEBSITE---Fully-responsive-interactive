const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 


    // Initialize EmailJS with your user ID
    emailjs.init("abdulhaliq");

    // Add event listener for form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent the form from submitting normally

        // Get form values
        const fullName = document.querySelector('[name="fullName"]').value;
        const email = document.querySelector('[name="email"]').value;
        const mobile = document.querySelector('[name="mobile"]').value;
        const subject = document.querySelector('[name="subject"]').value;
        const message = document.querySelector('[name="message"]').value;

        // Validate the fields
        if (!fullName || !email || !mobile || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validateMobile(mobile)) {
            alert("Please enter a valid mobile number.");
            return;
        }

        // Send email using EmailJS
        emailjs.sendForm("service_koisfrp", "template_wnz893b", this)
            .then((response) => {
                console.log('SUCCESS!', response);
                alert("Your message has been sent successfully!");
                document.getElementById('contactForm').reset();  // Reset the form after success
            }, (error) => {
                console.log('FAILED...', error);
                alert("Oops! Something went wrong, please try again.");
            });
    });

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    // Mobile number validation function
    function validateMobile(mobile) {
        const mobilePattern = /^[0-9]{10}$/;
        return mobilePattern.test(mobile);
    }

    (function(){
        emailjs.init({
          publicKey: "BUFg6aMkKkYyU6smI",
        });
     })();
