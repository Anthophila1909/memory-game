import React from "react";

export default function GemischteKarten() {
  const cardIcons = ["🐶", "🐱", "🐭", "🦊", "🐻", "🐼", "🐨", "🐯"];
  const duplicatedIcons = [...cardIcons, ...cardIcons];
  const cardObjects = duplicatedIcons.map((icon, index) => ({
    id: index,
    icon: icon,
    matched: false,
    flipped: false,
  }));

  return cardObjects.sort(() => Math.random() - 0.5); // Shuffle the cards randomly
}
