import * as axios from 'axios';

class SwapiService {
	constructor() {
		this._initialAPI = axios.create({
			baseURL: `https://swapi.co/api`
		});
	}

	async getResource(endpoint) {
		const res = await this._initialAPI.get(endpoint);
		return res.data;
	}

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return  res.results;
	}

	getPerson(id) {
		return this.getResource(`/people/${id}`);
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return  res.results;
	}

	getPlanet(id) {
		return this.getResource(`/planets/${id}`);
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return  res.results;
	}

	getStarship(id) {
		return this.getResource(`/starships/${id}`);
	}
}
