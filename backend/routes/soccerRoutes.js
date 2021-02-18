import {addNewPlayer} from '../controllers/playerControllers';

//variable that holds routes
//// it will need to be passed into the index
const routes = (app) =>{
    app.route('/players')
    //POST endpoint
        .post(addNewPlayer);
}

export default routes;