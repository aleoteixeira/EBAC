# Filtro de Alunos Aprovados

A entrega deste exercício consiste em:



• Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

• Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

• Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma
---

## **Como funciona**

O código consiste em:

1. **Array de Alunos**: Um array de objetos, onde cada objeto representa um aluno com os atributos `nome` e `nota`.
2. **Função `filtrarAprovados`**: Uma função que recebe o array de alunos e retorna um novo array contendo apenas os alunos com nota maior ou igual a 6.
3. **Exibição dos Resultados**: O resultado é exibido no console.

---

## **Código**

```javascript
const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 8 },
    { nome: "Ana", nota: 6 },
    { nome: "Carlos", nota: 4 },
    { nome: "Julia", nota: 9 }
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);
console.log(aprovados);