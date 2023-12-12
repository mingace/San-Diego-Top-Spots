$(document).ready(() => {
  $.getJSON('data.json', function(data) {
    let table = $('#tableBody');

    data.forEach(function(item) {
      let row = table[0].insertRow();
      
      let name = row.insertCell(0);
      name.innerHTML = item.name;

      let description = row.insertCell(1);
      description.innerHTML = item.description;

      let location = row.insertCell(2);
      let coords = `${item.location[0]},${item.location[1]}`;
      location.innerHTML = `<a href="https://www.google.com/maps?q=${coords}" target="_blank">Go there!</a>`;    
    });
  });
});
