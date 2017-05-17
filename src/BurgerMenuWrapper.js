import React from 'react'
import { slide as BurgerMenu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

const BurgerMenuWrapper = (props) => (
    <div id="outer-container">
        <BurgerMenu
            onStateChange={props.onStateChange}
            isOpen={props.isOpen}
            styles={styles}
            pageWrapId={ "page-wrap" }
            outerContainerId={ "outer-container" }
        >
            {
                props.links.map(
                    (link, index) => (
                        <Link key={index} to={link.path}>{link.label}</Link>
                    )
                )
            }
        </BurgerMenu>
        <div id="page-wrap">
            {
                props.children
            }
        </div>
    </div>
)

export default BurgerMenuWrapper

