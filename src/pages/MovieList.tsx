import React, { useEffect, useState } from 'react';
import { Center, Text, Flex, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import NavBarComponent from '../components/NavBarComponent';
import Film from '../components/Film';
import Footer from '../components/Footer';
import { Movies } from '../helpers/Interfaces';
import { api, key } from '../services/api';


export default function MovieList() {
    let { searchParams } = useParams();

    const [movies, setMovies] = useState<Movies[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        (async () => {
            const { data } = await api
            .get(`discover/movie?api_key=${key}${searchParams}`);

            setMovies(data.results);
            setIsLoading(false);
        })();
    }, [searchParams]);
    return (
        <>
            <NavBarComponent />
            <Center>
                <Text fontSize="4xl" style={{ fontWeight: 'bold', marginTop: 30, marginBottom: 30 }}>Resultado da pesquisa:</Text>
            </Center>
            <Flex direction={'row'} wrap={'wrap'} style={{ marginLeft: '2%' }}>
                {isLoading ? <Spinner size="xl" /> : movies.map(movie => (
                    <Film
                        key={movie.id}
                        movieTitle={movie.title}
                        moviePoster={movie.poster_path}
                        movieVoteAverage={movie.vote_average}
                        movieVoteCount={movie.vote_count}
                        movieLink={`/movies/${movie.id}`}
                        movieDescription={movie.overview}
                    />
                ))}
            </Flex>
            <Footer />
        </>
    )
}