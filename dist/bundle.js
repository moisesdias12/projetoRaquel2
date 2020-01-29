/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/api/api-config.constants.ts":
/*!**********************************************!*\
  !*** ./src/core/api/api-config.constants.ts ***!
  \**********************************************/
/*! exports provided: apiConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiConfig", function() { return apiConfig; });
var apiConfig = {
    LIST: {},
    MOVIE: {
        GET: function (params) { return "https://api.themoviedb.org/3/movie/" + params.movieId + "?api_key=" + params.apiKey + "&language=en-US"; },
        GET_ALL: function (params) { return "https://api.themoviedb.org/3/list/" + params.listId + "?api_key=" + params.apiKey + "&language=en-US"; },
    },
    SERIE: {
        GET: function (params) { return "https://api.themoviedb.org/3/tv/" + params.serieId + "?api_key=" + params.apiKey + "&language=en-US"; },
        GET_ALL: function (params) { return "https://api.themoviedb.org/3/list/" + params.listId + "?api_key=" + params.apiKey + "&language=en-US"; },
    }
};


/***/ }),

/***/ "./src/core/app-config.constants.ts":
/*!******************************************!*\
  !*** ./src/core/app-config.constants.ts ***!
  \******************************************/
/*! exports provided: APP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony import */ var _api_api_config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api-config.constants */ "./src/core/api/api-config.constants.ts");

var APP_CONFIG = {
    API_KEY: '5d8bf2990a40ee592eee0bd672676d61',
    MOVIE_LIST_ID: '111862',
    SERIE_LIST_ID: '111866',
    API: _api_api_config_constants__WEBPACK_IMPORTED_MODULE_0__["apiConfig"]
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie/movie.service */ "./src/movie/movie.service.ts");
/* harmony import */ var _template_templete_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/templete.service */ "./src/template/templete.service.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony import */ var _list_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.service */ "./src/list/list.service.ts");
// import * as _ from 'lodash';




var movieService = new _movie_movie_service__WEBPACK_IMPORTED_MODULE_0__["MovieService"]();
var templateService = new _template_templete_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"]();
var listService = new _list_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]();
var main = new _main__WEBPACK_IMPORTED_MODULE_2__["Main"](movieService, templateService, listService);
// function component() {
// 	const element = document.createElement('div');
// 	element.innerHTML = 'Oi Raquel'
// 	return element;
// }
// document.body.appendChild(component());
// //  O FETCH PEGA UMA URL E UM METODO
main.init();


/***/ }),

/***/ "./src/list/list.service.ts":
/*!**********************************!*\
  !*** ./src/list/list.service.ts ***!
  \**********************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _core_app_config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/app-config.constants */ "./src/core/app-config.constants.ts");

var ListService = /** @class */ (function () {
    function ListService() {
        this._appConfig = _core_app_config_constants__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG"];
    }
    ListService.prototype.getLatest = function () {
        return fetch(this._buildUrl(), { method: "GET" });
    };
    ListService.prototype._buildUrl = function () {
        return "https://api.themoviedb.org/3/movie/now_playing?api_key=" + this._appConfig.API_KEY;
    };
    return ListService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
var Main = /** @class */ (function () {
    function Main(movieService, templateService, listService) {
        this.movieService = movieService;
        this.templateService = templateService;
        this.listService = listService;
    }
    Main.prototype.init = function () {
        this.getMoviesNowPlaying();
    };
    Main.prototype.getMoviesNowPlaying = function () {
        var _this = this;
        this.listService.getLatest()
            .then(function (response) {
            response.json()
                .then(function (nowPlayingMovies) {
                console.log(nowPlayingMovies);
                var element = document.createElement('div');
                element.innerHTML = _this.templateService.buildNowPlayingMovieList(nowPlayingMovies);
                document.body.appendChild(element);
                var btn = document.getElementById("movieList");
                // POR QUE N FUNCIONA O EVENT TARGET ID SE EU COLOCAR O O E COMO EVENT?????
                btn.addEventListener("click", function (e) {
                    // console.log(e.target.id)
                    _this.movieService.getMovie(e.target.id)
                        .then(function (response) {
                        response.json()
                            .then(function (movies) {
                            console.log(movies);
                            var element = document.createElement('nav');
                            element.innerHTML = _this.templateService.buildMovieDetailsTemplate(movies);
                            document.body.appendChild(element);
                        });
                    });
                });
            });
        });
    };
    Main.prototype.getMovie = function () {
        var _this = this;
        this.movieService.getMovie(181812)
            .then(function (response) {
            response.json().then(function (movie) {
                console.log(movie);
                var element = document.createElement('div');
                element.innerHTML = _this.templateService.buildMovieTemplate(movie);
                document.body.appendChild(element);
            });
        });
    };
    return Main;
}());



/***/ }),

