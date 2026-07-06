export type Product = {
  id: string
  name: string
  category: "Tees" | "Hoodies" | "Crewnecks" | "Denim"
  price: number
  image: string
  hoverImage?: string
  tag?: string
  weight: string
}

export const products: Product[] = [
  {
    id: "tee-eclipse",
    name: "Eclipse Heavy Tee",
    category: "Tees",
    price: 68,
    image: "/images/product-tee-black.jpg",
    tag: "New",
    weight: "320 GSM",
  },
  {
    id: "tee-cinder",
    name: "Cinder Washed Tee",
    category: "Tees",
    price: 72,
    image: "/images/product-tee-grey.jpg",
    weight: "320 GSM",
  },
  {
    id: "hoodie-shroud",
    name: "Shroud Hoodie",
    category: "Hoodies",
    price: 148,
    image: "/images/product-hoodie-black.jpg",
    tag: "Best Seller",
    weight: "550 GSM",
  },
  {
    id: "hoodie-onyx",
    name: "Onyx Zip Hoodie",
    category: "Hoodies",
    price: 162,
    image: "/images/product-hoodie-charcoal.jpg",
    weight: "550 GSM",
  },
  {
    id: "crew-monolith",
    name: "Monolith Crewneck",
    category: "Crewnecks",
    price: 128,
    image: "/images/product-crew-graphite.jpg",
    weight: "480 GSM",
  },
  {
    id: "crew-relic",
    name: "Relic Crewneck",
    category: "Crewnecks",
    price: 128,
    image: "/images/product-crew-bone.jpg",
    tag: "New",
    weight: "480 GSM",
  },
  {
    id: "denim-crater",
    name: "Crater Baggy Denim",
    category: "Denim",
    price: 186,
    image: "/images/product-jeans-raw.jpg",
    tag: "Limited",
    weight: "14 OZ",
  },
  {
    id: "denim-fault",
    name: "Faultline Baggy Denim",
    category: "Denim",
    price: 178,
    image: "/images/product-jeans-washed.jpg",
    weight: "14 OZ",
  },
]
