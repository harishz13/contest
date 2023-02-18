let myDiv = document.getElementById("food");
fetch("https://free-food-menus-api-production.up.railway.app/burgers")
.then((response) => response.json())
.then((data)=>{
    const newHTML = data.burgers.map((burger)=>{
    return `

    <div class='food-cnt'>
    <h1>${burger.name}</h1>



    <div>

    `;

    })
    myDiv.innerHTML=newHTML;
})
   
