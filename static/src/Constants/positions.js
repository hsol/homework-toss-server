export function getPositionName(positionId) {
    const positionNames = {
        1: "Product Owner",
        2: "Front Office Dev.",
        3: "Back Office Dev.",
        4: "Quality Assurance",
        5: "Scrum Master"
    };

    return positionNames[positionId]
}

export function getPositionAvatar(positionId) {
    const avatarAsset = '/images/avatar';
    const figureGuest = `${avatarAsset}/blonde_jarket.png`;
    const positionAvatars = {
        1: `${avatarAsset}/old_mustache_blue_shirt.png`,
        2: `${avatarAsset}/blonde_glasses_sky_t.png`,
        3: `${avatarAsset}/brown_glasses_cardigan.png`,
        4: `${avatarAsset}/brown_mustache_blue_t.png`,
        5: `${avatarAsset}/brown_glasses_yellow_t.png`,
    };

    return positionAvatars[positionId] || figureGuest
}