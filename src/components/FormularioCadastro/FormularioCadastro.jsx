import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosDeUsuario from "./DadosDeUsuario";
import DadosPessoais from "./DadosPessoais";

function FormularioCadastro({aoEnviar, validarCPF }) {
  const [step, setStep] = useState(0)
  const [dadosColetados, setDadosColetados] = useState({})

  // useEffect será chamado quando for montado e atualizado
  useEffect(()=> {
    if (step === formularios.length -1) {  
      aoEnviar(dadosColetados)
    }
  })

  const formularios = [
    <DadosDeUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF}/>,
    <DadosDeEntrega aoEnviar={coletarDados} />,
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
