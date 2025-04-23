import "../Cadastro/Cadastro.css";
import img1 from '../../assets/cachorroCadastro.jpg';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cadastro() {
  const [usuario, setUsuario] = useState({
    CPF: '',
    Nome: '',
    Email: '',
    Telefone: '',
    Senha: '',
    Logradouro: {
      CEP: '',
      NomeLog: '',
      Numero: '',
    },
    Cidade: {
      Nome_Cidade: ''
    },
    Estado: {
      Nome_Estado: ''
    }
  });

  const[confsenha, setConfSenha]= useState('');

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleLogradouroInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      Logradouro: {
        ...prevUsuario.Logradouro,
        [name]: value,
      },
    }));
  };

  const handleCidadeInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      Cidade: {
        ...prevUsuario.Cidade,
        [name]: value,
      },
    }));
  };

  const handleEstadoInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      Estado: {
        ...prevUsuario.Estado,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    try {

      if (!usuario.Nome) {
        alert("Preencha o campo nome");
        return;
      }
      if (!usuario.CPF) {
        alert("Preencha o campo CPF");
        return;
      }
      if (!usuario.Email) {
        alert("Preencha o campo email");
        return;
      }
      if (!usuario.Telefone) {
        alert("Preencha o campo telefone");
        return;
      }
      if (!usuario.Senha) {
        alert("Preencha o campo senha");
        return;
      }
      if (usuario.Senha!= confsenha) {
        alert("Senhas diferentes! Por favor verificar");
        return;
      }
      if (!usuario.Logradouro.CEP) {
        alert("Preencha o campo CEP");
        return;
      }
      if (!usuario.Logradouro.NomeLog) {
        alert("Preencha o campo endereço");
        return;
      }
      if (!usuario.Logradouro.Numero) {
        alert("Preencha o campo número");
        return;
      }


      const response = await axios.post("https://petfeliz.azurewebsites.net/api/Usuario/cadastrarUsuario", usuario);
      console.log("Cadastro bem-sucedido:", response.data);

      setUsuario({
        CPF: '',
        Nome: '',
        Email: '',
        Telefone: '',
        Senha: '',
        Logradouro: {
          CEP: '',
          NomeLog: '',
          Numero: '',
        },
        Cidade: {
          Nome_Cidade: ''
        },
        Estado: {
          Nome_Estado: ''
        }
      });

      alert("Usuário cadastrado com sucesso.");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cadastro-body">
      <div className="cadastro-img">
        <img src={img1} alt="imagem" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="cadastro-form">
          <div className="cadastro-title">
            <h1>Faça seu Cadastro!</h1>
          </div>
          <input type="text" id="name" name="Nome" value={usuario.Nome} onChange={handleInputChange} placeholder="Nome" />
          <input type="email" id="email" name="Email" value={usuario.Email} onChange={handleInputChange} placeholder="E-mail" />
          <input type="password" id="senha" name="Senha" value={usuario.Senha} onChange={handleInputChange} placeholder="Senha" />
          <input type="password" id="senhaconfirmar" name="confsenha" value={confsenha} onChange={(e) => setConfSenha(e.target.value)} placeholder="Confirmar Senha" />
          <input type="number" id="tel" name="Telefone" value={usuario.Telefone} onChange={handleInputChange} placeholder="Celular" />
          <input type="text" id="cpf" name="CPF" value={usuario.CPF} onChange={handleInputChange} placeholder="CPF/CNPJ" />
          <input type="text" id="CEP" name="CEP" value={usuario.Logradouro.CEP} onChange={handleLogradouroInputChange} placeholder="CEP" />
          <input type="text" id="estado" name="Nome_Estado" value={usuario.Estado.Nome_Estado} onChange={handleEstadoInputChange} placeholder="Estado" />
          <input type="text" id="cidade" name="Nome_Cidade" value={usuario.Cidade.Nome_Cidade} onChange={handleCidadeInputChange} placeholder="Cidade" />
          <input type="text" id="endereco" name="NomeLog" value={usuario.Logradouro.NomeLog} onChange={handleLogradouroInputChange} placeholder="Endereço" />
          <input type="text" id="numero" name="Numero" value={usuario.Logradouro.Numero} onChange={handleLogradouroInputChange} placeholder="Numero" />
        </div>
        <div>
          <button type="submit" className="cadastro-buttom1">
            CADASTRAR
          </button>
        </div>
        <div className="cadastro-buttom2">
          <Link to='/Login'><a href="#">Já sou cadastrado(a)</a></Link>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
