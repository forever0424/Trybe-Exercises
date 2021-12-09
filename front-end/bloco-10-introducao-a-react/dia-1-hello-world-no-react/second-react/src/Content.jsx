import { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return <ol className="list">
      {conteudos.map((obj) => <li>{`O conteúdo é: ${obj.conteudo}
      Status: ${obj.status}
      Bloco: ${obj.bloco}`}</li>)}
    </ol>
  }
}

export default Content;
