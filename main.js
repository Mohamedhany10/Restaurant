window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("mo" , window.scrollY > 0);
    });
    function togglemenu(){
        const menuToggle = document.querySelector('.menuToggle');
        const navigation = document.querySelector('.navigation');
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }