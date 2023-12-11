import { FormEvent, useState } from 'react'

export const Header = ({setCharacters}) => {

  const [formValues, setFormValues] = useState({
    keyword : ""
  })

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValues({
      keyword : e.currentTarget.value,
    })
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
   
    setCharacters()
  }

  return (
    <header className="flex items-center p-5 bg-white justify-between sticky top-0">

    <h1 className="font-black text-4xl text-blue-900">{title}</h1>

    <form className="relative w-72" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar personaje..."
        className="w-full p-3 text-gray-700 uppercase border font-bold rounded-md"
        name="keyword"
        onChange={handleInputChange}
      />
      <button type="submit" className=" absolute top-3 end-3 border-s ps-2">
        <i className="fa fa-search"></i>
      </button>
    </form>

  </header>
  )
}
