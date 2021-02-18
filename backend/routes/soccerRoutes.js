import {addNewPlayer, getPlayers} from '../controllers/playerControllers';

//variable that holds routes
//// it will need to be passed into the index
const routes = (app) =>{
    app.route('/players')
    //GET endpoint
        .get(getPlayers)
    //POST endpoint
        .post(addNewPlayer);
}

export default routes;