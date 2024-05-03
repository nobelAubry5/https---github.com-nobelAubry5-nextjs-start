import Image from "next/image";
import img1 from "../../public/assets/img_1.jpg";
import img2 from "../../public/assets/img_2.jpg";
import img3 from "../../public/assets/img_3.jpg";

export default function index() {
  return (
    <div>
      <h1>Galerie d'images</h1>
      <Image src={img1} width="2992" height="3992" />
      <Image src={img2} width="5163" height="3872" />
      <Image src={img3} width="4800" height="7200" />

      {/* <img src="/assets/img_1.jpg" alt="" />
      <img src="/assets/img_2.jpg" alt="" />
      <img src="/assets/img_3.jpg" alt="" /> */}
    </div>
  );
}
