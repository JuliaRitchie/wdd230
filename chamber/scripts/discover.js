if(!localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', Date.now())
} else{
    let currentdate = Date.now();
    let lastdate = localStorage.getItem('lastVisit')

    let diff = (currentdate - lastdate)/1000/60/60/24
}