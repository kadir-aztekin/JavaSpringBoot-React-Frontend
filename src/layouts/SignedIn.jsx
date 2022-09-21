import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn(signIn) 
{
  return (
    <div>
            <Menu.Item>
                <Image avatar spaced="right" src="../images/Ekran görüntüsü 2022-08-10 035755.jpg"/>
                <Dropdown pointing="top left" text="Kadir">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signIn.signdOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
  )
}
