import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById, getLikes, getUserLike, like } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (album, likes, deleteAlbum, likeAlbum, userLike) => html`
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
        ${album.hasUser ? html `
        <div id="action-buttons">
            ${album.isOwner ? html `
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click = ${deleteAlbum}>Delete</a>
            ` : null}
            ${!album.isOwner && userLike == 0 ? html `
            <a href="javascript:void(0)" id="like-btn" @click = ${likeAlbum}>Like</a>
            ` : null}
          </div>
        ` : null}
          
        </div>
      </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const album = await getById(id);
    album.hasUser = false;
    const likes = await getLikes(album._id);
    const userData = getUserData();

    if(userData){
        album.hasUser = true;
        album.isOwner = album._ownerId == userData._id;
        const userLike = await getUserLike(album._id, userData._id);
        ctx.render(detailsTemplate(album, likes, deleteAlbum, likeAlbum, userLike))
    }else{
        ctx.render(detailsTemplate(album, likes, deleteAlbum, likeAlbum))
    }

    async function deleteAlbum(e){
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if(confirmation){
            del(id);
            ctx.page.redirect('/catalog')
        }   
    }

    async function likeAlbum(e){
        e.preventDefault();
        like(album._id);
        ctx.page.redirect(`/details/${id}`)
    }
}