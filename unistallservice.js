var Service = require('node-windows').Service;
// Criando um novo objeto do Serviço
var svc = new Service({
    //Nome do servico
    name: 'nodeprinter',
    //Descricao que vai aparecer no Gerenciamento de serviço do Windows
    description: 'Node Printer',
    //caminho absoluto do seu script
    script: "C:\\brajan\\nodeprinter\\dist\\server.js"
});
svc.on('uninstall', function () {
    console.log('Uninstall complete.');
});
// Desistalar serviço.
svc.uninstall();