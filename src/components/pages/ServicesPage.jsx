import counsultingImg from "@/assets/doors-img/unsplash-images/consulting.jpg";
import deliveryImg from "@/assets/doors-img/unsplash-images/delivery.jpg";
import doorInstallationImg from "@/assets/doors-img/unsplash-images/doors-installation.jpg";
import electricalAppliancesImg from "@/assets/doors-img/unsplash-images/electrical-appliances.jpg";
import glassCuttingImg from "@/assets/doors-img/unsplash-images/glass-cutting.jpg";
import { useAnimationOncePerSession } from "@/hooks/useAnimationOncePerSession";
import { l10n } from "@/textTranslation";
import { motion, useInView } from "framer-motion";
import { ArrowBigUp } from "lucide-react";
import { useContext, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { LanguageContext } from "../store/LanguageContext";

export default function ServicesPage() {
  const { language } = useContext(LanguageContext);
  const servicesText = l10n[language].servicesPage;

  const OUR_SERVICES = [
    {
      id: 1,
      img: counsultingImg,
      header: servicesText.consulting.header,
      subheader: servicesText.consulting.subheader,
      details: servicesText.consulting.details,
      backCard: {
        header: servicesText.consulting.backCard.header,
        phones: servicesText.consulting.backCard.phones,
        visitUs: servicesText.visitUs.text,
        address: servicesText.visitUs.address,
      },
    },
    {
      id: 2,
      img: deliveryImg,
      header: servicesText.delivery.header,
      subheader: servicesText.delivery.subheader,
      details: servicesText.delivery.details,
      backCard: {
        header: servicesText.delivery.backCard.header,
        phones: servicesText.delivery.backCard.phones,
        visitUs: servicesText.visitUs.text,
        address: servicesText.visitUs.address,
      },
    },
    {
      id: 3,
      img: doorInstallationImg,
      header: servicesText.installation.header,
      subheader: servicesText.installation.subheader,
      details: servicesText.installation.details,
      backCard: {
        header: servicesText.installation.backCard.header,
        phones: servicesText.installation.backCard.phones,
        visitUs: servicesText.visitUs.text,
        address: servicesText.visitUs.address,
      },
    },
    {
      id: 4,
      img: glassCuttingImg,
      header: servicesText.glassCutting.header,
      subheader: servicesText.glassCutting.subheader,
      details: servicesText.glassCutting.details,
      backCard: {
        header: servicesText.glassCutting.backCard.header,
        phones: servicesText.glassCutting.backCard.phones,
        visitUs: servicesText.visitUs.text,
        address: servicesText.visitUs.address,
      },
    },
    {
      id: 5,
      img: electricalAppliancesImg,
      header: servicesText.repair.header,
      subheader: servicesText.repair.subheader,
      details: servicesText.repair.details,
      backCard: {
        header: servicesText.repair.backCard.header,
        phones: servicesText.repair.backCard.phones,
        visitUs: servicesText.visitUs.text,
        address: servicesText.visitUs.address,
      },
    },
  ];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {" "}
          {l10n[language].title.main} | {l10n[language].title.servicesPage}
        </title>
      </Helmet>

      <div id="ourServices" className="bg-background_secondary md:py-20">
        <div
          id="services-content-container"
          className="mx-auto max-w-[1600px] px-container-padding py-20 "
        >
          <ol className="grid gap-14 md:gap-36">
            {OUR_SERVICES.map((service) => {
              return <ServiceItem key={service.id} service={service} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

function ServiceItem({ service }) {
  const serviceRef = useRef(null);
  const serviceIsInView = useInView(serviceRef, {
    once: true,
    margin: "-200px",
  });
  const serviceAnimationHasPlayed =
    useAnimationOncePerSession("serviceAnimation");

  const serviceVariants = !serviceAnimationHasPlayed
    ? {
        visible: {
          opacity: [0.5, 1],
          scale: [0.7, 1],
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        },
        hidden: {
          opacity: 0,
        },
      }
    : {};

  return (
    <motion.li
      ref={serviceRef}
      id="service-container"
      className="grid items-center md:grid-cols-2"
      variants={serviceVariants}
      animate={serviceIsInView ? "visible" : "hidden"}
    >
      <div
        id="service-text-container"
        className={`group order-2 cursor-pointer [perspective:1000px] md:z-10 md:h-5/6 ${service.id % 2 === 1 ? "md:order-2 md:-ml-10" : "md:-mr-10"}`}
      >
        <div className="relative h-[350px] shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] md:h-full">
          <div className="absolute inset-0">
            <div className="h-full rounded-md bg-background p-5 md:p-10">
              <h3 className="pb-2 font-roboto text-xl font-semibold md:text-2xl">
                {service.header}
              </h3>
              <p className="pb-4 text-muted-foreground">{service.subheader}</p>
              <p className="pb-6 text-sm sm:text-base">{service.details}</p>
              <div
                id="service-arrow-container"
                className="absolute bottom-5 right-5 flex size-[50px] items-center justify-center rounded-full bg-background_secondary"
              >
                <ArrowBigUp className="w-full rotate-90 scale-125 text-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex w-full items-center justify-center rounded-md bg-muted-foreground px-12 text-center text-accent [backface-visibility:hidden] [transform:rotateY(180deg)] md:h-full">
            <div className="grid gap-2 p-5 md:p-10">
              <h3>{service.backCard.header}</h3>
              <div>
                {service.backCard.phones.map((phone) => {
                  return <p key={phone}>{phone}</p>;
                })}
              </div>
              <h3 className="mt-4">{service.backCard.visitUs}</h3>
              <p>{service.backCard.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="service-image-container"
        className={`order-1 grid h-[350px] items-end bg-cover bg-center ${service.id % 2 === 1 ? "md:order-1" : "md:order-2"}`}
        style={{ backgroundImage: `url(${service.img})` }}
      ></div>
    </motion.li>
  );
}
