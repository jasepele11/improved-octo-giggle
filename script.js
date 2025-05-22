function checkPassword() {
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (password === "11181911") {
    message.style.color = "lightgreen";
    message.textContent = "Akses diterima. Selamat datang!";
  } else {
    message.style.color = "red";
    message.textContent = "Password salah. Coba lagi.";
  }
}
