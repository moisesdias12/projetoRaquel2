import { listInterface } from "../list/list.interface";

export class TemplateService {
	constructor() {}

	public buildNowPlayingMovieList(nowPlayingMovieList: listInterface): string {
		let movieList = '<ul id="movieList">';

		nowPlayingMovieList.results.forEach((movie: any) => {
			movieList += `<li><button id="${movie.id}">${movie.title}</button></li>`;
		});
		movieList += '</ul>'
		return movieList;

	}

	public buildMovieTemplate(movie: any): any {
		return `
			<h1>${movie.title}</h1>
			<ul>
				<li>${movie.overview}</li>
			</ul>
			<div>
				<img src="${this.buildImage(movie)}"/>
			</div>
			<div>
				Genres: ${this.buildGenres(movie)}
			</div>
		`
	}

	public buildMovieDetailsTemplate(movie: any): any {
		return `
		<ul>
			<li>titulo: ${movie.title}</li>
			<li>release date: ${movie.release_date}</li>
			<li>${movie.id}</li>
		</ul>
		`
	}

	public buildGenres(movie: any): any {
		let genres = '';
		movie.genres.forEach((genre: any) => {
			genres += ` ${genre.name} `;
		});
		return genres;
	}

	public buildImage(movie: any): any {
		const movieBaseUrl = 'https://image.tmdb.org/t/p/w500';
		return `${movieBaseUrl}${movie.poster_path}`;
	}
}