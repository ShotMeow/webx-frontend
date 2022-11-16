export const showSecondsHelper = (time: number) => {
    const seconds = String(Math.floor(time % 60));
    const lastNum = seconds[seconds.length - 1];

    if (seconds === "0") return "";
    if ("1".includes(lastNum)) return `${seconds} секунда`;
    else if (["0", "5", "6", "7", "8", "9"].includes(lastNum))
        return `${seconds} секунд`;
    else if (["2", "3", "4"].includes(lastNum)) return `${seconds} секунды`;
};
