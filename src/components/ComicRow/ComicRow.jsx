import {  useState } from "react";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 151.5;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div id="comicRow" className="mb-[30px] overflow-hidden">
            <h2 className="my-0 mr-0 ml-[30px] text-3xl font-bold">{title}</h2>
            <div id="arrowLeft" className="absolute w-10 h-56 bg-[#00000099] z-[99] flex items-center justify-center overflow-hidden cursor-pointer opacity-0 transition-all ease-in-out delay-[0.4s] left-0"
                onClick={handleLeftArrow}>
                <ArrowLeftIcon style={{ fontSize: 50 }} />
            </div>
            <div id="arrowRight" className="absolute w-10 h-56 bg-[#00000099] z-[99] flex items-center justify-center overflow-hidden cursor-pointer opacity-0 transition-all ease-in-out delay-[0.4s] right-0"
                onClick={handleRightArrow}>
                <ArrowRightIcon style={{ fontSize: 50 }} />
            </div>
            <div className="overflow-x-hidden pl-[30px]" style={{
                marginLeft: scrollX,
                width: items.results.length * 160
            }}>
                <div className="transition-all ease-in-out delay-[0.4s]">
                    {items.results.map((item, key) => (
                        <div key={key} className="inline-block w-[150px] cursor-pointer">
                            <img className="w-full transform scale-90 transition-all ease-in-out delay-[0.25s] hover:transform hover:scale-100"
                                src={`${item.thumbnail.path}/portrait_uncanny.jpg`} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}