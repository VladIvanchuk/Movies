// Core
import { NavLink } from 'react-router-dom';

// Ant design
import { Layout, Menu } from 'antd';
const { Header } = Layout;

import styled from 'styled-components';

const HeaderWrapper = styled(Header)`
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
    {
        display: flex;
        margin-bottom: 24px;
    
        & .logo {
            display: flex;
            align-content: center;
            justify-content: center;
            margin-right: 25px!important;
            font-family: Caveat, sans-serif;
            font-size: 28px;
            color: #fff;
            user-select: none;
            transform: skewY(170deg);
        }
    
        & .nav {
            margin: 0 0 0 16px!important;
        }
    }
`;


export const Navigation = () => {
    return (
        <HeaderWrapper>
            <p className = 'logo'>Movie App</p>
            <Menu
                theme = 'dark'
                className = 'nav'
                mode = 'horizontal'
                defaultSelectedKeys = { ['/'] }
                selectedKeys = { [location.pathname] }>
                <Menu.Item key = '/'>
                    <NavLink to = '/'>
                        Главная
                    </NavLink>
                </Menu.Item>

                <Menu.Item key = '/films'>
                    <NavLink to = '/top-rated-films'>
                        Фильмы
                    </NavLink>
                </Menu.Item>

                <Menu.Item key = '/popular-films'>
                    <NavLink to = '/popular-films'>
                        Популярные фильмы
                    </NavLink>
                </Menu.Item>

                <Menu.Item key = '/top-rated-films'>
                    <NavLink to = '/top-rated-films'>
                            Трендовые фильмы
                    </NavLink>
                </Menu.Item>

                <Menu.Item key = '/latest-films' >
                    <NavLink to = '/latest-films'>
                        Последние
                    </NavLink>
                </Menu.Item>
            </Menu>
        </HeaderWrapper>
    );
};

