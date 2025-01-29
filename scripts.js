const x = 2;
let y = 4;
function update(arg){
  return Math.random() + y * arg;
}

const result = update(x);
console.log(result);
