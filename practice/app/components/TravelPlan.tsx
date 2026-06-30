"use client";

import { useState } from "react";
import PlaceTree from "./PlaceTree";
import { initialTravelPlan, TravelPlanNode } from "./Places";

export default function TravelPlan() {
  const [plan, setPlan] = useState<Record<number, TravelPlanNode>>(
    initialTravelPlan
  );

  function handleComplete(parentId: number, childId: number): void {
    const parent = plan[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <>
      <h2>Places to visit</h2>

      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}