import {useToast} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import apiClient, {CanceledError} from "../services/api-client.ts";
import {Genre} from "../models/Genre.ts";

interface GenreResponse {
    count: number,
    results: Genre[]
}

const useGenres = () => {
    const toast = useToast()
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true)
        apiClient.get<GenreResponse>('/genres', {signal: controller.signal})
            .then((res) => {
                setIsLoading(false)
                setGenres(res.data.results)
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
    }, [toast]);

    return {genres, setGenres, isLoading}
}

export default useGenres;