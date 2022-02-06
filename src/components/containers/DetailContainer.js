import { Box, Center, Image, Text, VStack, HStack } from 'native-base';
import React, { useState, useEffect } from 'react';
import { getDetails } from '../services/api.js';

const DetailContainer = ({ navigation, route }) => {
    
    const [details, setDetails] = useState({});
    const { type, id } = route;

    useEffect(displayDetails = () => {
    getDetails(route.params.type, route.params.id).then(
        data => {
            setDetails(data);
        }
    ).catch(error => console.log('error', error));
    },[]);

    return (
        <Box width='100%'>
                <VStack>
                <Center>
                    <Text fontWeight="bold"  fontSize={20}>{details.original_title}</Text>
                    <Image alt={`"${details.original_title}"`} source={{ uri: `https://image.tmdb.org/t/p/original${details.poster_path}` }} size={'250'} ></Image>
                    <Text py={5} px={10} >
                    {details.overview}
                    </Text>
                    <HStack>
                        <Text>
                        Popularity: {details.popularity}
                        </Text>
                        <Text>  |  </Text>
                        <Text>
                         Release Date: {details.release_date}
                        </Text>
                    </HStack>
                </Center>
                </VStack>
        </Box>
    )
}

export default DetailContainer;