import group from "../../../assets/icons/group.svg";
import delivery from "../../../assets/icons/deliveryt.svg";
import cheak from "../../../assets/icons/check.svg";
import person from "../../../assets/icons/person.svg";
import Group38729 from "../../../assets/icons/Group38729.svg";
import Wrench from "../../../assets/icons/Wrench.svg";

const WhyChooseUs = () => {
  const WhyChooseUs = [
    {
      img: group,
      imgTitle: "Expert Team",
    },
    {
      img: delivery,
      imgTitle: "Timely Delivery",
    },
    {
      img: person,
      imgTitle: "24/7 Support",
    },
    {
      img: cheak,
      imgTitle: "100% Guranty",
    },
    {
      img: Wrench,
      imgTitle: "Best Equipment",
    },
  ];

  return (
    <>
      <div className="w-full flex gap-2 flex-col justify-center">
        <h2 className="text-center text-xl text-[#ff3811]">Core Features</h2>
        <h2 className="text-center text-neutral-900 md:text-[45px] text-[32px] font-bold">
          Why Choose Us
        </h2>
        <p className=" text-center text-neutral-500 lg:text-base font-normal capitalize leading-[30px] px-4 md:text-md text-sm">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 my-8 justify-center px-4">
        {WhyChooseUs.map((choose) => (
          <div
            key={choose.imgTitle}
            className="w-[180px] h-[176px] p-4 rounded-[10px] border border-gray-200 my-4 flex flex-col justify-center"
          >
            <img src={choose.img} className="p-14" alt="" />

            <p className="text-center text-neutral-700 text-md font-bold pb-10">
              {choose.imgTitle}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyChooseUs;
