
// antes 
function example() {
    if (level + 1 < tags.length) {}
}

// depois 
function example() {
    const nextLevel = level + 1;
    if (nextLevel < tags.length) {}
}