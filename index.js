console.log("helloworld")
const userInput = prompt("Please enter your order","vanilla,vanilla,vanilla,strawberry,coffee,coffee")

const flavors = userInput.split(',');
 const flavorCounts = {};

flavors.forEach(function(flavor) {
    flavor = flavor.trim(); 
    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  });
  
  
  console.table(flavorCounts);

