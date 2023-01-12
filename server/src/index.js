const exppress = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multiparty = require('connect-multiparty');

const app = exppress();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 201
}

app.use(cors(corsOptions))

const multipartyMiddleware = multiparty({
  uploadDir: './uploads'
})
app.post('/', multipartyMiddleware, (req, res) => {
  const files = req.files;
  console.log('files', files);
  res.json({
    mensagem: files
  });
})

app.use((err, req, res, next) => res.json({
  error: err.mensagem
}))

app.listen(8888, () => {
  console.log('servidor iniciado na porta 8888');
})
