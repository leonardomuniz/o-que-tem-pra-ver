import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Flex, Spinner } from "@chakra-ui/react";
import { StarIcon} from '@chakra-ui/icons';

import { api, key } from '../services/api';
import NavBarComponent from '../components/NavBarComponent';

interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number
}

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        (async () => {
            const { data } = await api.get(`discover/movie?api_key=${key}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)

            setMovies(data.results);
            //console.log(data.results);
            setIsLoading(false);
        })();
    });

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
                            <Button colorScheme="pink" size="lg"><Link to="/movie">Mais informações</Link></Button>
                        </div>
                    </article>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} />
            </Grid>
            <p className="home-title">Mais populares</p>
            <Flex direction={'row'} wrap={'wrap'} style={{ marginLeft: '2%' }}>
                {isLoading ? <Spinner /> : movies.map(movie => (
                    <div className="movie-card" style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                        backgroundSize: 'cover',
                        width: '19%',
                        height: 350,
                        marginBottom: 10,
                        marginRight: 10,
                        display: 'flex',
                        flexDirection: 'column',
                    }
                }>
                        <div className="top"></div>
                        <div className="text">
                            <h1>{movie.title}</h1>
                            <h2><StarIcon color="yellow" style={{marginBottom: 5}}/> {movie.vote_average} de {movie.vote_count} votos</h2>
                        </div>
                    </div>
                ))}

            </Flex>
        </section >
    );
} 