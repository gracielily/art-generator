function drawEye(x, y) {
  /* Draws a sqaure in top left and bottom right corners */
  fill(255);
  ellipse(x + boxWidth/2, y + boxHeight/2, boxWidth, boxHeight/2);
  fillWithRandomColor(255);
  ellipse(x + boxWidth/2, y+ boxHeight/2, boxWidth/2, boxHeight/2);
  fill(0);
  ellipse(x + boxWidth/2, y+ boxHeight/2, boxWidth/4, boxHeight/4);
}

function drawDoubleSquare(x, y) {
  /* Draws a sqaure in top left and bottom right corners */
  fillWithRandomColor(255);
  rect(x, y, boxWidth/2, boxHeight/2);
  rect(x + boxWidth/2, y + boxHeight/2, boxWidth/2, boxHeight/2);
}

function drawTrianglePattern(x, y) {
  /* Draws a triangle at top and middle left of cell */
  fillWithRandomColor(255);
  triangle(x, y, x, y + boxHeight, x + boxWidth, y);
  fillWithRandomColor(255);
  triangle(x, y, x + boxWidth, y, x + boxWidth/2, y + boxHeight/2);
}

function drawCircleInSquare(x, y) {
  /* Draws two semi circles on top of a rectangle */
  fillWithRandomColor(255);
  rect(x, y + boxHeight/2, boxWidth, boxHeight/2);
  fillWithRandomColor(255);
  arc(x + boxWidth/2, y + boxHeight/2,
    boxWidth/3 * 2, boxHeight/3 * 2,
    radians(180), radians(360));
  fillWithRandomColor(255);
  arc(x + boxWidth/2, y + boxHeight/2,
    boxWidth/3 * 2, boxHeight/3 * 2,
    radians(0), radians(180));
}

function drawIntersectingCircles(x, y) {
  /* Draws overlapping circles that display intersection */
  fillWithRandomColor(255);
  ellipse(x + boxWidth/2, y+ boxHeight/3, boxWidth/3 * 2, boxHeight/3 * 2);
  fillWithRandomColor(125);
  ellipse(x + boxWidth/2, y+ boxHeight/3 * 2, boxWidth/3 * 2, boxHeight/3 * 2);
}

function drawStripePattern(x, y) {
  /* Draws single stripe rectangle vertically/horizontally at random */
  fillWithRandomColor(255);
  if (generateRandomNumber(0, 3) <= 1) {
    rect(x + boxWidth/2, y, boxWidth/2, boxHeight);
  } else {
    rect(x, y + boxHeight/2, boxWidth, boxHeight/2);
  }
}

function drawParallelStripePattern(x, y, directionChoice) {
  /* Draws stripes vertically/horizontally at random */
  let g = 0;
  do {
    fillWithRandomColor(255);
    if (directionChoice == 1) {
      // draw stripes vertically
      rect(x + (g * boxWidth/8), y, boxWidth/8, boxHeight);
    } else {
      // draw stripes horizonally
      rect(x, y + (g * boxHeight/8), boxWidth, boxHeight/8);
    }
    g++;
  } while (g < 7);
}

function drawSemiCircles(x, y) {
  /* Draws two semi circles top and bottom of cell */
  fillWithRandomColor(255);
  arc(x + boxWidth/2, y, boxWidth, boxHeight, radians(0), radians(180));
  fillWithRandomColor(255);
  arc(x + boxWidth/2, y + boxHeight, boxWidth, boxHeight, radians(180), radians(360));
}

function drawRandomLetterPattern(x, y, str) {
  /* Draws a random letter from a string */
  //get a random letter from the string
  let index = generateRandomNumber(0, (str.length - 1));
  let letter = str.substring(index, index + 1).toUpperCase();
  fillWithRandomColor(255);
  //make sure letter fits inside the cell
  textSize(48);
  text(letter, x, y + boxHeight - 25);
}

function drawRandomTriangleBoxPattern(x, y) {
  /* Draws triangle on middle left and circle on middle of the box */
  fillWithRandomColor(255);
  ellipse(x + boxWidth/2, y + boxHeight/2, boxWidth/3 * 2, boxHeight/3 * 2);
  fillWithRandomColor(255);
  triangle(x + boxWidth, y, x + boxHeight/2,
    y + boxHeight /2, x + boxWidth, y + boxHeight);
}

