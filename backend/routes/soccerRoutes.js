import {
        addNewPlayer, 
        getPlayers,
        getPlayerWithID,
        UpdatePlayer
    } from '../controllers/playerControllers';

//variable that holds routes
//// it will need to be passed into the index
const routes = (app) =>{
    app.route('/players')
    //GET endpoint
        .get(getPlayers)
    //POST endpoint
        .post(addNewPlayer);
    
    app.route('/player/:PlayerId')
        //Get specific player
        .get(getPlayerWithID)
        //Update specific player
        .put(UpdatePlayer)

}

export default routes;