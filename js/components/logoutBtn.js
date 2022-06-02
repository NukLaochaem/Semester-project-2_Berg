export function logOut(event) {
  const loggingOut = document.querySelector(".log-out");

  if (loggingOut) {
    loggingOut.onclick = function () {
      const logOut = confirm("Are you sure you want to log out?");

      if (logOut) {
        localStorage.removeItem("token");
        location.href = "/login.html";
      }
    };
  }
}
