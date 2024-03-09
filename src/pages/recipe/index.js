import React from 'react'
import './style.css';
import omelette from './assets/images/image-omelette.jpeg';
function Recipe() {
    return (
        <body>
            <div className="container">
                <div className="image-container"> <img src={omelette} alt="" /></div>
                <div className="recipe">
                    <div className="recipe-title">Simple Omelette Recipe</div>
                    <div>
                        An easy and quick dish, perfect for any meal. This classNameic omelette combines beaten eggs cooked to
                        perfection, optionally filled with your choice of cheese, vegetables, or meats.
                    </div>
                    <div className="recipe-preparation">
                        <h2 className="preparation-title"> Preparation time</h2>
                        <ul>
                            <li><strong>Total:</strong> Approximately 10 minutes</li>
                            <li><strong>Preparation:</strong> 5 minutes</li>
                            <li><strong>Cooking:</strong> 5 minutes</li>
                        </ul>
                    </div>
                    <h2>Ingredients</h2>
                    <ul className="ingredients-list">
                        <li>2-3 large eggs</li>
                        <li>Salt, to taste</li>
                        <li>Pepper, to taste</li>
                        <li>1 tablespoon of butter or oil</li>
                        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                    <hr />
                    <h2>Instructions</h2>
                    <ol className="Instructions-list">
                        <li>
                            <strong>Beat the eggs:</strong>
                            In a bowl, beat the eggs with a pinch of salt and pepper until they are well
                            mixed.
                            You can add a tablespoon of water or milk for a fluffier texture.
                        </li>
                        <li>
                            <strong>Heat the pan:</strong>
                            Place a non-stick frying pan over medium heat and add butter or oil.
                        </li>
                        <li>
                            <strong>Cook the omelette:</strong>
                            Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                            the eggs evenly coat the surface.
                        </li>
                        <li>
                            <strong>Add fillings (optional):</strong>
                            When the eggs begin to set at the edges but are still slightly runny in the
                            middle, sprinkle your chosen fillings over one half of the omelette.
                        </li>
                        <li>
                            <strong>Fold and serve:</strong>
                            As the omelette continues to cook, carefully lift one edge and fold it over the
                            fillings. Let it cook for another minute, then slide it onto a plate.
                        </li>
                        <li>
                            <strong>Enjoy:</strong>
                            Serve hot, with additional salt and pepper if needed.
                        </li>
                    </ol>
                    <hr />
                    <h2>Nutrition</h2>
                    <div className="nutrition-table">
                        <span>
                            The table below shows nutritional values per serving without the additional fillings.
                        </span>
                        <div className="nutrition-row">
                            <div>Calories</div>
                            <div>277kcal</div>
                        </div>
                        <hr />
                        <div className="nutrition-row">
                            <div>Carbs</div>
                            <div>0g</div>
                        </div>
                        <hr />
                        <div className="nutrition-row">
                            <div>Protein</div>
                            <div>20g</div>
                        </div>
                        <hr />
                        <div className="nutrition-row">
                            <div>Fat</div>
                            <div>22g</div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Recipe