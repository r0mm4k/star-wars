import * as axios from 'axios';

export default class SwapiService {
	constructor() {
		this._initialAPI = axios.create({
			baseURL: `https://swapi.dev/api`
		});
	}

	_imageBase = 'https://starwars-visualguide.com/assets/img';

	getResource = async (endpoint) => {
		const res = await this._initialAPI.get(endpoint);
		return res.data;
	};

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`);
		return res.results
			.map((person) => this._transformPerson(person))
			.slice(0, 5);
	};

	getPerson = async (id) => {
		const person = await this.getResource(`/people/${id}`);
		return this._transformPerson(person);
	};

	getAllPlanets = async () => {
		const res = await this.getResource(`/planets/`);
		return res.results
			.map((planet) => this._transformPlanet(planet))
			.slice(0, 5);
	};

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}`);
		return this._transformPlanet(planet);
	};

	getAllStarships = async () => {
		const res = await this.getResource(`/starships/`);
		return res.results
			.map((starship) => this._transformStarship(starship))
			.slice(0, 5);
	};

	getStarship = async (id) => {
		const starship = await this.getResource(`/starships/${id}`);
		return this._transformStarship(starship);
	};

	getPersonImage = ({id}) => {
		return `${this._imageBase}/characters/${id}.jpg`
	};

	getStarshipImage = ({id}) => {
		return `${this._imageBase}/starships/${id}.jpg`
	};

	getPlanetImage = ({id}) => {
		return `${this._imageBase}/planets/${id}.jpg`
	};

	_extractId = (item) => {
		const idRexExp = /\/([0-9]*)\/$/;
		return item.url.match(idRexExp)[1];
	};

	_transformPlanet = (planet) => {
		const id = this._extractId(planet);
		return {
			id,
			name: planet.name,
			img: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		};
	};

	_transformStarship = (starship) => {
		const id = this._extractId(starship);
		return {
			id: this._extractId(starship),
			name: starship.name,
			img: `https://starwars-visualguide.com/assets/img/starship/${id}.jpg`,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity
		}
	};

	_transformPerson = (person) => {
		const id = this._extractId(person);
		return {
			id: this._extractId(person),
			name: person.name,
			img: `https://starwars-visualguide.com/assets/img/person/${id}.jpg`,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		}
	};
}
