export const timeAgo = (dateString) => {
    const now = new Date();
    const lastUpdated = new Date(dateString);
  
    // Türkiye saat dilimi ile senkronize etmek için fark ekliyoruz (UTC+3)
    const offsetInHours = 3;
    const offsetInMilliseconds = offsetInHours * 60 * 60 * 1000;
    const adjustedLastUpdated = new Date(lastUpdated.getTime() + offsetInMilliseconds);
  
    const secondsAgo = Math.floor((now - adjustedLastUpdated) / 1000);
  
    let interval = Math.floor(secondsAgo / 31536000);
    if (interval >= 1) return `${interval} year${interval === 1 ? '' : 's'} ago`;
    interval = Math.floor(secondsAgo / 2592000);
    if (interval >= 1) return `${interval} month${interval === 1 ? '' : 's'} ago`;
    interval = Math.floor(secondsAgo / 86400);
    if (interval >= 1) return `${interval} day${interval === 1 ? '' : 's'} ago`;
    interval = Math.floor(secondsAgo / 3600);
    if (interval >= 1) return `${interval} hour${interval === 1 ? '' : 's'} ago`;
    interval = Math.floor(secondsAgo / 60);
    if (interval >= 1) return `${interval} minute${interval === 1 ? '' : 's'} ago`;
    return 'just now';
  };
  