
'use client';

import { useState } from 'react';

export default function UserProfileTaskPage() {

  // Guardar o texto digitado
  const [novaTarefa, setNovaTarefa] = useState('');

  // Guardar a lista de tarefas
  const [tarefas, setTarefas] = useState([]);

  // Função para adicionar tarefa
  function adicionarTarefa(event) {
    event.preventDefault();

    if (novaTarefa.trim() === '') {
      return;
    }

    const tarefa = {
      id: Date.now(),
      texto: novaTarefa,
      concluida: false
    };

    setTarefas([...tarefas, tarefa]);

    setNovaTarefa('');
  }

  // Função para concluir tarefa
  function concluirTarefa(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  // Função para excluir tarefa
  function excluirTarefa(id) {
    setTarefas(
      tarefas.filter((tarefa) => tarefa.id !== id)
    );
  }

  // Contabilizar tarefas
  const concluidas = tarefas.filter(
    (tarefa) => tarefa.concluida
  ).length;

  const pendentes = tarefas.length - concluidas;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* PERFIL DO USUÁRIO */}
        <aside className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col items-center text-center">

          <div className="relative w-32 h-32 rounded-full overflow-hidden">

            <img
              src="/will%20foto.png"
              alt="Foto do Usuário"
              className="w-full h-full object-cover object-[center_3%]"
            />

          </div>

          <h2 className="text-2xl font-bold mt-3">
            WILL
          </h2>

          <span className="mt-1 px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full">
            Desenvolvedor Front-end
          </span>

          <p className="mt-4 text-sm text-slate-500">
            Apaixonado por criar interfaces limpas, responsivas e intuitivas com Next.js e Tailwind CSS.
          </p>

          {/* CONTADORES */}
          <div className="w-full mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-around text-sm">

            <div>
              <span className="block font-bold text-xl text-green-500">
                {concluidas}
              </span>
              Concluídas
            </div>

            <div>
              <span className="block font-bold text-xl text-orange-500">
                {pendentes}
              </span>
              Pendentes
            </div>

          </div>

        </aside>

        {/* GERENCIADOR DE TAREFAS */}
        <main className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">

          <div className="mb-6">

            <h1 className="text-2xl font-bold">
              Minhas Tarefas
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Organize seu dia adicionando e gerenciando suas atividades.
            </p>

          </div>

          {/* FORMULÁRIO */}
          <form
            onSubmit={adicionarTarefa}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >

            <input
              type="text"
              placeholder="Digite uma nova tarefa..."
              value={novaTarefa}
              onChange={(event) => setNovaTarefa(event.target.value)}
              className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl cursor-pointer"
            >
              + Adicionar
            </button>

          </form>

          {/* LISTA DE TAREFAS */}
          <div className="space-y-3">

            {tarefas.length === 0 ? (

              <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">

                <p className="text-sm text-slate-400">
                  Nenhuma tarefa cadastrada.
                </p>

                <p className="text-xs text-slate-400 mt-2">
                  Adicione uma tarefa acima!
                </p>

              </div>

            ) : (

              tarefas.map((tarefa) => (

                <div
                  key={tarefa.id}
                  className="flex items-center justify-between gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                >

                  <div className="flex items-center gap-3">

                    <input
                      type="checkbox"
                      checked={tarefa.concluida}
                      onChange={() => concluirTarefa(tarefa.id)}
                      className="w-5 h-5 cursor-pointer accent-indigo-600"
                    />

                    <span
                      className={
                        tarefa.concluida
                          ? 'line-through text-slate-400'
                          : 'text-slate-700 dark:text-white'
                      }
                    >
                      {tarefa.texto}
                    </span>

                  </div>

                  <button
                    type="button"
                    onClick={() => excluirTarefa(tarefa.id)}
                    className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                  >
                    Excluir
                  </button>

                </div>

              ))

            )}

          </div>

          {/* LIMPAR CONCLUÍDAS */}
          <button
            type="button"
            onClick={() =>
              setTarefas(tarefas.filter((tarefa) => !tarefa.concluida))
            }
            className="mt-6 text-sm text-red-500 hover:text-red-700 cursor-pointer"
          >
            Limpar concluídas
          </button>

        </main>

      </div>

    </div>
  );
}
