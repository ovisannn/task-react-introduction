const DetailPage = (props) => {
    console.log(props)
    const {id, title, complete} = props;

    return (
    <>
        <div className="container my-2">
            <h1 className="text-center">Detail Tugas</h1>
            <br />

            <h5>Detail tugas : {props.match.params.nama}</h5>

        </div>
    </>
    )
    
}
export default DetailPage;