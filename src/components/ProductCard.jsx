import { Star } from "lucide-react";

const ProductCard = ({
  title,
  description,
  price,
  originalPrice,
  rating,
  image,
  badge,
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
      <div className=" w-full bg-white flex flex-row justify-center overflow-hidden p-10">
        <img src={image} className="h-50" alt={title} />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.floor(rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            {rating.toFixed(1)}
          </span>
        </div>

        <h1 className="text-gray-900 mb-1 line-clamp-1">{title}</h1>

        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-bold">${price}</span>
          {originalPrice && (
            <span className="text-sm  line-through">${originalPrice}</span>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
