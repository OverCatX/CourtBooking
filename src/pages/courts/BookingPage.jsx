import PropTypes from 'prop-types'

export default function BookingPage({booking_id}) {
    return (
        <>
        <img src={booking_id}></img>
        </>
    )
}

BookingPage.propTypes = {
    booking_id: PropTypes.string
}