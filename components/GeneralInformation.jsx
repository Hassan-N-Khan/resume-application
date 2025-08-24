import "../styles/GeneralInformation.css";

function GeneralInformation({setGeneralInformation,generalInformation}){
    const handleChange = (e) => {
        setGeneralInformation((prev)=>({
            ...prev,
            [e.target.name]:e.target.value,
        }));
    }
    return (
        <div className="general-information">
            <h2>General Information</h2>
            <form>
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" className="first-name" value={generalInformation.firstName} name="firstName" required onChange={handleChange}></input>
                
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" className="last-name" value={generalInformation.lastName} name="lastName" required onChange={handleChange} ></input>

                <label for="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" className="phone-number" value={generalInformation.phoneNumber} name="phoneNumber" required onChange={handleChange} pattern="[0-9]{10}" title="Please enter a 10-digit phone number"  ></input>
                
                <label for="email-address">Email Address</label>
                <input type="email" id="email-address" className="email-address" value={generalInformation.emailAddress} name="emailAddress" required onChange={handleChange}></input>

                <label for="city">City</label>
                <input type="text" id="city" className="city" placeholder="Enter City" value={generalInformation.city} name="city" required onChange={handleChange} ></input>
            </form>
        </div>
    )
}

export default GeneralInformation;