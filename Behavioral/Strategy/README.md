# Padrão Strategy / Strategy Pattern

## Intenção

Definir uma família de algoritmos, encapsular cada um deles e torná-los intercambiáveis. O padrão Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam. Com isso, diferentes comportamentos podem ser definidos em tempo de execução, através da composição ao invés da herança.

É especialmente útil quando você tem múltiplas formas de realizar uma mesma tarefa e deseja alternar entre essas abordagens sem modificar o código que a utiliza. Esse padrão favorece a flexibilidade, aderência ao Princípio Aberto/Fechado e evita o uso excessivo de condicionais complexas. Muitas vezes ele é comparado com o uso de funções de ordem superior ou lambdas em linguagens funcionais.

## Aplicabilidade

O padrão Strategy pode ser usado:

- Quando diversas classes relacionadas diferem apenas no comportamento. Strategy permite extrair esses comportamentos em classes distintas e alterná-las conforme necessário.
- Quando você deseja encapsular comportamentos específicos de um algoritmo e torná-los reutilizáveis de forma independente.
- Quando você precisa selecionar algoritmos em tempo de execução.
- Para eliminar condicionais extensas com `if-else` ou `switch-case` relacionadas a diferentes comportamentos que podem ser substituídos por objetos.
- Quando você deseja que diferentes algoritmos sejam intercambiáveis, mas todos sigam o mesmo contrato/interface.

## Prós

- **Flexibilidade e extensibilidade**: Novos algoritmos podem ser adicionados facilmente sem alterar o código existente. Basta criar uma nova classe que implemente a interface Strategy.

- **Redução de condicionais**: Elimina grandes blocos condicionais relacionados à escolha de comportamentos, facilitando a manutenção e leitura do código.

- **Isolamento de responsabilidade**: Cada algoritmo é encapsulado em sua própria classe, promovendo responsabilidade única e aderência ao princípio SRP (Single Responsibility Principle).

- **Facilidade para testes e reuso**: Estratégias podem ser testadas independentemente do contexto onde são aplicadas, promovendo reutilização e testabilidade.

- **Combinação com outros padrões**: Pode ser combinado com Factory Method para criar estratégias dinamicamente ou com o padrão Decorator para empilhar comportamentos.

## Contras

- **Aumento no número de classes**: Para cada algoritmo é necessário criar uma nova classe concreta. Isso pode gerar uma proliferação de classes se houver muitas variações.

- **Complexidade na escolha da estratégia**: A lógica de seleção da estratégia adequada pode ficar dispersa no sistema, especialmente se não for centralizada.

- **Dificuldade de comunicação com o contexto**: Se a estratégia precisa de dados específicos do contexto, pode haver acoplamento ou necessidade de repassar muitos parâmetros, comprometendo a coesão.

- **Sobrecarga para casos simples**: Em cenários onde há pouca ou nenhuma variação de comportamento, o uso do padrão pode parecer excessivo.

---

> Esse padrão trabalha com os seguintes termos:
>
> - **Contexto**: Classe que usa uma Strategy. Ela mantém uma referência para a estratégia atual e delega a ela a execução do comportamento.
> - **Strategy (interface/abstração)**: Define o contrato comum para todos os algoritmos. Pode ser uma interface ou classe abstrata com um método principal.
> - **ConcreteStrategy**: Implementações concretas que encapsulam o algoritmo específico.

---

## Intention

Define a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it. By favoring composition over inheritance, the Strategy pattern promotes code flexibility and allows behavior to be selected at runtime.

It is especially useful when you have multiple ways of performing the same operation and want to swap between them without altering the client code. This pattern adheres to the Open/Closed Principle and avoids the overuse of complex conditionals. It is often compared to higher-order functions or lambdas in functional programming.

## Applicability

The Strategy pattern can be used:

- When multiple related classes differ only in their behavior. Strategy allows extracting these behaviors into separate classes and switching them dynamically.
- When you want to encapsulate specific behaviors of an algorithm and make them independently reusable.
- When you need to select algorithms at runtime.
- To eliminate conditional logic related to behavioral variation by replacing it with object composition.
- When you want different algorithms to be interchangeable but enforce a common contract/interface.

## Pros

- **Flexibility and Extensibility**: New algorithms can be added easily without modifying existing code. Just create a new class implementing the Strategy interface.

- **Reduction of Conditionals**: Avoids long `if-else` or `switch` blocks, improving readability and maintainability.

- **Isolation of Responsibility**: Each algorithm is encapsulated in its own class, promoting single responsibility and adhering to SRP (Single Responsibility Principle).

- **Ease of Testing and Reusability**: Strategies can be tested independently of the context where they are applied, promoting reusability and better test coverage.

- **Can Be Combined with Other Patterns**: Often used with Factory Method to create strategies dynamically or with the Decorator pattern to layer behaviors.

## Cons

- **Increase in the Number of Classes**: Each algorithm requires a new concrete class. This can lead to class proliferation in systems with many strategies.

- **Complex Strategy Selection Logic**: If strategy selection is not centralized, the logic might be scattered throughout the application.

- **Contextual Coupling**: If a strategy requires access to context-specific data, it might lead to undesirable coupling or require passing many parameters, reducing cohesion.

- **Overhead in Simple Cases**: In scenarios where behavior variation is minimal or absent, using the pattern may be excessive.
---
> This pattern works with the following terms:
>
> - **Context**: Class that uses a Strategy. It maintains a reference to the current strategy and delegates behavior execution to it.
> - **Strategy (interface/abstraction)**: Defines the common contract for all algorithms. It may be an interface or abstract class with a key method.
> - **ConcreteStrategy**: Concrete implementations that encapsulate specific algorithms.
