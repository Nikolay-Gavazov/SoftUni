import { html } from "../node_modules/lit-html/lit-html.js";
import { getFurnitureDetails, updateFurniture } from "../src/data.js";

const editTemplate = (furniture, onSubmit) => html `
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" .value = ${furniture.make} type="text" name="make" value="Table">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" .value = ${furniture.model} type="text" name="model" value="Swedish">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" .value = ${furniture.year} type="number" name="year" value="2015">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" .value = ${furniture.description} type="text" name="description" value="Medium table">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" .value = ${furniture.price} type="number" name="price" value="235">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" .value = ${furniture.img} type="text" name="img" value="/images/table.png">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" .value = ${furniture.material} type="text" name="material" value="Wood">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
`
export async function editPage(ctx){
    const id = ctx.params.id;
    const furniture = await getFurnitureDetails(id);
    ctx.render(editTemplate(furniture, onSubmit));
    
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
            updateFurniture(id, data);
            ctx.page.redirect('/');
        } catch (error) {
            alert(error.message);
        }
    }
}