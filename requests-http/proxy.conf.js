const PROXY_CONFIG = [
    {
        context: ['/api'],// Contexto que será usado quando houver chamada para o target
        target: 'http://localhost:8000/',
        secure: false,
        logLevel: 'debug',
        pathRewrite: {'^/api': '' }
    }
];// Configuração padrão para conectar o Angular a um Back end sem ter uma ligação entre os links de cursos (Porta 4200 && Porta 800)

module.exports = PROXY_CONFIG