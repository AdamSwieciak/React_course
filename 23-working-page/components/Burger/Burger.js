import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngedient'
import BurgerBuilder from '../../conteiners/BurgerBuilder/BurgerBuilder/BurgerBuilder';

const burger = (props) => {
    let transformIngredient = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        })
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[])
    if (transformIngredient.length === 0) {
        transformIngredient = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )};


export default burger;

