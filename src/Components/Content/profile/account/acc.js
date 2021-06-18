import profileClass from './account.module.css'

const Acc = () => {
    return (
        <div className={profileClass.profile}>
            <img alt="" className={profileClass.accHeader} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
            <img alt="" className={profileClass.avatar} src="https://html5css.ru/howto/img_avatar2.png" />
            <div className="info">
                <p className={profileClass.name} >Name</p>
                <p className={profileClass.name}>Surname</p>
                <p>Some Text</p>
                <p>Some date</p>
            </div>
        </div>
    )
}



export default Acc