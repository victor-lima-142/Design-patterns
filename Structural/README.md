# Padrões de Projetos Estruturais / Structural Design Patterns

## Conceito

Os padrões de projeto estruturais são uma parte fundamental do desenvolvimento de software, pois fornecem soluções para problemas recorrentes relacionados à estruturação de classes e objetos. Eles ajudam os desenvolvedores a criar sistemas mais flexíveis, escaláveis e fáceis de manter, ao mesmo tempo em que promovem a reutilização de código e a separação de preocupações.
Basicamente esses padrões se preocupam com a forma como os objetos são compostos para formar estruturas maiores.

## Tipos

Alguns dos padrões de projeto estruturais mais comuns incluem:

- **Adapter (Adaptador)**: Este padrão permite que objetos com interfaces incompatíveis trabalhem juntos. Ele é frequentemente usado quando um sistema precisa interagir com um componente externo que possui uma interface diferente daquela esperada pelo sistema.

- **Bridge (Ponte)**: O padrão Bridge desacopla uma abstração da sua implementação, permitindo que ambas possam variar independentemente. Isso é útil quando você tem diferentes implementações que precisam ser combinadas com diferentes abstrações.

- **Composite (Composto)**: Este padrão permite que você trate objetos individuais e composições de objetos de maneira uniforme. Ele é útil quando você precisa representar hierarquias de objetos em uma estrutura de árvore.

- **Decorator (Decorador)**: O Decorator permite adicionar comportamentos adicionais a objetos dinamicamente. Isso é feito envolvendo o objeto original em um ou mais decoradores que fornecem funcionalidades adicionais.

- **Facade (Fachada)**: A Fachada fornece uma interface simplificada para um subsistema complexo. Isso ajuda a ocultar a complexidade e facilita o uso do subsistema.

- **Flyweight (Peso-leve)**: O padrão Flyweight é útil quando você precisa lidar com um grande número de objetos que têm partes idênticas ou semelhantes. Ele visa minimizar o uso de memória compartilhando o máximo possível de dados entre objetos semelhantes.

- **Proxy (Proxi)**: O Proxy atua como um intermediário para controlar o acesso a um objeto. Ele é útil em cenários onde você precisa adicionar funcionalidades adicionais, como controle de acesso, verificação de autorização ou armazenamento em cache, sem modificar a classe original.

> Esses padrões, quando aplicados corretamente, podem melhorar significativamente a estrutura e a flexibilidade do seu código, facilitando a manutenção e a evolução do sistema ao longo do tempo. No entanto, é importante entender as situações em que cada padrão é mais apropriado e como aplicá-los de forma eficaz para obter os melhores resultados.

---

## Concept

Structural design patterns are a fundamental part of software development, as they provide solutions to recurring problems related to the structuring of classes and objects. They help developers create more flexible, scalable, and maintainable systems while promoting code reuse and separation of concerns.
Essentially, these patterns concern themselves with how objects are composed to form larger structures.

## Types

Some of the most common structural design patterns include:

- **Adapter**: This pattern allows objects with incompatible interfaces to work together. It is often used when a system needs to interact with an external component that has an interface different from what the system expects.

- **Bridge**: The Bridge pattern decouples an abstraction from its implementation, allowing both to vary independently. This is useful when you have different implementations that need to be combined with different abstractions.

- [**Composite**](https://github.com/victor-lima-142/Design-patterns/tree/main/Structural/Composite): This pattern allows you to treat individual objects and compositions of objects uniformly. It is useful when you need to represent hierarchies of objects in a tree structure.

- **Decorator**: The Decorator allows adding additional behaviors to objects dynamically. This is done by wrapping the original object in one or more decorators that provide additional functionality.

- **Facade**: The Facade provides a simplified interface to a complex subsystem. This helps hide complexity and makes using the subsystem easier.

- **Flyweight**: The Flyweight pattern is useful when dealing with a large number of objects that have identical or similar parts. It aims to minimize memory usage by sharing as much data as possible between similar objects.

- **Proxy**: The Proxy acts as an intermediary to control access to an object. It is useful in scenarios where you need to add additional functionality, such as access control, authorization checking, or caching, without modifying the original class.

> These patterns, when applied correctly, can significantly improve the structure and flexibility of your code, making maintenance and evolution of the system easier over time. However, it's important to understand the situations in which each pattern is most appropriate and how to apply them effectively to achieve the best results.
