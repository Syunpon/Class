function getData(name, url, get_type) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {

    }
  }
}
