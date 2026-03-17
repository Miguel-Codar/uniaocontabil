export const WHATSAPP_NUMBER = "5521998089980";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const COMPANY_INFO = {
  name: "União Contábil",
  address: "Rua Doutor Borman, N•23 sala 307, Centro, Niterói, RJ",
  email: "contato@uniaocontabil.com.br",
  phone: "(21) 99808-9980",
  years: 15,
  clients: 500,
  satisfaction: 98
};

export const SERVICES = [
  {
    id: "assessoria-contabil",
    title: "Assessoria Contábil Completa",
    description: "Gestão contábil, fiscal e legal integrada, garantindo conformidade com a legislação e suporte à tomada de decisões.",
    icon: "BookOpen",
    details: {
      target: ["MEI", "Simples Nacional", "Lucro Presumido", "Lucro Real"],
      deliverables: ["Balanços e Balancetes", "Escrituração Contábil", "Relatórios Gerenciais", "Conformidade Legal"],
      steps: ["Diagnóstico inicial da situação atual", "Organização e processamento mensal", "Entrega de relatórios estratégicos"]
    }
  },
  {
    id: "planejamento-tributario",
    title: "Planejamento Tributário",
    description: "Análise estratégica do enquadramento tributário com foco em economia legal de impostos e redução de riscos.",
    icon: "PieChart",
    details: {
      target: ["Empresas em crescimento", "Mudança de faturamento", "Novos negócios"],
      deliverables: ["Estudo de Enquadramento", "Simulações de Cenários", "Recuperação de Créditos", "Cronograma Fiscal"],
      steps: ["Análise do histórico financeiro", "Simulação nos regimes tributários", "Definição da melhor estratégia"]
    }
  },
  {
    id: "assessoria-fiscal-tributaria",
    title: "Assessoria Fiscal e Tributária",
    description: "Apuração de impostos e entrega de obrigações acessórias, evitando multas e inconsistências fiscais.",
    icon: "FileCheck",
    details: {
      target: ["Todos os regimes tributários"],
      deliverables: ["Apuração de ICMS, IPI, ISS", "Entrega de SPED", "Gestão de NFs", "Suporte em Fiscalizações"],
      steps: ["Recebimento da documentação", "Apuração e validação", "Emissão de guias e declarações"]
    }
  },
  {
    id: "departamento-pessoal",
    title: "Departamento Pessoal",
    description: "Gestão completa de admissões, demissões, folha, encargos trabalhistas e obrigações previdenciárias.",
    icon: "Users",
    details: {
      target: ["Empresas com funcionários", "Contratação PJ"],
      deliverables: ["Folha de Pagamento", "eSocial", "Férias e 13º", "Rescisões e Homologações"],
      steps: ["Alinhamento de rotinas mensais", "Processamento da folha", "Envio de guias e holerites"]
    }
  },
  {
    id: "abertura-regularizacao",
    title: "Abertura e Regularização",
    description: "Suporte completo na constituição, alteração e regularização de empresas, com segurança jurídica.",
    icon: "Building2",
    details: {
      target: ["Empreendedores", "Startups", "Filiais"],
      deliverables: ["Contrato Social", "CNPJ e Inscrições", "Alvarás e Licenças", "Certificados Digitais"],
      steps: ["Definição da natureza jurídica", "Processo na Junta Comercial", "Habilitação nos órgãos públicos"]
    }
  },
  {
    id: "consultoria-financeira",
    title: "Consultoria Financeira",
    description: "Apoio estratégico na organização financeira, análise de indicadores e orientação para decisões sustentáveis.",
    icon: "TrendingUp",
    details: {
      target: ["Pequenas e Médias Empresas", "Empresas em reestruturação"],
      deliverables: ["BPO Financeiro", "Fluxo de Caixa", "Gestão de Custos", "KPIs Financeiros"],
      steps: ["Mapeamento de processos", "Implementação de ferramentas", "Acompanhamento mensal de resultados"]
    }
  }
];

export const SEGMENTS = [
  "Comércio em geral",
  "Prestadores de serviços",
  "Indústrias",
  "Simples Nacional",
  "Lucro Presumido",
  "Lucro Real"
];

export const FAQS = [
  {
    q: "Como funciona a migração de contabilidade?",
    a: "O processo é simples e seguro. Nós cuidamos de toda a comunicação com seu contador anterior, solicitamos a documentação necessária e realizamos a transição sem interromper suas operações."
  },
  {
    q: "Vocês atendem empresas de todo o Brasil?",
    a: "Sim, através de nossa plataforma digital e atendimento consultivo remoto, conseguimos atender empresas em todo o território nacional com a mesma qualidade."
  },
  {
    q: "Quais documentos preciso para abrir uma empresa?",
    a: "Basicamente RG, CPF, Comprovante de Endereço e Espelho do IPTU do imóvel comercial. Nós orientamos sobre toda a documentação específica dependendo da sua atividade."
  },
  {
    q: "Qual o melhor regime: Simples, Presumido ou Real?",
    a: "Não existe uma resposta única. Depende do faturamento, folha de pagamento e margem de lucro. Realizamos um estudo tributário personalizado para definir a opção mais econômica para você."
  },
  {
    q: "Como é a rotina de entregas e atendimento?",
    a: "Trabalhamos com calendários claros de entrega. Você recebe guias e relatórios por e-mail/plataforma e temos um time disponível no WhatsApp para dúvidas rápidas e reuniões agendadas."
  },
  {
    q: "Como vocês ajudam a reduzir riscos fiscais?",
    a: "Através de auditoria constante das obrigações acessórias, cruzamento de dados fiscais e acompanhamento proativo da legislação para aplicar benefícios legais."
  }
];
