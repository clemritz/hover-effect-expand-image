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

window.addEventListener("mousemove", (ev) => (mousePos = getMousePos(ev)));

const getMouseDistance = () =>
  MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);

class Image {
  constructor(el) {
    this.DOM = { el: el };
    this.defaultStyles = {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 0,
    };
    this.getRect();
  }

  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
  isActive() {
    return TweenMax.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
  }
}

class ImageTrail {
  constructor() {
    this.DOM = { content: document.querySelector(".content") };
    this.images = [];
    [...this.DOM.content.querySelectorAll("img")].forEach((img) =>
      this.images.push(new Image(img))
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.threshold = 100;
    requestAnimationFrame(() => this.render());
  }

  render() {
    let distance = getMouseDistance();
    cacheMousePos.x = MathUtils.lerp(
      cacheMousePos.x || mousePos.x,
      mousePos.x,
      0.1
    );
    cacheMousePos.y = MathUtils.lerp (
      cacheMousePos.y || mousePos.y,
      mousePos.y,
      0.1
    );
  }
}

const preloadImages = () => {};
