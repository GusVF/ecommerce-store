import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductsLit from "@/components/products-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('ca2faa47-6b7e-411e-a3a2-3cea00312758');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsLit title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;