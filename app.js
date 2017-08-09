const cluster = require("cluster");

if (cluster.isMaster) {
  // We could create more than one worker per CPU
  const nbWorkers = require("os").cpus().length;

  // Fork workers.
  for (let i = 0; i < nbWorkers; i++) {
    cluster.fork();
  }

  cluster.on("online", (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  cluster.on("exit", (worker, code, signal) => {
    if (worker.exitedAfterDisconnect === true) {
      console.log(`Worker ${worker.process.pid} was willingly disconnected`);
    } else {
      console.error(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
    }
    console.log("Starting a new worker");
    cluster.fork();
  });
} else {
  // Code running if we're in a worker process
  require("server/server");
}
