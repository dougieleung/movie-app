import React from 'react';
import { FormControl, VStack, HStack, Select, CheckIcon} from 'native-base';

const TVShowsForm = props => {

    const { onValueChange } = props;
 
    return (
        <VStack space={2} width='90%' py={5} px={2}>
            <FormControl isRequired>
                <HStack width='100%' ml={12} alignItems='center' alignItems='center'>
                    <Select width='80%' px={1} accessibilityLabel="Choose TV Show" placeholder="Choose TV Show" _selectedItem={{
                    bg: "black",
                    endIcon: <CheckIcon size={5} />
                    }} 
                    mt={1}
                    onValueChange={value => {
                        onValueChange(value)
                    }}>
                        <Select.Item label="Airing Today" value="airing_today" />
                        <Select.Item label="On The Air" value="on_the_air" />
                        <Select.Item label="Popular" value="popular" />
                        <Select.Item label="Top Rated" value="top_rated" />
                    </Select>
                </HStack>
            </FormControl>
        </VStack>
    )
}

export default TVShowsForm;