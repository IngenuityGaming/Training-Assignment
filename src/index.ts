import { Application} from "pixi.js";

const app=new Application({
    width:800,
    height:600,
    antialias:true,
    resolution:1
});

document.body.appendChild(app.view);