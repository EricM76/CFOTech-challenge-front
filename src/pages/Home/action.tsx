import { getCharactersByName } from "../../services/characters";

export const action = async ({request} : {request: Request}) => {

const formData: FormData = await request.formData();

try {
    const characteres = await getCharactersByName(formData.get('keyword') as string);
    if(!characteres) throw new Error('Error en la conexión con la API')
    return characteres

  } catch (error) {
    console.log(error);
    return null
  }

}

