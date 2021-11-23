import { Genre } from '../helpers/Interfaces';

interface GenreProfile extends Genre {
	color: string;
	text: string;
}

export const GenreNames: GenreProfile[] = [
	{ id: 28, name: 'Ação', color: '#de3023', text: '#fff' },
	{ id: 12, name: 'Aventura', color: '#e87b07', text: '#171717' },
	{ id: 16, name: 'Animação', color: '#42ecff', text: '#171717' },
	{ id: 35, name: 'Comédia', color: '#a1ff42', text: '#171717' },
	{ id: 80, name: 'Crime', color: '#5f09ba', text: '#fff' },
	{ id: 99, name: 'Documentário', color: '#996840', text: '#fff' },
	{ id: 18, name: 'Drama', color: '#F0D2A3', text: '#171717' },
	{ id: 10751, name: 'Família', color: '#E0DB52', text: '#171717' },
	{ id: 14, name: 'Fantasia', color: '#A16AE8', text: '#171717' },
	{ id: 36, name: 'História', color: '#9B9896', text: '#171717' },
	{ id: 27, name: 'Terror', color: '#52688F', text: '#fff' },
	{ id: 10402, name: 'Música', color: '#2FF3E0', text: '#171717' },
	{ id: 9648, name: 'Mistério', color: '#37BEB0', text: '#171717' },
	{ id: 10749, name: 'Romance', color: '#E1999F', text: '#171717' },
	{ id: 878, name: 'Ficção científica', color: '#959595', text: '#171717' },
	{ id: 10770, name: 'Cinema TV', color: '#E5DED8', text: '#171717' },
	{ id: 53, name: 'Thriller', color: '#2F453F', text: '#fff' },
	{ id: 10752, name: 'Guerra', color: '#513B41', text: '#fff' },
	{ id: 37, name: 'Faroeste', color: '#DC9750', text: '#171717' }
];
