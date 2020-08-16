function extraRunsIn2016byEachTeam(matches, deliveries)
{
    let res={};
    for(match of matches){
        for(delivery of deliveries)
        {
            if(match.id==delivery.match_id && match.season=='2016'){
                if(res[delivery.bowling_team]){
                    res[delivery.bowling_team]+=parseInt(delivery.extra_runs);
                }
                else{
                    res[delivery.bowling_team]=parseInt(delivery.extra_runs);
                }
            }
        }
    }
    return res;
}
module.exports = extraRunsIn2016byEachTeam;