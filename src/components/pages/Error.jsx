import React, { useEffect, useState } from "react";
import Container from "../Container";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Products from "../layouts/Products";

const Error = () => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setShow(data.products));
  }, []);

  const filtered = show.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:py-16">
          <h1 className="font-DM font-bold text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] text-center">
            404
          </h1>

          <div className="w-full max-w-2xl mx-auto mb-8">
            <p className="font-DM text-[14px] sm:text-[16px] text-[#767676] text-center">
              The page you were looking for couldn't be found. The page could be
              removed or you misspelled the word while searching for it. Maybe try
              a search?
            </p>
          </div>

          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Products"
                className="w-full pr-12 py-3 px-4 border border-gray-200 rounded-md 
                         text-sm sm:text-base 
                         placeholder:text-[12px] sm:placeholder:text-[14px] md:placeholder:text-[16px]"
              />
              <FaMagnifyingGlass className="absolute right-4 top-1/2 transform -translate-y-1/2 
                                          text-gray-400 cursor-pointer
                                          text-[14px] sm:text-[18px]" />
            </div>

            {query && (
              <div className="absolute left-0 right-0 z-50 mt-2 
                            bg-white shadow-lg rounded-md
                            max-h-[300px] sm:max-h-[400px] md:max-h-[500px] 
                            overflow-y-auto">
                {filtered.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 p-4">
                    {filtered.map((item) => (
                      <Products
                        key={item.id}
                        src={item.thumbnail}
                        proName={item.title}
                        proPrice={item.price}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-[30px] 
                               font-bold text-red-500 p-4 text-center">
                    Not Found
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Error;
