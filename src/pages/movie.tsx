import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Box, GridItem, Flex, Grid, Container, Center, Text, Tag, Spinner } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';
import { useBreakpointValue } from "@chakra-ui/react";

import NavBarComponent from '../components/NavBarComponent';
import Film from '../components/Film';
import { Movie, Movies, Genre } from '../helpers/Interfaces';
import { api, key, imgUrl } from '../services/api';

export default function Films() {
    let { moviesId } = useParams();
    const variant = useBreakpointValue({ base: "base", sm: 'small', md: "medium", lg: 'large', xl: 'extra large' });

    const [movie, setMovie] = useState<Movie>();
    const [genres, setGenres] = useState<Genre[]>([{ "id": 28, "name": "Ação" }]);
    const [similar, setSimilar] = useState<Movies[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        (async () => {
            const { data } = await api
                .get(`movie/${moviesId}?api_key=${key}&language=pt-BR`);

            setMovie(data);
            setGenres(data.genres);
            setIsLoading(false);
        })();
    }, [moviesId]);

    useEffect(() => {
        (async () => {
            let genresList: any = genres.map(genre => `${genre.id}%20`);
            genresList = genresList.toString();
            genresList = genresList.replace(',', '');
            genresList = genresList.replace(',', '');
            genresList = genresList.slice(0, genresList.length - 3);

            const { data } = await api
                .get(`discover/movie?api_key=${key}&language=pt-BR&sort_by=popularity.desc&include_adult=true&page=1&with_genres=${genresList}`)

            setSimilar(data.results);
        })();
    }, [movie]);


    return (
        <div>
            <NavBarComponent />
            {variant === 'medium' || variant === 'small' || variant === 'base' ? (
                <>
                    {movie && (
                        <Box className="movie-image" style={{ backgroundImage: `url(${imgUrl}${movie.backdrop_path})` }}>
                            <Container maxW="container.lg" >
                                <Grid
                                    templateRows="repeat(2, 1fr)"
                                    templateColumns="repeat(1, 1fr)"
                                    gap={4}
                                >
                                    <GridItem rowSpan={2} colSpan={1} style={{ marginTop: '5%', marginBottom: '5%' }}>
                                        <Center>
                                            <Box className="movie-poster" w='60%' h={'350px'} style={{ backgroundImage: `url(${imgUrl}${movie.poster_path})` }} />
                                        </Center>
                                    </GridItem>
                                    <GridItem rowSpan={2} colSpan={1} style={{marginBottom: '5%', color: 'white' }}>
                                        <Text className="movie-title">{movie.title} - <span>({movie.release_date.substring(0, 4)})</span></Text>
                                        <Text className="movie-tagline">{movie.tagline}</Text>
                                        <Text className="movie-categories">
                                            {movie.genres.map(genre => <Tag key={genre.id} size="lg" colorScheme="orange">{genre.name}</Tag>)}
                                        </Text>
                                        <Text className="movie-synopses">Sinopse</Text>
                                        <Text className="movie-overview">{movie.overview}</Text>
                                        <Flex direction='column'>
                                            <Center style={{ flexDirection: 'column' }}>
                                                <Text className="movie-subtitle">Avaliação dos usuários</Text>
                                                <Text className="movie-content">
                                                    <StarIcon color="yellow" style={{ marginBottom: 5 }} /> {movie.vote_average} de {movie.vote_count} votos
                                                </Text>
                                            </Center>
                                            <Center style={{ flexDirection: 'column' }}>
                                                <Text className="movie-subtitle">Tempo de Duração</Text>
                                                <Text className="movie-content">{movie.runtime} minutos</Text>
                                            </Center>
                                        </Flex>
                                    </GridItem>
                                </Grid>
                            </Container>
                        </Box>
                    )}
                </>
            ) : (
                <>
                    {movie && (
                        <Box className="movie-image" style={{ backgroundImage: `url(${imgUrl}${movie.backdrop_path})` }}>
                            <Container maxW="container.lg" >
                                <Grid
                                    templateRows="repeat(2, 1fr)"
                                    templateColumns="repeat(4, 1fr)"
                                    gap={5}
                                >
                                    <GridItem rowSpan={2} colSpan={1} style={{ marginTop: '20%', marginBottom: '10%' }}>
                                        <Center>
                                            <Box className="movie-poster" style={{ backgroundImage: `url(${imgUrl}${movie.poster_path})` }} />
                                        </Center>
                                    </GridItem>
                                    <GridItem rowSpan={2} colSpan={3} style={{ marginTop: '5%', marginBottom: '5%', color: 'white' }}>
                                        <Text className="movie-title">{movie.title} - <span>({movie.release_date.substring(0, 4)})</span></Text>
                                        <Text className="movie-tagline">{movie.tagline}</Text>
                                        <Text className="movie-categories">
                                            {movie.genres.map(genre => <Tag key={genre.id} size="lg" colorScheme="orange">{genre.name}</Tag>)}
                                        </Text>
                                        <Text className="movie-synopses">Sinopse</Text>
                                        <Text className="movie-overview">{movie.overview}</Text>
                                        <Flex>
                                            <Center w="50%" style={{ flexDirection: 'column' }}>
                                                <Text className="movie-subtitle">Avaliação dos usuários</Text>
                                                <Text className="movie-content">
                                                    <StarIcon color="yellow" style={{ marginBottom: 5 }} /> {movie.vote_average} de {movie.vote_count} votos
                                                </Text>
                                            </Center>
                                            <Center w="50%" style={{ flexDirection: 'column' }}>
                                                <Text className="movie-subtitle">Tempo de Duração</Text>
                                                <Text className="movie-content">{movie.runtime} minutos</Text>
                                            </Center>
                                        </Flex>
                                    </GridItem>
                                </Grid>
                            </Container>
                        </Box>
                    )}
                </>
            )}

            <Container maxW="container.xl">
                <Text className="movie-options">Também veja:</Text>
            </Container>
            <Flex direction={'row'} wrap={'wrap'} style={{ marginLeft: '2%' }}>
                {isLoading ? <Spinner size="xl" /> : similar.map(similar => (
                    <Film
                        movieTitle={similar.title}
                        moviePoster={similar.poster_path}
                        movieVoteAverage={similar.vote_average}
                        movieVoteCount={similar.vote_count}
                        movieLink={`${similar.id}`}
                        movieDescription={similar.overview}
                    />
                ))}
            </Flex>

        </div>
    );
}