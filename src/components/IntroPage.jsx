import React from "react";
import { Button } from "react-bootstrap";
import "./IntroPage.css";

function IntroPage(){
    return (
        <div className = "intropage">
            <div className="introtext">
            <h1>Double the hires, half the effort</h1>
            <p>Open conversations and nurture relationships at scale and be the first choice when your ideal candidate is ready to explore.</p>
            <Button>View Kola Outreach</Button>
            </div>

        </div>
    );
}

export default IntroPage;