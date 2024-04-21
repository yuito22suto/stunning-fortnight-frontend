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