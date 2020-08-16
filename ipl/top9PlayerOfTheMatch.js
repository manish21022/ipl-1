function top9PlayerOfTheMatch(matches)
{
var result={};
for(let mat of matches){
    let player = mat.player_of_match;
    if(result[player]){
        result[player] +=1;
    }
    else{
        result[player]=1;
    }
}
let arr=Object.values(result);

let arr2=arr.sort(function(a,b){ return b-a });       
 var final={};
 for(let i=0;i<9;i++){
 for(let j in result){
     if(result[j]===arr2[i]){
     final[j]=arr2[i];
 }
}
}
return final;
}

module.exports=top9PlayerOfTheMatch;