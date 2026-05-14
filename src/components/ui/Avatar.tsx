interface AvatarProps {
  src: string;
  alt?: string;
  className?: string;
}

const Avatar = ({
  src,
  alt,
  className,
}: AvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
    />
  );
};

export default Avatar;