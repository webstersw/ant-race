export function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return (callback) => {
    setTimeout(() => {
        callback(likelihoodOfAntWinning);
      }, delay);
    };
  }  


  export function sortAnts(ants) {
    for(var i = 0; i < ants.length; i++){
      for(var j = 0; j < ( ants.length - i -1 ); j++){
        if(ants[j].likelihood == undefined || ants[j].likelihood < ants[j + 1].likelihood){
          var temp = ants[j];
          ants[j] = ants[j + 1];
          ants[j + 1] = temp;
        }
      }
    }
    return ants;
  }