"use client";

import { useEffect } from "react";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
});

type Product = z.infer<typeof productSchema>;

export default function Product() {
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((product: Product) => {
        // console.log(product.name.toUpperCase());
        const validatedProduct = productSchema.safeParse(product);

        if (!validatedProduct.success) {
          console.error(validatedProduct.error);
          return;
        }

        console.log(validatedProduct.data.name);
        console.log(validatedProduct.data.price);
      });
  }, []);

  return (
    <main className="min-h-screen flex justify-around mt-10">
      <h1 className="text-xl">Hello Product World</h1>
    </main>
  );
}
