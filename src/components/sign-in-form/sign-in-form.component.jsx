import { useState } from 'react';

import Button from '../button/button.component';

import FormInput from '../form-input/form-input.component';

import './sign-in-form.styles.scss';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formrFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formrFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetFormFields();
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formrFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Ja possui conta?</h2>
      <span>Entre com seu email e senha</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Senha"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Cadastrar</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Entrar com o Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
