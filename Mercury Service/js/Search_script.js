if (document.getElementById('searchbox2')) {
  document
    .getElementById('searchbox2')
    .addEventListener('keyup', function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById('searchbtn').click();
      }
    });
}

function srch2(page_name = 'Inventory') {
  //var e = document.getElementById("pagedd");
  //var dest= e.options[e.selectedIndex].value;
  var valuee = document.getElementById('searchbox2').value;
  if (valuee != '') {
    if (page_name == 'Inventory') {
      window.location = '/Search-Inventory/search/'.concat(valuee);
    } else if (page_name == 'parts') {
      window.location = '/Search-parts/search/'.concat(valuee);
    } else if (page_name == 'InStock') {
      window.location = '/Search-InStock/search/'.concat(valuee);
    }
  } else {
    document.getElementById('searchbox2').placeholder =
      'This field is required';
    var sheet = window.document.styleSheets[0];
    sheet.insertRule(
      'input#searchbox2::-webkit-input-placeholder {color: red !important}',
      sheet.cssRules.length
    );
    sheet.insertRule(
      'input#searchbox2::-moz-placeholder {color:#909; opacity:1;}',
      sheet.cssRules.length
    );
    sheet.insertRule(
      'input#searchbox2:-moz-placeholder {color:#909; opacity:1;}',
      sheet.cssRules.length
    );
  }
}

function toggleSearchList() {
  return;
  const element = document.querySelector('.search-list');
  if (element.classList.contains('show')) {
    element.classList.remove('show');
  } else {
    element.classList.add('show');
  }
}
