# Padrões de Projetos Comportamentais / Behavioral Design Patterns

## Conceito

Os Padrões Comportamentais se preocupam com algoritmos e a atribuição de responsabilidades entre objetos. Os padrões comportamentais não descrevem apenas padrões de objetos ou classes, mas também os padrões de comunicação entre eles.
Os  aplicam herança para distribuir o comportamento enre classes.

## Tipos

Existem vários tipos de padrões comportamentais, cada um com seu próprio conjunto de desafios e cenários de aplicação. Entre os padrões mais comuns estão:

- [**Template Method**](https://github.com/victor-lima-142/Design-patterns/tree/main/Behavioral/Template%20Method): Este padrão define o esqueleto de um algoritmo em uma classe base, delegando alguns passos específicos para as subclasses. Ele permite que as subclasses redefinam certos passos de um algoritmo sem alterar sua estrutura geral.

- **Chain of Responsibility (Corrente de Responsabilidade)**: Este padrão permite que uma solicitação seja passada por uma cadeia de objetos, onde cada objeto decide se processa a solicitação ou a passa adiante para o próximo na cadeia. Isso promove baixo acoplamento entre os objetos e flexibilidade na maneira como as solicitações são tratadas.

- **Command (Comando)**: O padrão Command encapsula uma solicitação como um objeto, permitindo que você parametrize clientes com operações, enfileire solicitações, registre operações em log e desfaça ações. Isso separa o invocador do processamento da solicitação, proporcionando maior flexibilidade e extensibilidade.

- **Interpreter (Interpretador)**: Este padrão define uma gramática para interpretar um idioma e fornece uma maneira de avaliar expressões nessa gramática. É útil quando você precisa interpretar uma linguagem específica ou transformar uma entrada em diferentes ações.

- **Iterator (Iterador)**: O padrão Iterator fornece uma maneira de acessar os elementos de uma coleção sequencial sem expor sua representação subjacente. Isso permite que você percorra os elementos de uma coleção de maneira uniforme, independentemente da sua implementação específica.

- **Mediator (Mediador)**: O padrão Mediator promove o acoplamento fraco entre objetos ao centralizar suas interações complexas em um objeto mediador único. Isso reduz a complexidade de comunicação direta entre os objetos e facilita a manutenção e extensão do sistema.

- **Memento (Memorando)**: O padrão Memento permite que você capture e externalize o estado interno de um objeto sem violar seu encapsulamento, de modo que o objeto possa ser restaurado para esse estado mais tarde. Isso é útil para implementar operações de desfazer ou para salvar e restaurar o estado de um objeto.

Esses padrões comportamentais têm aplicações em uma variedade de cenários de desenvolvimento de software, desde a simplificação da comunicação entre objetos até a implementação de operações complexas de maneira flexível e extensível. Ao entender e aplicar esses padrões de maneira apropriada, os desenvolvedores podem melhorar a modularidade, flexibilidade e manutenibilidade de seus sistemas.

---

## Concept

Behavioral Patterns concern algorithms and the assignment of responsibilities among objects. Behavioral patterns not only describe patterns of objects or classes, but also patterns of communication between them. They apply inheritance to distribute behavior among classes.

## Types

There are several types of behavioral patterns, each with its own set of challenges and application scenarios. Among the most common patterns are:

- [**Template Method**](https://github.com/victor-lima-142/Design-patterns/tree/main/Behavioral/Template%20Method): This pattern defines the skeleton of an algorithm in a base class, delegating some specific steps to subclasses. It allows subclasses to redefine certain steps of an algorithm without changing its overall structure.

- **Chain of Responsibility**: This pattern allows a request to be passed through a chain of objects, where each object decides whether to process the request or pass it on to the next in the chain. This promotes low coupling between objects and flexibility in how requests are handled.

- **Command**: The Command pattern encapsulates a request as an object, allowing you to parameterize clients with operations, queue requests, log operations, and undo actions. This separates the invoker from the processing of the request, providing greater flexibility and extensibility.

- **Interpreter**: This pattern defines a grammar for interpreting a language and provides a way to evaluate expressions in that grammar. It is useful when you need to interpret a specific language or transform input into different actions.

- **Iterator**: The Iterator pattern provides a way to access the elements of a sequential collection without exposing its underlying representation. This allows you to traverse the elements of a collection uniformly, regardless of its specific implementation.

- **Mediator**: The Mediator pattern promotes weak coupling between objects by centralizing their complex interactions in a single mediator object. This reduces the complexity of direct communication between objects and facilitates system maintenance and extension.

- **Memento**: The Memento pattern allows you to capture and externalize the internal state of an object without violating its encapsulation, so that the object can be restored to that state later. This is useful for implementing undo operations or for saving and restoring the state of an object.

These behavioral patterns have applications in a variety of software development scenarios, from simplifying communication between objects to implementing complex operations in a flexible and extensible manner. By understanding and applying these patterns appropriately, developers can improve the modularity, flexibility, and maintainability of their systems.
