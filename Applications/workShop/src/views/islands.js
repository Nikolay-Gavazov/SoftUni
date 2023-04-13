import { createIsland, getIslands } from '../data/islands.js';
import { html } from '../lib/lit-html.js'
import { createSubmitHandler } from '../util.js';


const islandsTemplate = (islands, onCreate) => html`
<h1>Islands Overview</h1>
<section class="main">
<table>
                    <thead>
                        <tr>
                            <th class="wide">Order</th>
                            <th>Name</th>
                            <th class="wide">Population</th>
                            <th>Details</th>
                            <th class="wide">Controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${islands.map(islandRow)}
                    </tbody>
</table>
<tfoot>
                        <tr>
                            <td colspan="5">
                                <form @submit = ${onCreate}>
                                    <input type="text" name="name">
                                    <button class="btn">Create</button>
                                </form>
                            </td>
                        </tr>
</tfoot>
`;

const islandRow = (island) => html`
    <tr>
                            <td class="wide">
                                <div class="btn-grid">
                                    <button class="btn"><i class="fa-solid fa-up-long"></i></button>
                                    <button class="btn"><i class="fa-solid fa-down-long"></i></button>
                                </div>
                            </td>
                            <td>
                                <span class="label prim">${island.name}</span>
                                <span class="label sub narrow">Population:&nbsp;12061</span>
                                <div class="grid narrow">
                                    <button class="btn"><i class="fa-solid fa-arrow-down-up-across-line"></i></button>
                                    <button class="btn"><i class="fa-solid fa-pencil"></i></button>
                                    <button class="btn"><i class="fa-solid fa-trash-can"></i></button>
                                </div>
                            </td>
                            <td class="wide"><span class="label prim">12061</span></td>
                            <td>
                                <div class="btn-grid">
                                    <a class="btn" href="/${island.url}/ascension">Ascension</a>
                                    <a class="btn" href="/${island.url}/population">Population</a>
                                    <a class="btn" href="/${island.url}/needs">Needs</a>
                                    <!-- <a href="/lit$398638298$/industry">Industry</a> -->
                                </div>
                            </td>
                            <td class="wide">
                                <div class="btn-grid">
                                    <button class="btn">Rename</button>
                                    <button class="btn">Delete</button>
                                </div>
                            </td>
                        </tr><!----><!---->
                        <tr>
                            <td class="wide">
                                <div class="btn-grid">
                                    <button class="btn"><i class="fa-solid fa-up-long"></i></button>
                                    <button class="btn"><i class="fa-solid fa-down-long"></i></button>
                                </div>
                            </td>
                            <td>
                                <span class="label prim"><!--?lit$398638298$-->Ku'Raast</span>
                                <span class="label sub narrow">Population:&nbsp;<!--?lit$398638298$-->3145</span>
                                <div class="grid narrow">
                                    <button class="btn"><i class="fa-solid fa-arrow-down-up-across-line"></i></button>
                                    <button class="btn"><i class="fa-solid fa-pencil"></i></button>
                                    <button class="btn"><i class="fa-solid fa-trash-can"></i></button>
                                </div>
                            </td>
                            <td class="wide"><span class="label prim"><!--?lit$398638298$-->3145</span></td>
                            <td>
                                <div class="btn-grid">
                                    <a class="btn" href="/Ku-Raast/ascension">Ascension</a>
                                    <a class="btn" href="/Ku-Raast/population">Population</a>
                                    <a class="btn" href="/Ku-Raast/needs">Needs</a>
                                    <!-- <a href="/lit$398638298$/industry">Industry</a> -->
                                </div>
                            </td>
                            <td class="wide">
                                <div class="btn-grid">
                                    <button class="btn">Rename</button>
                                    <button class="btn">Delete</button>
                                </div>
                            </td>
                        </tr><!----><!---->
                        <tr>
                            <td class="wide">
                                <div class="btn-grid">
                                    <button class="btn"><i class="fa-solid fa-up-long"></i></button>
                                    <button class="btn"><i class="fa-solid fa-down-long"></i></button>
                                </div>
                            </td>
                            <td>
                                <span class="label prim"><!--?lit$398638298$-->Blackrock</span>
                                <span class="label sub narrow">Population:&nbsp;<!--?lit$398638298$-->1260</span>
                                <div class="grid narrow">
                                    <button class="btn"><i class="fa-solid fa-arrow-down-up-across-line"></i></button>
                                    <button class="btn"><i class="fa-solid fa-pencil"></i></button>
                                    <button class="btn"><i class="fa-solid fa-trash-can"></i></button>
                                </div>
                            </td>
                            <td class="wide"><span class="label prim"><!--?lit$398638298$-->1260</span></td>
                            <td>
                                <div class="btn-grid">
                                    <a class="btn" href="/Blackrock/ascension">Ascension</a>
                                    <a class="btn" href="/Blackrock/population">Population</a>
                                    <a class="btn" href="/Blackrock/needs">Needs</a>
                                    <!-- <a href="/lit$398638298$/industry">Industry</a> -->
                                </div>
                            </td>
                            <td class="wide">
                                <div class="btn-grid">
                                    <button class="btn">Rename</button>
                                    <button class="btn">Delete</button>
                                </div>
                            </td>
                        </tr>
`;

export async function islandsView(ctx) {
    const game = ctx.game;

    if (!game) {
        ctx.page.redirect('/settings');
    }
    const islands = ctx.islands;

    ctx.render(islandsTemplate(islands, createSubmitHandler(onCreate)));



    async function onCreate({name}, form){
        const island = {
            name,
            game: ctx.game.objectId
        }
       const result = await createIsland(island)
    }
}
