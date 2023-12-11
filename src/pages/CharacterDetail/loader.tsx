import { getCharacterById } from '../../services/characters';
import { CharacterLoaderFunction } from '../../interfaces/ILoaderFunction';

export const loader : CharacterLoaderFunction = async ({params}) => {
  try {
    const character = await getCharacterById(params.id);
    if(!character) throw new Error('Error en la conexión con la API')
    return character

  } catch (error) {
    console.log(error);
    return null
  }

}