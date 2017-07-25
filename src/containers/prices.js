import React from "react";

class Prices extends React.Component {
    render() {
        return (
      
            <div className="row" id="pricing">

                <h1 className="now-playing text-center">Pricing</h1>
                <hr/>

                <div className="col-md-4 col-md-offset-2 col-sm-12 ">

                    <h3 className="pricing-list text-center">2D Ticket Pricing</h3>
                    <div className="prices-div center-block price-block">
                        <p>Child (3-11)
                            <span className="pull-right">$6.50</span>
                        </p>
                        <p>Senior (60+)
                            <span className="pull-right">$6.50</span>
                        </p>
                        <p>Adult
                            <span className="pull-right">$8.50</span>
                        </p>
                        <p>Adult Matinee
                            <span className="pull-right">$7.50</span>
                        </p>
                        <p>Infant
                            <span className="pull-right">Free</span>
                        </p>
                    </div>

                </div>
                <div className="col-md-4  col-sm-12 ">
                    <h3 className="pricing-list text-center">3D Ticket Pricing</h3>
                    <div className="prices-div center-block">
                        <p>Child (3-11)
                            <span className="pull-right">$7.50</span>
                        </p>
                        <p>Senior (60+)
                            <span className="pull-right">$7.50</span>
                        </p>
                        <p>Adult
                            <span className="pull-right">$9.50</span>
                        </p>
                        <p>Adult Matinee
                            <span className="pull-right">$8.50</span>
                        </p>
                        <p>Infant
                            <span className="pull-right">Free</span>
                        </p>
                    </div>

                </div>
            </div>

        );
    }
}

export default Prices;