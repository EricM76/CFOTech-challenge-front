import {LoaderFunction, LoaderFunctionArgs, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import { ErrorPage } from './pages/error-page';
import { NotFoundPage } from './pages/not-found-page';
import { App } from './App';
import { CharacterDetail } from './pages/CharacterDetail';
import { loader as characterDetailLoader} from './pages/CharacterDetail/loader';
import { action as ActionHome } from './pages/Home/action';

export interface CharacterLoaderFunctionArgs extends Omit<LoaderFunctionArgs, "params"> {
  params: {
    id: string;
    keyword: string;
  };
}

export const router = createBrowserRouter([
    {
      path: '/',
      element : <App/>,
      children: [
        {
          index: true,
          element : <Home/>,
          errorElement : <ErrorPage/>,
          action : ActionHome
        },
        {
          path: "characters/:id",
          element: <CharacterDetail />,
          loader: characterDetailLoader as LoaderFunction,
        },
      ]
    },
    {
      path: '*',
      element : <NotFoundPage/>,
    },
   
  ])