import React, { useState } from "react";
import Modal from "../components/Modal";

function PhoneVerification() {
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setVerificationCode(value);
    }
  };

  return (
    <Modal title="Verify Your Phone Number">
      <form>
        {/* Message with directions for verification */}
        <div className="mb-4">
          <p className="text-gray-700">
            Enter the verification code sent to your phone number.
          </p>
        </div>

        {/* Verification Code */}
        <div>
          <label htmlFor="verificationCode" className="block mb-2 font-medium text-gray-700">
            Verification Code
          </label>
          <input
            type="text"
            id="verificationCode"
            value={verificationCode}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            pattern="\d*"
            inputMode="numeric"
            required
          />
        </div>

        {/* Verify Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-colors"
          >
            Verify
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default PhoneVerification;
