import React, { Fragment } from "react";
import PeliCollection from './Data-collection';
import Grid from '@material-ui/core/Grid';

const PopularData = ({ data, link_detail }) => (
    <Fragment>
    <div className="root">
      <Grid container spacing={3} justify="center" style={{ 'background-color': 'rgba(290, 43, 16, 0.7)'}}>
        { data.map(({ id,
                title,
                vote_average,
                release_date,
                poster_path }) => {
            
          return (
            <PeliCollection 
                key={id} 
                data_id={id}
                data_title={title}
                data_vote_average={vote_average}
                data_release_date={release_date}
                data_poster_path={poster_path} 
                data_link_detail={link_detail}/>
          );
        })}
      </Grid>
    </div>
  </Fragment>
);
   
PopularData.displayName = 'PopularData';

export default PopularData;