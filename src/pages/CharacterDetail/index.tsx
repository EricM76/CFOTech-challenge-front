import { useLoaderData } from "react-router-dom";
import { Header } from "../../components/header";
import { ICharacter } from "../../interfaces/ICharacter";

export const CharacterDetail = () => {

    const {url_Image, name, description, comics} = useLoaderData() as ICharacter;

    return (

        <>
        <Header title={name}/>
        <section className="p-10 mt-10">
        <div className="border w-full rounded-md shadow-md mb-10  bg-white">
            <div className="flex gap-10">
                <img src={url_Image} alt="" className=" rounded-s-md w-[40%] object-cover" />
                <div className="p-10">
                    <h4 className="text-3xl text-gray-800">{name}</h4>
                    <p className="text-sm italic">{description}</p>
                    <h5 className="mt-5 text-xl font-bold">Comics:</h5>
                    <hr />
                    <ul>
                        {
                            comics.map((comic : string,index : number) => <li key={index}>{comic}</li> )
                        }
                    </ul>
                </div>
            </div>
        </div>
        </section>
      </>
       
    )
}
