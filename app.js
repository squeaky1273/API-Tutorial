const uuidv4 = require('uuid/v4');

const express = require('express');

const app = express();

const models = require('./models')

const routes = require('./routes')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
      };
    next();
  });

app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
});
app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
});
app.put('/users/:userId', (req, res) => {
    return res.send(`PUT HTTP method on user /${req.param.userId} resource`,);
});
app.delete('/users/:userId', (req, res) => {
    return res.send(`DELETE HTTP method on user /${req.param.userId} resource`,);
});

app.listen(3000, () => {
    console.log('localhost:3000!');
  });
