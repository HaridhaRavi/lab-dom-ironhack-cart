// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerText)
  const quantity= product.querySelector('.quantity input').valueAsNumber
  let subtotalPrice = price* quantity
  const subtotalElement = product.querySelector('.subtotal span')
  subtotalElement.innerText = subtotalPrice
  return subtotalPrice
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
   const singleProduct = document.querySelector('.product');
   updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productsAll = document.querySelectorAll("tr.product");
  let total = 0;
  productsAll.forEach(function(element){
    total += updateSubtotal(element);
  })

  // ITERATION 3
  //... your code goes here
  const totalElem = document.querySelector("#total-value span");
  totalElem.innerHTML = total;
}
// ITERATION 4

function removeProduct(event) {
  console.log(event)
  const target = event.currentTarget;
  console.log(target)
  console.log('The target in remove is:', target);
  //... your code goes here
  window.addEventListener('load', () => {
    const removeElem = document.getElementsByClassName("btn btn-remove");
    let removeElemCopy = [...removeElem]
    removeElemCopy.forEach(function(target){
      target.addEventListener('click', function(element){
      element.removeChild(target);
     });
    });
  })
}
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
