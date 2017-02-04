"use strict";
var Usuario = (function () {
    function Usuario(id, cpf, nome, senha, municipios) {
        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.senha = senha;
        this.municipios = municipios;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
var usuario = [{
        'id': 1,
        'cpf': 12345678900,
        'nome': 'Agente de Campo 1',
        'senha': '123',
        'municipios': [{ "codigoMunicipio": 101, "nome": "Macapa", "uf": "AP" }, { "codigoMunicipio": 102, "nome": "Jurumin", "uf": "AP" }]
    }];
function autenticacao(params) {
    if (params === void 0) { params = {}; }
    var cpf = params.cpf;
    var senha = params.senha;
    console.log('getRotasDetalhadaPorAgente ==> senha = ', senha);
    var usuarioAutenticado;
    console.log('getRotasDetalhadaPorAgente ==> cpf = ', cpf);
    if (cpf && senha) {
        usuarioAutenticado = usuario.filter(function (v) {
            if ((v.cpf == cpf) && (v.senha == senha)) {
                return true;
            }
            return false;
        });
    }
    return usuarioAutenticado;
}
exports.autenticacao = autenticacao;
//# sourceMappingURL=auth.js.map