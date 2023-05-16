export function Usp() {
    return (
        <div>
            <header style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <p style={{ fontSize: "35px" }}>
                        Wheels of{" "}
                        <span style={{ color: "orangered", fontWeight: "700" }}>
                            Fortune
                        </span>
                    </p>
                </div>
                <nav>
                    <Link className="linksTag" to="/Login1">
                        Login
                    </Link>
                    <Link className="linksTag" to="/Login1">
                        Whislist
                    </Link>
                    <Link className="linksTag" to="/Login1">
                        Cart
                    </Link>
                </nav>
            </header>
        </div>
    );
}
