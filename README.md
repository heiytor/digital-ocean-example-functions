Esse é um simples repositório que visa dar exemplos práticos do uso das funções serverless da digital ocean.

<h1 align="center"> Getting started </h1>

Se conecte ao seu namespace no doctl, isso está fora do escopo do repositório, após isso, inicie sua função com o seguite comando: `doctl sls init <name>`.

### project.yml
Dentro do arquivo `project.yml` você verá algo mais ou menos assim:
```yml
parameters: {}
environment: {}
packages:
    - name: examples
      shared: false
      environment: {}
      parameters: {}
      annotations: {}
      actions:
        - name: basics
          binary: false
          main: "main"
          runtime: nodejs:18
          web: true
          websecure: false
          parameters: {}
          environment: {}
          annotations: {}
          limits: {}
```

**packages**: São os pacotes do seu namespace, cada pacote representa uma funcionalidade geral da sua aplicação, portando também quantas actions forem necessárias, por exemplo: você necessita criar um CRUD de usuários.
```yml
parameters: {}
environment: {}
packages:
    - name: users
      shared: false
      environment: {}
      parameters: {}
      annotations: {}
      actions:
```
**Actions**: São as funcionalidades em si da sua função, por exemplo: você possui um CRUD de usuário, seu CRUD terá os metódos create, read, update e delete, cada metódo será uma action.
```yml
packages:
    - name: examples
      shared: false
      environment: {}
      parameters: {}
      annotations: {}
      actions:
        - name: create
          binary: false
          main: "main"
          runtime: nodejs:18
          web: true
          websecure: false
          parameters: {}
          environment: {}
          annotations: {}
          limits: {}
        - name: read
          binary: false
          main: "main"
          runtime: nodejs:18
          web: true
          websecure: false
          parameters: {}
          environment: {}
          annotations: {}
          limits: {}
        - name: update
          binary: false
          main: "main"
          runtime: nodejs:18
          web: true
          websecure: false
          parameters: {}
          environment: {}
          annotations: {}
          limits: {}
        - name: delete
          binary: false
          main: "main"
          runtime: nodejs:18
          web: true
          websecure: false
          parameters: {}
          environment: {}
          annotations: {}
          limits: {}
```
**Enviroments**: É o equivalente ao `.env` do seu projeto, você pode adicionar uma nova variável da seguinte forma:
```yml
environment:
  DB_URI: "${DB_URI}"
```
Onde `"${DB_URI}"` representa a mesma variável no seu `.env`. Esse o qual precisa ficar no diretório root das suas funções (junto do packages e project.yml).
Para mais informações, cheque a [documentação oficial]().

### lib
Explicado na action `libUsage`.

### actions
Você pode começar a fazer suas próprias actions assim:
1. Antes de começarmos a criação da sua ação, coloque o nome de seu diretório no arquivo `project.yml`, após isso, crie seu diretório no pacote correto.
2. Você pode iniciar sua função com essa template:
    ```javascript
    const main = async (args) => {
      return { body: { main: 'working' } };
    };

    exports.main = main
    ```
3. Dê uma olhada [aqui]().

Para mais informações, cheque a [documentação oficial]().