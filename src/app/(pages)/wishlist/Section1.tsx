/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
  const [dataFinal, setDataFinal] = useState<any>();

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if(user) {
        const userId = user.uid;
        const songsRef = ref(dbFirebase, "songs");
        onValue(songsRef, (snapshot) => {
          const data = snapshot.val();
          if(data) {
            // Lặp qua mảng singerId xong tìm bản ghi ca sĩ có id đó
            // Object.keys(data) để lặp qua từ key của object data
            let songsArray = Object.keys(data).map(key => ({
              id: key,
              image: data[key].image,
              title: data[key].title,
              singer: "Hồ Quang Hiếu, Huỳnh Văn",
              listen: data[key].listen,
              singerId: data[key].singerId,
              categoryId: data[key].categoryId,
              time: "4:32",
              audio: data[key].audio,
              wishlist: data[key].wishlist
            }));

            songsArray = songsArray.filter(item => item.wishlist && item.wishlist[userId]);

            setDataFinal(songsArray);
          }
        })
      }
    });
  }, []);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài Hát Yêu Thích" />

        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {dataFinal && (
            <>
              {dataFinal.map((item: any) => (
                <SongItem2 key={item.id} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}