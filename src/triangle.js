// // Business logic
export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    return "scalene triangle";
  } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
      return "equilateral triangle";
  } else {
    return "isosceles triangle";
  }
};

// // UI logic
// $(document).ready(function() {
//   $('#triangle-checker-form').submit(function(event) {
//     event.preventDefault();
//     const length1 = $('#length1').val();
//     const length2 = $('#length2').val();
//     const length3 = $('#length3').val();
//     const triangle = new Triangle(length1, length2, length3);
//     const response = triangle.checkType();
//     $('#response').append("<p>" + response + "</p>");
//   });
// });