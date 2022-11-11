import SectionCard from "../../UI/SectionCard/SectionCard.js";
import SectionTitle from "../../UI/SectionCard/SectionTitle/SectionTitle.js";
import SectionContent from "../../UI/SectionCard/SectionContent/SectionContent.js";
import ContactCard from "./ContactCard/ContactCard.js";

const SectionThree = ({ title }) => {
  return (
    <SectionCard className="">
      <SectionTitle sectionTitle={title} />
      <SectionContent>
        <ContactCard
          contactInfo={{
            info: [
              {
                text: "+0(12) 000 123 3120",
                icon: true,
                svgParam: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                },
                svgVer: {
                  svgTitle: "home",
                  svgPath:
                    "M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z",
                },
              },
              {
                text: "mail@example.com",
                icon: true,
                svgParam: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                },
                svgVer: {
                  svgTitle: "home",
                  svgPath:
                    "M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z",
                },
              },
            ],
          }}
        />
        <ContactCard
          contactInfo={{
            info: [
              {
                text: null,
                icon: false,
                svgParam: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                },
                svgVer: {
                  svgTitle: "home",
                  svgPath:
                    "M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z",
                },
              },
              {
                text: null,
                icon: false,
                svgParam: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                },
                svgVer: {
                  svgTitle: "home",
                  svgPath:
                    "M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z",
                },
              },
              {
                text: null,
                icon: false,
                svgParam: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                },
                svgVer: {
                  svgTitle: "home",
                  svgPath:
                    "M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z",
                },
              },
              {
                text: null,
                icon: false,
                svgParam: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                },
                svgVer: {
                  svgTitle: "home",
                  svgPath:
                    "M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z",
                },
              },
            ],
          }}
        />
        <ContactCard
          contactInfo={{
            info: [
              {
                text: "Some Text",
                icon: false,
                svgParam: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                },
                svgVer: {
                  svgTitle: "home",
                  svgPath:
                    "M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z",
                },
              },
              {
                text: "Some Text",
                icon: false,
                svgParam: {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                },
                svgVer: {
                  svgTitle: "home",
                  svgPath:
                    "M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z",
                },
              },
            ],
          }}
        />
      </SectionContent>
      {/* <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.31554952543!2d-74.26054888834555!3d40.6971477651349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0IrRg9GY0L7RgNC6LCDQodGY0LXQtNC40ZrQtdC90LUg0JTRgNC20LDQstC1!5e0!3m2!1ssr!2srs!4v1667837021389!5m2!1ssr!2srs"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </SectionCard>
  );
};

export default SectionThree;
