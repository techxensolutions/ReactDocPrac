"use client";

import { TravelPlanNode } from "./Places";

type PlaceTreeProps = {
  id: number;
  parentId: number;
  placesById: Record<number, TravelPlanNode>;
  onComplete: (parentId: number, childId: number) => void;
};

export default function PlaceTree({
  id,
  parentId,
  placesById,
  onComplete,
}: PlaceTreeProps) {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(parentId, id)}>
        Visited
      </button>

      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}