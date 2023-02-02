import { useState } from "react"
import Link from "next/link"
import { Container, Menu as MenuWeb, Grid, Icon, Label } from "semantic-ui-react"
import BasicModal from "../../Modal/BasicModal/BasicModal";
import Auth from "../../Auth/Auth";

export default function Menu() {

    const[ showModal, setShowModal ] = useState(false)
    const[ titleModal, setTitleModal ] = useState("Iniciar Sesión")


const onShowModal = () => setShowModal(true)
const onCloseModal = () => setShowModal(true)

  return (
    <div className="menu">
        <Container>
            <Grid>
                <Grid.Column className="menu__left" width={6}>
                    <MenuPLatform/>
                </Grid.Column>
                <Grid.Column className="menu__right" width={10}>
                    <MenuOptions onShowModal={onShowModal}/>
                </Grid.Column>
            </Grid>
        </Container>
        <BasicModal 
            show={showModal}
            setShow={setShowModal}
            title={titleModal}
            size="small"
        >
            <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal}/>
        </BasicModal>
    </div>
  )
}


function MenuPLatform() {
    return(
        <MenuWeb>
            <Link href="./playstation">
                <MenuWeb.Item>PlayStation</MenuWeb.Item>
            </Link>
            <Link href="./xbox">
                <MenuWeb.Item>Xbox</MenuWeb.Item>
            </Link>
            <Link href="./switch">
                <MenuWeb.Item>Switch</MenuWeb.Item>
            </Link>
        </MenuWeb>
    )
}

function MenuOptions(props) {
const { onShowModal } = props;

    return(
        <MenuWeb>
            <Link href="">
                <MenuWeb.Item onClick={onShowModal}>
                    <Icon name="user outline"/>
                        Mi cuenta
                </MenuWeb.Item>
            </Link>
        </MenuWeb>
    )
}

// ALWAYSDATA
// NAME homer-admin1205 
// pass H7ZLDr5.Rm-p*fz

//user 
// 298235_homer
// H7ZLDr5.Rm-p*fz