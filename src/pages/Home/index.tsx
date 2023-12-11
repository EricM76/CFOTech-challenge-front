
import { Link, useActionData } from "react-router-dom";
import { useState, useEffect, useRef, FormEvent } from 'react';
import { ICharacter } from "../../interfaces/ICharacter";
import { getCharacters, getCharactersByName } from "../../services/characters";
import { Character } from "../../components/character";

const Home = () => {

  const result = useActionData() as ICharacter[];

  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [offset, setOffSet] = useState(0)

  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && hasMore) await getData(offset)
    });

    if (observer && elementRef.current) observer.observe(elementRef.current)

    return () => {
      if (observer) observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters])


  useEffect(() => {
    getData(offset)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const getData = async (offset: number) => {

    const results = await getCharacters(offset)
    if (!results.length) setHasMore(false)
    setCharacters([...characters, ...results])
    setOffSet((offset) => offset + 20)
  }

  const [formValues, setFormValues] = useState<{keyword : string | null}>({
    keyword : null
  })

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValues({
      keyword : e.currentTarget.value,
    })
  }

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
   
    try {

      const result = await getCharactersByName(formValues.keyword as string);
      if(!result) throw new Error('Error en la conexión con la API')
      setCharacters(result)
  
    } catch (error) {
      console.log(error);
      return null
    }
  }



  return (
    <>
      <header className="flex items-center p-5 bg-white justify-between sticky top-0">

        <h1 className="font-black text-4xl text-blue-900">Personajes</h1>

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

      <section className="p-10">
        <div className="flex justify-between flex-col md:flex-row flex-wrap">
          {
            result ? (

              result.map((character) => (
                <Character key={character.id} character={character} />
              ))
            ) : (
              characters.map(({ url_Image, name, id }) => (
                <div key={id} className="border w-full lg:w-[48%] rounded-md shadow-md mb-10" ref={elementRef}>
                  <div className="flex gap-10">
                    <img src={url_Image} alt="" className="w-48 h-48 object-cover" />
                    <div>
                      <h4 className="text-2xl text-gray-800">{name}</h4>
                      <Link to={`/characters/${id}`}>Ver más</Link>
                    </div>

                  </div>

                </div>
              )))
          }
          {hasMore && <p>Cargando...</p>}

        </div>
      </section>
    </>
  );
};

export default Home;
