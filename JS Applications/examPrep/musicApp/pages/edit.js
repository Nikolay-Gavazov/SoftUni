import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";


const editTemplate = (element, onSubmit) => html`
<section class="editPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" .value=${element.name} class="name" type="text"
                    value="">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" .value=${element.imgUrl} class="imgUrl" type="text"
                    value="">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" .value=${element.price} class="price" type="text" value="">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" .value=${element.releaseDate} class="releaseDate" type="text"
                    value="">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" .value=${element.artist} class="artist" type="text"
                    value="">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" .value=${element.genre} class="genre" type="text"
                    value="">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" .value=${element.description} class="description" rows="10"
                    cols="10"></textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const element = await getById(id);

    ctx.render(editTemplate(element, createSubmitHandler(onSubmit)));

    async function onSubmit({ name, imgUrl, price, releaseDate, artist, genre, description }, form) {
        if (name == '' || imgUrl == '' || price == '' || releaseDate == '' || artist == '' || genre == '' || description == '') {
            return alert('All fields are required')
        }

        await update(id, { name, imgUrl, price, releaseDate, artist, genre, description });
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}