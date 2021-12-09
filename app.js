const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Salutare! Aceasta este aplicatia lui Dragos');
});

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));
