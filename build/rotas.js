"use strict";
var Rota = (function () {
    function Rota(id, codigo, descricao, limite, codigoAgenteCampo) {
        this.id = id;
        this.codigo = codigo;
        this.descricao = descricao;
        this.limite = limite;
        this.codigoAgenteCampo = codigoAgenteCampo;
    }
    return Rota;
}());
exports.Rota = Rota;
var DetalheRota = (function () {
    function DetalheRota(id, codigo, limite, descricao, codigoIBGE, municipio, totalArea, totalAreaTrabalhada, hospedesCadastrados, hospedesContabilizados, armadilhaMcphail, armadilhaJackson, codigoAgenteCampo, idMunicipio) {
        this.id = id;
        this.codigo = codigo;
        this.limite = limite;
        this.descricao = descricao;
        this.codigoIBGE = codigoIBGE;
        this.municipio = municipio;
        this.totalArea = totalArea;
        this.totalAreaTrabalhada = totalAreaTrabalhada;
        this.hospedesCadastrados = hospedesCadastrados;
        this.hospedesContabilizados = hospedesContabilizados;
        this.armadilhaMcphail = armadilhaMcphail;
        this.armadilhaJackson = armadilhaJackson;
        this.codigoAgenteCampo = codigoAgenteCampo;
        this.idMunicipio = idMunicipio;
    }
    return DetalheRota;
}());
exports.DetalheRota = DetalheRota;
var rotas = [{
        "id": 1,
        "codigo": 101,
        "descricao": "Rota 25",
        "limite": "Ponte do Jandiá 1 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "codigoAgenteCampo": 1
    }, {
        "id": 2,
        "codigo": 102,
        "descricao": "Rota 24",
        "limite": "Ponte do Jandiá 2 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "codigoAgenteCampo": 1
    }, {
        "id": 3,
        "codigo": 103,
        "descricao": "Rota 23",
        "limite": "Ponte do Jandiá 3 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "codigoAgenteCampo": 1
    }, {
        "id": 4,
        "codigo": 101,
        "descricao": "Rota 25",
        "limite": "Ponte do Jandiá 1 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "codigoAgenteCampo": 2
    }, {
        "id": 5,
        "codigo": 102,
        "descricao": "Rota 24",
        "limite": "Ponte do Jandiá 2 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "codigoAgenteCampo": 2
    }, {
        "id": 6,
        "codigo": 103,
        "descricao": "Rota 23",
        "limite": "Ponte do Jandiá 3 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "codigoAgenteCampo": 3
    }];
// let detalheRota = [{
//     "id": 1,
//     "codigo": 101,
//     "limite":"Ponte do Jandiá 1 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
//     "descricao":"Rota 25",
//     "codigoIBGE":1600303,
//     "municipio":"Macapá",
//     "totalArea":580,
// 	"totalAreaTrabalhada":145,
// 	"hospedesCadastrados":2580,
// 	"hospedesContabilizados":6145,
// 	"armadilhaMcphail":30,
// 	"armadilhaJackson":15,
//     "codigoAgenteCampo":1,
//     "idMunicipio":101
// }]
var detalheRota = [{
        "id": 1,
        "codigo": 101,
        "limite": "Ponte do Jandiá 1 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 25",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 101
    }, {
        "id": 2,
        "codigo": 102,
        "limite": "Ponte do Jandiá 2 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 26",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 101
    }, {
        "id": 3,
        "codigo": 103,
        "limite": "Ponte do Jandiá  3 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 27",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 101
    }, {
        "id": 4,
        "codigo": 101,
        "limite": "Ponte do Jandiá 4 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 28",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 101
    }, {
        "id": 5,
        "codigo": 102,
        "limite": "Ponte do Jandiá 5 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 29",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 101
    }, {
        "id": 6,
        "codigo": 103,
        "limite": "Ponte do Jandiá 6 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 20",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 101
    }, {
        "id": 7,
        "codigo": 101,
        "limite": "Ponte do Jandiá 7 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 21",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 101
    }, {
        "id": 8,
        "codigo": 101,
        "limite": "Ponte do Jandiá 8 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 22",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 101
    }, {
        "id": 9,
        "codigo": 101,
        "limite": "Ponte do Jandiá 9 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 30",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 102
    }, {
        "id": 10,
        "codigo": 102,
        "limite": "Ponte do Jandiá 1 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 31",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 102
    }, {
        "id": 11,
        "codigo": 103,
        "limite": "Ponte do Jandiá 2 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 32",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 102
    }, {
        "id": 12,
        "codigo": 101,
        "limite": "Ponte do Jandiá  3 até os ramais da margem do rio Amazonas, margem esquerda rodovia Trancredo Neves",
        "descricao": "Rota 33",
        "codigoIBGE": 1600303,
        "municipio": "Macapá",
        "totalArea": 580,
        "totalAreaTrabalhada": 145,
        "hospedesCadastrados": 2580,
        "hospedesContabilizados": 6145,
        "armadilhaMcphail": 30,
        "armadilhaJackson": 15,
        "codigoAgenteCampo": 1,
        "idMunicipio": 102
    }];
function getRotasPorAgente(params) {
    if (params === void 0) { params = {}; }
    var codigoAgenteCampo = params.codigoAgenteCampo;
    var rotasPorAgente;
    console.log('getRotasPorAgente ==> codigoAgenteCampo = ', codigoAgenteCampo);
    if (codigoAgenteCampo) {
        rotasPorAgente = rotas.filter(function (v) {
            if (v.codigoAgenteCampo == codigoAgenteCampo) {
                return true;
            }
            return false;
        });
    }
    return rotasPorAgente;
}
exports.getRotasPorAgente = getRotasPorAgente;
function getRotasDetalhadaPorAgente(params) {
    if (params === void 0) { params = {}; }
    var codigoAgenteCampo = params.codigoAgenteCampo;
    var municipio = params.codigoMunicipio;
    console.log('getRotasDetalhadaPorAgente ==> municipio = ', municipio);
    if (!municipio) {
        municipio = 101;
    }
    var detalheRotasPorAgente;
    console.log('getRotasDetalhadaPorAgente ==> codigoAgenteCampo = ', codigoAgenteCampo);
    if (codigoAgenteCampo) {
        detalheRotasPorAgente = detalheRota.filter(function (v) {
            if ((v.codigoAgenteCampo == codigoAgenteCampo) && (v.idMunicipio == municipio)) {
                return true;
            }
            return false;
        });
    }
    return detalheRotasPorAgente;
}
exports.getRotasDetalhadaPorAgente = getRotasDetalhadaPorAgente;
function getDetalheRotaPorCodigo(params) {
    if (params === void 0) { params = {}; }
    var codigo = params.codigoRota;
    console.log('getDetalheRotaPorCodigo ==> codigoRota = ', codigo);
    var retorno;
    if (codigo) {
        retorno = detalheRota.filter(function (v) {
            if (v.codigo == codigo) {
                return true;
            }
            return false;
        });
    }
    return retorno;
}
exports.getDetalheRotaPorCodigo = getDetalheRotaPorCodigo;
//# sourceMappingURL=rotas.js.map