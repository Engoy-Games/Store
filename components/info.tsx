"use client";

import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Currency } from "./ui/currency";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

interface InfoProps {
  data: Product;
}

export const Info: React.FC<InfoProps> = ({ data }) => {
  const t = useTranslations(); // Hook for translations
  const currentLang = useLocale(); // Hook for locale
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Simulate an action (e.g., add to cart)
    setTimeout(() => setIsClicked(false), 1500); // Reset button after feedback
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      {/* Text Section */}
      <div className="flex-1 text-right mt-6">
        <h1 className="text-3xl font-bold text-white">
          {currentLang == "ar" ? data?.name : data?.nameEn}
        </h1>

        <div className="mt-3 flex items-end justify-between">
          <p className="text-2xl text-white">
            <Currency value={data?.price} />
          </p>
        </div>

        <hr className="my-4 border-gray-300" />

        <h2 className="text-xl font-semibold text-white mt-6">
          {t("productOverview")}
        </h2>
        <p className="text-white mt-2 leading-relaxed">
          {currentLang == "ar"
            ? data?.category?.categoryDescription
            : data?.category?.categoryDescriptionEn}
        </p>

        {/* Add to Cart Button with Outline and Filled on Click */}
        <div className="mt-10 flex items-center gap-x-3">
          <Button
            onClick={handleClick}
            aria-label={t("addToCart")}
            className={`cursor-pointer w-full justify-center flex items-center gap-x-2 text-black ${
              isClicked
                ? "bg-black text-white border-black"
                : "bg-transparent border-2 border-white text-white"
            } hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out`}
          >
            {isClicked ? t("addedToCart") : t("addToCart")}
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};
