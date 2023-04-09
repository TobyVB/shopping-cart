// Camera: price_1MuoCgGVspIjpNnos2vkPSef
const productsArray = [
  {
    id: "price_1MuoziGVspIjpNnoOSyqo6ve",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1Mup0aGVspIjpNnod79YlOIG",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1Mup1SGVspIjpNnoIYvVX1AS",
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    // will return undefined
  }
  return productData;
}

export { productsArray, getProductData };
