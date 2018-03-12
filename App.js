import react, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';

export default class extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        path="/"
                        Component={Home}
                    />
                </div>
            </BrowserRouter>
        )
    }
}