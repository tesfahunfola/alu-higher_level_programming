#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0) {
      // If either width or height is less than or equal to 0,
      // create an empty object by not initializing any properties
      return {};
    }

    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;
