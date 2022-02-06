import React from 'react';
import { FlatList } from 'native-base';
import ShowCard from '../listItems/ShowCard';

const ShowsList = props => {
    const { shows, navigation } = props
    return (
        <>
        <FlatList
        data={shows}
        renderItem={({ item }) => <ShowCard
        type='movie'
        id={item.id}
        image={item.poster_path}
        name={item.original_title}
        popularity={item.popularity}
        releaseDate={item.release_date}
        navigation={navigation}
        />}
        keyExtractor={item => item.id}
        /> 
        </>
    )
}

export default ShowsList;