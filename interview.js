const x = [[1, 2, 3],[4,5,6]]; 
// const y = [[...x[0]],[...x[1]]]
const y = x.map((item)=>[...item])
y[0].push(4);

console.log(x);
