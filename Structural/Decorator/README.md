# Padrão Decorator / Decorator Pattern

## Intenção

Anexar responsabilidades adicionais a um objeto dinamicamente. Decorators fornecem uma alternativa flexível ao uso de subclasses para estender funcionalidades.

## Motivação

O padrão Decorator é motivado pela necessidade de adicionar funcionalidades a objetos individuais, sem afetar outros objetos da mesma classe. Ele permite a extensão de comportamento de forma transparente, sem criar uma grande hierarquia de subclasses. Em vez disso, funcionalidades são adicionadas por meio da composição, encapsulando o objeto original em "decoradores".

## Aplicabilidade

- Quando queremos adicionar responsabilidades a objetos individuais de maneira dinâmica e transparente, ou seja, sem afetar outros objetos.
- Quando a extensão por herança não é viável ou prática, devido à explosão da hierarquia de subclasses.
- Quando queremos manter as responsabilidades separadas em classes específicas, promovendo maior coesão.

## Prós

- **Adição dinâmica de comportamento**: Permite adicionar funcionalidades a um objeto sem alterar seu código, promovendo o princípio aberto/fechado (open/closed principle).

- **Evita explosão de subclasses**: Elimina a necessidade de criar diversas subclasses para cada combinação possível de funcionalidades.

- **Alta flexibilidade e reutilização**: Decoradores podem ser combinados de diversas formas para criar comportamentos compostos reutilizáveis.

- **Transparência para o cliente**: O objeto decorado continua respeitando a mesma interface do objeto original, mantendo a compatibilidade com o código cliente.

- **Responsabilidades especializadas**: Cada decorator encapsula uma responsabilidade específica, o que promove a separação de preocupações.

## Contras

- **Muitos pequenos objetos**: A composição de múltiplos decoradores pode gerar uma grande quantidade de objetos pequenos, tornando o sistema mais difícil de entender e depurar.

- **Complexidade de configuração**: A ordem de empilhamento dos decoradores pode ser importante e nem sempre é evidente, o que pode levar a bugs sutis.

- **Dificuldade de depuração**: Pode ser difícil rastrear o fluxo de chamadas em uma cadeia de objetos decorados, especialmente quando muitos decoradores estão envolvidos.

- **Não fornece acesso direto ao componente original**: Em alguns casos, pode ser necessário acessar o objeto base, o que vai contra o encapsulamento e exige soluções alternativas.

> Em resumo, o padrão Decorator é ideal para adicionar comportamentos a objetos de forma flexível e dinâmica. Quando utilizado com parcimônia e clareza, permite grande extensibilidade sem comprometer a estrutura do código. No entanto, seu uso excessivo pode tornar o sistema difícil de compreender e manter.

---

## Intent

Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

## Motivation

The Decorator pattern is motivated by the need to extend the behavior of individual objects without modifying the code of their classes or affecting other objects. Instead of relying on deep inheritance trees, behavior is extended via composition, by wrapping the original object in a series of decorator classes.

## Applicability

- When we want to add responsibilities to individual objects dynamically and transparently.
- When subclassing is impractical due to a large number of feature combinations that would require an explosion of subclasses.
- When we want to keep responsibilities separated into distinct classes to increase cohesion.

## Pros

- **Dynamic behavior extension**: Enables adding functionality to an object without modifying its code, adhering to the open/closed principle.

- **Avoids subclass explosion**: Reduces the need for many subclasses by using flexible composition of decorators.

- **High flexibility and reusability**: Decorators can be mixed and matched in various ways, offering powerful behavior customization.

- **Transparency to clients**: Decorated objects respect the same interface, ensuring client code does not need to change.

- **Specialized responsibilities**: Each decorator encapsulates a specific concern, supporting separation of responsibilities.

## Cons

- **Many small objects**: The use of multiple decorators can result in many small, interlinked objects, complicating code understanding and maintenance.

- **Configuration complexity**: The order in which decorators are applied can matter, and this is not always obvious.

- **Debugging difficulty**: Tracing behavior through a chain of decorators can be challenging and error-prone.

- **No direct access to base component**: Sometimes it may be necessary to access the wrapped object, which violates encapsulation and requires workarounds.

> In summary, the Decorator pattern is a powerful and flexible way to extend behavior at runtime. Used correctly, it supports cleaner code and better modularity. However, excessive or careless use may reduce clarity and increase system complexity.
