import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 0,
    paddingTop: '55%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  moment: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  updateIcon: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});