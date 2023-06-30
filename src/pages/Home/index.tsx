import { useState } from "react";
import SelectRole from "../../components/SelectRole";
import Infos from "../../components/Infos";

export default function Home(): JSX.Element {

    const [screen, setScreen] = useState<string>('SelectRole');

    return (
        <>
            {screen === 'SelectRole' ? <SelectRole setScreen={setScreen} /> : <Infos screen={screen} />}
        </>
    )
}