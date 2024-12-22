const arr1 = [1,2,3,4, "Hoang",5,6,7,8];
const arr2 = arr1.find((item) => item%2 ===0);
console.log(arr2);

const element1 = arr1.find((item) => item > 100);
console.log(element1);

const element = arr1.findLast(function(item){ // tương tự find nhận giá trị phần tử cuối cùng
    return item > 3
})
console.log(element);
const element2 = arr1.findIndex(function(item){ // tương tự findIndex nhận giá trị phần tử 
    return item > 3
})
console.log(element2);

// nếu không tìm thấy phần tử thỏa mãn điều kiện thi FindIndex, FindLastIndex là -1
const element3 = arr1.findIndex(function(item){ 
    return item === "DONG";
})
console.log(element3);

const element4 = arr1.includes(function(item){ // 
    return 
})
console.log(element);