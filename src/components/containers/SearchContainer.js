import React, { useState } from 'react';
import { Container, Center } from 'native-base';
import SearchForm from '../forms/SearchForm.js';
import { getSearch } from '../services/api.js';
import ShowsList from '../lists/ShowsList.js';
import Loading from '../layout/Loading.js';

const SearchContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [shows, setShows] = useState([{}]);

    const [search, setSearch] = useState(null);
    const [type, setType] = useState(null);

    const fetchShows = () => {
        setIsLoading(true);

        getSearch(search, type).then(
            shows => {
                setShows(shows);
                setIsLoading(false);
            }
        ).catch(error => console.log('error', error));
    }

    const handleInputChange = query => {
        setSearch(query);
    }

    const handleValueChange = type => {
        setType(type);
    }

    return (
        <Container ml={2} px={2} py={6}>
            <Center>
            <SearchForm fetchShows={fetchShows} onInputChange={handleInputChange} onValueChange={handleValueChange} />
            {isLoading ? <Loading/> : <ShowsList navigation={navigation} shows={shows} />}
            </Center>
        </Container>
    )
}

export default SearchContainer;