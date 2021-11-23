import React from 'react';
import { Box, Text, Flex} from "@chakra-ui/react";

export default function Genre({genreName, genreColor}: any){
    return(
        <Box style={{marginBottom: 10, marginRight: 10}} w={['100%', '47%', '32%','24%', '24%']} h={'300px'} bg='genreColor'>
            <Flex justify={'center'} align={'center'}>
                <Text>{genreName}</Text>
            </Flex>
        </Box>
    )
}