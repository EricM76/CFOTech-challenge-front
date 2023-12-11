import { Outlet, Link, useLocation } from "react-router-dom";

export const LayoutApp = () => {
  const location = useLocation();

  return (
    <div className="flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CTOTech CHALLENGE
        </h2>
        <hr />
        <section>
        
        </section>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === "/"
                ? "text-white underline "
                : "text-blue-300"
            } text-xl block mb-2 hover:text-blue-200`}
            to="/"
          >
            Personajes
          </Link>
        </nav>
      </aside>
      <div className="md:w-3/4 ">
        <section className="md:h-screen overflow-scroll">
        <Outlet />
        </section>
      </div>
    </div>
  );
};
