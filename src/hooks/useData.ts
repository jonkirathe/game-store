import {useToast} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import apiClient, {CanceledError} from "../services/api-client.ts";
import {FetchResponse} from "../models/FetchResponse.ts";

const useData = <T>(endpoint: string) => {
    const toast = useToast()
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then((res) => {
                setIsLoading(false)
                setData(res.data.results)
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                toast({
                    title: 'Message',
                    description: err.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
                console.log(err.message)
                setIsLoading(false)
            })
        return () => controller.abort();
    }, [toast, endpoint]);

    return {data, setData, isLoading}
}

export default useData;