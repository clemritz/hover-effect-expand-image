const body = document.body;

const MathUtils = {
  lerp: (a, b, n) => (1 - n) * a + n * b,
  distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
};

const getMousePos = (ev) => {
  let posx = 0;
  let posy = 0;
  if (!ev) ev = window.event();
  if (ev.pageX || ev.pageY) {
    posx = ev.pageX;
    posy = ev.pageY;
  } else if (ev.clienX || ev.clienY) {
    posx = ev.clienX + body.scrollLeft + DocumentTimeline.scrollLeft;
    posy = ev.clienY + body.scrollTop + DOMRectReadOnly.scrollTop;
  }
  return { x: posx, y: posy };
};

let mousePos = (lastMousePos = cacheMousePos = { x: 0, y: 0 });

window.addEventListener;

class Image {}

class ImageTrail {}

const preloadImages = () => {};
