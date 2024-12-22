const myStudent = ["Minh", "dung", "Vinh", "Toan", "hoang"];
const result = myStudent.splice(1, Infinity, "f8");
console.log(result);
console.log(myStudent);
/**
 * splice(start, delete, item .....)
 * - thay đổi mảng gốc
 * - nếu không truyền tham số -> mảng rỗng 
 * - Start: vị trí bắt đầu cắt.
 * - delete : số lượng phần tử bị cắt là nguyên dương 
 * 
 */
const arr1 = ["A", "B", "C"];
const arr2 = [];

const data = ["F8", undefined, 0, "Hoang", "Tue", 100, NaN, "Dong", ""];

/** loại bỏ các giá trị falsy value*/
for(let i= 0; i<data.length; i++){
    if(!data[i]) {
        console.log(`index =${i}; value = ${data[i]}`); 
        // console.log(data[i]); 
        console.log(data.splice(i,1));
        // console.log(data);  
      i--;
        
    }
    
}



