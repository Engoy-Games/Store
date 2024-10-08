// Server Component (HomePage)
import { getBillboards } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';
import { Billboard as BillboardType } from '@/types';
import { Container } from '@/components/ui/container';
import RotatedBanner from '@/components/RotatedBanner';
import AfterBillboard from '@/components/AfterBillboard';
import { ProductList } from '@/components/product-list';
import { BillboardSlider } from '@/components/BillboardSlider';

export const revalidate = 0;

const HomePage = async () => {
  // Fetch all billboards and products on the server side
  const billboards: BillboardType[] = await getBillboards();
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10 bg-gradient-to-bl from-[#7f36b9] via-[#6a3fbf] to-[#625bff]">
        <RotatedBanner />

        {/* Pass fetched billboards to CustomSlider */}
        <BillboardSlider data={billboards} />

        <AfterBillboard />

        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 px-[100px]">
          {/* Use fetched products */}
          <ProductList title="احدث المنتجات المضافة" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
