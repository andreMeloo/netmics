export default ({ item }) => {
    let description = '';
    if (item.description != null) {
        description = item.description
    }
    if (description.length > 250) {
        description = description.substring(0, 250) + '...'
    }

    return (
        <section className={`bg-cover bg-center h-screen`} style={{ backgroundImage: `url(${item.thumbnail.path}.jpg)` }}>
            <div className="w-inherit h-inherit bg-gradient-to-t from-backGradientTop to-transparent90">
                <div className="w-inherit h-inherit bg-gradient-to-r from-backGradientSide to-transparent70 flex flex-col justify-center pt-[70px] pr-0 pb-[150px] pl-[30px]">
                    <div className="text-6xl font-bold">
                        {item.title}
                    </div>
                    <div className="text-[18px] font-bold mt-4">
                        <div className="inline-block mr-4 text-price">
                            {item.prices[0].price > 0
                                ?
                                `Preço: R$${item.prices[0].price}`
                                :
                                ''
                            }
                        </div>
                        <div className="inline-block mr-4">
                            {item.pageCount > 0 ? `${item.pageCount} Páginas` : ''}
                        </div>
                    </div>
                    <div className="mt-4 text-[20px] text-[#999] max-w-[40%]">
                        {description}
                    </div>
                    <div className="mt-4">
                        <a className="inline-block text-[20px] font-bold py-3 px-6 rounded-md no-underline mr-[10px] opacity-100 transition-all ease-in-out delay-70s hover:opacity-70 bg-white text-black"
                            href="/" target="_blank" rel="noopener noreferrer">▤ Detalhes</a>
                        <a className="inline-block text-[20px] font-bold py-3 px-6 rounded-md no-underline mr-[10px] opacity-100 transition-all ease-in-out delay-70s hover:opacity-70 bg-black text-white"
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer">✈ Solicitar</a>
                    </div>
                    <div className="mt-4 text-[18px] text-[#999]">
                        Modelo: {item.format}
                    </div>
                </div>
            </div>
        </section>
    )
}