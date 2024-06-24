import Logo from "../assets/logo-main.png"
function Navbar() {

    return(
        <div>
            <nav className="relative inline-block w-full align-top h-[91px] bg-transparent z-50">
                <div className="relative px-[50px] mt-[30px] flex items-stretch justify-center">
                    <div className="flex items-center justify-start w-full h-full">
                        <ul className=" items-center h-full list-none">
                            <li>
                                <a>
                                    <span>Home</span>
                                </a>
                             </li>
                            <li>
                                <a>
                                    <span>Menu</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>Pages</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>Shop</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a>
                        <img src={Logo}/>
                    </a>
                    <div>
                        <div>
                            <a>
                                <span>Book a Table</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;