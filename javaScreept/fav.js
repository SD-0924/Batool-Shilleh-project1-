document.addEventListener('DOMContentLoaded', () => {
  const favouritesToggle = document.getElementById('favouritesToggle');
  const favouritesSection = document.getElementById('favouritesSection');

  favouritesToggle.addEventListener('click', () => {
      if (favouritesSection.style.bottom === '0px') {
          favouritesSection.style.bottom = '-100px'; // يخفي القسم
      } else {
          favouritesSection.style.bottom = '0px'; // يظهر القسم
      }
  });
});