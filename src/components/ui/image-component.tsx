function ImageComponent({
  imageBoxClass,
  imageClass,
  image,
}: {
  imageBoxClass?: string;
  imageClass?: string;
  image?: string;
}) {
  return (
    <div className={`object-contain ${imageBoxClass}`}>
      <img src={`${image}`} alt="Image-here" className={`${imageClass}`} />
    </div>
  );
}

export default ImageComponent;
