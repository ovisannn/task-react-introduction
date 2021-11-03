import style from "./Button.module.css"

export default function Button ({data}) {
    return (
        <>
            <div className={style.container}>
                <button className={style.box1} style={data.completed ? {backgroundColor:'red'} : {}}>
                    <p className={style.textDesc} style={data.completed ? {textDecoration:'line-through'} : {}}>
                        {data.title}
                    </p>
                </button>
            </div>
        </>
    )

}