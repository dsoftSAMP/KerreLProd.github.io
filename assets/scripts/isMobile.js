// Функция для проверки ориентации устройства и отображения/скрытия уведомления
function checkOrientation() {
  var orientationNotice = document.getElementById("orientationNotice");
  var content = document.querySelector(".center-container");

  // Проверяем, является ли устройство мобильным и ориентация горизонтальной
  var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  var isLandscape = window.innerWidth > window.innerHeight;

  // Если устройство мобильное и ориентация горизонтальная, покажем уведомление и скроем контент
  if (isMobileDevice && isLandscape) {
    orientationNotice.style.display = "block";
    content.style.display = "none";
  } else {
    // В противном случае, скроем уведомление и покажем контент
    orientationNotice.style.display = "none";
    content.style.display = "block";
  }
}

// Проверяем ориентацию при загрузке страницы и при изменении размеров окна
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
