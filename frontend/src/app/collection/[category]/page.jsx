// FILE LOCATION:
// app/collection/[category]/page.jsx
//
// Routes:
// /collection/journals
// /collection/lightings
// /collection/decoration
// /collection/handmade-paper
// /collection/leather-bags
// /collection/gifting-segment

import Image from "next/image";
import { notFound } from "next/navigation";

import {
  categories,
  getCategoryBySlug,
} from "@/data/collectionData";


// =========================================================
// PRE-RENDER ALL CATEGORIES
// =========================================================

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}


// =========================================================
// CATEGORY PAGE
// =========================================================

export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params;

  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return notFound();
  }

  return (
    <main className="category-page">

      <div className="container">

        {/* =================================================
            COLLECTION LABEL
        ================================================= */}

        <div className="eyebrow-pill center">
          COLLECTION
        </div>


        {/* =================================================
            CATEGORY TITLE
        ================================================= */}

        <h1 className="heading-xl center">
          {category.label}
        </h1>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p className="intro center">
          {category.description}
        </p>


        {/* =================================================
            SPECIFICATIONS + IDEAL FOR
        ================================================= */}

        <div className="info-grid">

          {/* ---------------- Specifications ---------------- */}

          <div>

            <h2 className="mini-heading">
              Specifications
            </h2>

            <ul className="spec-list">

              {category.specifications?.map((spec) => (
                <li key={spec.label}>

                  <span className="spec-arrow">
                    →
                  </span>

                  <strong>
                    {spec.label}:
                  </strong>{" "}

                  {spec.value}

                </li>
              ))}

            </ul>

          </div>


          {/* ---------------- Ideal For ---------------- */}

          <div>

            <h2 className="mini-heading">
              Ideal For
            </h2>

            <p className="ideal-for">
              {category.idealFor}
            </p>

          </div>

        </div>


        {/* =================================================
            PRODUCT SECTIONS
        =================================================

        Data example:

        productSections: [

          {
            slug: "paper-pendant-lamps",
            heading: "Geometric Paper Pendant Lamps",
            products: [
              product1,
              product2,
              product3,
              product4
            ]
          },

          {
            slug: "mdf-pendant-lamps",
            heading: "Geometric MDF Pendant Lamps",
            products: [
              product1,
              product2,
              product3,
              product4
            ]
          }

        ]

        The page automatically creates:

        GEOMETRIC PAPER PENDANT LAMPS
        [ 1 ][ 2 ][ 3 ][ 4 ]

        GEOMETRIC MDF PENDANT LAMPS
        [ 1 ][ 2 ][ 3 ][ 4 ]

        ================================================= */}

        <div className="product-sections">

          {category.productSections?.map((section) => (

            <section
              className="product-section"
              key={section.slug}
            >

              {/* =========================================
                  SECTION HEADING
              ========================================= */}

              <div className="product-section__header">

                <h2 className="product-section__heading">
                  {section.heading}
                </h2>

                <div className="product-section__line" />

              </div>


              {/* =========================================
                  PRODUCTS
              ========================================= */}

              <div className="product-grid">

                {section.products?.map((product) => (

                  <article
                    className="product-card"
                    key={product.slug}
                  >

                    {/* -----------------------------------
                        IMAGE
                    ----------------------------------- */}

                    <div className="product-card__img">

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="
                          (max-width: 480px) 50vw,
                          (max-width: 768px) 50vw,
                          (max-width: 1100px) 33vw,
                          25vw
                        "
                        className="cover-img"
                      />

                    </div>


                    {/* -----------------------------------
                        PRODUCT NAME
                    ----------------------------------- */}

                    <h3 className="product-card__name">
                      {product.name}
                    </h3>


                    {/* -----------------------------------
                        PRODUCT DESCRIPTION
                    ----------------------------------- */}

                    <p className="product-card__desc">
                      {product.desc}
                    </p>


                    {/* -----------------------------------
                        PRODUCT META
                    ----------------------------------- */}

                    {product.meta?.map((line) => (

                      <p
                        className="product-card__meta"
                        key={line}
                      >
                        {line}
                      </p>

                    ))}


                    {/* -----------------------------------
                        ENQUIRE BUTTON
                    ----------------------------------- */}

                    <span className="btn-outline">
                      Enquire Now

                      <span aria-hidden="true">
                        →
                      </span>
                    </span>

                  </article>

                ))}

              </div>

            </section>

          ))}

        </div>

      </div>


      {/* =================================================
          CSS
      ================================================= */}

      <style>{`

        /* =================================================
           FONT
        ================================================= */

        @font-face {
          font-family: "Playfair Local";
          src: url("/fonts/Playfair.ttf") format("truetype");
          font-weight: 400 700;
          font-style: normal;
          font-display: swap;
        }


        /* =================================================
           PAGE
        ================================================= */

        .category-page {

          --color-green: #017574;

          --color-dark: #004342;

          --color-black: #001212;

          --color-border:
            rgba(0, 18, 18, 0.1);

          --max-width: 1400px;

          --side-padding: 32px;

          --font-heading:
            "Playfair Local",
            "Playfair Display",
            serif;

          --font-body:
            "Mona Sans",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Helvetica,
            Arial,
            sans-serif;

          font-family:
            var(--font-body);

          color:
            var(--color-black);

          width:
            100%;

          overflow-x:
            hidden;
        }


        /* =================================================
           CONTAINER
        ================================================= */

        .container {

          width:
            100%;

          max-width:
            var(--max-width);

          margin:
            0 auto;

          padding:
            34px
            var(--side-padding)
            96px;

          box-sizing:
            border-box;
        }


        /* =================================================
           CENTER
        ================================================= */

        .center {
          text-align: center;
        }


        /* =================================================
           EYEBROW
        ================================================= */

        .eyebrow-pill {

          display:
            flex;

          width:
            fit-content;

          margin:
            0 auto 24px;

          font-family:
            var(--font-body);

          font-size:
            11px;

          font-weight:
            500;

          letter-spacing:
            0.08em;

          text-transform:
            uppercase;

          color:
            var(--color-green);

          background:
            #ecffff;

          border:
            1px solid
            rgba(1, 117, 116, 0.25);

          border-radius:
            999px;

          padding:
            8px 20px;
        }


        /* =================================================
           MAIN HEADING
        ================================================= */

        .heading-xl {

          font-family:
            var(--font-heading);

          font-size:
            40px;

          font-weight:
            600;

          line-height:
            1.2;

          text-transform:
            uppercase;

          letter-spacing:
            0.02em;

          color:
            var(--color-dark);

          margin:
            0 0 24px;
        }


        /* =================================================
           DESCRIPTION
        ================================================= */

        .intro {

          max-width:
            760px;

          margin:
            0 auto 48px;

          font-size:
            13px;

          line-height:
            1.75;

          color:
            rgba(0, 18, 18, 0.68);
        }


        /* =================================================
           SPECIFICATIONS / IDEAL FOR
        ================================================= */

        .info-grid {

          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          gap:
            48px;

          padding-bottom:
            48px;

          margin-bottom:
            48px;

          border-bottom:
            1px solid
            var(--color-border);
        }


        .mini-heading {

          font-family:
            var(--font-body);

          font-size:
            16px;

          font-weight:
            600;

          color:
            var(--color-black);

          margin:
            0 0 14px;
        }


        /* =================================================
           SPECIFICATION LIST
        ================================================= */

        .spec-list {

          list-style:
            none;

          margin:
            0;

          padding:
            0;

          display:
            flex;

          flex-direction:
            column;

          gap:
            8px;
        }


        .spec-list li {

          font-size:
            13px;

          line-height:
            1.65;

          color:
            rgba(0, 18, 18, 0.68);
        }


        .spec-arrow {

          color:
            var(--color-green);

          margin-right:
            4px;
        }


        .spec-list strong {

          font-weight:
            700;

          color:
            var(--color-black);
        }


        /* =================================================
           IDEAL FOR
        ================================================= */

        .ideal-for {

          font-size:
            13px;

          line-height:
            1.75;

          color:
            rgba(0, 18, 18, 0.68);

          margin:
            0;
        }


        /* =================================================
           ALL PRODUCT SECTIONS
        ================================================= */

        .product-sections {

          width:
            100%;
        }


        /* =================================================
           SINGLE PRODUCT SECTION
        ================================================= */

        .product-section {

          width:
            100%;

          margin-bottom:
            72px;
        }


        .product-section:last-child {

          margin-bottom:
            0;
        }


        /* =================================================
           SECTION HEADING
        ================================================= */

        .product-section__header {

          display:
            flex;

          align-items:
            center;

          gap:
            20px;

          margin:
            0 0 28px;
        }


        .product-section__heading {

          flex-shrink:
            0;

          font-family:
            var(--font-heading);

          font-size:
            28px;

          font-weight:
            600;

          line-height:
            1.3;

          text-transform:
            uppercase;

          letter-spacing:
            0.02em;

          color:
            var(--color-dark);

          margin:
            0;
        }


        .product-section__line {

          flex:
            1;

          height:
            1px;

          background:
            var(--color-border);
        }


        /* =================================================
           PRODUCT GRID
        ================================================= */

        .product-grid {

          display:
            grid;

          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );

          gap:
            28px;
        }


        /* =================================================
           PRODUCT CARD
        ================================================= */

        .product-card {

          display:
            flex;

          flex-direction:
            column;

          min-width:
            0;

          color:
            inherit;

          border:
            1px solid
            var(--color-border);

          border-radius:
            14px;

          padding:
            16px;

          background:
            #ffffff;

          transition:
            box-shadow 0.15s ease,
            transform 0.15s ease;
        }


        .product-card:hover {

          box-shadow:
            0 8px 24px
            rgba(0, 18, 18, 0.08);

          transform:
            translateY(-2px);
        }


        /* =================================================
           PRODUCT IMAGE
        ================================================= */

        .product-card__img {

          position:
            relative;

          width:
            100%;

          aspect-ratio:
            1 / 1;

          border-radius:
            10px;

          overflow:
            hidden;

          margin-bottom:
            16px;

          background:
            #ffffff;
        }


        .cover-img {

          object-fit:
            contain;

          width:
            100%;

          height:
            100%;
        }


        /* =================================================
           PRODUCT NAME
        ================================================= */

        .product-card__name {

          font-family:
            var(--font-heading);

          font-size:
            15px;

          font-weight:
            700;

          line-height:
            1.35;

          color:
            var(--color-dark);

          margin:
            0 0 8px;
        }


        /* =================================================
           PRODUCT DESCRIPTION
        ================================================= */

        .product-card__desc {

          font-size:
            12px;

          line-height:
            1.6;

          color:
            rgba(0, 18, 18, 0.65);

          margin:
            0 0 8px;
        }


        /* =================================================
           PRODUCT META
        ================================================= */

        .product-card__meta {

          font-size:
            11.5px;

          line-height:
            1.6;

          color:
            rgba(0, 18, 18, 0.5);

          margin:
            0 0 4px;
        }


        /* =================================================
           ENQUIRE BUTTON
        ================================================= */

        .btn-outline {

          display:
            inline-flex;

          align-items:
            center;

          gap:
            6px;

          width:
            fit-content;

          font-size:
            12px;

          font-weight:
            600;

          color:
            var(--color-green);

          border:
            1px solid
            var(--color-green);

          border-radius:
            999px;

          padding:
            9px 18px;

          margin-top:
            12px;

          cursor:
            pointer;
        }


        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 1024px) {

          .product-grid {

            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }


          .info-grid {

            gap:
              32px;
          }


          .product-section__heading {

            font-size:
              25px;
          }
        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 768px) {

          .category-page {

            --side-padding:
              20px;
          }


          .container {

            padding:
              40px
              var(--side-padding)
              56px;
          }


          .heading-xl {

            font-size:
              28px;

            margin-bottom:
              16px;
          }


          .intro {

            font-size:
              12px;

            margin-bottom:
              32px;
          }


          /* Specifications */

          .info-grid {

            grid-template-columns:
              1fr;

            gap:
              28px;

            padding-bottom:
              32px;

            margin-bottom:
              40px;
          }


          .mini-heading {

            font-size:
              14px;
          }


          .spec-list li,
          .ideal-for {

            font-size:
              12px;
          }


          /* Product sections */

          .product-section {

            margin-bottom:
              48px;
          }


          .product-section__header {

            gap:
              12px;

            margin-bottom:
              18px;
          }


          .product-section__heading {

            font-size:
              21px;

            line-height:
              1.3;
          }


          /* Product grid */

          .product-grid {

            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            gap:
              16px;
          }


          /* Card */

          .product-card {

            padding:
              10px;

            border-radius:
              12px;
          }


          /* Image */

          .product-card__img {

            border-radius:
              8px;

            margin-bottom:
              12px;
          }


          /* Name */

          .product-card__name {

            font-size:
              13px;
          }


          /* Description */

          .product-card__desc {

            font-size:
              10.5px;
          }


          /* Meta */

          .product-card__meta {

            font-size:
              10px;
          }


          /* Button */

          .btn-outline {

            font-size:
              10px;

            padding:
              8px 12px;
          }
        }


        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 420px) {

          .container {

            padding-left:
              16px;

            padding-right:
              16px;
          }


          .heading-xl {

            font-size:
              25px;
          }


          .product-section__heading {

            font-size:
              19px;
          }


          .product-grid {

            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            gap:
              12px;
          }


          .product-card {

            padding:
              8px;
          }


          .product-card__name {

            font-size:
              11.5px;
          }


          .product-card__desc {

            font-size:
              9px;
          }


          .product-card__meta {

            font-size:
              8.5px;
          }


          .btn-outline {

            font-size:
              8.5px;

            padding:
              7px 9px;
          }
        }

      `}</style>

    </main>
  );
}