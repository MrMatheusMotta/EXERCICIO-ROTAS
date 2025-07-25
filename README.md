Projeto Angular: Vitrine de Produtos com Autenticação Simples
Este projeto é uma aplicação web desenvolvida em Angular que simula uma vitrine de produtos de consoles de videogame, incluindo um sistema de autenticação básico para acesso a uma área restrita.

Funcionalidades
Vitrine de Produtos: Exibe uma lista de consoles de videogame com foto, rótulo e detalhes.

Navegação: Menu de navegação simples para as páginas Home, Sobre, Serviços, Contato, Login e Painel de Controle.

Autenticação de Usuário:

Página de login (/painel) com validação de credenciais (usuário: adm, senha: 123).

Persistência de login via localStorage (o usuário permanece logado mesmo após o refresh da página).

Funcionalidade de logout.

Rota Protegida: A rota /painel-controle é protegida por um AuthGuard, exigindo que o usuário esteja autenticado para acessá-la.

Serviços: Utiliza serviços Angular para gerenciar a autenticação (AuthService) e fornecer os dados dos produtos (ProdutosServiceService).

Componentes Reutilizáveis: Possui um componente de rodapé (RodapeComponent) para informações institucionais.

Tecnologias Utilizadas
Angular: Framework para construção de aplicações web.

TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.

HTML5: Linguagem de marcação para a estrutura das páginas.

CSS3: Para estilização e layout dos componentes.

RxJS: Biblioteca para programação reativa, utilizada no AuthService para gerenciar o estado de autenticação.

Configuração e Execução
Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

Node.js: Versão LTS recomendada.

npm (Node Package Manager) ou Yarn: Gerenciadores de pacotes que vêm com o Node.js.

Angular CLI: Ferramenta de linha de comando do Angular. Se não tiver, instale-o globalmente:

npm install -g @angular/cli

Passos para Executar o Projeto
Clone o Repositório:

git clone <URL_DO_SEU_REPOSITORIO>
cd <nome-da-pasta-do-projeto>

(Substitua <URL_DO_SEU_REPOSITORIO> e <nome-da-pasta-do-projeto> pelos valores corretos do seu projeto.)

Instale as Dependências:
Navegue até o diretório do projeto e instale todas as dependências necessárias:

npm install
# ou
yarn install

Execute a Aplicação:
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

ng serve --open

Este comando compilará a aplicação e a abrirá automaticamente no seu navegador padrão em http://localhost:4200/.

Estrutura do Projeto (Principais Arquivos)
src/app/: Contém a lógica principal da aplicação.

app.component.html: O template principal da aplicação, contendo o cabeçalho de navegação, o <router-outlet> e o rodapé.

app.config.ts: Configuração da aplicação Angular, incluindo o provedor de rotas.

app.routes.ts: Define as rotas da aplicação, incluindo a rota protegida e o AuthGuard.

auth/: Pasta para os componentes e serviços de autenticação.

auth.guard.ts: Guard de rota que verifica se o usuário está autenticado antes de ativar uma rota.

auth.service.ts: Serviço responsável pela lógica de login, logout e gerenciamento do estado de autenticação.

painel/painel.component.ts: Componente da página de login.

painel-controle/painel-controle.component.ts: Componente da área restrita (painel de controle).

home/home.component.ts: Componente da página inicial, onde os produtos são exibidos.

service/produtos-service.service.ts: Serviço que fornece os dados estáticos dos produtos.

rodape/rodape.component.ts: Componente do rodapé da aplicação.

sobre/sobre.component.ts, servico/servico.component.ts, contato/contato.component.ts: Componentes de páginas básicas (Sobre, Serviços, Contato).

Como Usar
Navegação: Use o menu superior para navegar entre as páginas.

Login:

Acesse a rota /painel (ou clique em "Login" no menu).

Use as credenciais: Usuário: adm, Senha: 123.

Após o login, você será redirecionado para a página inicial. O estado de login é persistido.

Painel de Controle (Área Restrita):

Acesse a rota /painel-controle (ou clique em "Painel de Controle" no menu).

Se você não estiver logado, o AuthGuard o redirecionará para a página de login.

Se estiver logado, você terá acesso ao conteúdo do painel de controle.

Logout:

Atualmente, o logout não tem um botão explícito no cabeçalho, mas a funcionalidade existe no AuthService. Você pode implementá-lo em um componente (por exemplo, no PainelControleComponent ou no cabeçalho quando o usuário estiver logado).

Melhorias Futuras (Sugestões)
Implementar um botão de Logout: Adicionar um botão de logout visível no cabeçalho ou na área restrita quando o usuário estiver logado.

Formulário de Login: Usar Reactive Forms ou Template-driven Forms para uma validação de formulário mais robusta no componente de login.

Estilização: Aprimorar o design e a responsividade da aplicação.

Dados Dinâmicos: Conectar o serviço de produtos a uma API real (backend) para carregar produtos de forma dinâmica.

Cadastro de Usuários: Adicionar funcionalidade de cadastro e um sistema de autenticação mais completo (ex: Firebase Authentication, JWT).

Mensagens de Erro: Exibir mensagens de erro mais amigáveis ao usuário no formulário de login.

Página de Erro 404: Implementar uma rota curinga para lidar com URLs não encontradas.

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
