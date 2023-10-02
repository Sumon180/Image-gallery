import { FC } from "react";

interface Image {
  image: {
    tags: string;
    pageURL: string;
    webformatURL: string;
    user: string;
    views: number;
    downloads: number;
    likes: number;
  };
}

const ImageCard: FC<Image> = ({ image }) => {
  const tags = image.tags.split(",");
  console.log(image.pageURL);

  return (
    <div className="rounded overflow-hidden shadow-lg dark:bg-slate-800">
      <div className="cursor-pointer w-full h-80">
        <a href={image.pageURL} target="_blank" rel="noopener noreferrer">
          <img
            src={image.webformatURL}
            alt=""
            className="w-full h-full object-cover"
          />
        </a>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul className=" dark:text-white">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
