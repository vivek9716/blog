const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partails/');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs');
});



app.listen(port, () => {
	console.log(`Server is running on : ${port}`);
});