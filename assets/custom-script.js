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

const contactBtnSend = document.getElementById("contact-btn-send");
contactBtnSend.addEventListener("click", (e) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: "Your message has been sent!",
  });
});
