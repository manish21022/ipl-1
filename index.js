const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonEachTeam = require("./ipl/numOfMatchesWonByEachTeamOverYear");
const extraRunsIn2016byEachTeam = require("./ipl/extraRunsIn2016byEachTeam");
const top10economyBowlerOf2015 = require("./ipl/top10economyBowlerOf2015");
const top9PlayerOfTheMatch = require("./ipl/top9PlayerOfTheMatch");
const top15TossWinnerTeam = require("./ipl/top15TossWinnerTeam");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERY_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERY_FILE_PATH)
      .then(deliveries =>{
      let result3 = extraRunsIn2016byEachTeam(matches, deliveries);
      let result4 = top10economyBowlerOf2015(deliveries, matches);
      let result = matchesPlayedPerYear(matches);
      let result2 = matchesWonEachTeam(matches);
      let result5 = top9PlayerOfTheMatch(matches);
      let result6 = top15TossWinnerTeam(matches);
      saveMatchesPlayedPerYear(result, result2, result3, result4, result5, result6);
    });
  });
}

function saveMatchesPlayedPerYear(result, result2, result3, result4, result5, result6) {
  const jsonData = {
    matchesPlayedPerYear: result,
    matchesWonEachTeam: result2,
    extraRunsIn2016byEachTeam: result3,
    top10economyBowlerOf2015: result4,
    top9PlayerOfTheMatch: result5,
    top15TossWinnerTeam: result6
  };

  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
