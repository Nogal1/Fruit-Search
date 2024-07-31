const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant',
	'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig',
	'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry',
	'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew',
	'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit',
	'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant',
	'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

	// Takes a str and conver to lowercase, filter through array keeping fruits that include input val, return filtered results.
function search(str) {
	let results = [];
	const val = str.toLowerCase();

	results = fruit.filter(f => f.toLowerCase().includes(val));

	return results;
}

	// Calls search on the input value, then calls showSuggestions with the returned results and input value.
function searchHandler(e) {
	const inputVal = e.currentTarget.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}


// Maps over results and uses regular expression to highlight matching parts of the suggestion. Populates suggestion with mapped list.
	// Add event listener to each item for hover effect
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	if (inputVal) {
		const suggestionsList = results.map(result => {
			const regex = new RegExp(`(${inputVal})`, 'gi'); //g stands for global, has regex search entire str and 'i' stands for case insenstitive
			const highlighted = result.replace(regex, '<strong>$1</strong>'); // bolds matching char from input str and suggestions
			return `<li>${highlighted}</li>`;
		}).join('');
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

	// When suggestion is clicked, sets the input field val to clicked suggestion then clears them and removes class.
function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
	suggestions.classList.remove('has-suggestions');
}

	// on hover over suggestion, highlights by adding background color
function highlightSuggestion(e) {
	e.target.style.backgroundColor = '#ff9d00';
}

	// removes highlight when changing hover target
function removeHighlight(e) {
	e.target.style.backgroundColor = '';
}

	// add event listener to input field and suggestion lists
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
