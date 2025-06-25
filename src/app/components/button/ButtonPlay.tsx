/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FaPlay } from "react-icons/fa6";

export default function ButtonPlay(props: any) {
  const { id, image, title, singer, audio, className = "" } = props;

  const handlePlay = () => {
    const elementPlayAudio = document.querySelector(".play-audio");

    if(elementPlayAudio) {
      // Chèn song-id
      elementPlayAudio.setAttribute("song-id", id);

      // Phát nhạc
      const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");
      const elementSource: any = elementPlayAudio.querySelector(".inner-source");
      elementSource.src = audio;
      elementAudio.load();
      elementAudio.play();

      // Hiển thị khối Play
      if(elementPlayAudio.classList.contains("hidden")) {
        elementPlayAudio.classList.remove("hidden");
      }

      // Hiển thị ảnh
      const elementImage: any = elementPlayAudio.querySelector(".inner-image");
      elementImage.src = image;
      elementImage.alt = title;

      // Hiển thị tiêu đề
      const elementTitle: any = elementPlayAudio.querySelector(".inner-title");
      elementTitle.innerHTML = title;

      // Hiển thị ca sĩ
      const elementSinger: any = elementPlayAudio.querySelector(".inner-singer");
      elementSinger.innerHTML = singer;

      // Thêm class play vào inner-button-play
      const elementButtonPlay: any = elementPlayAudio.querySelector(".inner-button-play");
      elementButtonPlay.classList.add("play");

      // Lấy ra tổng thời gian
      const elementPlayTimeTotal: any = elementPlayAudio.querySelector(".inner-play-time .inner-total");
      const elementPlayTimeCurrent: any = elementPlayAudio.querySelector(".inner-play-time .inner-current");

      elementAudio.onloadedmetadata = () => {
        const totalTime = elementAudio.duration;
        elementPlayTimeTotal.max = totalTime;

        // Lấy ra thời gian hiện tại
        elementAudio.ontimeupdate = () => {
          const currentTime = elementAudio.currentTime;
          elementPlayTimeTotal.value = currentTime;
          const percent = currentTime * 100 / totalTime;
          elementPlayTimeCurrent.style.width = `${percent}%`;
        }
      }
    }
  }

  return (
    <>
      <button 
        onClick={handlePlay}
        className={className}
      >
        <FaPlay />
      </button>
    </>
  )
}