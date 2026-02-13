import React from 'react';

interface LegalProps {
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Política de Privacidade' : 'Termos de Uso';

  return (
    <div className="animate-fade-in">
       <section className="bg-primary text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading font-bold text-3xl md:text-4xl">{title}</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          {isPrivacy ? (
            <>
              <p>Esta Política de Privacidade descreve como a União Contábil coleta, usa e protege suas informações pessoais.</p>
              <h3>1. Coleta de Informações</h3>
              <p>Coletamos informações que você nos fornece diretamente ao preencher formulários de contato, como nome, e-mail e telefone.</p>
              <h3>2. Uso das Informações</h3>
              <p>Utilizamos seus dados para responder às suas solicitações, fornecer serviços contábeis e enviar comunicações relevantes.</p>
              <h3>3. Proteção de Dados</h3>
              <p>Implementamos medidas de segurança para proteger seus dados contra acesso não autorizado.</p>
              <p className="text-sm text-slate-500 mt-8">Última atualização: {new Date().toLocaleDateString()}</p>
            </>
          ) : (
            <>
              <p>Ao acessar o site da União Contábil, você concorda com estes Termos de Uso.</p>
              <h3>1. Uso do Site</h3>
              <p>O conteúdo deste site é para fins informativos sobre nossos serviços contábeis.</p>
              <h3>2. Propriedade Intelectual</h3>
              <p>Todo o conteúdo, marcas e logos são de propriedade da União Contábil.</p>
              <h3>3. Limitação de Responsabilidade</h3>
              <p>Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso deste site.</p>
              <p className="text-sm text-slate-500 mt-8">Última atualização: {new Date().toLocaleDateString()}</p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Legal;