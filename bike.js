getSwedishUniversities();

async function getSwedishUniversities() {
      const response = await fetch("http://universities.hipolabs.com/search?country=Sweden");
      const data = await response.json();

      //const universityNames = data.map(university => university.name);

      const universityNames = data.map(university => {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        return `${university.name}; Bikes: ${randomNumber}`;
      });
      
      console.log('Swedish University Names:', universityNames);
    
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      const SwedishUniversities = document.querySelector("#SwedishUniversities");

      SwedishUniversities.innerHTML = 
            `<div id="SwedishUniversities">
                <h1>University campuses with BikeTheCity</h1>
                <ul>
                    <li> ${universityNames.map(
                        item => `<li>${item}</li>`).join("")}
                    </li>
                </ul>
            </div>`
  }

 


  
 