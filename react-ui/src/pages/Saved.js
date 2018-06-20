import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Saved extends Component {
	state = {
		search: "",
		breeds: [],
		results: [],
		error: ""
	};


	render() {
		return (
			<h1 style={{ color: 'green' }}>oh hai</h1>
		);
	}
}

export default Saved;