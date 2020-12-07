import React from 'react'
import './BurgerIngredient.css'


function BurgerIngredient(props) {
    switch(props.name){
        case 'salad' : return <div className="burger__salad"> </div>
        case 'cheese' : return <div className="burger__cheese"> </div>
        case 'source' : return <div className="burger__so"> </div>
        default:return <div className="burger__top"> </div>;
    }

}

export default BurgerIngredient
