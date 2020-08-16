function numOfMatchesWonByEachTeamOverYear(matches)
{
  let final = {};
  for(let mat of matches)
  {
    if(!final[mat.season]){
      let result = {};
    for(let match of matches)
    {
      if(match.season==mat.season){
        let winner = match.winner;
        if(result[winner])
        {
          result[winner]+=1;
        }
        else{
           result[winner]=1;
        }
      }
    }
    final[mat.season]=result;
  }
}
    return final;
}
module.exports = numOfMatchesWonByEachTeamOverYear;