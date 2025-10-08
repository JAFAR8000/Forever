import React from "react";

export default function LetternewsBox() {
  const onSubmitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe and get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate
        in nesciunt?
      </p>
      <form
        onSubmit={onSubmitHandle}
        className="w-full sm:w-1/2 flex items-center mx-auto gap-3 pl-3 border my-6"
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline-none"
          placeholder="Put you email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
