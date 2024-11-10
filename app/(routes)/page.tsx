// Server Component (HomePage)
import { getBillboards } from "@/actions/get-billboards";
import { getProducts } from "@/actions/get-products";
import { Billboard as BillboardType } from "@/types";
import { Container } from "@/components/ui/container";
import RotatedBanner from "@/components/RotatedBanner";
import AfterBillboard from "@/components/AfterBillboard";
import { BillboardSlider } from "@/components/BillboardSlider";
import ServiceBoxes from "@/components/ServiceBoxes";
import Testimonials from "@/components/Testimonials";
import { ProductListNew } from "@/components/ProductListNew";

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

        <ProductListNew
          title="احدث المنتجات المضافة" // Title of the section
          items={products} // Complete product data
          productCount={6} // Adjust this number as needed
        />

        <ServiceBoxes />
        <Testimonials />
      </div>
    </Container>
  );
};

export default HomePage;

// <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 px-[100px]">
//   {/* Use fetched products */}
//   <ProductList title="احدث المنتجات المضافة" items={products} />
// </div>
