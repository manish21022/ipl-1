function top15TossWinnerTeam(matches)
{
    var result={};
    for(let mat of matches)
    {
        let toss=mat.toss_winner;
        if(result[toss]){
            result[toss]+=1;
        }
        else{
            result[toss]=1;
        }
    }
    let arr=Object.values(result);
arr.sort(function(a,b){ return b-a });       
 var final={};
 for(let i=0;i<15;i++){
 for(let j in result){
     if(result[j]==arr[i]){
     final[j]=arr[i];
 }
}
}
return final;
}

module.exports=top15TossWinnerTeam;