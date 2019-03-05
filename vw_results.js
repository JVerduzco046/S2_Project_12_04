"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Juan Verudzco
   Date:   03.01.19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/





/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}

/// Author JS 
var reportHTML = "<h1>" + raceTitle + "</h1>";

////// For loop for Totals votes
for (var i = 0; i <= 7; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);
    reportHTML += "<table> <caption>" + race[i] + "</caption>" + "<tr><th> Candidate</th><th>Votes</th></tr>";

    reportHTML += candidateRows([i], totalVotes);
    reportHTML += "</table>";
}
document.getElementById("section").innerHTML = reportHTML;

// functiojn that writes the individual table rows each candidate //
function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);

        rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")" + "</td><td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + "%)" + "</td>";
        for (let k = 0; k < candidatePercent; k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        rowHTML += "</tr>"
    }
    return rowHTML;
}

///// JS    for the bars beside the results

function createBar(partyType) {
    /// its liek an if else statement but without the else because all of them can be true values //
    var barHTML = "";
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>";
            break;
        case "R":
            barHTML = "<td class='rep'></td>";
            break;
        case "I":
            barHTML = "<td class='ind'></td>";
            break;
    }
    return barHTML;

}