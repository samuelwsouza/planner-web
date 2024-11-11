import { CircleCheck, CircleDashed } from 'lucide-react'

export function Activities() {
  return (
    <section className="space-y-8">
      <div className="space-y-2.5 opacity-60">
        <h2 className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
          <span className="text-xs text-zinc-500">Sábado</span>
        </h2>
        <p className="text-zinc-500 text-sm">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>

      <div className="space-y-2.5 opacity-60">
        <h2 className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </h2>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300" />
          <span className="text-zinc-100">Corrida de Kart</span>
          <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
        </div>
      </div>

      <div className="space-y-2.5 opacity-60">
        <h2 className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 19</span>
          <span className="text-xs text-zinc-500">Segunda-feira</span>
        </h2>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300" />
          <span className="text-zinc-100">Academia em grupo</span>
          <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
        </div>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300" />
          <span className="text-zinc-100">Almoço</span>
          <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
        </div>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300" />
          <span className="text-zinc-100">Gaming session</span>
          <span className="text-zinc-400 text-sm ml-auto">18:00h</span>
        </div>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300" />
          <span className="text-zinc-100">Jantar</span>
          <span className="text-zinc-400 text-sm ml-auto">21:00h</span>
        </div>
      </div>

      <div className="space-y-2.5">
        <h2 className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 20</span>
          <span className="text-xs text-zinc-500">Terça-feira</span>
        </h2>
        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300" />
          <span className="text-zinc-100">Academia em grupo</span>
          <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
        </div>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleDashed className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Almoço</span>
          <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
        </div>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleDashed className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Jantar</span>
          <span className="text-zinc-400 text-sm ml-auto">21:00h</span>
        </div>
      </div>

      <div className="space-y-2.5">
        <h2 className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-400 font-semibold">Dia 21</span>
          <span className="text-xs text-zinc-500">Quarta-feira</span>
        </h2>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleDashed className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Churrasco</span>
          <span className="text-zinc-400 text-sm ml-auto">21:00h</span>
        </div>
      </div>

      <div className="space-y-2.5">
        <h2 className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-400 font-semibold">Dia 22</span>
          <span className="text-xs text-zinc-500">Quinta-feira</span>
        </h2>
        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleDashed className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Academia em grupo</span>
          <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
        </div>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleDashed className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Almoço</span>
          <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
        </div>

        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleDashed className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Jantar</span>
          <span className="text-zinc-400 text-sm ml-auto">21:00h</span>
        </div>
      </div>

      <div className="space-y-2.5">
        <h2 className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 23</span>
          <span className="text-xs text-zinc-500">Sexta-feira</span>
        </h2>
        <p className="text-zinc-500 text-sm">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>
    </section>
  )
}
