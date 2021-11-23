import React from 'react';
import { Box, Flex, Center, Link } from "@chakra-ui/react";


export default function Footer() {
    return (
        <>
        <Box h='200'/>
            <Flex bg='#171717' color='white' h='10' align="center" justify='center'>
                <Center>

                    <Box>
                        <Link href="https://github.com/leonardomuniz" style={{ textAlign: 'center' }}>
                            github/leonardomuniz
                        </Link>
                    </Box>
                    &nbsp;&nbsp;and&nbsp;&nbsp;
                    <Box>
                        <Link href="https://www.themoviedb.org/" style={{ textAlign: 'center' }}>
                            sponsored by THEMOVIEDB©
                        </Link>
                    </Box>
                </Center>
            </Flex>
        </>
    )

}