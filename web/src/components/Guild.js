const Guild = ({guild}) => {
    return (
        <div className="card text-center col-3 p-3 nq-card">
            <img
                src={guild.icon !== null ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : 'https://i.imgur.com/2X6ZRmm.png'}
                className="card-img-top w-50 mx-auto"
            />
            <div className="card-body">
                <h5 className="card-title">{guild.name}</h5>
            </div>
        </div>
    )
}

export default Guild