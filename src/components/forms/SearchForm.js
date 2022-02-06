import React from 'react';
import { FormControl, VStack, HStack, Input, Icon, Button, Select, CheckIcon, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const SearchForm = props => {

    const { onInputChange, onValueChange, fetchShows } = props;

    const onSubmit = () => {
        fetchShows();
    }

    return (
        <VStack space={2} width='90%' py={5} px={2}>
            <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                <Input
                    placeholder='i.e. James Bond. CSI'
                    variant='filled'
                    bg='gray.200'
                    px={3}
                    width='135%'
                    InputLeftElement={
                        <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                    }
                    onChangeText={value => {
                        onInputChange(value)
                    }}
                />
      
                <FormControl.Label my={3}>Choose Search Type</FormControl.Label>
                <HStack width='100%' ml={12} justifyContent='space-evenly' alignItems='center'>
                    <Select width='71%' px={1} accessibilityLabel="Choose Search" placeholder="Choose Search" _selectedItem={{
                    bg: "black",
                    endIcon: <CheckIcon size={5} />
                    }} 
                    mt={1}
                    onValueChange={value => {
                        onValueChange(value)
                    }}
                    >
                        <Select.Item label="Multi" value="multi" />
                        <Select.Item label="Movie" value="movie" />
                        <Select.Item label="TV" value="tv" />
                    </Select>
                    <Button onPress={onSubmit} height={9} startIcon={<Icon size={5} as={Ionicons} name='ios-search' />}>Search</Button>
                </HStack>
                <Text mx={1} my={2} fontSize={15}>
                Please select a search type
                </Text>
            </FormControl>
        </VStack>
    )
}

export default SearchForm;