import { getBillboard } from '@/actions/get-billboard'
import { getProducts } from '@/actions/get-products'
import { Billboard } from '@/components/billboard'
import { ProductList } from '@/components/product-list'
import { Container } from '@/components/ui/container'
import RotatedBanner from "@/components/RotatedBanner"
import AfterBillboard from '@/components/AfterBillboard'

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard('eacae123-ca92-44d0-8cb8-e517fe3149d8')
  const products = await getProducts({ isFeatured: true })

  console.log(billboard);

  return (
    <Container>
      <div className="space-y-10 pb-10 bg-gradient-to-bl from-[#7f36b9] via-[#6a3fbf] to-[#625bff]">

        <RotatedBanner/>

        <Billboard data={billboard} />
        <AfterBillboard />

        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 px-[100px]">
          <ProductList title="احدث المنتجات المضافة" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
