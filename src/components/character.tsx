import { Link} from "react-router-dom";

export interface CharacterProps {
  character: {
    id: string;
    name: string;
    url_Image: string;
  };
}


export const Character = ({ character: { id, name, url_Image } }: CharacterProps) => {


  return (
    <div className="border w-full lg:w-[48%] rounded-md shadow-md mb-10">
        <div className="flex gap-10">
        <img src={url_Image} alt="" className="w-48 h-48 object-cover"/>
        <div>
        <h4 className="text-2xl text-gray-800">{name}</h4>
        <Link to={`/characters/${id}`}>Ver más</Link>
        </div>
        
        </div>
        
    </div>
  );
};
