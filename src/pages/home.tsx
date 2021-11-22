import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Flex, Spinner } from "@chakra-ui/react";

import NavBarComponent from '../components/NavBarComponent';
import Film from '../components/Film';
import { api, key, imgUrl } from '../services/api';
import { Movies, Movie } from '../helpers/Interfaces';
import { InfoIcon } from '@chakra-ui/icons'


export default function Home() {
    const [movies, setMovies] = useState<Movies[]>([]);
    const [movie, setMovie] = useState<Movie | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    function getRandomMovieIndex(movieList: Movies[]): number {
        const numberOfMovies = movieList.length;
        const randomMovie = Math.floor(Math.random() * numberOfMovies) + 1;

        return randomMovie;
    }

    useEffect(() => {
        (async () => {
            const { data } = await api
                .get(`discover/movie?api_key=${key}&language=pt-BR&sort_by=popularity.desc&include_adult=true`)

            setMovies(data.results);

            const movieIndex = getRandomMovieIndex(data.results);
            setMovie(data.results[movieIndex]);
            setIsLoading(false);
        })();
    }, []);


    return (
        <section className="background-gradient">
            <NavBarComponent />
            {movie && (
                <Grid
                    h='75vh'
                    w='100%'
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap={1}
                    style={{
                        backgroundImage: `url(${imgUrl}${movie.backdrop_path})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <GridItem rowSpan={2} colSpan={1}>
                        <article className="home-article">
                            <div />
                            <div>
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>
                                <Button leftIcon={<InfoIcon />} colorScheme="teal" size="lg" ><Link to={`movies/${movie.id}`} key="aa">Mais informações</Link></Button>
                            </div>
                        </article>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} />
                </Grid>
            )}
            <p className="home-title">Mais populares</p>
            <Flex direction={'row'} wrap={'wrap'} style={{ marginLeft: '2%' }}>
                {isLoading ? <Spinner size="xl" /> : movies.map(movie => (
                    <Film
                        key={movie.id}
                        movieTitle={movie.title}
                        moviePoster={movie.poster_path}
                        movieVoteAverage={movie.vote_average}
                        movieVoteCount={movie.vote_count}
                        movieLink={`movies/${movie.id}`}
                    />
                ))}
            </Flex>
        </section >
    );
} 