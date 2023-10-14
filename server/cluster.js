const Cluster = require('cluster');

if (Cluster.isMaster) {
  // get config
  const { WORKERS_COUNT } = require('./config.js');

  // set default vars
  let workers = [];

  const startWorker = () => {
    // start new worker
    let worker = Cluster.fork();

    // add worker to array
    workers.push(worker);

    // set exit event for worker
    worker.once('exit', async () => {
      // log
      console.log(`Worker died. Pid: ${worker.process.pid}`);

      // delete worker from array
      workers = workers.filter((v) => v.process.pid != worker.process.pid);

      // restart worker
      startWorker();
    });
  };

  // start worekrs
  for (let i = 0; i < WORKERS_COUNT; i++) startWorker();

  // log
  console.log(`Master started. Pid: ${process.pid}`);
} else if (Cluster.isWorker) {
  // start worker instance
  require('./worker.js');

  // log
  console.log(`Worker started. Pid: ${process.pid}`);
}
