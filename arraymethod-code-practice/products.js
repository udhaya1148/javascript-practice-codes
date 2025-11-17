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

// Create an object showing { manufacturer: total_stock }.
//let obj = {}
// let show = Object.values(inventoryData).reduce((acc,items)=>{
//   if(acc[items.manufacturer]){
//     acc[items.manufacturer]+=items.stock
//   }
//   else{
//     acc[items.manufacturer]= items.stock
//   }
//   return acc
// },{})
// console.log(show)
let show = Object.values(inventoryData).reduce((acc, item) => {
  if (acc[item.manufacturer]) {
    acc[item.manufacturer] += item.stock;
  } else {
    acc[item.manufacturer] = item.stock;
  }
  return acc;
}, {});

console.log(show);

// Group products by category into an object (like { "Audio": [...], "Wearables": [...] }).
let grouped={}
for(key in inventoryData){
  product = inventoryData[key];
  category = product.category;

  if(!grouped[category]){
    grouped[category]=[];
  }

  grouped[category].push(product)
}
console.log(grouped)

//Find which category has the highest total stock.
let highest = null;
for(key in inventoryData){
  if(!highest || inventoryData[key].stock > highest.stock){
    highest = inventoryData[key]
  }
}
console.log(highest.name)

//Find the product that gives the best rating per dollar (rating ÷ price).
let bestrating = Object.values(inventoryData).reduce((best, product)=>{
  const currentproduct = product.rating/product.price;
  const bestproduct = best.rating/best.price;

  return currentproduct > bestproduct ? product : best;
})
console.log("best product :",bestrating.name);
console.log("rating per dollor",bestrating.rating/bestrating.price);