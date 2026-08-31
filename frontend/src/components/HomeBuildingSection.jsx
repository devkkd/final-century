"use client";

import Image from "next/image";

export default function HomeBuildingSection() {
  return (
    <section className="hbs-section">
      <div className="hbs-image-wrap">
        <Image
          src="/images/home/4.png"
          alt="Century Overseas Papers"
          fill
          priority={false}
          sizes="100vw"
          className="hbs-image"
        />
      </div>

      <style jsx>{`
        /* =========================================
           BASE / DESKTOP
        ========================================= */

        .hbs-section {
          width: 100%;
          margin-top: 10px;
          padding: 0;
          overflow: hidden;
          box-sizing: border-box;

          /*
           * Prevent the section from creating unexpected
           * horizontal overflow during initial render.
           */
          position: relative;
          display: block;
        }

        .hbs-image-wrap {
          position: relative;

          width: 100%;
          height: 540px;

          margin: 0;
          padding: 0;

          overflow: hidden;
          box-sizing: border-box;

          /*
           * Important for Next/Image fill:
           * keeps the image anchored to this exact box
           * from the first render.
           */
          display: block;

          /*
           * Prevent layout changes caused by inline
           * image rendering/baseline calculations.
           */
          line-height: 0;
        }

        .hbs-image {
          /*
           * Keep original UI.
           */
          object-fit: cover;
          object-position: center;

          /*
           * Make image rendering deterministic.
           */
          display: block;

          /*
           * Prevent any inline baseline behaviour.
           */
          vertical-align: middle;
        }


        /* =========================================
           SMALL LAPTOP
           1025px - 1279px
        ========================================= */

        @media (min-width: 1025px) and (max-width: 1279px) {
          .hbs-image-wrap {
            width: 100%;
            height: 470px;
          }

          .hbs-image {
            object-fit: cover;
            object-position: center;
          }
        }


        /* =========================================
           TABLET
           769px - 1024px
        ========================================= */

        @media (min-width: 769px) and (max-width: 1024px) {
          .hbs-image-wrap {
            width: 100%;
            height: 400px;
          }

          .hbs-image {
            object-fit: cover;
            object-position: center center;
          }
        }


        /* =========================================
           MOBILE
           481px - 768px
        ========================================= */

        @media (min-width: 481px) and (max-width: 768px) {
          .hbs-image-wrap {
            width: 100%;
            height: 330px;
          }

          .hbs-image {
            object-fit: cover;
            object-position: center center;
          }
        }


        /* =========================================
           SMALL MOBILE
           361px - 480px
        ========================================= */

        @media (min-width: 361px) and (max-width: 480px) {
          .hbs-image-wrap {
            width: 100%;
            height: 270px;
          }

          .hbs-image {
            object-fit: cover;
            object-position: center center;
          }
        }


        /* =========================================
           VERY SMALL MOBILE
           <= 360px
        ========================================= */

        @media (max-width: 360px) {
          .hbs-image-wrap {
            width: 100%;
            height: 235px;
          }

          .hbs-image {
            object-fit: cover;
            object-position: center center;
          }
        }
      `}</style>
    </section>
  );
}