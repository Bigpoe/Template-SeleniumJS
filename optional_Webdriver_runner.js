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

exports.testSearchOnGoogle = function searchOnGoogle(){
  HomePage.makeSearch();
}



//Run tests
openWebPage();

searchOnGoogle();

closeDriver();
