import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import logo from '../../../assets/logo.png';

import './styles.css';

const CreateAttraction = () => {

    const [codigo, setCodigo] = useState(0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');    
    const [horario_fim, setHorario_Fim] = useState('');
    const [horario_inicio, setHorario_Inicio] = useState('');
    const [descricao, setDescricao] = useState('');

  const history = useHistory();

  async function createAttraction(event: FormEvent){
    event.preventDefault();

    const min = Math.ceil(0);
    const max = Math.floor(999999);
    const codigo = Math.floor(Math.random() * (max - min)) + min;

    const data = {   
        codigo,     
        nome,
        email,
        telefone,        
        horario_fim,
        horario_inicio,
        descricao
    };  

    if(data.nome === '' || data.email === '' || data.telefone === '' || data.horario_fim === '' || data.horario_inicio === '' || data.descricao === '' ){
        alert('Erro! Verifique se os campos preenchidos estão corretos.');
        return;
    }else{
        try {
            const response = await api.post('/attractions', data);
            if (response.status != 200){
              alert(`Erro ${response.status}.`);
            }
        } catch (err){
        return;
        }
    
        alert('Atração cadastrada com sucesso!');
    
        history.push('/home');
    }
  }

  return (
        <div className="attractionContainer">
        <header>
        <Link to="/home">
            <img src={logo} alt="Event Manager"/>
        </Link>
        <h1>Criar atração</h1>
        </header>

        <form onSubmit={createAttraction}>
        <fieldset>
            <legend>
            <h2>Dados</h2>
            </legend>

            <div className="field">
            <label htmlFor="nome">Nome da atração</label>
            <input 
                name="nome"
                type="text"
                id="nome"
                onChange={e => setNome(e.target.value)} 
            />
            </div>
            
            <div className="field">
                <label htmlFor="email">E-Mail:</label>            
                <input
                    name="email"
                    type="text"
                    id="email"
                    onChange={e => setEmail(e.target.value)} 
                />
            </div>

            <div className="field">
                <label htmlFor="telefone">Telefone:</label>            
                <input
                    name="telefone"
                    type="text"
                    id="telefone"
                    onChange={e => setTelefone(e.target.value)}                     
                />
            </div>

            <div className="field-group">
            <div className="field">
                <label htmlFor="horario_inicio">Horário Inicio:</label>                  
                <input
                    name="horario_inicio"
                    type="time"
                    id="horario_inicio"
                    onChange={e => setHorario_Inicio(e.target.value)} 
                />
            </div>

            <div className="field">
                <label htmlFor="horario_fim">Horário Fim:</label>                  
                <input
                    name="horario_fim"
                    type="time"
                    id="horario_fim"
                    onChange={e => setHorario_Fim(e.target.value)} 
                />
            </div>        
            </div>
            <div className="field">
                <label htmlFor="descricao">Descrição da atração</label>
                <input 
                    name="descricao"
                    type="text"
                    id="descricao"
                    onChange={e => setDescricao(e.target.value)} 
                />
            </div>
        </fieldset>
        
        <div>
            <button type="submit">
            Criar
            </button>
        </div>

        </form>
    </div> 
  );
}

export default CreateAttraction;