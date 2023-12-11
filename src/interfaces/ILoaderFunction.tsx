import { LoaderFunction } from "react-router-dom";
import { CharacterLoaderFunctionArgs } from "../router";

export interface CharacterLoaderFunction extends Omit<LoaderFunction, "args"> {
    (args: CharacterLoaderFunctionArgs):
      | Promise<Response>
      | Response
  }