import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material'

import {Link, useNavigate} from "react-router-dom";

const Hero = ({movies}) => {

    const navigate = useNavigate();

    return (
        <div className = 'movie-carousel-container'>
            <Carousel>
                {
                    movies.map((movie) =>{
                        return(
                            <Paper>
                                <div className = 'movie-card-container'>
                                    <div className = 'movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className='movie-detail1'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt='' />
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero