const restify = require('restify');
const Default = require('./handlers/default').Handler;
const Message = require('./handlers/messages').Message;
const Query = require('./handlers/query').Handler;

const Handlers = {
  default: new Default(),
  messages: new Message(),
  query: new Query()
};

class WebManager {
  constructor(port, logger) {
    this.server = restify.createServer({
      name: 'myapp',
      version: '0.0.1',
      log: logger
    });
    this.PORT = port;
    this.log = logger;

    this.applyMiddleWares();
    this.applyRoutes();
  }

  applyMiddleWares() {
    this.server.use(restify.plugins.acceptParser(this.server.acceptable));
    this.server.use(restify.plugins.queryParser());
    this.server.use(restify.plugins.bodyParser());
    this.server.use(
        function crossOrigin(req, res, next) {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'X-Requested-With');
          return next();
        }
    );
  }

  applyRoutes() {
    this.server.get('/', Handlers.default.default);
    this.server.get('/echo/:name', Handlers.default.echo);
    this.server.get('/messages', Handlers.messages.recMessage);
    this.server.get('/query', Handlers.query.execute);
  }

  listen() {
    this.server.listen(this.PORT, () => {
      console.log('%s listening at %s', this.server.name, this.server.url);
    });
  }
}

module.exports = { WebManager };