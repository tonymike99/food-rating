import {useState} from 'react';
import './styles.css';

const foodDictionary = {
    Italian: [
        {
            dish: 'Lasagna',
            rating: '5/5',
        },
        {
            dish: 'Ravioli',
            rating: '4/5',
        },
        {
            dish: 'Arancini',
            rating: '4/5',
        },
    ],
    Mexican: [
        {
            dish: 'Chicken Quesadillas',
            rating: '3.5/5',
        },
        {
            dish: 'Burritos with Minced Meat Filling',
            rating: '5/5',
        },
        {
            dish: 'Enchiladas',
            rating: '4/5',
        },
    ],
    Chinese: [
        {
            dish: 'Szechwan Chilli Chicken',
            rating: '4/5',
        },
        {
            dish: 'Spring Rolls',
            rating: '4/5',
        },
        {
            dish: 'Chow Mein',
            rating: '3.5/5',
        },
    ],
};

const cuisineArray = Object.keys(foodDictionary);
// console.log(cuisineArray);

export default function App() {
    const [userClick, setUserClick] = useState('Italian');

    function foodCuisineClickHandler(cuisine) {
        setUserClick(cuisine);
    }

    return (
        <div className='App'>
            <h1>
                <span>😋</span> Food Rating
            </h1>

            <p>
                {' '}
                These are my favourite foods. Select a cuisine to know more.{' '}
            </p>

            {cuisineArray.map((cuisine) => (
                <button
                    style={{
                        fontSize: '1rem',
                        padding: '1rem',
                        display: 'inline-block',
                    }}
                    onClick={() => foodCuisineClickHandler(cuisine)}
                >
                    {cuisine}
                </button>
            ))}

            <hr />

            <div>
                {foodDictionary[userClick].map((item) => (
                    <div
                        style={{
                            border: '1px solid white',
                            borderRadius: '10px',
                            maxWidth: '400px',
                            margin: 'auto',
                            padding: '1rem',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bolder',
                                fontStyle: 'italic',
                            }}
                        >
                            {item.dish}
                        </span>
                        <br />
                        {item.rating}
                    </div>
                ))}
            </div>
        </div>
    );
}
