import { ICharacter } from "./interfaces/ICharacter"
import { LayoutApp } from "./components/layout";

export type CharacterContextType = {
  characters : ICharacter[],
  setCharacters : (characters : ICharacter[]) => void   

}
export const App = () => {
  return (
    
    <LayoutApp/>
    
  )
}
