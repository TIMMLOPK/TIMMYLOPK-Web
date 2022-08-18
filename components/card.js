const Card = ({ icons, name, description }) => {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 min-h-full">
            <div className="shrink-0">
                {icons}
            </div>
            <div>
                <div className="text-xl font-medium text-black">{name}</div>
                <p className="text-slate-500">{description}</p>
            </div>
        </div>
    )
}

export default Card;