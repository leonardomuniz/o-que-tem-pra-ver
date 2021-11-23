export interface Genre {
    id: number;
    name: string;
}

interface ProductionCompanie extends Genre {
    logo_path: string;
    origin_country: string
}

interface ProductionCountries extends Genre {
    logo_path: string;
    origin_country: string;
}

interface SpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}


export interface Movies {
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
	vote_count: number;
}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection?: {
		id: number;
		name: string;
		poster_path: string;
		backdrop_path: string;
	};
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanie[];
    production_countries: ProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages:  SpokenLanguages[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export interface SearchForm {
    language: string;
    search_for: string;
    year: number;
    genre: string[];
}