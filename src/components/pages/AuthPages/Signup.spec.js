import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '<src>/helpers/testUtils';
import Signup from './Signup';
import formHandler from '<helpers>/formHandler';

jest.mock('<helpers>/formHandler');


afterEach(cleanup);

const setup = () => {
  const utils = render(
    <MemoryRouter>
      <Signup history={{}}/>
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('Signup', () => {
  it('should render Signup page', () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });

  it('should render with sign up text', () => {
    const { getByText } = setup();

    expect(getByText('Sign Up')).toBeTruthy();
  });

  it('should call handleSubmit once', () => {
    const { getByText, getByTestId } = setup();

    fireEvent.change(getByTestId('firstName'), { target: { value: 'Tosin' } });
    fireEvent.change(
      getByTestId('lastName'), { target: { value: 'Onifade' } },
    );
    fireEvent.change(getByTestId('email'), { target: { value: 'abc@de.com' } });
    fireEvent.change(
      getByTestId('password'), { target: { value: 'eazyBee8#' } },
    );
    fireEvent.click(getByText('Submit'));

    expect(formHandler).toHaveBeenCalledTimes(1);
  });
});
