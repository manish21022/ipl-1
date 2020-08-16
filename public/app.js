function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualiseExtraRunByEachTeam(data.extraRunsIn2016byEachTeam);
  visualiseTop10EconomicalBowlerOf2015(data.top10economyBowlerOf2015);
  visualiseTop9PlayerOfTheMatch(data.top9PlayerOfTheMatch);
  visualiseTop15TossWinnersTeam(data.top15TossWinnerTeam);
  visualizeMatcheWonByEachTeam(data.matchesWonEachTeam);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Matches",
        data: seriesData
      }
    ]
  });
}


function  visualiseExtraRunByEachTeam(extraRunsIn2016byEachTeam) {
  const seriesData3 = [];
  for (let run in extraRunsIn2016byEachTeam) {
    seriesData3.push([run, extraRunsIn2016byEachTeam[run]]);
  }

  Highcharts.chart("Extra-run-coceded-by-each-team-in-2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra run coceded by each team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra-runs"
      }
    },
    series: [
      {
        name: "Team",
        data: seriesData3
      }
    ]
  });
}

function  visualiseTop10EconomicalBowlerOf2015(top10economyBowlerOf2015) {
  const seriesData4 = [];
  for (let bowler in top10economyBowlerOf2015) {
    seriesData4.push([bowler, top10economyBowlerOf2015[bowler]]);
  }

  Highcharts.chart("Top-10-Economy-Bowler-of-2015", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top 10 Economical Bowler of 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowler",
        data: seriesData4
      }
    ]
  });
}

function visualiseTop9PlayerOfTheMatch(top9PlayerOfTheMatch) {
  const seriesData5 = [];
  for (let player in top9PlayerOfTheMatch) {
    seriesData5.push([player, top9PlayerOfTheMatch[player]]);
  }

  Highcharts.chart("Top-9-Player-Of-The-Match", {
    chart: {
      type: "column"
    },
    title: {
      text: "Most time player declared player_of_the_match(Top 9)"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "number of times(player of the match)"
      }
    },
    series: [
      {
        name: "player",
        data: seriesData5
      }
    ]
  });
}

function visualiseTop15TossWinnersTeam(top15TossWinnerTeam) {
  const seriesData6 = [];
  for (let teams in top15TossWinnerTeam) {
    seriesData6.push([teams, top15TossWinnerTeam[teams]]);
  }

  Highcharts.chart("Top-Toss-Winner-teams", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top 15 Toss Winner team"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Toss wins"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData6
      }
    ]
  });
}

function visualizeMatcheWonByEachTeam(matchesWonEachTeam) 
{
  const years=Object.keys(matchesWonEachTeam);
  const teams={};
  const names=[];
  const teamArr=[];
  for(let mat in matchesWonEachTeam){
    let a=Object.keys(matchesWonEachTeam[mat]);
    teamArr.push(...a);
   }
   const team=[...new Set(teamArr)];
   for(let i=0;i<team.length;i++)
   {
     let b=[];
     for(let match in matchesWonEachTeam){
       if(matchesWonEachTeam[match].hasOwnProperty(team[i])){
         b.push(matchesWonEachTeam[match][team[i]]);
       }
       else{
         b.push(0);
       }
     }
     teams[team[i]]=b;
   }
   for(let tea in teams)
  {
    let t={};
    t.name=tea;
    t.data=teams[tea];
    names.push(t);
  }
 
  Highcharts.chart('matches-won-by-each-team-over-the-year', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches won by each team over the year'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        categories:years,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches won(each team)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: names
});
}