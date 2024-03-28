import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formrFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formrFields;
  const [messageRegister, setMessageRegister] = useState(false);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      createUserDocumentFromAuth(user, { displayName: name });
      resetFormFields();
      setMessageRegister(true);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('O email já está em uso');
      } else {
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
      <h2>Não possui conta?</h2>
      <span>Cadastre-se com seu email e senha</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nome"
          name="name"
          value={name}
          onChange={handleChange}
        />
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
        <FormInput
          label="Confirme sua senha"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Cadastrar</Button>
        {messageRegister ? (
          <div className="message-register-container">
            <span>
              Usuário cadastrado com sucesso! Faça login para acessar.
            </span>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default SignUpForm;
