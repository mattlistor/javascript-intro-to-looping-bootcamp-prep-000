for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time");
}

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 0){
      array[i] = "I am 1 strange loop."
    }
    else {
      array[i] = "I am ${i} strange loops."
    }
    return array
  }
}