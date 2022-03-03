import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };

    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        };

        this.generateNewJokes = this.generateNewJokes.bind(this);
        this.resetVotes = this.resetVotes.bind(this);
        this.toggleLock = this.toggleLock.bind(this);
        this.vote = this.vote.bind(this);
    }

    /** at mount, get jokes */

    componentDidMount() {
        if (this.state.jokes.length < this.props.numJokesToGet) this.getJokes();
    }

    componentDidUpdate() {
        if (this.state.jokes.length < this.props.numJokesToGet) this.getJokes();
    }

    /**  retrieve jokes from API */

    async getJokes() {
        try {
            // load jokes one at a time, adding not-yet-seen jokes
            let jokes = this.state.jokes;
            let jokeVotes = JSON.parse(
                window.localStorage.getItem("jokeVotes") || "{}"
            );
            let seenJokes = new Set(jokes.map(j => j.id));

            while (jokes.length < this.props.numJokesToGet) {
                let res = await axios.get("https://icanhazdadjoke.com", {
                    headers: { Accept: "application/json" }
                });
                let { status, ...joke } = res.data;

                if (!seenJokes.has(joke.id)) {
                    seenJokes.add(joke.id);
                    jokeVotes[joke.id] = jokeVotes[joke.id] || 0;
                    jokes.push({ ...joke, votes: jokeVotes[joke.id], locked: false });
                } else {
                    console.log("duplicate found!");
                }
            }
            this.setState({ jokes });
            window.localStorage.setItem("jokeVotes", JSON.stringify(jokeVotes));
        } catch (e) {
            console.log(e);
        }
    }

}

export default JokeList;