import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute left-0 -bottom-12 rotate-12 animate-pulse duration-75 z-0 w-[160px] xl:w-[220px] select-none pointer-events-none">
      <Image
        src="/bulb.png"
        alt="bulb"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
