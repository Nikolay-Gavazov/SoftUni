export function addSelection(ctx, next){
    ctx.addSelection = {
        island: ctx.params.island,
        mode: ctx.params.mode
    }


    next();
}