// onScroll function fires each time the user scrolls up or down the page

window.onscroll = function onScroll() {
  // Pixels on the Y axis the user has scrolled
  let pixelsFromTop = window.scrollY;

  // Total height of the full page (document)
  let documentHeight = document.body.clientHeight;

  // Height of current viewable area (window)
  let windowHeight = window.innerHeight;

  // Difference between the document and window heights
  let difference = documentHeight - windowHeight;

  // Get percentage by dividing how far from the top of the page with the height of the current viewable area (window)
  let percentage = (100 * pixelsFromTop) / difference;

  // Select #bar from the DOM and add a width using the calculated percentage
  document.getElementById("bar").style.width = `${percentage}%`;
};
