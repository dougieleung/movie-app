import React, { useState, useLayoutEffect } from 'react';
import { Container, Center } from 'native-base';
import MovieForm from '../forms/MovieForm';
import { getMovies } from '../services/api.js';
import ShowsList from '../lists/ShowsList.js';
import Loading from '../layout/Loading.js';

const MoviesContainer = ({ navigation }) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([{}]);

    useLayoutEffect(function initialDisplay() {
        getMovies('now_playing').then(
            movies => {
                setMovies(movies);
            }
        ).catch(error => console.log('error', error));
        },[]);


    const handleValueChange = type => {
   
        setIsLoading(true);

        getMovies(type).then(
            movies => {
                setMovies(movies);
                setIsLoading(false);
            }
        ).catch(error => console.log('error', error));
    }

    return (
        <Container ml={-7} >
            <Center>
            <MovieForm onValueChange={handleValueChange} />
            {isLoading ? <Loading/> : <ShowsList navigation={navigation} shows={movies} />}
            </Center>
        </Container>
    )
}

export default MoviesContainer;
