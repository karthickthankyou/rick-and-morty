/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes, useState } from 'react'
import NextImage from 'next/image'
import fallbackImg from 'src/assets/fallback.jpg'

export type IImageProps = React.ComponentProps<typeof NextImage> & {
  fallbackSrc?: string
  className?: HTMLAttributes<typeof NextImage>['className']
}

const Image = (props: IImageProps) => {
  const { src, fallbackSrc = fallbackImg, className, alt, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <NextImage
      {...rest}
      alt={alt}
      src={imgSrc}
      className={`object-cover ${className}`}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default Image
