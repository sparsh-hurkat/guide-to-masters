import { Grid, Typography, useTheme } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Contact = () => {
  const theme = useTheme();
  return (
    <Grid justifyContent="center" container sx={{ mt: 4, mb: 2 }}>
      <Typography
        sx={{
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Akshar, sans-serif',
          color: theme.palette.text.primary,
          mb: 2,
        }}
      >
        I am currently looking for other creative minds to work, grow and network. If you've got an exciting project you wish to work on together, get in touch!
      </Typography>
      <Grid container justifyContent="space-evenly" gap={3}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'unset', textDecoration: 'none' }}
          href={"https://github.com/sparsh-hurkat"}
        >
          <Grid container alignItems="flex-end" gap={1}>
            <FaGithub fontSize={32} />
            <Typography variant="button" color={theme.palette.success.main} fontFamily="Akshar, sans-serif">
              github.com/sparsh-hurkat
            </Typography>
          </Grid>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'unset', textDecoration: 'none' }}
          href={"https://www.linkedin.com/in/sparsh-hurkat/"}
        >
          <Grid container alignItems="flex-end" gap={1}>
            <FaLinkedin fontSize={32} />
            <Typography variant="button" color={theme.palette.success.main} fontFamily="Akshar, sans-serif">
              linkedin.com/in/sparsh-hurkat
            </Typography>
          </Grid>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'unset', textDecoration: 'none' }}
          href={"mailto:hurkatsparsh@gmail.com"}
        >
          <Grid container alignItems="flex-end" gap={1}>
            <IoMail fontSize={32} />
            <Typography variant="button" color={theme.palette.success.main} fontFamily="Akshar, sans-serif">
              hurkatsparsh@gmail.com
            </Typography>
          </Grid>
        </a>
      </Grid>
    </Grid>
  );
};

export default Contact; 