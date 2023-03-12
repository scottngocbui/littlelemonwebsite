import ReservationForm from "../../components/Form/ReservationForm";
import "./Reservations.css"
import toast, { Toaster } from 'react-hot-toast';

function ReservationPage() {
    return (
        <div className="Reservation">
            <Toaster />
            <ReservationForm/>
        </div>
    );
}

export default ReservationPage;