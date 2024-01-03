
async function getSwedishUniversities() {
      const response = await fetch("http://universities.hipolabs.com/search?country=Sweden");
      const data = await response.json();

      //const universityNames = data.map(university => university.name);

      const universityNames = data.map(university => {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        return {
            name: university.name,
            bikes: randomNumber
          };
      });

      console.log('Swedish University Names:', universityNames);
    
      const SwedishUniversities = document.querySelector(".SwedishUniversities");

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

  function showConfirmation() {
    alert("Order confirmation and receipt have been sent to your email. Welcome to CityBike Community!");
}



  
 