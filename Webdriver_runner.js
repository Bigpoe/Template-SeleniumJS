var HomePage = require ('./Templates/HomePage');


//Tests Suites

function openWebPage(){
  HomePage.openHomePage();
}

function closeDriver(){
  HomePage.closeDriver();
}

function getElementText(){
  HomePage.getButtonLoginText();
}

function searchOnGoogle(){
  HomePage.search();
}



//Run tests
openWebPage();

searchOnGoogle();

closeDriver();
