  function formSubmit() {
    var form = document.getElementById('search');
    var elements = form.elements;
    var formData = new Object();
    formData.gym = elements.gym.value;
    return JSON.stringify(formData);
  }

  function searchData (event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/search/form', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(formSubmit());
    xhr.addEventListener('load', function() {

      if((xhr.status === 200) || (xhr.status === 304)) {

        var apiResponse = xhr.responseText;

        var newData = JSON.parse(apiResponse);
        console.log(newData[0]);

        var myLatLng = {lat: 33.6839, lng: -117.7947};
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {
            lat: Number(newData[0].geometry.location.lat),
            lng: Number(newData[0].geometry.location.lng)
          },
          zoom:8,
          scrollwheel: false
        });

        for (i = 0; i < 10; i++) {

          var getAddress = newData[i].formatted_address;
          var getName = newData[i].name;
          var getDate = newData[i].opening_hours.open_now;
          var getIcon = newData[i].icon;

          var marker = new google.maps.Marker({
            map: map,
            position: {
              lat: Number(newData[0].geometry.location.lat),
              lng: Number(newData[0].geometry.location.lng)
            },
            title: i+1 + ': ' + getName
          });

          var apiDiv = document.getElementById('mapsResults');

          var gymName = document.createElement('h4');
          var number = i+1 + '. ';
          gymName.textContent = number + getName;
          apiDiv.appendChild(gymName);

          var address = document.createElement('text');
          address.setAttribute('class', 'placeAddress');
          address.textContent = getAddress;
          apiDiv.appendChild(address);

          var lineBreak = document.createElement('br');
          apiDiv.appendChild(lineBreak);

          var border = document.createElement('h6')
          border.textContent = '';
          border.setAttribute('class', 'border');
          apiDiv.appendChild(border);
        }
      }
    })
  };

  var button = document.getElementById('searchButton');

  button.addEventListener('click', searchData, false);
