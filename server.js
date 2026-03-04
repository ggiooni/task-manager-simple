const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'app')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Inventory Manager running on http://localhost:${PORT}`);
});
