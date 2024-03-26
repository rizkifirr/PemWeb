const button = document.getElementById('myButton');
const h1 = document.getElementById('myH1');


button.addEventListener('click', function handleClick() {
  
  h1.textContent = 'Hello! World.';
});
