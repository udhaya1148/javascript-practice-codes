const inventoryData = {
  product_id_1001: {
    name: "Laptop Pro X",
    category: "Electronics",
    price: 1299.99,
    stock: 50,
    manufacturer: "Tech Innovations Inc.",
    weight_kg: 1.8,
    dimensions_cm: "35x24x1.5",
    color_options: ["Space Gray", "Silver"],
    features: ["Intel i7", "16GB RAM", "512GB SSD", "Retina Display"],
    warranty_years: 2,
    release_date: "2024-03-15",
    rating: 4.8,
    reviews_count: 150,
    ean: "1234567890123",
    supplier_id: "SUPP001",
    location_warehouse: "Aisle 3, Shelf 12",
    last_restock_date: "2025-09-20",
    discount_percentage: 10,
  },
  product_id_1002: {
    name: "Wireless Headphones Elite",
    category: "Audio",
    price: 199.99,
    stock: 120,
    manufacturer: "Soundscapes Audio",
    weight_kg: 0.3,
    dimensions_cm: "20x18x8",
    color_options: ["Black", "White", "Navy Blue"],
    features: ["Noise Cancelling", "Bluetooth 5.2", "30-hour battery life"],
    warranty_years: 1,
    release_date: "2023-11-01",
    rating: 4.5,
    reviews_count: 210,
    ean: "9876543210987",
    supplier_id: "SUPP002",
    location_warehouse: "Aisle 1, Shelf 5",
    last_restock_date: "2025-10-01",
    discount_percentage: 0,
  },
  product_id_1003: {
    name: "Smartwatch Ultra",
    category: "Wearables",
    price: 349.0,
    stock: 75,
    manufacturer: "Chronos Tech",
    weight_kg: 0.05,
    dimensions_cm: "4.5x4.5x1.2",
    color_options: ["Midnight Black", "Starlight Silver"],
    features: [
      "Heart Rate Monitor",
      "GPS",
      "Water Resistant",
      "AMOLED Display",
    ],
    warranty_years: 1,
    release_date: "2024-06-20",
    rating: 4.7,
    reviews_count: 80,
    ean: "4567890123456",
    supplier_id: "SUPP003",
    location_warehouse: "Aisle 2, Shelf 8",
    last_restock_date: "2025-08-10",
    discount_percentage: 15,
  },
  product_id_1004: {
    name: "Ergonomic Office Chair",
    category: "Office Furniture",
    price: 499.0,
    stock: 30,
    manufacturer: "Comfort Seating Co.",
    weight_kg: 25,
    dimensions_cm: "70x70x120",
    color_options: ["Black", "Grey"],
    features: ["Adjustable Lumbar Support", "Mesh Back", "Swivel Base"],
    warranty_years: 5,
    release_date: "2023-01-05",
    rating: 4.6,
    reviews_count: 60,
    ean: "7890123456789",
    supplier_id: "SUPP004",
    location_warehouse: "Warehouse C, Section 2",
    last_restock_date: "2025-07-25",
    discount_percentage: 5,
  },
  product_id_1005: {
    name: "4K UHD Smart TV",
    category: "Home Entertainment",
    price: 899.99,
    stock: 20,
    manufacturer: "Visual Systems",
    weight_kg: 15,
    dimensions_cm: "120x70x8",
    color_options: ["Black"],
    features: ["HDR Support", "Smart TV OS", "Multiple HDMI Ports"],
    warranty_years: 3,
    release_date: "2024-02-01",
    rating: 4.9,
    reviews_count: 95,
    ean: "0123456789012",
    supplier_id: "SUPP005",
    location_warehouse: "Warehouse B, Section 1",
    last_restock_date: "2025-09-10",
    discount_percentage: 8,
  },
  product_id_1006: {
    name: "Stainless Steel Toaster 4S",
    category: "Appliances",
    price: 99.99,
    stock: 200,
    manufacturer: "HomeEase Appliances",
    weight_kg: 3.5,
    dimensions_cm: "30x25x20",
    color_options: ["Silver", "Rose Gold"],
    features: ["4 Slots", "Auto Pop-Up", "Crumb Tray"],
    warranty_years: 2,
    release_date: "2024-04-17",
    rating: 4.3,
    reviews_count: 130,
    ean: "6543210987654",
    supplier_id: "SUPP006",
    location_warehouse: "Warehouse A, Section 4",
    last_restock_date: "2025-10-05",
    discount_percentage: 12,
  },
  product_id_1007: {
    name: "Compact Air Purifier",
    category: "Home Appliances",
    price: 149.99,
    stock: 90,
    manufacturer: "PureAir Systems",
    weight_kg: 2.8,
    dimensions_cm: "25x25x40",
    color_options: ["White", "Sky Blue"],
    features: ["HEPA Filter", "Ionizer", "Quiet Mode"],
    warranty_years: 2,
    release_date: "2024-10-10",
    rating: 4.4,
    reviews_count: 175,
    ean: "3456789012345",
    supplier_id: "SUPP007",
    location_warehouse: "Aisle 5, Shelf 10",
    last_restock_date: "2025-09-28",
    discount_percentage: 7,
  },
  product_id_1008: {
    name: "Wireless Charging Pad",
    category: "Accessories",
    price: 39.99,
    stock: 500,
    manufacturer: "Electra Gear",
    weight_kg: 0.12,
    dimensions_cm: "10x10x1",
    color_options: ["White", "Black"],
    features: ["Fast Charging", "LED Indicator", "Universal Compatibility"],
    warranty_years: 1,
    release_date: "2023-12-15",
    rating: 4.2,
    reviews_count: 240,
    ean: "6789012345678",
    supplier_id: "SUPP008",
    location_warehouse: "Aisle 7, Shelf 2",
    last_restock_date: "2025-09-18",
    discount_percentage: 5,
  },
  product_id_1009: {
    name: "Smart Home Hub",
    category: "Smart Devices",
    price: 249.99,
    stock: 60,
    manufacturer: "Connected Living Co.",
    weight_kg: 0.8,
    dimensions_cm: "15x10x4",
    color_options: ["Black", "White"],
    features: ["Voice Control", "Wi-Fi 6", "App Connectivity"],
    warranty_years: 2,
    release_date: "2024-07-01",
    rating: 4.5,
    reviews_count: 110,
    ean: "8901234567890",
    supplier_id: "SUPP009",
    location_warehouse: "Aisle 8, Shelf 14",
    last_restock_date: "2025-08-30",
    discount_percentage: 10,
  },
  product_id_1010: {
    name: "Bluetooth Mechanical Keyboard",
    category: "Computer Accessories",
    price: 129.99,
    stock: 110,
    manufacturer: "KeyMasters",
    weight_kg: 1.1,
    dimensions_cm: "45x15x4",
    color_options: ["White", "Carbon Black"],
    features: ["Hot-swappable Keys", "RGB Lighting", "USB-C Charging"],
    warranty_years: 2,
    release_date: "2024-09-20",
    rating: 4.7,
    reviews_count: 95,
    ean: "5678901234567",
    supplier_id: "SUPP010",
    location_warehouse: "Warehouse D, Rack 3",
    last_restock_date: "2025-10-12",
    discount_percentage: 6,
  },
};

