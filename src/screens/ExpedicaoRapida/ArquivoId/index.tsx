import React from "react";

import ArquivoIdComponent from '../../../components/ExpedicaoRapida/components/ArquivoId/index'

export default function ArquivoId(props: any) {

  console.log(props.route.params._id)
  
  return (
   <ArquivoIdComponent file={props.route.params._id} /> 
  )
}
