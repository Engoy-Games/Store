// pages/product/[productId].tsx
import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import { getCategory } from "@/actions/get-category";
import { Gallery } from "@/components/gallery";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";
import ProductTabs from "@/components/ProductTabs";
import { getLocale, getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import { InfoWithForm } from "@/components/InfoWithForm";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  const category = await getCategory(product?.category?.id);

  const currentLang = await getLocale();
  const t = await getTranslations("productPage");

  return (
    <div className="bg-gradient-to-bl from-[#7f36b9] via-[#6a3fbf] to-[#625bff] py-[80px] px-8">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Product Gallery */}
            <Gallery images={product.images} />

            {/* Product Info with Form */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <InfoWithForm
                data={product}
                categoryFields={category?.fields}
                currentLang={currentLang}
              />
            </div>
          </div>

          {/* Product Tabs */}
          <ProductTabs
            description={
              currentLang == "ar"
                ? product.productDescription
                : product.productDescriptionEn
            }
          />

          {/* Suggested Products */}
          <ProductList title={t("similarProducts")} items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
