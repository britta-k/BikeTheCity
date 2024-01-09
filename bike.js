
//Campus page: function to modify HTML and CSS to display information about swedish universities and how many bikes are available at each location

async function getSwedishUniversities() {
      const response = await fetch("http://universities.hipolabs.com/search?country=Sweden"); //fetching data
      const data = await response.json(); //converting data

      
      const universityNames = data.map(university => { //using map function to go over the array
        const randomNumber = Math.floor(Math.random() * 50) + 1; // generating a random number for each university name
        return {
            name: university.name, // returning each university name with a random number
            bikes: randomNumber
          };
      });

      console.log('Swedish University Names:', universityNames);
    
      const SwedishUniversities = document.querySelector(".SwedishUniversities");

      //adding API data to HTML >>
      //function for applying a different CSS rule when the random number generated is less or equal to ten >>
      SwedishUniversities.innerHTML = 
            `<div class="SwedishUniversities">
                <ul>
                ${universityNames.map(item => `
                    <li id="${item.bikes <= 10 ? 'low-bikes' : ''}">${item.name} 
                    <ul>
                        <li id="bikeNumber">Bikes: ${item.bikes}</li>
                    </ul>
                    </li>`).join("")} 
                </ul>
            </div>`;
  }


//Join page: function to show an alert when submitting the form
  function showConfirmation() {
    alert("Order confirmation and receipt have been sent to your email. Welcome to CityBike Community!");
}

//Navigation bar

const burgerIcon = document.getElementById("burgerIcon");
const navElement = document.querySelector(".navigation");

burgerIcon.addEventListener("click", function () {
    navElement.classList.toggle("display");

    if (burgerIcon.alt === "burger menu icon") {
        burgerIcon.alt = "close icon";
    } else {
        burgerIcon.alt = "burger menu icon";
    }
});


  
 