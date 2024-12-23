import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

  
        if (!formData.name.trim()) {
            newErrors.name = "Nama harus diisi";
        }


        if (!formData.email.trim()) {
            newErrors.email = "Email harus diisi";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Format email tidak valid";
        }

        // Validasi pesan
        if (!formData.message.trim()) {
            newErrors.message = "Pesan harus diisi";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Pesan minimal 10 karakter";
        }

        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            // Form valid, show submitted state
            setSubmitted(true);
        } else {
            // Form invalid, show errors
            setErrors(newErrors);
        }
    };

    const formStyles = {
        maxWidth: "500px",
        margin: "0 auto",
        padding: "2rem",
    };

    return (
        <div style={formStyles}>
            <h2 className="form-title">Contact Us</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nama</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? "error-input" : ""}
                        />
                        {errors.name && (
                            <span className="error-message">{errors.name}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "error-input" : ""}
                        />
                        {errors.email && (
                            <span className="error-message">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Pesan</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className={errors.message ? "error-input" : ""}
                        />
                        {errors.message && (
                            <span className="error-message">
                                {errors.message}
                            </span>
                        )}
                    </div>

                    <button type="submit" className="submit-button">
                        Kirim Pesan
                    </button>
                </form>
            ) : (
                <div className="submission-result">
                    <h3>Terima kasih atas pesan Anda!</h3>
                    <div className="result-data">
                        <p>
                            <strong>Nama:</strong> {formData.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {formData.email}
                        </p>
                        <p>
                            <strong>Pesan:</strong> {formData.message}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
