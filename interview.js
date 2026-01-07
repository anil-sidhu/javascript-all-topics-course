let arr = [1, 2, 3, 2, 4, 1, 5, 1];
let obj = {};
let unique = []
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

    if (!obj[arr[i]]) {
        obj[arr[i]] = true
        unique.push(arr[i])
    }

}
console.log(unique);


