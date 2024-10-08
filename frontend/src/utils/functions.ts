export const getStatusTagTheme = (status:string) => {
    let statusTheme;

    switch (status.toLowerCase()) {
        case "paid":
            statusTheme = "bg-secondary-light-green border-green-20 text-green-1";
            break;
        case "pending payment":
            statusTheme = "bg-light-yellow border-yellow-20 text-secondary-orange";
            break;
        case "overdue":
            statusTheme = "bg-light-red border-red-20 text-red-1";
            break;
        case "partial payment":
            statusTheme = "bg-light-blue border-blue-20 text-blue-1";
            break;

        default:
            statusTheme = "bg-sgray-4 border-gray-5-20 text-gray-5";
            break;
    }

    return statusTheme
}

