import Graduacao from "../../pages/Graduacao"
import PosGraduacao from "../../pages/PosGraduacao"
import SemiPresencial from "../../pages/SemiPresencial"

export default function Infos({screen}: {screen: string}): JSX.Element{

    if(screen == "graduacao"){
        return (<Graduacao />)
    } else if(screen == "pos_graduacao"){
        return (<PosGraduacao/>)
    } else if(screen == "semi_presencial"){
        return (<SemiPresencial/>)
    } else {
        return (<></>)
    }
}