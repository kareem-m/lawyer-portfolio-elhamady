function getGoogleDriveFileId(image) {
  try {
    const url = new URL(image);
    if (url.hostname !== "drive.google.com") return null;

    return (
      url.searchParams.get("id") ||
      url.pathname.match(/^\/file\/d\/([^/]+)/)?.[1] ||
      url.pathname.match(/^\/uc\/(?:export\/[^/]+\/)?([^/]+)/)?.[1] ||
      null
    );
  } catch {
    return null;
  }
}

export function normalizeImageUrl(image) {
  const fileId = getGoogleDriveFileId(image);
  return fileId
    ? `https://lh3.googleusercontent.com/d/${encodeURIComponent(fileId)}=w1600`
    : image;
}

export function getPublicImageUrl(image) {
  return normalizeImageUrl(image);
}
