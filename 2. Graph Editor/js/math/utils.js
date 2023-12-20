function getNearestPoint(loc, points, threshold = Number.MAX_SAFE_INTEGER) {
  let minDist = Number.MAX_SAFE_INTEGER;
  let nearest = null;
  for (const point of points) {
    const dist = distance(point, loc);
    if (dist < minDist && dist < threshold) {
      minDist = dist;
      nearest = point;
    }
  }
  return nearest;
}

function distance(p1, p2) {
  // https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas
  // 피타고라스의 정리:
  // https://namu.wiki/w/%ED%94%BC%ED%83%80%EA%B3%A0%EB%9D%BC%EC%8A%A4%20%EC%A0%95%EB%A6%AC
  return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}