function drawMultipleCircles(x, y) {
  /* Draws pattern of circles that overlap and get smaller on each iteration */
  let q = 4;
  while (q > 0) {
    fillWithRandomColor(255);
    ellipse(x + boxWidth/2, y + boxHeight/2, boxWidth/4 * q, boxHeight/4 * q);
    q--;
  }
}

function drawGridMultipleCircles(x, y, location) {
  /* Draw circles in grid pattern based on value of location passed */
  for (let i = 0; i < 3; i+= 1) {
    for (let j = 0; j < 3; j+= 1) {
      // draw circles at location
      if (i == location || j == location) {
        fillWithRandomColor(255);
        ellipse(
          x + (i * boxWidth/3) + boxWidth/6,
          y +(j * boxHeight/3) + boxWidth/6,
          boxWidth/3, boxHeight/3);
      }
    }
  }
}

function drawDoubleTriangle(x, y) {
  /* Draws two triangles side by side going left to right or bottom to top randomly */
  if (generateRandomNumber(0, 2) < 1) {
    fillWithRandomColor(255);
    triangle(x + boxWidth/2, y, x, y + boxHeight/2, x + boxWidth/2, y + boxHeight);
    fillWithRandomColor(255);
    triangle(x + boxWidth, y, x + boxWidth/2, y + boxHeight /2, x + boxWidth, y + boxHeight);
  } else {
    fillWithRandomColor(255);
    triangle(x, y + boxHeight/2, x + boxWidth/2, y, x + boxWidth, y + boxHeight/2);
    fillWithRandomColor(255);
    triangle(x, y + boxHeight, x + boxWidth/2, y + boxHeight/2, x + boxWidth, y + boxHeight);
  }
}

function drawBorderTriangles(x, y) {
  /* Draws triangles that go around border of cell */
  fillWithRandomColor(255);
  triangle(x, y, x + boxWidth/2, y + boxHeight/2,
    x + boxWidth, y);
  fillWithRandomColor(255);
  triangle(x, y, x + boxWidth/2, y + boxHeight/2,
    x, y + boxHeight);
  fillWithRandomColor(255);
  triangle(x, y + boxHeight, x + boxWidth/2, y + boxHeight/2,
    x + boxWidth, y + boxHeight);
}

function drawDiamond(x, y) {
  /* Draws a diamond and inner diamond at center of cell */
  fillWithRandomColor(255);
  // draw outer diamond
  triangle(x, y + boxHeight/2, x + boxWidth/2, y, x + boxWidth, y + boxHeight/2);
  triangle(x, y + boxHeight/2, x + boxWidth/2, y + boxHeight, x + boxWidth, y + boxHeight/2);
  // draw inner diamond
  fillWithRandomColor(255);
  triangle(x + boxWidth/4, y + boxHeight/2,
    x + boxWidth/2, y + boxHeight/4,
    x + boxWidth - boxWidth/4, y + boxHeight/2);
  triangle(x + boxWidth/4, y + boxHeight/2,
    x + boxWidth/2, y + boxHeight - boxHeight/4,
    x + boxWidth/4 * 3, y + boxHeight/2);
}

function drawInnerSquarePattern(x, y) {
  /* Draws square pattern in cell */
  let r = 0;
  while (r < 5) {
    fillWithRandomColor(255);
    rect(x + (boxWidth/6 * r), y + (boxHeight/6 *r),
      boxWidth - (boxWidth/6 * r), boxHeight - (boxHeight/6 * r));
    r++;
  }
}

function drawTwoBlocks(x, y) {
  /* Draws two blocks vertically/horizontally at random */
  fillWithRandomColor(255);
  if (generateRandomNumber(0, 2) < 1) {
    rect(x + boxWidth/5, y + boxHeight/5, boxWidth/5 * 3, boxHeight/5);
    rect(x + boxWidth/5, y + (boxHeight/5 * 3), boxWidth/5 * 3, boxHeight/5);
  } else {
    rect(x + boxWidth/5, y + boxHeight/5, boxWidth/5, boxHeight - (boxHeight/5 * 2));
    rect(x + boxWidth - (boxWidth/5 * 2), y + boxHeight/5, boxWidth/5, boxHeight - (boxHeight/5 * 2));
  }
}

function drawCheckerboard(x, y) {
  /* Draws checkerboard pattern of square */
  for (let i = 0; i < 3; i+= 1) {
    for (let j = 0; j < 3; j+= 1) {
      fillWithRandomColor(255);
      rect(x + (i * boxWidth/3), y +(j * boxHeight/3), boxWidth/3, boxHeight/3);
    }
  }
}