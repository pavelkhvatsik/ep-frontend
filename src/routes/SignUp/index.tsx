import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  InputAdornment,
  FormControlLabel,
  TextField,
  Checkbox,
} from '@material-ui/core';

import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import Person from '@material-ui/icons/Person';

import logo from '../../assets/img/acade.svg';

const SignUp = (): JSX.Element => {
  return (
    <Container className="login-container" maxWidth={false}>
      <Container className="login" maxWidth="xl">
        <Grid container className="full-height" alignItems="center">
          <Grid container justify="center">
            <Grid item className="login-content">
              <Typography className="login-title">
                <img src={logo} alt="acade-logo" width={280} />
              </Typography>

              <form>
                <TextField
                  fullWidth
                  className="login-text-field"
                  placeholder="Username"
                  name="username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  className="login-text-field"
                  placeholder="Email Address"
                  name="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  className="login-text-field"
                  placeholder="Password"
                  name="password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                />

                <Box display="flex" alignItems="center" mb={2.5}>
                  <Grid item xs>
                    <FormControlLabel
                      classes={{ root: 'login-remember' }}
                      control={<Checkbox value="remember" color="secondary" />}
                      label={
                        <>
                          <span>I have read and agree to the</span>{' '}
                          <Link to="./sign-up" className="login-terms">
                            Terms of Service
                          </Link>
                        </>
                      }
                    />
                  </Grid>
                </Box>

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="secondary"
                  classes={{
                    label: 'login-button-label',
                  }}
                >
                  Create Account
                </Button>
              </form>

              <Box className="login-create">
                <Typography>Already have an account?</Typography>
                <Link to="./sign-in">Sign in</Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default SignUp;
