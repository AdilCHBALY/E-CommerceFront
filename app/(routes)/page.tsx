import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0

export default async function Home() {
  const billboards = await getBillboard("29f4de33-5b7c-48c4-82c8-ce2ae5ecc13a")
  const products = await getProducts({isFeatured:true})

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards}/>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList
          title="Featured Products"
          data={products}
        />
      </div>
      </div>
    </Container>
  )
}
