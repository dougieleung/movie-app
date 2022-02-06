import React, { useState, useEffect } from 'react';
import { Container, Center } from 'native-base';
import TVShowsForm from '../forms/TVShowsForm';
import { getTelevision } from '../services/api.js';
import TVShowsList from '../lists/TVShowsList.js';
import Loading from '../layout/Loading.js';

const TVContainer = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [tvShows, setTVShows] = useState([{}]);

    useEffect(function displayDetails () {
        getTelevision('airing_today').then(
            shows => {
                setTVShows(shows);
            }
        ).catch(error => console.log('error', error));
        },[]);

    const handleValueChange = type => {
   
        setIsLoading(true);

        getTelevision(type).then(
            shows => {
                setTVShows(shows);
                setIsLoading(false);
            }
        ).catch(error => console.log('error', error));
    }

    return (
        <Container ml={-6}>
             <Center>
            <TVShowsForm onValueChange={handleValueChange}/>
            {isLoading ? <Loading/> : <TVShowsList navigation={navigation} shows={tvShows} />}
            </Center>
        </Container>
    )
}

export default TVContainer;