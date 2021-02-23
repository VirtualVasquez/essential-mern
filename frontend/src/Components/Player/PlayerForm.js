import React from 'react';

 class PlayerForm extends React.Component{
     constructor(props){
         super(props);
         this.state={ }
     }
     render(){
         return(
            <div className="row">
                <h1 classNameName="center"> Add a new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref="firstName" type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref="lastName" type="text" />
                            <label htmlFor="lastName">First Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone" ref="phone" type="text" />
                            <label htmlFor="phone">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref="email" type="text" />
                            <label htmlFor="email">First Name</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit"
                    name="action">Add Player</button>
                </form>
            </div>
         )
     }
 }

export default PlayerForm;

