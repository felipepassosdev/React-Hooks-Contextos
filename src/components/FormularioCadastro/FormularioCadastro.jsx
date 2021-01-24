import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosDeEntrega from "./DadosDeEntrega";

function FormularioCadastro({aoEnviar, validarCPF}) {

  return (
    <>
    <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
    <DadosUsuarios/>
    <DadosDeEntrega/>
    </>
  );
}

export default FormularioCadastro;
