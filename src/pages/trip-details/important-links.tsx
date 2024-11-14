import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/button'

interface Link {
  title: string
  url: string
}

interface ImportantLinksProps {
  links: Link[]
  onAddLink: () => void
}

export function ImportantLinks({ links, onAddLink }: ImportantLinksProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      {links.length > 0 ? (
        <div className="space-y-5">
          {links.map((link, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <h3 className="font-medium text-zinc-100">{link.title}</h3>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 truncate hover:text-zinc-200"
                >
                  {link.url}
                </a>
              </div>
              <Link2 className="text-zinc-400 size-5 shrink-0" />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-400">Links ainda não foram criados.</p>
      )}

      <Button btnColor="secondary" btnSize="full" onClick={onAddLink}>
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </section>
  )
}
