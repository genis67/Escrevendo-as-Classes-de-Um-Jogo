# Escrevendo-as-Classes-de-Um-Jogo
GFT Start #6 - Lógica de Programação. Desafio de projeto, nível básico.

# 3️⃣ Escrevendo as classes de um Jogo

### O Que deve ser utilizado

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão
- Funções
- Classes e Objetos

## Objetivo

Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- `nome`
- `idade`
- `tipo` (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado `atacar` que deve atender aos seguintes requisitos:

- Exibir a mensagem: `"O {tipo} atacou usando {ataque}"`
  - onde `{tipo}` deve ser o valor da propriedade `tipo` da classe
  - e `{ataque}` deve seguir uma descrição diferente conforme o `tipo`, de acordo com a tabela abaixo:

  | Tipo       | Ataque           |
  |------------|------------------|
  | mago       | usou magia       |
  | guerreiro  | usou espada      |
  | monge      | usou artes marciais |
  | ninja      | usou shuriken    |

## Saída

Ao final, deve-se exibir uma mensagem:

- `"O {tipo} atacou usando {ataque}"`

Exemplos:

- **Mago** atacou usando **magia**
- **Guerreiro** atacou usando **espada**
