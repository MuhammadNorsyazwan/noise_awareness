tfunction ExecuteScript(strId)
{
  switch (strId)
  {
      case "5n2KiWIXIrZ":
        Script1();
        break;
      case "6qX6Kx9O1XS":
        Script2();
        break;
  }
}

function Script1()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=day + "/" + month + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script2() {
  var player = GetPlayer();

  var thename = player.GetVar("name");
  var theic = player.GetVar("ic");
  var thedate = player.GetVar("SystemDate");

  var urlstring = "certificate.html?name=" + encodeURIComponent(thename) + 
                  "&ic=" + encodeURIComponent(theic) + 
                  "&date=" + encodeURIComponent(thedate);

  window.open(urlstring, "_blank");
}


