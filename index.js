localStorage.setItem("userName","Prottoy Biswas");

let UserName= localStorage.getItem("userName");

localStorage.removeItem("userName");

console.log(UserName);

const countries=["India", "Bangladesh", "England"];

localStorage.setItem("Countries",JSON.stringify(countries));

const countryList=JSON.parse(localStorage.getItem("Countries"));
console.log(countryList);
// localStorage.removeItem("Countries");