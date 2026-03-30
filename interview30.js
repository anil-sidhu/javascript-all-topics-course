const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const union = [];
const obj = {}
for (item of arr1) {
    union.push(item);
    obj[item] = true
}
for (item of arr2) {

    if (!obj[item]) {
        union.push(item);
    }

}
console.log(union);




