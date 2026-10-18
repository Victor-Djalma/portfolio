/* Conteúdo centralizado. Campos opcionais null não geram botões ou imagens.
   Use caminhos relativos à raiz do site. Não inclua credenciais ou dados internos. */
window.PORTFOLIO = {
  links: { linkedin: 'https://www.linkedin.com/in/victordjalma', github: 'https://github.com/Victor-Djalma', resume: 'assets/documents/curriculo-victor-djalma.pdf', email: null, phone: null },
  projects: [
    {
      id: 'ensa', icon: 'shield', theme: 'mint', cover: 'assets/projects/ensa-interface.webp', detailCover: true,
      coverAlt: { pt: 'Interface do ENSA para configurar a análise de redes.', en: 'ENSA interface for configuring a network scan.' },
      tags: ['Python', 'Flask', 'Nmap', 'API REST'],
      links: { repository: null, documentation: null },
      pt: {
        category: 'PROJETO ACADÊMICO', title: 'ENSA', subtitle: 'Eyes Network Security Scanner',
        summary: 'Reconhecimento de redes com Python, Flask e Nmap. Portas, serviços e resultados em uma interface web.',
        context: 'Aplicação web acadêmica, também apresentada como ENSA 2.0, voltada à análise de segurança de redes. O objetivo é facilitar o reconhecimento de endereços IP e redes e apoiar a identificação de possíveis pontos de exposição.',
        participation: 'Desenvolvimento de uma aplicação web com API REST em Python e Flask integrada ao Nmap, com apresentação dos resultados em um painel.',
        implementations: ['Integração do Nmap a uma API REST em Python e Flask.', 'Varredura de endereços IP e redes para descoberta de hosts.', 'Identificação de portas abertas e serviços disponíveis.', 'Apresentação dos resultados em uma interface web.'],
        learning: 'Aplicação prática de reconhecimento de redes, integração entre ferramentas de segurança e APIs e organização de resultados para análise. As capturas mostram a configuração de análises, o painel de resultados e um exemplo de relatório; não representam uma auditoria de produção.',
      },
      en: {
        category: 'ACADEMIC PROJECT', title: 'ENSA', subtitle: 'Eyes Network Security Scanner',
        summary: 'Network reconnaissance with Python, Flask and Nmap. Ports, services and results in a web interface.',
        context: 'An academic network security web application, also presented as ENSA 2.0. Its goal is to simplify IP and network reconnaissance and help identify potential points of exposure.',
        participation: 'Development of a web application with a Python and Flask REST API integrated with Nmap, presenting results in a dashboard.',
        implementations: ['Integrated Nmap with a Python and Flask REST API.', 'Scanned IP addresses and networks to discover hosts.', 'Identified open ports and available services.', 'Presented scan results in a web interface.'],
        learning: 'Hands-on experience with network reconnaissance, security tool and API integration, and organizing results for analysis. The screenshots show scan configuration, the results dashboard and a sample report from a lab environment, rather than a production audit.'
      }
    },
    {
      id: 'fortigate', icon: 'network', theme: 'blue', cover: 'assets/projects/fortigate-pnetlab.png', coverFit: 'contain', detailCover: true,
      coverAlt: { pt: 'Topologia do laboratório de redes corporativas com FortiGate no PNetLab.', en: 'Corporate network lab topology with FortiGate in PNetLab.' },
      tags: ['FortiGate', 'PNetLab', 'VLAN', 'IPsec'],
      links: { repository: null, documentation: null },
      pt: {
        category: 'LABORATÓRIO DE REDES', title: 'Projeto de Redes Corporativas com FortiGate (PNetLab)', subtitle: 'Segmentação, controle de tráfego e comunicação segura',
        summary: 'Uma rede corporativa simulada com segmentação, controle de tráfego e comunicação segura entre filiais.',
        context: 'Projeto prático desenvolvido durante o curso técnico em Redes de Computadores, utilizando PNetLab e firewalls FortiGate. O objetivo foi projetar a rede de uma instituição com segmentação e comunicação segura entre duas unidades.',
        participation: 'Construção e configuração de uma infraestrutura de rede corporativa simulada, com foco na segurança e no controle de acesso entre segmentos e filiais.',
        implementations: ['Criação e segmentação de rede com VLANs em Layer 2.', 'Boas práticas em switches: shutdown de portas não utilizadas, organização e descrições.', 'VPN Site-to-Site IPsec entre duas unidades.', 'Políticas de firewall com uso de aliases.', 'Traffic shaping para controle de banda.', 'Regras de NAT com DNAT e Virtual IP.', 'Simulação de autenticação local em políticas de acesso por VLAN.'],
        learning: 'Prática de segmentação, aplicação de políticas de acesso, controle de banda e conectividade segura entre unidades. O laboratório reúne conceitos de redes e segurança de ambientes corporativos em um cenário simulado.'
      },
      en: {
        category: 'NETWORK LAB', title: 'Corporate Networks with FortiGate (PNetLab)', subtitle: 'Segmentation, traffic control and secure communication',
        summary: 'A simulated corporate network with segmentation, traffic control and secure connectivity between branches.',
        context: 'A hands-on project completed during my Computer Networks technical program using PNetLab and FortiGate firewalls. The goal was to design a segmented institutional network with secure communication between two locations.',
        participation: 'Built and configured a simulated corporate network infrastructure, focusing on security and access control between segments and branches.',
        implementations: ['Created Layer 2 VLANs for network segmentation.', 'Applied switch best practices: shut down unused ports and organized port descriptions.', 'Configured a site-to-site IPsec VPN between two locations.', 'Implemented firewall policies using aliases.', 'Configured traffic shaping for bandwidth control.', 'Created NAT rules using DNAT and Virtual IP.', 'Simulated local authentication in VLAN access policies.'],
        learning: 'Hands-on practice with segmentation, access policies, bandwidth control and secure connectivity between locations. The lab brings together networking and corporate security concepts in a simulated environment.'
      }
    },
    {
      id: 'aws-pulse', icon: 'cloud', theme: 'amber', cover: 'assets/projects/aws-pulse-architecture.png', coverFit: 'contain', detailCover: true,
      coverAlt: { pt: 'Diagrama da arquitetura serverless do AWS Pulse.', en: 'AWS Pulse serverless architecture diagram.' },
      tags: ['AWS Lambda', 'CloudWatch', 'EventBridge', 'SNS', 'APIs REST', 'Serverless'],
      links: { repository: 'https://github.com/Victor-Djalma/aws-pulse', documentation: null },
      pt: {
        category: 'PROJETO DE CLOUD', title: 'AWS Pulse', subtitle: 'Serverless Availability & Performance Monitoring',
        summary: 'Monitoramento serverless de disponibilidade e desempenho de serviços web, com métricas e alertas automatizados.',
        context: 'Desenvolvimento do AWS Pulse, uma solução serverless de monitoramento automatizado de disponibilidade e desempenho de APIs e serviços web, utilizando recursos da Amazon Web Services.',
        participation: 'Desenvolvimento da solução com AWS Lambda para verificações periódicas, EventBridge para agendamento, CloudWatch para centralização de métricas e SNS para notificações por e-mail.',
        implementations: ['Verificações periódicas em APIs e serviços web com AWS Lambda.', 'Agendamento das execuções com Amazon EventBridge.', 'Centralização de métricas e acompanhamento da disponibilidade e do desempenho com Amazon CloudWatch.', 'Integração do Amazon SNS para envio de notificações por e-mail.'],
        learning: 'Integração de serviços AWS em uma arquitetura serverless para acompanhar serviços web e identificar possíveis indisponibilidades. O projeto conecta execução, agendamento, métricas e notificações.'
      },
      en: {
        category: 'CLOUD PROJECT', title: 'AWS Pulse', subtitle: 'Serverless Availability & Performance Monitoring',
        summary: 'Serverless availability and performance monitoring for web services, with automated metrics and alerts.',
        context: 'Development of AWS Pulse, a serverless solution for automated availability and performance monitoring of APIs and web services using Amazon Web Services.',
        participation: 'Developed the solution with AWS Lambda for periodic checks, EventBridge for scheduling, CloudWatch for centralized metrics and SNS for email notifications.',
        implementations: ['Ran periodic API and web service checks with AWS Lambda.', 'Scheduled executions with Amazon EventBridge.', 'Centralized metrics and tracked availability and performance with Amazon CloudWatch.', 'Integrated Amazon SNS for email notifications.'],
        learning: 'Integrated AWS services into a serverless architecture to monitor web services and help identify potential outages. The project connects execution, scheduling, metrics and notifications.'
      }
    },
    {
      id: 'n8n-automation', icon: 'code', theme: 'violet', cover: 'assets/projects/n8n-workflow.png', coverFit: 'contain', detailCover: true,
      coverAlt: { pt: 'Fluxo de automação de relatórios com n8n e JavaScript.', en: 'Report automation workflow with n8n and JavaScript.' },
      tags: ['n8n', 'JavaScript', 'Docker', 'Gotenberg', 'HTML'],
      links: { repository: 'https://github.com/Victor-Djalma/N8N-automation-Production-Report', documentation: null },
      pt: {
        category: 'PROJETO EMPRESARIAL', title: 'Automatizando processos com n8n e JavaScript', subtitle: 'Automação de dados e relatórios para uma empresa',
        summary: 'Tratamento e validação de dados de produção do ERP, com relatórios em HTML e conversão automática para PDF.',
        context: 'Solução desenvolvida para uma empresa para automatizar o processamento de dados de produção extraídos de um ERP, utilizando n8n e JavaScript.',
        participation: 'Desenvolvimento do fluxo automatizado de tratamento e validação dos dados, geração de relatórios gerenciais em HTML e conversão para PDF com Gotenberg.',
        implementations: ['Processamento de dados de produção extraídos de um ERP.', 'Tratamento e validação dos dados com n8n e JavaScript.', 'Geração de relatórios gerenciais em HTML.', 'Conversão automática dos relatórios para PDF utilizando Gotenberg.', 'Uso de Docker na solução de automação.'],
        learning: 'Automação de etapas antes manuais e padronização das informações apresentadas nos relatórios. O projeto integra n8n, JavaScript e geração de documentos em um contexto empresarial.'
      },
      en: {
        category: 'BUSINESS PROJECT', title: 'Automating processes with n8n and JavaScript', subtitle: 'Data and report automation for a company',
        summary: 'Processing and validation of ERP production data, with HTML reports and automatic PDF conversion.',
        context: 'A solution developed for a company to automate the processing of production data extracted from an ERP using n8n and JavaScript.',
        participation: 'Developed the automated workflow for data processing and validation, HTML management reports and PDF conversion with Gotenberg.',
        implementations: ['Processed production data extracted from an ERP.', 'Transformed and validated data with n8n and JavaScript.', 'Generated management reports in HTML.', 'Automatically converted reports to PDF with Gotenberg.', 'Used Docker in the automation solution.'],
        learning: 'Automated previously manual steps and standardized the information presented in reports. The project combines n8n, JavaScript and document generation in a business environment.'
      }
    }
  ],
  // Nomes das marcas preservados em ambos os idiomas. null mantém ícone conceitual.
  toolLogos: {
    Nmap: 'assets/tools/nmap.png', FortiGate: 'assets/tools/fortigate.svg',
    pfSense: 'assets/tools/pfsense.svg', Wazuh: 'assets/tools/wazuh.svg',
    Kibana: 'assets/tools/kibana.svg', Grafana: 'assets/tools/grafana-original.svg', Zabbix: 'assets/tools/zabbix-original.svg',
    AWS: 'assets/tools/aws.svg', OCI: 'assets/tools/oci.svg', 'Microsoft Azure': 'assets/tools/azure-original.svg',
    Windows: 'assets/tools/windows.svg', 'Windows Server': 'assets/tools/windows.svg',
    Linux: 'assets/tools/linux.svg', Python: 'assets/tools/python.svg',
    Flask: 'assets/tools/flask.svg', JavaScript: 'assets/tools/javascript.svg',
    PowerShell: 'assets/tools/powershell.svg', n8n: 'assets/tools/n8n.svg',
    KeePass: 'assets/tools/keepass.png',
    'TCP/IP': null, VLANs: null, Switching: null, Routing: null, VPN: null, 'APIs REST': null
  },
  tools: [
    { icon: 'shield', pt: 'Segurança e monitoramento', en: 'Security & monitoring', items: ['Nmap', 'FortiGate', 'pfSense', 'Wazuh', 'Kibana', 'Grafana', 'Zabbix'] },
    { icon: 'cloud', pt: 'Cloud', en: 'Cloud', items: ['AWS', 'OCI', 'Microsoft Azure'] },
    { icon: 'network', pt: 'Infraestrutura e redes', en: 'Infrastructure & networking', items: ['Windows', 'Windows Server', 'Linux', 'TCP/IP', 'VLANs', 'Switching', 'Routing', 'VPN'] },
    { icon: 'code', pt: 'Automação e desenvolvimento', en: 'Automation & development', items: ['Python', 'Flask', 'JavaScript', 'PowerShell', 'APIs REST', 'n8n'] },
    { icon: 'key', pt: 'Gestão de credenciais', en: 'Credential management', items: ['KeePass'] }
  ],
  about: {
    pt: ['Sou graduando em Segurança Cibernética e Técnico em Redes de Computadores. Atuo com infraestrutura corporativa, gestão de credenciais, documentação e automação.', 'Nos meus projetos, exploro inspeção de redes, políticas de firewall e monitoramento na AWS. Tenho interesse em segurança defensiva, análise de vulnerabilidades e segurança em nuvem — áreas em que continuo aprofundando minha prática.'],
    en: ['I am studying Cybersecurity and hold a technical qualification in Computer Networks. My work involves corporate infrastructure, credential management, documentation and automation.', 'Through my projects, I explore network inspection, firewall policies and AWS monitoring. I am interested in defensive security, vulnerability analysis and cloud security, and continue to develop my practical skills in these areas.']
  },
  education: [
    { pt: 'Tecnologia em Segurança Cibernética', en: 'Technology degree in Cybersecurity', school: 'SENAI Paulo Antônio Skaf', period: '2025 — 2026', ongoing: true },
    { pt: 'Técnico em Redes de Computadores', en: 'Technical qualification in Computer Networks', school: 'SENAI Paulo Antônio Skaf', period: '2024 — 2025', ongoing: false }
  ],
  experience: [
    { company: 'LBS Laborasa', logo: 'assets/companies/lbs.webp', initials: 'LBS', current: true,
      pt: { role: 'Técnico de TI · Infraestrutura', period: 'Junho de 2026 — Atual', bullets: ['Implantação do KeePass para gestão de credenciais corporativas e automação de backup com PowerShell.', 'Administração e diagnóstico de redes, switches Dell, roteadores e access points; configuração de balanceamento de links e failover.', 'Manutenção de inventário de ativos, topologia de rede, procedimentos e registros de mudanças.', 'Desenvolvimento de fluxos no n8n com JavaScript para tratar e validar dados do ERP, gerar relatórios em PDF e registrar erros.', 'Suporte a usuários e servidores, com participação na migração do ERP para Windows Server.'] },
      en: { role: 'IT Technician · Infrastructure', period: 'June 2026 — Present', bullets: ['Implemented KeePass for corporate credential management and automated backups with PowerShell.', 'Administered and troubleshot networks, Dell switches, routers and access points; configured link load balancing and failover.', 'Maintained asset inventories, network topology, technical procedures and change logs.', 'Developed n8n workflows with JavaScript to process and validate ERP data, generate PDF reports and log errors.', 'Supported users and servers and contributed to the ERP migration to Windows Server.'] }
    },
    { company: 'CAMP', logo: 'assets/companies/camp.webp', initials: 'CAMP', current: false,
      pt: { role: 'Estagiário de TI', period: 'Fevereiro — Junho de 2026', bullets: ['Help Desk N1, configuração e manutenção de computadores e cabeamento estruturado.', 'Suporte a e-mails institucionais e a sistemas de controle de acesso.'] },
      en: { role: 'IT Intern', period: 'February — June 2026', bullets: ['Provided Level 1 help desk support, computer setup and maintenance, and structured cabling.', 'Supported institutional email and access control systems.'] }
    }
  ],
  certifications: [
    { name: 'AWS Certified Cloud Practitioner', institution: 'Amazon Web Services', short: 'AWS', color: 'amber', image: 'assets/certifications/aws-cloud-practitioner.png', date: null, url: 'https://www.credly.com/badges/b186748c-5707-4bdb-90c0-191777bb4e02/public_url' },
    { name: 'Fortinet NSE 3 Certified in Cybersecurity', institution: 'Fortinet', short: 'FT', color: 'blue', image: 'assets/certifications/fortinet-nse-3.png', date: null, url: 'https://www.credly.com/badges/3a2fa7e5-3d92-44c9-b98e-9bee899ab87e/linked_in_profile' },
    { name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate', institution: 'Oracle', short: 'OCI', color: 'coral', image: 'assets/certifications/oracle-oci-foundations-2025.png', date: null, url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=0A036DB3AC08999A075F5E779CD5A6711907D11B504F0739075E4C86D861D7EE' },
    { name: 'Segurança em Linux', institution: 'IBSec', short: 'IB', color: 'mint', image: 'assets/certifications/ibsec-seguranca-linux.png', date: null, url: 'https://lp.ibsec.com.br/certificados/public/consulta/certs/index.php?id=4ae7e447dd04d669' }
  ]
};

