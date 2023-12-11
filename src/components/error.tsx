interface ErrorProps {
    children : string | string[]
}

export const Error = ({children}: ErrorProps) => {
  return (
    <div className="text-center bg-red-600 text-white font-bold p-3 mb-3 uppercase">
        {children}
        </div>
  )
}
