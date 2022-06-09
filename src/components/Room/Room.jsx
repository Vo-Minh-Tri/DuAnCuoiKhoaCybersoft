import React from "react";

export default function Room(props) {
  const {room} = props;
  return (
    <div>
      <a href="#" className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={room.image}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{room.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{room.price}</p>
      </a>
    </div>
  );
}