/***/ "./src/movie/movie.service.ts":
/*!************************************!*\
  !*** ./src/movie/movie.service.ts ***!
  \************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _core_app_config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/app-config.constants */ "./src/core/app-config.constants.ts");

var MovieService = /** @class */ (function () {
    function MovieService() {
        this._appConfig = _core_app_config_constants__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG"];
    }
    MovieService.prototype.getMovie = function (id) {
        return fetch(this._buildUrl(id), { method: "GET" });
    };
    MovieService.prototype._buildUrl = function (movieId) {
        return "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + this._appConfig.API_KEY;
    };
    return MovieService;
}());



/***/ }),

/***/ "./src/template/templete.service.ts":
/*!******************************************!*\
  !*** ./src/template/templete.service.ts ***!
  \******************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
var TemplateService = /** @class */ (function () {
    function TemplateService() {
    }
    TemplateService.prototype.buildNowPlayingMovieList = function (nowPlayingMovieList) {
        var movieList = '<ul id="movieList">';
        nowPlayingMovieList.results.forEach(function (movie) {
            movieList += "<li><button id=\"" + movie.id + "\">" + movie.title + "</button></li>";
        });
        movieList += '</ul>';
        return movieList;
    };
    TemplateService.prototype.buildMovieTemplate = function (movie) {
        return "\n\t\t\t<h1>" + movie.title + "</h1>\n\t\t\t<ul>\n\t\t\t\t<li>" + movie.overview + "</li>\n\t\t\t</ul>\n\t\t\t<div>\n\t\t\t\t<img src=\"" + this.buildImage(movie) + "\"/>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\tGenres: " + this.buildGenres(movie) + "\n\t\t\t</div>\n\t\t";
    };
    TemplateService.prototype.buildMovieDetailsTemplate = function (movie) {
        return "\n\t\t<ul>\n\t\t\t<li>titulo: " + movie.title + "</li>\n\t\t\t<li>release date: " + movie.release_date + "</li>\n\t\t\t<li>" + movie.id + "</li>\n\t\t</ul>\n\t\t";
    };
    TemplateService.prototype.buildGenres = function (movie) {
        var genres = '';
        movie.genres.forEach(function (genre) {
            genres += " " + genre.name + " ";
        });
        return genres;
    };
    TemplateService.prototype.buildImage = function (movie) {
        var movieBaseUrl = 'https://image.tmdb.org/t/p/w500';
        return "" + movieBaseUrl + movie.poster_path;
    };
    return TemplateService;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXBpL2FwaS1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FwcC1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC9saXN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmllL21vdmllLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL3RlbXBsZXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQU8sSUFBTSxTQUFTLEdBQWtCO0lBQ3ZDLElBQUksRUFB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QyxRQUFRLDREQUdSLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHlEQUd4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyx5QkFFbEM7SUFDRixDQUFDO0lBRU0sbURBQXlCLEdBQWhDLFVBQWlDLEtBQVU7UUFDMUMsT0FBTyxtQ0FFUSxLQUFLLENBQUMsS0FBSyx1Q0FDTCxLQUFLLENBQUMsWUFBWSx5QkFDaEMsS0FBSyxDQUFDLEVBQUUsMkJBRWQ7SUFDRixDQUFDO0lBRU0scUNBQVcsR0FBbEIsVUFBbUIsS0FBVTtRQUM1QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFVO1lBQy9CLE1BQU0sSUFBSSxNQUFJLEtBQUssQ0FBQyxJQUFJLE1BQUcsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVNLG9DQUFVLEdBQWpCLFVBQWtCLEtBQVU7UUFDM0IsSUFBTSxZQUFZLEdBQUcsaUNBQWlDLENBQUM7UUFDdkQsT0FBTyxLQUFHLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBYSxDQUFDO0lBQzlDLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBBcHBBUElDb25maWcgfSBmcm9tICcuL2FwcC1hcGktcGFyYW1zLm1vZGVsJztcbmltcG9ydCB7IEFwcEFQSVJlc291cmNlIH0gZnJvbSAnLi9hcHAtYXBpLXJlc291cmNlLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGFwaUNvbmZpZzogQXBwQVBJQ29uZmlnICA9IHtcblx0TElTVDogPEFwcEFQSVJlc291cmNlPiB7fSxcbiAgICBNT1ZJRTogPEFwcEFQSVJlc291cmNlPiB7XG4gICAgICAgIEdFVDogKHBhcmFtczogYW55KSA9PiBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke3BhcmFtcy5tb3ZpZUlkfT9hcGlfa2V5PSR7cGFyYW1zLmFwaUtleX0mbGFuZ3VhZ2U9ZW4tVVNgLFxuICAgICAgICBHRVRfQUxMOiAocGFyYW1zOiBhbnkpID0+IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2xpc3QvJHtwYXJhbXMubGlzdElkfT9hcGlfa2V5PSR7cGFyYW1zLmFwaUtleX0mbGFuZ3VhZ2U9ZW4tVVNgLFxuICAgIH0sXG4gICAgU0VSSUU6IDxBcHBBUElSZXNvdXJjZT4ge1xuICAgICAgICBHRVQ6IChwYXJhbXM6IGFueSkgPT4gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvJHtwYXJhbXMuc2VyaWVJZH0/YXBpX2tleT0ke3BhcmFtcy5hcGlLZXl9Jmxhbmd1YWdlPWVuLVVTYCxcbiAgICAgICAgR0VUX0FMTDogKHBhcmFtczogYW55KSA9PiBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9saXN0LyR7cGFyYW1zLmxpc3RJZH0/YXBpX2tleT0ke3BhcmFtcy5hcGlLZXl9Jmxhbmd1YWdlPWVuLVVTYCxcbiAgICB9XG59OyIsImltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4vYXBwLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgYXBpQ29uZmlnIH0gZnJvbSAnLi9hcGkvYXBpLWNvbmZpZy5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgQVBQX0NPTkZJRzogQXBwQ29uZmlnID0ge1xuICAgIEFQSV9LRVk6ICc1ZDhiZjI5OTBhNDBlZTU5MmVlZTBiZDY3MjY3NmQ2MScsXG4gICAgTU9WSUVfTElTVF9JRDogJzExMTg2MicsXG4gICAgU0VSSUVfTElTVF9JRDogJzExMTg2NicsXG4gICAgQVBJOiBhcGlDb25maWdcbn07XG4iLCIvLyBpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBNb3ZpZVNlcnZpY2UgfSBmcm9tICcuL21vdmllL21vdmllLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90ZW1wbGF0ZS90ZW1wbGV0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW4gfSBmcm9tICcuL21haW4nO1xuaW1wb3J0IHsgTGlzdFNlcnZpY2UgfSBmcm9tICcuL2xpc3QvbGlzdC5zZXJ2aWNlJztcblxuY29uc3QgbW92aWVTZXJ2aWNlOiBNb3ZpZVNlcnZpY2UgPSBuZXcgTW92aWVTZXJ2aWNlKCk7XG5jb25zdCB0ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSA9IG5ldyBUZW1wbGF0ZVNlcnZpY2UoKTtcbmNvbnN0IGxpc3RTZXJ2aWNlOiBMaXN0U2VydmljZSA9IG5ldyBMaXN0U2VydmljZSgpO1xuY29uc3QgbWFpbiA9IG5ldyBNYWluKG1vdmllU2VydmljZSwgdGVtcGxhdGVTZXJ2aWNlLCBsaXN0U2VydmljZSk7XG5cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbi8vIFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gXHRlbGVtZW50LmlubmVySFRNTCA9ICdPaSBSYXF1ZWwnXG4vLyBcdHJldHVybiBlbGVtZW50O1xuLy8gfVxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4vLyAvLyAgTyBGRVRDSCBQRUdBIFVNQSBVUkwgRSBVTSBNRVRPRE9cbm1haW4uaW5pdCgpO1xuIiwiaW1wb3J0IHsgQVBQX0NPTkZJRyB9IGZyb20gJy4vLi4vY29yZS9hcHAtY29uZmlnLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL2NvcmUvYXBwLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2FwcENvbmZpZzogQXBwQ29uZmlnO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYXBwQ29uZmlnID0gQVBQX0NPTkZJR1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGF0ZXN0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2J1aWxkVXJsKCksIHttZXRob2Q6IFwiR0VUXCJ9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfYnVpbGRVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT0ke3RoaXMuX2FwcENvbmZpZy5BUElfS0VZfWA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNb3ZpZVNlcnZpY2UgfSBmcm9tICcuL21vdmllL21vdmllLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90ZW1wbGF0ZS90ZW1wbGV0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RTZXJ2aWNlIH0gZnJvbSAnLi9saXN0L2xpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBsaXN0SW50ZXJmYWNlIH0gZnJvbSAnLi9saXN0L2xpc3QuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIE1haW4ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIG1vdmllU2VydmljZTogTW92aWVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBUZW1wbGF0ZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBsaXN0U2VydmljZTogTGlzdFNlcnZpY2Vcblx0XHRcblx0KSB7fVxuXG5cdHB1YmxpYyBpbml0KCkge1xuXHRcdHRoaXMuZ2V0TW92aWVzTm93UGxheWluZygpO1xuXHR9XG5cblx0cHVibGljIGdldE1vdmllc05vd1BsYXlpbmcgKCkge1xuXHRcdHRoaXMubGlzdFNlcnZpY2UuZ2V0TGF0ZXN0ICgpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0XHRcdC50aGVuKChub3dQbGF5aW5nTW92aWVzOiBsaXN0SW50ZXJmYWNlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhub3dQbGF5aW5nTW92aWVzKTtcblx0XHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYnVpbGROb3dQbGF5aW5nTW92aWVMaXN0KG5vd1BsYXlpbmdNb3ZpZXMpO1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuXG5cblxuXG5cdFx0XHRcdFx0XHRsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZpZUxpc3RcIik7XG5cblx0XHRcdFx0XHRcdC8vIFBPUiBRVUUgTiBGVU5DSU9OQSBPIEVWRU5UIFRBUkdFVCBJRCBTRSBFVSBDT0xPQ0FSIE8gTyBFIENPTU8gRVZFTlQ/Pz8/P1xuXG5cdFx0XHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZS50YXJnZXQuaWQpXG5cdFx0XHRcdFx0XHRcdHRoaXMubW92aWVTZXJ2aWNlLmdldE1vdmllKGUudGFyZ2V0LmlkKVxuXHRcdFx0XHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQudGhlbigobW92aWVzOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhtb3ZpZXMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYnVpbGRNb3ZpZURldGFpbHNUZW1wbGF0ZShtb3ZpZXMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHR9XG5cblxuXG5cdHB1YmxpYyBnZXRNb3ZpZSgpIHtcblx0XHR0aGlzLm1vdmllU2VydmljZS5nZXRNb3ZpZSgxODE4MTIpXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0cmVzcG9uc2UuanNvbigpLnRoZW4oKG1vdmllOiBhbnkpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cobW92aWUpO1xuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYnVpbGRNb3ZpZVRlbXBsYXRlKG1vdmllKTtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBBUFBfQ09ORklHIH0gZnJvbSAnLi8uLi9jb3JlL2FwcC1jb25maWcuY29uc3RhbnRzJztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL2NvcmUvYXBwLWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTW92aWVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIF9hcHBDb25maWc6IEFwcENvbmZpZztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl9hcHBDb25maWcgPSBBUFBfQ09ORklHO1xuXHR9XG5cblx0cHVibGljIGdldE1vdmllKGlkOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybiBmZXRjaCh0aGlzLl9idWlsZFVybChpZCksIHsgbWV0aG9kOiBcIkdFVFwiIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBfYnVpbGRVcmwobW92aWVJZDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHttb3ZpZUlkfT9hcGlfa2V5PSR7dGhpcy5fYXBwQ29uZmlnLkFQSV9LRVl9YDtcblx0fVxufSIsImltcG9ydCB7IGxpc3RJbnRlcmZhY2UgfSBmcm9tIFwiLi4vbGlzdC9saXN0LmludGVyZmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdHB1YmxpYyBidWlsZE5vd1BsYXlpbmdNb3ZpZUxpc3Qobm93UGxheWluZ01vdmllTGlzdDogbGlzdEludGVyZmFjZSk6IHN0cmluZyB7XG5cdFx0bGV0IG1vdmllTGlzdCA9ICc8dWwgaWQ9XCJtb3ZpZUxpc3RcIj4nO1xuXG5cdFx0bm93UGxheWluZ01vdmllTGlzdC5yZXN1bHRzLmZvckVhY2goKG1vdmllOiBhbnkpID0+IHtcblx0XHRcdG1vdmllTGlzdCArPSBgPGxpPjxidXR0b24gaWQ9XCIke21vdmllLmlkfVwiPiR7bW92aWUudGl0bGV9PC9idXR0b24+PC9saT5gO1xuXHRcdH0pO1xuXHRcdG1vdmllTGlzdCArPSAnPC91bD4nXG5cdFx0cmV0dXJuIG1vdmllTGlzdDtcblxuXHR9XG5cblx0cHVibGljIGJ1aWxkTW92aWVUZW1wbGF0ZShtb3ZpZTogYW55KTogYW55IHtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGgxPiR7bW92aWUudGl0bGV9PC9oMT5cblx0XHRcdDx1bD5cblx0XHRcdFx0PGxpPiR7bW92aWUub3ZlcnZpZXd9PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy5idWlsZEltYWdlKG1vdmllKX1cIi8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdEdlbnJlczogJHt0aGlzLmJ1aWxkR2VucmVzKG1vdmllKX1cblx0XHRcdDwvZGl2PlxuXHRcdGBcblx0fVxuXG5cdHB1YmxpYyBidWlsZE1vdmllRGV0YWlsc1RlbXBsYXRlKG1vdmllOiBhbnkpOiBhbnkge1xuXHRcdHJldHVybiBgXG5cdFx0PHVsPlxuXHRcdFx0PGxpPnRpdHVsbzogJHttb3ZpZS50aXRsZX08L2xpPlxuXHRcdFx0PGxpPnJlbGVhc2UgZGF0ZTogJHttb3ZpZS5yZWxlYXNlX2RhdGV9PC9saT5cblx0XHRcdDxsaT4ke21vdmllLmlkfTwvbGk+XG5cdFx0PC91bD5cblx0XHRgXG5cdH1cblxuXHRwdWJsaWMgYnVpbGRHZW5yZXMobW92aWU6IGFueSk6IGFueSB7XG5cdFx0bGV0IGdlbnJlcyA9ICcnO1xuXHRcdG1vdmllLmdlbnJlcy5mb3JFYWNoKChnZW5yZTogYW55KSA9PiB7XG5cdFx0XHRnZW5yZXMgKz0gYCAke2dlbnJlLm5hbWV9IGA7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGdlbnJlcztcblx0fVxuXG5cdHB1YmxpYyBidWlsZEltYWdlKG1vdmllOiBhbnkpOiBhbnkge1xuXHRcdGNvbnN0IG1vdmllQmFzZVVybCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJztcblx0XHRyZXR1cm4gYCR7bW92aWVCYXNlVXJsfSR7bW92aWUucG9zdGVyX3BhdGh9YDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=