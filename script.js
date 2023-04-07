
//Display country name,Capital in the HTML page
//Sample Output: Country name: Afganisthan Capital:Kabul
var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        var div=document.createElement("div");
        div.style.textAlign="center";
        div.innerHTML=`Country  name: ${data1[i].name} Capital :${data1[i].capital}`;
        document.body.append(div);
        }
}
var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
//to add multiple classes to the same element
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <img src="${data1[i].flag}" class="card-img-top" alt="Country Flags">
        <div class="card-body text-primary">
        <h5 class="card-title">${data1[i].name}</h5>
          <p class="card-text"> Capital:${data1[i].capital}</p>
          <p class="card-text">Population:${data1[i].population}</p>
          <p class="card-text">region:${data1[i].region}</p>
          <p class="card-text">latlng:${data1[i].latlng}</p>
          <p class="card-text">Country Code:${data1[i].alpha3Code}</p>
        </div>
      </div>
      </div>`
        }
        document.body.append(container);
}
