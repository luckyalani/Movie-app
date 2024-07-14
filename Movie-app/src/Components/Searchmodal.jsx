import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Searchcontext from "../ContextApi/Contextapi";

// search component starts
const Searchmodal = () => {
  // search value state get

  // search state starts
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 py-6 bg-transparent grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Open search
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  const { search, setSearch } = useContext(Searchcontext);
  const [button, setButton] = useState(false);

  // function for the button
  const buttongettrue = () => {
    setButton(!button);
  };
  // useeffect hook for the search value
  useEffect(() => {
    const searchfn = () => {
      // important function for the search incudes function
      if (search.includes("hellobro")) {
        console.log("keyword found");
      } else {
        console.log("keyword not found");
      }
    };
    searchfn();
  }, [button]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="bg-transparent">
              <div className="container h-fit flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="relative">
                  <input
                    type="text"
                    className="h-14 w-96 pr-8 pl-5 bg-transparent rounded z-0  focus:outline-none"
                    placeholder="Search anything..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="absolute top-4 right-3">
                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
                  </div>
                  <div className="buttondiv flex justify-center">
                    <button
                      className="bg-white w-fit px-7  text-black  py-2"
                      onClick={buttongettrue}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Searchmodal;
