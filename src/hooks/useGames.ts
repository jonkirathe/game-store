import {useEffect, useState} from "react";
import apiClient, {CanceledError} from "../services/api-client.ts";
import { useToast } from '@chakra-ui/react'
import {Game} from "../models/Game.ts";

const useGames = () => {
    const toast = useToast()
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<GamesResponse>('/games', {signal: controller.signal})
            .then((res) => setGames(res.data.results))
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
            })
        return () => controller.abort();
    }, []);

    return {games, setGames}
}

export default useGames;