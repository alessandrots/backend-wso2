"use strict";
var Localidade = (function () {
    function Localidade(codigoLocalidade, idRota, descricao, endereco) {
        this.codigoLocalidade = codigoLocalidade;
        this.idRota = idRota;
        this.descricao = descricao;
        this.endereco = endereco;
    }
    return Localidade;
}());
exports.Localidade = Localidade;
exports.localidade_ = [{
        "codigoLocalidade": 1,
        "idRota": 101,
        "descricao": "Localidade 01",
        "endereco": "Rua 14 descendo a avenida"
    }, {
        "codigoLocalidade": 2,
        "idRota": 101,
        "descricao": "Localidade 01",
        "endereco": "Rua 14 subindo a avenida"
    }, {
        "codigoLocalidade": 3,
        "idRota": 101,
        "descricao": "Localidade 01",
        "endereco": "Rua 15 descendo a avenida"
    }, {
        "codigoLocalidade": 5,
        "idRota": 101,
        "descricao": "Localidade 01",
        "endereco": "Rua 15 subindo a avenida"
    }, {
        "codigoLocalidade": 6,
        "idRota": 102,
        "descricao": "Localidade 01",
        "endereco": "Rua 15 subindo a avenida"
    }, {
        "codigoLocalidade": 7,
        "idRota": 102,
        "descricao": "Localidade 01",
        "endereco": "Rua 16 descendo a avenida"
    }, {
        "codigoLocalidade": 8,
        "idRota": 103,
        "descricao": "Localidade 01",
        "endereco": "Rua 16 subindo a avenida"
    }, {
        "codigoLocalidade": 9,
        "idRota": 103,
        "descricao": "Localidade 01",
        "endereco": "Rua 17 subindo a avenida"
    }, {
        "codigoLocalidade": 10,
        "idRota": 103,
        "descricao": "Localidade 01",
        "endereco": "Rua 18 descendo a avenida"
    }, {
        "codigoLocalidade": 11,
        "idRota": 103,
        "descricao": "Localidade 01",
        "endereco": "Rua 19 subindo a avenida"
    }];
function getLocalidadesPorRota(params) {
    if (params === void 0) { params = {}; }
    var idRota = params.idRota;
    console.log('getLocalidadesPorRota ==> idRota = ', idRota);
    var retorno;
    if (idRota) {
        retorno = exports.localidade_.filter(function (v) {
            if ((v.idRota == idRota)) {
                return true;
            }
            return false;
        });
    }
    return retorno;
}
exports.getLocalidadesPorRota = getLocalidadesPorRota;
//# sourceMappingURL=localidades.js.map