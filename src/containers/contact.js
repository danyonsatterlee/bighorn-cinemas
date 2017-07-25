import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="row">

                <div className="col-sm-12" id="contact">
                    <h1 className="now-playing text-center">Contact</h1>
                    <hr/>

                    <iframe
                        className="center-block"
                        width="60%"
                        height="500px"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Big+Horn+Cinemas,+Big+Horn+Avenue,+Cody,+WY&amp;aq=0&amp;oq=Big+Horn+Cinemas&amp;sll=43.000325,-107.554567&amp;sspn=7.254791,16.907959&amp;ie=UTF8&amp;hq=Big+Horn+Cinemas,&amp;hnear=Big+Horn+Ave,+Cody,+Park,+Wyoming+82414&amp;t=m&amp;cid=365397258242220038&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-2 col-sm-12 ">

                            <h3 className="pricing-list text-center">Phone</h3>
                            <div className="phone-div center-block">
                                <p>Movie Line
                                    <span className="pull-right">(307) 587-8001</span>
                                </p>
                                <p>Box Office<span className="pull-right">(307) 587-8009</span>
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4  col-sm-12 ">
                            <h3 className="pricing-list text-center">Address</h3>
                            <div className="address-div center-block">
                                <p className="">2525 Big Horn Ave.
                                </p>
                                <p>Cody, WY 82414
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

         );
    }
}
export default Contact;