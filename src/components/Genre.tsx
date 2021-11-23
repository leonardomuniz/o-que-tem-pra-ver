import React from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Genre({ genreName, genreColor, genreParams, genreText }: any) {
    return (
        <Box style={{ marginBottom: 10, marginRight: 10, borderRadius: 10 }} w={['100%', '47%', '32%', '24%', '24%']} h={'250px'} bg={genreColor}>
            <Link to={`/search/result/${genreParams}`}>
                <Flex justify={'center'} align={'center'}>
                    <Text style={{ marginTop: '100px', fontWeight: 'bold', color: genreText }} fontSize="2xl">{genreName}</Text>
                </Flex>
            </Link>
        </Box>
    )
}