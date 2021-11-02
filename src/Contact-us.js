import './style.css'
import logo from './img/logo-ALTA-v2.png'


function Contact() {
    return (
        <div>
            <section className="container-fluid" id="contact">
                <div className="row">
                    <div className="col-md-5 m-0 p-0">
                        <div className="image-form">
                            <div className="image-fill">
                                <div className="image-logo">
                                    <img src={logo} alt="" width="95%" />\
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 text-right motto-top-img">
                        <div className="container" style={{ marginTop: '100px' }}>
                            <form className="px-5">
                                <h2 style={{ fontSize: '28px', fontWeight: 400 }}>Contact us</h2>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name<p style={{ color: 'red', fontWeight: 'bold', display: 'inline' }}>*</p> </label>
                                    <input type="text" className="form-control" id="fullName" aria-describedby="emailHelp" placeholder="Enter email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailaddres">Email Address<p style={{ color: 'red', fontWeight: 'bold', display: 'inline' }}>*</p> </label>
                                    <input type="email" className="form-control" id="emailaddres" aria-describedby="emailHelp" placeholder="example@domail.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNum">Phone Number<p style={{ color: 'red', fontWeight: 'bold', display: 'inline' }}>*</p> </label>
                                    <input type="number" className="form-control" id="phoneNum" aria-describedby="emailHelp" placeholder="08573890xxxxx" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Nationality</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Selected</option>
                                        <option value={1}>Indonesia</option>
                                        <option value={2}>Malaysia</option>
                                        <option value={3}>Singapore</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Message</label>
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} defaultValue={""} />
                                </div>
                                <br />
                                <button type="submit" className="btn rounded-pill px-4 py-2 font-weight-normal" style={{ backgroundColor: '#F47522', color: '#ffff' }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;
