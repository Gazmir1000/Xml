function showClasses() {
  var classList = document.getElementById("classList");
  var visible = classList.style.display !== "none";
  classList.style.display = visible ? "none" : "block";
  if (!visible) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var xml = this.responseXML;
        var xslReq = new XMLHttpRequest();
        xslReq.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var xsl = new DOMParser().parseFromString(
              this.responseText,
              "application/xml"
            );
            var xslt = new XSLTProcessor();
            xslt.importStylesheet(xsl);
            var result = xslt.transformToFragment(xml, document);
            var serializer = new XMLSerializer();
            classList.innerHTML = serializer.serializeToString(result);
          }
        };
        xslReq.open("GET", "classes.xsl", true);
        xslReq.send();
      }
    };
    xhttp.open("GET", "classes.xml", true);
    xhttp.send();
  }
}
