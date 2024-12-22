const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = arr1.filter((item) => item %2 === 0);
console.log(arr2);

const products = [
    {id:1, title: "Sản phẩm A", discount:0.2},
    {id:2, title: "Sản phẩm B", discount:0.1},
    {id:3, title: "Sản phẩm C", discount:0.05},
    {id:4, title: "Sản phẩm D", discount:0.35},
     
];

const hotSaleProducts = products.filter((item) => item.discount >= 0.2 );
console.log(hotSaleProducts);

const products2 = [
    { id: 1, title: "san pham A", price: 200, quantity: 2, discount: 0.2 },
    { id: 2, title: "san pham B", price: 200, quantity: 1, discount: 0.1 },
    { id: 3, title: "san pham C", price: 200, quantity: 3, discount: 0.05 },
    { id: 4, title: "san pham D", price: 200, quantity: 2, discount: 0.35 },
    ];
let total = 0;
products2.forEach((item) => {
  console.log(item)
  total += item.price * item.quantity * (1-item.discount);
});
console.log(total)

const getProductName = products.map((item) => item.title )
console.log(getProductName);
const getProductsName = products2.map((item) =>{
    
})

console.log(payment);
console.log(getProductsName)