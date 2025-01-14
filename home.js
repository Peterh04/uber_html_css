const aboutBtn = document.querySelector('.aboutBtn');
const aboutMenu = document.querySelector('.dropdownMenuAbout');
const body = document.querySelector('.body');

aboutMenu.style.visibility = 'hidden'


aboutBtn.addEventListener('click', (e) =>{

    e.stopPropagation();
    aboutMenu.style.visibility = aboutMenu.style.visibility === 'hidden' ? 'visible' : 'hidden';

 

})


body.addEventListener('click', (e) => {
    
    if (aboutMenu.style.visibility === 'visible') {
       
        aboutMenu.style.visibility = 'hidden';
    }
});
