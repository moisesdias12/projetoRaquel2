import { MovieService } from './movie/movie.service';
import { TemplateService } from './template/templete.service';
import { ListService } from './list/list.service';
import { listInterface } from './list/list.interface';

export class Main {
	constructor(
		private movieService: MovieService,
		private templateService: TemplateService,
		private listService: ListService
		
	) {}

	public init() {
		this.getMoviesNowPlaying();
	}

	public getMoviesNowPlaying () {
		this.listService.getLatest ()
			.then(response => {
				response.json()
					.then((nowPlayingMovies: listInterface) => {
						console.log(nowPlayingMovies);
						const element = document.createElement('div');
						element.innerHTML = this.templateService.buildNowPlayingMovieList(nowPlayingMovies);
						document.body.appendChild(element);





						let btn = document.getElementById("movieList");

						// POR QUE N FUNCIONA O EVENT TARGET ID SE EU COLOCAR O O E COMO EVENT?????

						btn.addEventListener("click", (e: any) => {
							// console.log(e.target.id)
							this.movieService.getMovie(e.target.id)
								.then(response => {
									response.json()
										.then((movies: any) => {
											console.log(movies)
											const element = document.createElement('div');
											element.innerHTML = this.templateService.buildMovieDetailsTemplate(movies);
											document.body.appendChild(element);
										})
								})
						});
					})
			})
	}



	public getMovie() {
		this.movieService.getMovie(181812)
		.then(response => {
			response.json().then((movie: any) => {
				console.log(movie);
				const element = document.createElement('div');
				element.innerHTML = this.templateService.buildMovieTemplate(movie);
				document.body.appendChild(element);
			})
		});
	}
}