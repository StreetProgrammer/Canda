var hours = {
  'Monday': {
    sales: '09:00 AM - 06:00 PM',
    service: '8:00 AM - 5:00 PM',
    parts: '8:00 AM - 5:00 PM',
  },
  'Tuesday': {
    sales: '09:00 AM - 06:00 PM',
    service: '8:00 AM - 5:00 PM',
    parts: '8:00 AM - 5:00 PM',
  },
  'Wednesday': {
    sales: '09:00 AM - 06:00 PM',
    service: '8:00 AM - 5:00 PM',
    parts: '8:00 AM - 5:00 PM',
  },
  'Thursday': {
    sales: '09:00 AM - 06:00 PM',
    service: '8:00 AM - 5:00 PM',
    parts: '8:00 AM - 5:00 PM',
  },
  'Friday': {
    sales: '09:00 AM - 05:00 PM',
    service: '8:00 AM - 5:00 PM',
    parts: '8:00 AM - 5:00 PM',
  },
  'Saturday': {
    sales: '09:00 AM - 05:00 PM',
    service: '8:00 AM - 5:00 PM',
    parts: '8:00 AM - 5:00 PM',
  },
  'Sunday': {
    sales: 'Closed',
    service: 'Closed',
    parts: 'Closed',
  },
}

$(function () {

  var dateObj = new Date()
  var weekday = dateObj.toLocaleString("default", { weekday: "long" })
  if ($('.hours-used-parts').length) {
    $(".hours-used-parts .hours ._sales").text("Sales: " + hours[weekday]['sales']);
    $(".hours-used-parts .hours ._service").text("Service: " + hours[weekday]['service']);
    $(".hours-used-parts .hours ._parts").text("Parts: " + hours[weekday]['parts']);
  }
});
