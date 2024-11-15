import PersonCard from '../persons/person-card'

interface Person {
  image: string
  name: string
  role: string
  size: string
}

interface PersonGridProps {
  people: Person[]
}

function PersonGrid({ people }: PersonGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 max-w-4xl mx-auto">
      {people.map((person, index) => (
        <div
          key={index}
          className={`${index < 2 ? 'col-span-1' : 'sm:col-span-1 col-span-2'}`}
        >
          <PersonCard person={person} />
        </div>
      ))}
    </div>
  )
}

export default PersonGrid
