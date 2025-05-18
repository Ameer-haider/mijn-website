document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([51.2194, 4.4025], 13); // Voorbeeld: Antwerpen centrum
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);
  
    L.marker([51.2194, 4.4025]).addTo(map)
      .bindPopup('Hier ben ik te vinden!')
      .openPopup();
  });
  