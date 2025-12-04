import React from "react";
import './MovieCard.css'

const MovieCard = () => {
    return(
        <a href="" className='movie_card'>
            <img src="https://m.media-amazon.com/images/I/81dae9nZFBS._AC_UF894,1000_QL80_.jpg" 
            alt="moviePoster" 
            className="movie_poster"
            />
            <div className="movie_details"> 
                <h3 className="movie_details_heading">Movie Name</h3>
                <div className="align_center movie_date_rate">
                    <p>10-20-2020</p>
                    <p>8.0</p>
                </div>
                <p className="movie_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, veniam laboriosam
                     accusamus accusantium deserunt adipisci?
                </p>
            </div>
        </a>
    )
};

export default MovieCard;