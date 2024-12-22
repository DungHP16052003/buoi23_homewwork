//bài 1
const products = [
	{
		id: 1,
		name: "Apple iPhone 12",
		price: 1000,
	},
	{
		id: 2,
		name: "Samsung Galaxy S21",
		price: 900,
	},
	{
		id: 3,
		name: "Xiaomi Mi 11",
		price: 800,
	},
	{
		id: 4,
		name: "Apple iPhone 11",
		price: 700,
	},
	{
		id: 5,
		name: "Samsung Galaxy S20",
		price: 600,
	},
	{
		id: 6,
		name: "Xiaomi Mi 10",
		price: 500,
	},
];


function getTopProducts(products, top){
    const topProducts = [];

    const productsCopy = [...products];

    for(let i = 0; i < top; i++){
        let maxIndex = 0;
        for(let j = 0; j < productsCopy.length; j++){
            if(productsCopy[j].price > productsCopy[maxIndex].price){
                maxIndex = j;
            }
        }
        topProducts.push(productsCopy[maxIndex]);
        productsCopy.splice(maxIndex,1);
    }
    return topProducts;

}

const result = getTopProducts(products, 3);
console.log(result); // [{ id: 1, name: 'Apple iPhone 12', price: 1000 }, { id: 2, name: 'Samsung Galaxy S21', price: 900 }, { id: 3, name: 'Xiaomi Mi 11', price: 800 }]

//bài 2
//1.
const categories = [
	{
		id: 1,
		name: "Electronics",
		children: [
			{
				id: 2,
				name: "Laptops",
				children: [
					{
						id: 3,
						name: "Apple",
					},
					{
						id: 4,
						name: "Dell",
					},
				],
			},
			{
				id: 5,
				name: "Headphones",
			},
		],
	},
	{
		id: 6,
		name: "Books",
		children: [
			{
				id: 7,
				name: "Fiction",
				children: [
					{
						id: 8,
						name: "Thrillers",
					},
					{
						id: 9,
						name: "Mystery",
					},
				],
			},
			{
				id: 10,
				name: "Non-Fiction",
			},
		],
	},
];
 function flattenCategories(categories, level=0){
     const categoriesLevel = [];
     for (let i = 0; i < categories.length; i++) {
       const category = {
         id: categories[i].id,
         name: categories[i].name,
         level: level,
	   };
        categoriesLevel.push(category);
    if(categories[i].children && categories[i].children.length > 0){
        const childCategory = flattenCategories(categories[i].children, level+1);
            categoriesLevel.push(...childCategory);
    }   
     }
     return categoriesLevel;
 }

 const results = flattenCategories(categories);
 console.log(results);
 //2.
 function getCategoryName(categories, categoryId){
   for(let i=0; i< categories.length; i++){
	   if(categories[i].id === categoryId){
        return categories[i].name;
	   }
	   if (categories[i].children && categories[i].children.length > 0) {
		const result = getCategoryName(categories[i].children, categoryId);
		  if(result)
			return result;
		  
	   }
   }
   return null;

 }
 console.log(getCategoryName(categories, 3)); // Output: "Apple"
console.log(getCategoryName(categories, 10)); // Output: "Non-Fiction"
console.log(getCategoryName(categories, 99)); // Output: null

 