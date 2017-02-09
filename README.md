### System Information:
```
Cordova CLI: 6.4.0
Node Version: v6.7.0
NPM Version: v3.10.3
```
### On the root of project
```bash
$ npm install
```

### To run
```bash
$ ./server.sh
```

### Pra logar no console:
https://<IP>:9443/carbon/admin/index.jsp

### To call the URL of REST:
http://localhost:8200/rest/rotas/completa/{uri.var.codigoAgenteCampo}/{uri.var.codigoMunicipio}
ex.:
	http://localhost:8200/rest/rotas/completa/1/101

### To call via wso2:	
```bash
$ curl -v -i -H "Content-Type: application/json" -H "Accept: application/json" http://localhost:8280/mapa/query/1/101
```	

*** 8280 porta de acesso (https://docs.wso2.com/display/IS500/Default+Ports+of+WSO2+Products)

### Explanation:
- Foi criado um Endpoint:
TransporteFrutasEP

### Created Endpoint:
1) TransporteFrutasEP: responsável por chamar a url que vai responder pelo serviço propriamento dito, com a devida passagem de parâmetros.
==> Serviço REST (node):
http://localhost:8200/rest/rotas/completa/{uri.var.codigoAgenteCampo}/{uri.var.codigoMunicipio}

### MapaRest: Mediating requests to the back-end service
Construído a solução que envia mensagens do synapse para um endpoint.
We will then create a resource within this API for the GET HTTP method that is used to send requests to the 
Na Synapse é definido o contexto (/mapa)
No componente API Resourse é definido o path: /query/{codigoAgenteCampo}/{codigoMunicipio}
Para complementar, são definidos componentes de Log.


	