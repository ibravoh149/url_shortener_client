 const toLocaleDate=(isoDate:string)=>{
  return new Date(isoDate).toLocaleString(undefined, {
    // day: '2-digit',
    // month: '2-digit',
    // year: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    dateStyle:"medium",
    timeStyle:"short",
    hour12:true
  });
}

export const formatDate=(isoDate:string)=>{
  if(!isoDate) return "N/A"
  return toLocaleDate(isoDate)
}