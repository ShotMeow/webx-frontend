export const showMinutesHelper = (time: number) => {
    const minutes = String(Math.floor((time / 100) % 60));
    const lastNum = minutes[minutes.length - 1];

    if (minutes === "0") return "";
    if ("1".includes(lastNum)) return `${minutes} минута`;
    else if (["0", "5", "6", "7", "8", "9"].includes(lastNum))
        return `${minutes} минут`;
    else if (["2", "3", "4"].includes(lastNum)) return `${minutes} минуты`;
};
