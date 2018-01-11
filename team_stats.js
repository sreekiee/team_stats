const team = {
  _players: [{ firstName: "Pablo",                    			         lastName:"Sanchez",
               age: 37},
             { firstName: "Sachin",                    			         lastName:"Ramesh",
               age: 40},
             { firstName: "Dhoni",                    			         lastName:"Bolbat",
               age: 36}
            ],
  _games: [{opponent: "Broncos",
            teamPoints: 40,
            opponentPoints: 27},
           {opponent: "Valentine",
            teamPoints: 42,
            opponentPoints: 24},
           {opponent: "Fronic",
            teamPoints: 39,
            opponentPoints: 30}
          ],

  get players(){
    return this._players;
  },

  get games(){
    return this._games;
  },

  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Buffs', 45, 32);
team.addGame('Stubberolla', 90, 66);
team.addGame('Hotwings', 74, 22);

console.log(team._players);
console.log(team._games);
