import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {
    Alert,
    AlertIcon,
    FormControl,
    FormLabel,
    Input,
    Container,
    Select,
    Checkbox,
    Stack,
    Button,
    Center,
    Box
} from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form";
import { Search2Icon } from '@chakra-ui/icons';

import NavBarComponent from '../components/NavBarComponent';
import Footer from '../components/Footer';
import { SearchForm } from '../helpers/Interfaces';



export default function Search() {
    const { register, handleSubmit } = useForm<SearchForm>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<SearchForm> = data => SearchMovieList(data);
    const [alert, setAlert] = useState<any>('');



    function SearchMovieList(query: SearchForm): void {
        if (query.genre.toString() !== 'false') {
            setAlert('');
            const { genre, language, search_for, year } = query;
            const haveYear = `&year=${year}`;
            let genresList = genre.toString();
            genresList = genresList.replaceAll(',', '%20');

            const queryString = `${language}${search_for}&with_genres=${genresList}${haveYear}`;

            navigate(`result/${queryString}`);
        } else {
            setAlert(<Alert status="warning" borderRadius="3xl"><AlertIcon />Por favor informe uma busca válida !</Alert>)
        }
    }

    return (
        <Box  bg={'#171717'} color="white">
            <NavBarComponent />
            <Box h={'50px'} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    {alert}
                    <br />
                    <FormControl id="language">
                        <FormLabel>Idioma</FormLabel>
                        <Select  color="#171717" placeholder="Selecione um idioma" {...register("language")}>
                            <option value="&language=pt-BR">Português</option>
                            <option value="&language=en-US">Inglês</option>
                            <option value="&language=es-ES">Espanhol</option>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl id="Search-for">
                        <FormLabel>Buscar por</FormLabel>
                        <Select  color="#171717"  placeholder="busca" {...register("search_for")}>
                            <option value="&sort_by=popularity.desc">Mais popular para o menos popular</option>
                            <option value="&sort_by=popularity.asc">Menos popular para o mais popular</option>
                            <option value="&sort_by=release_date.desc">Filmes mais novos</option>
                            <option value="&sort_by=release_date.asc">Filmes mais antigos</option>
                            <option value="&sort_by=vote_average.desc">Melhores médias de votos</option>
                            <option value="&sort_by=vote_average.asc">Piores médias de voto</option>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl id="vote_average">
                        <FormLabel>Ano de lançamento</FormLabel>
                        <Input placeholder="Basic usage" type="number" {...register("year")} />
                    </FormControl>
                    <br />
                    <FormControl id="genre">
                        <FormLabel>Gênero</FormLabel>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="28" {...register("genre")}>Ação</Checkbox>
                            <Checkbox value="12" {...register("genre")}>Aventura</Checkbox>
                            <Checkbox value="16" {...register("genre")}>Animação</Checkbox>
                            <Checkbox value="35" {...register("genre")}>Comédia</Checkbox>
                        </Stack>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="80" {...register("genre")}>Crime</Checkbox>
                            <Checkbox value="99" {...register("genre")}>Documentário</Checkbox>
                            <Checkbox value="18" {...register("genre")}>Drama</Checkbox>
                            <Checkbox value="10751" {...register("genre")}>Família</Checkbox>
                        </Stack>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="14" {...register("genre")}>Fantasia</Checkbox>
                            <Checkbox value="36" {...register("genre")}>História</Checkbox>
                            <Checkbox value="27" {...register("genre")}>Terror</Checkbox>
                            <Checkbox value="10402" {...register("genre")}>Música</Checkbox>
                        </Stack>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="9648" {...register("genre")}>Mistério</Checkbox>
                            <Checkbox value="10749" {...register("genre")}>Romance</Checkbox>
                            <Checkbox value="878" {...register("genre")}>Ficção científica</Checkbox>
                            <Checkbox value="10770" {...register("genre")}>Cinema TV</Checkbox>
                        </Stack>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="53" {...register("genre")}>Thriller</Checkbox>
                            <Checkbox value="10752" {...register("genre")}>Guerra</Checkbox>
                            <Checkbox value="37" {...register("genre")}>Faroeste</Checkbox>
                        </Stack>
                    </FormControl>
                    <br />
                    <Center>
                        <Button leftIcon={<Search2Icon />} colorScheme="teal" type="submit">Pesquisar</Button>
                    </Center>
                </Container>
            </form>
            <Footer />
        </Box>
    );
}