# Padrão Template Method / Template Method Pattern

## Intenção

Definir o esqueleto de um algoritmo em uma operação, postergando alguns passos para as subclasses. Template Method permite que subclasses redefinam certos passos de um algortimo sem mudar a estrutura do mesmo.
Por mais simples que seja, é extremamente poderoso. Inclusive, possui ramificações especializadas como o [**Factory Method**](https://github.com/victor-lima-142/Design-patterns/tree/main/Creational/Factory%20Method)
Ele permite que as subclasses redefinam certos passos de um algortimo sem mudar sua estrutura. (Abstract methods sendo injetados em classes filhas).

## Aplicabilidade

O padrão Template Method pode ser usado:

- Para implementar as partes invariantes e um algoritmo uma só vez e deixar para as subclasses a implementação do comportamento que pode variar.
- Quando o comportamento comum entre subclasses deve ser fatorado e concentrado nuam classe comum para evitar duplicação de código. Identifica-se as diferenças no código existente e então separa as diferenças em novas operações. Por fim, você substitui o código que apresentava as diferenças por um método template que chama uma dessas novas operações.
- Para controlar extensões de subclasses. Você pode definir um método-template que chama operações "gancho" em pontos específicos, desta forma permitindo extensões somente nesses pontos.

## Prós

- **Reutilização de código**: O Template Method permite definir o esqueleto de um algoritmo em uma classe base e permitir que as subclasses forneçam implementações específicas para partes do algoritmo. Isso promove a reutilização de código, uma vez que o esqueleto do algoritmo permanece inalterado e apenas as partes específicas são modificadas.

- **Encapsulamento do algoritmo**: O padrão encapsula o algoritmo em uma classe base, tornando-o mais fácil de entender e manter. Isso também ajuda a reduzir a duplicação de código, uma vez que o algoritmo central é definido apenas uma vez na classe base.

- **Flexibilidade**: As subclasses podem fornecer diferentes implementações para os métodos do Template Method, permitindo adaptar o comportamento do algoritmo de acordo com as necessidades específicas de cada contexto.

- **Padronização**: O padrão fornece uma estrutura padrão para a implementação de algoritmos, facilitando a compreensão do código por outros desenvolvedores e promovendo uma consistência no código da aplicação.

## Contras

- **Rigidez na estrutura**: Embora o Template Method ofereça flexibilidade ao permitir que as subclasses forneçam implementações específicas para partes do algoritmo, a estrutura geral do algoritmo é definida na classe base. Isso pode levar a uma rigidez na estrutura do código, tornando-o menos adaptável a mudanças nos requisitos.

- **Complexidade**: O padrão pode introduzir complexidade adicional no código, especialmente se o algoritmo subjacente for muito complexo ou se houver muitas subclasses que fornecem implementações diferentes para o Template Method.

- **Dificuldade em entender o fluxo de controle**: Em algumas situações, pode ser difícil para os desenvolvedores entenderem o fluxo de controle do algoritmo, uma vez que partes dele estão distribuídas entre a classe base e suas subclasses.

- **Potencial para violação do princípio de substituição de Liskov**: Se as subclasses modificarem o comportamento do Template Method de uma maneira que viole o contrato definido pela classe base, isso pode levar a problemas de design e a uma violação do princípio de substituição de Liskov.

> Esse padrão trabalha com os seguintes termos:
>
> - Classe abstrata: Ela declara uma interface para definir os passos do algoritmo.
> - Classe concreta: Também chamada de subclasse, ela define os passos específicos da subclasse.
> - Método template: Define a ordem chamando os métodos dos passos definidos na Classe Abstrata e sobescritos na Classes Concretas (subclasses ou classes-filhas)

---

## Intention

To define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method allows subclasses to redefine certain steps of an algorithm without changing its structure. As simple as it may be, it is extremely powerful. It even has specialized branches such as the [**Factory Method**](https://github.com/victor-lima-142/Design-patterns/tree/main/Creational/Factory%20Method) which allows subclasses to redefine certain steps of an algorithm without changing its structure (Abstract methods being injected into child classes).

## Applicability

The Template Method pattern can be used:

- To implement the invariant parts of an algorithm once and leave it to subclasses to implement the behavior that may vary.
- When common behavior among subclasses should be factored and concentrated into a common class to avoid code duplication. Differences in existing code are identified and then separated into new operations. Finally, you replace the code that exhibited the differences with a template method that calls one of these new operations.
- To control subclass extensions. You can define a template method that calls "hook" operations at specific points, thereby allowing extensions only at those points.

## Pros

- **Code Reuse**: The Template Method allows defining the skeleton of an algorithm in a base class and allowing subclasses to provide specific implementations for parts of the algorithm. This promotes code reuse since the algorithm skeleton remains unchanged and only specific parts are modified.

- **Algorithm Encapsulation**: The pattern encapsulates the algorithm in a base class, making it easier to understand and maintain. This also helps reduce code duplication since the core algorithm is defined only once in the base class.

- **Flexibility**: Subclasses can provide different implementations for the methods of the Template Method, allowing the behavior of the algorithm to be adapted according to the specific needs of each context.

- **Standardization**: The pattern provides a standard structure for algorithm implementation, making the code easier to understand for other developers and promoting consistency in the application code.

## Cons

- **Structural Rigidity**: Although the Template Method offers flexibility by allowing subclasses to provide specific implementations for parts of the algorithm, the overall structure of the algorithm is defined in the base class. This can lead to structural rigidity in the code, making it less adaptable to changes in requirements.

- **Complexity**: The pattern can introduce additional complexity into the code, especially if the underlying algorithm is very complex or if there are many subclasses providing different implementations for the Template Method.

- **Difficulty in Understanding Control Flow**: In some situations, it may be difficult for developers to understand the control flow of the algorithm since parts of it are distributed between the base class and its subclasses.

- **Potential for Violation of the Liskov Substitution Principle**: If subclasses modify the behavior of the Template Method in a way that violates the contract defined by the base class, this can lead to design problems and a violation of the Liskov Substitution Principle.

> This pattern works with the following terms:
>
> - Abstract class: It declares an interface to define the algorithm steps.
> - Concrete class: Also called a subclass, it defines the specific steps of the subclass.
> - Template method: Defines the order by calling the methods of the steps defined in the Abstract Class and overridden in the Concrete Classes (subclasses or child classes).
