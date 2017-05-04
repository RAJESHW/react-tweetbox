import React, { Component } from 'react';
import './App.css';

export default class TweetBox extends Component {
	constructor() {
    	super()
    	this.handleChange = this.handleChange.bind(this);
    	this.togglePhoto = this.togglePhoto.bind(this);
	    this.state = {
	      text: '',
	      photoAdded: false
	    };
	}

	handleChange(e) {
		this.setState({ text : e.target.value })
		console.log(e.target.value);
	}
	togglePhoto() {
		this.setState({ photoAdded : !this.state.photoAdded});
	}
  	render() {
  		let disabledVal = this.state.text.length === 0;
  		let classNames = {
  			buttonTweet : "btn btn-default pull-right",
  			buttonPhoto : "btn btn-primary pull-right"
  		}

	    return (
	      <div className="well clearfix">
	        <textarea className="form-control" onChange={this.handleChange}> 
	        </textarea>
	        <br/>
	        <button className={classNames.buttonTweet} disabled={disabledVal}>
    			Tweet
    		</button>
	        <button className={classNames.buttonPhoto} 
	        		onClick={this.togglePhoto}>
	        	{this.state.photoAdded ? "Photo Added" : "Add Photo"}
	        	{this.state.photoAdded}
	        </button>
	        <br />
	        <span>{140 - this.state.text.length}</span>
	      </div>
	    );
  	}
}

