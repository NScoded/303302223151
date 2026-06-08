const Log = require("./logger");

(async () => {

  await Log(
    "backend",
    "info",
    "service",
    "application started"
  );

  await Log(
    "backend",
    "error",
    "handler",
    "received string, expected bool"
  );

})();