window.TRANSLATIONS = {
  pt: {
    skip: 'Pular para o conteúdo', projects: 'Projetos', tools: 'Ferramentas', about: 'Sobre', experience: 'Experiência', certifications: 'Certificações',
    heroLabel: 'SEGURANÇA POR PRINCÍPIO. EVOLUÇÃO NA PRÁTICA.', role: 'Cibersegurança,<br>Infraestrutura e <span>Cloud</span>',
    heroDescription: 'Da infraestrutura à segurança em nuvem, construo minha trajetória conectando conhecimento técnico e projetos práticos.',
    explore: 'Explorar projetos', resume: 'Currículo', portraitLabel: 'CONECTANDO REDES. PROTEGENDO POSSIBILIDADES.', focus: 'FOCO EM SEGURANÇA DEFENSIVA, REDES E NUVEM',
    projectsLabel: '01 / DA TEORIA À PRÁTICA', featured: 'Projetos em destaque<span>.</span>', projectsIntro: 'Laboratórios e aplicações que traduzem<br>aprendizado em soluções.',
    toolsLabel: '02 / MINHA CAIXA DE FERRAMENTAS', toolsTitle: 'Tecnologias & ferramentas<span>.</span>',
    aboutLabel: '03 / ALÉM DAS CONFIGURAÇÕES', aboutTitle: 'Aprender. Construir.<br><span>Proteger.</span>', education: 'Formação acadêmica', ongoing: 'Em andamento',
    experienceLabel: '04 / EXPERIÊNCIA NO DIA A DIA', experienceTitle: 'Trajetória profissional<span>.</span>', current: 'ATUAL',
    certificationsLabel: '05 / CONHECIMENTO EM EVOLUÇÃO', certificationsTitle: 'Principais certificações<span>.</span>',
    contactLabel: '06 / PRÓXIMAS CONEXÕES', contactTitle: 'Vamos nos conectar<span>?</span>', contactDescription: 'Para conversar sobre segurança, tecnologia e oportunidades, me encontre por aqui.',
    backTop: 'Voltar ao topo ↑', projectDetails: 'PROJETO EM DETALHES', view: 'Ver projeto', conceptCover: 'CAPA ILUSTRATIVA', screenshot: 'INTERFACE DO PROJETO', projectImage: 'IMAGEM DO PROJETO',
    context: 'Contexto e objetivo', participation: 'Minha participação', technologies: 'Tecnologias utilizadas', implementations: 'O que foi implementado', learning: 'Aprendizados e resultados',
    close: 'Fechar projeto', nav: 'Navegação principal', repository: 'Ver no GitHub', documentation: 'Documentação', enlarge: 'Ampliar imagem', imagePreview: 'Visualização da imagem', closeImage: 'Fechar imagem', actualSize: 'Tamanho original', fitImage: 'Ajustar à tela', imageError: 'Não foi possível carregar a imagem.', validate: 'Validar certificação', credentialDestination: 'Abrir credencial pública em', newTab: 'nova aba',
    title: 'Victor Djalma | Cibersegurança, Infraestrutura e Cloud', description: 'Portfólio de Victor Djalma: projetos de cibersegurança, infraestrutura de redes, automação e cloud.'
  },
  en: {
    skip: 'Skip to content', projects: 'Projects', tools: 'Tools', about: 'About', experience: 'Experience', certifications: 'Certifications',
    heroLabel: 'SECURITY BY PRINCIPLE. PROGRESS THROUGH PRACTICE.', role: 'Cybersecurity,<br>Infrastructure & <span>Cloud</span>',
    heroDescription: 'From infrastructure to cloud security, I am building my career by connecting technical knowledge with hands-on projects.',
    explore: 'Explore projects', resume: 'Résumé', portraitLabel: 'CONNECTING NETWORKS. PROTECTING POSSIBILITIES.', focus: 'FOCUSED ON DEFENSIVE SECURITY, NETWORKS & CLOUD',
    projectsLabel: '01 / FROM THEORY TO PRACTICE', featured: 'Selected projects<span>.</span>', projectsIntro: 'Labs and applications that turn<br>learning into solutions.',
    toolsLabel: '02 / MY TOOLBOX', toolsTitle: 'Technologies & tools<span>.</span>',
    aboutLabel: '03 / BEYOND CONFIGURATION', aboutTitle: 'Learn. Build.<br><span>Protect.</span>', education: 'Education', ongoing: 'In progress',
    experienceLabel: '04 / EVERYDAY EXPERIENCE', experienceTitle: 'Professional journey<span>.</span>', current: 'CURRENT',
    certificationsLabel: '05 / KNOWLEDGE IN PROGRESS', certificationsTitle: 'Key certifications<span>.</span>',
    contactLabel: '06 / NEW CONNECTIONS', contactTitle: 'Let’s connect<span>.</span>', contactDescription: 'Find me here to talk about security, technology and opportunities.',
    backTop: 'Back to top ↑', projectDetails: 'PROJECT DETAILS', view: 'View project', conceptCover: 'ILLUSTRATIVE COVER', screenshot: 'PROJECT INTERFACE', projectImage: 'PROJECT IMAGE',
    context: 'Context & objective', participation: 'My contribution', technologies: 'Technologies', implementations: 'Implementation', learning: 'Learning & outcomes',
    close: 'Close project', nav: 'Main navigation', repository: 'View on GitHub', documentation: 'Documentation', enlarge: 'Enlarge image', imagePreview: 'Image preview', closeImage: 'Close image', actualSize: 'Original size', fitImage: 'Fit to screen', imageError: 'The image could not be loaded.', validate: 'Verify certification', credentialDestination: 'Open public credential on', newTab: 'new tab',
    title: 'Victor Djalma | Cybersecurity, Infrastructure & Cloud', description: 'Victor Djalma’s portfolio: cybersecurity, network infrastructure, automation and cloud projects.'
  }
};
