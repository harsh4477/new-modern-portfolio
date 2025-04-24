import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex justify-end pointer-events-none select-none">
      <img
        src="/avatar2.png"
        alt="avatar"
        // width={637}
        // height={578}
        className="translate-z-0 w-[60%] lg:w-[80%] xl:w-[635px] z-10"
      />
    </div>
  );
};

export default Avatar;
