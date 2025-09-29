const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const indexRoutes = require('./routes/index'); 
app.use('/api', indexRoutes); 

app.listen(port, () => console.log(`Backend rodando em http://localhost:${port}`));
