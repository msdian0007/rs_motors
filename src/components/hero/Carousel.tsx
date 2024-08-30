"use client"

import React, { useEffect, useState } from "react";
import SideCarousel from "./SideCarousel";
import MidCarousel from "./MidCarousel";
import { vehicles } from "@/constants";

const Carousel = () => {
    const [newStocks, setNewStocks] = useState(vehicles);
    const [isManually, setIsManually] = useState(false)
    let mid = Math.floor(vehicles.length / 2)
    const rightCarousel = () => {
        let elements = []
        for (let i = newStocks.length - 1; i > mid; i--) {
            elements.push((
                <div className={`${i < newStocks.length ? "-ml-[75px]" : ""} relative`}>
                    <SideCarousel key={i} link={newStocks[i]} />
                </div>
            ))
        }
        return elements
    }

    const handleManually = (flag: string) => {
        setIsManually(true)
        let temp = newStocks
        if (flag === 'F') {
            temp.push(newStocks[0])
            temp.shift()
        } else {
            temp.unshift(newStocks[newStocks.length - 1])
            temp.pop()
        }
        setNewStocks([...temp]);
    }

    useEffect(() => {
        let intervalId: any
        if (!intervalId && !isManually) {
            intervalId = setInterval(() => {
                let temp = newStocks
                temp.push(newStocks[0])
                temp.shift()
                setNewStocks([...temp]);
            }, 5000);
        }

        return () => clearInterval(intervalId);
    }, [vehicles.length, isManually]);
    return (
        <div className="relative flex-center  h-full gap-[100px] w-full overflow-hidden">
            <div className="flex-center flex-col md:flex-row gap-[350px]">
                {/* LEFT */}
                <div className="flex flex-col items-center md:flex-row">
                    {newStocks.map((link, i) => {
                        if (i < mid) {
                            return (
                                <div className={`${i > 0 ? "-ml-[75px]" : ""} relative `}>
                                    <SideCarousel key={link} link={link} />
                                </div>
                            );
                        }
                    })}
                </div>

                {/* RIGHT */}
                <div className="flex flex-col-reverse items-center md:flex-row-reverse">
                    {rightCarousel()}
                </div>
            </div>
            <MidCarousel link={newStocks[mid]} handleManually={handleManually} />
        </div>
    );
};

export default Carousel;
