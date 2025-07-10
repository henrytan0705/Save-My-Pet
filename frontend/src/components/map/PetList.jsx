import React from "react";

const PetList = ({ pets, selectedPet, onSelectPet }) => {
  if (!pets || pets.length === 0) {
    return <p className="text-gray-600">No pets to display</p>;
  }

  return (
    <div className="space-y-4">
      {pets.map(post => {
        const statusLabel = post.status;
        const isActive    = selectedPet?._id === post._id;

        return (
          <div
            key={post._id}
            onClick={() => onSelectPet(post)}
            className={
              `flex items-start p-2 border rounded cursor-pointer ` +
              (isActive
                ? "bg-blue-50 border-blue-300"
                : "hover:bg-gray-50")
            }
          >
            {post.img && (
              <img
                src={post.img}
                alt={post.name}
                className="w-16 h-16 rounded object-cover mr-4"
              />
            )}
            <div className="flex-1">
              <h4 className="font-semibold">{post.name}</h4>
              <p className="text-sm text-gray-600">
                {post.animalType}
                {post.breed ? ` • ${post.breed}` : ""}
                {" • "}
                {post.gender}
              </p>
              <p className="text-sm font-medium">{statusLabel}</p>
              <p className="text-sm text-gray-600">{post.location}</p>
              {post.additionalInfo && (
                <p className="text-xs mt-1 italic">{post.additionalInfo}</p>
              )}
              <p className="text-xs text-gray-500">
                Microchipped: {post.microchipped}
              </p>
              <p className="text-xs text-gray-400">
                Reported: {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PetList;