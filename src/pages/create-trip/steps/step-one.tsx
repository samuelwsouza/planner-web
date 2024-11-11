import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import { useState } from 'react'
// biome-ignore lint/style/useImportType: <explanation>
import { DateRange, DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Button } from '../../../components/button'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface StepOneProps {
  isInputOpen: boolean
  closeInput: () => void
  openInput: () => void
  setDestination: (destination: string) => void
  setEventRange: (dates: DateRange | undefined) => void
  eventRange: DateRange | undefined
}

export function StepOne({
  closeInput,
  eventRange,
  isInputOpen,
  openInput,
  setDestination,
  setEventRange,
}: StepOneProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate =
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    eventRange && eventRange.from && eventRange.to
      ? format(eventRange.from, "d' de ' LLL", { locale: ptBR })
          .concat(' até ')
          .concat(format(eventRange.to, "d' de ' LLL", { locale: ptBR }))
      : null

  return (
    <div className="h-16 w-[45rem] bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isInputOpen}
          placeholder="Para onde você vai?"
          type="text"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-100"
          onChange={event => setDestination(event.target.value)}
        />
      </div>
      <button
        disabled={isInputOpen}
        onClick={openDatePicker}
        type="button"
        className="flex items-center gap-2 outline-none text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 min-w-30 flex-1">
          {displayedDate || 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="bg-black/60 fixed inset-0 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg text-zinc-100 font-semibold">
                  Selecione a data
                </h2>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventRange}
              onSelect={setEventRange}
              className="text-zinc-100"
            />
          </div>
        </div>
      )}

      <hr className="line-v" />
      {isInputOpen ? (
        <Button btnColor="secondary" onClick={closeInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
