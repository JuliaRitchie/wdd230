const url = "https://andejuli.github.io/wdd230/fruit.json";

let dropdown = document.getElementById('main-fruit');
let dropdown2 = document.getElementById('side-fruit1');
let dropdown3 = document.getElementById('side-fruit2');
let form = document.getElementById('smoothie-form');
let form_submitted = document.querySelector('.form-submitted')
let submit_btn = document.getElementById('submit-btn')
const getFruit = async () => {
  const response = await fetch(url);
  const data = await response.json();
  
  for (let i = 0; i < data.length; i++) {
    option = document.createElement('option');
    option.text = data[i].name;
    option.value = data[i].name;
    dropdown.append(option);
    
}
  for (let i = 0; i < data.length; i++) {
    option = document.createElement('option');
    option.text = data[i].name;
    option.value = data[i].abbreviation;
    dropdown2.append(option);
    
  }    
  for (let i = 0; i < data.length; i++) {
    option = document.createElement('option');
    option.text = data[i].name;
    option.value = data[i].abbreviation;
    dropdown3.append(option);
    
} 
let selected_fruit;
let correct_fruit;
let carb = 0;
let protein = 0;
let fat = 0;
let sugar = 0;
let calories = 0;
document.querySelector("#submit-btn").addEventListener("click", comparing);
function comparing(){
  var x = document.getElementById('main-fruit').selectedIndex;
  selected_fruit = document.getElementsByTagName("option")[x].value;
  console.log(selected_fruit)
  
  data.forEach(displayFruit)
  function displayFruit(item){
    
    correct_fruit = item.name
    if (correct_fruit == selected_fruit) {
      carb += Number(item.nutritions.carbohydrates)
      protein += Number(item.nutritions.protein);
      fat += Number(item.nutritions.fat);
      calories += Number(item.nutritions.calories);
      sugar += Number(item.nutritions.sugar);
    }
  }
  var y = document.getElementById('side-fruit1').selectedIndex;
  selected_fruit = document.getElementsByTagName("option")[y].value;
  console.log(selected_fruit)
  
  data.forEach(displayFruit)
  function displayFruit(item){
    
    correct_fruit = item.name
    if (correct_fruit == selected_fruit) {
      carb += Number(item.nutritions.carbohydrates)
      protein += Number(item.nutritions.protein);
      fat += Number(item.nutritions.fat);
      calories += Number(item.nutritions.calories);
      sugar += Number(item.nutritions.sugar);
      
    }
  }
  var z = document.getElementById('side-fruit2').selectedIndex;
  selected_fruit = document.getElementsByTagName("option")[z].value;
  console.log(selected_fruit)
  
  data.forEach(displayFruit)
  function displayFruit(item){
    console.log(item)
    correct_fruit = item.name
    if (correct_fruit == selected_fruit) {
      carb += Number(item.nutritions.carbohydrates);
      protein += Number(item.nutritions.protein);
      fat += Number(item.nutritions.fat);
      calories += Number(item.nutritions.calories);
      sugar += Number(item.nutritions.sugar);
    }
  }
  form_submitted.innerHTML = `<h2>Carbohydrates: ${carb} g</h2> <h2>Protein: ${protein} g</h2> 
  <h2>Fat: ${fat} g</h2> <h2>Calories: ${calories} g</h2> <h2>Sugar: ${sugar} g</h2>`;
  let count = 0;
  if (!localStorage.getItem('drinks')){
    localStorage.setItem('drinks', 1);
  }
  else{
    count = Number(localStorage.getItem('drinks')) + 1;
    localStorage.setItem('drinks', count)
  }
  console.log(localStorage.getItem('drinks'))
}
}
getFruit()
// fetch(url)  
//   .then(  
//     function(response) {  
      
  
//       response.json().then(function(data) {  
//         let option;
        
//     	for (let i = 0; i < data.length; i++) {
//           option = document.createElement('option');
//       	  option.text = data[i].name;
//       	  option.value = data[i].name;
//       	  dropdown.append(option);
          
//     	}
//       return data

//       });  
//     }  
//   )  
//   fetch(url)  
//   .then(  
//     function(response) {  
        
//       response.json().then(function(data) {  
//         let option;
    
//     	for (let i = 0; i < data.length; i++) {
//           option = document.createElement('option');
//       	  option.text = data[i].name;
//       	  option.value = data[i].abbreviation;
//       	  dropdown2.append(option);
          
//     	}    
//       });  
//     }  
//   ) 
//   fetch(url)  
//   .then(  
//     function(response) {   
//       response.json().then(function(data) {  
//         let option;
    
//     	for (let i = 0; i < data.length; i++) {
//           option = document.createElement('option');
//       	  option.text = data[i].name;
//       	  option.value = data[i].abbreviation;
//       	  dropdown3.append(option);
          
//     	}    
//       });  
//     }

//   ); 


var inputName = document.getElementById("fname");
localStorage.setItem("fname", inputName.value);

var inputEmail = document.getElementById("email");
localStorage.setItem("email", inputEmail.value);

submit_btn.addEventListener('click', () => {
    console.log(inputName.value)

})
