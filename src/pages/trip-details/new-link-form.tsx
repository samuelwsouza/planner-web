import { useState } from 'react'
import { Button } from '../../components/button'
import { InfoIcon, LinkIcon, X } from 'lucide-react'

interface Link {
  title: string
  url: string
}

interface NewLinkFormProps {
  onAdd: (link: Link) => void
  onClose: () => void
  closeCreateModal: () => void
}

export function NewLinkForm({
  onAdd,
  onClose,
  closeCreateModal,
}: NewLinkFormProps) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd({ title, url })
    onClose()
  }

  return (
    <div className="bg-black/60 fixed inset-0 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button onClick={closeCreateModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <LinkIcon className="size-5 text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Título do Link"
              required
            />
          </div>

          <div className="h-14 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <InfoIcon className="size-5 text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="URL do Link"
              required
            />
          </div>

          <Button type="submit" btnSize="full">
            Adicionar link
          </Button>
        </form>
      </div>
    </div>

    // <form onSubmit={handleSubmit} className="space-y-4">
    //   <input
    //     type="text"
    //     value={title}
    //     onChange={e => setTitle(e.target.value)}
    //     placeholder="Título do Link"
    //     required
    //     className="input-field"
    //   />

    //   <input
    //     type="url"
    //     value={url}
    //     onChange={e => setUrl(e.target.value)}
    //     placeholder="URL do Link"
    //     required
    //     className="input-field"
    //   />

    //   <button type="submit" className="btn-primary">
    //     Adicionar Link
    //   </button>
    // </form>
  )
}
