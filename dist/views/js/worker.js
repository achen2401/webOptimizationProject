//importScripts("main.js");
self.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data[0]);
  var frame = e.data[0];

  performance.mark("mark_start_frame");
  //var items = document.querySelectorAll('.mover');
  //var bodyScrollTop = document.body.scrollTop / 1250;
  var items = e.data[1];
  var bodyScrollTop = e.data[2];
  var phases = [];
  //console.log("bodyScrollTop: " + bodyScrollTop)

  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin((bodyScrollTop) + (i % 5));
    phases.push[phase];
    //console.log(phase);

  }

  items.forEach(function(item, index) {
    item.style.left = item.basicLeft + 100 * phase[index] + 'px';
  });

  performance.mark("mark_end_frame");
  performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = performance.getEntriesByName("measure_frame_duration");
    //console.log(timesToUpdatePosition);
    logAverageFrame(timesToUpdatePosition);
  }


  // //nothing to update when scrolling
  // //remove the previous code that adjust the background pizza - it considerably slowed down the scrolling performance
  // var items = document.querySelectorAll('.mover');
  // var bodyScrollTop = document.body.scrollTop / 1250;
  // var phases = [];
  // console.log("bodyScrollTop: " + bodyScrollTop)

  // for (var i = 0; i < items.length; i++) {
  //   var phase = Math.sin((bodyScrollTop) + (i % 5));
  //   phases.push[phase];
  //   //console.log(phase);

  // }

  // items.forEach(function(item, index) {
  //   item.style.left = item.basicLeft + 100 * phase[index] + 'px';
  // });

  // window.performance.mark("mark_end_frame");
  // window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  // if (frame % 10 === 0) {
  //   var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
  //   //console.log(timesToUpdatePosition);
  //   logAverageFrame(timesToUpdatePosition);
  // }




}, false);

// worker.postMessage('Hello World');
// onmessage = function(e) {
//   //frame++;
//   //var frame = e.data;
//   console.log("worker received message: " + e.data[0]);
//   //postMessage("worker received message")
//   // window.performance.mark("mark_start_frame");

//   // //nothing to update when scrolling
//   // //remove the previous code that adjust the background pizza - it considerably slowed down the scrolling performance
//   // var items = document.querySelectorAll('.mover');
//   // var bodyScrollTop = document.body.scrollTop / 1250;
//   // var phases = [];
//   // console.log("bodyScrollTop: " + bodyScrollTop)

//   // for (var i = 0; i < items.length; i++) {
//   //   var phase = Math.sin((bodyScrollTop) + (i % 5));
//   //   phases.push[phase];
//   //   //console.log(phase);

//   // }

//   // items.forEach(function(item, index) {
//   //   item.style.left = item.basicLeft + 100 * phase[index] + 'px';
//   // });

//   // window.performance.mark("mark_end_frame");
//   // window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
//   // if (frame % 10 === 0) {
//   //   var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
//   //   //console.log(timesToUpdatePosition);
//   //   logAverageFrame(timesToUpdatePosition);
//   // }

// }