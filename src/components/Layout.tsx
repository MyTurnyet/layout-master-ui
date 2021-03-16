import React, {ReactElement} from "react";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import {PageProps} from "pages/App";
import {Route, Switch} from "react-router-dom";
import AboutPage from "pages/AboutPage";
import Header from "components/Header";
import HomePage from "pages/HomePage";
import NavBar, {NavBarProps} from "components/NavBar";

// import 'components/Layout.scss'
import "pages/index.scss"
import Dashboard from "pages/admin/Dashboard";
import styled, {ThemeProvider} from "styled-components";
import defaultTheme from "../theme/theme";

const StyledLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

const Content= styled.div(props => `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    background: ${props.theme.colors.secondary.color};
    color: ${props.theme.colors.secondary.on_background};
    
    font-family: ${props.theme.font.core};
`);

class Layout extends React.Component<PageProps> {

    navBarProps: NavBarProps = {
        buttons: [
            {
                icon: "house-user",
                path: "/",
                label: "Home"
            },
            {
                path: "/about",
                label: "About",
                icon: "info-circle"
            },
            {
                path: "/admin/dashboard",
                label: "Admin",
                icon: "cogs"
            }
        ]
    }

    constructor(props: PageProps) {
        super(props);
        library.add(fas)
    }

    render(): ReactElement {
        return (
            <ThemeProvider theme={defaultTheme}>
                <StyledLayout >
                    <Header siteName={this.props.siteName}/>
                    <Content>
                        <Switch>
                            <Route exact={true} path={'/'} component={HomePage}/>
                            <Route exact={true} path={'/about'} component={AboutPage}/>
                            <Route exact={false} path={'/admin/dashboard'} component={Dashboard}/>
                        </Switch>
                    </Content>
                    <NavBar {...this.navBarProps}/>
                </StyledLayout>
            </ThemeProvider>
        );
    }
}


export default Layout;

