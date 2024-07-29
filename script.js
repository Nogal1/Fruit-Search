const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant',
	'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig',
	'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry',
	'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew',
	'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit',
	'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant',
	'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const val = str.toLowerCase();

	results = fruit.filter(f => f.toLowerCase().includes(val));

	return results;
}

function searchHandler(e) {
	const inputVal = e.currentTarget.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	if (inputVal) {
		const suggestionsList = results.map(result => `<li>${result}</li>`).join('');
		suggestions.innerHTML = suggestionsList;
		suggestions.classList.add('has-suggestions');

		const suggestionItems = suggestions.querySelectorAll('li');
		suggestionItems.forEach(item => {
			item.addEventListener('mouseover', highlightSuggestion);
			item.addEventListener('mouseout', removeHighlight);
		});
	} else {
		suggestions.classList.remove('has-suggestions');
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
	suggestions.classList.remove('has-suggestions');
}

function highlightSuggestion(e) {
	e.target.style.backgroundColor = '#ff9d00';
}

function removeHighlight(e) {
	e.target.style.backgroundColor = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
