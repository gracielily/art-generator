function drawRandomCell(x, y) {
  fillWithRandomColor(255);
  rect(x, y, boxWidth, boxHeight);
  // generate random number and draw pattern based on number
  const randomNumber = generateRandomNumber(0, 18);
  switch (randomNumber) {
    case 1:
      drawDoubleSquare(x, y);
      break;
    case 2:
      drawTrianglePattern(x, y);
      break;
    case 3:
      drawCircleInSquare(x, y);
      break;
    case 4:
      drawStripePattern(x, y);
      break;
    case 5:
      drawIntersectingCircles(x, y);
      break;
    case 6:
      drawParallelStripePattern(x, y, generateRandomNumber(1, 3));
      break;
    case 7:
      drawEye(x, y);
      break;
    case 8:
      drawRandomLetterPattern(x, y, "abcdefghijklmnopqrstuvwxyz");
      break;
    case 9:
      drawSemiCircles(x, y);
      break;
    case 10:
      drawRandomTriangleBoxPattern(x, y);
      break;
    case 11:
      drawDoubleTriangle(x, y);
      break;
    case 12:
      drawTwoBlocks(x, y);
      break;
    case 13:
      drawGridMultipleCircles(x, y, generateRandomNumber(0, 2));
      break;
    case 14:
      drawBorderTriangles(x, y);
      break;
    case 15:
      drawDiamond(x, y);
      break;
    case 16:
      drawInnerSquarePattern(x, y);
      break;
    case 17:
      drawMultipleCircles(x, y);
      break;
    default:
      drawCheckerboard(x, y);
  }
}

function drawGrid() {
  for (let i = 0; i < width; i += boxWidth) {
    for (let j = 0; j < height; j += boxHeight) {
      drawRandomCell(i, j);
    }
  }

  artIterationCount += 1;
}
