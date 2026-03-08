import { Link } from "react-router-dom";
import './ReadyListsLinks.css'

function ReadyListsLinks() {
    return (
        <div className="ready-lists-container">
            <h3>רשימות מוכנות - לחץ כדי לראות</h3>
            <nav className="ready-links">
                <Link to="/EditCooking" className="ready-link">🍳 רשימת בישול</Link>
                <Link to="/TaskReadyList" className="ready-link">✓ רשימת משימות</Link>
                <Link to="/ShopingReadyList" className="ready-link">🛒 רשימת קניות</Link>
            </nav>
        </div>
    );
}

export default ReadyListsLinks;
