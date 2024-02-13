import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, nobis. Id fuga, tenetur doloremque praesentium, ab possimus aspernatur rem dignissimos quo doloribus nisi alias explicabo modi delectus ex esse ipsa.'

const note = {
  date: new Date(),
  content: lorem,
}

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />
      <form action="" className="w-full">
        <input
          type="text"
          placeholder="Bueque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard note={note} />
        <NoteCard note={note} />
        <NoteCard note={note} />
        <NoteCard note={note} />
      </div>
    </div>
  )
}
