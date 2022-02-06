import React from 'react';
import { Box, Divider, HStack, VStack, Image, Heading, Text, Button } from 'native-base';

const ShowCard = props => {
    const { type, id, image, name, popularity, releaseDate, navigation } = props;

    return (
        <Box pb={2} mb={2} >
            <HStack width='100%' alignItems='center'>
                <Box width='30%'>
                    <Image alt={`"${name}"`} source={{ uri: `https://image.tmdb.org/t/p/original${image}` }} size={'xl'} />
                </Box>
                <Box width='70%'>
                    <VStack px={3} py={5} space={1} divider={<Divider />}>
                        <Heading size='xs'>{name}</Heading>
                        <Text>Popularity: {popularity}</Text>
                        <Text>Release Date: {releaseDate}</Text>
                        <Button
                            onPress={()=>
                            navigation.navigate('Detail',{name, type, id})
                            }>More Details</Button>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default ShowCard;