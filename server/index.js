const express = require('express');
const path = require('path');

//Config express
app = express();
app.set('port', 3000);

//
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../starmin/index'))
})

app.listen(app.get('port'), () => {
    console.log('server listening on port', app.get('port'));
})
