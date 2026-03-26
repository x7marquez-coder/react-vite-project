import theAvatar from './assets/react.svg' 
export function TwitterFollowCard ( { userName, name} ) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='avatar'
                src={theAvatar} 
                alt="Avatar Prueba" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCar-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}


    