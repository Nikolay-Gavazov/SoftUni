function tseamAccount(input) {

    let games = input.shift().split(' ');

    let line = input.shift().split(' ');

    while (line != 'Play!') {
        const comand = line[0];
        let game = line[1];
        switch (comand) {
            case 'Install':
                if (games.includes(game)) {

                } else {
                    games.push(game);
                }
                break;
            case 'Uninstall':
                if (games.includes(game)) {
                    let index = games.indexOf(game);
                    games.splice(index, 1);
                }
                break;
            case 'Update':
                if (games.includes(game)) {
                    let index = games.indexOf(game);
                    games.splice(index, 1);
                    games.push(game);
                }
                break;
            case 'Expansion':
                game = game.split('-');
                let expansion = game[0];
                let newGame = game[0] + ':' + game[1];

                if (games.includes(expansion)) {
                    let index = games.indexOf(expansion);
                    games.splice(index+1, 0, newGame);
                    
                  

                }
                break;
        }

        line = input.shift().split(' ');
    }

    console.log(games.join(' '));

}
tseamAccount(['CS WoW Diablo',

'Install LoL',

'Uninstall WoW',

'Update Diablo',

'Expansion CS-Go',

'Play!'])