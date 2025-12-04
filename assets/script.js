<!-- FILE: assets/script.js -->
// Minimal JS for navigation active link and contact form demo
document.addEventListener('DOMContentLoaded',function(){
  // set active nav link
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(a => {
    if(a.href === location.href || location.pathname.endsWith(a.getAttribute('href'))){
      a.classList.add('active')
      a.style.color = '';
    }
  })

  // contact form demo
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
      if(!name||!email||!message){
        alert('Please complete all fields.');
        return;
      }
      // demo: show a friendly confirmation and clear fields
      alert('Thanks, ' + name + '! Your message was received (demo).')
      form.reset();
    })
  }
})
