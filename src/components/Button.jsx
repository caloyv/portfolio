const Button = ({ children, link, target }) => {
  return (
    <div className="mt-2">
      <div className=" w-[150px] h-[44px] lg:w-[200px] lg:h-[60px] flex justify-center items-center  cursor-pointer relative">
        <a
          className="absolute z-20 inset-0 bg-og w-full h-full text-cream text-center font-bold flex justify-center items-center font-mulish transition-transform duration-300 text-[1.1875rem] lg:text-[1.4rem] -translate-y-2 -translate-x-2 hover:translate-x-0 hover:translate-y-0"
          href={link}
          target={target ? "_blank" : ""}
        >
          {children}
        </a>
        <div className="absolute z-10 -inset-[2px]  border-2 border-black/70 " />
      </div>
    </div>
  );
};

export default Button;
