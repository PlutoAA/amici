import styles from './video.module.scss'

export function Video({ width, height, videoUrl }: IVideo) {
  return (
    <video className={styles.video} width={width} height={height} preload="none" autoPlay loop muted playsInline>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

interface IVideo {
  width: string
  height: string
  videoUrl: string
}