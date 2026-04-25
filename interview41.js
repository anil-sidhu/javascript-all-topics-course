
//DocumentFragment is a lightweight DOM container 
// used to batch DOM updates 
// and improve performance by minimizing reflows.

const fragment = document.createDocumentFragment();
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  fragment.appendChild(li);
}
document.getElementById("list").appendChild(fragment);

// When you add elements one by one directly to the DOM, 
// the browser may:
// Recalculate layout (reflow)
// Repaint multiple times
// 👉 This hurts performance.
// DocumentFragment avoids this by batching updates.

