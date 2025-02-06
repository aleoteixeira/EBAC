# **Projeto: Visualizador de Perfil do GitHub**

## **Descrição**
Este projeto é uma aplicação web que permite visualizar informações básicas de um perfil do GitHub de forma simples e intuitiva. Ao inserir o nome de um usuário do GitHub, a aplicação faz uma requisição à API do GitHub e exibe detalhes como:

- **Nome do usuário**
- **Nome de usuário (login)**
- **Foto do perfil (avatar)**
- **Número de repositórios públicos**
- **Número de seguidores**
- **Número de usuários que o perfil segue**
- **Link para o perfil no GitHub**

## **Funcionalidades Principais**
### 1. **Busca de Perfil**
   - Faz uma requisição à API do GitHub para buscar os dados do perfil do usuário.

### 2. **Exibição de Dados**
   - Exibe as informações do perfil de forma organizada e responsiva.

### 3. **Tratamento de Erros**
   - Se o usuário não for encontrado ou ocorrer um erro na requisição, a aplicação exibe uma mensagem amigável e valores padrão, evitando que a interface quebre.


## **Tecnologias Utilizadas**
- **HTML**: Estrutura da página.
- **CSS**: Estilização e layout responsivo.
- **JavaScript**: Lógica para fazer requisições à API do GitHub e manipular os dados.
- **Fetch API**: Para fazer requisições assíncronas à API do GitHub.

## **Como Funciona**
1. O usuário acessa a página.
2. A aplicação faz automaticamente uma requisição à API do GitHub para buscar os dados do perfil.
3. Se a requisição for bem-sucedida, as informações do perfil são exibidas.
4. Se ocorrer um erro (por exemplo, usuário não encontrado), a aplicação exibe uma mensagem de erro amigável.

## **Objetivo**
O objetivo deste projeto é fornecer uma maneira fácil e rápida de visualizar informações básicas de um perfil do GitHub, demonstrando o uso de APIs, requisições assíncronas e tratamento de erros em uma aplicação web.

---

## **Exemplo de Uso**
- **Desenvolvedores**: Podem usar para visualizar rapidamente informações de perfis do GitHub.
- **Estudantes**: Podem usar como exemplo para aprender sobre integração com APIs e manipulação de dados em JavaScript.

---
