"use strict";
var express = require("express");
var path = require("path");
var rotas_1 = require("./rotas");
var auth_1 = require("./auth");
var localidades_1 = require("./localidades");
// HTTP API
var app = express();
app.use(function (req, res, next) {
    // console.log('\n\n *** ACCESS  *** \n ')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});
var posAlternandArray = 0;
//app.use(compression());
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/rest/principal/:cpf/:senha', function (req, res, next) {
    responder(res, auth_1.autenticacao(req.params));
});
app.get('/rest/rotas/:codigoAgenteCampo', function (req, res, next) {
    responder(res, rotas_1.getRotasPorAgente(req.params));
});
app.get('/rest/rotas/detalhe/:codigoAgenteCampo', function (req, res, next) {
    responder(res, rotas_1.getDetalheRotaPorCodigo(req.params));
});
//:uri.var.codigoAgenteCampo/:
app.get('/rest/rotas/completa/:codigoAgenteCampo/:codigoMunicipio', function (req, res, next) {
    responder(res, rotas_1.getRotasDetalhadaPorAgente(req.params));
});
app.get('/rest/localidadesPorRota/:idRota', function (req, res, next) {
    responder(res, localidades_1.getLocalidadesPorRota(req.params));
});
var ip = 'localhost';
// let ip = '192.168.10.178';
// let ip = '162.243.124.216';
var httpServer = app.listen(8200, ip, function () {
    var _a = httpServer.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s:%s', address, port);
});
function responder(res, dados) {
    // console.log(' dados = ', dados);
    res.json({ dataAtualizacao: new Date(), data: dados }), 1000 + (100 * (Math.floor(Math.random() * 10) + 1));
    // let random = Math.floor(Math.random() * 10);
    // if (random > 7) {
    //     setTimeout(() => res.status(404).send('Not found'), 1000 + (100 * (Math.floor(Math.random() * 10) + 1)));
    // } else {
    //     setTimeout(() => res.json({dataAtualizacao: new Date(), data: dados}), 1000 + (100 * (Math.floor(Math.random() * 10) + 1)));
    // }
}
//# sourceMappingURL=transporteFrutas.js.map