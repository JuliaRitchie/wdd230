if(!localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', Date.now())
} else{
    let currentdate = Date.now();
    let lastdate = localStorage.getItem('lastVisit')

    let diff = (currentdate - lastdate)/1000/60/60/24/3 - 1
    console.log(diff)
    let diff_rounded = Math.round(diff)
    document.querySelector('#diff').textContent = diff_rounded
}

const images = document.querySelectorAll('[data-src]');

const options = {
    threshold: .5
};

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source){
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else{
                preloadImage(entry.target)
            }
            console.log(entries);
        })
    },
    options
    );

images.forEach(img =>{
    io.observe(img);
})