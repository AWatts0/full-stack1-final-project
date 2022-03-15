//left to do:

// make calculate button perform a random roll between 1 and the max number on the dice for x amount of times where x is the level selected.
//Try and make the level drop down populated by a loop up top 20.

import { useState } from 'react';
import React from 'react';


const ClassSelector = function (props){

    //make function
    const [hitDice, setHitDice] = useState(0);
    function classSelect(ev) {
        // alert("a class has been selected");
        // console.dir(ev.target.value)
        setHitDice(ev.target.value)
    }
    
    return(
        
    <div>
         <label htmlFor="classSelector">Choose a Class: </label>

            <select name="classSelector" id="classSelector" defaultValue="placeholder" onChange={classSelect}>
            <option value="placeholder" disabled>Choose a Class</option>
            {
                props.classes.map((option, idx)=>(
                    <option value = {option.hitDice} key={idx}>{option.classTitle} </option>
                ))
            }
            </select> 
            <LevelSelector />
            <HPBox hp={hitDice}/>
    
    </div>
)};

const LevelSelector = function (props){


    const [selectedLevel, setLevel] = useState(0);
    function levelSelect(ev) {
        console.dir(ev.target.value)
        setLevel(ev.target.value)
        return selectedLevel;
    }
    return(
    <div>
         <label htmlFor="levelSelector">Choose a Level: </label>

            <select name="levelSelector" id="levelSelector" defaultValue="placeholder"  onChange={levelSelect}>
            <option value="placeholder" disabled>Choose a Level</option>
            {/* TODO try and make drop down made via a loop */}

            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
            <option value="4">Level 4</option>
            <option value="5">Level 5</option>
            <option value="6">Level 6</option>
            <option value="7">Level 7</option>
            <option value="8">Level 8</option>
            <option value="9">Level 9</option>
            <option value="10">Level 10</option>
            <option value="11">Level 11</option>
            <option value="12">Level 12</option>
            <option value="13">Level 13</option>
            <option value="14">Level 14</option>
            <option value="15">Level 15</option>
            <option value="16">Level 16</option>
            <option value="17">Level 17</option>
            <option value="18">Level 18</option>
            <option value="19">Level 19</option>
            <option value="20">Level 20</option>
            </select> 
    </div>
)};


class HPBox extends React.Component {
    
    constructor(props)
    {
        super(props);
    }
    

    calculateHP = () =>
    {
        alert("I'm calculating!");
        //pull the number/value for the hit dice from the selected class

        //create a randomly generated number between 1 and the value of the hit dice for as man 
    }
    
    render()
    {
      return(

        <div className='hpBox'>
            <header>HP</header>
            <label>Hit dice: d{this.props.hp}</label>
            <br></br>
            <label>level: {this.setLevel}</label>
            <br></br>
            <button onClick={this.calculateHP}>Calculate HP</button>

        </div>
      )  
    }
}


export {ClassSelector, LevelSelector, HPBox};
