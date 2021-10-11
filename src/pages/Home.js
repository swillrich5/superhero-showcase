import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container space-background">
            <div className="jumbotron">
            <h2>Superhero Showcase</h2>
                <h2>Learning More about the Superhero API</h2>
                <p className="lead">Exploring the Superhero API (Application Programming Interface) to learn more about the API and APIs in general.  
                    I'm also using this as an exercise to learn more about React.  This is a work in progress that I plan to continue to add to over time.  However, 
                    it's far enough along to be useful.  I hope this is helpful and maybe a little fun!
                </p>
                <p className="lead mt-3 mb-5">My code repo for this app can be found in my <a  className="text-primary" href="https://github.com/swillrich5/superhero-showcase">GitHub</a>.  Also, here's a link to my <a className="text-primary" href="https://www.scottwillrich.com/">portfolio site</a>.</p>
            </div>
        </div>
    )
}

export default Home;
