"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
const ProductSidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeConcern, setActiveConcern] = useState(false);
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
  const [activeBrand, setActiveBrand] = useState(false);
  const [activeOffer, setActiveOffer] = useState(false);

  return (
    <div className="relative">
      {/* Mobile menu button */}
      <button
        className="fixed bottom-0 z-50 w-full sm:hidden p-2 dark:bg-gray-800 bg-gray-400 shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter By
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 text-black dark:text-white bg-dark-50 dark:bg-gray-900 left-0 z-40 w-72 h-screen block transition-transform origin-right ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:static sm:translate-x-0 shadow-lg`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <h2 className="text-2xl font-semibold">Product Category</h2>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/offer/bogo_offer"
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                }}
                href={"/product_category/offer/bogo_offer"}
              >
                Bogo Offer
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/offer/free_delivery"
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                }}
                href={"/product_category/offer/free_delivery"}
              >
                Free Delivery
              </Link>
            </li>
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                }}
                href={"/product_category/makeup"}
              >
                Makeup
              </Link>
              {activeMakeup && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/makeup/face"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/makeup/face"}
                    >
                      Face
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/makeup/lips"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/makeup/lips"}
                    >
                      Lips
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/makeup/eyes"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/makeup/eyes"}
                    >
                      Eyes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/makeup/nails"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/makeup/nails"}
                    >
                      Nails
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/makeup/tools_brush"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/makeup/tools_brush"}
                    >
                      Tools & Brushes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/skin"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/makeup/top_brands"}
                    >
                      Top Brands
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/skin"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/makeup/makeup_kits"}
                    >
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                }}
                href={"/product_category/skin"}
              >
                Skin
              </Link>
              {activeSkin && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/skin/face"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/skin/face"}
                    >
                      Face
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/skin/body"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/skin/body"}
                    >
                      Body
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/skin/k_beauty"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/skin/k_beauty"}
                    >
                      K-Beauty
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/skin/sun_care"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/skin/sun_care"}
                    >
                      Sun Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/skin/lip_balms"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/skin/lip_balms"}
                    >
                      Lip balms/Lip Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/skin/eye_care"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/skin/eye_care"}
                    >
                      Eye Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/personal_care"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/skin/hand_feet"}
                    >
                      Hand & Feet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/personal_care"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/skin/hair_care"}
                    >
                      Hair Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/personal_care"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/skin/shop_concern"}
                    >
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                }}
                href={"/product_category/personal_care"}
              >
                Personal Care
              </Link>
              {activePersonal && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/personal_care/face`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/face"}
                    >
                      Face
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/personal_care/body`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/body"}
                    >
                      Body
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/personal_care/feminine_hygiene`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/feminine_hygiene"}
                    >
                      Feminine Hygiene
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/personal_care/bath_shower`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/bath_shower"}
                    >
                      Bath & Shower
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/personal_care/oral_care`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/oral_care"}
                    >
                      Oral Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/personal_care/home_care`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/home_care"}
                    >
                      Home Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/personal_care/hand_feet`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/hand_feet"}
                    >
                      Hand & Feet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/personal_care/wellness`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/wellness"}
                    >
                      Wellness
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/personal_care/sexual_wellness`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/sexual_wellness"}
                    >
                      Sexual Wellness
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/personal_care/tools_accessories`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/tools_accessories"}
                    >
                      Tools & Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/personal_care/feminine_care`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/personal_care/feminine_care"}
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                }}
                href={"/product_category/hair"}
              >
                Hair
              </Link>
              {activeHair && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/hair/hair_care`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/hair/hair_care"}
                    >
                      Hair Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/hair/shop_concern`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/hair/shop_concern"}
                    >
                      Shop By Concern
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/hair/hair_styling`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/hair/hair_styling"}
                    >
                      Hair Styling
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/hair/shop_hair_type`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/hair/shop_hair_type"}
                    >
                      Shop By Hair Type
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/hair/tools_accessories`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/hair/tools_accessories"}
                    >
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                }}
                href={"/product_category/fragrance"}
              >
                Fragrance
              </Link>
              {activeFragrance && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/fragrance/perfumes`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/fragrance/perfumes"}
                    >
                      Perfumes (EDT/EDP)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/fragrance/body_mist`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/fragrance/body_mist"}
                    >
                      Body Mist/Spray
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/fragrance/deodorants`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/fragrance/deodorants"}
                    >
                      Deodorants/Roll-Ons
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/fragrance/high_perfume`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/fragrance/high_perfume"}
                    >
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
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
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/baby_products`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/baby_products"}
                    >
                      Baby Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/baby_care`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/baby_care"}
                    >
                      Baby Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/bath_time`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/bath_time"}
                    >
                      Bath Time
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/mom_baby/creams_lotion_oils`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/creams_lotion_oils"}
                    >
                      Creams, Lotions & Oils
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/soap_bodywash`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/soap_bodywash"}
                    >
                      Soap & Bodywash
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/mom_baby/cream_moisturizer`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/cream_moisturizer"}
                    >
                      Creams & Moisturizers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/lotion`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/lotion"}
                    >
                      Lotion
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/shampoo`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/shampoo"}
                    >
                      Shampoo
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/powder`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/powder"}
                    >
                      Powder
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/oil`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/oil"}
                    >
                      Oil
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/moisturizer`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/moisturizer"}
                    >
                      Moisturizer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/sun_screen`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/sun_screen"}
                    >
                      Sunscreen
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/mom_baby/wipes`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/mom_baby/wipes"}
                    >
                      Wipes
                    </Link>
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
                    setActiveUndergarments(!activeUndergarments),
                    setActiveConcern(false);
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
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
            <li>
              <Link
                className={`link ${
                  pathname === `/product_category/shop_by_concern`
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
                    setActiveUndergarments(false),
                    setActiveConcern(!activeConcern);
                }}
                href={"/product_category/shop_by_concern"}
              >
                Shop By Concern
              </Link>
              {activeConcern && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/shop_by_concern/acne`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/acne"}
                    >
                      Acne
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/shop_by_concern/anti_aging`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/anti_aging"}
                    >
                      Anti Aging
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/shop_by_concern/dandruff`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/dandruff"}
                    >
                      Dandruff
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/shop_by_concern/dry_skin`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/dry_skin"}
                    >
                      Dry Skin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/shop_by_concern/hair_fall`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/hair_fall"}
                    >
                      Hair Fall
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/shop_by_concern/hair_thinning`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/hair_thinning"}
                    >
                      Hair Thinning
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/shop_by_concern/oil_control`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/oil_control"}
                    >
                      Oil Control
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname ===
                        `/product_category/shop_by_concern/sun_burn`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/sun_burn"}
                    >
                      Sun Burn
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/shop_by_concern/pore`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/pore"}
                    >
                      Pore
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `//product_category/shop_by_concern/spot`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/shop_by_concern/spot"}
                    >
                      Spot
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/cloth_more"
                    ? "text-primary-500"
                    : ""
                }`}
                onClick={() => {
                  setActiveMakeup(false),
                    setActiveClothes(!activeClothes),
                    setActiveFragrance(false),
                    setActiveHair(false),
                    setActiveMen(false),
                    setActiveMom(false),
                    setActiveNatural(false),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                }}
                href={"/product_category/cloth_more"}
              >
                Clothing & More
              </Link>
              {activeClothes && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/cloth_more/leggings"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/cloth_more/leggings"}
                    >
                      Leggings
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/cloth_more/trousers"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/cloth_more/trousers"}
                    >
                      Trousers
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/product_category/natural"
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
                    setActiveNatural(!activeNatural),
                    setActivePersonal(false),
                    setActiveSkin(false),
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                }}
                href={"/product_category/natural"}
              >
                Natural
              </Link>
              {/* {activeNatural && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/cloth_more/leggings"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/cloth_more/leggings"}
                    >
                      Leggings
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/product_category/cloth_more/trousers"
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/cloth_more/trousers"}
                    >
                      Trousers
                    </Link>
                  </li>
                </ul>
              )} */}
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === `/product_category/brand`
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
                    setActiveUndergarments(false),
                    setActiveConcern(false);
                  setActiveBrand(!activeBrand);
                  setActiveOffer(false);
                }}
                href={"/product_category/brand"}
              >
                Top Brands
              </Link>
              {activeBrand && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/brand/veet`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/brand/veet"}
                    >
                      Veet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/brand/naturale`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/brand/naturale"}
                    >
                      Naturale
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/brand/nirvana`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/brand/nirvana"}
                    >
                      Nirvana
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/brand/ponds`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/brand/ponds"}
                    >
                      Ponds
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/brand/simple`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/brand/simple"}
                    >
                      Simple
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/brand/tresemme`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/brand/tresemme"}
                    >
                      Tresemme
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === `/product_category/brand/lux`
                          ? "text-primary-500"
                          : ""
                      }`}
                      href={"/product_category/brand/lux"}
                    >
                      Lux
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
