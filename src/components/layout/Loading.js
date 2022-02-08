import React from 'react';
import { Center, Text, Spinner } from 'native-base';

const Loading = () => {
    return(
        <Center>
           
            <Text alignItems="center"><Spinner color="blue.500" /> Loading results, please be patient.</Text>
        </Center>
    )
}

export default Loading;