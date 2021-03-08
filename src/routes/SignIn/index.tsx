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

import logo from '../../assets/img/acade.svg';

const SignIn = (): JSX.Element => {
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
                      label="Remember me"
                    />
                  </Grid>
                  <Grid item>
                    <Link to="./" className="login-forgot">
                      Forgot password?
                    </Link>
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
                  Login
                </Button>
              </form>

              <Box className="login-create">
                <Typography>Don&apos;t have an account yet?</Typography>
                <Link to="./sign-up">Create Account</Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default SignIn;
