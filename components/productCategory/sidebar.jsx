"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
const ProductSidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(false);
  const [activeMakeup, setActiveMakeup] = useState(false);
  const [activeSkin, setActiveSkin] = useState(false);
  const [activeHair, setActiveHair] = useState(false);
  const [activePersonal, setActivePersonal] = useState(false);
  const [activeMom, setActiveMom] = useState(false);
  const [activeFragrance, setActiveFragrance] = useState(false);
  const [activeUndergarments, setActiveUndergarments] = useState(false);
  const [activeMen, setActiveMen] = useState(false);
  const [activeClothes, setActiveClothes] = useState(false);
  const [activeNatural, setActiveNatural] = useState(false);

  return (
    <div className="relative">
      {/* Mobile menu button */}
      <button
        className="fixed bottom-0 z-50 w-full sm:hidden p-2 bg-gray-400 shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter By
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 bg-dark-50 left-0 z-40 w-72 h-screen block transition-transform origin-right ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:static sm:translate-x-0 shadow-lg`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <h2 className="text-2xl font-semibold">Product Category</h2>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/buy1get1"
                    ? "text-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setActiveMakeup(false),
                    setActiveClothes(false),
                    setActiveFragrance(false),
                    setActiveHair(false),
                    setActiveMen(false),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(false);
                }}
                href={"/product_category/buy1get1"}
              >
                Buy 1 Get 1
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/clearance_sell"
                    ? "text-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setActiveMakeup(false),
                    setActiveClothes(false),
                    setActiveFragrance(false),
                    setActiveHair(false),
                    setActiveMen(false),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(false);
                }}
                href={"/product_category/clearance_sell"}
              >
                Clearance Sell
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/makeup"
                    ? "text-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setActiveMakeup(!activeMakeup);
                  setActiveClothes(false),
                    setActiveFragrance(false),
                    setActiveHair(false),
                    setActiveMen(false),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(false);
                }}
                href={"/product_category/makeup"}
              >
                Makeup
              </Link>
              {activeMakeup && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link href={"/product_category/makeup/face"}>Face</Link>
                  </li>
                  <li>
                    <Link href={"/product_category/makeup/lips"}>Lips</Link>
                  </li>
                  <li>
                    <Link href={"/product_category/makeup/eyes"}>Eyes</Link>
                  </li>
                  <li>
                    <Link href={"/product_category/makeup/nails"}>Nails</Link>
                  </li>
                  <li>
                    <Link href={"/product_category/makeup/tools_brushes"}>
                      Tools & Brushes
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/makeup/top_brands"}>
                      Top Brands
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/makeup/makeup_kits"}>
                      Makeup Kits
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/skin"
                    ? "text-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setActiveMakeup(false),
                    setActiveClothes(false),
                    setActiveFragrance(false),
                    setActiveHair(false),
                    setActiveMen(false),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(!activeSkin),
                    setActiveUndergarments(false);
                }}
                href={"/product_category/skin"}
              >
                Skin
              </Link>
              {activeSkin && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link href={"/product_category/skin/face"}>Face</Link>
                  </li>
                  <li>
                    <Link href={"/product_category/skin/body"}>Body</Link>
                  </li>
                  <li>
                    <Link href={"/product_category/skin/k_beauty"}>
                      K-Beauty
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/skin/sun_care"}>
                      Sun Care
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/skin/lip_balms"}>
                      Lip balms/Lip Care
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/skin/eye"}>Eye Care</Link>
                  </li>
                  <li>
                    <Link href={"/product_category/skin/hand_feet"}>
                      Hand & Feet
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/skin/hair"}>Hair Care</Link>
                  </li>
                  <li>
                    <Link href={"/product_category/skin/shop_concern"}>
                      Shop By Concern
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/personal_care"
                    ? "text-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setActiveMakeup(false),
                    setActiveClothes(false),
                    setActiveFragrance(false),
                    setActiveHair(false),
                    setActiveMen(false),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(!activePersonal),
                    setActiveSkin(false),
                    setActiveUndergarments(false);
                }}
                href={"/product_category/personal_care"}
              >
                Personal Care
              </Link>
              {activePersonal && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link href={"/product_category/personal_care/face"}>
                      Face
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/personal_care/body"}>
                      Body
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/product_category/personal_care/feminine_hygiene"}
                    >
                      Feminine Hygiene
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/personal_care/bath_shower"}>
                      Bath & Shower
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/personal_care/oral_care"}>
                      Oral Care
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/personal_care/home_care"}>
                      Home Care
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/personal_care/hand_feet"}>
                      Hand & Feet
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/personal_care/wellness"}>
                      Wellness
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/product_category/personal_care/Sexual_wellness"}
                    >
                      Sexual Wellness
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/product_category/personal_care/tools_accessories"}
                    >
                      Tools & Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/product_category/personal_care/Feminine_care"}
                    >
                      Feminine Care
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/hair"
                    ? "text-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setActiveMakeup(false),
                    setActiveClothes(false),
                    setActiveFragrance(false),
                    setActiveHair(!activeHair),
                    setActiveMen(false),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(false);
                }}
                href={"/product_category/hair"}
              >
                Hair
              </Link>
              {activeHair && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link href={"/product_category/hair/hair_care"}>
                      Hair Care
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/hair/shop_concern"}>
                      Shop By Concern
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/hair/hair_styling"}>
                      Hair Styling
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/hair/shop_hair_type"}>
                      Shop By Hair Type
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/hair/tools_accessories"}>
                      Tools & Accessories
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/fragrance"
                    ? "text-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setActiveMakeup(false),
                    setActiveClothes(false),
                    setActiveFragrance(!activeFragrance),
                    setActiveHair(false),
                    setActiveMen(false),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(false);
                }}
                href={"/product_category/fragrance"}
              >
                Fragrance
              </Link>
              {activeFragrance && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link href={"/product_category/fragrance/perfumes"}>
                      Perfumes (EDT/EDP)
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/fragrance/body_mist"}>
                      Body Mist/Spray
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/fragrance/deodorants"}>
                      Deodorants/Roll-Ons
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/fragrance/high_perfume"}>
                      High-end Perfume
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                onClick={() => {
                  setActiveMakeup(false);
                  setActiveClothes(false),
                    setActiveFragrance(false),
                    setActiveHair(false),
                    setActiveMen(false),
                    setActiveMom(!activeMom),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(false);
                }}
                className={`link ${
                  pathname === "/product_category/mom_baby"
                    ? "text-primary-500"
                    : ""
                }`}
                href={"/product_category/mom_baby"}
              >
                Mom & Baby
              </Link>
              {activeMom && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link href={"/product_category/mom_baby/baby_products"}>
                      Baby Products
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/baby_care"}>
                      Baby Care
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/bath_time"}>
                      Bath Time
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/product_category/mom_baby/creams_lotion_oils"}
                    >
                      Creams, Lotions & Oils
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/soap_bodywash"}>
                      Soap & Bodywash
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/cream_moisturizer"}>
                      Creams & Moisturizers
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/lotion"}>
                      Lotion
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/shampoo"}>
                      Shampoo
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/powder"}>
                      Powder
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/oil"}>Oil</Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/moisturizer"}>
                      Moisturizer
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/sun_screen"}>
                      Sunscreen
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product_category/mom_baby/wipes"}>Wipes</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/undergarments"
                    ? "text-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setActiveMakeup(false),
                    setActiveClothes(false),
                    setActiveFragrance(false),
                    setActiveHair(false),
                    setActiveMen(false),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(!activeUndergarments);
                }}
                href={"/product_category/undergarments"}
              >
                Undergarments
              </Link>
              {activeUndergarments && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/undergarments/bra"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/undergarments/bra"}
                    >
                      Bra
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/undergarments/panty"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/undergarments/panty"}
                    >
                      Panty
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === `/product_category/men` ? "text-primary-500" : ""
                }`}
                onClick={() => {
                  setActiveMakeup(false),
                    setActiveClothes(false),
                    setActiveFragrance(false),
                    setActiveHair(false),
                    setActiveMen(!activeMen),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(false);
                }}
                href={"/product_category/men"}
              >
                Men
              </Link>
              {activeMen && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/men/top_brands`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/men/top_brands"}
                    >
                      Top Brands
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/men/fragrance`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/men/fragrance"}
                    >
                      Fragrance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/men/hair_care`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/men/hair_care"}
                    >
                      Hair Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/men/skin_care`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/men/skin_care"}
                    >
                      Skin Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/men/shaving`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/men/shaving"}
                    >
                      Shaving
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/men/bath_body`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/men/bath_body"}
                    >
                      Bath & Body
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/men/shop_concern`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/men/shop_concern"}
                    >
                      Shop by Concern
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ProductSidebar;
