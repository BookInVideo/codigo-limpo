// antes
function dive(reason) {
    saturateGradient();
    reticulateSplines();
    diveForMoog(reason);
}

// depois
function dive(reason) {
    const gradient = saturateGradient();
    const splines = reticulateSplines(gradient);
    diveForMoog(splines, reason);
}