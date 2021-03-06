const secrets = require('./secrets.json');
const Client = require('./src/Client.js');

global.__basedir = __dirname;

const client = new Client(secrets);

function init() {
     client.loadEvents('./src/event(s)');
     client.loadCommands('./src/command(s)');
     client.loadMongoose(client.mongodburi)
     client.login(client.token);
   }
   
init();
   
   process.on('unhandledRejection', err => client.logger.error(err));