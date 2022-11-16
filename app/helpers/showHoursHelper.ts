export const showHoursHelper = (time: number) => {
    const hours = String(Math.floor((time / 6000) % 60));
    const lastNum = hours[hours.length - 1];
    if (hours === "0") return "";
    if ("1".includes(lastNum)) return `${hours} час`;
    else if (["0", "5", "6", "7", "8", "9"].includes(lastNum))
        return `${hours} часов`;
    else if (["2", "3", "4"].includes(lastNum)) return `${hours} часа`;
};
