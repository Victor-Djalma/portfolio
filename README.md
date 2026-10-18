# Victor Djalma — Portfólio profissional

Portfólio profissional de **Victor Djalma Souza Andrade**, com projetos de cibersegurança, infraestrutura, cloud e automação, trajetória profissional e certificações.

Site estático em HTML, CSS e JavaScript, sem backend, dependências ou etapa de build. Inclui português e inglês, imagens locais, lightbox acessível e currículo original em PDF. O `index.html` está na raiz e os caminhos relativos funcionam tanto na raiz de um domínio quanto no subdiretório de um repositório. A hospedagem no GitHub Pages é configurada separadamente pelo titular.

Repositório: [Victor-Djalma/portfolio](https://github.com/Victor-Djalma/portfolio). Branch principal: `main`.

## Executar e revisar

Abra `index.html` no navegador ou use um servidor estático de sua preferência, como o Live Server do VS Code, apontando para a pasta do projeto. Com Python instalado, execute `python -m http.server 8000` nessa pasta e acesse o endereço local indicado pelo terminal. Encerre com `Ctrl+C`. Nenhum endereço de desenvolvimento é necessário nos arquivos do site. A persistência de idioma usa localStorage; em navegadores que bloqueiam armazenamento, a alternância continua funcional durante a visita.

## Organização

```text
index.html                Estrutura, navegação e metadados
styles.css                Tema, layout responsivo e redução de movimento
data.js                   Conteúdo PT/EN, links e caminhos de imagens
app.js                    Renderização, idioma e modais acessíveis
.nojekyll                 Desativa o processamento Jekyll no GitHub Pages
.gitignore                Exclui temporários, caches e configurações privadas
.gitattributes            Padroniza texto e preserva arquivos binários
assets/
  favicon.svg
  profile.webp
  documents/
    curriculo-victor-djalma.pdf  PDF original enviado pelo titular
  companies/              Logos CAMP e LBS fornecidos
  projects/               Imagens ENSA, FortiGate, AWS Pulse e n8n fornecidas
  tools/                  Logos locais, fontes e atribuições
  certifications/         Badges e certificado fornecidos pelo titular
```

Os arquivos locais de verificação ficam em `.qa/`, ignorada pelo Git. Não são necessários para executar ou publicar o site. As referências visuais do portfólio de Lucas não foram incorporadas ao conteúdo ou aos arquivos públicos.

## Editar textos e links

Edite `data.js`. `PORTFOLIO` contém projetos, ferramentas, experiências, formação e certificações. Os blocos `pt` e `en` contêm as duas versões do conteúdo. `TRANSLATIONS` contém os textos de interface. Os links gerais estão em `PORTFOLIO.links`; os endereços sociais e o PDF no HTML também oferecem acesso básico sem JavaScript e são atualizados pelos dados quando o JavaScript é executado.

Use `null` para campos opcionais ainda não fornecidos. Não use `#` como endereço de repositório, publicação ou validação. Links externos são renderizados com `noopener noreferrer`.

O botão do currículo aponta para `assets/documents/curriculo-victor-djalma.pdf`, cópia exata do PDF original solicitado pelo titular, sem alterações. O arquivo abre em nova aba e permanece em português ao alternar o site para inglês. E-mail e telefone continuam omitidos dos textos da página; o PDF mantém o conteúdo do documento original.

## Editar projetos e imagens principais

Copie um objeto de `PORTFOLIO.projects`, use um `id` único e preencha `pt`, `en` e `tags`. `category` diferencia projeto acadêmico, laboratório ou outro contexto comprovado. Campos dos detalhes: `context`, `participation`, `implementations` (lista) e `learning`.

```javascript
cover: 'assets/projects/meu-projeto.webp', // null exibe capa gráfica
coverFit: 'contain', // preserva o diagrama inteiro no card
detailCover: true, // também exibe a capa completa nos detalhes
coverAlt: { pt: 'Descrição da imagem.', en: 'Image description.' },
links: {
  repository: null,    // URL exata do repositório; null oculta o botão
  documentation: null
}
```

O botão **Ver projeto** abre os detalhes locais e sempre funciona. **Ver no GitHub / View on GitHub** aparece no card e nos detalhes apenas com `repository` preenchido. O projeto continua visível sem repositório. A documentação é opcional. Links do LinkedIn não são exibidos nos projetos; o perfil continua apenas nos acessos gerais de contato. Não use URLs de edição de projetos no LinkedIn.

Todos os blocos de evidências foram removidos, incluindo imagens secundárias, legendas, títulos e links associados. Cada projeto mantém a capa e sua imagem principal válida nos detalhes. Não adicione avisos ou espaços de galeria pendente. Imagens ausentes usam a capa gráfica quando `cover` for `null`.

As imagens principais são a interface ENSA, a nova topologia PNetLab de 864 × 444 px, a arquitetura AWS Pulse e o fluxo n8n. As capas e imagens principais abrem em um lightbox interno, sem navegar para outro endereço. O botão de fechar e a tecla Escape encerram a ampliação e devolvem o foco à imagem que a abriu. Se a imagem foi aberta nos detalhes de um projeto, o projeto permanece aberto. O modo de tamanho original permite rolar diagramas largos no celular; o modo ajustado mostra a imagem inteira sem cortes.

Para substituir imagens, preserve a resolução original de capturas e diagramas. Use caminhos relativos, sem `/` inicial e com a mesma capitalização dos arquivos. Não substitua os arquivos por capturas da página do portfólio.

## Foto, logos e certificações

- Foto: substitua `assets/profile.webp` ou altere o caminho em `index.html`. O texto alternativo identifica Victor Djalma.
- Empresas: edite `logo` em cada objeto de `PORTFOLIO.experience`. Os logos ficam no próprio card, com fundo branco e `object-fit: contain`; `logo: null` exibe as iniciais.
- Ferramentas: os caminhos em `PORTFOLIO.toolLogos` apontam para arquivos locais em `assets/tools/`. Os grupos e os nomes continuam em `PORTFOLIO.tools`. Use `null` para conceitos sem logo oficial, como TCP/IP, VLANs, switching, routing, VPN e APIs REST. Os logos mantêm as cores de origem; fundos claros dão contraste às versões com traços pretos. As fontes e atribuições estão em `assets/tools/README.md` e `sources.json`.
- Certificações: edite `PORTFOLIO.certifications`. `image`, `date` e `url` são opcionais. Os quatro arquivos fornecidos estão em `assets/certifications/`, sem cortes ou deformação. O certificado Oracle retangular é exibido por inteiro. Cada card com `url` válida é um link para a credencial em nova aba, com foco visível e destino acessível em PT-BR/EN. Sem `url`, o card é estático; sem `image`, mantém o marcador de sigla. Preserve os nomes oficiais das credenciais nos dois idiomas.
- Currículo: o caminho está em `PORTFOLIO.links.resume` e no link HTML de fallback. Substitua `assets/documents/curriculo-victor-djalma.pdf` apenas pelo documento que deseja disponibilizar.

## Publicar no GitHub Pages

1. Crie um repositório na sua conta GitHub. Um repositório público é a opção mais simples para GitHub Pages.
2. Envie `index.html`, `styles.css`, `data.js`, `app.js`, `README.md`, `.gitignore`, `.nojekyll` e toda a pasta `assets` para a raiz. Não envie `.qa/`, `tmp/`, arquivos originais com contatos privados ou materiais de referência.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, a branch `main` e a pasta **/ (root)**. Salve.
5. Quando a publicação terminar, abra o endereço exibido pelo próprio GitHub. Um repositório de projeto costuma ser servido no formato `https://Victor-Djalma.github.io/NOME-DO-REPOSITORIO/`. O repositório especial `Victor-Djalma.github.io` é servido na raiz do domínio.
6. Confira foto, PDF, galerias, links e troca de idioma no endereço publicado. Novos commits na branch escolhida atualizam o site.

Todos os caminhos de arquivos são relativos, permitindo os dois formatos de URL. Não é necessário configurar API, servidor, formulário ou segredo de implantação.

## Comportamentos para revisão

- Português inicial e inglês com persistência da preferência; `lang`, título e descrição da página acompanham a seleção.
- Troca de idioma preserva a seção; o seletor no modal mantém o projeto aberto.
- Modal com título acessível, foco contido, fechamento pelo botão, Escape ou fundo e retorno ao botão de origem.
- Foco visível, link para pular a navegação e respeito a `prefers-reduced-motion`.
- Imagens locais otimizadas, carregamento adiado fora da apresentação e navegação adaptada ao celular.
- Certificações com imagens e links específicos fornecidos pelo titular; campos opcionais vazios não criam ações fictícias.

Verificação realizada em 18/10/2026 no Microsoft Edge: navegação em português e inglês, quatro projetos, lightbox por clique e teclado, fechamento por Escape e retorno de foco, 19 logos de tecnologias, quatro imagens de certificação e PDF original com resposta `application/pdf`. Os layouts foram conferidos de 320 a 1440 px, servindo a mesma versão na raiz e em `/portfolio/`, sem erros de console ou arquivos ausentes.

Para repetir a revisão antes de ativar o Pages, abra cada projeto, amplie sua imagem, alterne o idioma e teste o currículo. Confira também os links das credenciais e dos dois repositórios; apenas AWS Pulse e n8n têm botão de GitHub. O envio do código não ativa a hospedagem automaticamente.

## Materiais que podem completar o portfólio

- Novas imagens principais identificadas dos projetos, caso queira substituí-las.
- Repositório do ENSA e documentação específica dos projetos, caso disponíveis. FortiGate foi informado como projeto sem GitHub; AWS Pulse e n8n já possuem os repositórios enviados.
- Datas das certificações, se desejar exibi-las; os quatro arquivos e links já foram incorporados.
- E-mail e/ou telefone que deseja disponibilizar publicamente, caso queira acrescentá-los.

As informações profissionais refletem o currículo e as descrições fornecidas em outubro de 2026. Atualize formação, cargo e períodos conforme sua trajetória evoluir.
