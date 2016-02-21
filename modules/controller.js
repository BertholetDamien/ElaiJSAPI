var requirejs  = require('requirejs');

function route(controllerPath, req, res) {
  requirejs([controllerPath], function(controller) {
    executeController(controller, req, res);
  }, function(err) {
    send(res, 404);
  });
}

function executeController(controller, req, res) {
  try {
    var result = controller(req, res);
    if(result) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result));
    }
  } catch(e) {
    send(res, 500);
    console.error(e);
  }
}

function send(res, status) {
  res.status(status);
  res.end();
}

function ControllerRoute(basePath, variableName) {
  basePath = basePath || "controller/";
  variableName = variableName || "name";
  
  return function (req, res) {
    if(!req.params[variableName])
      return send(res, 404);
    
    var controllerPath = basePath + req.params[variableName];
    route(controllerPath, req, res);
  };
}

module.exports = ControllerRoute;