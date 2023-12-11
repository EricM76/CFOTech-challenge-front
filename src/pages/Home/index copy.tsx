
import { Form, useActionData, useLoaderData } from "react-router-dom";
import { ICharacter as CharacterModel } from "../../interfaces/ICharacter";
import { Character } from "../../components/character";

const Home = () => {

  const characters = useLoaderData() as CharacterModel[];

  const result = useActionData() as  CharacterModel[];

  return (
    <div>
      <header className="flex items-center p-5 bg-white justify-between sticky top-0">

        <h1 className="font-black text-4xl text-blue-900">Personajes</h1>

        <Form className="relative w-72" method="POST" noValidate>
          <input
            type="text"
            placeholder="Buscar personaje..."
            className="w-full p-3 text-gray-700 uppercase border font-bold rounded-md"
            name="keyword"
          />
          <button type="submit" className=" absolute top-3 end-3 border-s ps-2">
            <i className="fa fa-search"></i>
          </button>
        </Form>

      </header>
      
      <section className="p-10">
        <div className="flex justify-between flex-col md:flex-row flex-wrap">
          {result ? (

            result.map((character) => (
              <Character key={character.id} character={character} />
            ))
          ) : (
            characters && characters.map((character) => (
              <Character key={character.id} character={character} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
