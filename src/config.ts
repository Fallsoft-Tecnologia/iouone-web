var dev = 'dev';
var hml = 'hml';
var prd = 'prd';

var env = dev;

let apiUrl: string = '';

if (env === dev) {
    apiUrl = 'http://localhost:7071/api';
} else if(env === hml){
    apiUrl = 'http://gateway-hml.iouone.com.br/api';
}else if(env === prd){
    apiUrl = 'http://46.202.150.53:7071/api';
}

export const environment = {
    production: false,
    apiUrl: apiUrl
};