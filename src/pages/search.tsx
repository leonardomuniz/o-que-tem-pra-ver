import React from 'react';
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    Container,
    Select,
    Checkbox,
    Stack,
    Button,
    Center
} from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form";

import NavBarComponent from '../components/NavBarComponent';
import { SearchForm } from '../helpers/Interfaces';



export default function Search() {
    const { register, handleSubmit } = useForm<SearchForm>();
    const onSubmit: SubmitHandler<SearchForm> = data => console.log(data);

    return (
        <div>
            <NavBarComponent />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <FormControl id="language">
                        <FormLabel>Idioma</FormLabel>
                        <Select placeholder="Selecione um idioma" {...register("language")}>
                            <option value="pt-BR">Português</option>
                            <option value="en-US">Inglês</option>
                            <option value="es-Es">Espanhol</option>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl id="Search-for">
                        <FormLabel>Buscar por</FormLabel>
                        <Select placeholder="busca" {...register("search_for")}>
                            <option value="popularity.desc">Mais popular para o menos popular</option>
                            <option value="popularity.asc">Menos popular para o mais popular</option>
                            <option value="release_date.desc">Filmes mais novos</option>
                            <option value="release_date.asc">Filmes mais antigos</option>
                            <option value="vote_average.desc">Melhores médias de votos</option>
                            <option value="vote_average.asc">Piores médias de voto</option>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl id="vote_average">
                        <FormLabel>Média de votos</FormLabel>
                        <Input placeholder="Basic usage" type="number" {...register("vote_average")} />
                    </FormControl>
                    <br />
                    <FormControl id="genre">
                        <FormLabel>Gênero</FormLabel>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="28%20" {...register("genre")}>Ação</Checkbox>
                            <Checkbox value="12%20" {...register("genre")}>Aventura</Checkbox>
                            <Checkbox value="16%20" {...register("genre")}>Animação</Checkbox>
                            <Checkbox value="35%20" {...register("genre")}>Comédia</Checkbox>
                        </Stack>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="80%20" {...register("genre")}>Crime</Checkbox>
                            <Checkbox value="99%20" {...register("genre")}>Documentário</Checkbox>
                            <Checkbox value="18%20" {...register("genre")}>Drama</Checkbox>
                            <Checkbox value="10751%20" {...register("genre")}>Família</Checkbox>
                        </Stack>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="14%20" {...register("genre")}>Fantasia</Checkbox>
                            <Checkbox value="36%20" {...register("genre")}>História</Checkbox>
                            <Checkbox value="27%20" {...register("genre")}>Terror</Checkbox>
                            <Checkbox value="10402%20" {...register("genre")}>Música</Checkbox>
                        </Stack>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="9648%20" {...register("genre")}>Mistério</Checkbox>
                            <Checkbox value="10749%20" {...register("genre")}>Romance</Checkbox>
                            <Checkbox value="878%20" {...register("genre")}>Ficção científica</Checkbox>
                            <Checkbox value="10770%20" {...register("genre")}>Cinema TV</Checkbox>
                        </Stack>
                        <Stack spacing={5} direction="row" wrap="wrap">
                            <Checkbox value="53%20" {...register("genre")}>Thriller</Checkbox>
                            <Checkbox value="10752%20" {...register("genre")}>Guerra</Checkbox>
                            <Checkbox value="37%20" {...register("genre")}>Faroeste</Checkbox>
                        </Stack>
                    </FormControl>
                    <br />
                    <Center>
                        <Button colorScheme="pink" type="submit">Pesquisar</Button>
                    </Center>
                </Container>
            </form>
        </div>
    );
}