# Padrão Singleton / Singleton Pattern

## Intenção

Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para a mesma.

## Motivação

É importante para algumas classes ter uma, e apenas uma, instância.

### Exemplo

Na construção de uma API, precisamos ter apenas uma instância global de conexão com o banco de dados. Para isso, é necessário chamar a classe **ConnectDB** e buscar a propriedade _connection_.

## Aplicabilidade

- For preciso haver apenas uma instância de uma classe, e essa instância tiver que dar acesso aos clientes através de um ponto bem conhecido.
- A única instância tiver de ser extensível através de subclasses possibilitando aos clientes usar uma instâncias estendida sem alterar o seu código.

## Prós

- **Acesso controlado à instância única**: Através do encapsulamento (ver conceitos de POO), a classe instanciada tem controle total sobre como e quando os clientes acessam a instância.
- **Espaço de nomes reduzido**: O padrão Singleton é um ótimo recurso no local de variáveis globais, evitando poluição de espaço de nomes com variáveis globais que armazenam instâncias únicas e imutáveis.
- **Permite um úmero variável de instâncias**: Aplicando o padrão Singleton, podemos criar e manipular mais de uma instância na mesma classe. Somente a operação que permite acesso À instância do Singleton necessita ser mudada.

## Contras

- **É mais difícil de testar**
- **Requer tratamento especial em casos de concorrência**
- **Viola o Princípior da Responsabilidade única**

---

## Intent

Ensure that a class has only one instance and provide a global access point for it.

## Motivation

It is important for some classes to have one, and only one, instance.

### Example

When building an API, we need to have only one global database connection instance. To do this, it is necessary to call the **ConnectDB** class and look for the _connection_ property.

## Applicability

- There needs to be only one instance of a class, and that instance must give access to clients through a well-known point.
- The single instance must be extensible through subclasses, allowing customers to use an extended instance without changing their code.

## Pros

- **Controlled access to the single instance**: Through encapsulation (see OOP concepts), the instantiated class has full control over how and when clients access the instance.
- **Reduced namespace**: The Singleton pattern is a great feature in place of global variables, avoiding namespace pollution with global variables that store unique, immutable instances.
- **Allows a variable number of instances**: Applying the Singleton pattern, we can create and manipulate more than one instance in the same class. Only the operation that allows access to the Singleton instance needs to be changed.

## Cons

- **It is more difficult to test**
- **Requires special treatment in cases of competition**
- **Violates the Single Responsibility Principle**
