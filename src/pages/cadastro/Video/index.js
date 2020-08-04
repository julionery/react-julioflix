import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

      <h1>Cadastro de Video</h1>

    </PageDefault>
  );
}

export default CadastroVideo;
