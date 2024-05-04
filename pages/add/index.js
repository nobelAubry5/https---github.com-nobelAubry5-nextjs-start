import { useRef } from "react";

export default function index() {
  const enWord = useRef();
  const frWord = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };
    fetch("/api/vocapi", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    enWord.current.value = "";
    frWord.current.value = "";
  };
  return (
    <div className="">
      <h1>Add word</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between mx-auto max-w-[300px]"
      >
        <label htmlFor="addEn">Ajouter un mot en anglais</label>
        <input
          ref={enWord}
          type="text"
          id="addEn"
          className="border border-slate-500"
        />
        <label htmlFor="addFr">Ajouter un mot en français</label>
        <input
          ref={frWord}
          type="text"
          id="addFr"
          className="border border-slate-500"
        />
        <button className="bg-blue-500 py-3 px-2 mt-2">Ajouter</button>
      </form>
    </div>
  );
}
