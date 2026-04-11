import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative bg-nl-primary py-24 px-6 lg:px-8 flex flex-col items-center text-center rounded-t-[40px]"
    >
      <h2 className="font-syne font-extrabold text-4xl lg:text-5xl tracking-tight text-white">
        Prêt à franchir le cap technologique ?
      </h2>
      <Link
        href="#contact"
        className="bg-nl-accent text-nl-primary shadow-nl-btn rounded-nl-btn font-dm font-bold text-sm px-10 py-4 mt-10 transition-opacity hover:opacity-90"
      >
        Discuter de mon projet
      </Link>
    </section>
  );
}
