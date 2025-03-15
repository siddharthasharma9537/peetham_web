const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log('Received Webhook:', req.body);
    
    // Save logs to a file (optional)
    fs.appendFileSync('webhook_log.json', JSON.stringify(req.body, null, 2) + '\n');

    res.status(200).send('Webhook received successfully');
});

app.listen(3000, () => console.log('Webhook server running on port 3000'));
