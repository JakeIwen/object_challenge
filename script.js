var locations = []; // this array will hold your objects

// object constructor
function State(state, revenue, locationCount) {
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function() {
    return this.revenue/this.locationCount;
  };
}
// object instances
illinois = new State("IL", 5000, 12);
minnesota = new State("MN", 300, 3);
nevada = new State("NV", 25000, 1);

console.log(minnesota.averageRevenue());
// push object instances to locations array
locations.push(illinois);
locations.push(minnesota);
locations.push(nevada);

console.log(locations);
// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
