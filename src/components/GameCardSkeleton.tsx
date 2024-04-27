import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

export const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height="200px"/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    );
};