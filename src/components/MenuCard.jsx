/*
  Reusable MenuCard for the MENU section.
  Props:
    - bgImage: string (public url e.g. "/assests/main%20image.jpg")
    - price: string (e.g. "26.90 zt")
    - itemImage: string (public url for the product image)
    - title: string
    - description: string
    - origin: 'origin-bottom-right' | 'origin-bottom-left' (default: origin-bottom-right)
*/

export default function MenuCard({
  bgImage = "/assests/main%20image.jpg",
  price = "₹99.00",
  itemImage = "/assests/menu%20item.png",
  title = "Black Cumin Burger",
  description = "A gourmet burger crafted with signature spices and fresh ingredients for unforgettable flavor.",
  origin = "origin-bottom-right",
}) {
  return (
    <div
      className={`col_1 w-full md:w-[23.5%] h-[340px] sm:h-[360px] md:h-full bg-cover bg-center rounded-[10px] relative overflow-hidden ${origin}`}
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* dark radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_-34%,rgba(135,0,25,0)_0%,rgba(0,0,0,0.6783)_100%)]"></div>

      {/* price */}
      <div className="price_tag">
        <p className="text-[#d3d3d3] font-bold text-[4.2vw] sm:text-[3.8vw] md:text-[1.4vw] absolute top-[5%] left-[5%] z-[20]">{price}</p>
      </div>

      {/* product image */}
      <img
        src={itemImage}
        alt="menu item"
        className="w-[150px] sm:w-[170px] md:w-[260px] z-[10] absolute top-[16%] md:top-[20%] left-1/2 -translate-x-1/2"
      />

      {/* title */}
      <h2 className="text-[#d3d3d3] absolute bottom-[28%] left-[5%] text-[17px] sm:text-[18px] md:text-[22px] z-[20]">
        {title}
      </h2>

      {/* description */}
      <div className="sub_info">
        <p className="text-[#808080] text-[11px] sm:text-[12px] w-[90%] absolute bottom-[17%] left-[5%] z-[20] line-clamp-2 md:line-clamp-none">
          {description}
        </p>
      </div>

      {/* counter */}
      <div className="counter w-[90px] h-[30px] bg-[#212121] absolute rounded-[50px] bottom-[5%] left-[5%] overflow-hidden text-white flex items-center justify-center z-[20]">
        <span className="cursor-pointer text-[#b2b2b2]">-</span>
        <p className="text-white font-bold px-[20px]">1</p>
        <span className="cursor-pointer text-[#b2b2b2]">+</span>
      </div>

      {/* add to cart */}
      <div className="cart_btn w-[60px] h-[30px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(115,212,0,1)_0%,rgba(53,116,0,1)_100%)] rounded-[50px] absolute bottom-[5%] left-[38%] sm:left-[42%] md:left-[42%] text-white flex items-center justify-center cursor-pointer z-[20]">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  )
}
