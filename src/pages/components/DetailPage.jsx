const DetailPage = (props) => {
    console.log(props)

    return (
    <>
        <div className="container my-2">
            <h1 className="text-center">Detail Tugas</h1>
            <p className="text-center"> Contoh pake params </p>
            <br />

            <h5>Detail tugas : {props.location.state.data.title}</h5>
            <h5>Status : {props.location.state.data.completed ? "Selesai" : "Belum selesai" }</h5>

        </div>
    </>
    )

}
export default DetailPage;