var dev = 'dev';
var hml = 'hml';
var prd = 'prd';

var env = prd;

let apiUrl: string = '';
let apiPagUrl: string = '';

if (env === dev) {
    apiUrl = 'http://localhost:7071/api';
    apiPagUrl = 'http://localhost:7072/api';
} else if(env === hml){
    apiUrl = 'http://gateway-hml.iouone.com.br/api';
}else if(env === prd){
    apiUrl = 'https://plataforma-prd.iouone.com.br/api';
    apiPagUrl = 'https://pagamento-prd.iouone.com.br/api';
}

export const environment = {
    production: false,
    apiUrl: apiUrl,
    apiPagUrl: apiPagUrl
};