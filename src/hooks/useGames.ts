import {useEffect, useState} from "react";
import apiClient, {CanceledError} from "../services/api-client.ts";
import { useToast } from '@chakra-ui/react'
import {Game} from "../models/Game.ts";

const useGames = () => {
    const toast = useToast()
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true)
        apiClient.get<GamesResponse>('/games', {signal: controller.signal})
            .then((res) => {
                setIsLoading(false)
                setGames(res.data.results)
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

    return {games, setGames, isLoading}
}

export default useGames;