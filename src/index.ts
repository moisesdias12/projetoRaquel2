// import * as _ from 'lodash';
import { MovieService } from './movie/movie.service';
import { TemplateService } from './template/templete.service';
import { Main } from './main';
import { ListService } from './list/list.service';

const movieService: MovieService = new MovieService();
const templateService: TemplateService = new TemplateService();
const listService: ListService = new ListService();
const main = new Main(movieService, templateService, listService);

// function component() {
// 	const element = document.createElement('div');
// 	element.innerHTML = 'Oi Raquel'
// 	return element;
// }
// document.body.appendChild(component());
// //  O FETCH PEGA UMA URL E UM METODO
main.init();
