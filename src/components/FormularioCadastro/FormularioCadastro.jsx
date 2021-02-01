import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosDeUsuario from "./DadosDeUsuario";
import DadosPessoais from "./DadosPessoais";

//Da maneira que temos nosso componente FormularoCadastro até esse momento ele recebe algumas propriedades que ele não faz nada com elas, o único que ele faz é repassar essas propriedades para os componentes filhos dele.

//Essa maneira de trabalhar com propriedades é chamada de prop drilling e é considerada uma má prática.

function FormularioCadastro({aoEnviar, validacoes }) {
  const [step, setStep] = useState(0)
  const [dadosColetados, setDadosColetados] = useState({})

  // useEffect será chamado quando for montado e atualizado
  useEffect(()=> {
    if (step === formularios.length -1) {  
      aoEnviar(dadosColetados)
    }
  })

  const formularios = [
    <DadosDeUsuario aoEnviar={coletarDados} validacoes={validacoes}/>,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes}/>,
    <DadosDeEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,
    <Typography variant='h5'>Obrigado pelo Cadastro</Typography>
  ]
  
  function coletarDados(dados) {
    setDadosColetados({...dadosColetados, ...dados})
    nextStep()
  }

  function nextStep(){
      setStep(step+1)
  }
  return <>
    <Stepper activeStep={step}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
      {formularios[step]}
    </>
}

export default FormularioCadastro;
