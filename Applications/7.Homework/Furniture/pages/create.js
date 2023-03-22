import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { createFurniture } from "../src/data.js";
const createTemplate = (onSubmit) => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`

export async function createPage(ctx){
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const make = document.getElementById('new-make');
        const model = document.getElementById('new-model');
        const year = document.getElementById('new-year');
        const description = document.getElementById('new-description');
        const price = document.getElementById('new-price');
        const image = document.getElementById('new-image');
        const material = document.getElementById('new-material');

        if(make.value.length < 4){
            make.className = 'form-control is-invalid';
            return alert('Make must be at least 4 symbols long');
        }else{
            make.className = 'form-control is-valid'
        }

        if(model.value.length < 4){
            model.className = 'form-control is-invalid';
            return alert('Model must be at least 4 symbols long');
        }else{
            model.className = 'form-control is-valid'
        }

        if(year.value < 1950 || year.value > 2050){
            year.className = 'form-control is-invalid';
            return alert('Year must be between 1950 and 2050');
        }else{
            year.className = 'form-control is-valid'
        }

        if(description.value < 10){
            description.className = 'form-control is-invalid';
            return alert('Description must be more than 10 symbols');
        }else{
            description.className = 'form-control is-valid';
        }

        if(price.value < 0){
            price.className = 'form-control is-invalid';
            return alert('Price must be a positive number');
        }else{
            price.className = 'form-control is-valid';
        }

        if(image.value == ''){
            image.className = 'form-control is-invalid';
            return alert('Image URL is required');
        }else{
            image.className = 'form-control is-valid';
        }
        const data = {
            make: make.value,
            model: model.value, 
            year: year.value, 
            description: description.value, 
            price: Number(price.value), 
            img: image.value, 
            material: material.value
        }
        try {
            await createFurniture(data);
            ctx.page.redirect('/');
        } catch (error) {
            alert(error.message);
        }
    }
}