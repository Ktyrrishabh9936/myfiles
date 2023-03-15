const observer = new IntersectionObserver((entries)=>{
    entries.forEach((e)=>{
        if (e.isIntersecting){
            e.target.classList.add('show')
        }
        else{
            e.target.classList.remove('show')
        }
    });
});

const hidd = document.querySelectorAll('.hidden');
hidd.forEach((el)=> observer.observe(el));