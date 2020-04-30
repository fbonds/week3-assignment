import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';


class VacationRental extends React.Component {
    static propTypes = {
        vacationObj: PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location: PropTypes.shape({
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired
            }),
            payment: PropTypes.shape({
                cost: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired
            }),
            host: PropTypes.shape({
                name: PropTypes.string.isRequired,
                isSuperHost: PropTypes.bool.isRequired
            }),
            rating: PropTypes.shape({
                stars: PropTypes.number.isRequired,
                reviews: PropTypes.number.isRequired
            })
        })
    }

    state = { count: 0, total: 0 }

    handleAddToCart = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState({ total: this.state.count * this.props.payment.price })
    }

    handleEmptyCart = () => {
        this.setState({ count: this.state.count - 1 })
        this.setState({ total: this.state.total - this.props.payment.price })
    }
    

    render() {
        console.log(this.state.total)
        return (
            <div>
                <h3>{this.props.title} ({this.props.houseType})</h3>
                <p><b>{this.props.rating.stars}</b><FaStar />'s ({this.props.rating.reviews} reviews) ---- Cost: ${this.props.payment.cost}</p>
                <p className={this.props.host.isSuperhost === false ? 'hide-element' : 'show-element'}><b><u>{this.props.host.name}</u></b> is a Super Host!</p>
                <img className="propertyImage" alt="property pic" src={this.props.image} />
                <br></br><br></br><br></br>
            </div>

        );
    }
}

export default VacationRental;
