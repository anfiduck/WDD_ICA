mapboxgl.accessToken = 'pk.eyJ1IjoiYW5maWR1Y2siLCJhIjoiY2xpZWUyZmN0MDhneDNkcDY5MWc3ejFsbyJ9.8SdnELn6K8YnZB_lqDEFmA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [14.4313, 50.0865], 
  zoom: 15
});

var marker = new mapboxgl.Marker()
  .setLngLat([14.4313, 50.0865]) 
  .addTo(map);

var popup = new mapboxgl.Popup()
  .setHTML('<h3>Prague City University City Centre Campus</h3><p>Hybernská 24, Praha 1, Czech Republic</p>')
  .addTo(map);

marker.setPopup(popup);

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
  
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
  
    var responseElement = document.getElementById('response');
    responseElement.classList.remove('hidden');
    responseElement.textContent = 'Thank you, your message has been sent';
    
    event.target.reset();
  });
