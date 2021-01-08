import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import Accordion from '@material-ui/core/Accordion';
import purple from '@material-ui/core/colors/purple';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';

function Repo({
  repo: {
    repoName,
    description,
    avatar_url,
    starCount,
    forks,
    watchers,
    id,
    favourite,
  },
  toggleFavourite,
}) {
  return (
    <Accordion square>
      <AccordionSummary>
        <Avatar alt={repoName} src={avatar_url} />
        <div
          style={{
            paddingLeft: 5,
            paddingRight: 15,
          }}
        >
          <Typography variant="h6" color="initial">
            {repoName}
          </Typography>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Chip
              size="small"
              variant="outlined"
              icon={<StarIcon style={{ color: purple[500] }} />}
              label={starCount}
            />
            <Chip
              size="small"
              variant="outlined"
              icon={<MergeTypeIcon style={{ color: purple[500] }} />}
              label={forks}
            />
            <Chip
              size="small"
              variant="outlined"
              icon={<VisibilityIcon style={{ color: purple[500] }} />}
              label={watchers}
            />
          </div>
        </div>
        <IconButton aria-label="favourite" onClick={() => toggleFavourite(id)}>
          <FavoriteIcon
            style={{
              color: favourite ? red[800] : green[500],
            }}
          />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" color="initial">
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Repo;
