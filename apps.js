// Select elements
let progressBar = document.querySelector(".progress_bar");
let scrollTopBtn = document.querySelector("#scrollTopBtn");

// Scroll event
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let scrollPercent = Math.round((scrollTop / scrollHeight) * 100);
  progressBar.style.width = scrollPercent + "%";

  if (scrollTop > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }

  scrollTopBtn.style.backgroundImage = `conic-gradient(red, red ${scrollPercent}%, yellow ${scrollPercent}%)`;
});

// Click event (scroll to top)
scrollTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