for (key in inventoryData) {
  console.log([key, inventoryData[key].name]);
}

console.log("");
console.log("product stock less than 50");
let stock = [];
for (key in inventoryData) {
  if (inventoryData[key].stock < 50) {
    stock.push([key, inventoryData[key].name]);
  }
}
console.log(stock);

let highest = null;
for (key in inventoryData) {
  if (!highest || inventoryData[key].rating > highest.rating) {
    highest = inventoryData[key];
  }
}
console.log(highest.name);

let unique = new Set();
for (key in inventoryData) {
  inventoryData[key].color_options.forEach((color) => unique.add(color));
}
console.log([...unique]);

let sum = 0;
for (key in inventoryData) {
  if (inventoryData[key].category === "Electronics") {
    sum += inventoryData[key].stock;
  }
}
console.log(sum);

for (key in inventoryData) {
  if (new Date(inventoryData[key].release_date) > new Date("2024-01-01")) {
    console.log(inventoryData[key].name);
  }
}

//List products with discount more than 10%
let higherdiscounts = [];
for (key in inventoryData) {
  if (inventoryData[key].discount_percentage > 10) {
    higherdiscounts.push(inventoryData[key].name);
  }
}
console.log(higherdiscounts);

//Find the product with maximum reviews_count
let maximum = null;
for (key in inventoryData) {
  if (!maximum || inventoryData[key].reviews_count > maximum.reviews_count) {
    maximum = inventoryData[key];
  }
}
console.log(maximum.name);

