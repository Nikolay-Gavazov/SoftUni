import { create, deleteGame, getGames } from '../data/games.js';
import {html} from '../lib/lit-html.js'
import { createSubmitHandler } from '../util.js';


const settingsTemplate = (games, user, onCreate, onDelete, error) => html `
<h1>Settings Page</h1>
<section class = 'main'>
    ${!user ? html `
    <div>
        <a class = 'link' href = '/login'>Sign in</a> to enable cloud sync
    </div>
    ` : null}
    
    <table>
        <thead>
            <tr>
                <th>Game Name</th>
                <th>Controls</th>
            </tr>
        </thead>
        <tbody>
            ${games.length == 0 ? html `
            <tr>
                <td colspan = '2'>No games are recorded</td>
            </tr>
            ` : games.map((g, i) => gameRow(g, onDelete.bind(null, i)))}
        </tbody>
        <tfoot>
            <tr>
                <td colspan = '2'>
                    <form @submit = ${onCreate}>
                    ${error ? html `<p class = 'error'>${error}</p>` : null}
                        <input type = 'text' name = 'name' placeholder = 'New Game Name'>
                        <button class = 'btn'><i class = 'fa-solid fa-plus'></i>Create Game</button>
                    </form>
                </td>
            </tr>
        </tfoot>
    </table>
</section>
`;

const gameRow = (game, index, onDelete) => html `
<tr>
    <td>${game.name}</td>
    <td>
        <button class = 'btn'><i class = 'fa-solid fa-download'></i>Load</button>
        <button @click = ${onDelete} class = 'btn'><i class = 'fa-solid fa-trash-can'></i>Delete</button>
    </td>
</tr>
`
export async function settingsView(ctx){

    const games = ctx.user ? await getGames() : [];
    
    update()

    function update(error){
        ctx.render(settingsTemplate(games, ctx.user, createSubmitHandler(onCreate), onDelete, error));
    }


    async function onCreate({name}){
        try {
            if(name == ''){
                throw {message: 'Name is required'}
            }
            const gameData = {name};

            const result = await create(gameData);

            Object.assign(gameData, result);
            games.push(gameData)

            update();
        } catch (err) {
           update(err.message);
           err.handled = true;
        }
    }
    async function onDelete(index){
        const game = games[index];

        const choice = confirm('Are you sure?');

        if(choice){
            await deleteGame(game.objectId);
            games.splice(index, 1);
            update()
        }
        
    }
}
