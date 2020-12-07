import React from 'react'
import './BurgerBoard.css'

function BurgerBoard(props) {
    const ings = Object.keys(props.items)

   

    return (
        <div className="dashboard">
            {ings.map(item=>{
                return (
                    <div className="db_items" key={item}> {item}  

                        <button 
                        onClick={()=>props.more(item)}
                        className="db_btn"> More </button>

                        <button
                        onClick={()=>props.less(item)}
                        className="db_btn"> Less </button>

                    </div>
                    )
            })}
        </div>
    )
}

export default BurgerBoard
