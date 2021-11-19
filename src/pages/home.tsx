import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Flex, Spinner, Box } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';

import { api, key, imgUrl } from '../services/api';
import NavBarComponent from '../components/NavBarComponent';
import { Movies } from '../helpers/Interfaces';

export default function Home() {
    const [movies, setMovies] = useState<Movies[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        (async () => {
            const { data } = await api
                .get(`discover/movie?api_key=${key}&language=pt-BR&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`)

            setMovies(data.results);
            
            setIsLoading(false);
        })();
    }, []);

    return (
        <section>
            <NavBarComponent />
            <Grid
                h="30em"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={1}
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <article className="home-article">
                        <div />
                        <div>
                            <h1>Titulo do filme</h1>
                            <p>Descrição do filme</p>
                            <Button colorScheme="pink" size="lg"><Link to="movies/01" key="aa">Mais informações</Link></Button>
                        </div>
                    </article>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} />
            </Grid>
            <p className="home-title">Mais populares</p>
            <Flex direction={'row'} wrap={'wrap'} style={{ marginLeft: '2%' }}>
                {isLoading ? <Spinner  size="xl" /> : movies.map(movie => (
                    <Box  className="movie-card text">
                    <Link to={`movies/${movie.id}`} style={{ backgroundImage: `url(${imgUrl}${movie.poster_path})` }}/>
                        <div className="text">
                            <h1>{movie.title}</h1>
                            <h2><StarIcon color="yellow" style={{ marginBottom: 5 }} /> {movie.vote_average} de {movie.vote_count} votos</h2>
                        </div>
                    </Box>
                ))}
            </Flex>
        </section >
    );
} 