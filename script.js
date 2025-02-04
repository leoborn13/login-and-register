const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

const btnpopup = document.querySelector('.btnlogin-popup');
const iconeClose = document.querySelector('.icone-close');

registerlink.addEventListener('click', () => {
  wrapper.classList.add('active');
  
});

loginlink.addEventListener('click', () => {
  wrapper.classList.remove('active');
  
});

btnpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    
  });

iconeClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    
  });


