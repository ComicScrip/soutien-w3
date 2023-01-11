import React, { useState, FormEvent, useRef } from "react";
import { IWilderInput } from "../types/IWilder";
import { useCreateWilderMutation } from "../gql/generated/schema";

interface WilderFormProps {
  onWilderCreated: () => void;
}

export default function WilderForm({ onWilderCreated }: WilderFormProps) {
  const [name, setName] = useState<IWilderInput["name"]>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [createWilder, { loading: processing }] = useCreateWilderMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createWilder({ variables: { data: { name } } });
    onWilderCreated();
    setName("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <label htmlFor="name" className="mr-2">
        <span className="mr-3">Name</span>
        <input
          ref={inputRef}
          type="text"
          maxLength={30}
          id="name"
          disabled={processing}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <button type="submit" disabled={processing}>
        +
      </button>
      <br />
      <br />
    </form>
  );
}
