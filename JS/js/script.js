document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const msg = document.getElementById("successMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "Booking Successful! We will contact you soon 🐾";
    form.reset();
  });
});