import {useRouteError} from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError() as object
  return (
    <div className='space-y-8'>
            <h1 className="font-black text-4xl text-blue-900">Error!</h1>
            <div className="mt-40">
              <p>Upss, hubo un error: <span className='bg-gray-200 p-2 mt-5'> {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}</span></p>
            </div>
    </div>
  )
}
