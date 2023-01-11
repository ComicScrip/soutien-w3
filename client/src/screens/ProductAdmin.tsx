import React, { FormEvent, useState } from "react";
import {
  useAddProductMutation,
  useProductsQuery,
} from "../gql/generated/schema";

export default function ProductAdmin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const [createProduct] = useAddProductMutation();

  const { data } = useProductsQuery();

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    createProduct({ variables: { product: { name, image, price } } });
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Nom du produit :</label>
        <input
          type="text"
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="image">Image :</label>
        <input
          type="url"
          name={"image"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="price">Prix :</label>
        <input
          type="number"
          min={0}
          name={"price"}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button type="submit">Ajouter le produit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Produit</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.products.map((product) => (
            <tr>
              <td>
                <img src={product.image} className="h-12 w-12" alt="" />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
