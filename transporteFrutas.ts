import * as express from 'express';
import * as path from 'path';
import { Server as HttpServer } from 'http';
import { getRotasPorAgente, getDetalheRotaPorCodigo, getRotasDetalhadaPorAgente } from './rotas';
import { autenticacao } from './auth';
import { getLocalidadesPorRota } from './localidades';


// HTTP API

const app = express();

app.use(function(req, res, next) {
  // console.log('\n\n *** ACCESS  *** \n ')
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

let posAlternandArray = 0;
//app.use(compression());
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/rest/principal/:cpf/:senha', function(req, res, next) {
    responder(res, autenticacao(req.params));
});

app.get('/rest/rotas/:codigoAgenteCampo', function(req, res, next) {
    responder(res, getRotasPorAgente(req.params));
});

app.get('/rest/rotas/detalhe/:codigoAgenteCampo', function(req, res, next) {
    responder(res, getDetalheRotaPorCodigo(req.params));
});

app.get('/rest/rotas/completa/:codigoAgenteCampo/:municipio', function(req, res, next) {
    responder(res, getRotasDetalhadaPorAgente(req.params));
});

app.get('/rest/localidadesPorRota/:idRota', function(req, res, next) {
    responder(res, getLocalidadesPorRota(req.params));
});


let ip = 'localhost';
// let ip = '192.168.10.178';
// let ip = '162.243.124.216';

const httpServer: HttpServer = app.listen(8200, ip, () => {
    const {address, port} = httpServer.address();
    console.log('Listening on %s:%s', address, port);
});

function responder(res, dados) {
    // console.log(' dados = ', dados);

    res.json({dataAtualizacao: new Date(), data: dados}), 1000 + (100 * (Math.floor(Math.random() * 10) + 1))

    // let random = Math.floor(Math.random() * 10);
    // if (random > 7) {
    //     setTimeout(() => res.status(404).send('Not found'), 1000 + (100 * (Math.floor(Math.random() * 10) + 1)));
    // } else {
    //     setTimeout(() => res.json({dataAtualizacao: new Date(), data: dados}), 1000 + (100 * (Math.floor(Math.random() * 10) + 1)));
    // }
}
