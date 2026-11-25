'use client';

export default function UserProfileTaskPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Coluna Esquerda: Perfil do Usuário */}
        <aside className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 flex flex-col items-center text-center transition-all">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
        <img src="/will%20foto.png"
        alt="Foto do Usuário"
        className="w-full h-full object-cover object-[center_3%]"
        
        />



        </div>
          
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
            WILL 
          </h2>
          
          <span className="inline-block mt-1 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full">
            Desenvolvedor Front-end
          </span>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
            Apaixonado  por criar interfaces limpas, responsivas e intuitivas com Next.js e Tailwind CSS.
          </p>

          <div className="w-full mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-around text-xs text-slate-500 dark:text-slate-400">
            <div>
              <span className="block font-bold text-slate-800 dark:text-slate-200 text-base">
                0
              </span>
              Concluídas
            </div>
            <div className="border-r border-slate-200 dark:border-slate-800"></div>
            <div>
              <span className="block font-bold text-slate-800 dark:text-slate-200 text-base">
                0
              </span>
              Pendentes
            </div>
          </div>
        </aside>

        {/* Área Central / Principal: Gerenciador de Tarefas */}
        <main className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 transition-all">
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
              Minhas Tarefas
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Organize seu dia adicionando e gerenciando suas atividades diárias.
            </p>
          </div>

          {/* Campo Input e Botão */}
          <form className="flex flex-col sm:flex-row gap-3 mb-8">
            <input
              type="text"
              placeholder="Digite uma nova tarefa..."
              className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium text-sm rounded-xl shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Adicionar
            </button>
          </form>

          {/* Lista de Tarefas */}
          <div className="space-y-3">
            <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Nenhuma tarefa cadastrada no momento. Adicione uma acima!
              </p>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}