//Print names of products priced above $500

let price = [];
for (key in inventoryData) {
  if (inventoryData[key].price > 500) {
    price.push(inventoryData[key].name);
  }
}
console.log(price);

//Count how many products belong to category "Audio"
let count = 0;
for (key in inventoryData) {
  if (inventoryData[key].category === "Audio") {
    count++;
  }
}
console.log(count);

//List suppliers (unique supplier_id)

let uniquesuppliers = new Set();
for (key in inventoryData) {
  uniquesuppliers.add(inventoryData[key].supplier_id); //use this for string
}
console.log([...uniquesuppliers]);

//List all manufacturers (unique)
const unique_manufactures = [
  ...new Set(Object.values(inventoryData).map((item) => item.manufacturer)),
];
console.log(unique_manufactures);

//Find total stock of all products released in 2024
let total_stock = 0;
for (key in inventoryData) {
  // let product = new Date(inventoryData[key].release_date).getFullYear();
  // if (product === 2024) {
  //   total_stock += inventoryData[key].stock;
  // }
  if (new Date(inventoryData[key].release_date).getFullYear() === 2024) {
    total_stock += inventoryData[key].stock;
  }
}
console.log(total_stock);

//Print product name and its warehouse location (name: location)
for (key in inventoryData) {
  console.log(
    "name:",
    inventoryData[key].name + "warehouse location:",
    inventoryData[key].location_warehouse
  );
}

//Find the cheapest product
// cheapest = null
// for(key in inventoryData){
//   if(!cheapest ||inventoryData[key].price < cheapest.price){
//     cheapest = inventoryData[key]
//   }
// }

const cheapest = Object.values(inventoryData).sort(
  (a, b) => a.price - b.price
)[0];
console.log("cheapest product:", cheapest.name);

//List products where color options include "Black"
color_black = [];
for (key in inventoryData) {
  if (inventoryData[key].color_options.includes("Black")) {
    color_black.push(inventoryData[key].name);
  }
}
console.log(color_black);

//Print all product names with their price (format: Laptop Pro X - $1299.99)

for (key in inventoryData) {
  console.log(inventoryData[key].name + " - " + "$", inventoryData[key].price);
}

//List products where warranty is 2 years or more
console.log("Warranty");
for (key in inventoryData) {
  if (inventoryData[key].warranty_years >= 2) {
    console.log(inventoryData[key].name);
  }
}
//Find products that have "Bluetooth" in their features
let productfeatures = [];
for (key in inventoryData) {
  if (inventoryData[key].features.some((f) => f.includes("Bluetooth"))) {
    //array
    productfeatures.push(inventoryData[key].name);
  }
}
console.log(productfeatures);

//Print only categories (unique list of categories)
// const uniquecategories = [
//   ...new Set(
//     Object.values(inventoryData).map((categorys) => categorys.category)
//   ),
// ];
// console.log(uniquecategories);

