import { useQuery, } from "react-query";
import { requestRegistrationURL } from "../utilities/axios-utils";

const fetchRegistrationData = () => {
    return requestRegistrationURL({ url: '/contacts'})
}

export const useRegistrationData = (onSuccess, onError) => {
    return useQuery('registration-data', fetchRegistrationData,{
        onSuccess,
        onError,
    })
}