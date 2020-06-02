const increment = 200;
const maxTime = 5000;
let delay = 100;
const elemenets = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

while (delay < maxTime) {
  for (const element of elemenets) {
   
    setTimeout(() => {
      process.stdout.write(`\r${element}    `);
    }, delay);

    if (delay < maxTime) {
      delay += increment;
      break;
    }
    
  }
}
setTimeout(() => {
  console.log();
}, delay);