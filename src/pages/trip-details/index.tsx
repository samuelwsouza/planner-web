import { Plus } from 'lucide-react'
import { Button } from '../../components/button'
import { Header } from './header'
import { useState } from 'react'
import { Activities } from './activities'
import { ImportantLinks } from './important-links'
import { Invited } from './invited'
import { ActivityModal } from './activity-modal'
import { NewLinkForm } from './new-link-form'

interface Link {
  title: string
  url: string
}

export function TripDetailsPage() {
  const [links, setLinks] = useState<Link[]>([
    {
      title: 'Reserva do AirBnb',
      url: 'https://www.airbnb.com.br/rooms/104700011',
    },
  ])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false)

  const addLink = (newLink: Link) => {
    setLinks([...links, newLink])
  }

  function openCreateModal() {
    setIsCreateModalOpen(true)
  }

  function closeCreateModal() {
    setIsCreateModalOpen(false)
  }

  function openLinkModal() {
    setIsLinkModalOpen(true)
  }

  function closeLinkModal() {
    setIsLinkModalOpen(false)
  }

  return (
    <div className="dark:bg-neutral-950 dark:text-zinc-50">
      <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
        <Header />

        <main className="flex gap-16 px-4">
          <section className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-semibold">Atividades</h1>

              <Button onClick={openCreateModal}>
                <Plus className="size-5" />
                Cadastrar atividade
              </Button>
            </div>

            <Activities />
          </section>
          <aside className="w-80 space-y-6">
            <ImportantLinks links={links} onAddLink={openLinkModal} />

            <hr className="line-h" />
            <Invited />
          </aside>
        </main>

        {isCreateModalOpen && (
          <ActivityModal closeCreateModal={closeCreateModal} />
        )}

        {isLinkModalOpen && (
          <div className="modal-background">
            <NewLinkForm
              onAdd={(newLink: Link) => {
                addLink(newLink)
                closeLinkModal()
              }}
              onClose={closeLinkModal}
              closeCreateModal={closeCreateModal}
            />
          </div>
        )}
      </div>
    </div>
  )
}
