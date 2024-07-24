const { parentPort } = require('worker_threads');

// Perform some CPU-intensive task
const result = heavyComputation();

// Send the result back to the main thread
parentPort.postMessage(result);

function heavyComputation() {
    // Example computation
    let sum = 0;
    for (let i = 0; i < 100000000000; i++) {
        sum += i;
    }
    return sum;
}
