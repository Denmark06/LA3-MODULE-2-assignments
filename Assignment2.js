const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));

let addedValue = 0;
  
for (let i = 0; i < maxLimit; i++) {
  for (let j = 0; j < maxLimit; j++) {
   
    addedValue = i + j;   

   
    console.log(`[${i}] [${j}] Added value is ${addedValue}`);
  }
}
