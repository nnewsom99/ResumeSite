// JavaScript source code
var workExperienceFile = "./jobs.json";

function parseJSONFromFile(file) {
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null);
    return JSON.parse(request.responseText);
}

function displayWorkExperience() {
    var jsonObject = parseJSONFromFile(workExperienceFile);
    //sort array by id greatest to least

    for (x in jsonObject) {
        var stringToDisplay = "";

        stringToDisplay += "<p>"+ x.title;
        stringToDisplay += x.company;
        stringToDisplay += x.location +"</p";

        //display job title, company, location, industry, startdate
        //if not currently working, display end date
        //display description as a list

        document.getElementById("employmenthistory").innerHTML = stringToDisplay;
    }

    
}