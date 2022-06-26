import React, { useRef, useEffect, useState } from 'react';
import './scrol.scss';

const textShort = 'lorem ipsum lksdflkj sdflkjs dflkjsdflkdls slkd flsdf ';
const textMedium =
  'lorem ipsum klsdflkj sdflkj sdfkljsdlksd sdlkfsldkj sdlkfj sdlfkjsldfkj sldfkj sldfjkdf sdklfslkdjf sldkfjsldkfj';
const textLong =
  'پلاسخارت ئەوەشی روونکردەوە کە ئەم گرووپانە لە دەرەوەی جڵەوی دەوڵەتدان و پەیوەندییان بە هێزی ئاسایشی نیشتمانیی عێراقییەوە نی';
const text = textLong;
let animationDuration = text.length / 6;

if (animationDuration < 10) {
  animationDuration = 10;
}

const App = () => {
  const wrapperRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const B = [
    {
      Fullname: "جبار حسن مجيد",
      Mothername: "مجيد",
      Shurename: "اسكه محمد"
    },
    {
      Fullname: "له رين كوران احمد",
      Mothername: "احمد",
      Shurename: "حسيبه محمد"
    },
    {
      Fullname: "خيابان حسين كريم",
      Mothername: "الجمور",
      Shurename: "ريزاو محمد رضا"
    }
  ];



  const [data, setData] = useState([B]);
  let TextToString = data.map(function(data) {
    return data['Fullname'];
  });


  const headRow = () => {
    return Object.keys(data).map(item => {
      <p key={data[item]}>{data[item].Fullname}</p>	})
      }
  
console.log(headRow)
  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.clientWidth);
    }
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="dsf-breaking">
      <div className="dsf-breaking__title">ڕێنماییەکان</div>ڕێنماییەکان
      <div
        className="dsf-breaking__text"
        style={{
          '--animation-duration': `${animationDuration}s`,
          '--wrapper-width': `${wrapperWidth}px`
        }}
      >
        {headRow}
      </div>
    </div>
  );
};
export default App;