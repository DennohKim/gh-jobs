const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '0612cd1230mshb229c76ce9dc3cfp115d8ejsn9fe5e38353bf',
		'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
	},
	body: '{"search_terms":"python programmer","location":"30301","page":"1"}'
};

fetch('https://linkedin-jobs-search.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));