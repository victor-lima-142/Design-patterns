# Padrões de Projetos Criacionais / Creational Design Patterns

## Conceito

Padrões de projeto criacionais são um conjunto de padrões de design utilizados no desenvolvimento de software para lidar com a criação de objetos de forma mais flexível, eficiente e reutilizável. Eles ajudam a garantir que a criação de objetos seja desacoplada do seu uso, promovendo assim a modularidade e a manutenibilidade do código.

## Tipos

Existem vários padrões de projeto criacionais, cada um com seu propósito específico. Alguns dos padrões mais comuns nesta categoria incluem:

- [**Factory Method (Método de Fábrica)**](https://github.com/victor-lima-142/Design-patterns/tree/main/Creational/Factory%20Method): Define uma interface para criar um objeto, mas permite que as subclasses decidam qual classe instanciar. Isso permite que uma classe delegue a responsabilidade de criação de objetos para suas subclasses.

- Abstract Factory (Fábrica Abstrata): Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. Este padrão é útil quando você precisa criar diferentes tipos de objetos relacionados, mas quer garantir que esses objetos sejam compatíveis.

- [**Singleton (Singleton)**](https://github.com/victor-lima-142/Design-patterns/tree/main/Creational/Singleton): Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global para essa instância. É útil quando você precisa de uma única instância compartilhada por toda a aplicação, como por exemplo, um gerenciador de configurações ou uma conexão com um banco de dados.

- **Builder (Construtor)**: Separa a construção de um objeto complexo de sua representação, permitindo a criação de diferentes representações do mesmo objeto. É útil quando você precisa criar objetos com muitos parâmetros opcionais ou configuráveis.

- **Prototype (Protótipo)**: Permite a criação de novos objetos a partir de objetos existentes, copiando seu estado. Isso é útil quando o processo de criação de um objeto é custoso ou complexo, e você quer evitar a criação de novos objetos a partir do zero.

- Object Pool (Pool de Objetos): Mantém um pool de objetos pré-instantiados para reutilização, em vez de instanciar novos objetos sempre que necessário. Isso é útil em situações onde a criação de novos objetos é cara em termos de recursos, como conexões de banco de dados ou threads.

Cada um desses padrões tem seus próprios casos de uso e benefícios, e a escolha do padrão adequado depende do contexto específico do problema que você está tentando resolver. Ao aplicar padrões de projeto criacionais, os desenvolvedores podem criar sistemas mais flexíveis, escaláveis e fáceis de manter.

---

## Concept

Creational design patterns are a set of design patterns used in software development to handle object creation in a more flexible, efficient, and reusable way. They help ensure that object creation is decoupled from its usage, thus promoting code modularity and maintainability.

## Types

There are several creational design patterns, each with its specific purpose. Some of the most common patterns in this category include:

- [**Factory Method**](https://github.com/victor-lima-142/Design-patterns/tree/main/Creational/Factory%20Method): Defines an interface for creating an object but allows subclasses to decide which class to instantiate. This allows a class to delegate the responsibility of object creation to its subclasses.

- **Abstract Factory**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes. This pattern is useful when you need to create different types of related objects but want to ensure that these objects are compatible.

- [**Singleton**](https://github.com/victor-lima-142/Design-patterns/tree/main/Creational/Singleton): Ensures that a class has only one instance and provides a global access point to that instance. It is useful when you need a single instance shared across the entire application, such as a configuration manager or a database connection.

- **Builder**: Separates the construction of a complex object from its representation, allowing the creation of different representations of the same object. It is useful when you need to create objects with many optional or configurable parameters.

- **Prototype**: Allows the creation of new objects from existing objects by copying their state. This is useful when the process of creating an object is costly or complex, and you want to avoid creating new objects from scratch.

- **Object Pool**: Maintains a pool of pre-instantiated objects for reuse instead of instantiating new objects whenever needed. This is useful in situations where creating new objects is resource-intensive, such as database connections or threads.
  
> Each of these patterns has its own use cases and benefits, and the choice of the appropriate pattern depends on the specific context of the problem you are trying to solve. By applying creational design patterns, developers can create more flexible, scalable, and easily maintainable systems.
