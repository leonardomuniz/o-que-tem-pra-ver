import React from 'react';
import { Box, Flex, Spacer, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react"

import logo from '../assets/logo.png';


export default function NavBarComponent() {
    const variant = useBreakpointValue({ base: "base", sm: 'small', md: "medium", lg: 'large', xl: 'extra large' })

    return (
        <>
            {variant === 'small' || variant === 'base' ? (
                <Flex className="navbar" fontSize={'120%'} w='100%' h='60px' bg='#171717' >
                    <Box style={{marginTop:"-30px", marginLeft:15}}>
                        <Link to="/"><Image src={logo} /></Link>
                    </Box>
                </Flex>
            ) : (
                <Flex className="navbar" fontSize={'120%'} w='100%' h='60px' bg='#171717' >
                    <Box style={{marginTop:"-30px", marginLeft:15}}>
                        <Link to="/"><Image src={logo} /></Link>
                    </Box>
                    <Spacer />
                    <Box style={{marginTop:15}} >
                        <Link to="/search" >Pesquisa avançada</Link>
                        <Link to="/genres" >Gêneros</Link>
                    </Box>
                </Flex>
            )}
        </>

    );
}


