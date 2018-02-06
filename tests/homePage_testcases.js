var HomePage = require ('../Templates/HomePage');


//Tests Suites

exports.testOpenPage = function openWebPage(){
  HomePage.openHomePage();
}

exports.testSearchOnGoogle = function searchOnGoogle(){
  HomePage.makeSearch();
}

function closeDriver(){
  HomePage.closeDriver();
}

function getElementText(){
  HomePage.getButtonLoginText();
}
