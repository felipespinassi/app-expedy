import ListaSeparacaoComponent from "../../../components/ExpedicaoRapida/components/LIstaSeparacao";

export default function ListaSeparacao(props: any) {
  

  const file = props.route.params;


  return (
   <ListaSeparacaoComponent file={file} />
  );
}
