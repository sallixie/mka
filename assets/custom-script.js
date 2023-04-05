const animateCard = document.querySelectorAll(".animate-card");
animateCard.forEach((card) => {
  card.addEventListener("mouseover", (e) => {
    card.style.transform = "scale(1.02)";
    card.style.transition = "all 0.3s ease-in-out";
  });
  card.addEventListener("mouseout", (e) => {
    card.style.transform = "scale(1)";
    card.style.transition = "all 0.3s ease-in-out";
  });
});

const animateBtnClick = document.querySelectorAll(".animate-btn-click");
animateBtnClick.forEach((btnClick) => {
  btnClick.addEventListener("mousedown", (e) => {
    btnClick.style.transform = "scale(0.98)";
    btnClick.style.transition = "all 0.1s ease-in-out";
  });
  btnClick.addEventListener("mouseup", (e) => {
    btnClick.style.transform = "scale(1.02)";
    btnClick.style.transition = "all 0.15s ease-in-out";
  });
});

try {
  const contactBtnSend = document.getElementById("contact-btn-send");
  contactBtnSend.addEventListener("click", (e) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your message has been sent!",
    });
  });
} catch (error) {
  //
}

try {
  const galeriImgImg = document.getElementById("galeri-img-img");
  const galeriImgModal = document.getElementById("galeri-img-modal");
  const galeriImgModalClose = document.getElementById("galeri-img-modal-close");
  const galeriImg = document.querySelectorAll(".galeri-img");
  galeriImg.forEach((img) => {
    img.addEventListener("click", (e) => {
      galeriImgImg.src = img.src;
      galeriImgModal.classList.add("show");

      galeriImgModal.addEventListener("click", (e) => {
        if (e.target.classList.contains("galeri-img-modal")) {
          galeriImgModal.classList.remove("show");
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          galeriImgModal.classList.remove("show");
        }
      });

      galeriImgModalClose.addEventListener("click", (e) => {
        galeriImgModal.classList.remove("show");
      });
    });
  });
} catch (error) {
  //
}
