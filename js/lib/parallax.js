// Throttle a function so it only executes once every <delay>ms.
function throttle(fn, delay) {
  let timeout = null;

  return (e) => {
    if (timeout) return;

    timeout = setTimeout(() => {
      fn(e);
      timeout = null;
    }, delay)
  }
}

// Linear interpolation.
function lerp(delta, from, to) {
  if (delta >= 1)
    return to;
  else if (delta <= 0)
    return from;

  return from + (to - from) * delta;
}

// Initialize parallax on element `node`.
function parallaxInit(node, delta = 0.2, constrain = null, multiplier = 1) {
  if (!node) return;

  const parent = node.parentElement;

  if (!parent) return;

  // Not very convenient to implement this functionally. We keep a copy
  // of these variables so we can do float math on them.
  let targetLeft = parent.scrollWidth * 0.5 - node.scrollWidth * 0.5;
  let targetTop = parent.scrollHeight * 0.5 - node.scrollHeight * 0.5;
  let currentLeft = targetLeft;
  let currentTop = targetTop;

  // Setup the node for parallax and position it correctly.
  node.style.margin = "0";
  node.style.transform = `translate(${targetLeft}px, ${targetTop}px)`;

  // Create an updater function that calculates the desired parallax position.
  const listenerFunc = (x, y) => {
    targetLeft = ((parent.scrollWidth * 0.5 - node.scrollWidth * 0.5) + (parent.scrollWidth * 0.1 * ((window.innerWidth - x) / window.innerWidth - 0.5))) * multiplier;
    targetTop = ((parent.scrollHeight * 0.5 - node.scrollHeight * 0.5) + (parent.scrollHeight * 0.4 * ((window.innerHeight - y) / window.innerHeight - 0.5))) * multiplier;
  }

  // Add event listeners for potential user input movement (mouse, touch).
  // Throttle function so expensive calculations don't run too often.
  document.addEventListener("mousemove", throttle((e) => { listenerFunc(e.pageX, e.pageY); }, 50));
  document.addEventListener("touchstart", throttle((e) => { listenerFunc(e.touches[0].pageX, e.touches[0].pageY); }, 50));
  document.addEventListener("touchmove", throttle((e) => { listenerFunc(e.touches[0].pageX, e.touches[0].pageY); }, 50));

  // Update actual node offsets at approximately 60FPS.
  const updaterFunc = () => {
    if (constrain != "vertical")
      currentLeft = lerp(delta, currentLeft, targetLeft);

    if (constrain != "horizontal")
      currentTop = lerp(delta, currentTop, targetTop);

    node.style.transform = `translate(${currentLeft}px, ${currentTop}px)`;

    window.requestAnimationFrame(updaterFunc);
  };

  updaterFunc();

  return node;
}

export { parallaxInit };
