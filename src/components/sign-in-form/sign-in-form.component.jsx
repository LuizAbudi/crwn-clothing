import { useState } from 'react';

import Button from '../button/button.component';

import FormInput from '../form-input/form-input.component';

import './sign-in-form.styles.scss';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formrFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formrFields;
  const navigator = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      navigator('/');
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('Usuário não encontrado');
          break;
        case 'auth/wrong-password':
          alert('Senha incorreta');
          break;
        default:
          console.error('Error creating user', error.message);
      }
    }
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
          required
        />
        <FormInput
          label="Senha"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Cadastrar</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
            iconType="logos:google-icon"
          >
            Entrar com o Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
