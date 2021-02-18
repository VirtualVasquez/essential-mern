import mongoose from 'mongoose';
import {PlayerSchema} from '../models/playerModel';

//mongoose's findOneAndUpdate predates MongoDB's. This ensures we use MongoDB's `findOneAndUpdate()` and `findOneAndModify()`
mongoose.set('useFindAndModify', false);


const Player = mongoose.model('Player', PlayerSchema);

//controllers are the functions that interact with the DB when a request is made to the API.

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) =>{
        if (err){
            res.send(err);
        }
        res.json(Player);
    });
}

export const getPlayers = (req, res) => {
    Player.find({}, (err, Player) =>{
        if (err){
            res.send(err);
        }
        res.json(Player);
    });
}

export const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId, (err, Player) =>{
        if (err){
            res.send(err);
        }
        res.json(Player);
    });
}

export const UpdatePlayer = (req, res) => {
    //we're finding the player first, then pass the data in the body we want to update
    Player.findOneAndUpdate({_id: req.params.PlayerId}, req.body, {new: true}, (err, Player)=>{
        if (err){
            res.send(err);
        }
        res.json(Player);
    })
}


export const deletePlayer = (req, res) => {
    //we're finding the player first, then pass the data in the body we want to update
    Player.deleteOne({_id:req.params.PlayerId}, (err, Player)=>{
        if (err){
            res.send(err);
        }
        res.json({message:'Successfully deleted Player'});
    })
}