import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { imageUrl } from "../../constants";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 235,
    minWidth: 230,
    margin: 12,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 171,
    textAlign: "center",
  },
}));

const DataCollection = ({
  data_id,
  data_title,
  data_vote_average,
  data_release_date,
  data_poster_path,
  data_link_detail,
}) => {
  const classes = useStyles();
  const youHandleClickFunc = () => {};

  return (

      <Card className={classes.root} onClick={() => youHandleClickFunc()}>
        <CardActionArea component={Link}
            to={`${data_link_detail}${data_id}`}>
          <CardContent>
            <Typography>
              <div className={classes.cover}>
                <img
                  className={classes.cover}
                  src={`${imageUrl}${data_poster_path} `}
                  alt="title"
                />
              </div>
            </Typography>
            <Typography gutterBottom variant="h6" component="span">
              {data_title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data_release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box position="relative" display="inline-flex">
            <CircularProgress
              className={
                data_vote_average > 7
                  ? "MuiCircularProgress-colorPrimary"
                  : "MuiCircularProgress-colorSecondary"
              }
              variant="static"
              value={data_vote_average * 10}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
              >{`${data_vote_average * 10}%`}</Typography>
            </Box>
          </Box>

          <Button
            size="small"
            color="primary"
            component={Link}
            to={`${data_link_detail}${data_id}`}
          >
            Ver Detalle
          </Button>
        </CardActions>
      </Card>

  );
};

DataCollection.displayName = "DataCollection";

DataCollection.propTypes = {
  data_id: PropTypes.number,
  data_title: PropTypes.string,
  data_vote_average: PropTypes.number,
  data_release_date: PropTypes.string,
  data_poster_path: PropTypes.string,
  data_link_detail: PropTypes.string,
};

export default DataCollection;
