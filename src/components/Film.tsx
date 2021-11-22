import React, { useEffect } from 'react';
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { StarIcon } from '@chakra-ui/icons';

import { imgUrl } from '../services/api';

export default function Film({ movieTitle, moviePoster, movieVoteAverage, movieVoteCount, movieLink }: any) {

    return (
        <Box className="movie-card" w={['100%','47.5%', '31.5%', '19%']}>
            <Link to={movieLink}>
                <Box
                    w='100%'
                    h={[650, 375, 450, 350]}
                    style={{
                        backgroundImage: `url(${imgUrl}${moviePoster})`,
                        backgroundSize: 'cover',
                        borderRadius: 10,
                    }}
                />
            </Link>
            
            <div className="text">
                <h1>{movieTitle}</h1>
                <h2><StarIcon color="yellow" style={{ marginBottom: 5 }} /> {movieVoteAverage} de {movieVoteCount} </h2>
            </div>
        </Box>
    );
}
