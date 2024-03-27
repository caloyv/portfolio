const Section = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={` px-8 py-5 md:px-20 lg:py-14 lg:px-24 xl:px-0 max-w-[1100px] mx-auto ${className ? className : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
