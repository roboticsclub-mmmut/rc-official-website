var scrolBtn = document.querySelector("#myDIV");
window.addEventListener("scroll", function () {
  let offset;
  offset = window.pageYOffset;
  if (offset > 300) {
    scrolBtn.style.display = "block";
  }
  if (offset < 300) {
    scrolBtn.style.display = "none";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
