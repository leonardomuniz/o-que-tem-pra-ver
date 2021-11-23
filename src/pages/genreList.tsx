import React from 'react';
import { Center, Text, Flex } from "@chakra-ui/react";

import NavBarComponent from '../components/NavBarComponent';
import Genre from '../components/Genre';
import { GenreNames } from '../helpers/GenreList'

export default function GenreList() {
    return (
        <>
            <NavBarComponent />
            <Center>
                <Text fontSize="4xl" style={{ fontWeight: 'bold', marginTop: 30, marginBottom: 30 }}>Lista de Gêneros</Text>
            </Center>
            <br />
            <Flex direction={'row'} wrap={'wrap'} style={{ marginLeft: '2%' }}>
                {GenreNames.map(genre => (
                    <Genre
                        key={genre.id}
                        genreName={genre.name}
                        genreColor={genre.color}
                        genreText={genre.text}
                        genreParams={`&with_genres=${genre.id}`}
                    />
                ))}
            </Flex>
        </>
    )
}