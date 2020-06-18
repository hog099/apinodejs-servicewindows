var Service = require("node-windows").Service;

// Create a new service object
var svc = new Service({
  name: "nodeprinter",
  description: "Node Printer",
  script: "C:\\brajan\\nodeprinter\\dist"
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", function () {
  svc.start();
});

// Inicie o serviço
svc.on('start', function () {
  console.log(`${svc.name} iniciado.`);
});

svc.install();
