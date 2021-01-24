import React from 'react';
import { TextField, Button } from '@material-ui/core'

// import { Container } from './styles';

function DadosDeEntrega() {
  return (
         <form>
            <TextField id="cep" label="CEP" type="number"
              variant="outlined" margin="normal" />
            <TextField id="endereco" label="Endereco" type="text" 
              variant="outlined" margin="normal" fullWidth/>
            <TextField id="numero" label="Numero" type="number" 
              variant="outlined" margin="normal" />
            <TextField id="estado" label="Estado" type="text" 
              variant="outlined" margin="normal" />
            <TextField id="cidade" label="Cidade" type="text" 
              variant="outlined" margin="normal" />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Finalizar Cadastro
            </Button>
        </form>
  )
}

export default DadosDeEntrega;