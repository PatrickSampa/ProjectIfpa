const express = require('express');
const static = require('node-static');

const app = express();
const fileServer = new static.Server('./src/Cad-Login-Front/colorlib-regform-7/'); // Diretório onde seus arquivos estáticos (HTML, CSS, etc.) estão localizados

app.use(express.static('src'));

app.get('/', (req, res) => {
  fileServer.serveFile('login.html', 200, {}, req, res);
});

const port = 3005;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
