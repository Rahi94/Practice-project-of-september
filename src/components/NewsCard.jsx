import { FaRegEye, FaStar } from "react-icons/fa";

export default function NewsCard({ news }) {
  const {
    title,
    thumbnail_url,
    image_url,
    details,
    rating,
    total_view,
    author,
    tags,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border rounded-2xl overflow-hidden mb-10">
      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url || image_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-xl font-bold">{title}</h2>

        {/* Author */}
        <div className="flex items-center gap-3 mt-2">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Details */}
        <p className="text-sm text-gray-700 mt-3 line-clamp-3">{details}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag, idx) => (
            <span key={idx} className="badge badge-primary badge-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar /> <span>{rating?.number}</span>
            {rating?.badge && (
              <span className="ml-2 badge badge-warning badge-sm">
                {rating?.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaRegEye /> <span>{total_view}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="card-actions justify-end mt-4">
          {others?.is_today_pick && (
            <span className="badge badge-secondary badge-outline">
              Today’s Pick
            </span>
          )}
          {others?.is_trending && (
            <span className="badge badge-accent badge-outline">Trending</span>
          )}
        </div>
      </div>
    </div>
  );
}
