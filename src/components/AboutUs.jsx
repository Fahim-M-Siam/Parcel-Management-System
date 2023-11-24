// @ts-nocheck
import SectionTitle from "./SectionTitle/SectionTitle";

// @ts-nocheck
const AboutUs = () => {
  return (
    <div className="my-20">
      <section className="mt-20">
        <div className="max-w-7xl mx-auto mb-20">
          <SectionTitle heading={"About Ship Ease"}></SectionTitle>
          <div className="flex flex-col md:flex-col lg:flex-row lg:gap-4">
            <div className="w-full md:w-full lg:w-[50%]">
              <h2 className="text-center text-2xl font-semibold">
                Our Journey with ShipEase
              </h2>
              <p className="text-xs text-start mt-5 p-5 lg:p-1">
                At ShipEase, we embark on a mission to redefine the landscape of
                parcel management. Founded with a vision to simplify and enhance
                the way parcels are sent and received, our journey is woven with
                a commitment to excellence, innovation, and customer
                satisfaction.ShipEase is more than just a delivery service; we
                are a team of dedicated individuals passionate about crafting a
                seamless and reliable shipping experience for users worldwide.
                Our platform is a result of meticulous planning, cutting-edge
                technology, and a collective desire to make parcel management
                effortless for everyone.We are committed to fostering a
                community where trust, speed, and security converge. ShipEase is
                not just about moving parcels from point A to point B; it is
                about creating connections, delivering promises, and ensuring
                that each shipment carries not only packages but also peace of
                mind.Driven by innovation, ShipEase constantly evolves to stay
                ahead in the dynamic world of logistics. We invest in
                technologies that redefine industry standards, ensuring that our
                users benefit from the latest advancements in the parcel
                delivery landscape.At the heart of ShipEase is the empowerment
                of our users. We believe that everyone should have access to a
                shipping platform that is intuitive, user-friendly, and aligned
                with their unique needs. ShipEase is designed to empower
                individuals, businesses, and communities to connect effortlessly
                through the seamless exchange of parcels. As we continue our
                journey, we invite you to be a part of the ShipEase story.
                Whether you are a sender, a recipient, or a logistics
                enthusiast, join us in shaping the future of parcel management.
                Ship with confidence, ship with ShipEase – where every parcel
                tells a story, and every delivery is an experience.
              </p>
            </div>
            <div className="w-full md:w-full lg:w-[50%]">
              <img
                className="w-full"
                src="https://i.ibb.co/WnhzsZx/aboutUs.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
