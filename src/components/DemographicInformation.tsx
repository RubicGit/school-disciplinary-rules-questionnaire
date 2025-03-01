import React from 'react';

const DemographicInformation: React.FC = () => {
    return (
        <div>
            <h1>Demographic Information</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DemographicInformation;