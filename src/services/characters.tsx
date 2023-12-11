export const getCharacters = async (offset : number) => {
   

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/characters?offset=${offset}`)
        const result = await response.json()
    
        return result ? result : null;
    
      } catch (error) {
        console.log(error)
      }
}

export const getCharactersByName = async (nameStartsWith : string) => {
  
 

  try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/characters?nameStartsWith=${nameStartsWith}`)
      const result = await response.json()

      console.log(result);
      
  
      return result ? result : null;
  
    } catch (error) {
      console.log(error)
    }
}

export const getCharacterById = async (id : string) => {

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/characters/${id}`)
    const result = await response.json()    
    
    return result
    
  } catch (error) {
    console.log(error);

  }
}