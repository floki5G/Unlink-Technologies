import { useEffect } from "react";
import { RocketsComponent } from "../components/rockets";
import { PageLayout } from "../features/PageLoyout";
import { useAppDispatch } from "../redux/configure-store";
import { updateRockets } from "../redux/slices/common";
import PopUpModel from "../features/PopUpModel";

export function Rockets() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const getV5Rockets = async () => {
            const response = await fetch("https://api.spacexdata.com/v4/rockets", {
                method: "GET",
            });
            const data = await response.json();
            return data;
        };
        // ? get data
        getV5Rockets().then((data) => dispatch(updateRockets(data)));
    }, [dispatch]);
    return (
        <>
            <PopUpModel />
            <PageLayout>
                <RocketsComponent />
            </PageLayout>
        </>
    );
}
