import { ActionData } from "../pages/ClientAdd/client-add-page";

interface Client {
    id: string;
    nombre: string;
    empresa: string;
    email: string;
    telefono: number;
    notas: string
}


const FormAddClient = ({ errors, client }: { errors: ActionData, client?: Client }) => {

    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-2">
            <div className="mb-4 md:w-[48%] ">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    className={`mt-2 block w-full p-3 bg-gray-50 ${(errors && errors.nombre) && 'border-2 border-red-400 '}`}
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    defaultValue={client && client.nombre}
                />
                {
                    errors && errors.nombre && (
                        <p className="text-red-500 text-sm ms-2">{errors.nombre}</p>
                    )
                }
            </div>
            <div className="mb-4 md:w-[48%] ">
                <label
                    className="text-gray-800"
                    htmlFor="empresa"
                >Empresa:</label>
                <input
                    id="empresa"
                    type="text"
                    className={`mt-2 block w-full p-3 bg-gray-50 ${(errors && errors.empresa) && 'border-2 border-red-400 '}`}
                    placeholder="Empresa del Cliente"
                    name="empresa"
                    defaultValue={client && client.empresa}

                />
                {
                    errors && errors.empresa && (
                        <p className="text-red-500 text-sm ms-2">{errors.empresa}</p>
                    )
                }
            </div>

            <div className="mb-4 md:w-[48%] ">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input
                    id="email"
                    type="email"
                    className={`mt-2 block w-full p-3 bg-gray-50 ${(errors && errors.email) && 'border-2 border-red-400 '}`}
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={client && client.email}

                />
                {
                    errors && errors.email && (
                        <p className="text-red-500 text-sm ms-2">{errors.email}</p>
                    )
                }
            </div>

            <div className="mb-4 md:w-[48%] ">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                    defaultValue={client && client.telefono}

                />
                 {
                    errors && errors.telefono && (
                        <p className="text-red-500 text-sm ms-2">{errors.telefono}</p>
                    )
                }
            </div>

            <div className="mb-4 w-full ">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    id="notas"
                    className="mt-2 block w-full p-3 bg-gray-50 h-30 align-self resize-none"
                    placeholder="Notas del Cliente"
                    name="notas"
                    defaultValue={client && client.notas}

                />
            </div>
        </div>
    )
}

export default FormAddClient