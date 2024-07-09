// const mongoose = require('mongoose');
// const Counter = require('./Model/CounterModel');

// async function initializeCounter() {
//   await mongoose.connect('mongodb://localhost:27017/cellworld', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const counter = await Counter.findOne({ counterName: "userid" });
//   if (!counter) {
//     await Counter.create({ counterName: "userid", counterValue: 0 });
//   }

//   const productcounter = await Counter.findOne({ counterName: "proId" });
//   if (!productcounter) {
//     await Counter.create({ counterName: "proId", counterValue: 0 });
//   }

//   mongoose.disconnect();
// }

// initializeCounter();
