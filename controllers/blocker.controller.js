const { request, response } = require("express");
const { Worker } = require('worker_threads');

/**
 * @description this function blocking the main thread 
 * @param {request} req
 * @param {response} res
 */
function blockWithoutWorker(req, res) {
    let result = 0;
    for (let index = 0; index < 100; index++) {
        for (let index2 = 0; index2 < 2; index++) {
            for (let index3 = 0; index3 < 3; index++) {
                 result += index * index2 * index3;
            }
            
        }
        
    }
  res.status(200).json({result});
};


// Function to handle blocking with worker
function blockWithWorker(req, res) {
    const worker = new Worker(__dirname + '/../worker.js');
   

    worker.on('message', (result) => {
        res.send(`Result is ${result}`);
    });

    worker.on('error', (error) => {
        console.error('Worker error:', error);
        res.status(500).send('An error occurred');
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    });
}


module.exports = {
    blockWithoutWorker,
    blockWithWorker,
};

  
