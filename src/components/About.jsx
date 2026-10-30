import ProductCard from "./shared/ProductCard";

const products = [
    {
        image: "https://m.media-amazon.com/images/I/71MXmswILHL._AC_UY218_.jpg",
        productName: "iPhone 13 Pro Max",
        description:
            "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
        specialPrice: 720,
        price: 780,
    },
    {
        image: "https://m.media-amazon.com/images/I/71eUNTW+nJL._AC_UY218_.jpg",
        productName: "Samsung Galaxy S21",
        description:
            "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
        specialPrice: 699,
        price: 799,
    },
    {
        image: "https://m.media-amazon.com/images/I/51m05sG5UhL._AC_UY218_.jpg",
        productName: "Google Pixel 6",
        description:
            "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
        price: 599,
        specialPrice: 400,
    }
];

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us 
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4 leading-relaxed">
  Welcome to our premium e-commerce destination, where quality meets elegance and every detail is crafted to deliver a refined shopping experience. We are committed to offering exceptional products with uncompromising standards of trust, service, and sophistication.
  <br /><br />
  At the heart of our brand lies <span className="font-semibold">Shopora Nexus (शॉपोरा नेक्सस)</span> — a philosophy of thoughtful creation, timeless design, and meaningful innovation that defines everything we bring to you.
  <br /><br />
  <span className="mt-3 italic text-gray-500 font-medium">
    “Everything here, for everyone here”
  </span>
</p>
                </div>

                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="https://tse1.mm.bing.net/th/id/OIP.7IB-NF9XN8YHVp0kTkVNbgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"></img>
                </div>
            </div>


            <div className="py-7 space-y-8">
                <h1 className="text-slate-800 text-4xl font-bold text-center">
                    Our Products (उत्पाद)
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            productName={product.productName}
                            description={product.description}
                            specialPrice={product.specialPrice}
                            price={product.price}
                            about
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;