const url = "https://andejuli.github.io/wdd230/fruit.json";

let dropdown = document.getElementById('main-fruit');
let dropdown2 = document.getElementById('side-fruit1');
let dropdown3 = document.getElementById('side-fruit2');

fetch(url)  
  .then(  
    function(response) {  
      
  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown.append(option);
          
    	}    
      });  
    }  
  )  
  fetch(url)  
  .then(  
    function(response) {  
        
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown2.append(option);
          
    	}    
      });  
    }  
  ) 
  fetch(url)  
  .then(  
    function(response) {   
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown3.append(option);
          
    	}    
      });  
    }  
  ) 


var inputName= document.getElementById("fname");
localStorage.setItem("fname", inputName.value);

var inputEmail= document.getElementById("email");
localStorage.setItem("email", inputEmail.value);