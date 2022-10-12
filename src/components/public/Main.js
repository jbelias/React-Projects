import React, { Component } from 'react'
import { Cards } from './Cards';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { mascotas: [] };
    }

    componentDidMount() {

    }

    render() {
        console.log("Hola desde render");
        return (

            <main>

                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">API example</h1>
                            <p className="lead text-muted">This page has been developed consuming Rick & Morty API through REACT.Js ...</p>
                            <p>
                                <a href="https://rickandmortyapi.com/api" className="btn btn-primary my-2" target="blank">Visit the API</a>
                                <a href="https://google.com" className="btn btn-secondary my-2" target="self">Return to Google</a>
                            </p>
                        </div>
                    </div>
                </section>

                <Cards />
                    {/* mascotas={this.state.mascotas} */}
            </main>
        )
    }
}