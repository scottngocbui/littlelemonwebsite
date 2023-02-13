function ReservationForm() {
    return (
            <form>
                <label>
                    <select>
                        <option value="" disabled selected>Party Size</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </label>
                <br />
                <label>
                    <input
                        type="date"
                        placeholder="date"
                    />
                </label>
                <br />
                <label>
                    <input
                        type="time"
                        placeholder="time"
                    />
                </label>
                <br />
                <label>
                    <select>
                        <option value="" disabled selected>Occasion</option>
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                    </select>
                </label>
                <br />
                <label>
                    <input
                        type="text"
                        placeholder="First Name"
                    />
                </label>
                <br />
                <label>
                    <input
                        type="text"
                        placeholder="Last Name"
                    />
                </label>
                <br />
                <label>
                    <input
                        type="text"
                        placeholder="Email"
                    />
                </label>
                <br />
                <label>
                    <input
                        type="text"
                        placeholder="Phone Number"
                    />
                </label>
            </form>

    );
}

export default ReservationForm;