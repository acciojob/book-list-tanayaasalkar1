//your JS code here. If required.
let form = document.getElementById('form');
let title = document.getElementById('title');
let author = document.getElementById('author');
let isbn = document.getElementById('isbn');
let button = document.getElementById('submit');

let table = document.getElementById('table');
let tbody = document.getElementById('book-list');

button.addEventListener('click', (e) => {
	e.preventDefault();
	const row = document.createElement('tr');

	row.innerHTML = `
	  <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${isbn.value}</td>
		<td> <button class="delete">Clear</button> </td>
	`
	tbody.appendChild(row);
	form.reset();
	
})

tbody.addEventListener("click", function(event) { 
 if (event.target.classList.contains("delete")) { 
 const row = event.target.parentElement.parentElement; 
row.remove(); 
 } 
});







