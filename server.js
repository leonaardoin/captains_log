require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const LogsController = require('./controllers/logsController');
const Log = require('./models/log');
const methodOverride = require('method-override');
const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);

app.set('view engine', 'jsx');
app.set('views', './views');

// Middleware
app.use(express.urlencoded({ extended: false })); // This enables the req.body
// app.use(express.json())

//methodOverride--add query parameter to delete form named _method
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Custom Middleware
app.use((req, res, next) => {
    console.log('Middleware running...');
    next();
  });

// Routes
app.use('/logs', LogsController);

//Catch all routes...if route doesn't match above it will catch and redirect to Index page
app.get('/*', (req, res) => {
    res.send(`
      <div>
        404 this page doesn't exist! <br />
        <a href="/logs">Logs</a> <br />
      </div
    `);
  });


app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`)
});