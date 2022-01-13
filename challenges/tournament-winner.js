function tournamentWinner(competitions, results) {
    // Write your code here.
    let currentBestTeam = '';
    const scores = {
        [currentBestTeam]: 0
    };

    for (let i = 0; i < competitions.length; i++) {
        let winningTeam = ''
        const [home, away] = competitions[i]
 
        if (results[i] === 0) winningTeam = away;
        else winningTeam = home;

        scores[winningTeam] ? scores[winningTeam] += 3 : scores[winningTeam] = 3;
        
        if (scores[winningTeam] > scores[currentBestTeam]) currentBestTeam = winningTeam;
    }
    return currentBestTeam;
  }

  console.log(tournamentWinner([
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"]], [0, 0, 1]));