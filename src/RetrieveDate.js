// React object containing year, month, day and date
const dateInfo = {
    year: null,
    month: null,
    day: null,
    date: null,
    hour: null
}

//Function to retrieve the users year, month, day and date
const RetrieveDate = () =>{
    dateInfo.year = new Date().getFullYear();
    dateInfo.month = new Date().getMonth() + 1;  //This has zeroth index meaning January is 0, so I add 1 to each
    dateInfo.day = new Date().getDay();
    dateInfo.date = new Date().getDate();
    dateInfo.hour = new Date().getHours();

    return dateInfo;
};

export default RetrieveDate;