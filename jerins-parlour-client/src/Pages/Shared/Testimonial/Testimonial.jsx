import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          What our <span className="text-blue-500 ">clients</span> say
        </h1>
        <section className="grid grid-cols-1 gap-8  xl:mt-6 lg:grid-cols-2 xl:grid-cols-3">
          {[...Array(3).keys()].map((number) => (
            <div className="p-6">
              <div className="flex items-center -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800">Robert</h1>
                  <span className="text-sm text-gray-500">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
              <p className="leading-loose my-2 text-gray-500">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>
              <div className="rating mt-2">
                {[...Array(5).keys()].map((number) => (
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
