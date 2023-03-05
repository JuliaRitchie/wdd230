const url = 'https://juliaritchie.github.io/wdd230/chamber/directory.json'
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
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${business.name}`;
     
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', business.imageurl);
      portrait.setAttribute('alt', `Logo of ${business.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression



function displayTable(prophets){
    let row = document.querySelectorAll('tr');
    row.forEach((item) =>{
    item.remove();})
    
    prophets.forEach((prophet) => {
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_birthplace = document.createElement('td');
        let td_birthdate = document.createElement('td');

        td_name.textContent = `${prophet.name} ${prophet.lastname}`;
        td_birthplace.textContent = prophet.birthplace;
        td_birthdate.textContent = prophet.birthdate;

        tr.appendChild(td_name);
        tr.appendChild(td_birthplace);
        tr.appendChild(td_birthdate);
        document.querySelector('table').appendChild(tr);
    })
}