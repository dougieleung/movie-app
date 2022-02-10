import React from 'react';
import { FormControl, VStack, HStack, Select, CheckIcon } from 'native-base';

const MovieForm = props => {

    const { onValueChange } = props;

    return (
       
        <VStack space={2} width='90%' py={5} px={2}>     
          
            <FormControl isRequired>  
               
                <HStack width='100%' ml={12} alignItems='center'>
                    <Select width='80%' px={1} accessibilityLabel="Choose Movie" placeholder="Choose Movie" _selectedItem={{
                    bg:'contrastThreshold',
                    endIcon: <CheckIcon size={5} />
                    }} 
                    mt={1}
                    onValueChange={value => {
                        onValueChange(value)
                    }}
                    >
                        <Select.Item label="Now Playing" value="now_playing" />
                        <Select.Item label="Popular" value="popular" />
                        <Select.Item label="Top Rated" value="top_rated" />
                        <Select.Item label="Upcoming" value="upcoming" />
                    </Select>
                </HStack>
            
            </FormControl>
       
        </VStack>
    )
}

export default MovieForm;