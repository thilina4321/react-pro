import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

function Burger(props) {
    
    const ings = Object.keys(props.ingredient).map(key=>{
        return [...Array(props.ingredient[key])].map(i=> key )
        
    })

    const items = ings.reduce((arr, i)=>{
        return arr.concat(i)
    })



    return (

        <div className="burger">
            <BurgerIngredient/>

            {items.map((item, i)=>{
                return <BurgerIngredient 
                name={item}
                key={i}/>
            })}

            <BurgerIngredient/>
        </div>
    )
}

export default Burger
