import React from "react";
import PELIS_DATA from './home.data.js';
import PeliCollection from '../../components/Peli-collections/peli-collection';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: PELIS_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (    
            <div className="root">
                <Grid container spacing={3} justify="center">
                    {
                        collections
                            .map(({ popularity, ...otherItemProps }) => (
                              <PeliCollection key={popularity} {...otherItemProps} />
                            ))
                    } 
                </Grid>
            </div> 
        );
    }
};

Home.displayName = 'Home';

export default Home;