const uniquecategories = new Set();
for (key in inventoryData) {
  uniquecategories.add(inventoryData[key].category); //string
  // inventoryData[key].category.forEach((uniques)=> uniquecategories.add(uniques))array
}
console.log([...uniquecategories]);

console.log("discount");
//Count how many products have discount > 0
for (let product of Object.values(inventoryData)) {
  if (product.discount_percentage > 0) {
    console.log(product.name);
  }
}

//List products whose reviews_count is between 100 and 200
let both_review = [];
for (product of Object.values(inventoryData)) {
  if (product.reviews_count >= 100 && product.reviews_count <= 200)
    both_review.push(product.name);
}
console.log(both_review);

//Find products with "White" as one of the color options
whitecolor = [];
for (product of Object.values(inventoryData)) {
  if (product.color_options.includes("White")) {
    whitecolor.push(product.name);
  }
}
console.log(whitecolor);

// Print each product name along with number of features it has

for (product of Object.values(inventoryData)) {
  console.log(product.name + " - " + product.features.length + " features");
}

//Calculate the average rating of all products
total_rating = 0;
for (product of Object.values(inventoryData)) {
  total_rating += product.rating;
}
console.log(total_rating);
const average = total_rating / Object.values(inventoryData).length;
console.log(average);

// Find products from suppliers whose id starts with "SUPP00"
for (key in inventoryData) {
  if (inventoryData[key].supplier_id.startsWith("SUPP00")) {
    console.log(inventoryData[key].name);
  }
}

// advance level
//Sort products by price (ascending)
const sortascending = Object.values(inventoryData)
  .sort((a, b) => a.price - b.price)
  .map((item) => item.name);
console.log(sortascending);

const sortdecending = Object.values(inventoryData)
  .sort((a, b) => b.price - a.price)
  .map((item) => item.name);
console.log(sortdecending);

// Create an array of objects containing only { name, price, rating }
const object = Object.values(inventoryData).map((item) => ({
  name: item.name,
  price: item.price,
  rating: item.rating,
}));
console.log(object);

//Find the total stock value (Sum of price * stock for all products)
let total = 0;
for (key in inventoryData) {
  total += inventoryData[key].price * inventoryData[key].stock;
}
console.log(total);

//-------------find unique for array items---------------------
// let unicolor = [...new Set(Object.values(inventoryData).flatMap((color)=> color.color_options))]
// console.log(unicolor)

let unicolor = new Set();
for (key in inventoryData) {
  inventoryData[key].color_options.forEach((item) => unicolor.add(item));
}
console.log([...unicolor]);
//---------------------------------------------------------

//Group products by category (like { Electronics: [...products], Audio: [...], ... })

let grouped = {};
for (key in inventoryData) {
  product = inventoryData[key];
  category = product.category;

  if (!grouped[category]) {
    grouped[category] = [];
  }
  grouped[category].push(product);
}
console.log(grouped);

//Find the second highest rated product
console.log("second high rating");
const highrating = Object.values(inventoryData).sort(
  (a, b) => b.rating - a.rating
)[1];
console.log(highrating.name);

//List top 3 most reviewed products

const top3review = Object.values(inventoryData)
  .sort((a, b) => b.reviews_count - a.reviews_count)
  .slice(0, 3)
  .map((item) => item.name);
console.log(top3review);

// Find the product with latest restock date
let latestrestock = Object.values(inventoryData).sort(
  (a, b) => new Date(b.last_restock_date) - new Date(a.last_restock_date)
)[0].name;
console.log(latestrestock);


// Convert all product names to uppercase and print them
console.log("Uppercase")
for(key in inventoryData){
  console.log(inventoryData[key].name.toUpperCase())
}
console.log(' ')
console.log("release between")
//Find products released between "2024-01-01" and "2024-12-31"
for(key in inventoryData){
  if(new Date(inventoryData[key].release_date >="2024-01-01") && new Date(inventoryData[key].release_date <= "2024-12-31")){
    console.log(inventoryData[key].name)
  }
}