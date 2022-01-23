window.onscroll = function onScroll() {
  let pixelsFromTop = window.scrollY;

  let documentHeight = document.body.clientHeight;

  let windowHeight = window.innerHeight;

  let difference = documentHeight - windowHeight;

  let percentage = (pixelsFromTop * 100) / difference;

  document.querySelector(".progress_bar").style.width = `${percentage}%`;
};
