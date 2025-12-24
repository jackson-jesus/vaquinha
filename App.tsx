
import React, { useState } from 'react';
import { 
  Heart, 
  Share2, 
  Copy, 
  ExternalLink, 
  CheckCircle2, 
  Eye, 
  Wallet, 
  TrendingUp,
  FileText
} from 'lucide-react';

const App: React.FC = () => {
  const [toast, setToast] = useState<{ message: string; show: boolean }>({
    message: '',
    show: false,
  });

  const pixKey = "81985898200";
  const pageUrl = window.location.href;

  const showToast = (message: string) => {
    setToast({ message, show: true });
    setTimeout(() => setToast({ message: '', show: false }), 3000);
  };

  const copyToClipboard = async (text: string, successMessage: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(successMessage);
    } catch (err) {
      console.error('Falha ao copiar:', err);
      // Fallback para navegadores sem suporte
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showToast(successMessage);
      } catch (e) {
        showToast("Erro ao copiar. Por favor, tente manualmente.");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="min-h-screen pb-12 bg-gray-50 text-gray-900 selection:bg-blue-100">
      {/* Header & Portrait Image */}
      <header className="max-w-4xl mx-auto px-4 pt-12 text-center">
        <div className="relative mb-8 inline-block group">
          <div className="w-48 h-64 md:w-64 md:h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-200 border-4 border-white transition-transform duration-300 group-hover:scale-105">
            <img 
              src="https://picsum.photos/seed/emanuel/400/600" 
              alt="Retrato de Emanuel" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
            <Heart className="w-6 h-6 fill-current" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight">
          Todos pelo Emanuel
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
          Unidos para vencer o glaucoma e preservar a visão de quem amamos.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 mt-12 space-y-12">
        
        {/* About Section */}
        <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6 text-blue-600">
            <Eye className="w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-bold">Minha História</h2>
          </div>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700">
            <p>
              Olá! Meu nome é <strong>Emanuel</strong>. Criei esta vaquinha porque estou enfrentando um momento delicado de saúde. Fui diagnosticado com <strong>glaucoma</strong>, uma doença silenciosa que exige tratamento rigoroso para evitar a perda da visão.
            </p>
            <p>
              Como estou desempregado, não tenho condições de arcar com os custos imediatos que o tratamento exige. Faço o acompanhamento médico pelo SUS (Hospital das Clínicas), mas os insumos e óculos precisam ser comprados à parte.
            </p>
          </div>
        </section>

        {/* Goal Breakdown */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-indigo-600">
              <TrendingUp className="w-6 h-6" />
              Meta: R$ 4.800,00
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              O valor arrecadado será dividido para cobrir duas necessidades urgentes:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold">R$ 1.999</span>
                <div className="text-lg leading-snug">
                  <strong>Óculos de Grau Completo:</strong> Lentes e armação de qualidade superior para garantir conforto visual.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold">R$ 2.800</span>
                <div className="text-lg leading-snug">
                  <strong>Manutenção do Tratamento:</strong> Compra de colírios de alto custo e despesas de transporte para consultas no HC.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900 p-8 rounded-[2rem] text-white flex flex-col justify-center items-center text-center shadow-xl">
            <div className="bg-blue-800 p-4 rounded-full mb-6">
              <Wallet className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Como Ajudar?</h3>
            <p className="text-blue-100 text-lg mb-8">
              Sua doação faz toda a diferença. Copie a chave PIX abaixo ou compartilhe o link desta página.
            </p>
            <div className="flex flex-col gap-4 w-full">
              <button 
                onClick={() => copyToClipboard(pixKey, "Chave PIX copiada, obrigado por ajudar!")}
                className="group flex items-center justify-center gap-3 bg-white text-blue-900 px-8 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all active:scale-95 shadow-md"
              >
                <Copy className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Copiar Chave PIX
              </button>
              <button 
                onClick={() => copyToClipboard(pageUrl, "Link copiado, obrigado por ajudar!")}
                className="group flex items-center justify-center gap-3 bg-blue-800 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all active:scale-95 border border-blue-700 shadow-md"
              >
                <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Divulgar Página
              </button>
            </div>
            <p className="mt-4 text-sm text-blue-300">Chave PIX (Telefone): {pixKey}</p>
          </div>
        </section>

        {/* Exam Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-gray-800">
            <FileText className="w-7 h-7" />
            <h2 className="text-2xl md:text-3xl font-bold">Laudo Médico e Exames</h2>
          </div>
          <div className="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white bg-gray-200">
            <img 
              src="https://picsum.photos/seed/medical-exam/1200/675" 
              alt="Exame oftalmológico do Emanuel" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <p className="text-center text-gray-500 italic text-lg">
            * Imagem ilustrativa que representa a documentação médica apresentada.
          </p>
        </section>

        {/* Transparency / Google Sheets */}
        <section className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Prestação de Contas</h2>
              <p className="text-gray-600 text-lg mt-1">Transparência total com nossos doadores.</p>
            </div>
            <a 
              href="https://docs.google.com/spreadsheets/d/10q0PNQnt_NLTk7gVq6CIVyLprxX-MORhZFi_KTBSI8E/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-lg"
            >
              Abrir em nova aba <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-inner bg-gray-50 h-[500px]">
            <iframe 
              src="https://docs.google.com/spreadsheets/d/10q0PNQnt_NLTk7gVq6CIVyLprxX-MORhZFi_KTBSI8E/preview" 
              className="w-full h-full border-0"
              title="Planilha de Prestação de Contas"
            />
          </div>
        </section>

        {/* Footer Note */}
        <footer className="text-center pt-8 pb-12 space-y-6 border-t border-gray-200">
          <div className="inline-block bg-blue-50 px-6 py-3 rounded-full text-blue-700 font-medium text-lg">
            Muito obrigado por sua solidariedade! 🙏
          </div>
          <div className="text-gray-400 text-base">
            © 2024 - Campanha de Apoio ao Emanuel
          </div>
        </footer>
      </main>

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-green-500">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-bold text-lg whitespace-nowrap">{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
