const requestURL = 'https://juliaritchie.github.io/wdd230/chamber/directory.json'
function showCards(){
    let row = document.querySelectorAll('tr');
    row.forEach((item) => {
        item.remove();
    })

    let section = document.querySelectorAll('section');
    section.forEach((item) => {
        item.remove();
    })

}