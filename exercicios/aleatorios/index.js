"use strict";
// 1. Type Alias com union
// Crie um tipo chamado Status que só pode ser "pendente", "aprovado" ou "negado".
// Depois, crie uma função que aceita esse tipo como parâmetro e imprime uma mensagem diferente para cada valor.
// 2. Type guard
// Crie uma função que aceita um parâmetro input: string | number
// e retorna o dobro caso seja número, ou a string em maiúsculas se for string.
// 3. Tipo condicional simples
// Crie um tipo que, se T for string, retorna string[], senão retorna T.
// Teste com T = string e T = number.
// 4. Mapped Types
// Crie um tipo chamado ReadonlyPessoa com todas as propriedades de Pessoa marcadas como readonly.
// 5. Utilitário Partial<T>
// Crie uma interface Perfil com nome, idade e email.
// Use Partial<Perfil> para permitir atualizações parciais de perfil em uma função atualizarPerfil.
// 6. Utilitário Pick<T, K>
// Crie uma interface Produto com 4 propriedades.
// Use Pick para criar um novo tipo contendo apenas nome e preco.
// 7. Utilitário Omit<T, K>
// Usando a mesma interface Produto, crie um novo tipo omitindo a propriedade id.
// 8. Utilitário Record<K, T>
// Crie um tipo que representa um dicionário com chaves sendo os dias da semana e valores do tipo boolean (ex: estáAberto).
// 9. Inferência com ReturnType<T>
// Crie uma função que retorna um objeto e crie um tipo baseado no retorno dessa função com ReturnType.
// 10. Tipo Exclude<T, U>
// Crie um union com os tipos "admin" | "editor" | "leitor"
// e depois use Exclude para criar um tipo sem "admin".
