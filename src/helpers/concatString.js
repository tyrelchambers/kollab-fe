export default (title, endNum) => {
  if (!title) return false;
  console.log(title)
  const str = title.length < endNum ? title : title.slice(0,endNum) + "...";
  return str; 
}