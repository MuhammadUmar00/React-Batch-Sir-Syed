import React from "react";
import { connect } from "react-redux";
import Cart from "../Cart";

function Home() {
  return (
    <Cart />
    // <Main>
    //   <Nav>
    //     <div></div>
    //   </Nav>

    //   <Section>
    //     <Aside>
    //       <div></div>
    //     </Aside>
    //     <Content>
    //       <div></div>
    //     </Content>
    //   </Section>

    //   <Footer>
    //     <div></div>
    //   </Footer>
    // </Main>
  );
}

export default connect(
  (state) => {
    console.log("State recieved to Home Component", state);
    return {};
  }, // map state to props
  (props) => {
    console.log("Props recieved to Home Component", props);
    return {};
  } // map dispatch to props
)(Home);
