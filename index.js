const hq = 42;

function distanceFromHqInBlocks(destination) {
  if ((destination - hq) >= 0) {
    return destination - hq;
  } else {
    return hq - destination;
  }
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if ((destination - start) >= 0) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) *.02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far"
  }
}
