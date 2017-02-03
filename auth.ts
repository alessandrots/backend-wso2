export class Usuario {
    constructor(
        public id: number,
        public cpf: number,
        public nome: string,
        public senha: string,
        public municipios: { codigoMunicipio: number, nome:string, uf:string }[],
    ) { }
}

 let usuario = [{
    'id': 1,
    'cpf':12345678900,
    'nome': 'Agente de Campo 1',
    'senha':'123',
    'municipios':[{"codigoMunicipio":101,"nome":"Macapa", "uf":"AP"}, {"codigoMunicipio":102,"nome":"Jurumin", "uf":"AP"}]
}];

export function autenticacao(params = <any>{}): Usuario {
    let cpf = params.cpf;
    let senha = params.senha;
    console.log('getRotasDetalhadaPorAgente ==> senha = ', senha);

    let usuarioAutenticado;
    console.log('getRotasDetalhadaPorAgente ==> cpf = ', cpf);

    if (cpf && senha) {
        usuarioAutenticado = usuario.filter((v) => {
            if ((v.cpf == cpf) && (v.senha == senha)) {
                return true;
            }
            return false;
        });
    }
    return usuarioAutenticado;
}