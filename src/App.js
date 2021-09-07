import {useState,React}  from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';




const Login = () => {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [IsDisabled, setIsDisabled] = useState();
  
  const handleChangeEmail=(e) => {
    let email_value = e.target.value
    setEmail(e.target.value)
    setIsDisabled(email_value && password? true:false)
    
  }
  const handleChangePassword=(e) =>{
    let pass = e.target.value
    setPassword(pass)
    setIsDisabled(email && pass? true:false)
  }
  return (
    
    <>
     
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          marginTop:'100px',
          justifyContent: 'center'
        }}        
      >
        <Container maxWidth="sm" >
          <Card variant="outlined" style={{padding:"75px", boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
              .email('Email is not valid')
              .max(255).required('Email is required'),
              password: Yup.string().max(255)
              .min(6, 'Password must be at least 6 charaters')
              .required('Password is required')
            })}
            onSubmit={() => {
              
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h4"
                    style={{textAlign:"center"}}
                  >
                    Login 
                  </Typography>
                 
                </Box>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email "
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChangeEmail}
                  onKeyUp={handleChange}
                  type="email"
                  id="email"
                  value={email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChangePassword}
                  onKeyUp={handleChange}
                  type="password"
                  id="password"
                  value={password}
                  variant="outlined"
                />
                <Grid container justify="center" style={{marginTop:"30px"}}>
              
                
                  <Button                  
                    color="primary"
                    disabled={!IsDisabled}
                    fullWidth
                    size="large"
                    type="submit"
                    id="button"
                    variant="contained"
                    title="Login"
                  >
                    Login
                  </Button>
                 
                </Grid>
             
              </form>
            )}
          </Formik>
          </Card>  
        </Container>
      </Box>
    </>
  );
};

export default Login;