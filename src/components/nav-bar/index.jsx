function NavBar() {
    return (
        <div className="h-10 lg:hidden fixed bottom-0 z-[5] bg-orange-500 w-full">
            <div className="flex justify-around m-auto container">
                <a className="text-white font-bold text-xs leading-10" href="#about">ABOUT</a>
                <a className="text-white font-bold text-xs leading-10" href="#skill">SKILL</a>
                <a className="text-white font-bold text-xs leading-10" href="#experience">EXPERIENCE</a>
                <a className="text-white font-bold text-xs leading-10" href="#projects">PROJECT</a>
                <a className="text-white font-bold text-xs leading-10" href="#contact">CONTACT</a>
            </div>
        </div>
    );
}

export default NavBar;