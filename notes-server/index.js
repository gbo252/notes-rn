const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('./models/User');
require('./models/Notes');

const authRouter = require('./routes/auth');
const notesRouter = require('./routes/notes');
const keys = require('./keys');

const PORT = 3000;
const app = express();

mongoose
  .connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((e) => console.log(e));

mongoose.connection.on('error', (e) => {
  console.log(e);
});

app.use(bodyParser.json());
app.use(authRouter);
app.use(notesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
