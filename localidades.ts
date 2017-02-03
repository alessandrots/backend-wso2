export class Localidade {
    constructor(
    	public codigoLocalidade: number,
        public idRota: number,
        public descricao: string,
        public endereco:string,
        // public coordenadas: { id: number, latitude:number, longitude:number }[]
    ) { }
}

export 


let localidade_ = [{
    "codigoLocalidade": 1,
    "idRota": 101,
    "descricao":"Localidade 01",
    "endereco":"Rua 14 descendo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
},{
    "codigoLocalidade": 2,
    "idRota": 101,
    "descricao":"Localidade 01",
    "endereco":"Rua 14 subindo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
},{
    "codigoLocalidade": 3,
    "idRota": 101,
    "descricao":"Localidade 01",
    "endereco":"Rua 15 descendo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
},{
    "codigoLocalidade": 5,
    "idRota": 101,
    "descricao":"Localidade 01",
    "endereco":"Rua 15 subindo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
},{
    "codigoLocalidade": 6,
    "idRota": 102,
    "descricao":"Localidade 01",
    "endereco":"Rua 15 subindo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
},{
    "codigoLocalidade": 7,
    "idRota": 102,
    "descricao":"Localidade 01",
    "endereco":"Rua 16 descendo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
},{
    "codigoLocalidade": 8,
    "idRota": 103,
    "descricao":"Localidade 01",
    "endereco":"Rua 16 subindo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
},{
    "codigoLocalidade": 9,
    "idRota": 103,
    "descricao":"Localidade 01",
    "endereco":"Rua 17 subindo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
},{
    "codigoLocalidade": 10,
    "idRota": 103,
    "descricao":"Localidade 01",
    "endereco":"Rua 18 descendo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
},{
    "codigoLocalidade": 11,
    "idRota": 103,
    "descricao":"Localidade 01",
    "endereco":"Rua 19 subindo a avenida"
    // "coordenadas":[{"id":1,"latitude":45.8, "longitude":47.8}]
}];

export function getLocalidadesPorRota(params = <any>{}): Localidade[] {
    let idRota = params.idRota;
    console.log('getLocalidadesPorRota ==> idRota = ', idRota);

    let retorno;
    
    if (idRota) {
        retorno = localidade_.filter((v) => {
            if ((v.idRota == idRota)) {
                return true;
            }
            return false;
        });
    }
    return retorno;
}
