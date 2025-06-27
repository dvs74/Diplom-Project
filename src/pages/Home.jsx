import HeaderHero from "../components/HeaderHero";
import IntroSection from "../components/IntroSection";
import WhyUs from "../components/WhyUs";
import ServiceList from "../components/ServiceList";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeaderHero />
      <IntroSection />
      <WhyUs />

      <section className="services-section">
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Наши услуги</h2>
        <ServiceList />
      </section>

      <section className="form-section" id="form">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
