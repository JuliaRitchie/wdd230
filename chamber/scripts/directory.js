const url = 'https://juliaritchie.github.io/wdd230/chamber/directory.json'

const card_view = document.querySelector('#cards')
const list_view = document.querySelector('#list')
card_view.addEventListener('click', () => {
    async function getBusinessData() {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
        displayBusiness(data.businesses);
      }
    getBusinessData();})
list_view.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})

function showCards(){
    let row = document.querySelectorAll('tr');
    row.forEach((item) => {
        item.remove();
    })

    let section = document.querySelectorAll('section');
    section.forEach((item) => {
        item.remove();
    })

}async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    displayBusiness(data.businesses);
  }
getBusinessData();

const displayBusiness = (businesses) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let p = document.createElement('p');
      let p2 = document.createElement('p');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${business.name}`;
      p.textContent = `Address: ${business.address}`
      p2.textContent = `Website: ${business.website}`
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', business.imageurl);
      portrait.setAttribute('alt', `Logo of ${business.name}`);
      portrait.setAttribute('loading', 'lazy');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(p);
      card.appendChild(p2);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression



function displayTable(businesses){
    let row = document.querySelectorAll('tr');
    row.forEach((item) =>{
    item.remove();})
    
    businesses.forEach((business) => {
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_address = document.createElement('td');
        let td_website = document.createElement('td');

        td_name.textContent = `${business.name}`;
        td_address.textContent = business.address;
        td_website.textContent = business.website;

        tr.appendChild(td_name);
        tr.appendChild(td_address);
        tr.appendChild(td_website);
        document.querySelector('table').appendChild(tr);
    })
}
