import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from '<templates>/PageLayout/PageLayout';
import AuthForm from '<organisms>/AuthForm/AuthForm';
import { SignUpData, SignUpRules } from './signupItems';
import FlexContainer from
  '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import imageUrl from '<image>/home.png';
import { signup } from './navItems';
import formHandler from '<helpers>/formHandler';
import headerMapper from '<helpers>/headerMapper';

const navItems = headerMapper(signup);

const SignUp = (props) => {
  const handleSubmit = (values) => {
    const data = {
      method: 'post',
      path: 'signup',
      redirectTo: '/dashboard',
    };

    formHandler(values, props.history, data);
  };

  return (
    <PageLayout navItems={navItems} >
      <FlexContainer paddingTop='zero'>
        <FlexContainer flexDirection='row' height='80%'>
          <FlexContainer>
            <Image
              imageUrl={imageUrl}
              boxShadow='none'
              altText='welcome'
            />
          </FlexContainer>
          <FlexContainer padding='zero' >
            <AuthForm
              title="Sign Up"
              dividerText="Or Sign Up With"
              rules={SignUpRules}
              inputData={SignUpData}
              callback={handleSubmit}
            />
            <ToastContainer />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </PageLayout>
  );
};

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignUp;
