#!/usr/bin/node
function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log("Missing integer(s)");
  } else {
    console.log(a + b);
  }
}
