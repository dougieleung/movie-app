import { Box, Center, Image, Text, VStack, HStack } from 'native-base';
import React, { useState, useLayoutEffect } from 'react';
import { getDetails } from '../services/api.js';

const DetailContainer = ({ navigation, route }) => {
    
    const [details, setDetails] = useState({});
    const { image, type, id } = route;

    useLayoutEffect(function displayDetails() {
    getDetails(route.params.type, route.params.id).then(
        data => {
            setDetails(data);
        }
    ).catch(error => console.log('error', error));
    },[]);

    return (
        <Box mt={10} width='100%'>
                <VStack>
                <Center>
                    <Text py={5} fontWeight="bold"  fontSize={20}>{details.original_title}</Text>
                    <Image alt={`"${details.original_title}"`} source={{ uri: `https://image.tmdb.org/t/p/original${route.params.image}` }} size={'250'} />
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