import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";


const editTemplate = (album, onSubmit) => html`
 <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form class="edit-form" @submit = ${onSubmit}>
            <input type="text" name="singer" .value = ${album.singer} id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" .value = ${album.album} id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" .value = ${album.imageUrl} id="album-img" placeholder="Image url" />
            <input type="text" name="release" .value = ${album.release} id="album-release" placeholder="Release date" />
            <input type="text" name="label" .value = ${album.label} id="album-label" placeholder="Label" />
            <input type="text" name="sales" .value = ${album.sales} id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export async function editPage(ctx){
    const id = ctx.params.id;
    const album = await getById(id);

    ctx.render(editTemplate(album, createSubmitHandler(onSubmit)));

    async function onSubmit({singer, album, imageUrl, release, label, sales}, form){
        if(singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == ''){
            return alert('All fields are required')
        }

        await update(id, {singer, album, imageUrl, release, label, sales});
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}