import React from 'react';
import { FlatList } from 'native-base';
import ShowCard from '../listItems/ShowCard';

const ShowsList = props => {
    const { shows, navigation } = props
    return (
        <>
        {shows ? 
        (<FlatList
        data={shows}
        renderItem={({ item }) => <ShowCard
        type='tv'
        id={item.id}
        image={item.poster_path}
        name={item.name}
        popularity={item.popularity}
        releaseDate={item.first_air_date}
        navigation={navigation}
        />}
        keyExtractor={item => item.id}
        />) : ""}
        </>
    )
}

export default ShowsList;