import Camera from "../assets/Category-Camera.png";
import CellPhone from "../assets/Category-CellPhone.png";
import Computer from "../assets/Category-Computer.png";
import Gamepad from "../assets/Category-Gamepad.png";
import Headphone from "../assets/Category-Headphone.png";
import SmartWatch from "../assets/Category-SmartWatch.png";
import TitleLabel from "./Layouts/TitleLabel";
import BrowseCatagory from "./Layouts/BrowseCatagory";
import DescriptionLabel from "./Layouts/DescriptionLabel";
export default function BrowseCatagories() {
  return (
    <>
      <main className="flex flex-col gap-10">
        <TitleLabel>{["Catagories"]}</TitleLabel>
        <div>
          <DescriptionLabel>Catagories</DescriptionLabel>
        </div>
        <div className="grid grid-cols-6 gap-8">
          <BrowseCatagory
            catagoryImg={
              "https://static1.squarespace.com/static/527679aee4b06f1a7db2bffd/5276a43ee4b02ee843116503/594f6fcfbf629a4fd2196496/1697039488820/public_uploads_destaqueshome_resized_IMG_4844-1100x1100.jpg?format=1500w"
            }
            link={"/products/men"}
          >
            Men's Collection
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://static-01.daraz.pk/p/9737c190095696f5b43f7e9ed2f3fbd4.jpg"
            }
            link={"/products/women"}
          >
            Women's Collection
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://www.hopkicks.pk/image/cache/catalog/2023/JULY%2023/I-SHOES/29/8-1100x1100.jpg"
            }
            link={"/products/kids"}
          >
            Kids Collection
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://media1.popsugar-assets.com/files/thumbor/DPAYKZVLHShuVdgQaxfetILfzEQ=/1100x1100/filters:format_auto():quality(85):extract_cover()/2016/02/25/914/n/1922564/724d9d40_edit_img_cover_file_40321412_1456408800_Gucci-Crisscross-Sandals-Trend.jpg"
            }
            link={"/products/heels"}
          >
            Heel's Collection
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://m.media-amazon.com/images/I/61nbBxfsXCL._AC_UF1000,1000_QL80_.jpg"
            }
            link={"/products/football"}
          >
            Football Shoes
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://cdn.endource.com/image/b8880dcf217665e6f329687073db7245/detail/russell-and-bromley-felix-square-toe-apron-loafer.jpg?optimizer=image&class=800"
            }
            link={"/products/formal"}
          >
            Formal Collection
          </BrowseCatagory>
        </div>
      </main>
    </>
  );
}
