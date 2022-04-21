const express = require('express');
const app = express();
const path = require('path');
const adminController = require('./controllers/adminController');
// const apiRouter = require('./routes/api');
// const PORT = process.env.PORT || 3000;
const PORT = 3000;
//
/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

/**
 * define route handlers
 */
// app.use('/api', apiRouter); //add a new entry to DB

// app.get('/api/leaders', (req, res) => {
//   return res.status(200).send(leaderList);
// });

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.post('/admin', adminController.addItem, (req, res) => {
  console.log('req.body received by app.post: ', req.body);
  return res.status(200).json(res.locals.item);
});
// app.get('/login', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });

// app.get('/admin', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

/**
 * Catch-all route handler
 */
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

/**
 * Global Error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
