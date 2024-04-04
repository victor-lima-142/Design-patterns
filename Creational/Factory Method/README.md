# Padrão Factory Method

## Intenção
Definir uma interface para criar um objeto (daí o nome "método de fábrica"), mas deixar as subclasses decidirem que classe instanciar. Podemos assim adiar a instanciação para subclasses.

## Motivação
O padrão Factory Method é usado quando você tem uma hierarquia de classes e deseja delegar a responsabilidade de criação de objetos para subclasses específicas.

## Aplicabilidade
- Uma classe não pode antecipar a classe de objetos que devem criar.
- Uma classe quer que suas subclasses especifiquem os objetos que criam.
- Classes delegam responsabilidade para uma dentre várias subclasses auxiliares, e você quer localizar o conhecimento de qual subclasse auxiliar que é a delegada.

## Prós
- **Desacoplamento**: O Factory Method promove um baixo acoplamento entre o código cliente e as classes concretas, já que o cliente interage apenas com a interface comum (ou classe abstrata) em vez de conhecer as implementações específicas de fábrica e produto.

- **Abstração**: Ele fornece uma abstração para a criação de objetos, permitindo que o código cliente trabalhe com uma interface ou classe abstrata, em vez de se preocupar com as implementações concretas de fábrica e produto. Isso facilita a substituição de objetos concretos sem alterar o código cliente.

- **Flexibilidade**: O Factory Method permite que subclasses decidam qual objeto criar com base em certas condições, oferecendo flexibilidade na criação de objetos. Isso é útil quando diferentes contextos ou configurações exigem a criação de diferentes tipos de objetos.

- **Extensibilidade**: Ele suporta a extensão do código, permitindo a adição de novas subclasses de fábrica e produto sem modificar o código existente. Isso segue o princípio do Open/Closed Principle, que diz que as classes devem estar abertas para extensão, mas fechadas para modificação.

- **Padronização**: O Factory Method promove a padronização da criação de objetos, garantindo que todos os objetos sejam criados de acordo com um padrão específico definido pela fábrica. Isso ajuda a manter a consistência e a coesão no código.

## Contras:

- **Complexidade adicional**: Introduzir o padrão Factory Method pode adicionar complexidade ao código, especialmente se houver muitas classes envolvidas na hierarquia de fábrica e produto. Isso pode tornar o código mais difícil de entender e manter.

- **Necessidade de criar subclasses**: Para usar o Factory Method, você geralmente precisa criar subclasses de fábrica para cada tipo de produto que deseja criar. Isso pode levar a uma explosão de subclasses se houver muitos tipos de produtos diferentes.

- **Difícil de entender para iniciantes**: Para desenvolvedores menos experientes, entender como o Factory Method funciona e como aplicá-lo corretamente pode ser desafiador. Isso pode levar a erros de implementação e dificuldades na manutenção do código.

- **Potencial para violar o princípio da substituição de Liskov**: Se as subclasses de fábrica não respeitarem as interfaces ou contratos definidos pelas superclasses, pode ocorrer uma violação do princípio da substituição de Liskov, o que pode levar a comportamentos inesperados e dificultar a manutenção do código.

- **Overhead de criação de classes adicionais**: Introduzir o Factory Method pode aumentar o número de classes no código, o que pode resultar em um overhead de criação de classes adicionais. Isso pode tornar o código mais difícil de gerenciar e manter, especialmente em projetos pequenos ou simples.

---

# Factory Method Pattern

## Intent
To define an interface for creating an object (hence the name "factory method"), but let subclasses decide which class to instantiate. This allows deferring instantiation to subclasses.

## Motivation
The Factory Method pattern is used when you have a hierarchy of classes and want to delegate the responsibility of object creation to specific subclasses.

## Applicability
- A class cannot anticipate the class of objects it must create.
- A class wants its subclasses to specify the objects they create.
- Classes delegate responsibility to one of several helper subclasses, and you want to localize the knowledge of which subclass is the delegate.

## Pros
- **Decoupling**: The Factory Method promotes low coupling between client code and concrete classes, as the client interacts only with the common interface (or abstract class) instead of knowing the specific implementations of factory and product.

- **Abstraction**: It provides an abstraction for object creation, allowing client code to work with an interface or abstract class instead of worrying about the concrete implementations of factory and product. This facilitates substituting concrete objects without altering client code.

- **Flexibility**: The Factory Method allows subclasses to decide which object to create based on certain conditions, offering flexibility in object creation. This is useful when different contexts or configurations require creating different types of objects.

- **Extensibility**: It supports code extension by allowing the addition of new factory and product subclasses without modifying existing code. This follows the Open/Closed Principle, stating that classes should be open for extension but closed for modification.

- **Standardization**: The Factory Method promotes standardization of object creation, ensuring that all objects are created according to a specific pattern defined by the factory. This helps maintain consistency and cohesion in the code.

## Cons:
- **Additional Complexity**: Introducing the Factory Method pattern can add complexity to the code, especially if there are many classes involved in the factory and product hierarchy. This can make the code harder to understand and maintain.

- **Need for Subclassing**: To use the Factory Method, you typically need to create factory subclasses for each type of product you want to create. This can lead to an explosion of subclasses if there are many different types of products.

- **Difficult for Beginners to Understand**: For less experienced developers, understanding how the Factory Method works and how to apply it correctly can be challenging. This can lead to implementation errors and difficulties in maintaining the code.

- **Potential to Violate the Liskov Substitution Principle**: If factory subclasses do not adhere to the interfaces or contracts defined by superclasses, a violation of the Liskov Substitution Principle may occur, leading to unexpected behaviors and making code maintenance difficult.

- **Overhead of Additional Class Creation**: Introducing the Factory Method can increase the number of classes in the code, resulting in overhead of creating additional classes. This can make the code harder to manage and maintain, especially in small or simple projects.
