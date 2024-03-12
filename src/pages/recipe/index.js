import React from 'react'
import styles from './style.module.css';
import omelette from './assets/images/image-omelette.jpeg';
function Recipe() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.image_container}> <img className={styles.img} src={omelette} alt="" /></div>
                <div className={styles.recipe}>
                    <div className={styles.recipe_title}>Simple Omelette Recipe</div>
                    <div>
                        An easy and quick dish, perfect for any meal. This classNameic omelette combines beaten eggs cooked to
                        perfection, optionally filled with your choice of cheese, vegetables, or meats.
                    </div>
                    <div className={styles.recipe_preparation}>
                        <h2 className={styles.preparation_title}> Preparation time</h2>
                        <ul>
                            <li className={styles.li}><strong className={styles.strong}>Total:</strong> Approximately 10 minutes</li>
                            <li className={styles.li}><strong className={styles.strong}>Preparation:</strong> 5 minutes</li>
                            <li className={styles.li}><strong className={styles.strong}>Cooking:</strong> 5 minutes</li>
                        </ul>
                    </div>
                    <h2 className={styles.h2}>Ingredients</h2>
                    <ul className={styles.ingredients_list}>
                        <li className={styles.li}>2-3 large eggs</li>
                        <li className={styles.li}>Salt, to taste</li>
                        <li className={styles.li}>Pepper, to taste</li>
                        <li className={styles.li}>1 tablespoon of butter or oil</li>
                        <li className={styles.li}>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                    <hr />
                    <h2 className={styles.h2}>Instructions</h2>
                    <ol className={styles.instructions_list}>
                        <li className={styles.li}>
                            <strong className={styles.strong}>Beat the eggs:</strong>
                            In a bowl, beat the eggs with a pinch of salt and pepper until they are well
                            mixed.
                            You can add a tablespoon of water or milk for a fluffier texture.
                        </li>
                        <li className={styles.li}>
                            <strong className={styles.strong}>Heat the pan:</strong>
                            Place a non-stick frying pan over medium heat and add butter or oil.
                        </li>
                        <li className={styles.li}>
                            <strong className={styles.strong}>Cook the omelette:</strong>
                            Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                            the eggs evenly coat the surface.
                        </li>
                        <li className={styles.li}>
                            <strong className={styles.strong}>Add fillings (optional):</strong>
                            When the eggs begin to set at the edges but are still slightly runny in the
                            middle, sprinkle your chosen fillings over one half of the omelette.
                        </li>
                        <li className={styles.li}>
                            <strong className={styles.strong}>Fold and serve:</strong>
                            As the omelette continues to cook, carefully lift one edge and fold it over the
                            fillings. Let it cook for another minute, then slide it onto a plate.
                        </li>
                        <li className={styles.li}>
                            <strong className={styles.strong}>Enjoy:</strong>
                            Serve hot, with additional salt and pepper if needed.
                        </li>
                    </ol>
                    <hr />
                    <h2 className={styles.h2}>Nutrition</h2>
                    <div>
                        <span>
                            The table below shows nutritional values per serving without the additional fillings.
                        </span>
                        <div className={styles.nutrition_row}>
                            <div>Calories</div>
                            <div>277kcal</div>
                        </div>
                        <hr />
                        <div className={styles.nutrition_row}>
                            <div>Carbs</div>
                            <div>0g</div>
                        </div>
                        <hr />
                        <div className={styles.nutrition_row}>
                            <div>Protein</div>
                            <div>20g</div>
                        </div>
                        <hr />
                        <div className={styles.nutrition_row}>
                            <div>Fat</div>
                            <div>22g</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe