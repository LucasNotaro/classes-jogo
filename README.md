# Calculadora de Rankeadas
Este projeto foi proposto pela [Digital Innovation One](https://www.dio.me/) como parte do **bootcamp GFT Start #6 - Lógica de Programação.**

Este projeto define uma classe Heroi que representa diferentes tipos de heróis, cada um com um nome, idade e tipo (mago, guerreiro, monge ou ninja). A classe inclui o método atacar, que exibe o tipo de ataque conforme o tipo do herói.

## 🚀 Tecnologias Utilizadas
- JavaScript
- Node.js

## 📋 Pré-requisitos
- Node.js instalado

## ⚙️ Como Executar o Projeto
1. **Clone este repositório** em sua máquina:
   ```bash
   git clone https://github.com/LucasNotaro/classes-jogo
   ```
2. **Navegue até o diretório do projeto:**
    ```bash
    cd classes-jogo
    ```
3. **No arquivo onde está a classe Heroi, altere os valores das variáveis de nome, idade e tipo conforme desejado para testar diferentes heróis e ataques:**
    ```bash
    const mago = new Heroi('Harry', 22, 'mago');  // Altere os valores conforme desejado
    ```

3. **Execute o arquivo usando Node.js:**
    ```bash
    node index.js
    ```
4. **Visualize o resultado: O ataque do herói será exibido no console. A saída exibirá o nome do herói, seu tipo e o método de ataque correspondente. Exemplo de saída:**
    ```bash
    Harry, o mago, atacou usando magia
    Hercules, o guerreiro, atacou usando espada
    Shaolin, o monge, atacou usando artes marciais
    Ryu, o ninja, atacou usando shuriken
    ```

<br><br>
# Descrição do Desafio Proposto:
## Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada