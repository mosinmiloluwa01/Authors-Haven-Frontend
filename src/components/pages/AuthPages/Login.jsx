import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from '<templates>/PageLayout/PageLayout';
import AuthForm from '<organisms>/AuthForm/AuthForm';
import formHandler from '<helpers>/formHandler';
import { loginData, loginRules } from './loginItems';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import imageUrl from '<image>/home.png';
import { signin } from './navItems';
import headerMapper from '<helpers>/headerMapper';

const navItems = headerMapper(signin);

const Login = (props) => {
  const handleSubmit = async (values) => {
    const data = {
      method: 'post',
      path: 'login',
      redirectTo: '/dashboard',
    };
    const res = await formHandler(values, props.history, data);
    res && sessionStorage.setItem('cookies', res.data['access-token']);
  };

  return (
    <PageLayout navItems={navItems}>
      <FlexContainer>
        <FlexContainer flexDirection='row' height='80%'>
          <FlexContainer>
            <Image
              imageUrl={imageUrl}
              boxShadow='none'
              altText='welcome'
            />
          </FlexContainer>
          <FlexContainer padding='zero'>
            <AuthForm
              title="Sign In"
              dividerText="Or Sign In With"
              rules={loginRules}
              inputData={loginData}
              callback={handleSubmit}
            />
            <ToastContainer />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </PageLayout>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
};


export default Login;
