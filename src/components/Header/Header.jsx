export default function Header({black}){
    const headerBlack = 'fixed z-50 top-0 left-0 right-0 h-logo flex justify-between items-center pt-0 px-7 bg-transparent transition-all ease-in-out delay-70s bg-headerBlack'

    return (
        <header className={black ? headerBlack : 'fixed z-50 top-0 left-0 right-0 h-logo flex justify-between items-center pt-0 px-7 bg-transparent transition-all ease-in-out delay-70s'}>
            <div className="h-6">
                <a href="/">
                    <img className="h-full" src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4-1.png" alt="Marvel logo" />
                </a>
            </div>
            <div className="h-9">
                <a href="/">
                    <img className="h-full" src="https://cdn-icons-png.flaticon.com/512/847/847969.png" />
                </a>
            </div>
        </header>
    )
}